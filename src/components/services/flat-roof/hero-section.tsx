import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, Phone } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

export function FlatRoofHeroSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0">
        <Image src="/images/service-flat-roof.jpg" alt="Flat roof installation and repair" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-background/84" />
        <div className="absolute inset-0 bg-linear-to-r from-primary/20 via-background/60 to-transparent" />
      </div>

      <Container className="relative">
        <Reveal className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="transition-colors hover:text-foreground">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/services" className="transition-colors hover:text-foreground">Services</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Flat Roof</span>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[1.45fr_1fr] lg:items-end">
          <Reveal className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-black/20 px-4 py-1.5">
              <span className="text-sm font-medium text-secondary">Professional Service</span>
            </div>
            <h1 className="mb-6 font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">Flat Roof Installation & Repair</h1>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Specialized flat roofing systems including TPO, EPDM, and modified bitumen.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="h-12 px-6 text-base font-semibold">
                <Link href="/contact">Get Free Estimate<ArrowRight className="ml-1 h-5 w-5" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 border-secondary/40 px-6 text-base text-secondary hover:bg-secondary/10 hover:text-secondary">
                <a href={`tel:${siteConfig.phones.english}`}><Phone className="mr-2 h-5 w-5" />{siteConfig.phones.english}</a>
              </Button>
            </div>
          </Reveal>

          <Reveal className="glass-card border border-border/40 bg-black/30 p-6 backdrop-blur-xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Why Homeowners Choose Us</p>
            <div className="space-y-3">
              <div className="rounded-md border border-border/30 bg-black/20 px-3 py-2 text-sm text-foreground">Licensed & Fully Insured</div>
              <div className="rounded-md border border-border/30 bg-black/20 px-3 py-2 text-sm text-foreground">Quality Guaranteed</div>
              <div className="rounded-md border border-border/30 bg-black/20 px-3 py-2 text-sm text-foreground">On-Time Completion</div>
              <div className="rounded-md border border-border/30 bg-black/20 px-3 py-2 text-sm text-foreground">Free Estimates</div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}