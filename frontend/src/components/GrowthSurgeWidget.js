import { ArrowUp, Zap, TrendingUp, Sparkles } from "lucide-react";

export const GrowthSurgeWidget = ({ compact = false }) => {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-electric/40 bg-[#070d1d]/95 p-3.5 sm:p-4 shadow-[0_0_35px_rgba(37,99,235,0.25)] backdrop-blur-xl">
      {/* Electric Lightning Beam passing across top border */}
      <div className="absolute inset-x-0 top-0 h-[2px] animate-electric-beam" aria-hidden="true" />

      <div className="flex items-center justify-between gap-3">
        {/* Left: Electric Lightning Badge + Upward Surging Arrow */}
        <div className="flex items-center gap-2.5">
          {/* Arrow Surge Container with Continuous Upward Movement */}
          <div className="relative flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-400/40 bg-gradient-to-t from-electric/20 to-cyan-500/10 shadow-inner overflow-hidden">
            {/* Ambient Upward Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-electric/30 via-transparent to-cyan-300/30" />
            
            {/* Primary Upward Rising Arrow */}
            <ArrowUp className="absolute h-5 w-5 text-cyan-300 drop-shadow-[0_0_8px_rgba(56,189,248,0.9)] animate-arrow-surge" />
            
            {/* Secondary Follow-up Arrow for continuous stream */}
            <ArrowUp className="absolute h-4 w-4 text-emerald-400 opacity-60 animate-arrow-surge-delayed" />
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-mono text-xs sm:text-sm font-bold text-white tracking-tight">
                Live Traffic Surge
              </span>
              {/* Electric Lightning Icon */}
              <Zap className="h-3.5 w-3.5 text-amber-400 animate-lightning" />
            </div>
            <p className="text-[11px] font-mono text-emerald-400 font-semibold flex items-center gap-1">
              <span>+340% COMPOUNDING</span>
            </p>
          </div>
        </div>

        {/* Right: Real-time Live Equalizer / Pulsing Growth Bars */}
        <div className="flex items-end gap-1 h-7 sm:h-8 px-2 py-1 rounded-lg bg-slate-900/80 border border-slate-800">
          <div className="w-1 sm:w-1.5 rounded-full bg-cyan-400 animate-bar-1" />
          <div className="w-1 sm:w-1.5 rounded-full bg-electric-bright animate-bar-2" />
          <div className="w-1 sm:w-1.5 rounded-full bg-emerald-400 animate-bar-3" />
          <div className="w-1 sm:w-1.5 rounded-full bg-amber-400 animate-bar-4" />
        </div>
      </div>
    </div>
  );
};
