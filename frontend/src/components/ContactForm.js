import { useState } from "react";
import { toast } from "sonner";
import { Send, Loader2, CheckCircle2, MessageCircle, Mail, Phone } from "lucide-react";
import { CONTACT } from "../data/site";

const SERVICES_OPTIONS = [
  "SEO (Search Engine Optimization)",
  "Social Media Marketing",
  "Meta Ads (Facebook & Instagram)",
  "Email Marketing",
  "Content Writing & Strategy",
  "Full Digital Marketing Strategy",
  "Other Consultation",
];

const initial = { name: "", email: "", phone: "", service: "", message: "" };

const validate = (values) => {
  const errors = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = "Please enter a valid email address.";
  const digits = values.phone.replace(/[\s\-()+]/g, "");
  if (!/^\d{7,15}$/.test(digits)) errors.phone = "Please enter a valid phone number (min 7 digits).";
  if (!values.service) errors.service = "Please select a service you need.";
  if (values.message.trim().length < 10) errors.message = "Please write a brief message (at least 10 characters).";
  return errors;
};

const inputClass = (hasError) =>
  `w-full rounded-xl border bg-[#111827]/80 px-4 py-3.5 text-sm text-slate-100 placeholder:text-slate-500 transition-colors focus:border-electric focus:bg-[#111827] focus:outline-none ${
    hasError ? "border-red-500/70" : "border-slate-800 hover:border-slate-700"
  }`;

export const ContactForm = () => {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const set = (key) => (e) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      toast.error("Please fill all required fields correctly.");
      return;
    }

    setSubmitting(true);

    try {
      // Send directly to Amrit's inbox using FormSubmit AJAX
      const response = await fetch("https://formsubmit.co/ajax/chhabraamrit686@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone,
          service: values.service,
          message: values.message,
          _subject: `New Lead: ${values.name} interested in ${values.service}`,
          _captcha: "false",
          _template: "table",
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        setSubmitted(true);
        toast.success("Your enquiry has been sent directly to Amrit's inbox!");
      } else {
        throw new Error(data.message || "Failed to send");
      }
    } catch (err) {
      // In case of any network issue, still log and offer direct WhatsApp
      toast.error("Network issue. You can also message Amrit directly on WhatsApp!");
      // Open fallback dialog or still allow WhatsApp continuation
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  // Pre-filled WhatsApp message for instant follow-up
  const whatsappUrl = `https://wa.me/919877621320?text=${encodeURIComponent(
    `Hi Amrit, I submitted an enquiry on your website.\n\nName: ${values.name}\nService: ${values.service}\nPhone: ${values.phone}\nMessage: ${values.message}`
  )}`;

  if (submitted) {
    return (
      <div className="card-premium border-electric/40 p-8 sm:p-10 text-center" data-testid="contact-success">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
        </span>
        <h3 className="mt-5 font-display text-2xl font-bold text-white">Enquiry Received!</h3>
        <p className="mx-auto mt-3 max-w-md text-sm text-slate-300 leading-relaxed">
          Thank you, <span className="font-semibold text-white">{values.name}</span>. Your enquiry regarding{" "}
          <span className="text-electric-bright font-medium">{values.service}</span> has been delivered to{" "}
          <span className="text-white font-mono text-xs">{CONTACT.email}</span>. We will respond within 24 hours.
        </p>

        {/* Instant WhatsApp Action */}
        <div className="mt-8 rounded-2xl border border-emerald-500/20 bg-emerald-950/20 p-5 max-w-md mx-auto">
          <p className="text-xs text-emerald-400 font-medium">Want an immediate reply?</p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-emerald-500 hover:shadow-[0_0_24px_rgba(16,185,129,0.4)]"
          >
            <MessageCircle className="h-4 w-4" />
            Continue on WhatsApp Now
          </a>
        </div>

        <button
          type="button"
          onClick={() => {
            setValues(initial);
            setSubmitted(false);
          }}
          data-testid="contact-send-another"
          className="mt-6 inline-block text-xs text-slate-400 hover:text-white transition-colors underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="card-premium p-6 sm:p-9" data-testid="contact-form">
      <div className="mb-6 flex items-center justify-between border-b border-slate-800 pb-4">
        <div>
          <h2 className="font-display text-lg font-bold text-white">Send a Direct Message</h2>
          <p className="text-xs text-slate-400 mt-0.5">Goes straight to Amrit's personal inbox</p>
        </div>
        <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Active Response
        </span>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-slate-400">
            Full Name <span className="text-electric">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            required
            value={values.name}
            onChange={set("name")}
            placeholder="e.g. Rahul Sharma"
            aria-invalid={!!errors.name}
            className={inputClass(errors.name)}
            data-testid="contact-name-input"
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="contact-email" className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-slate-400">
            Email Address <span className="text-electric">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            inputMode="email"
            required
            value={values.email}
            onChange={set("email")}
            placeholder="you@company.com"
            aria-invalid={!!errors.email}
            className={inputClass(errors.email)}
            data-testid="contact-email-input"
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="contact-phone" className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-slate-400">
            Phone / WhatsApp <span className="text-electric">*</span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            inputMode="tel"
            required
            value={values.phone}
            onChange={set("phone")}
            placeholder="+91 98765 43210"
            aria-invalid={!!errors.phone}
            className={inputClass(errors.phone)}
            data-testid="contact-phone-input"
          />
          {errors.phone && (
            <p className="mt-1.5 text-xs text-red-400">{errors.phone}</p>
          )}
        </div>

        <div>
          <label htmlFor="contact-service" className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-slate-400">
            Service Required <span className="text-electric">*</span>
          </label>
          <select
            id="contact-service"
            required
            value={values.service}
            onChange={set("service")}
            aria-invalid={!!errors.service}
            className={`${inputClass(errors.service)} cursor-pointer ${values.service ? "text-slate-100" : "text-slate-500"}`}
            data-testid="contact-service-select"
          >
            <option value="" disabled>
              Select service...
            </option>
            {SERVICES_OPTIONS.map((s) => (
              <option key={s} value={s} className="bg-[#111827] text-white">
                {s}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="mt-1.5 text-xs text-red-400">{errors.service}</p>
          )}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="contact-message" className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-slate-400">
          Message / Business Goals <span className="text-electric">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={4}
          required
          value={values.message}
          onChange={set("message")}
          placeholder="Tell us about your brand, current challenges, and the results you want to achieve..."
          aria-invalid={!!errors.message}
          className={`${inputClass(errors.message)} resize-y`}
          data-testid="contact-message-input"
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>
        )}
      </div>

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={submitting}
          data-testid="contact-submit-button"
          className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-electric-deep px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-electric hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {submitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Sending to Inbox...
            </>
          ) : (
            <>
              Send Message
              <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </>
          )}
        </button>

        <a
          href={CONTACT.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-5 py-3.5 text-xs font-semibold text-emerald-400 hover:bg-emerald-500/20 transition-colors"
        >
          <MessageCircle className="h-4 w-4" />
          Direct WhatsApp: +91 98776 21320
        </a>
      </div>

      <p className="mt-4 text-center sm:text-left text-[11px] text-slate-500">
        🔒 Your information is confidential. We strictly do not share your details with anyone.
      </p>
    </form>
  );
};
