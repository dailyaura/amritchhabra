import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";

export const CTASection = ({ title, text, ctaLabel, ctaHref = "/contact", testid = "cta-section" }) => (
  <section className="container-shell py-10 sm:py-14 lg:py-16" data-testid={testid}>
    <Reveal>
      <div className="relative overflow-hidden rounded-3xl border border-electric/35 bg-[#070d1d] px-6 py-10 sm:px-12 lg:px-14 lg:py-14 shadow-2xl transition-all duration-300 hover:border-electric/60">
        <div className="absolute inset-0 spotlight opacity-80" aria-hidden="true" />
        <div className="absolute inset-0 bg-grid opacity-30" aria-hidden="true" />
        
        {/* Animated glowing orbs in corners */}
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-electric/20 blur-3xl animate-pulse" aria-hidden="true" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-cyan-400/15 blur-3xl" aria-hidden="true" />

        <div className="relative max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-electric/30 bg-electric-deep/15 px-3 py-1 text-xs font-mono text-electric-bright mb-4">
            <Sparkles className="h-3 w-3 animate-spin-slow" />
            Direct Strategy & Performance Execution
          </div>

          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
            {title}
          </h2>

          {text && <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">{text}</p>}

          <div className="mt-7">
            <Link
              to={ctaHref}
              data-testid={`${testid}-button`}
              className="group inline-flex items-center gap-2 rounded-full bg-electric-deep px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-electric hover:shadow-[0_0_36px_rgba(37,99,235,0.5)] active:scale-95"
            >
              <span>{ctaLabel}</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </Reveal>
  </section>
);
