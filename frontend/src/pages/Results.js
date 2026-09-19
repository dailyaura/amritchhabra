import { useSeo } from "../components/Seo";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { GscShowcase } from "../components/EvidenceShowcase";
import { EvidenceCard, EvidenceMetrics } from "../components/Evidence";
import { GrowthSystem } from "../components/GrowthSystem";
import { RelatedServices } from "../components/RelatedServices";
import { CTASection } from "../components/CTASection";
import { PAGE_SEO, SOCIAL_EVIDENCE, META_ADS_EVIDENCE } from "../data/site";

const PHILOSOPHY = [
  { title: "Real dashboards only", text: "Every number on this page comes from a live platform report: Google Search Console, Meta Business Suite or Meta Ads Manager. Nothing is recreated, estimated or merged." },
  { title: "Periods stay separate", text: "Each report covers its own date range. We never combine unrelated periods into a single headline figure, because that would misrepresent the data." },
  { title: "Context over hype", text: "Every evidence card explains what the data represents and why the metric matters, without unsupported claims about guaranteed outcomes." },
  { title: "Privacy by default", text: "Client names, domains and logos are cropped out of every screenshot. Performance is shared, identities are not." },
];

export default function Results() {
  useSeo(PAGE_SEO.results.title, PAGE_SEO.results.description);

  return (
    <>
      <PageHero
        eyebrow="Results and Performance"
        title="Evidence over promises"
        lead="Real search, social and paid performance reports, presented with context and read with honesty. This is what the strategy, execution and optimization look like on the record."
        ctaLabel="Explore How We Can Build Your Growth Strategy"
        ctaHref="/contact"
        testid="results-hero-cta"
      />

      <section className="container-shell py-16 lg:py-24" data-testid="results-philosophy">
        <SectionHeading
          chapter="01 // Philosophy"
          title="How we report performance"
          lead="Four rules govern every piece of evidence published here."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PHILOSOPHY.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.07}>
              <div className="card-premium card-hover h-full p-6" data-testid={`results-philosophy-${i + 1}`}>
                <p className="font-mono text-xs text-electric-bright">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 font-display text-base font-semibold text-slate-100">{item.title}</h3>
                <p className="mt-2.5 text-sm text-slate-400 leading-relaxed">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-800/70 bg-[#050a16]" data-testid="results-seo">
        <div className="container-shell py-16 lg:py-24">
          <SectionHeading
            chapter="02 // SEO Performance"
            title="Search Performance across properties and periods"
            lead="Eight selected Google Search Console reports, with ten more available in the expandable gallery. Each card shows the visible metrics, the reporting period and a short factual interpretation."
          />
          <div className="mt-12">
            <GscShowcase testidPrefix="results-gsc" />
          </div>
        </div>
      </section>

      <section className="container-shell py-16 lg:py-24" data-testid="results-social">
        <SectionHeading
          chapter="03 // Social Media Performance"
          title="Meta Business Suite results"
          lead="Three reporting periods covering views, reach and content interactions across Facebook and Instagram. Presented as professional evidence, exactly as the dashboards reported them."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {SOCIAL_EVIDENCE.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.08}>
              <EvidenceCard item={item}>
                <p className="eyebrow">{item.title}</p>
                <p className="mt-2 text-xs font-mono text-slate-500">{item.period}</p>
                <div className="mt-4">
                  <EvidenceMetrics metrics={item.metrics} />
                </div>
                <p className="mt-4 text-sm text-slate-400 leading-relaxed">{item.note}</p>
              </EvidenceCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-800/70 bg-[#050a16]" data-testid="results-paid">
        <div className="container-shell py-16 lg:py-24">
          <SectionHeading
            chapter="04 // Paid Advertising Performance"
            title="Meta Ads campaign snapshots"
            lead="Two independent messaging campaign snapshots. Each stands on its own reporting period and its own cost per result. They are deliberately not combined."
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
        </div>
      </section>

      <section className="container-shell py-16 lg:py-24" data-testid="results-approach">
        <SectionHeading
          chapter="05 // The System"
          title="How we approach growth"
          lead="These channels were not run in isolation. The strongest results come from connecting them."
        />
        <div className="mt-14">
          <GrowthSystem />
        </div>
        <div className="mt-14">
          <RelatedServices
            links={[
              { label: "SEO", path: "/seo", text: "The process and capabilities behind the Search Performance evidence above." },
              { label: "Social Media Marketing", path: "/social-media", text: "The planning system behind the reach and views shown here." },
              { label: "Meta Ads", path: "/meta-ads", text: "The campaign discipline behind the messaging snapshots." },
            ]}
          />
        </div>
      </section>

      <CTASection
        title="Want results like these on your own dashboards?"
        text="Bring us your market, your goals and your current numbers. We will show you how a connected strategy could move them."
        ctaLabel="Explore How We Can Build Your Growth Strategy"
        ctaHref="/contact"
        testid="results-final-cta"
      />
    </>
  );
}
