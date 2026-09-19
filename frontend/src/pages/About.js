import { useSeo } from "../components/Seo";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { FounderSection } from "../components/FounderSection";
import { CTASection } from "../components/CTASection";
import { PAGE_SEO } from "../data/site";

const Block = ({ title, children, testid }) => (
  <Reveal className="border-l-2 border-electric/40 pl-6 sm:pl-8">
    <h2 className="font-display text-xl sm:text-2xl font-semibold text-slate-100" data-testid={testid}>
      {title}
    </h2>
    <div className="mt-4 space-y-4 text-base text-slate-400 leading-relaxed">{children}</div>
  </Reveal>
);

export default function About() {
  useSeo(PAGE_SEO.about.title, PAGE_SEO.about.description);

  return (
    <>
      <PageHero
        eyebrow="About"
        title="Strategy-led digital marketing, measured by evidence"
        lead="Amrit Chhabra is a Digital Marketing Professional and the Founder of DailyAura.in, working across SEO, social media, Meta Ads, email marketing and content writing."
        ctaLabel="Let's Work Together"
        ctaHref="/contact"
        testid="about-hero-cta"
      />

      <section className="container-shell pb-8 pt-4 lg:pb-12" data-testid="about-profile">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="relative mx-auto max-w-xs lg:max-w-none">
              <div className="absolute -inset-5 rounded-[32px] bg-electric-deep/15 blur-3xl" aria-hidden="true" />
              <img
                src="/assets/amrit-chhabra.png"
                alt="Portrait of Amrit Chhabra, Digital Marketing Professional"
                className="relative w-full rounded-3xl border border-slate-700/80 object-cover"
                width="864"
                height="1184"
                loading="lazy"
                data-testid="about-photo"
              />
            </div>
          </Reveal>
          <div className="lg:col-span-8">
            <SectionHeading
              chapter="01 // Profile"
              title="A professional built around measurable work"
            />
            <div className="mt-6 space-y-4 text-base text-slate-400 leading-relaxed">
              <p>
                Amrit Chhabra works across the full digital marketing stack: search engine optimization, social media
                marketing, Meta Ads, email marketing and content writing. The focus stays consistent across every
                channel: understand the audience, build a strategy around real demand, execute with care, and let
                performance data decide what happens next.
              </p>
              <p>
                Marketing here is not treated as a collection of disconnected tasks. It runs as one connected system
                where search visibility feeds content, content feeds social distribution, social builds audiences that
                paid campaigns can reach, and email turns attention into retention. Each channel has its own craft,
                but the thinking behind them is shared.
              </p>
              <p>
                This portfolio reflects that philosophy. Instead of slogans, it shows real Google Search Console
                reports, real Meta Business Suite dashboards and real Meta Ads snapshots. Client identities are
                protected, but the numbers are exactly as the platforms reported them.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell py-16 lg:py-24" data-testid="about-approach">
        <SectionHeading
          chapter="02 // Approach"
          title="Strategy before tactics, always"
          lead="Tools change every year. The discipline of research, planning and measurement does not. Our approach is built around a few non-negotiable principles."
        />
        <div className="mt-14 space-y-12">
          <Block title="Research before execution" testid="about-block-research">
            <p>
              Every engagement begins with understanding the market: who the audience is, what they search for, what
              competitors are doing and where the realistic opportunities sit. Keyword research, audience research and
              platform analysis come before a single page is optimized or a single ad is launched. This is what keeps
              budgets and effort pointed at demand that actually exists.
            </p>
          </Block>
          <Block title="SEO as a compounding asset" testid="about-block-seo">
            <p>
              Our SEO work covers keyword research, search intent mapping, on page optimization, technical SEO, content
              optimization and internal linking, followed by steady performance monitoring in Google Search Console.
              The Search Performance evidence on this site spans multiple properties and reporting periods, from
              early-stage builds growing from a few hundred impressions to established properties handling millions of
              impressions per quarter.
            </p>
            <p>
              What matters most is not any single report but the pattern across them: impressions earned through
              relevance, positions improved through optimization, and clicks growing as a result. SEO done properly
              compounds, and the compare views in the evidence section show that compounding clearly.
            </p>
          </Block>
          <Block title="Social media as distribution, not decoration" testid="about-block-social">
            <p>
              Social media work is planned around content systems: calendars, reels strategy, format testing and
              distribution discipline. The goal is never to post for the sake of posting. It is to build reach and
              engagement that can be tracked in Meta Business Suite, then double down on what the data rewards.
            </p>
            <p>
              The results section shows what this looks like in practice, including a reporting period where content
              passed one million views and another where quarterly reach grew by 190.9% against the previous period.
              Those numbers come from consistent planning and optimization, not luck.
            </p>
          </Block>
          <Block title="Paid campaigns with cost discipline" testid="about-block-paid">
            <p>
              Meta Ads work centers on messaging campaigns, audience targeting, creative strategy and structured
              testing. Every campaign is judged on cost per result, not on impressions alone. The published snapshots
              show messaging conversations delivered at ₹16.25 and ₹20.03 per conversation in two separate campaign
              periods, presented independently because honest reporting does not blend numbers across periods.
            </p>
          </Block>
          <Block title="Content and email as the retention layer" testid="about-block-content">
            <p>
              Content writing here means SEO content built around search intent: researched topics, clear structure,
              readable prose and internal linking that helps both readers and search engines. Email marketing extends
              that relationship beyond the first visit through segmentation, campaign planning, considered subject
              lines and follow-ups timed to what subscribers care about.
            </p>
          </Block>
          <Block title="Continuous optimization over one-time wins" testid="about-block-optimization">
            <p>
              Performance marketing is a loop, not an event. Reports get read, weak spots get fixed, winners get
              scaled. A page that ranks on page two gets re-optimized. A creative that fatigues gets replaced. An
              audience segment that converts gets more budget. This habit of steady, evidence-led adjustment is what
              turns isolated wins into durable growth.
            </p>
          </Block>
          <Block title="Audience-focused across 21+ sectors" testid="about-block-sectors">
            <p>
              The work spans more than 21 sectors, including clothing brands, fashion, property, real estate,
              education, local businesses, retail, lifestyle, professional services, personal brands and service
              businesses. Each market has its own language, intent patterns and buying triggers, so every strategy is
              adapted to the audience rather than copied from a template.
            </p>
          </Block>
        </div>
      </section>

      <section className="container-shell py-16 lg:py-24" data-testid="about-founder">
        <FounderSection />
      </section>

      <CTASection
        title="Let's build your growth on evidence, not promises"
        text="If you want digital marketing that is planned carefully, executed properly and reported honestly, we should talk."
        ctaLabel="Let's Work Together"
        ctaHref="/contact"
        testid="about-final-cta"
      />
    </>
  );
}
