import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV_LINKS } from "../data/site";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled || open ? "glass border-b border-slate-800/80" : "border-b border-transparent"
      }`}
    >
      <nav className="container-shell flex h-16 lg:h-[72px] items-center justify-between" aria-label="Primary">
        <Link to="/" className="flex items-center gap-3" data-testid="nav-logo" aria-label="Amrit Chhabra, home">
          <img src="/assets/favicon-192.png" alt="" className="h-9 w-9 rounded-lg" width="36" height="36" />
          <span className="leading-tight">
            <span className="block font-display text-sm font-bold text-white tracking-wide">AMRIT CHHABRA</span>
            <span className="block text-[10px] uppercase tracking-[0.22em] text-electric-bright font-mono">Digital Marketing</span>
          </span>
        </Link>

        <ul className="hidden xl:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                data-testid={`nav-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                className={({ isActive }) =>
                  `relative rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors duration-200 ${
                    isActive ? "text-white" : "text-slate-400 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      className={`absolute inset-x-3.5 -bottom-0.5 h-px bg-electric-bright transition-opacity duration-200 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                      aria-hidden="true"
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            data-testid="nav-cta-discuss-goals"
            className="group hidden md:inline-flex items-center gap-2 rounded-full border border-electric/40 bg-electric-deep/15 px-5 py-2.5 text-[13px] font-semibold text-white transition-[background-color,border-color,box-shadow] duration-300 hover:bg-electric-deep hover:shadow-[0_0_24px_rgba(37,99,235,0.4)]"
          >
            Let's Discuss Your Goals
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
          <button
            type="button"
            data-testid="nav-mobile-toggle"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            className="xl:hidden rounded-lg border border-slate-800 p-2.5 text-slate-300 hover:text-white hover:border-electric/50 transition-colors"
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-nav" className="xl:hidden glass border-t border-slate-800/80" data-testid="nav-mobile-menu">
          <ul className="container-shell py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  data-testid={`nav-mobile-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  className={({ isActive }) =>
                    `block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                      isActive ? "bg-electric-deep/20 text-white border border-electric/30" : "text-slate-400 hover:text-white hover:bg-slate-800/40"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-2">
              <Link
                to="/contact"
                data-testid="nav-mobile-cta"
                className="block rounded-full bg-electric-deep px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Let's Discuss Your Goals
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
