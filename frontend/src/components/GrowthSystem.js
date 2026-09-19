import { Link } from "react-router-dom";
import { Search, Share2, Target, PenLine, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const CHANNELS = [
  {
    icon: Search,
    name: "SEO",
    path: "/seo",
    role: "Builds organic visibility that compounds over time and captures existing search demand.",
  },
  {
    icon: PenLine,
    name: "Content",
    path: "/content-writing",
    role: "Supports search rankings and audience education with structured, intent-led writing.",
  },
  {
    icon: Share2,
    name: "Social Media",
    path: "/social-media",
    role: "Expands content distribution and keeps the brand present where the audience spends time.",
  },
  {
    icon: Target,
    name: "Meta Ads",
    path: "/meta-ads",
    role: "Adds targeted paid reach and direct response campaigns on top of organic momentum.",
  },
];

export const GrowthSystem = () => (
  <div className="grid items-center gap-10 lg:grid-cols-5">
    <Reveal className="lg:col-span-2">
      <p className="eyebrow">Connected Channels</p>
      <h3 className="mt-4 font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
        A Connected Digital Growth System
      </h3>
      <p className="mt-4 text-base text-slate-400 leading-relaxed">
        Channels are strongest when they work together. Search captures demand, content educates the audience, social
        expands distribution, and paid campaigns add targeted reach. Each channel feeds the next instead of operating
        in isolation.
      </p>
    </Reveal>
    <div className="grid gap-4 sm:grid-cols-2 lg:col-span-3">
      {CHANNELS.map((channel, i) => {
        const Icon = channel.icon;
        return (
          <Reveal key={channel.name} delay={i * 0.07}>
            <Link
              to={channel.path}
              data-testid={`growth-system-${channel.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="card-premium card-hover group relative block h-full p-6"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-electric/30 bg-electric-deep/15 text-electric-bright">
                  <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                </span>
                <span className="font-display text-base font-semibold text-slate-100">{channel.name}</span>
                <ArrowRight
                  className="ml-auto h-4 w-4 text-slate-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-electric-bright"
                  aria-hidden="true"
                />
              </div>
              <p className="mt-3.5 text-sm text-slate-400 leading-relaxed">{channel.role}</p>
            </Link>
          </Reveal>
        );
      })}
    </div>
  </div>
);
