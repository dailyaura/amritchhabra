from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import re
import ipaddress
import logging
import uuid
import httpx
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr, field_validator
from datetime import datetime, timezone
from html import escape
from html.parser import HTMLParser
from urllib.parse import urlparse

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")

EMAIL_BASE_URL = "https://integrations.emergentagent.com"
EMAIL_KEY = os.environ["EMERGENT_EMAIL_KEY"]
EMAIL_FROM_NAME = os.environ["EMAIL_FROM_NAME"]
OWNER_EMAIL = os.environ["OWNER_EMAIL"]
EMAIL_REPLY_TO = os.environ.get("EMAIL_REPLY_TO")

logger = logging.getLogger(__name__)

_SHORTENERS = ("bit.ly", "tinyurl.com", "t.co", "is.gd", "cutt.ly", "goo.gl", "rebrand.ly")
_CRED_ASK = ("reply with your password", "reply with the code", "send your password", "cvv",
             "send us your password", "enter your password below", "confirm your card number",
             "your full card number", "seed phrase", "recovery phrase", "verify your card",
             "social security number", "confirm your bank details")
_HOSTISH = re.compile(r"\b(?:https?://)?((?:[a-z0-9-]+\.)+[a-z]{2,})", re.I)


def _host_ok(host: str) -> bool:
    if not host or "xn--" in host:
        return False
    try:
        ipaddress.ip_address(host)
        return False
    except ValueError:
        pass
    return not any(host == s or host.endswith("." + s) for s in _SHORTENERS)


def _same_site(shown: str, real: str) -> bool:
    return shown == real or real.endswith("." + shown) or shown.endswith("." + real)


class _EmailScan(HTMLParser):
    def __init__(self):
        super().__init__()
        self.tags, self.urls, self.anchors = set(), [], []
        self._href, self._text = None, []

    def handle_starttag(self, tag, attrs):
        self.tags.add(tag.lower())
        self.urls += [v for k, v in attrs if k.lower() in ("href", "src") and v]
        if tag.lower() == "a":
            self._href = dict((k.lower(), v) for k, v in attrs).get("href")
            self._text = []

    def handle_data(self, data):
        if self._href is not None:
            self._text.append(data)

    def handle_endtag(self, tag):
        if tag.lower() == "a" and self._href is not None:
            self.anchors.append((self._href, "".join(self._text)))
            self._href, self._text = None, []


def _assert_safe_email(subject: str, html: str) -> None:
    scan = _EmailScan()
    scan.feed(html)
    if scan.tags & {"form", "input", "textarea", "select"}:
        raise ValueError("No forms or input fields in email (G2)")
    body = f"{subject}\n{html}".lower()
    for p in _CRED_ASK:
        if p in body:
            raise ValueError(f"Email asks the recipient for credentials: {p!r} (G2)")
    for url in scan.urls:
        low = url.strip().lower()
        if low.startswith(("mailto:", "tel:", "cid:", "#")):
            continue
        if not low.startswith("https://"):
            raise ValueError(f"Email links/assets must be absolute https: {url!r} (G3)")
        host = urlparse(low).hostname or ""
        if not _host_ok(host) or urlparse(low).username is not None:
            raise ValueError(f"Shortened, numeric-host or credential-bearing URL: {url!r} (G3)")
    for href, text in scan.anchors:
        real = urlparse(href.strip().lower()).hostname or ""
        if not real:
            continue
        for m in _HOSTISH.finditer(text):
            if not _same_site(m.group(1).lower(), real):
                raise ValueError(f"Anchor text {m.group(1)!r} != real link host {real!r} (G3)")


async def send_email(*, to: str, subject: str, html: str, reply_to: str | None = None) -> str | None:
    _assert_safe_email(subject, html)
    payload = {"to": [to], "subject": subject, "html": html, "from_name": EMAIL_FROM_NAME}
    if reply_to or EMAIL_REPLY_TO:
        payload["contact_email"] = reply_to or EMAIL_REPLY_TO
    try:
        async with httpx.AsyncClient(timeout=30) as client_http:
            resp = await client_http.post(
                f"{EMAIL_BASE_URL}/api/v1/email/send",
                headers={"X-Email-Key": EMAIL_KEY},
                json=payload,
            )
        resp.raise_for_status()
        return resp.json().get("id")
    except httpx.HTTPStatusError as e:
        logger.error(f"Email send failed: {e.response.status_code} {e.response.text}")
        raise HTTPException(status_code=502, detail="Failed to send email")
    except Exception as e:
        logger.error(f"Email send error: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to send email")


ALLOWED_SERVICES = [
    "SEO",
    "Social Media",
    "Meta Ads",
    "Email Marketing",
    "Content Writing",
    "Digital Marketing",
    "Other",
]


class ContactRequest(BaseModel):
    name: str = Field(min_length=2, max_length=120)
    email: EmailStr
    phone: str = Field(min_length=7, max_length=20)
    service: str
    message: str = Field(min_length=10, max_length=5000)

    @field_validator("phone")
    @classmethod
    def phone_digits(cls, v: str) -> str:
        cleaned = re.sub(r"[\s\-()+]", "", v)
        if not cleaned.isdigit() or not (7 <= len(cleaned) <= 15):
            raise ValueError("Enter a valid phone number")
        return v.strip()

    @field_validator("service")
    @classmethod
    def service_allowed(cls, v: str) -> str:
        if v not in ALLOWED_SERVICES:
            raise ValueError("Select a valid service")
        return v

    @field_validator("name", "message")
    @classmethod
    def strip_text(cls, v: str) -> str:
        return v.strip()


@api_router.get("/")
async def root():
    return {"message": "Amrit Chhabra Portfolio API"}


@api_router.post("/contact")
async def submit_contact(payload: ContactRequest):
    doc = {
        "id": str(uuid.uuid4()),
        "name": payload.name,
        "email": payload.email,
        "phone": payload.phone,
        "service": payload.service,
        "message": payload.message,
        "created_at": datetime.now(timezone.utc).isoformat(),
    }
    await db.enquiries.insert_one(doc)

    subject = f"New portfolio enquiry: {payload.service}"
    rows = "".join(
        f'<tr><td style="padding:8px 16px 8px 0;color:#9ca3af;font-size:13px;vertical-align:top">{label}</td>'
        f'<td style="padding:8px 0;color:#f9fafb;font-size:14px">{value}</td></tr>'
        for label, value in [
            ("Name", escape(payload.name)),
            ("Email", escape(payload.email)),
            ("Phone", escape(payload.phone)),
            ("Service", escape(payload.service)),
        ]
    )
    html = (
        '<table role="presentation" width="100%" style="background:#030712;padding:32px 0">'
        '<tr><td align="center">'
        '<table role="presentation" width="560" style="background:#0b0f19;border:1px solid #1e293b;'
        'border-radius:12px;padding:32px;font-family:Arial,sans-serif">'
        f'<tr><td><p style="color:#38bdf8;font-size:12px;letter-spacing:2px;text-transform:uppercase;margin:0 0 8px">'
        f'{escape(EMAIL_FROM_NAME)}</p>'
        f'<h1 style="color:#f9fafb;font-size:20px;margin:0 0 24px">New enquiry: {escape(payload.service)}</h1>'
        f'<table role="presentation" width="100%">{rows}</table>'
        f'<p style="color:#9ca3af;font-size:13px;margin:24px 0 4px">Message</p>'
        f'<p style="color:#f9fafb;font-size:14px;line-height:1.6;white-space:pre-wrap">{escape(payload.message)}</p>'
        f'<p style="color:#6b7280;font-size:12px;margin:32px 0 0">Sent by {escape(EMAIL_FROM_NAME)} contact form. '
        'We never ask for your password or card details by email.</p>'
        '</td></tr></table></td></tr></table>'
    )

    email_sent = True
    try:
        await send_email(to=OWNER_EMAIL, subject=subject, html=html)
    except HTTPException:
        email_sent = False

    return {"status": "success", "id": doc["id"], "email_sent": email_sent}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
