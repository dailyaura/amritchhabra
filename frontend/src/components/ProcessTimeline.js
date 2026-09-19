import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";

export const ProcessTimeline = ({ steps, testidPrefix = "process" }) => {
  const reduce = useReducedMotion();
  return (
    <div className="relative" data-testid={`${testidPrefix}-timeline`}>
      <div className="absolute bottom-6 left-[22px] top-6 w-px bg-slate-800" aria-hidden="true" />
      {!reduce && (
        <motion.div
          className="absolute bottom-6 left-[22px] top-6 w-px origin-top bg-gradient-to-b from-electric-deep to-electric-bright"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          aria-hidden="true"
        />
      )}
      <ol className="space-y-5">
        {steps.map((step, i) => (
          <li key={step}>
            <Reveal delay={i * 0.06}>
              <div
                className="card-premium card-hover relative ml-14 p-5 sm:p-6"
                data-testid={`${testidPrefix}-step-${i + 1}`}
              >
                <span
                  className="absolute -left-14 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-electric/40 bg-[#0b0f19] font-mono text-sm font-semibold text-electric-bright shadow-[0_0_18px_rgba(37,99,235,0.25)]"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-lg font-semibold text-slate-100">{step}</h3>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  );
};
