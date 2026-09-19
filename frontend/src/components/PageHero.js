import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export const PageHero = ({ eyebrow, title, lead, ctaLabel, ctaHref, testid }) => (
  <header className="relative overflow-hidden">
    <div className="absolute inset-0 spotlight" aria-hidden="true" />
    <div className="absolute inset-0 bg-grid opacity-60" aria-hidden="true" />
    <div className="container-shell relative pt-36 pb-20 lg:pt-44 lg:pb-24">
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]">
          {title}
        </h1>
        {lead && <p className="mt-6 max-w-2xl text-base md:text-lg text-slate-400 leading-relaxed">{lead}</p>}
        {ctaLabel && (
          <div className="mt-9">
            <Link
              to={ctaHref}
              data-testid={testid || "page-hero-cta"}
              className="group inline-flex items-center gap-2 rounded-full bg-electric-deep px-7 py-3.5 text-sm font-semibold text-white transition-[background-color,box-shadow] duration-300 hover:bg-electric hover:shadow-[0_0_30px_rgba(37,99,235,0.45)]"
            >
              {ctaLabel}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        )}
      </Reveal>
    </div>
  </header>
);
