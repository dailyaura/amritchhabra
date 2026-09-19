import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";
import { CONTACT, NAV_LINKS, SERVICES } from "../data/site";

export const Footer = () => (
  <footer className="border-t border-slate-800/80 bg-[#050a16]" data-testid="footer">
    <div className="container-shell py-16">
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src="/assets/favicon-192.png" alt="" className="h-10 w-10 rounded-lg" width="40" height="40" />
            <span className="leading-tight">
              <span className="block font-display text-sm font-bold text-white tracking-wide">AMRIT CHHABRA</span>
              <span className="block text-[10px] uppercase tracking-[0.22em] text-electric-bright font-mono">Digital Marketing</span>
            </span>
          </div>
          <p className="mt-5 text-sm text-slate-400 leading-relaxed">
            Digital Marketing Professional and Founder of {CONTACT.founderOf}. Strategy, execution and performance,
            backed by real evidence across search, social and paid channels.
          </p>
        </div>

        <nav aria-label="Footer pages">
          <h3 className="eyebrow">Pages</h3>
          <ul className="mt-5 space-y-2.5">
            {NAV_LINKS.map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="text-sm text-slate-400 transition-colors hover:text-electric-bright">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer services">
          <h3 className="eyebrow">Services</h3>
          <ul className="mt-5 space-y-2.5">
            {SERVICES.map((s) => (
              <li key={s.path}>
                <Link to={s.path} className="text-sm text-slate-400 transition-colors hover:text-electric-bright">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="eyebrow">Contact</h3>
          <ul className="mt-5 space-y-3">
            <li>
              <a
                href={CONTACT.phoneHref}
                data-testid="footer-phone-link"
                className="inline-flex items-center gap-2.5 text-sm text-slate-400 transition-colors hover:text-electric-bright"
              >
                <Phone className="h-4 w-4 text-electric" aria-hidden="true" />
                {CONTACT.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                data-testid="footer-email-link"
                className="inline-flex items-center gap-2.5 text-sm text-slate-400 transition-colors hover:text-electric-bright break-all"
              >
                <Mail className="h-4 w-4 shrink-0 text-electric" aria-hidden="true" />
                {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-14 flex flex-col gap-3 border-t border-slate-800/80 pt-7 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} {CONTACT.name}. {CONTACT.role}. Founder of {CONTACT.founderOf}.
        </p>
        <p className="text-xs font-mono text-slate-600">Strategy / Execution / Performance / Evidence / Growth</p>
      </div>
    </div>
  </footer>
);
