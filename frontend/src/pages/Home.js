import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight, BadgeCheck, Sparkles } from "lucide-react";
import { useSeo } from "../components/Seo";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { ServiceCard } from "../components/ServiceCard";
import { Marquee } from "../components/Marquee";
import { SectorGrid } from "../components/SectorGrid";
import { CTASection } from "../components/CTASection";
import { GrowthSystem } from "../components/GrowthSystem";
import { FounderSection } from "../components/FounderSection";
import { EvidenceCard, EvidenceMetrics } from "../components/Evidence";
import { PAGE_SEO, SERVICES, GROWTH_STEPS, GSC_FEATURED, SOCIAL_EVIDENCE, META_ADS_EVIDENCE } from "../data/site";

const MaskedLine = ({ children, delay }) => (
  <span className="block overflow-hidden pb-1">
    <motion.span
      className="block"
      initial={{ y: "112%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.span>
  </span>
);

const HERO_METRICS = [
  { value: "21+", label: "Sectors worked across" },
  { value: "119k", label: "Search clicks in one 3 month period" },
  { value: "1.0M", label: "Content views in one reporting period" },
];

const Hero = () => {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 60]);

  return (
    <section ref={ref} className="relative overflow-hidden" data-testid="hero-section">
      <div className="absolute inset-0 spotlight" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid opacity-70" aria-hidden="true" />
      <div className="container-shell relative grid items-center gap-14 pt-36 pb-16 lg:grid-cols-12 lg:pt-44 lg:pb-24">
        <motion.div style={{ y: textY }} className="lg:col-span-7">
          <motion.p
            className="inline-flex items-center gap-2 rounded-full border border-electric/30 bg-electric-deep/10 px-4 py-1.5 text-xs font-mono uppercase tracking-[0.2em] text-electric-bright"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            data-testid="hero-badge"
          >
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Amrit Chhabra / Digital Marketing Professional
          </motion.p>
          <h1 className="mt-7 font-display text-4xl sm:text-5xl lg:text-[64px] font-bold tracking-tight text-white leading-[1.06]">
            <MaskedLine delay={0.15}>Digital Marketing That</MaskedLine>
            <MaskedLine delay={0.3}>Turns Strategy Into</MaskedLine>
            <MaskedLine delay={0.45}>
              <span className="text-gradient-blue">Measurable Growth</span>
            </MaskedLine>
          </h1>
          <motion.p
            className="mt-7 max-w-xl text-base md:text-lg text-slate-400 leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            We plan, execute and optimize SEO, social media, Meta Ads, email marketing and content for brands that want
            growth they can verify. Every result on this site is backed by real dashboard evidence.
          </motion.p>
          <motion.div
            className="mt-9 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
          >
            <Link
              to="/contact"
              data-testid="hero-cta-discuss-growth"
              className="group inline-flex items-center gap-2 rounded-full bg-electric-deep px-8 py-4 text-sm font-semibold text-white transition-[background-color,box-shadow] duration-300 hover:bg-electric hover:shadow-[0_0_36px_rgba(37,99,235,0.5)]"
            >
              Let's Discuss Your Growth
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <Link
              to="/results"
              data-testid="hero-cta-view-results"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-8 py-4 text-sm font-semibold text-slate-200 transition-colors duration-300 hover:border-electric/60 hover:text-white"
            >
              View Results
            </Link>
          </motion.div>
          <motion.div
            className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-slate-800/80 pt-7"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.05 }}
            data-testid="hero-metrics-bar"
          >
            {HERO_METRICS.map((m) => (
              <div key={m.label}>
                <p className="font-mono text-2xl sm:text-3xl font-semibold text-white">{m.value}</p>
                <p className="mt-1.5 text-[11px] leading-snug text-slate-500">{m.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div style={{ y: photoY }} className="lg:col-span-5">
          <motion.div
            className="relative mx-auto max-w-sm lg:max-w-none"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="absolute -inset-6 rounded-[36px] bg-electric-deep/15 blur-3xl animate-glow-pulse"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-3xl border border-slate-700/80 shadow-[0_0_50px_rgba(37,99,235,0.18)]">
              <img
                src="/assets/amrit-chhabra.png"
                alt="Amrit Chhabra, Digital Marketing Professional and Founder of DailyAura.in"
                className="h-auto w-full object-cover"
                width="864"
                height="1184"
                data-testid="hero-photo"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/70 via-transparent to-transparent" aria-hidden="true" />
            </div>
            <div className="glass absolute -left-4 bottom-8 flex items-center gap-3 rounded-2xl border border-electric/30 px-5 py-3.5 shadow-[0_0_30px_rgba(37,99,235,0.25)] sm:-left-8">
              <BadgeCheck className="h-5 w-5 text-electric-bright" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-white">Founder</p>
                <p className="text-xs text-electric-bright font-mono">DailyAura.in</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default function Home() {
  useSeo(PAGE_SEO.home.title, PAGE_SEO.home.description);

  return (
    <>
      <Hero />
      <Marquee />

      <section className="container-shell py-20 lg:py-28" data-testid="home-intro">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
          <SectionHeading
            chapter="01 // Introduction"
            title="A performance-first digital marketing practice"
            lead="This portfolio is built on a simple belief: marketing should be planned like a system and reported like a science. We work across search, social, paid and content with one standard. If it cannot be measured, it does not get claimed."
          />
          <Reveal delay={0.1}>
            <p className="text-base text-slate-400 leading-relaxed">
              Our work spans more than 21 sectors, from clothing brands and real estate to education and professional
              services. Across every engagement the pattern stays the same: research first, execute with care, monitor
              performance honestly, and keep optimizing. The evidence sections on this site use real Google Search
              Console, Meta Business Suite and Meta Ads dashboards, because documented performance says more than any
              promise.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-shell py-20 lg:py-28" data-testid="home-services">
        <SectionHeading
          chapter="02 // Services"
          title="Five disciplines, one growth system"
          lead="Each service is strong on its own. Together they form a connected system where search, content, social, paid and email reinforce each other."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.path} service={service} index={i} />
          ))}
        </div>
      </section>

      <section className="border-y border-slate-800/70 bg-[#050a16]" data-testid="home-approach">
        <div className="container-shell py-20 lg:py-28">
          <SectionHeading
            chapter="03 // Approach"
            title="Strategy, execution, performance, evidence, growth"
            lead="The operating loop behind every project. It keeps work accountable and makes progress visible."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {GROWTH_STEPS.map((step, i) => (
              <Reveal key={step.num} delay={i * 0.08}>
                <div className="card-premium card-hover h-full p-6" data-testid={`approach-step-${step.num}`}>
                  <p className="font-mono text-xs text-electric-bright">{step.num}</p>
                  <h3 className="mt-3 font-display text-lg font-semibold text-slate-100">{step.title}</h3>
                  <p className="mt-2.5 text-sm text-slate-400 leading-relaxed">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-20 lg:py-28" data-testid="home-seo-preview">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            chapter="04 // Search Evidence"
            title="A closer look at Search Performance"
            lead="Real Google Search Console reports across different properties and periods. Shown exactly as reported, with client identities protected."
          />
          <Reveal>
            <Link
              to="/results"
              data-testid="home-seo-preview-cta"
              className="group inline-flex items-center gap-2 rounded-full border border-slate-700 px-6 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-electric/60 hover:text-white"
            >
              View Full Results
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[GSC_FEATURED[0], GSC_FEATURED[3], GSC_FEATURED[4]].map((item, i) => (
            <Reveal key={item.id} delay={i * 0.08}>
              <EvidenceCard item={item}>
                <p className="text-xs font-mono text-slate-500">{item.period}</p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {item.metrics.slice(0, 2).map((m) => (
                    <div key={m.label} className="rounded-lg border border-slate-800 bg-[#111827]/60 px-3.5 py-2.5">
                      <p className="text-[10px] uppercase tracking-[0.14em] text-slate-500 font-mono">{m.label}</p>
                      <p className="mt-1 font-mono text-base font-semibold text-white">{m.value}</p>
                    </div>
                  ))}
                </div>
              </EvidenceCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-800/70 bg-[#050a16]" data-testid="home-social-preview">
        <div className="container-shell py-20 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                chapter="05 // Social Evidence"
                title="Social content that earns real reach"
                lead="Meta Business Suite reports showing what structured content planning and reels strategy can build. No mockups, no invented numbers, just the dashboards."
              />
              <div className="mt-9 grid grid-cols-3 gap-4">
                {[
                  { value: "1.0M", label: "Views in one period" },
                  { value: "540.2K", label: "Reach, same period" },
                  { value: "190.9%", label: "Reach lift, quarterly view" },
                ].map((m, i) => (
                  <Reveal key={m.label} delay={i * 0.07}>
                    <div className="card-premium p-5" data-testid={`home-social-metric-${i + 1}`}>
                      <p className="font-mono text-xl sm:text-2xl font-semibold text-white">{m.value}</p>
                      <p className="mt-1.5 text-[11px] leading-snug text-slate-500">{m.label}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={0.2}>
                <Link
                  to="/social-media"
                  data-testid="home-social-preview-cta"
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-electric-bright"
                >
                  Explore the social media approach
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <EvidenceCard item={SOCIAL_EVIDENCE[1]}>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {SOCIAL_EVIDENCE[1].metrics[0].value} views and {SOCIAL_EVIDENCE[1].metrics[2].value} reach in a
                  single reporting period, led by Instagram distribution.
                </p>
              </EvidenceCard>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-shell py-20 lg:py-28" data-testid="home-paid-preview">
        <SectionHeading
          chapter="06 // Paid Evidence"
          title="Paid campaigns, reported snapshot by snapshot"
          lead="Meta Ads messaging campaigns shown as two independent performance snapshots. Each period stands on its own, exactly as reported."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {META_ADS_EVIDENCE.map((snap, i) => (
            <Reveal key={snap.id} delay={i * 0.08}>
              <div className="card-premium card-hover h-full p-7" data-testid={`home-paid-snapshot-${i + 1}`}>
                <p className="eyebrow">{snap.title}</p>
                <div className="mt-5 grid grid-cols-3 gap-3">
                  {snap.metrics.map((m) => (
                    <div key={m.label}>
                      <p className="font-mono text-lg sm:text-xl font-semibold text-white">{m.value}</p>
                      <p className="mt-1 text-[11px] leading-snug text-slate-500">{m.label}</p>
                    </div>
                  ))}
                </div>
                <Link
                  to="/meta-ads"
                  data-testid={`home-paid-snapshot-cta-${i + 1}`}
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-electric-bright"
                >
                  See the campaign evidence
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-800/70 bg-[#050a16]" data-testid="home-content-email">
        <div className="container-shell grid gap-6 py-20 lg:grid-cols-2 lg:py-28">
          <Reveal>
            <div className="card-premium card-hover h-full p-8">
              <p className="eyebrow">Content Writing</p>
              <h3 className="mt-4 font-display text-2xl font-semibold text-white">Content built to rank and to be read</h3>
              <p className="mt-4 text-base text-slate-400 leading-relaxed">
                Search intent research, clear structure, natural keyword use and internal linking turn articles into
                assets. Our content work feeds directly into SEO performance, because the two disciplines are planned
                together, not separately.
              </p>
              <Link
                to="/content-writing"
                data-testid="home-content-cta"
                className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-electric-bright"
              >
                Explore content writing
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card-premium card-hover h-full p-8">
              <p className="eyebrow">Email Marketing</p>
              <h3 className="mt-4 font-display text-2xl font-semibold text-white">Email that respects the inbox</h3>
              <p className="mt-4 text-base text-slate-400 leading-relaxed">
                Segmentation, campaign planning and copy that earns the open. Email is where audience attention becomes
                retention: follow-ups, offers and communication timed around what subscribers actually care about.
              </p>
              <Link
                to="/email-marketing"
                data-testid="home-email-cta"
                className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-electric-bright"
              >
                Explore email marketing
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-shell py-20 lg:py-28" data-testid="home-sectors">
        <SectionHeading
          chapter="07 // Range"
          title="Experience across 21+ sectors"
          lead="Sector experience, presented honestly: no client names, no logos, just the range of markets we have planned and executed for. Tap any sector to see the typical focus."
        />
        <div className="mt-12">
          <SectorGrid />
        </div>
      </section>

      <section className="border-y border-slate-800/70 bg-[#050a16]" data-testid="home-results-preview">
        <div className="container-shell py-20 lg:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              chapter="08 // Proof"
              title="Results across every channel"
              lead="Search, social and paid performance, documented with real dashboards and explained with context."
            />
            <Reveal>
              <Link
                to="/results"
                data-testid="home-results-cta"
                className="group inline-flex items-center gap-2 rounded-full bg-electric-deep px-7 py-3.5 text-sm font-semibold text-white transition-[background-color,box-shadow] duration-300 hover:bg-electric hover:shadow-[0_0_30px_rgba(37,99,235,0.45)]"
              >
                View Full Results
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              { label: "SEO Performance", value: "119k clicks", note: "in a 3 month compare period", path: "/seo" },
              { label: "Social Media Performance", value: "1.0M views", note: "in a single reporting period", path: "/social-media" },
              { label: "Paid Advertising", value: "₹16.25", note: "cost per messaging conversation, Snapshot A", path: "/meta-ads" },
            ].map((card, i) => (
              <Reveal key={card.label} delay={i * 0.08}>
                <Link
                  to={card.path}
                  data-testid={`home-results-card-${i + 1}`}
                  className="card-premium card-hover group block h-full p-7"
                >
                  <p className="eyebrow">{card.label}</p>
                  <p className="mt-4 font-mono text-3xl font-semibold text-white">{card.value}</p>
                  <p className="mt-2 text-sm text-slate-500">{card.note}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-electric-bright">
                    See the evidence
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-16">
            <GrowthSystem />
          </div>
        </div>
      </section>

      <section className="container-shell py-20 lg:py-28" data-testid="home-founder">
        <FounderSection compact />
      </section>

      <CTASection
        title="Ready to build growth you can actually verify?"
        text="Tell us where your brand stands and where it needs to go. We will map the strategy, the channels and the metrics that matter."
        ctaLabel="Let's Discuss Your Growth"
        ctaHref="/contact"
        testid="home-final-cta"
      />
    </>
  );
}
