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
        className="card-premium card-hover group relative flex h-full flex-col overflow-hidden p-7"
      >
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-electric-deep/10 blur-3xl transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          aria-hidden="true"
        />
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-electric/30 bg-electric-deep/15 text-electric-bright transition-colors duration-300 group-hover:bg-electric-deep/30">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <h3 className="mt-6 font-display text-xl font-semibold text-slate-100">{service.title}</h3>
        <p className="mt-3 flex-1 text-sm text-slate-400 leading-relaxed">{service.description}</p>
        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-electric-bright">
          View Service
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
        </span>
      </Link>
    </Reveal>
  );
};
