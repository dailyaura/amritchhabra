import { Search, Crosshair, FileText, Wrench, RefreshCw, Link2, LineChart, FileBarChart, Repeat } from "lucide-react";
import { useSeo } from "../components/Seo";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { ProcessTimeline } from "../components/ProcessTimeline";
import { GscShowcase } from "../components/EvidenceShowcase";
import { RelatedServices } from "../components/RelatedServices";
import { CTASection } from "../components/CTASection";
import { PAGE_SEO, PROCESSES } from "../data/site";

const CAPABILITIES = [
  { icon: Search, title: "Keyword Research", text: "Demand mapping that finds what your audience actually searches for, with realistic difficulty and opportunity assessment." },
  { icon: Crosshair, title: "Search Intent", text: "Every target keyword is classified by intent: informational, commercial, transactional or navigational, so pages match what searchers want." },
  { icon: FileText, title: "On Page SEO", text: "Titles, meta descriptions, headings, content structure and internal context optimized page by page." },
  { icon: Wrench, title: "Technical SEO", text: "Crawlability, indexation, site structure, performance and hygiene issues identified and resolved." },
  { icon: RefreshCw, title: "Content Optimization", text: "Existing pages are refreshed and expanded based on what search data shows they can win." },
  { icon: Link2, title: "Internal Linking", text: "Deliberate linking architecture that distributes authority and helps both users and crawlers navigate." },
  { icon: LineChart, title: "Performance Monitoring", text: "Google Search Console tracking of clicks, impressions, CTR and average position across periods." },
  { icon: FileBarChart, title: "SEO Reporting", text: "Clear reporting on what moved, why it moved and what happens next. No vanity metrics." },
  { icon: Repeat, title: "Continuous Optimization", text: "SEO is treated as an ongoing loop of testing and improvement, not a one-time setup." },
];

export default function Seo() {
  useSeo(PAGE_SEO.seo.title, PAGE_SEO.seo.description);

  return (
    <>
      <PageHero
        eyebrow="SEO Services"
        title="SEO that compounds: research, intent and relentless optimization"
        lead="Search engine optimization built as a system: keyword research, technical health, intent-matched content and continuous performance monitoring, backed by real Search Console evidence."
        ctaLabel="Discuss Your SEO Goals"
        ctaHref="/contact"
        testid="seo-hero-cta"
      />

      <section className="container-shell py-16 lg:py-24" data-testid="seo-intro">
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionHeading
            chapter="01 // The Discipline"
            title="What SEO means in practice"
            lead="Good SEO is not tricks or shortcuts. It is the disciplined alignment of a website with the demand that already exists in search, executed page by page and measured over months."
          />
          <Reveal delay={0.1}>
            <div className="space-y-4 text-base text-slate-400 leading-relaxed">
              <p>
                Our SEO process starts with research and never really ends. We map the keywords a market searches,
                classify the intent behind them, audit the technical health of the site, and then build or optimize
                content that deserves to rank. After publishing, the work shifts to monitoring: watching clicks,
                impressions, CTR and average position in Google Search Console, and responding to what the data shows.
              </p>
              <p>
                The evidence on this page comes from real Search Console properties across multiple sectors. Some show
                established sites handling millions of impressions per quarter. Others show early-stage builds growing
                from a few hundred impressions to thousands. Both matter, because they demonstrate the same process
                working at different stages of growth.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-slate-800/70 bg-[#050a16]" data-testid="seo-capabilities">
        <div className="container-shell py-16 lg:py-24">
          <SectionHeading
            chapter="02 // Capabilities"
            title="Full-stack SEO capability"
            lead="Nine disciplines that cover the complete search optimization cycle, from first audit to ongoing reporting."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <Reveal key={cap.title} delay={(i % 3) * 0.07}>
                  <div className="card-premium card-hover h-full p-6" data-testid={`seo-capability-${i + 1}`}>
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-electric/30 bg-electric-deep/15 text-electric-bright">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-semibold text-slate-100">{cap.title}</h3>
                    <p className="mt-2.5 text-sm text-slate-400 leading-relaxed">{cap.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container-shell py-16 lg:py-24" data-testid="seo-process">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              chapter="03 // Process"
              title="The SEO workflow, step by step"
              lead="A repeatable operating process that turns research into rankings and rankings into traffic."
            />
            <Reveal delay={0.15}>
              <div className="mt-8 space-y-4 text-base text-slate-400 leading-relaxed">
                <p>
                  Research and search intent analysis define what to target. Strategy decides the order of attack:
                  which pages to create, which to optimize and which technical issues block progress. Optimization and
                  content work execute the plan, while technical SEO keeps the foundation clean.
                </p>
                <p>
                  Then the loop closes. Performance monitoring shows what is working, and continuous improvement feeds
                  those learnings back into the next cycle. This is how positions move from page three to page one over
                  a quarter, and how impressions turn into clicks.
                </p>
              </div>
            </Reveal>
          </div>
          <ProcessTimeline steps={PROCESSES.seo} testidPrefix="seo-process" />
        </div>
      </section>

      <section className="border-y border-slate-800/70 bg-[#050a16]" data-testid="seo-evidence">
        <div className="container-shell py-16 lg:py-24">
          <SectionHeading
            chapter="04 // Evidence"
            title="Search Performance, documented"
            lead="Real Google Search Console Search Performance reports across different properties and periods. Clicks, impressions, CTR and average position, shown exactly as reported. Client identities are cropped out for privacy. Select any report to view it full size."
          />
          <div className="mt-12">
            <GscShowcase testidPrefix="seo-evidence" />
          </div>
          <Reveal>
            <p className="mt-10 max-w-3xl text-sm text-slate-500 leading-relaxed">
              Note on reading these reports: compare views show the last 3 months against the previous 3 months, so
              growth is visible period over period. Metrics are never combined across properties or periods. Each
              report stands on its own as a separate piece of evidence.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-shell py-16 lg:py-24" data-testid="seo-related">
        <SectionHeading
          chapter="05 // Connected Services"
          title="SEO works best when it is not alone"
          lead="Search performance multiplies when content, social distribution and paid campaigns support it."
        />
        <div className="mt-10">
          <RelatedServices
            links={[
              { label: "Content Writing", path: "/content-writing", text: "SEO content built around the exact search intent this research uncovers." },
              { label: "Social Media Marketing", path: "/social-media", text: "Social distribution that extends the reach of optimized content." },
              { label: "Meta Ads", path: "/meta-ads", text: "Paid campaigns that capture demand while organic rankings compound." },
              { label: "Results and Performance", path: "/results", text: "See how this SEO evidence sits alongside social and paid results." },
            ]}
          />
        </div>
      </section>

      <CTASection
        title="Your search visibility is a buildable asset"
        text="Tell us about your market and your current search presence. We will map where the demand is and what it takes to win it."
        ctaLabel="Discuss Your SEO Goals"
        ctaHref="/contact"
        testid="seo-final-cta"
      />
    </>
  );
}
