import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Award,
  Clock,
  Home,
  Phone,
  Ruler,
  Shield,
  Star,
  Users,
} from "lucide-react";

import { ServiceFaqAccordion } from "@/components/services/shared/service-faq-accordion";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

const ICON_MAP = {
  award: Award,
  clock: Clock,
  home: Home,
  ruler: Ruler,
  shield: Shield,
  users: Users,
} as const;

export type ServiceIconName = keyof typeof ICON_MAP;

export type HeroContent = {
  label: string;
  title: string;
  accent: string;
  image: string;
  imageAlt: string;
  description: string;
  stats: Array<{ value: string; label: string }>;
};

export type OverviewContent = {
  title: string;
  accent: string;
  paragraphs: [string, string];
  bullets: string[];
  image: string;
  imageAlt: string;
  badgeValue: string;
  badgeLabel: string;
};

export type BenefitItem = {
  icon: ServiceIconName;
  title: string;
  desc: string;
};

export type ProcessContent = {
  intro: string;
  timeline: string;
  timelineNote: string;
  steps: Array<{ num: string; title: string; desc: string }>;
};

export type ShowcaseContent = {
  title: string;
  accent: string;
  featured: { src: string; location: string; title: string };
  items: Array<{ src: string; location: string; title: string }>;
};

export type TestimonialContent = {
  quote: string;
  name: string;
  location: string;
};

export type FaqContent = {
  intro: string;
  items: Array<{ q: string; a: string }>;
};

export type CtaContent = {
  image: string;
  imageAlt: string;
  title: string;
  accent: string;
  description: string;
  buttonLabel: string;
};

function GalleryTile({
  src,
  location,
  title,
  className = "",
  titleSize = "text-lg",
}: {
  src: string;
  location: string;
  title: string;
  className?: string;
  titleSize?: string;
}) {
  return (
    <div className={`group relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-[1.07]"
        sizes="(max-width: 1024px) 100vw, 33vw"
      />
      <div className="absolute inset-0 flex flex-col justify-end bg-background/70 p-[clamp(16px,2vw,32px)] opacity-0 transition-opacity duration-400 group-hover:opacity-100">
        <p className="mb-1.5 text-[10px] tracking-[0.2em] uppercase text-secondary">{location}</p>
        <p className={`font-serif text-foreground ${titleSize}`}>{title}</p>
      </div>
    </div>
  );
}

export function ServiceHeroSection({ content }: { content: HeroContent }) {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden">
      <div className="absolute inset-0">
        <div className="relative h-[115%] w-full">
          <Image src={content.image} alt={content.imageAlt} fill priority className="object-cover object-[center_30%]" sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-linear-to-r from-background/95 via-background/70 to-background/40" />
        <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="absolute top-0 bottom-0 left-[max(24px,calc((100vw-1280px)/2))] z-10 w-px bg-linear-to-b from-transparent via-secondary/40 to-transparent" />

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
          <span className="text-[11px] tracking-[0.12em] uppercase text-secondary">{content.label}</span>

        </nav>

        <div className="mb-7 inline-flex items-center gap-2 border border-secondary/40 bg-background/30 px-4 py-1.5">
          <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
          <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-secondary">Premium Craftsmanship - {siteConfig.business.regionLabel}</span>
        </div>

        <h1 className="mb-3 font-serif text-[clamp(52px,8vw,96px)] leading-none tracking-[-0.01em] text-foreground">
          {content.title}
          <span className="block italic text-secondary">{content.accent}</span>
        </h1>

        <div className="mb-7 h-px w-45 origin-left bg-linear-to-r from-secondary to-secondary/20" />

        <p className="mb-12 max-w-lg text-[clamp(15px,1.8vw,19px)] leading-relaxed text-muted-foreground">{content.description}</p>

        <div className="flex flex-wrap gap-3.5">
          <Button asChild className="h-12 px-7 text-sm uppercase tracking-[0.14em]"><Link href="/contact">Request Free Estimate</Link></Button>
          <Button asChild variant="outline" className="h-12 border-secondary/40 px-6 text-sm text-secondary hover:bg-secondary/10 hover:text-secondary"><a href={`tel:${siteConfig.phones.english}`}><Phone size={15} className="mr-2 inline-block" />{siteConfig.phones.english}</a></Button>
        </div>

        <div className="mt-18 flex flex-wrap gap-x-12 gap-y-8 border-t border-secondary/25 pt-10">
          {content.stats.map((item) => (
            <div key={item.label}>
              <p className="mb-1 font-serif text-4xl leading-none text-secondary">{item.value}</p>
              <p className="text-[11px] tracking-[0.14em] uppercase text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceOverviewSection({ content }: { content: OverviewContent }) {
  return (
    <section className="relative bg-background py-28 px-6">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 lg:grid-cols-2">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary"><span className="h-px w-6 bg-secondary" />What We Do</p>
          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] leading-snug text-foreground">
            {content.title}
            <br />
            <em className="text-secondary">{content.accent}</em>
          </h2>
          <div className="mx-0 mb-7 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />
          <p className="mb-8 text-base leading-loose text-muted-foreground">{content.paragraphs[0]}</p>
          <p className="mb-10 text-base leading-loose text-muted-foreground">{content.paragraphs[1]}</p>
          <ul className="flex flex-col gap-3.5">
            {content.bullets.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <div className="h-px w-5 shrink-0 bg-secondary" />
                <span className="text-sm tracking-wide text-foreground/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="relative">
            <div className="relative aspect-4/5 overflow-hidden">
              <Image src={content.image} alt={content.imageAlt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-700 hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-br from-secondary/20 to-transparent" />
            </div>
            <div className="absolute -right-6 -bottom-6 -z-10 h-28 w-28 border border-secondary/30" />
            <div className="absolute -top-6 -left-6 -z-10 h-20 w-20 border border-secondary/20" />
            <div className="absolute -left-7 bottom-7 border border-secondary/40 bg-card/85 px-5 py-4 backdrop-blur-sm">
              <p className="mb-1 font-serif text-3xl leading-none text-secondary">{content.badgeValue}</p>
              <p className="text-[11px] tracking-[0.12em] uppercase text-muted-foreground">{content.badgeLabel}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceBenefitsSection({ content }: { content: BenefitItem[] }) {
  return (
    <section className="bg-muted/20 py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary"><span className="h-px w-6 bg-secondary" />Why Clients Choose Us</p>
          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] text-foreground">The <em className="text-secondary">Difference</em> You&apos;ll Notice</h2>
        </div>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
          {content.map((benefit) => {
            const Icon = ICON_MAP[benefit.icon];
            return (
              <div key={benefit.title} className="glass-card border border-border/40 p-11 transition-all duration-500 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-luxury">
                <div className="mb-7 flex h-11 w-11 items-center justify-center border border-secondary/35 bg-secondary/5">
                  <Icon size={18} className="text-secondary" />
                </div>
                <h3 className="mb-3 font-serif text-xl text-foreground leading-snug">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-loose">{benefit.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ServiceProcessSection({ content }: { content: ProcessContent }) {
  return (
    <section className="bg-background py-28 px-6">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-20 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <div className="lg:sticky lg:top-28">
            <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary"><span className="h-px w-6 bg-secondary" />How We Build</p>
            <h2 className="mb-7 font-serif text-[clamp(36px,3.5vw,52px)] leading-snug text-foreground">Our<br /><em className="text-secondary">Process</em></h2>
            <div className="mx-0 mb-7 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />
            <p className="text-[15px] leading-loose text-muted-foreground">{content.intro}</p>
            <div className="mt-10 border border-secondary/30 bg-secondary/5 p-6">
              <p className="mb-2.5 text-[11px] tracking-[0.16em] uppercase text-secondary">Average Timeline</p>
              <p className="mb-1 font-serif text-[32px] text-foreground">{content.timeline}</p>
              <p className="text-xs text-muted-foreground">{content.timelineNote}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          {content.steps.map((step, i) => (
            <div key={step.num}>
              <div className={["relative flex gap-7", i < content.steps.length - 1 ? "pb-12" : ""].join(" ")}>
                {i < content.steps.length - 1 && <div className="absolute top-14 bottom-0 left-6.75 w-px bg-linear-to-b from-secondary/40 to-secondary/10" />}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-secondary/35 bg-secondary/8"><span className="font-serif text-[13px] tracking-wide text-secondary">{step.num}</span></div>
                <div className="pt-3">
                  <h3 className="mb-2 font-serif text-xl text-foreground">{step.title}</h3>
                  <p className="text-sm leading-loose text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceShowcaseSection({ content }: { content: ShowcaseContent }) {
  return (
    <section className="bg-muted/20 py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary"><span className="h-px w-6 bg-secondary" />Our Work</p>
            <h2 className="m-0 font-serif text-[clamp(36px,4vw,52px)] text-foreground">{content.title} <em className="text-secondary">{content.accent}</em></h2>
          </div>
          <Button asChild variant="outline" className="h-12 border-secondary/40 px-6 text-sm text-secondary hover:bg-secondary/10 hover:text-secondary"><Link href="/gallery">Full Portfolio <ArrowUpRight size={14} className="ml-2" /></Link></Button>
        </div>
        <div className="grid grid-cols-[1.5fr_1fr_1fr] grid-rows-[auto_auto] gap-1">
          <GalleryTile src={content.featured.src} location={content.featured.location} title={content.featured.title} className="row-span-2 min-h-130" titleSize="text-2xl" />
          {content.items.map((item) => (
            <GalleryTile key={`${item.title}-${item.location}`} src={item.src} location={item.location} title={item.title} className="aspect-4/3" titleSize="text-base" />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceTestimonialSection({ content }: { content: TestimonialContent }) {
  return (
    <section className="bg-background py-28 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-10 flex justify-center gap-1.5">{[...Array(5)].map((_, i) => (<Star key={i} size={18} fill="currentColor" className="text-secondary" />))}</div>
        <p className="mb-12 font-serif text-[clamp(22px,3vw,36px)] italic leading-relaxed text-foreground">&ldquo;{content.quote}&rdquo;</p>
        <div className="mx-auto mb-7 h-px w-10 bg-secondary" />
        <p className="mb-1 font-serif text-xl text-secondary">{content.name}</p>
        <p className="text-[12px] tracking-[0.12em] uppercase text-muted-foreground">{content.location}</p>
      </div>
    </section>
  );
}

export function ServiceFaqSection({ content }: { content: FaqContent }) {
  return <ServiceFaqAccordion content={content} />;
}

export function ServiceCtaSection({ content }: { content: CtaContent }) {
  return (
    <section className="relative overflow-hidden py-36 px-6">
      <div className="absolute inset-0">
        <Image src={content.image} alt={content.imageAlt} fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-background/90" />
        <div className="absolute inset-0 bg-radial-[ellipse_at_60%_50%] from-secondary/12 to-transparent" />
      </div>
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-secondary/50 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-linear-to-r from-transparent via-secondary/50 to-transparent" />
      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <div className="mx-auto mb-10 h-14 w-px bg-linear-to-b from-transparent to-secondary" />
        <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary"><span className="h-px w-6 bg-secondary" />Begin Your Project</p>
        <h2 className="mb-5 font-serif text-[clamp(38px,5vw,64px)] leading-none text-foreground">{content.title}<br /><em className="text-secondary">{content.accent}</em></h2>
        <p className="mx-auto mb-14 max-w-lg text-base leading-loose text-muted-foreground">{content.description}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild className="h-12 px-7 text-sm uppercase tracking-[0.14em]"><Link href="/contact">{content.buttonLabel}</Link></Button>
          <Button asChild variant="outline" className="h-12 border-secondary/40 px-6 text-sm text-secondary hover:bg-secondary/10 hover:text-secondary"><a href={`tel:${siteConfig.phones.english}`}><Phone size={14} className="mr-2 inline-block" />Call {siteConfig.phones.english}</a></Button>
        </div>
        <p className="mt-7 text-xs tracking-wide text-muted-foreground">No obligation - Licensed & insured - {siteConfig.business.regionLabel}</p>
        <div className="mx-auto mt-12 h-14 w-px bg-linear-to-t from-transparent to-secondary/30" />
      </div>
    </section>
  );
}
