import { MARQUEE_ITEMS } from "../data/site";

export const Marquee = () => {
  const row = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="relative overflow-hidden border-y border-slate-800/70 bg-[#050a16] py-5" aria-label="Capabilities" data-testid="capabilities-marquee">
      <div className="flex w-max animate-marquee items-center gap-10">
        {row.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-10" aria-hidden={i >= MARQUEE_ITEMS.length}>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-slate-500">{item}</span>
            <span className="h-1.5 w-1.5 rotate-45 bg-electric/60" aria-hidden="true" />
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#050a16] to-transparent" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#050a16] to-transparent" aria-hidden="true" />
    </div>
  );
};
