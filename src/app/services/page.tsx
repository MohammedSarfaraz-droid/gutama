import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { services } from "@/data/services";
import { buildMetadata } from "@/lib/seo";
import { serviceIconMap } from "@/components/ui/icon-map";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";

export const metadata: Metadata = buildMetadata({
  title: "Our Services | Essex County, NJ",
  description:
    "Explore roofing, siding, chimney, gutters, dormers, additions, and emergency repair services offered across Essex County, New Jersey.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 bg-linear-to-br from-secondary/10 via-background to-background" />
        <Container className="relative text-center">
          <Reveal>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-secondary">Our Services</p>
            <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              Full-Service Exterior Solutions
            </h1>
            <div className="gold-divider mt-5 mb-4" />
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
              From roof replacements to emergency repairs, each service has its own dedicated page so you can review scope, process, and FAQs before requesting an estimate.
            </p>
          </Reveal>
        </Container>
      </section>

      <Section className="bg-background">
        <Container>
          <StaggerGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" delay={0.08}>
            {services.map((service) => {
              const Icon = serviceIconMap[service.icon];

              return (
                <StaggerItem key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="group block h-full">
                    <article className="glass-card h-full overflow-hidden border transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-luxury">
                      <div className="relative h-44 overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.shortTitle}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-card via-card/40 to-transparent" />
                        <div className="absolute bottom-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/90">
                          <Icon className="h-5 w-5 text-primary-foreground" />
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="font-serif text-lg font-semibold text-foreground">{service.shortTitle}</h3>
                        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                          {service.description}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
                          View Details
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </article>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </Container>
      </Section>
    </>
  );
}
