import { Globe, PenLine, Wrench, TrendingUp } from "lucide-react";
import { Reveal } from "./Reveal";

const PILLARS = [
  { icon: Globe, title: "Owned Platform", text: "DailyAura.in is planned, built and managed end to end: structure, publishing and ongoing website management." },
  { icon: PenLine, title: "Content Engine", text: "A steady publishing system covering AI study tools, productivity content and audience-focused resources." },
  { icon: Wrench, title: "SEO in Practice", text: "Keyword research, on page optimization, internal linking and content optimization applied on a live property." },
  { icon: TrendingUp, title: "Continuous Growth", text: "Search performance is monitored and content is refined over time, the same process we bring to client work." },
];

export const FounderSection = ({ compact = false }) => (
  <div className="relative overflow-hidden rounded-3xl border border-electric/25 bg-[#0b0f19]" data-testid="founder-dailyaura-section">
    <div className="absolute inset-0 spotlight" aria-hidden="true" />
    <div className="relative grid gap-12 p-8 sm:p-12 lg:grid-cols-2 lg:p-16">
      <Reveal>
        <p className="eyebrow">Founder Story</p>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
          Founder of <span className="text-gradient-blue">DailyAura.in</span>
        </h2>
        <p className="mt-6 text-base text-slate-400 leading-relaxed">
          Amrit Chhabra is the founder of DailyAura.in, a digital platform built around AI study tools, productivity
          content and audience-focused resources. DailyAura is where strategy stops being theory: every page is
          researched, written, optimized and published through the same process we apply to client work.
        </p>
        <p className="mt-4 text-base text-slate-400 leading-relaxed">
          The platform demonstrates hands-on experience across SEO, website management, content strategy, publishing
          and content optimization. It is a working example of building organic visibility from the ground up, one
          well-planned page at a time.
        </p>
        {!compact && (
          <p className="mt-4 text-base text-slate-400 leading-relaxed">
            Running a live property also means living with the consequences of every decision: site structure, internal
            linking, publishing cadence and search performance monitoring are not abstract topics here. They are weekly
            practice, and that practice shapes the way we approach every project.
          </p>
        )}
        <a
          href="https://dailyaura.in"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="dailyaura-link"
          className="mt-7 inline-flex items-center gap-2 rounded-full border border-electric/40 bg-electric-deep/15 px-6 py-3 text-sm font-semibold text-white transition-[background-color,box-shadow] duration-300 hover:bg-electric-deep hover:shadow-[0_0_24px_rgba(37,99,235,0.4)]"
        >
          <Globe className="h-4 w-4" aria-hidden="true" />
          Visit DailyAura.in
        </a>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2">
        {PILLARS.map((pillar, i) => {
          const Icon = pillar.icon;
          return (
            <Reveal key={pillar.title} delay={i * 0.07}>
              <div className="card-premium card-hover h-full p-6" data-testid={`dailyaura-pillar-${i + 1}`}>
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-electric/30 bg-electric-deep/15 text-electric-bright">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-600">
                  Phase {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-1.5 font-display text-base font-semibold text-slate-100">{pillar.title}</h3>
                <p className="mt-2.5 text-sm text-slate-400 leading-relaxed">{pillar.text}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </div>
);
