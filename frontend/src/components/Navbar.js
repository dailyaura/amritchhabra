import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, MessageCircle, Phone, Sparkles } from "lucide-react";
import { NAV_LINKS, CONTACT } from "../data/site";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-[#050a16]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="container-shell flex h-16 sm:h-[72px] items-center justify-between" aria-label="Primary Navigation">
        {/* Brand Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none"
          data-testid="nav-logo"
          aria-label="Amrit Chhabra Portfolio"
        >
          <div className="relative flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-electric to-electric-deep text-white font-display font-bold text-base shadow-[0_0_20px_rgba(37,99,235,0.4)] group-hover:scale-105 transition-transform duration-300">
            AC
            <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 border-2 border-[#050a16]" title="Available for projects" />
          </div>
          <span className="leading-tight">
            <span className="block font-display text-sm sm:text-base font-bold text-white tracking-wide group-hover:text-electric-bright transition-colors">
              AMRIT CHHABRA
            </span>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-electric-bright font-mono font-medium">
              Digital Marketing
            </span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex items-center gap-1 xl:gap-1.5">
          {NAV_LINKS.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                data-testid={`nav-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                className={({ isActive }) =>
                  `relative rounded-full px-3 py-1.5 xl:px-3.5 xl:py-2 text-[13px] font-medium transition-all duration-200 ${
                    isActive
                      ? "text-white bg-slate-800/80 shadow-sm"
                      : "text-slate-400 hover:text-white hover:bg-slate-800/40"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <span
                        className="absolute bottom-0 inset-x-3 h-0.5 bg-electric-bright rounded-full"
                        aria-hidden="true"
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Action Buttons & Mobile Hamburger */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick WhatsApp Pill (Visible on sm screens and up) */}
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all duration-200"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            <span>WhatsApp</span>
          </a>

          {/* Primary CTA */}
          <Link
            to="/contact"
            data-testid="nav-cta-discuss-goals"
            className="group hidden md:inline-flex items-center gap-2 rounded-full border border-electric/40 bg-electric-deep/20 px-4 xl:px-5 py-2 xl:py-2.5 text-[13px] font-semibold text-white transition-all duration-300 hover:bg-electric-deep hover:shadow-[0_0_24px_rgba(37,99,235,0.4)]"
          >
            <span>Let's Talk</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </Link>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            data-testid="nav-mobile-toggle"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="lg:hidden flex items-center justify-center h-10 w-10 rounded-xl border border-slate-800 bg-slate-900/80 text-slate-300 hover:text-white hover:border-electric/50 active:scale-95 transition-all"
          >
            {open ? <X className="h-5 w-5 text-electric-bright" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer / Overlay */}
      {open && (
        <div
          id="mobile-nav"
          className="lg:hidden fixed inset-x-0 top-16 sm:top-[72px] bottom-0 bg-[#050a16]/98 backdrop-blur-2xl border-t border-slate-800/90 overflow-y-auto px-4 py-5 flex flex-col justify-between animate-in fade-in slide-in-from-top-4 duration-200"
          data-testid="nav-mobile-menu"
        >
          <div className="space-y-4">
            {/* Quick Contact Bar for Mobile */}
            <div className="grid grid-cols-2 gap-2 pb-2">
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 py-3 text-xs font-semibold text-emerald-400 active:bg-emerald-500/20"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href={CONTACT.phoneHref}
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-900/90 py-3 text-xs font-semibold text-slate-200 active:bg-slate-800"
              >
                <Phone className="h-4 w-4 text-electric" />
                Call Now
              </a>
            </div>

            <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-slate-500 px-2">Navigation</p>

            {/* Mobile Navigation Links */}
            <ul className="space-y-1">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    data-testid={`nav-mobile-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                    className={({ isActive }) =>
                      `flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                        isActive
                          ? "bg-electric-deep/20 text-white border border-electric/40 font-semibold"
                          : "text-slate-300 hover:text-white hover:bg-slate-800/40"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span>{link.label}</span>
                        {isActive ? (
                          <span className="h-2 w-2 rounded-full bg-electric-bright shadow-[0_0_8px_#3b82f6]" />
                        ) : (
                          <ArrowRight className="h-3.5 w-3.5 text-slate-600" />
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom Mobile CTA */}
          <div className="pt-6 pb-4 border-t border-slate-800/80 mt-4 space-y-3">
            <Link
              to="/contact"
              data-testid="nav-mobile-cta"
              className="flex items-center justify-center gap-2 w-full rounded-xl bg-electric-deep py-3.5 text-center text-sm font-bold text-white shadow-[0_0_24px_rgba(37,99,235,0.4)] active:scale-98 transition-all"
            >
              <Sparkles className="h-4 w-4" />
              Let's Discuss Your Goals
            </Link>
            <p className="text-center text-[11px] text-slate-500">
              Founder of <span className="text-slate-400 font-medium">DailyAura.in</span> • Amrit Chhabra
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
