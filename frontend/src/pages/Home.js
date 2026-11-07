import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useReducedMotion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Sparkles,
  TrendingUp,
  Layers,
  Award,
  Zap,
  Target,
  Activity,
  ShieldCheck,
  Search,
  Share2,
  Mail,
  PenLine,
  CheckCircle2,
  BarChart3,
} from "lucide-react";
import { useSeo } from "../components/Seo";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { ServiceCard } from "../components/ServiceCard";
import { Marquee } from "../components/Marquee";
import { SectorGrid } from "../components/SectorGrid";
import { CTASection } from "../components/CTASection";
import { GrowthSystem } from "../components/GrowthSystem";
import { FounderSection } from "../components/FounderSection";
import { EvidenceCard } from "../components/Evidence";
import {
  PAGE_SEO,
  SERVICES,
  GROWTH_STEPS,
  GSC_FEATURED,
  SOCIAL_EVIDENCE,
  META_ADS_EVIDENCE,
} from "../data/site";

const MaskedLine = ({ children, delay }) => (
  <span className="block overflow-hidden pb-0.5">
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

const ROTATING_PHRASES = [
  { text: "Measurable Growth", gradient: "from-blue-400 via-sky-300 to-emerald-400" },
  { text: "119,000+ Search Clicks", gradient: "from-emerald-400 via-teal-300 to-sky-400" },
  { text: "1.0M+ Social Reach", gradient: "from-purple-400 via-pink-400 to-rose-400" },
  { text: "High-Converting Meta Ads", gradient: "from-sky-400 via-blue-500 to-cyan-300" },
  { text: "Predictable Client Revenue", gradient: "from-amber-400 via-orange-300 to-emerald-400" },
];

const HERO_METRICS = [
  { value: "21+", label: "Sectors worked across", icon: Layers },
  { value: "119k", label: "Search clicks (3-mo period)", icon: TrendingUp },
  { value: "1.0M", label: "Content views in single period", icon: Sparkles },
];

const APPROACH_STEP_ICONS = [Target, Zap, Activity, ShieldCheck, Sparkles];

const Hero = () => {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 70]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 50]);

  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % ROTATING_PHRASES.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden" data-testid="hero-section">
      <div className="absolute inset-0 spotlight" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden="true" />

      {/* Tighter, more compact top/bottom padding to remove huge empty gaps */}
      <div className="container-shell relative grid items-center gap-10 pt-24 pb-10 sm:pt-28 sm:pb-12 lg:grid-cols-12 lg:pt-32 lg:pb-14">
        <motion.div style={{ y: textY }} className="lg:col-span-7">
          {/* Top Pill Badge */}
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-electric/30 bg-electric-deep/15 px-3.5 py-1.5 text-xs font-mono uppercase tracking-[0.2em] text-electric-bright shadow-[0_0_20px_rgba(37,99,235,0.2)]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            data-testid="hero-badge"
          >
            <Zap className="h-3.5 w-3.5 text-electric-bright animate-pulse" aria-hidden="true" />
            Amrit Chhabra / Digital Marketing Professional
          </motion.div>

          {/* Main Heading with Animated Rotating Flip Outcome */}
          <h1 className="mt-5 font-display text-3xl sm:text-4xl md:text-5xl lg:text-[58px] font-bold tracking-tight text-white leading-[1.1]">
            <MaskedLine delay={0.15}>Digital Marketing That</MaskedLine>
            <MaskedLine delay={0.3}>Turns Strategy Into</MaskedLine>
            <div className="h-[1.25em] overflow-hidden mt-1 sm:mt-1.5">
              <AnimatePresence mode="wait">
                <motion.span
                  key={phraseIndex}
                  initial={{ y: 36, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -36, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className={`block bg-gradient-to-r ${ROTATING_PHRASES[phraseIndex].gradient} bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(56,189,248,0.35)]`}
                >
                  {ROTATING_PHRASES[phraseIndex].text}
                </motion.span>
              </AnimatePresence>
            </div>
          </h1>

          <motion.p
            className="mt-5 max-w-xl text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            We plan, execute and optimize SEO, social media, Meta Ads, email marketing and content for brands that want
            growth they can verify. Every result on this site is backed by real dashboard evidence.
          </motion.p>

          {/* Hero CTAs */}
          <motion.div
            className="mt-7 flex flex-wrap items-center gap-3.5"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
          >
            <Link
              to="/contact"
              data-testid="hero-cta-discuss-growth"
              className="group inline-flex items-center gap-2 rounded-full bg-electric-deep px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-electric hover:shadow-[0_0_36px_rgba(37,99,235,0.5)] active:scale-95"
            >
              Let's Discuss Your Growth
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <Link
              to="/results"
              data-testid="hero-cta-view-results"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/40 px-7 py-3.5 text-sm font-semibold text-slate-200 transition-all duration-300 hover:border-electric/60 hover:text-white hover:bg-slate-800/40 active:scale-95"
            >
              View Results
            </Link>
          </motion.div>

          {/* Metrics bar with Interactive Cards */}
          <motion.div
            className="mt-8 grid max-w-xl grid-cols-3 gap-2.5 sm:gap-3.5 border-t border-slate-800/80 pt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            data-testid="hero-metrics-bar"
          >
            {HERO_METRICS.map((m) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.label}
                  className="rounded-xl border border-slate-800/80 bg-[#070d1d]/70 p-3 transition-all duration-300 hover:border-electric/50 hover:bg-slate-900/80"
                >
                  <div className="flex items-center gap-1.5 text-electric-bright">
                    <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    <p className="font-mono text-xl sm:text-2xl font-bold text-white tracking-tight">{m.value}</p>
                  </div>
                  <p className="mt-1 text-[11px] leading-snug text-slate-400 font-medium">{m.label}</p>
                </div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Hero Photo Column with Floating Interactive Badges */}
        <motion.div style={{ y: photoY }} className="lg:col-span-5">
          <motion.div
            className="relative mx-auto max-w-sm lg:max-w-none"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Spinning ambient aura ring */}
            <div
              className="absolute -inset-4 rounded-[40px] bg-gradient-to-tr from-electric/30 via-cyan-400/20 to-emerald-400/20 blur-2xl animate-pulse"
              aria-hidden="true"
            />

            {/* Photo frame */}
            <div className="relative overflow-hidden rounded-3xl border border-slate-700/80 shadow-[0_0_50px_rgba(37,99,235,0.22)] bg-[#070d1d]">
              <img
                src="/assets/amrit-chhabra.png"
                alt="Amrit Chhabra, Digital Marketing Professional and Founder of DailyAura.in"
                className="h-auto w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                width="864"
                height="1184"
                data-testid="hero-photo"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/80 via-transparent to-transparent" aria-hidden="true" />
            </div>

            {/* Floating Top Badge: Live Status */}
            <div className="glass absolute -top-3 -right-2 sm:-right-4 flex items-center gap-2 rounded-full border border-emerald-500/40 bg-[#070d1d]/90 px-3.5 py-1.5 shadow-[0_0_25px_rgba(16,185,129,0.25)] animate-float-subtle">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              <span className="text-[11px] font-mono font-semibold text-emerald-300 uppercase tracking-wider">
                Available For Work
              </span>
            </div>

            {/* Floating Bottom Badge: Founder DailyAura */}
            <div className="glass absolute -left-3 bottom-6 sm:-left-6 flex items-center gap-3 rounded-2xl border border-electric/40 bg-[#070d1d]/90 px-4 py-3 shadow-[0_0_30px_rgba(37,99,235,0.3)] transition-transform duration-300 hover:scale-105">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-electric/20 text-electric-bright border border-electric/30">
                <BadgeCheck className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white leading-tight">Founder</p>
                <p className="text-[11px] text-electric-bright font-mono font-medium">DailyAura.in</p>
              </div>
            </div>

            {/* Floating Side Badge: 119k Search Clicks */}
            <div className="hidden sm:flex glass absolute -right-3 bottom-14 items-center gap-2 rounded-xl border border-sky-500/30 bg-[#070d1d]/90 px-3 py-2 shadow-lg animate-float-subtle">
              <TrendingUp className="h-4 w-4 text-sky-400" />
              <span className="text-[11px] font-mono text-slate-200 font-medium">119k Clicks GSC</span>
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

      {/* Section 01: Introduction - Compact Spacing */}
      <section className="container-shell py-10 sm:py-14 lg:py-16" data-testid="home-intro">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <SectionHeading
            chapter="01 // Introduction"
            title="A performance-first digital marketing practice"
            lead="This portfolio is built on a simple belief: marketing should be planned like a system and reported like a science. We work across search, social, paid and content with one standard. If it cannot be measured, it does not get claimed."
          />
          <Reveal delay={0.1}>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Our work spans more than 21 sectors, from clothing brands and real estate to education and professional
              services. Across every engagement the pattern stays the same: research first, execute with care, monitor
              performance honestly, and keep optimizing. The evidence sections on this site use real Google Search
              Console, Meta Business Suite and Meta Ads dashboards, because documented performance says more than any
              promise.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Section 02: Services - Compact Spacing & Enhanced Animated Cards */}
      <section className="container-shell py-10 sm:py-14 lg:py-16 border-t border-slate-800/60" data-testid="home-services">
        <SectionHeading
          chapter="02 // Services"
          title="Five disciplines, one growth system"
          lead="Each service is strong on its own. Together they form a connected system where search, content, social, paid and email reinforce each other."
        />
        <div className="mt-8 sm:mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.path} service={service} index={i} />
          ))}
        </div>
      </section>

      {/* Section 03: Approach - Operating Loop with Connected Steps & Icons */}
      <section className="border-y border-slate-800/70 bg-[#050a16]" data-testid="home-approach">
        <div className="container-shell py-10 sm:py-14 lg:py-16">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <SectionHeading
              chapter="03 // Approach"
              title="Strategy, execution, performance, evidence, growth"
              lead="The operating loop behind every project. It keeps work accountable and makes progress visible."
            />
            {/* Live Loop Status Pill */}
            <div className="hidden sm:inline-flex items-center gap-2 rounded-full border border-electric/30 bg-electric-deep/10 px-3.5 py-1.5 text-xs font-mono text-electric-bright">
              <Activity className="h-3.5 w-3.5 text-emerald-400 animate-pulse" />
              <span>Closed-Loop Architecture</span>
            </div>
          </div>

          <div className="mt-8 sm:mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5 relative">
            {GROWTH_STEPS.map((step, i) => {
              const StepIcon = APPROACH_STEP_ICONS[i] || Zap;
              return (
                <Reveal key={step.num} delay={i * 0.08}>
                  <div
                    className="card-premium card-hover group relative h-full p-5 sm:p-6 transition-all duration-300 hover:border-electric/70 hover:shadow-[0_0_25px_rgba(37,99,235,0.2)] overflow-hidden"
                    data-testid={`approach-step-${step.num}`}
                  >
                    {/* Top Shimmer Line on Hover */}
                    <div
                      className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      aria-hidden="true"
                    />

                    <div className="flex items-center justify-between">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-electric/30 bg-electric-deep/15 text-electric-bright transition-all duration-300 group-hover:scale-110 group-hover:bg-electric-deep/30">
                        <StepIcon className="h-4.5 w-4.5" />
                      </span>
                      <span className="font-mono text-xs font-bold text-electric-bright">{step.num}</span>
                    </div>

                    <h3 className="mt-4 font-display text-base sm:text-lg font-bold text-slate-100 group-hover:text-white transition-colors">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">{step.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 04: Search Evidence with Real-Time GSC Indicator */}
      <section className="container-shell py-10 sm:py-14 lg:py-16" data-testid="home-seo-preview">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-mono text-sky-400 mb-3">
              <Search className="h-3 w-3 animate-pulse" />
              <span>GSC Verified Organic Data • 119k+ Clicks</span>
            </div>
            <SectionHeading
              chapter="04 // Search Evidence"
              title="A closer look at Search Performance"
              lead="Real Google Search Console reports across different properties and periods. Shown exactly as reported, with client identities protected."
            />
          </div>
          <Reveal>
            <Link
              to="/results"
              data-testid="home-seo-preview-cta"
              className="group inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/40 px-5 py-2.5 text-xs sm:text-sm font-medium text-slate-200 transition-all hover:border-electric/60 hover:text-white"
            >
              View Full Results
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
        <div className="mt-8 sm:mt-10 grid gap-5 md:grid-cols-3">
          {[GSC_FEATURED[0], GSC_FEATURED[3], GSC_FEATURED[4]].map((item, i) => (
            <Reveal key={item.id} delay={i * 0.08}>
              <EvidenceCard item={item}>
                <p className="text-xs font-mono text-slate-500">{item.period}</p>
                <div className="mt-4 grid grid-cols-2 gap-2.5">
                  {item.metrics.slice(0, 2).map((m) => (
                    <div key={m.label} className="rounded-lg border border-slate-800 bg-[#111827]/60 px-3 py-2">
                      <p className="text-[10px] uppercase tracking-[0.14em] text-slate-500 font-mono">{m.label}</p>
                      <p className="mt-0.5 font-mono text-sm sm:text-base font-semibold text-white">{m.value}</p>
                    </div>
                  ))}
                </div>
              </EvidenceCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Section 05: Social Evidence with Live Metrics & Icons */}
      <section className="border-y border-slate-800/70 bg-[#050a16]" data-testid="home-social-preview">
        <div className="container-shell py-10 sm:py-14 lg:py-16">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-3 py-1 text-xs font-mono text-pink-400 mb-3">
                <Sparkles className="h-3 w-3 animate-spin-slow" />
                <span>Meta Business Suite • 1,000,000+ Reach Engine</span>
              </div>
              <SectionHeading
                chapter="05 // Social Evidence"
                title="Social content that earns real reach"
                lead="Meta Business Suite reports showing what structured content planning and reels strategy can build. No mockups, no invented numbers, just the dashboards."
              />
              <div className="mt-7 grid grid-cols-3 gap-3">
                {[
                  { value: "1.0M", label: "Views in one period", icon: Sparkles, color: "text-pink-400" },
                  { value: "540.2K", label: "Reach, same period", icon: Share2, color: "text-sky-400" },
                  { value: "190.9%", label: "Reach lift, quarterly view", icon: TrendingUp, color: "text-emerald-400", badge: "+190.9% Lift" },
                ].map((m, i) => {
                  const MIcon = m.icon;
                  return (
                    <Reveal key={m.label} delay={i * 0.07}>
                      <div className="card-premium card-hover group p-4 sm:p-5 transition-all duration-300 hover:border-electric/60" data-testid={`home-social-metric-${i + 1}`}>
                        <div className="flex items-center justify-between">
                          <MIcon className={`h-4 w-4 ${m.color}`} />
                          {m.badge && (
                            <span className="text-[9px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/30">
                              LIFT
                            </span>
                          )}
                        </div>
                        <p className="mt-2 font-mono text-lg sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {m.value}
                        </p>
                        <p className="mt-1 text-[11px] leading-snug text-slate-400">{m.label}</p>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
              <Reveal delay={0.2}>
                <Link
                  to="/social-media"
                  data-testid="home-social-preview-cta"
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-electric-bright hover:text-cyan-300 transition-colors"
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

      {/* Section 06: Paid Evidence with High ROAS Efficiency Pills */}
      <section className="container-shell py-10 sm:py-14 lg:py-16" data-testid="home-paid-preview">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <SectionHeading
            chapter="06 // Paid Evidence"
            title="Paid campaigns, reported snapshot by snapshot"
            lead="Meta Ads messaging campaigns shown as two independent performance snapshots. Each period stands on its own, exactly as reported."
          />
          <div className="hidden sm:inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-mono text-emerald-400">
            <Target className="h-3.5 w-3.5" />
            <span>₹16.25 / Optimized Conversation</span>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 grid gap-5 md:grid-cols-2">
          {META_ADS_EVIDENCE.map((snap, i) => (
            <Reveal key={snap.id} delay={i * 0.08}>
              <div className="card-premium card-hover group relative h-full p-6 sm:p-7 transition-all duration-300 hover:border-electric/70 hover:shadow-[0_0_30px_rgba(37,99,235,0.2)]" data-testid={`home-paid-snapshot-${i + 1}`}>
                {/* Top Accent Shimmer */}
                <div
                  className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />

                <div className="flex items-center justify-between">
                  <p className="eyebrow">{snap.title}</p>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30 font-semibold">
                    Live Meta Ads Snapshot
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2.5">
                  {snap.metrics.map((m) => (
                    <div key={m.label} className="rounded-xl border border-slate-800 bg-[#0d1424]/70 p-2.5">
                      <p className="font-mono text-base sm:text-lg font-bold text-white tracking-tight">{m.value}</p>
                      <p className="mt-1 text-[11px] leading-snug text-slate-400">{m.label}</p>
                    </div>
                  ))}
                </div>
                <Link
                  to="/meta-ads"
                  data-testid={`home-paid-snapshot-cta-${i + 1}`}
                  className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-electric-bright hover:text-cyan-300 transition-colors"
                >
                  See the campaign evidence
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Section 07: Content & Email with Floating Feature Badges */}
      <section className="border-y border-slate-800/70 bg-[#050a16]" data-testid="home-content-email">
        <div className="container-shell grid gap-5 py-10 sm:py-14 lg:grid-cols-2 lg:py-16">
          <Reveal>
            <div className="card-premium card-hover group relative h-full p-6 sm:p-8 transition-all duration-300 hover:border-electric/70 hover:shadow-[0_0_30px_rgba(37,99,235,0.2)]">
              <div
                className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
              />
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-electric/30 bg-electric-deep/15 text-electric-bright group-hover:scale-110 transition-transform">
                  <PenLine className="h-5 w-5 text-emerald-400" />
                </span>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                  Search-Intent Architecture
                </span>
              </div>
              <h3 className="mt-4 font-display text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                Content built to rank and to be read
              </h3>
              <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
                Search intent research, clear structure, natural keyword use and internal linking turn articles into
                assets. Our content work feeds directly into SEO performance, because the two disciplines are planned
                together, not separately.
              </p>
              <Link
                to="/content-writing"
                data-testid="home-content-cta"
                className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-electric-bright hover:text-cyan-300"
              >
                Explore content writing
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card-premium card-hover group relative h-full p-6 sm:p-8 transition-all duration-300 hover:border-electric/70 hover:shadow-[0_0_30px_rgba(37,99,235,0.2)]">
              <div
                className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
              />
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-electric/30 bg-electric-deep/15 text-electric-bright group-hover:scale-110 transition-transform">
                  <Mail className="h-5 w-5 text-amber-400" />
                </span>
                <span className="text-[11px] font-mono text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/30">
                  Retention & Nurture Engine
                </span>
              </div>
              <h3 className="mt-4 font-display text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                Email that respects the inbox
              </h3>
              <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
                Segmentation, campaign planning and copy that earns the open. Email is where audience attention becomes
                retention: follow-ups, offers and communication timed around what subscribers actually care about.
              </p>
              <Link
                to="/email-marketing"
                data-testid="home-email-cta"
                className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-electric-bright hover:text-cyan-300"
              >
                Explore email marketing
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section 08: Sector Experience with Vertical Count */}
      <section className="container-shell py-10 sm:py-14 lg:py-16" data-testid="home-sectors">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <SectionHeading
            chapter="07 // Range"
            title="Experience across 21+ sectors"
            lead="Sector experience, presented honestly: no client names, no logos, just the range of markets we have planned and executed for. Tap any sector to see the typical focus."
          />
          <div className="hidden sm:inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1.5 text-xs font-mono text-cyan-400">
            <Layers className="h-3.5 w-3.5" />
            <span>21+ Scaled Verticals</span>
          </div>
        </div>
        <div className="mt-8 sm:mt-10">
          <SectorGrid />
        </div>
      </section>

      {/* Section 09: Results Preview & Connected System */}
      <section className="border-y border-slate-800/70 bg-[#050a16]" data-testid="home-results-preview">
        <div className="container-shell py-10 sm:py-14 lg:py-16">
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
                className="group inline-flex items-center gap-2 rounded-full bg-electric-deep px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-electric hover:shadow-[0_0_30px_rgba(37,99,235,0.45)] active:scale-95"
              >
                View Full Results
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-8 sm:mt-10 grid gap-5 md:grid-cols-3">
            {[
              { label: "SEO Performance", value: "119k clicks", note: "in a 3 month compare period", path: "/seo", icon: TrendingUp, color: "text-sky-400" },
              { label: "Social Media Performance", value: "1.0M views", note: "in a single reporting period", path: "/social-media", icon: Sparkles, color: "text-pink-400" },
              { label: "Paid Advertising", value: "₹16.25", note: "cost per messaging conversation, Snapshot A", path: "/meta-ads", icon: Target, color: "text-emerald-400" },
            ].map((card, i) => {
              const CardIcon = card.icon;
              return (
                <Reveal key={card.label} delay={i * 0.08}>
                  <Link
                    to={card.path}
                    data-testid={`home-results-card-${i + 1}`}
                    className="card-premium card-hover group relative block h-full p-6 sm:p-7 transition-all duration-300 hover:border-electric/70 hover:shadow-[0_0_30px_rgba(37,99,235,0.2)] overflow-hidden"
                  >
                    <div
                      className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                    <div className="flex items-center justify-between">
                      <p className="eyebrow">{card.label}</p>
                      <CardIcon className={`h-4 w-4 ${card.color} group-hover:scale-110 transition-transform`} />
                    </div>
                    <p className="mt-3 font-mono text-2xl sm:text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {card.value}
                    </p>
                    <p className="mt-1.5 text-xs sm:text-sm text-slate-500">{card.note}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-electric-bright group-hover:text-cyan-300">
                      See the evidence
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
          <div className="mt-12 sm:mt-14">
            <GrowthSystem />
          </div>
        </div>
      </section>

      {/* Section 10: Founder Section */}
      <section className="container-shell py-10 sm:py-14 lg:py-16" data-testid="home-founder">
        <FounderSection compact />
      </section>

      {/* Final Call to Action */}
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
