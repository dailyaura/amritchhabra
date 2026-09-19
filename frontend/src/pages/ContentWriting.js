import { useSeo } from "../components/Seo";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { ProcessTimeline } from "../components/ProcessTimeline";
import { GrowthSystem } from "../components/GrowthSystem";
import { RelatedServices } from "../components/RelatedServices";
import { CTASection } from "../components/CTASection";
import { PAGE_SEO, PROCESSES } from "../data/site";

const PILLARS = [
  { title: "SEO Content Writing", text: "Articles and pages written to rank: keyword-aware, intent-matched and structured for both readers and crawlers." },
  { title: "Content Strategy", text: "Topic maps and publishing plans built from keyword research, so every piece has a defined job in the funnel." },
  { title: "Search Intent Matching", text: "Content shaped around what the searcher actually wants: the format, depth and angle the results page rewards." },
  { title: "Structure and Readability", text: "Clear headings, short paragraphs and logical flow that keep readers on the page and help search engines parse it." },
  { title: "Internal Linking", text: "Deliberate links between related pieces that build topical authority and guide readers deeper into the site." },
  { title: "Performance Review", text: "Published content is monitored and refreshed based on impressions, positions and engagement, not left to age." },
];

export default function ContentWriting() {
  useSeo(PAGE_SEO.content.title, PAGE_SEO.content.description);

  return (
    <>
      <PageHero
        eyebrow="Content Writing"
        title="Content built to rank, to be read and to perform"
        lead="SEO content writing and content strategy built on keyword research, search intent and continuous performance review."
        ctaLabel="Discuss Your Content Requirements"
        ctaHref="/contact"
        testid="content-hero-cta"
      />

      <section className="container-shell py-16 lg:py-24" data-testid="content-intro">
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionHeading
            chapter="01 // The Discipline"
            title="What content writing means here"
            lead="Content is not decoration for a website. Written properly, it is the asset that earns search visibility, educates the audience and gives every other channel something worth distributing."
          />
          <Reveal delay={0.1}>
            <div className="space-y-4 text-base text-slate-400 leading-relaxed">
              <p>
                Our content work starts with keyword research and search intent, not with a blank page. Before anything
                is written, we know what the piece should rank for, who it is for, what question it answers and where
                it sits in the wider content structure. Writing then follows a clear outline: headings that map to
                subtopics, paragraphs that respect the reader's time, and language that sounds like a professional
                wrote it.
              </p>
              <p>
                Optimization is built in, not bolted on. Titles, meta descriptions, internal links and content
                structure are handled during the writing process. After publishing, performance review keeps the work
                alive: pages that gain impressions get expanded, pages that stall get reworked, and internal links get
                strengthened as the library grows.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-slate-800/70 bg-[#050a16]" data-testid="content-pillars">
        <div className="container-shell py-16 lg:py-24">
          <SectionHeading
            chapter="02 // Capabilities"
            title="The content writing toolkit"
            lead="Six working areas covering research, writing, optimization and long-term performance."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((pillar, i) => (
              <Reveal key={pillar.title} delay={(i % 3) * 0.07}>
                <div className="card-premium card-hover h-full p-6" data-testid={`content-pillar-${i + 1}`}>
                  <p className="font-mono text-xs text-electric-bright">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-3 font-display text-lg font-semibold text-slate-100">{pillar.title}</h3>
                  <p className="mt-2.5 text-sm text-slate-400 leading-relaxed">{pillar.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-16 lg:py-24" data-testid="content-process">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              chapter="03 // Process"
              title="The content workflow"
              lead="Eight steps from research to performance review. Nothing gets published without a purpose, and nothing published gets forgotten."
            />
            <Reveal delay={0.15}>
              <div className="mt-8 space-y-4 text-base text-slate-400 leading-relaxed">
                <p>
                  Research and search intent define the brief. Content structure turns the brief into an outline.
                  Writing and SEO optimization happen together, so the draft is born optimized rather than patched
                  later. Internal linking connects the new piece to the existing library before it goes live.
                </p>
                <p>
                  Publishing is the midpoint, not the finish. Performance review watches how each piece earns
                  impressions and positions, then feeds those findings back into updates and new topics. This is the
                  same loop visible in the Search Console evidence on the SEO page.
                </p>
              </div>
            </Reveal>
          </div>
          <ProcessTimeline steps={PROCESSES.content} testidPrefix="content-process" />
        </div>
      </section>

      <section className="border-y border-slate-800/70 bg-[#050a16]" data-testid="content-ecosystem">
        <div className="container-shell py-16 lg:py-24">
          <SectionHeading
            chapter="04 // The Ecosystem"
            title="Content and SEO are the same conversation"
            lead="Content gives SEO something to rank. SEO tells content what to write. Social and email then carry that content to the audience. This is the connected system behind the evidence on this site."
          />
          <div className="mt-14">
            <GrowthSystem />
          </div>
        </div>
      </section>

      <section className="container-shell py-16 lg:py-24" data-testid="content-related">
        <SectionHeading chapter="05 // Connected Services" title="Where content goes next" />
        <div className="mt-10">
          <RelatedServices
            links={[
              { label: "SEO", path: "/seo", text: "The research and optimization layer that turns content into rankings." },
              { label: "Social Media Marketing", path: "/social-media", text: "Distribution that puts written content in front of the right audience." },
              { label: "Email Marketing", path: "/email-marketing", text: "Campaigns that carry content directly to subscribers who asked for it." },
              { label: "Results and Performance", path: "/results", text: "See what content-led search growth looks like in real reports." },
            ]}
          />
        </div>
      </section>

      <CTASection
        title="Content that performs is planned, not improvised"
        text="Tell us about your audience and your goals. We will map the topics, the structure and the publishing plan to get there."
        ctaLabel="Discuss Your Content Requirements"
        ctaHref="/contact"
        testid="content-final-cta"
      />
    </>
  );
}
