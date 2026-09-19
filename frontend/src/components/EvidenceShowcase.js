import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Reveal } from "./Reveal";
import { EvidenceCard, EvidenceMetrics } from "./Evidence";
import { GSC_FEATURED, GSC_GALLERY } from "../data/site";

export const GscShowcase = ({ limit, showGallery = true, testidPrefix = "gsc" }) => {
  const [expanded, setExpanded] = useState(false);
  const items = limit ? GSC_FEATURED.slice(0, limit) : GSC_FEATURED;

  return (
    <div>
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((item, i) => (
          <Reveal key={item.id} delay={(i % 2) * 0.08}>
            <EvidenceCard item={item}>
              <p className="eyebrow">Performance Evidence {String(i + 1).padStart(2, "0")}</p>
              <p className="mt-2 text-xs font-mono text-slate-500">{item.period}</p>
              <div className="mt-4">
                <EvidenceMetrics metrics={item.metrics} />
              </div>
              <p className="mt-4 text-sm text-slate-400 leading-relaxed">{item.note}</p>
            </EvidenceCard>
          </Reveal>
        ))}
      </div>

      {showGallery && (
        <div className="mt-10">
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              data-testid={`${testidPrefix}-gallery-toggle`}
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-6 py-3 text-sm font-medium text-slate-300 transition-colors hover:border-electric/50 hover:text-white"
            >
              {expanded ? "Hide additional evidence" : "View 10 more Search Performance reports"}
              {expanded ? <ChevronUp className="h-4 w-4" aria-hidden="true" /> : <ChevronDown className="h-4 w-4" aria-hidden="true" />}
            </button>
          </div>
          {expanded && (
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" data-testid={`${testidPrefix}-gallery`}>
              {GSC_GALLERY.map((item, i) => (
                <Reveal key={item.id} delay={(i % 3) * 0.06}>
                  <EvidenceCard item={item}>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.caption}</p>
                  </EvidenceCard>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
