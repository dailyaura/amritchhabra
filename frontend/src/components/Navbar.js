import { useEffect, useState, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  MessageCircle,
  Phone,
  Search,
  Share2,
  Target,
  Mail,
  PenLine,
  ArrowRight,
} from "lucide-react";
import { CONTACT } from "../data/site";

const SERVICES_LIST = [
  {
    title: "SEO (Search Engine)",
    path: "/seo",
    desc: "Keyword rankings & organic search growth",
    icon: Search,
  },
  {
    title: "Social Media Marketing",
    path: "/social-media",
    desc: "Reels, content strategy & audience reach",
    icon: Share2,
  },
  {
    title: "Meta Ads (FB & Insta)",
    path: "/meta-ads",
    desc: "Targeted paid campaigns & lead generation",
    icon: Target,
  },
  {
    title: "Email Marketing",
    path: "/email-marketing",
    desc: "Automations, newsletters & retention",
    icon: Mail,
  },
  {
    title: "Content Writing",
    path: "/content-writing",
    desc: "High-intent SEO blogs & sales copy",
    icon: PenLine,
  },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  // Detect scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setOpen(false);
    setServicesDropdown(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  // Escape key closes menus
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        setServicesDropdown(false);
      }
    };
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

  const isServiceActive = SERVICES_LIST.some((s) => s.path === location.pathname);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-[#050a16]/95 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="container-shell flex h-16 sm:h-[72px] items-center justify-between" aria-label="Main Navigation">
        {/* Brand Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none"
          data-testid="nav-logo"
          aria-label="Amrit Chhabra Portfolio"
        >
          <div className="relative flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-electric to-electric-deep text-white font-display font-bold text-base shadow-[0_0_20px_rgba(37,99,235,0.4)] group-hover:scale-105 transition-transform duration-300">
            AC
            <span
              className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 border-2 border-[#050a16]"
              title="Online"
            />
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
        <ul className="hidden md:flex items-center gap-1 lg:gap-2">
          {/* Home */}
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `rounded-full px-3.5 py-2 text-[13px] font-medium transition-all ${
                  isActive
                    ? "text-white bg-slate-800/90 shadow-sm"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/40"
                }`
              }
            >
              Home
            </NavLink>
          </li>

          {/* About */}
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `rounded-full px-3.5 py-2 text-[13px] font-medium transition-all ${
                  isActive
                    ? "text-white bg-slate-800/90 shadow-sm"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/40"
                }`
              }
            >
              About
            </NavLink>
          </li>

          {/* Services Dropdown */}
          <li className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setServicesDropdown((v) => !v)}
              onMouseEnter={() => setServicesDropdown(true)}
              aria-expanded={servicesDropdown}
              className={`flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[13px] font-medium transition-all ${
                isServiceActive || servicesDropdown
                  ? "text-white bg-slate-800/90 shadow-sm border border-electric/30"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/40"
              }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  servicesDropdown ? "rotate-180 text-electric-bright" : "text-slate-400"
                }`}
              />
            </button>

            {/* Dropdown Menu Popup */}
            {servicesDropdown && (
              <div
                onMouseLeave={() => setServicesDropdown(false)}
                className="absolute left-0 mt-2 w-72 rounded-2xl border border-slate-800 bg-[#090e1c]/95 p-2 backdrop-blur-xl shadow-2xl animate-in fade-in slide-in-from-top-2 duration-150 z-50"
              >
                <div className="px-3 py-2 border-b border-slate-800/80 mb-1">
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-electric-bright">
                    Specialized Services
                  </p>
                </div>
                <div className="space-y-1">
                  {SERVICES_LIST.map((s) => {
                    const Icon = s.icon;
                    const active = location.pathname === s.path;
                    return (
                      <Link
                        key={s.path}
                        to={s.path}
                        className={`flex items-start gap-3 rounded-xl p-2.5 transition-all ${
                          active
                            ? "bg-electric-deep/20 border border-electric/40 text-white"
                            : "hover:bg-slate-800/60 text-slate-300 hover:text-white"
                        }`}
                      >
                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border ${
                            active
                              ? "bg-electric border-electric text-white"
                              : "bg-slate-900 border-slate-800 text-electric-bright"
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                        </span>
                        <div className="min-w-0">
                          <p className="text-xs font-semibold leading-snug">{s.title}</p>
                          <p className="text-[11px] text-slate-400 truncate mt-0.5">{s.desc}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </li>

          {/* Results */}
          <li>
            <NavLink
              to="/results"
              className={({ isActive }) =>
                `rounded-full px-3.5 py-2 text-[13px] font-medium transition-all ${
                  isActive
                    ? "text-white bg-slate-800/90 shadow-sm"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/40"
                }`
              }
            >
              Results
            </NavLink>
          </li>

          {/* Contact */}
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `rounded-full px-3.5 py-2 text-[13px] font-medium transition-all ${
                  isActive
                    ? "text-white bg-slate-800/90 shadow-sm"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/40"
                }`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Right: Only WhatsApp Button + Mobile Toggle */}
        <div className="flex items-center gap-2.5">
          {/* Prominent WhatsApp CTA Button */}
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat directly with Amrit on WhatsApp"
            className="group flex items-center gap-2 rounded-full bg-emerald-600 px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold text-white transition-all duration-300 hover:bg-emerald-500 hover:shadow-[0_0_24px_rgba(16,185,129,0.4)] active:scale-95"
          >
            <MessageCircle className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
            <span className="hidden sm:inline">Chat on WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            data-testid="nav-mobile-toggle"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            className="md:hidden flex items-center justify-center h-10 w-10 rounded-xl border border-slate-800 bg-slate-900/90 text-slate-300 hover:text-white hover:border-slate-700 active:scale-95 transition-all"
          >
            {open ? <X className="h-5 w-5 text-electric-bright" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer / Overlay */}
      {open && (
        <div
          id="mobile-nav"
          className="md:hidden fixed inset-x-0 top-16 sm:top-[72px] bottom-0 bg-[#050a16]/98 backdrop-blur-2xl border-t border-slate-800/90 overflow-y-auto px-4 py-5 flex flex-col justify-between animate-in fade-in slide-in-from-top-4 duration-200 z-50"
          data-testid="nav-mobile-menu"
        >
          <div className="space-y-3">
            {/* Direct Quick WhatsApp + Call bar */}
            <div className="grid grid-cols-2 gap-2 pb-2 border-b border-slate-800/80">
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600/90 py-3 text-xs font-bold text-white active:bg-emerald-500 shadow-sm"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href={CONTACT.phoneHref}
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-900/90 py-3 text-xs font-semibold text-slate-200 active:bg-slate-800"
              >
                <Phone className="h-4 w-4 text-electric" />
                +91 98776 21320
              </a>
            </div>

            <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-slate-500 px-2 pt-1">
              Menu
            </p>

            {/* Mobile Nav Links */}
            <ul className="space-y-1.5">
              {/* Home */}
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-electric-deep/20 text-white border border-electric/40"
                        : "text-slate-300 hover:text-white hover:bg-slate-800/40"
                    }`
                  }
                >
                  <span>Home</span>
                  <ArrowRight className="h-4 w-4 text-slate-600" />
                </NavLink>
              </li>

              {/* About */}
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-electric-deep/20 text-white border border-electric/40"
                        : "text-slate-300 hover:text-white hover:bg-slate-800/40"
                    }`
                  }
                >
                  <span>About</span>
                  <ArrowRight className="h-4 w-4 text-slate-600" />
                </NavLink>
              </li>

              {/* Services Accordion */}
              <li className="rounded-xl border border-slate-850 bg-slate-900/40 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  className="flex w-full items-center justify-between px-4 py-3 text-sm font-semibold text-slate-200"
                >
                  <span className="flex items-center gap-2">
                    <span>Services</span>
                    <span className="rounded-md bg-electric/20 px-1.5 py-0.5 text-[10px] text-electric-bright font-mono">
                      5
                    </span>
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      mobileServicesOpen ? "rotate-180 text-electric-bright" : "text-slate-400"
                    }`}
                  />
                </button>

                {mobileServicesOpen && (
                  <ul className="px-2 pb-2 space-y-1 bg-slate-950/60 border-t border-slate-850/80 pt-1.5">
                    {SERVICES_LIST.map((s) => {
                      const Icon = s.icon;
                      const active = location.pathname === s.path;
                      return (
                        <li key={s.path}>
                          <Link
                            to={s.path}
                            className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-xs font-medium transition-all ${
                              active
                                ? "bg-electric-deep/25 text-white border border-electric/30 font-semibold"
                                : "text-slate-400 hover:text-white hover:bg-slate-800/40"
                            }`}
                          >
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-slate-850 text-electric-bright">
                              <Icon className="h-3.5 w-3.5" />
                            </span>
                            <span>{s.title}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>

              {/* Results */}
              <li>
                <NavLink
                  to="/results"
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-electric-deep/20 text-white border border-electric/40"
                        : "text-slate-300 hover:text-white hover:bg-slate-800/40"
                    }`
                  }
                >
                  <span>Results</span>
                  <ArrowRight className="h-4 w-4 text-slate-600" />
                </NavLink>
              </li>

              {/* Contact */}
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-electric-deep/20 text-white border border-electric/40"
                        : "text-slate-300 hover:text-white hover:bg-slate-800/40"
                    }`
                  }
                >
                  <span>Contact</span>
                  <ArrowRight className="h-4 w-4 text-slate-600" />
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Bottom WhatsApp CTA inside mobile drawer */}
          <div className="pt-5 pb-3 border-t border-slate-800/80 mt-4 space-y-2">
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full rounded-xl bg-emerald-600 py-3.5 text-center text-sm font-bold text-white shadow-[0_0_24px_rgba(16,185,129,0.4)] active:scale-98 transition-all"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp: +91 98776 21320
            </a>
            <p className="text-center text-[11px] text-slate-500">
              Founder of <span className="text-slate-300 font-medium">DailyAura.in</span> • Amrit Chhabra
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
