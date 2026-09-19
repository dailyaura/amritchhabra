import { Reveal } from "./Reveal";

export const SectionHeading = ({ chapter, title, lead, align = "left" }) => (
  <Reveal className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
    {chapter && (
      <p className="eyebrow" data-testid="section-chapter">
        {chapter}
      </p>
    )}
    <h2 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
      {title}
    </h2>
    {lead && <p className="mt-5 text-base text-slate-400 leading-relaxed">{lead}</p>}
  </Reveal>
);
