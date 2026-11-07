import {
  Search,
  Share2,
  Target,
  Mail,
  PenLine,
  TrendingUp,
  Award,
  Sparkles,
  BarChart3,
  Layers,
} from "lucide-react";

const CAPABILITY_ITEMS = [
  { label: "SEO Strategy & Search Demand", icon: Search, color: "text-sky-400" },
  { label: "119,000+ Search Clicks", icon: TrendingUp, color: "text-emerald-400", highlight: true },
  { label: "Social Media Distribution", icon: Share2, color: "text-purple-400" },
  { label: "1.0M+ Instagram & Meta Views", icon: Sparkles, color: "text-pink-400", highlight: true },
  { label: "High-ROAS Meta Ads", icon: Target, color: "text-blue-400" },
  { label: "High-Retention Email Systems", icon: Mail, color: "text-amber-400" },
  { label: "Search-Intent Content Writing", icon: PenLine, color: "text-emerald-300" },
  { label: "21+ Sectors Experience", icon: Layers, color: "text-cyan-400", highlight: true },
  { label: "DailyAura Growth Engine", icon: BarChart3, color: "text-indigo-400" },
  { label: "Dashboard Verified Evidence", icon: Award, color: "text-emerald-400", highlight: true },
];

export const Marquee = () => {
  const row = [...CAPABILITY_ITEMS, ...CAPABILITY_ITEMS];

  return (
    <div
      className="relative overflow-hidden border-y border-slate-800/80 bg-[#050a16] py-3.5 sm:py-4 select-none group"
      aria-label="Capabilities and Evidence Marquee"
      data-testid="capabilities-marquee"
    >
      {/* Ticker Row with Pause-on-Hover */}
      <div className="flex w-max animate-marquee items-center gap-4 sm:gap-6 group-hover:[animation-play-state:paused] transition-all">
        {row.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={`${item.label}-${i}`}
              className={`flex items-center gap-2.5 rounded-full px-4 py-2 transition-all duration-300 ${
                item.highlight
                  ? "border border-electric/40 bg-electric-deep/15 text-white shadow-[0_0_15px_rgba(37,99,235,0.15)]"
                  : "border border-slate-800/90 bg-[#090e1c]/80 text-slate-300 hover:border-slate-700 hover:text-white"
              }`}
              aria-hidden={i >= CAPABILITY_ITEMS.length}
            >
              <Icon className={`h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 ${item.color}`} />
              <span className="font-mono text-xs sm:text-[13px] tracking-wide whitespace-nowrap font-medium">
                {item.label}
              </span>
              <span className="h-1 w-1 rounded-full bg-slate-600" aria-hidden="true" />
            </div>
          );
        })}
      </div>

      {/* Fade Gradients at Left & Right Edges */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#050a16] via-[#050a16]/80 to-transparent z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#050a16] via-[#050a16]/80 to-transparent z-10"
        aria-hidden="true"
      />
    </div>
  );
};
