import { Info } from "lucide-react";
import { useSeo } from "../components/Seo";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { ProcessTimeline } from "../components/ProcessTimeline";
import { RelatedServices } from "../components/RelatedServices";
import { CTASection } from "../components/CTASection";
import { PAGE_SEO, PROCESSES } from "../data/site";

const PILLARS = [
  { title: "Email Strategy", text: "Campaign goals, cadence and audience logic defined before a single email is written." },
  { title: "Audience Segmentation", text: "Subscribers grouped by interest, behavior and stage, so messages feel relevant instead of broadcast." },
  { title: "Campaign Planning", text: "Calendars that balance value, offers and follow-ups without exhausting the list." },
  { title: "Email Copywriting", text: "Clear, human copy that earns the open, holds attention and drives one clear action." },
  { title: "Subject Lines and CTA", text: "Subject lines tested for curiosity without clickbait, and every email built around a single deliberate call to action." },
  { title: "Retention and Follow-up", text: "Sequences that keep customers engaged after the first purchase or enquiry, not just before it." },
];

export default function EmailMarketing() {
  useSeo(PAGE_SEO.email.title, PAGE_SEO.email.description);

  return (
    <>
      <PageHero
        eyebrow="Email Marketing"
        title="Email that turns attention into retention"
        lead="Strategy, segmentation, copywriting and follow-up systems that keep your audience engaged long after the first click."
        ctaLabel="Plan Your Email Campaign"
        ctaHref="/contact"
        testid="email-hero-cta"
      />

      <section className="container-shell py-16 lg:py-24" data-testid="email-intro">
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionHeading
            chapter="01 // The Discipline"
            title="What email marketing means here"
            lead="Email is the one channel you own outright. No algorithm decides who sees it. That makes it the most durable retention tool in digital marketing, when it is handled with respect."
          />
          <Reveal delay={0.1}>
            <div className="space-y-4 text-base text-slate-400 leading-relaxed">
              <p>
                Our email work begins with the audience: how they joined the list, what they expect and what they
                value. From there we design segmentation, campaign calendars and copy that treats the inbox as a
                privilege. Every email has one job, one audience segment and one clear call to action.
              </p>
              <p>
                Customer communication does not end at the campaign. Follow-up sequences, re-engagement flows and
                retention messaging are planned as part of the same system, so the relationship continues after the
                first conversion instead of stopping at it.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-slate-800/70 bg-[#050a16]" data-testid="email-pillars">
        <div className="container-shell py-16 lg:py-24">
          <SectionHeading
            chapter="02 // Capabilities"
            title="The email marketing toolkit"
            lead="Six working areas covering strategy, copy and ongoing customer communication."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((pillar, i) => (
              <Reveal key={pillar.title} delay={(i % 3) * 0.07}>
                <div className="card-premium card-hover h-full p-6" data-testid={`email-pillar-${i + 1}`}>
                  <p className="font-mono text-xs text-electric-bright">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-3 font-display text-lg font-semibold text-slate-100">{pillar.title}</h3>
                  <p className="mt-2.5 text-sm text-slate-400 leading-relaxed">{pillar.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-16 lg:py-24" data-testid="email-process">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              chapter="03 // Process"
              title="The campaign flow"
              lead="From audience definition to optimization, every email program runs through the same deliberate pipeline."
            />
            <Reveal delay={0.15}>
              <div className="mt-8 space-y-4 text-base text-slate-400 leading-relaxed">
                <p>
                  Audience and segmentation come first, because relevance is the whole game in email. Campaign
                  strategy then defines what gets sent, to whom and when. Copy and CTA work give each send a single
                  clear purpose, and follow-up sequences make sure no interested subscriber goes cold.
                </p>
                <p>
                  Optimization closes the loop: subject lines, send timing, content blocks and calls to action are
                  reviewed and refined across campaigns, so the program improves with every send instead of running on
                  autopilot.
                </p>
              </div>
            </Reveal>
          </div>
          <ProcessTimeline steps={PROCESSES.email} testidPrefix="email-process" />
        </div>
      </section>

      <section className="container-shell pb-4 pt-2" data-testid="email-evidence-note">
        <Reveal>
          <div className="card-premium flex items-start gap-4 border-electric/30 p-6 sm:p-7">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-electric-bright" aria-hidden="true" />
            <p className="text-sm text-slate-400 leading-relaxed">
              A note on evidence: this portfolio does not currently publish email marketing analytics, and we do not
              invent open rates, click rates or revenue figures to fill the gap. Email is presented here as a
              strategic capability, exactly as it should be until real campaign data is ready to share. The search,
              social and paid evidence on the <a href="/results" className="text-electric-bright underline-offset-4 hover:underline">results page</a> shows
              the reporting standard every channel is held to.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="container-shell py-16 lg:py-24" data-testid="email-related">
        <SectionHeading chapter="04 // Connected Services" title="Email amplifies everything else" />
        <div className="mt-10">
          <RelatedServices
            links={[
              { label: "Content Writing", path: "/content-writing", text: "Content that gives email campaigns something genuinely worth sending." },
              { label: "SEO", path: "/seo", text: "Search traffic that grows the list email then retains." },
              { label: "Social Media Marketing", path: "/social-media", text: "Social reach that feeds new subscribers into the email system." },
              { label: "Meta Ads", path: "/meta-ads", text: "Paid campaigns that capture leads email sequences then nurture." },
            ]}
          />
        </div>
      </section>

      <CTASection
        title="Your list could be your most profitable channel"
        text="Tell us about your audience and what you want them to do. We will plan an email program built around relevance and retention."
        ctaLabel="Plan Your Email Campaign"
        ctaHref="/contact"
        testid="email-final-cta"
      />
    </>
  );
}
