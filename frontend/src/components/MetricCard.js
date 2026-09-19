import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { Reveal } from "./Reveal";

export const MetricCard = ({ label, value, prev, index = 0, testid }) => (
  <Reveal delay={index * 0.06}>
    <div className="card-premium card-hover p-5" data-testid={testid || `metric-card-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
      <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500 font-mono">{label}</p>
      <p className="mt-2.5 font-mono text-2xl sm:text-3xl font-semibold text-white">{value}</p>
      {prev && (
        <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-slate-400">
          <span className="text-slate-500">vs {prev}</span>
          <TrendingUp className="h-3.5 w-3.5 text-electric-bright" aria-hidden="true" />
        </p>
      )}
    </div>
  </Reveal>
);
