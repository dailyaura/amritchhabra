import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export const CTASection = ({ title, text, ctaLabel, ctaHref = "/contact", testid = "cta-section" }) => (
  <section className="container-shell py-20 lg:py-28" data-testid={testid}>
    <Reveal>
      <div className="relative overflow-hidden rounded-3xl border border-electric/25 bg-[#0b0f19] px-7 py-14 sm:px-12 lg:px-16 lg:py-20">
        <div className="absolute inset-0 spotlight" aria-hidden="true" />
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
        <div className="relative max-w-3xl">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.12]">
            {title}
          </h2>
          {text && <p className="mt-5 text-base md:text-lg text-slate-400 leading-relaxed">{text}</p>}
          <div className="mt-9">
            <Link
              to={ctaHref}
              data-testid={`${testid}-button`}
              className="group inline-flex items-center gap-2 rounded-full bg-electric-deep px-8 py-4 text-sm font-semibold text-white transition-[background-color,box-shadow] duration-300 hover:bg-electric hover:shadow-[0_0_36px_rgba(37,99,235,0.5)]"
            >
              {ctaLabel}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </Reveal>
  </section>
);
