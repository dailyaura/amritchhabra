import { useState } from "react";
import { Reveal } from "./Reveal";
import { SECTORS } from "../data/site";
import { CheckCircle2, ChevronRight } from "lucide-react";

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export const SectorGrid = () => {
  const [active, setActive] = useState(null);
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4" data-testid="sector-grid">
      {SECTORS.map((sector, i) => {
        const isActive = active === sector.name;
        return (
          <Reveal key={sector.name} delay={(i % 8) * 0.04}>
            <button
              type="button"
              onClick={() => setActive(isActive ? null : sector.name)}
              aria-expanded={isActive}
              data-testid={`sector-grid-item-${slug(sector.name)}`}
              className={`card-premium card-hover group relative h-full w-full p-4 text-left transition-all duration-300 overflow-hidden ${
                isActive
                  ? "border-electric/80 bg-electric-deep/15 shadow-[0_0_25px_rgba(37,99,235,0.25)]"
                  : "hover:border-slate-700 hover:bg-slate-900/60"
              }`}
            >
              {/* Top Accent Shimmer on Active or Hover */}
              <div
                className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-opacity duration-300 ${
                  isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
                aria-hidden="true"
              />

              <div className="flex items-center justify-between">
                <p className={`text-sm font-semibold transition-colors ${isActive ? "text-white" : "text-slate-100 group-hover:text-white"}`}>
                  {sector.name}
                </p>
                {isActive ? (
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                ) : (
                  <ChevronRight className="h-3.5 w-3.5 text-slate-600 transition-transform group-hover:translate-x-0.5 group-hover:text-electric-bright shrink-0" />
                )}
              </div>

              <p
                className={`mt-2 text-xs leading-relaxed transition-all duration-300 ${
                  isActive ? "text-slate-200 opacity-100" : "text-slate-400 opacity-60 group-hover:opacity-90"
                }`}
              >
                {isActive ? sector.angle : "Tap to view focus"}
              </p>
            </button>
          </Reveal>
        );
      })}
    </div>
  );
};
