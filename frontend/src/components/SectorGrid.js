import { useState } from "react";
import { Reveal } from "./Reveal";
import { SECTORS } from "../data/site";

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
              className={`card-premium card-hover h-full w-full p-4 text-left transition-colors ${
                isActive ? "border-electric/60 bg-electric-deep/10" : ""
              }`}
            >
              <p className="text-sm font-semibold text-slate-100">{sector.name}</p>
              <p
                className={`mt-2 text-xs leading-relaxed text-slate-400 transition-[opacity,max-height] duration-300 ${
                  isActive ? "opacity-100" : "opacity-60"
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
