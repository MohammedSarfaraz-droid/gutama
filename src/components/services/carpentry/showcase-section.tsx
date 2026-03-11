import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/config/site";

export function CarpentryShowcaseSection() {
  return (
    <Section className="bg-background/80">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal className="glass-card border border-border/40 p-6 md:p-8">
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">Before & After</h2>
            <div className="gold-divider mx-0! mt-4 mb-6" />
            <div className="grid gap-4 sm:grid-cols-2">
              <article>
                <div className="relative h-52 overflow-hidden rounded-lg border border-border/40">
                  <Image src="/images/service-carpentry.jpg" alt="Carpentry before" fill className="object-cover" sizes="(max-width: 640px) 100vw, 50vw" />
                </div>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Before</p>
              </article>
              <article>
                <div className="relative h-52 overflow-hidden rounded-lg border border-border/40">
                  <Image src="/images/about-team.jpg" alt="Carpentry after" fill className="object-cover" sizes="(max-width: 640px) 100vw, 50vw" />
                </div>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">After</p>
              </article>
            </div>
          </Reveal>
          <Reveal className="glass-card border border-border/40 p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Need Fast Answers?</p>
            <h3 className="mt-3 font-serif text-2xl font-bold text-foreground">Talk to a Specialist Today</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">We&apos;ll review your project scope, timeline, and budget, then provide a tailored plan and a clear estimate.</p>
            <div className="mt-6 space-y-3">
              <Button asChild className="w-full justify-center"><Link href="/contact">Request Detailed Estimate<ArrowRight className="ml-1 h-4 w-4" /></Link></Button>
              <Button asChild variant="outline" className="w-full justify-center border-secondary/40 text-secondary hover:bg-secondary/10 hover:text-secondary"><a href={`tel:${siteConfig.phones.english}`}><Phone className="mr-2 h-4 w-4" />{siteConfig.phones.english}</a></Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}