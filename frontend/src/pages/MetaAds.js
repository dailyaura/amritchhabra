import { useSeo } from "../components/Seo";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { ProcessTimeline } from "../components/ProcessTimeline";
import { EvidenceCard, EvidenceMetrics } from "../components/Evidence";
import { RelatedServices } from "../components/RelatedServices";
import { CTASection } from "../components/CTASection";
import { PAGE_SEO, PROCESSES, META_ADS_EVIDENCE } from "../data/site";

const PILLARS = [
  { title: "Campaign Strategy", text: "Objectives, budgets and funnel structure defined before a single ad is built, so spend has a clear job." },
  { title: "Audience Research", text: "Targeting built from real customer understanding: interests, behaviors, lookalikes and retargeting pools." },
  { title: "Creative Strategy", text: "Ad concepts planned around the hook, the offer and the format, with variations ready for testing." },
  { title: "Ad Copy", text: "Copy written for the scroll: direct, benefit-led and matched to where the audience is in the funnel." },
  { title: "Testing", text: "Structured tests across audiences and creatives, with clean readouts instead of guesswork." },
  { title: "Performance Monitoring", text: "Cost per result watched daily, with optimization decisions driven by the numbers." },
];

export default function MetaAds() {
  useSeo(PAGE_SEO.metaAds.title, PAGE_SEO.metaAds.description);

  return (
    <>
      <PageHero
        eyebrow="Meta Ads"
        title="Paid campaigns with cost discipline and creative intent"
        lead="Facebook and Instagram advertising built on audience research, structured testing and honest cost-per-result reporting."
        ctaLabel="Discuss Your Paid Campaign"
        ctaHref="/contact"
        testid="meta-ads-hero-cta"
      />

      <section className="container-shell py-16 lg:py-24" data-testid="meta-ads-intro">
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionHeading
            chapter="01 // The Discipline"
            title="What paid advertising means here"
            lead="Paid media is the fastest feedback loop in marketing. Run it carelessly and it burns budget. Run it with structure and it tells you exactly what your market responds to."
          />
          <Reveal delay={0.1}>
            <div className="space-y-4 text-base text-slate-400 leading-relaxed">
              <p>
                Our Meta Ads work covers the full campaign cycle: audience research and targeting, creative strategy,
                ad copy, campaign setup, structured testing, optimization and performance monitoring. Messaging
                campaigns are a particular focus, because they turn ad spend directly into conversations a business
                can act on.
              </p>
              <p>
                Retargeting plays a supporting role: audiences who have already interacted with content or the website
                are warmer, cheaper to reach and more likely to convert. Combined with strong organic social content,
                paid campaigns stop being cold interruption and start being timely amplification.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-slate-800/70 bg-[#050a16]" data-testid="meta-ads-pillars">
        <div className="container-shell py-16 lg:py-24">
          <SectionHeading
            chapter="02 // Capabilities"
            title="The Meta Ads toolkit"
            lead="Six working areas that keep campaigns accountable from planning to optimization."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((pillar, i) => (
              <Reveal key={pillar.title} delay={(i % 3) * 0.07}>
                <div className="card-premium card-hover h-full p-6" data-testid={`meta-ads-pillar-${i + 1}`}>
                  <p className="font-mono text-xs text-electric-bright">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-3 font-display text-lg font-semibold text-slate-100">{pillar.title}</h3>
                  <p className="mt-2.5 text-sm text-slate-400 leading-relaxed">{pillar.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-16 lg:py-24" data-testid="meta-ads-process">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              chapter="03 // Process"
              title="The campaign process"
              lead="Research, audience, creative, launch, testing, optimization, performance. Every campaign runs the full loop."
            />
            <Reveal delay={0.15}>
              <div className="mt-8 space-y-4 text-base text-slate-400 leading-relaxed">
                <p>
                  Research and audience work come first: who buys, why they buy and where they can be reached. Creative
                  and copy are then built for that specific audience, not for a generic one. Launch is followed
                  immediately by structured testing across audiences and creatives.
                </p>
                <p>
                  Optimization is where campaigns are won or lost. Underperforming ad sets get paused, winning
                  creatives get budget, and cost per result is monitored until the campaign reaches its efficient
                  range. Performance is then reported exactly as the dashboard shows it.
                </p>
              </div>
            </Reveal>
          </div>
          <ProcessTimeline steps={PROCESSES.metaAds} testidPrefix="meta-ads-process" />
        </div>
      </section>

      <section className="border-y border-slate-800/70 bg-[#050a16]" data-testid="meta-ads-evidence">
        <div className="container-shell py-16 lg:py-24">
          <SectionHeading
            chapter="04 // Evidence"
            title="Campaign performance, snapshot by snapshot"
            lead="Two real Meta Ads messaging campaign reports. These are separate performance snapshots from different campaign periods. They are presented independently and are never combined. Select any report to view it full size."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {META_ADS_EVIDENCE.map((snap, i) => (
              <Reveal key={snap.id} delay={i * 0.08}>
                <EvidenceCard item={snap}>
                  <p className="eyebrow">{snap.title}</p>
                  <div className="mt-4">
                    <EvidenceMetrics metrics={snap.metrics} />
                  </div>
                  <p className="mt-4 text-sm text-slate-400 leading-relaxed">{snap.note}</p>
                </EvidenceCard>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-10 max-w-3xl text-sm text-slate-500 leading-relaxed">
              Reading these snapshots: Snapshot A delivered 92 messaging conversations at ₹16.25 per conversation on a
              spend of ₹1,495.43. Snapshot B delivered 50 conversations at ₹20.03 per conversation on a spend of
              ₹1,001.51. Different periods, different efficiencies, each shown on its own terms.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-shell py-16 lg:py-24" data-testid="meta-ads-related">
        <SectionHeading chapter="05 // Connected Services" title="Paid works best on strong foundations" />
        <div className="mt-10">
          <RelatedServices
            links={[
              { label: "Social Media Marketing", path: "/social-media", text: "Organic content that warms audiences before paid campaigns reach them." },
              { label: "SEO", path: "/seo", text: "Organic visibility that reduces long-term dependence on paid traffic." },
              { label: "Content Writing", path: "/content-writing", text: "Landing page and offer content that converts the traffic ads bring in." },
              { label: "Results and Performance", path: "/results", text: "See paid evidence alongside search and social performance." },
            ]}
          />
        </div>
      </section>

      <CTASection
        title="Ready to make every rupee of ad spend accountable?"
        text="Tell us about your offer, your audience and your budget. We will map a campaign structure built around cost per result."
        ctaLabel="Discuss Your Paid Campaign"
        ctaHref="/contact"
        testid="meta-ads-final-cta"
      />
    </>
  );
}
