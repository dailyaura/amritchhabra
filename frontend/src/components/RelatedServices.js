import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

export const RelatedServices = ({ links }) => (
  <nav aria-label="Related services" className="grid gap-4 sm:grid-cols-2" data-testid="related-services">
    {links.map((link, i) => (
      <Reveal key={link.path} delay={i * 0.06}>
        <Link
          to={link.path}
          data-testid={`related-link-${link.path.replace(/\//g, "")}`}
          className="card-premium card-hover group flex items-start justify-between gap-4 p-6"
        >
          <span>
            <span className="block text-sm font-semibold text-slate-100">{link.label}</span>
            <span className="mt-1.5 block text-sm text-slate-400 leading-relaxed">{link.text}</span>
          </span>
          <ArrowUpRight
            className="mt-1 h-4 w-4 shrink-0 text-electric-bright transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </Link>
      </Reveal>
    ))}
  </nav>
);
