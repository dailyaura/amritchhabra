import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

export const ServiceCard = ({ service, index = 0 }) => {
  const Icon = service.icon;
  return (
    <Reveal delay={index * 0.07}>
      <Link
        to={service.path}
        data-testid={service.testid}
        className="card-premium card-hover group relative flex h-full flex-col overflow-hidden p-6 sm:p-7 transition-all duration-300 hover:border-electric/60 hover:shadow-[0_0_35px_rgba(37,99,235,0.2)]"
      >
        {/* Animated Gradient Accent Line on Top */}
        <div
          className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-electric-bright to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden="true"
        />

        {/* Ambient Glow */}
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-electric-deep/15 blur-3xl transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          aria-hidden="true"
        />

        {/* Icon Container with Hover Animation */}
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-electric/30 bg-electric-deep/15 text-electric-bright transition-all duration-300 group-hover:scale-110 group-hover:bg-electric-deep/30 group-hover:border-electric shadow-sm">
          <Icon className="h-5 w-5 transition-transform duration-300 group-hover:rotate-6" aria-hidden="true" />
        </div>

        <h3 className="mt-5 font-display text-lg sm:text-xl font-semibold text-slate-100 transition-colors group-hover:text-white">
          {service.title}
        </h3>
        <p className="mt-2.5 flex-1 text-sm text-slate-400 leading-relaxed">{service.description}</p>

        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-electric-bright transition-all duration-300 group-hover:text-cyan-300">
          <span>View Service</span>
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            aria-hidden="true"
          />
        </span>
      </Link>
    </Reveal>
  );
};
