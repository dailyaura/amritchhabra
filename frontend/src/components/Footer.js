import { Link } from "react-router-dom";
import { Phone, Mail, MessageCircle, ArrowUp, Sparkles } from "lucide-react";
import { CONTACT, NAV_LINKS, SERVICES } from "../data/site";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#040814] text-slate-300" data-testid="footer">
      {/* Pre-footer Call to Action Banner */}
      <div className="border-b border-slate-850 bg-gradient-to-b from-[#060c1d] to-[#040814] py-12 sm:py-16">
        <div className="container-shell">
          <div className="relative overflow-hidden rounded-3xl border border-electric/30 bg-[#0a1022] p-8 sm:p-12 lg:p-14 shadow-2xl">
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-electric-deep/20 blur-3xl" aria-hidden="true" />
            <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  Available for New Projects
                </span>
                <h2 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                  Ready to grow your search visibility and paid revenue?
                </h2>
                <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
                  Let's discuss how data-backed SEO, Meta Ads, and content strategies can create sustainable growth for your business.
                </p>
              </div>

              {/* Fast Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-emerald-500 hover:shadow-[0_0_24px_rgba(16,185,129,0.4)] active:scale-98"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-electric/40 bg-electric-deep/20 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-electric-deep hover:shadow-[0_0_24px_rgba(37,99,235,0.4)] active:scale-98"
                >
                  <Sparkles className="h-4 w-4" />
                  Send an Enquiry
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="container-shell py-12 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* Column 1: Brand & Founder Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-electric to-electric-deep text-white font-display font-bold text-base shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                AC
              </div>
              <span className="leading-tight">
                <span className="block font-display text-base font-bold text-white tracking-wide group-hover:text-electric-bright transition-colors">
                  AMRIT CHHABRA
                </span>
                <span className="block text-[11px] uppercase tracking-[0.2em] text-electric-bright font-mono font-medium">
                  Digital Marketing Specialist
                </span>
              </span>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Strategic digital marketing professional and founder of{" "}
              <a
                href="https://dailyaura.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-electric-bright transition-colors font-medium underline underline-offset-4"
              >
                {CONTACT.founderOf}
              </a>
              . Focusing on measurable ROI across organic search, social distribution, and performance advertising.
            </p>

            <div className="pt-2">
              <span className="inline-block text-xs font-mono text-slate-500 uppercase tracking-widest">
                Location: Punjab, India • Serving Clients Worldwide
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="eyebrow text-slate-300">Quick Links</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_LINKS.slice(0, 5).map((l) => (
                <li key={l.path}>
                  <Link
                    to={l.path}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span className="h-1 w-1 rounded-full bg-electric-bright/60" />
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/results"
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span className="h-1 w-1 rounded-full bg-electric-bright/60" />
                  Results & Proof
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span className="h-1 w-1 rounded-full bg-electric-bright/60" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-3">
            <h3 className="eyebrow text-slate-300">Core Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SERVICES.map((s) => (
                <li key={s.path}>
                  <Link
                    to={s.path}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span className="h-1 w-1 rounded-full bg-electric-bright/60" />
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Channels */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="eyebrow text-slate-300">Direct Contact</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-3 text-slate-300 hover:border-emerald-500/40 hover:text-white transition-all"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <MessageCircle className="h-4 w-4" />
                  </span>
                  <div>
                    <span className="block text-[11px] text-slate-400 uppercase font-mono">WhatsApp</span>
                    <span className="font-semibold text-xs sm:text-sm text-emerald-400">+91 {CONTACT.phone}</span>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="group flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-3 text-slate-300 hover:border-electric/40 hover:text-white transition-all"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-electric/10 text-electric-bright border border-electric/20">
                    <Phone className="h-4 w-4" />
                  </span>
                  <div>
                    <span className="block text-[11px] text-slate-400 uppercase font-mono">Phone Call</span>
                    <span className="font-semibold text-xs sm:text-sm text-white">+91 {CONTACT.phone}</span>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="group flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-3 text-slate-300 hover:border-electric/40 hover:text-white transition-all"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-electric/10 text-electric-bright border border-electric/20">
                    <Mail className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <span className="block text-[11px] text-slate-400 uppercase font-mono">Email</span>
                    <span className="font-semibold text-xs sm:text-sm text-white truncate block">{CONTACT.email}</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Back to Top */}
        <div className="mt-12 flex flex-col gap-4 border-t border-slate-850 pt-8 sm:flex-row sm:items-center sm:justify-between text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} <span className="text-slate-300 font-medium">{CONTACT.name}</span>. All rights reserved. Founder of{" "}
            <a href="https://dailyaura.in" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white underline">
              {CONTACT.founderOf}
            </a>.
          </p>

          <div className="flex items-center justify-between sm:justify-end gap-6">
            <span className="font-mono text-[11px] text-slate-600">
              Strategy • Performance • Results
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-1.5 text-xs text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              aria-label="Scroll to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
