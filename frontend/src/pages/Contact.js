import { Phone, Mail, MessageCircle, Clock, ShieldCheck } from "lucide-react";
import { useSeo } from "../components/Seo";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { ContactForm } from "../components/ContactForm";
import { PAGE_SEO, CONTACT } from "../data/site";

const CHANNELS = [
  {
    icon: Phone,
    title: "Call",
    value: CONTACT.phone,
    note: "Direct line for a quick conversation about your goals.",
    href: CONTACT.phoneHref,
    cta: "Call Now",
    testid: "contact-call",
  },
  {
    icon: Mail,
    title: "Email",
    value: CONTACT.email,
    note: "Best for detailed briefs, documents and project context.",
    href: `mailto:${CONTACT.email}`,
    cta: "Send an Email",
    testid: "contact-email",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: CONTACT.phone,
    note: "Fast messaging for questions, ideas and next steps.",
    href: CONTACT.whatsapp,
    cta: "Message on WhatsApp",
    testid: "contact-whatsapp",
    external: true,
  },
];

export default function Contact() {
  useSeo(PAGE_SEO.contact.title, PAGE_SEO.contact.description);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start a conversation about your growth"
        lead="Tell us where your brand stands and where it needs to go. Reach out directly by phone, email or WhatsApp, or send the form and we will come back to you."
      />

      <section className="container-shell pb-20 lg:pb-28" data-testid="contact-section">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-5">
            {CHANNELS.map((channel, i) => {
              const Icon = channel.icon;
              return (
                <Reveal key={channel.title} delay={i * 0.08}>
                  <div className="card-premium card-hover p-6" data-testid={`${channel.testid}-card`}>
                    <div className="flex items-start gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-electric/30 bg-electric-deep/15 text-electric-bright">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div className="min-w-0">
                        <h2 className="font-display text-lg font-semibold text-slate-100">{channel.title}</h2>
                        <p className="mt-1 break-all font-mono text-sm text-electric-bright">{channel.value}</p>
                        <p className="mt-2 text-sm text-slate-400 leading-relaxed">{channel.note}</p>
                        <a
                          href={channel.href}
                          {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                          data-testid={`${channel.testid}-button`}
                          className="mt-4 inline-flex items-center gap-2 rounded-full border border-electric/40 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-electric-deep"
                        >
                          {channel.cta}
                        </a>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}

            <Reveal delay={0.3}>
              <div className="card-premium space-y-4 p-6">
                <div className="flex items-start gap-3.5">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-electric-bright" aria-hidden="true" />
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Enquiries are typically answered within one working day. Share as much context as you can: your
                    market, your goals and what you have tried so far.
                  </p>
                </div>
                <div className="flex items-start gap-3.5">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-electric-bright" aria-hidden="true" />
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Your details are used only to respond to your enquiry. No lists, no spam, no sharing.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="lg:col-span-7">
            <h2 className="mb-6 font-display text-xl font-semibold text-slate-100">Send a message</h2>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
