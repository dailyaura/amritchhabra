import { useSeo } from "../components/Seo";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { ProcessTimeline } from "../components/ProcessTimeline";
import { EvidenceCard, EvidenceMetrics } from "../components/Evidence";
import { RelatedServices } from "../components/RelatedServices";
import { CTASection } from "../components/CTASection";
import { PAGE_SEO, PROCESSES, SOCIAL_EVIDENCE } from "../data/site";

const PILLARS = [
  { title: "Content Planning", text: "Calendars built around audience interests, platform behavior and business priorities, so publishing is consistent and purposeful." },
  { title: "Reels Strategy", text: "Short-form video planned around hooks, retention and shareability, the formats that platforms currently reward with reach." },
  { title: "Organic Reach", text: "Distribution earned through consistency and format fit rather than forced posting volume." },
  { title: "Engagement", text: "Content designed to earn interactions: saves, shares, replies and watch time, not just impressions." },
  { title: "Distribution", text: "Each piece of content is formatted and timed for the platform it lives on, across feed, reels and stories." },
  { title: "Performance Monitoring", text: "Meta Business Suite reporting reviewed period over period, so strategy follows the numbers." },
];

export default function SocialMedia() {
  useSeo(PAGE_SEO.social.title, PAGE_SEO.social.description);

  return (
    <>
      <PageHero
        eyebrow="Social Media Marketing"
        title="Social media built as a distribution system, not a posting habit"
        lead="Content planning, reels strategy and performance monitoring that turn Facebook and Instagram into measurable growth channels."
        ctaLabel="Build Your Social Media Strategy"
        ctaHref="/contact"
        testid="social-hero-cta"
      />

      <section className="container-shell py-16 lg:py-24" data-testid="social-intro">
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionHeading
            chapter="01 // The Discipline"
            title="What social media marketing means here"
            lead="Reach is not luck. It is the compound result of planning, format discipline and reading performance data honestly."
          />
          <Reveal delay={0.1}>
            <div className="space-y-4 text-base text-slate-400 leading-relaxed">
              <p>
                Our social media work starts with the audience: what they watch, what they save, what they share and
                when they are active. From there we build a content strategy with defined formats, a realistic
                publishing calendar and clear roles for each platform. Reels carry discovery, stories carry presence,
                and posts carry depth.
              </p>
              <p>
                Every period ends in the same place: Meta Business Suite, reviewing views, reach, content interactions
                and watch time. The screenshots on this page are real reports from that workflow. They show what
                structured planning produces, including one period that crossed one million views and a quarter where
                reach grew 190.9% against the previous period.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-slate-800/70 bg-[#050a16]" data-testid="social-pillars">
        <div className="container-shell py-16 lg:py-24">
          <SectionHeading
            chapter="02 // Capabilities"
            title="The social media toolkit"
            lead="Six working areas that together cover planning, publishing, distribution and optimization."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((pillar, i) => (
              <Reveal key={pillar.title} delay={(i % 3) * 0.07}>
                <div className="card-premium card-hover h-full p-6" data-testid={`social-pillar-${i + 1}`}>
                  <p className="font-mono text-xs text-electric-bright">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-3 font-display text-lg font-semibold text-slate-100">{pillar.title}</h3>
                  <p className="mt-2.5 text-sm text-slate-400 leading-relaxed">{pillar.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-16 lg:py-24" data-testid="social-evidence">
        <SectionHeading
          chapter="03 // Evidence"
          title="Social media performance, on the record"
          lead="Three real Meta Business Suite reports. Each covers its own reporting period and its own metrics, presented exactly as the dashboard showed them. Select any report to view it full size."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {SOCIAL_EVIDENCE.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.08}>
              <EvidenceCard item={item}>
                <p className="eyebrow">Result {String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 font-display text-lg font-semibold text-slate-100">{item.title}</h3>
                <p className="mt-1.5 text-xs font-mono text-slate-500">{item.period}</p>
                <div className="mt-4">
                  <EvidenceMetrics metrics={item.metrics} />
                </div>
                <p className="mt-4 text-sm text-slate-400 leading-relaxed">{item.note}</p>
              </EvidenceCard>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-10 max-w-3xl text-sm text-slate-500 leading-relaxed">
            These are separate reporting periods from different content pushes. They are intentionally not merged into
            a single headline number, because honest reporting keeps each period in its own context.
          </p>
        </Reveal>
      </section>

      <section className="border-y border-slate-800/70 bg-[#050a16]" data-testid="social-process">
        <div className="container-shell py-16 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                chapter="04 // Process"
                title="The content strategy flow"
                lead="From audience research to optimization, every piece of content moves through the same pipeline."
              />
              <Reveal delay={0.15}>
                <div className="mt-8 space-y-4 text-base text-slate-400 leading-relaxed">
                  <p>
                    Audience research defines who we are talking to. Content planning turns that into themes and
                    formats. Creation and reels strategy produce the assets, distribution places them where they
                    perform, and engagement work keeps the conversation moving.
                  </p>
                  <p>
                    Then performance monitoring closes the loop: which hooks held attention, which formats earned
                    shares, which topics grew reach. Those findings feed the next planning cycle, which is why results
                    compound instead of resetting every month.
                  </p>
                </div>
              </Reveal>
            </div>
            <ProcessTimeline steps={PROCESSES.social} testidPrefix="social-process" />
          </div>
        </div>
      </section>

      <section className="container-shell py-16 lg:py-24" data-testid="social-related">
        <SectionHeading
          chapter="05 // Connected Services"
          title="Social works harder with support"
        />
        <div className="mt-10">
          <RelatedServices
            links={[
              { label: "Meta Ads", path: "/meta-ads", text: "Paid amplification for the organic content that already performs." },
              { label: "Content Writing", path: "/content-writing", text: "Long-form content that gives social audiences somewhere deeper to go." },
              { label: "SEO", path: "/seo", text: "Search visibility that compounds alongside social reach." },
              { label: "Results and Performance", path: "/results", text: "See social evidence next to search and paid performance." },
            ]}
          />
        </div>
      </section>

      <CTASection
        title="Your audience is already scrolling. Give it something worth stopping for"
        text="Tell us about your brand and your platforms. We will map a content system built for reach you can measure."
        ctaLabel="Build Your Social Media Strategy"
        ctaHref="/contact"
        testid="social-final-cta"
      />
    </>
  );
}
