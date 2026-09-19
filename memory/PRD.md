# PRD: Amrit Chhabra - Premium Digital Marketing Portfolio

## Original Problem Statement
Build a complete, production-quality, premium personal brand portfolio for Amrit Chhabra, Digital Marketing Professional, Founder of DailyAura.in. Dark premium black + electric blue design. Storytelling: Strategy > Execution > Performance > Evidence > Growth. Real evidence only (GSC, Meta Business Suite, Meta Ads screenshots as source of truth), no fabricated data, no client identities, no phone mockups, no long dash character, no fake social links. 9 pages: Home, About, SEO, Social Media, Meta Ads, Email Marketing, Content Writing, Results, Contact. User requested: crop GSC screenshots so client domains do not appear, attractive favicon, all GSC results confirmed available.

## Architecture
- Frontend: React 19 + react-router-dom 7, Tailwind, framer-motion (scroll reveals, masked hero line reveal, parallax), lenis (smooth scrolling), sonner toasts. Reusable components in /app/frontend/src/components/ (Navbar, Footer, PageHero, SectionHeading, ServiceCard, MetricCard, Evidence/Lightbox, EvidenceShowcase, ProcessTimeline, SectorGrid, Marquee, CTASection, ContactForm, GrowthSystem, FounderSection, Seo, RelatedServices, Reveal). All content/evidence data centralized in /app/frontend/src/data/site.js for easy updates.
- Backend: FastAPI + MongoDB (motor). POST /api/contact validates (pydantic v2), stores enquiry in db.enquiries, sends real email to chhabraamrit686@gmail.com via Emergent managed Resend proxy (EMERGENT_EMAIL_KEY in backend/.env, from_name = "Amrit Chhabra Portfolio"). GET /api/ health check.
- Assets: /app/frontend/public/assets/ (amrit-chhabra.png portrait, favicon SVG+PNGs, evidence/ with gsc-01..08 featured, gsc-gallery-01..10, social-01..03, meta-ads-01..02).

## User Personas
- Business owners / founders evaluating a digital marketing professional
- Marketing managers and recruiters reviewing evidence of capability
- Potential clients who want proof (dashboards) before a conversation

## Core Requirements (static)
9 routed pages with clean URLs; sticky premium nav with CTA and active states; kinetic hero with real photo; contextual CTAs per page; reusable screenshot component with accessible lightbox; 21+ sectors interactive grid; DailyAura founder section; team-oriented "we/our" language without fabricated org claims; contact page with phone/email/WhatsApp + validated form with real email delivery; responsive + accessible + reduced-motion support; SEO meta config per page; no em dash in visible content; data integrity everywhere.

## Implemented (2026-09-19)
- All 9 pages live with full copy (About/SEO/Social/Meta/Email/Content are long-form with visual sections, timelines, capability cards)
- 19 real GSC screenshots processed: client domains cropped out; 8 strongest featured as evidence cards with visible metrics, periods and factual notes; 10 more in expandable gallery
- 3 real Meta Business Suite evidence cards (219.3K views period, 1.0M views period, 174.0K views quarter) with metric summaries
- 2 real Meta Ads snapshots (A: 92 conversations, ₹16.25, ₹1,495.43 / B: 50, ₹20.03, ₹1,001.51) kept strictly separate
- Custom favicon (dark rounded square, electric blue A with cyan chart crossbar) in SVG + PNG sizes
- Home: masked line-by-line hero reveal, parallax photo with spotlight and founder badge, marquee, services, approach steps, SEO/social/paid previews, sectors grid, results preview, connected growth system, DailyAura section, final CTA
- Contact: phone/email/WhatsApp CTAs + validated form; submissions stored in MongoDB and emailed via managed Resend (verified email_sent: true)
- Verified: backend health + contact valid/invalid via curl; UI flows (lightbox open/Escape close, gallery expand, form submit success) via screenshots

## Backlog
- P0: None blocking
- P1: Add email marketing analytics evidence when real screenshots exist; add more GSC/social evidence by dropping files into /assets/evidence/ and adding entries in site.js
- P2: Blog/insights section; sitemap.xml + robots.txt for technical SEO; OG share images per page; analytics (e.g., privacy-friendly) integration
