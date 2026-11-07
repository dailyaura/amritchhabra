import { Link } from "react-router-dom";
import { Search, Share2, Target, PenLine, ArrowRight, Zap, RefreshCw } from "lucide-react";
import { Reveal } from "./Reveal";

const CHANNELS = [
  {
    step: "01",
    icon: Search,
    name: "SEO",
    path: "/seo",
    color: "text-sky-400",
    badge: "Captures Search Demand",
    role: "Builds organic visibility that compounds over time and captures high-intent search demand.",
  },
  {
    step: "02",
    icon: PenLine,
    name: "Content Writing",
    path: "/content-writing",
    color: "text-emerald-400",
    badge: "Educates & Ranks",
    role: "Supports search rankings and audience education with structured, intent-led writing.",
  },
  {
    step: "03",
    icon: Share2,
    name: "Social Media",
    path: "/social-media",
    color: "text-purple-400",
    badge: "Expands Reach & Reels",
    role: "Expands content distribution and keeps the brand present where the audience spends time.",
  },
  {
    step: "04",
    icon: Target,
    name: "Meta Ads",
    path: "/meta-ads",
    color: "text-pink-400",
    badge: "Direct Paid Scaling",
    role: "Adds targeted paid reach and direct response campaigns on top of organic momentum.",
  },
];

export const GrowthSystem = () => (
  <div className="grid items-center gap-8 lg:grid-cols-5">
    {/* Left Column: Heading + Animated Interactive Growth Loop */}
    <Reveal className="lg:col-span-2">
      <div className="inline-flex items-center gap-2 rounded-full border border-electric/30 bg-electric-deep/15 px-3 py-1 text-xs font-mono text-electric-bright mb-3">
        <Zap className="h-3 w-3 animate-pulse" />
        Integrated Multi-Channel Engine
      </div>
      <h3 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
        A Connected Digital Growth System
      </h3>
      <p className="mt-3.5 text-sm sm:text-base text-slate-400 leading-relaxed">
        Channels are strongest when they work together. Search captures demand, content educates the audience, social
        expands distribution, and paid campaigns add targeted reach. Each channel feeds the next instead of operating
        in isolation.
      </p>

      {/* Animated Growth Loop Flow Indicator */}
      <div className="mt-6 rounded-2xl border border-slate-800/80 bg-[#070d1d]/80 p-4 shadow-inner">
        <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
          <span className="flex items-center gap-1.5 text-electric-bright font-semibold">
            <RefreshCw className="h-3.5 w-3.5 animate-spin-slow" />
            Continuous Feedback Loop
          </span>
          <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30">
            Compounding ROI
          </span>
        </div>

        {/* Visual Step-by-Step Flow Bar */}
        <div className="flex items-center justify-between text-[11px] font-mono font-medium text-slate-300">
          <span className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-ping" />
            SEO
          </span>
          <ArrowRight className="h-3 w-3 text-slate-600" />
          <span className="text-emerald-400">Content</span>
          <ArrowRight className="h-3 w-3 text-slate-600" />
          <span className="text-purple-400">Social</span>
          <ArrowRight className="h-3 w-3 text-slate-600" />
          <span className="text-pink-400">Ads</span>
        </div>
      </div>
    </Reveal>

    {/* Right Column: 4 Connected Channel Cards with Dynamic Animations */}
    <div className="grid gap-4 sm:grid-cols-2 lg:col-span-3">
      {CHANNELS.map((channel, i) => {
        const Icon = channel.icon;
        return (
          <Reveal key={channel.name} delay={i * 0.08}>
            <Link
              to={channel.path}
              data-testid={`growth-system-${channel.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="card-premium card-hover group relative block h-full p-5 sm:p-6 transition-all duration-300 hover:border-electric/70 hover:shadow-[0_0_30px_rgba(37,99,235,0.2)] overflow-hidden"
            >
              {/* Animated Top Accent Shimmer */}
              <div
                className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-electric-bright to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
              />

              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-electric/30 bg-electric-deep/15 text-electric-bright transition-all duration-300 group-hover:scale-110 group-hover:bg-electric-deep/30">
                  <Icon className={`h-5 w-5 ${channel.color}`} aria-hidden="true" />
                </span>
                <span className="font-mono text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                  Phase {channel.step}
                </span>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <h4 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-electric-bright transition-colors">
                  {channel.name}
                </h4>
                <ArrowRight
                  className="h-4 w-4 text-slate-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-electric-bright"
                  aria-hidden="true"
                />
              </div>

              <span className="mt-1 inline-block text-[11px] font-mono text-cyan-400">
                {channel.badge}
              </span>

              <p className="mt-2.5 text-xs sm:text-sm text-slate-400 leading-relaxed">{channel.role}</p>
            </Link>
          </Reveal>
        );
      })}
    </div>
  </div>
);
