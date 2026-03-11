import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Phone, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export type PremiumServicePageProps = {
  serviceLabel: string;
  serviceTitle: string;
  serviceTitleAccent: string;
  heroImage: string;
  heroImageAlt: string;
  shortDescription: string;
  overviewText1: string;
  overviewText2: string;
  showcaseTitle: string;
};

const BENEFITS = [
  {
    title: "Seamless Planning",
    desc: "We define scope, timeline, and budget upfront so every step is transparent and predictable.",
  },
  {
    title: "Code-Compliant Execution",
    desc: "Work is performed to local code requirements with detailed oversight from start to finish.",
  },
  {
    title: "Premium Craftsmanship",
    desc: "Experienced crews focus on clean detailing, durable installation, and lasting curb appeal.",
  },
] as const;

const PROCESS = [
  { num: "01", title: "Site Assessment", desc: "On-site review of existing conditions and project goals." },
  { num: "02", title: "Scope & Proposal", desc: "Detailed recommendations with materials, schedule, and pricing." },
  { num: "03", title: "Execution", desc: "Coordinated installation by skilled crews with quality checkpoints." },
  { num: "04", title: "Final Walkthrough", desc: "Complete review, finishing touches, and client sign-off." },
] as const;

const FAQS = [
  {
    q: "How long will this service take?",
    a: "Timeline depends on project size, access, and weather. We provide a clear milestone schedule before work begins.",
  },
  {
    q: "Do you provide warranty coverage?",
    a: "Yes. Workmanship coverage and applicable manufacturer warranties are provided with your project documentation.",
  },
  {
    q: "Can I get a free estimate first?",
    a: "Absolutely. We offer a no-obligation site visit and estimate so you can make an informed decision.",
  },
] as const;

export function PremiumServicePage({
  serviceLabel,
  serviceTitle,
  serviceTitleAccent,
  heroImage,
  heroImageAlt,
  shortDescription,
  overviewText1,
  overviewText2,
  showcaseTitle,
}: PremiumServicePageProps) {
  return (
    <div className="bg-background text-foreground selection:bg-secondary/30">
      <section className="relative flex min-h-screen items-end overflow-hidden">
        <div className="absolute inset-0">
          <div className="relative h-[115%] w-full">
            <Image src={heroImage} alt={heroImageAlt} fill priority className="object-cover object-[center_30%]" sizes="100vw" />
          </div>
          <div className="absolute inset-0 bg-linear-to-r from-background/95 via-background/70 to-background/40" />
          <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="absolute top-0 bottom-0 z-10 w-px bg-linear-to-b from-transparent via-secondary/40 to-transparent" style={{ left: "max(24px, calc((100vw - 1280px)/2))" }} />

        <div className="relative z-20 mx-auto w-full max-w-7xl px-6 pt-20 pb-24">
          <nav className="mb-10 flex items-center gap-2">
            <span className="flex items-center gap-2">
              <Link href="/" className="text-[11px] tracking-[0.12em] uppercase text-muted-foreground transition-colors hover:text-secondary">Home</Link>
              <span className="text-[8px] text-secondary/60">◆</span>
            </span>
            <span className="flex items-center gap-2">
              <Link href="/services" className="text-[11px] tracking-[0.12em] uppercase text-muted-foreground transition-colors hover:text-secondary">Services</Link>
              <span className="text-[8px] text-secondary/60">◆</span>
            </span>
            <span className="text-[11px] tracking-[0.12em] uppercase text-secondary">{serviceLabel}</span>
          </nav>

          <div className="mb-7 inline-flex items-center gap-2 border border-secondary/40 bg-background/30 px-4 py-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
            <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-secondary">Premium Craftsmanship - Essex County, NJ</span>
          </div>

          <h1 className="mb-3 font-serif leading-none text-foreground" style={{ fontSize: "clamp(52px, 8vw, 96px)", letterSpacing: "-0.01em" }}>
            {serviceTitle}
            <span className="block italic text-secondary">{serviceTitleAccent}</span>
          </h1>

          <div className="mb-7 h-px origin-left bg-linear-to-r from-secondary to-secondary/20" style={{ width: 180 }} />

          <p className="mb-12 max-w-lg text-[clamp(15px,1.8vw,19px)] leading-relaxed text-muted-foreground">{shortDescription}</p>

          <div className="flex flex-wrap gap-3.5">
            <Button asChild className="h-12 px-7 text-sm uppercase tracking-[0.14em]"><Link href="/contact">Request Free Estimate</Link></Button>
            <Button asChild variant="outline" className="h-12 border-secondary/40 px-6 text-sm text-secondary hover:bg-secondary/10 hover:text-secondary"><a href={`tel:${siteConfig.phones.english}`}><Phone size={15} className="mr-2 inline-block" />{siteConfig.phones.english}</a></Button>
          </div>
        </div>
      </section>

      <section className="relative bg-background py-28 px-6">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 lg:grid-cols-2">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary"><span className="h-px w-6 bg-secondary" />What We Do</p>
            <h2 className="mb-6 font-serif text-foreground leading-snug" style={{ fontSize: "clamp(36px, 4vw, 56px)" }}>Built for lasting<br /><em className="text-secondary">performance</em></h2>
            <div className="mx-0 mb-7 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />
            <p className="mb-8 text-base leading-loose text-muted-foreground">{overviewText1}</p>
            <p className="mb-10 text-base leading-loose text-muted-foreground">{overviewText2}</p>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
              <Image src={heroImage} alt={heroImageAlt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-700 hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-br from-secondary/20 to-transparent" />
            </div>
            <div className="absolute -right-6 -bottom-6 -z-10 h-28 w-28 border border-secondary/30" />
            <div className="absolute -top-6 -left-6 -z-10 h-20 w-20 border border-secondary/20" />
          </div>
        </div>
      </section>

      <section className="bg-muted/20 py-28 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary"><span className="h-px w-6 bg-secondary" />Why Clients Choose Us</p>
            <h2 className="mb-6 font-serif text-foreground" style={{ fontSize: "clamp(36px, 4vw, 52px)" }}>The <em className="text-secondary">Difference</em> You&apos;ll Notice</h2>
          </div>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((b) => (
              <div key={b.title} className="glass-card border border-border/40 p-11 transition-all duration-500 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-luxury">
                <h3 className="mb-3 font-serif text-xl text-foreground leading-snug">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-loose">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-28 px-6">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-20 lg:grid-cols-[1fr_1.4fr]">
          <div className="lg:sticky lg:top-28">
            <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary"><span className="h-px w-6 bg-secondary" />How We Build</p>
            <h2 className="mb-7 font-serif text-foreground leading-snug" style={{ fontSize: "clamp(36px, 3.5vw, 52px)" }}>Our<br /><em className="text-secondary">Process</em></h2>
            <div className="mx-0 mb-7 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />
            <p className="text-[15px] leading-loose text-muted-foreground">A clear four-step process keeps quality, timeline, and communication aligned.</p>
          </div>
          <div className="flex flex-col">
            {PROCESS.map((step, i) => (
              <div key={step.num} className="relative flex gap-7" style={{ paddingBottom: i < PROCESS.length - 1 ? 48 : 0 }}>
                {i < PROCESS.length - 1 && <div className="absolute top-14 bottom-0 left-6.75 w-px bg-linear-to-b from-secondary/40 to-secondary/10" />}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-secondary/35 bg-secondary/8"><span className="font-serif text-[13px] tracking-wide text-secondary">{step.num}</span></div>
                <div className="pt-3"><h3 className="mb-2 font-serif text-xl text-foreground">{step.title}</h3><p className="text-sm leading-loose text-muted-foreground">{step.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/20 py-28 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary"><span className="h-px w-6 bg-secondary" />Our Work</p>
              <h2 className="m-0 font-serif text-foreground" style={{ fontSize: "clamp(36px, 4vw, 52px)" }}>{showcaseTitle} <em className="text-secondary">Projects</em></h2>
            </div>
            <Button asChild variant="outline" className="h-12 border-secondary/40 px-6 text-sm text-secondary hover:bg-secondary/10 hover:text-secondary"><Link href="/gallery">Full Portfolio <ArrowUpRight size={14} className="ml-2" /></Link></Button>
          </div>
          <div className="grid gap-1" style={{ gridTemplateColumns: "1.5fr 1fr 1fr", gridTemplateRows: "auto auto" }}>
            <div className="relative row-span-2 min-h-130 overflow-hidden"><Image src={heroImage} alt={heroImageAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" /></div>
            <div className="relative aspect-4/3 overflow-hidden"><Image src={heroImage} alt={heroImageAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" /></div>
            <div className="relative aspect-4/3 overflow-hidden"><Image src={heroImage} alt={heroImageAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" /></div>
            <div className="relative aspect-4/3 overflow-hidden"><Image src={heroImage} alt={heroImageAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" /></div>
            <div className="relative aspect-4/3 overflow-hidden"><Image src={heroImage} alt={heroImageAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" /></div>
          </div>
        </div>
      </section>

      <section className="bg-background py-28 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-10 flex justify-center gap-1.5">{[...Array(5)].map((_, i) => (<Star key={i} size={18} fill="currentColor" className="text-secondary" />))}</div>
          <p className="mb-12 font-serif text-foreground italic leading-relaxed" style={{ fontSize: "clamp(22px, 3vw, 36px)" }}>
            &ldquo;Professional, organized, and detail-focused from consultation through completion. The finished work exceeded our expectations.&rdquo;
          </p>
          <div className="mx-auto mb-7 h-px w-10 bg-secondary" />
          <p className="mb-1 font-serif text-xl text-secondary">Verified Homeowner</p>
          <p className="text-[12px] tracking-[0.12em] uppercase text-muted-foreground">Essex County, NJ</p>
        </div>
      </section>

      <section className="bg-muted/20 py-28 px-6">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-20 lg:grid-cols-[1fr_1.6fr]">
          <div className="lg:sticky lg:top-28">
            <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary"><span className="h-px w-6 bg-secondary" />FAQ</p>
            <h2 className="mb-7 font-serif leading-snug text-foreground" style={{ fontSize: "clamp(32px, 3.5vw, 48px)" }}>Common<br /><em className="text-secondary">Questions</em></h2>
            <div className="mx-0 mb-7 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />
            <p className="mb-8 text-sm leading-loose text-muted-foreground">Still have questions? Our specialists are available to walk through your project details.</p>
            <Button asChild variant="outline" className="h-12 border-secondary/40 px-6 text-sm text-secondary hover:bg-secondary/10 hover:text-secondary"><a href={`tel:${siteConfig.phones.english}`}><Phone size={14} className="mr-2 inline-block" />Speak with a Specialist</a></Button>
          </div>
          <div className="flex flex-col gap-0">
            {FAQS.map((item) => (
              <details key={item.q} className="border-b border-border/40 py-4">
                <summary className="cursor-pointer list-none font-serif text-lg text-foreground marker:content-none">{item.q}</summary>
                <p className="pt-3 text-sm leading-loose text-muted-foreground">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-36 px-6">
        <div className="absolute inset-0">
          <Image src={heroImage} alt={heroImageAlt} fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-background/90" />
          <div
            className="absolute inset-0"
            style={{ backgroundImage: "radial-gradient(ellipse at 60% 50%, hsl(var(--secondary) / 0.12), transparent)" }}
          />
        </div>
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary"><span className="h-px w-6 bg-secondary" />Begin Your Project</p>
          <h2 className="mb-5 font-serif leading-none text-foreground" style={{ fontSize: "clamp(38px, 5vw, 64px)" }}>Ready to Start<br /><em className="text-secondary">Your Project?</em></h2>
          <p className="mx-auto mb-14 max-w-lg text-base leading-loose text-muted-foreground">Schedule a no-cost site visit and estimate. We&apos;ll review your goals and provide a detailed proposal.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="h-12 px-7 text-sm uppercase tracking-[0.14em]"><Link href="/contact">Schedule a Free Site Visit</Link></Button>
            <Button asChild variant="outline" className="h-12 border-secondary/40 px-6 text-sm text-secondary hover:bg-secondary/10 hover:text-secondary"><a href={`tel:${siteConfig.phones.english}`}><Phone size={14} className="mr-2 inline-block" />Call {siteConfig.phones.english}</a></Button>
          </div>
        </div>
      </section>
    </div>
  );
}