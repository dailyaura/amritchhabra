import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const AnimatedLogo = () => {
  const [activePhrase, setActivePhrase] = useState(0);
  const phrases = ["Digital Marketing", "SEO & Meta Ads", "Founder DailyAura.in"];

  useEffect(() => {
    const timer = setInterval(() => {
      setActivePhrase((prev) => (prev + 1) % phrases.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [phrases.length]);

  return (
    <Link
      to="/"
      className="group flex items-center gap-2 sm:gap-3 focus:outline-none select-none min-w-0 shrink"
      data-testid="nav-logo"
      aria-label="Amrit Chhabra - Digital Marketing Professional"
    >
      {/* Animated Brand Emblem with Rotating Conic Aura */}
      <div className="relative flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center">
        {/* Continuously Rotating Conic Gradient Aura Ring */}
        <div
          className="absolute inset-0 rounded-2xl p-[1.5px] transition-transform duration-500 group-hover:scale-110"
          style={{
            background:
              "conic-gradient(from 0deg, #38bdf8, #2563eb, #10b981, #38bdf8, #6366f1, #38bdf8)",
            animation: "spin-slow 6s linear infinite",
          }}
        >
          {/* Inner dark cutout */}
          <div className="h-full w-full rounded-[14px] bg-[#050a16]" />
        </div>

        {/* Ambient Glow behind logo */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-electric/40 to-cyan-400/30 blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Logo Core with SVG Monogram */}
        <div className="relative flex h-[34px] w-[34px] sm:h-[42px] sm:w-[42px] items-center justify-center rounded-[14px] bg-[#070d1d] shadow-inner overflow-hidden">
          {/* Animated SVG Graphic */}
          <svg
            viewBox="0 0 100 100"
            className="h-5 w-5 sm:h-7 sm:w-7 transition-transform duration-300 group-hover:scale-105"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38BDF8" />
                <stop offset="50%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#10B981" />
              </linearGradient>
            </defs>

            {/* Stylized Modern Monogram "A" + Growth Chart Peak */}
            <path
              d="M20 78L48 22C49 20 51 20 52 22L80 78"
              stroke="url(#logoGrad)"
              strokeWidth="11"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Dynamic Upward Growth Surge Arrow */}
            <path
              d="M32 58L50 46L68 52L85 32"
              stroke="#38BDF8"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Arrowhead */}
            <path
              d="M75 32H85V42"
              stroke="#38BDF8"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Radiant Core Beacon */}
            <circle cx="50" cy="46" r="4" fill="#FFFFFF" />
          </svg>

          {/* Shimmer sweep effect */}
          <div
            className="pointer-events-none absolute inset-0 -translate-x-full animate-[shimmer-sweep_3.5s_infinite] bg-gradient-to-r from-transparent via-white/15 to-transparent"
            aria-hidden="true"
          />
        </div>

        {/* Live Active Status Indicator with Radar Ping */}
        <span
          className="absolute -bottom-0.5 -right-0.5 flex h-2.5 w-2.5 sm:h-3 sm:w-3 items-center justify-center"
          title="Growth System Active"
        >
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400 border border-[#050a16]" />
        </span>
      </div>

      {/* Brand Text & Live Dynamic Tagline - Fully Responsive & Truncating */}
      <div className="flex flex-col leading-tight min-w-0">
        <div className="flex items-center gap-1.5">
          <span className="font-display text-[13px] sm:text-base font-bold text-white tracking-wide transition-colors duration-200 group-hover:text-electric-bright whitespace-nowrap">
            AMRIT CHHABRA
          </span>
          <span className="hidden sm:inline-block rounded-md bg-electric/15 px-1.5 py-0.5 font-mono text-[9px] font-semibold text-electric-bright border border-electric/30">
            PRO
          </span>
        </div>
        <div className="h-3.5 sm:h-4 overflow-hidden">
          <span
            key={activePhrase}
            className="block text-[9px] sm:text-[11px] uppercase tracking-[0.14em] sm:tracking-[0.18em] text-slate-400 font-mono font-medium animate-in fade-in slide-in-from-bottom-1 duration-300 truncate"
          >
            {phrases[activePhrase]}
          </span>
        </div>
      </div>
    </Link>
  );
};
