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
  Zap,
} from "lucide-react";
import { CONTACT } from "../data/site";
import { AnimatedLogo } from "./AnimatedLogo";

const SERVICES_LIST = [
  {
    title: "SEO (Search Engine)",
    path: "/seo",
    desc: "Keyword rankings & organic search growth",
    icon: Search,
    badge: "119k Clicks",
    color: "text-sky-400",
  },
  {
    title: "Social Media Marketing",
    path: "/social-media",
    desc: "Reels, content strategy & audience reach",
    icon: Share2,
    badge: "1.0M Views",
    color: "text-pink-400",
  },
  {
    title: "Meta Ads (FB & Insta)",
    path: "/meta-ads",
    desc: "Targeted paid campaigns & lead generation",
    icon: Target,
    badge: "₹16.25/Lead",
    color: "text-emerald-400",
  },
  {
    title: "Email Marketing",
    path: "/email-marketing",
    desc: "Automations, newsletters & retention",
    icon: Mail,
    badge: "Retention",
    color: "text-amber-400",
  },
  {
    title: "Content Writing",
    path: "/content-writing",
    desc: "High-intent SEO blogs & sales copy",
    icon: PenLine,
    badge: "Rank-First",
    color: "text-cyan-400",
  },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
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
    const onScroll = () => setScrolled(window.scrollY > 15);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setOpen(false);
    setServicesDropdown(false);
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
          ? "bg-[#050a16]/98 backdrop-blur-xl border-b border-slate-800/90 shadow-xl shadow-black/30"
          : "bg-[#050a16]/90 backdrop-blur-lg border-b border-slate-800/60"
      }`}
    >
      {/* Electric Traveling Beam across bottom of header */}
      <div className="absolute inset-x-0 bottom-0 h-[1.5px] animate-electric-beam pointer-events-none" aria-hidden="true" />

      <nav className="container-shell flex h-16 sm:h-[72px] items-center justify-between gap-2" aria-label="Main Navigation">
        {/* Animated Brand Logo */}
        <AnimatedLogo />

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-1 lg:gap-2">
          {/* Home */}
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `rounded-full px-3.5 py-2 text-[13px] font-medium transition-all ${
                  isActive
                    ? "text-white bg-slate-800/90 shadow-sm border border-electric/30"
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
                    ? "text-white bg-slate-800/90 shadow-sm border border-electric/30"
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
                  ? "text-white bg-slate-800/90 shadow-sm border border-electric/40"
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
                className="absolute left-0 mt-2 w-72 rounded-2xl border border-slate-800 bg-[#090e1c]/98 p-2 backdrop-blur-2xl shadow-2xl animate-in fade-in slide-in-from-top-2 duration-150 z-50"
              >
                <div className="px-3 py-2 border-b border-slate-800/80 mb-1 flex items-center justify-between">
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-electric-bright">
                    Specialized Services
                  </p>
                  <Zap className="h-3 w-3 text-amber-400 animate-lightning" />
                </div>
                <div className="space-y-1">
                  {SERVICES_LIST.map((s) => {
                    const Icon = s.icon;
                    const active = location.pathname === s.path;
                    return (
                      <Link
                        key={s.path}
                        to={s.path}
                        onClick={() => setServicesDropdown(false)}
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
                    ? "text-white bg-slate-800/90 shadow-sm border border-electric/30"
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
                    ? "text-white bg-slate-800/90 shadow-sm border border-electric/30"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/40"
                }`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Right Side: WhatsApp CTA Button + Mobile Toggle (Shrink-proof & Touch Optimized) */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0 z-50">
          {/* Prominent WhatsApp CTA Button */}
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat directly with Amrit on WhatsApp"
            className="group flex items-center gap-1.5 sm:gap-2 rounded-full bg-emerald-600 px-3 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold text-white transition-all duration-300 hover:bg-emerald-500 hover:shadow-[0_0_24px_rgba(16,185,129,0.5)] active:scale-95 shrink-0"
          >
            <MessageCircle className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
            <span className="hidden sm:inline">Chat on WhatsApp</span>
            <span className="sm:hidden text-xs">WhatsApp</span>
          </a>

          {/* Mobile Hamburger Toggle Button - GUARANTEED Touch Response & Visibility */}
          <button
            type="button"
            data-testid="nav-mobile-toggle"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((v) => !v);
            }}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            className="md:hidden flex items-center justify-center h-10 w-10 rounded-xl border border-slate-700 bg-slate-900/95 text-slate-200 hover:text-white hover:border-electric active:scale-90 transition-all shrink-0 cursor-pointer shadow-md select-none"
          >
            {open ? <X className="h-5 w-5 text-electric-bright" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer / Overlay with Instant Tap Navigation */}
      {open && (
        <div
          id="mobile-nav"
          className="md:hidden fixed inset-x-0 top-16 h-[calc(100dvh-4rem)] bg-[#050a16] border-t border-slate-800/90 overflow-y-auto px-4 py-5 flex flex-col justify-between z-[60] shadow-2xl animate-in fade-in slide-in-from-top-2 duration-150"
          data-testid="nav-mobile-menu"
        >
          <div className="space-y-3.5">
            {/* Quick Header Bar inside Drawer */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-electric-bright font-semibold flex items-center gap-1.5">
                <Zap className="h-3.5 w-3.5 text-amber-400 animate-lightning" />
                Navigation Menu
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex items-center gap-1 text-xs font-mono text-slate-400 hover:text-white px-2 py-1 rounded-lg border border-slate-800 bg-slate-900"
              >
                <X className="h-3.5 w-3.5 text-slate-400" />
                Close
              </button>
            </div>

            {/* Direct Quick WhatsApp + Call Bar */}
            <div className="grid grid-cols-2 gap-2.5 pb-1">
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600/95 py-3 text-xs font-bold text-white active:bg-emerald-500 shadow-sm"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href={CONTACT.phoneHref}
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-900 py-3 text-xs font-semibold text-slate-200 active:bg-slate-800"
              >
                <Phone className="h-4 w-4 text-electric-bright" />
                +91 98776 21320
              </a>
            </div>

            {/* Mobile Nav Links - Every link closes menu on tap */}
            <ul className="space-y-1.5">
              {/* Home */}
              <li>
                <NavLink
                  to="/"
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-electric-deep/25 text-white border border-electric/40"
                        : "text-slate-300 hover:text-white hover:bg-slate-800/40"
                    }`
                  }
                >
                  <span>Home</span>
                  <ArrowRight className="h-4 w-4 text-slate-500" />
                </NavLink>
              </li>

              {/* About */}
              <li>
                <NavLink
                  to="/about"
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-electric-deep/25 text-white border border-electric/40"
                        : "text-slate-300 hover:text-white hover:bg-slate-800/40"
                    }`
                  }
                >
                  <span>About</span>
                  <ArrowRight className="h-4 w-4 text-slate-500" />
                </NavLink>
              </li>

              {/* Services Accordion with All 5 Services */}
              <li className="rounded-xl border border-slate-800 bg-slate-900/60 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  className="flex w-full items-center justify-between px-4 py-3 text-sm font-semibold text-slate-200"
                >
                  <span className="flex items-center gap-2">
                    <span>Services</span>
                    <span className="rounded-md bg-electric/20 px-1.5 py-0.5 text-[10px] text-electric-bright font-mono font-bold">
                      5 Disciplines
                    </span>
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      mobileServicesOpen ? "rotate-180 text-electric-bright" : "text-slate-400"
                    }`}
                  />
                </button>

                {mobileServicesOpen && (
                  <ul className="px-2 pb-2 space-y-1 bg-slate-950/80 border-t border-slate-800/80 pt-1.5">
                    {SERVICES_LIST.map((s) => {
                      const Icon = s.icon;
                      const active = location.pathname === s.path;
                      return (
                        <li key={s.path}>
                          <Link
                            to={s.path}
                            onClick={() => {
                              setOpen(false);
                            }}
                            className={`flex items-center justify-between rounded-lg px-3 py-2.5 text-xs font-medium transition-all ${
                              active
                                ? "bg-electric-deep/25 text-white border border-electric/30 font-semibold"
                                : "text-slate-300 hover:text-white hover:bg-slate-800/40"
                            }`}
                          >
                            <div className="flex items-center gap-2.5">
                              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-slate-850 text-electric-bright">
                                <Icon className="h-3.5 w-3.5" />
                              </span>
                              <span>{s.title}</span>
                            </div>
                            <span className="font-mono text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/30">
                              {s.badge}
                            </span>
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
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-electric-deep/25 text-white border border-electric/40"
                        : "text-slate-300 hover:text-white hover:bg-slate-800/40"
                    }`
                  }
                >
                  <span>Results & Dashboards</span>
                  <ArrowRight className="h-4 w-4 text-slate-500" />
                </NavLink>
              </li>

              {/* Contact */}
              <li>
                <NavLink
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-electric-deep/25 text-white border border-electric/40"
                        : "text-slate-300 hover:text-white hover:bg-slate-800/40"
                    }`
                  }
                >
                  <span>Contact Amrit</span>
                  <ArrowRight className="h-4 w-4 text-slate-500" />
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Bottom WhatsApp CTA inside mobile drawer */}
          <div className="pt-4 pb-2 border-t border-slate-800/80 mt-4 space-y-2">
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 w-full rounded-xl bg-emerald-600 py-3.5 text-center text-sm font-bold text-white shadow-[0_0_24px_rgba(16,185,129,0.4)] active:scale-98 transition-all"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Chat on WhatsApp (+91 98776 21320)</span>
            </a>
            <p className="text-center text-[11px] text-slate-400">
              Founder of <span className="text-white font-medium">DailyAura.in</span> • Amrit Chhabra
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
