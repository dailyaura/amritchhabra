import { Globe, PenLine, Wrench, TrendingUp, Sparkles, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

const PILLARS = [
  {
    icon: Globe,
    title: "Owned Platform",
    text: "DailyAura.in is planned, built and managed end to end: structure, publishing and ongoing website management.",
    color: "text-sky-400",
  },
  {
    icon: PenLine,
    title: "Content Engine",
    text: "A steady publishing system covering AI study tools, productivity content and audience-focused resources.",
    color: "text-emerald-400",
  },
  {
    icon: Wrench,
    title: "SEO in Practice",
    text: "Keyword research, on page optimization, internal linking and content optimization applied on a live property.",
    color: "text-amber-400",
  },
  {
    icon: TrendingUp,
    title: "Continuous Growth",
    text: "Search performance is monitored and content is refined over time, the same process we bring to client work.",
    color: "text-pink-400",
  },
];

export const FounderSection = ({ compact = false }) => (
  <div
    className="relative overflow-hidden rounded-3xl border border-electric/30 bg-[#070d1d] shadow-2xl transition-all duration-300 hover:border-electric/50"
    data-testid="founder-dailyaura-section"
  >
    {/* Ambient Glow & Grid */}
    <div className="absolute inset-0 spotlight opacity-80" aria-hidden="true" />
    <div className="absolute inset-0 bg-grid opacity-30" aria-hidden="true" />
    
    {/* Animated Corner Aura */}
    <div
      className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-br from-electric/30 to-cyan-400/20 blur-3xl animate-pulse"
      aria-hidden="true"
    />

    <div className="relative grid gap-8 p-6 sm:p-10 lg:grid-cols-2 lg:gap-12 lg:p-12">
      <Reveal>
        {/* Live Active Property Pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3.5 py-1 text-xs font-mono font-medium text-emerald-400 shadow-sm mb-4">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span>LIVE OWNED PROPERTY</span>
        </div>

        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
          Founder of <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(56,189,248,0.3)]">DailyAura.in</span>
        </h2>

        <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
          Amrit Chhabra is the founder of DailyAura.in, a digital platform built around AI study tools, productivity
          content and audience-focused resources. DailyAura is where strategy stops being theory: every page is
          researched, written, optimized and published through the same process we apply to client work.
        </p>

        <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
          The platform demonstrates hands-on experience across SEO, website management, content strategy, publishing
          and content optimization. It is a working example of building organic visibility from the ground up, one
          well-planned page at a time.
        </p>

        {!compact && (
          <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
            Running a live property also means living with the consequences of every decision: site structure, internal
            linking, publishing cadence and search performance monitoring are not abstract topics here. They are weekly
            practice, and that practice shapes the way we approach every project.
          </p>
        )}

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="https://dailyaura.in"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="dailyaura-link"
            className="group inline-flex items-center gap-2 rounded-full border border-electric/40 bg-electric-deep/20 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-electric-deep hover:shadow-[0_0_28px_rgba(37,99,235,0.45)] active:scale-95"
          >
            <Globe className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12 text-electric-bright" aria-hidden="true" />
            <span>Visit DailyAura.in</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <span className="text-xs font-mono text-slate-500">
            Real Live Traffic & Content Operations
          </span>
        </div>
      </Reveal>

      {/* 4 Pillars with Animated Hover Details */}
      <div className="grid gap-3.5 sm:grid-cols-2">
        {PILLARS.map((pillar, i) => {
          const Icon = pillar.icon;
          return (
            <Reveal key={pillar.title} delay={i * 0.07}>
              <div
                className="card-premium card-hover group relative h-full p-5 sm:p-6 transition-all duration-300 hover:border-electric/60 hover:shadow-[0_0_25px_rgba(37,99,235,0.18)]"
                data-testid={`dailyaura-pillar-${i + 1}`}
              >
                {/* Top Shimmer Line */}
                <div
                  className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />

                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-electric/30 bg-electric-deep/15 text-electric-bright transition-all duration-300 group-hover:scale-110 group-hover:bg-electric-deep/30">
                    <Icon className={`h-4.5 w-4.5 ${pillar.color}`} aria-hidden="true" />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500 font-semibold">
                    Phase {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-3.5 font-display text-sm sm:text-base font-bold text-slate-100 group-hover:text-white transition-colors">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">{pillar.text}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </div>
);
