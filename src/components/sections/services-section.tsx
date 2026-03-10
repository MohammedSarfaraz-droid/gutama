import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { SectionHeading } from "@/components/sections/section-heading";
import { serviceIconMap } from "@/components/ui/icon-map";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import type { Service } from "@/types/service";

type ServiceCardItem = Pick<Service, "slug" | "shortTitle" | "icon" | "image" | "description">;

const SERVICES: ServiceCardItem[] = [
  {
    slug: "roof-removal",
    shortTitle: "Roof Removal",
    icon: "layers",
    image: "/images/service-roof-removal.jpg",
    description: "Complete tear-off and removal of old roofing materials with expert precision and thorough cleanup.",
  },
  {
    slug: "re-roofing",
    shortTitle: "Re-Roofing",
    icon: "home",
    image: "/images/service-re-roofing.jpg",
    description: "Premium re-roofing services using top-quality materials for lasting protection and curb appeal.",
  },
  {
    slug: "flat-roof",
    shortTitle: "Flat Roof",
    icon: "square",
    image: "/images/service-flat-roof.jpg",
    description: "Specialized flat roofing systems including TPO, EPDM, and modified bitumen.",
  },
  {
    slug: "slate-roof",
    shortTitle: "Slate Roof",
    icon: "diamond",
    image: "/images/service-slate-roof.jpg",
    description: "Timeless slate roofing installation and repair by experienced craftsmen.",
  },
  {
    slug: "chimney",
    shortTitle: "Chimney",
    icon: "flame",
    image: "/images/service-chimney.jpg",
    description: "Complete chimney repair, rebuilding, flashing, and waterproofing services.",
  },
  {
    slug: "siding",
    shortTitle: "Siding",
    icon: "panel-top",
    image: "/images/service-siding.jpg",
    description: "Transform your exterior with premium siding installation and precise finishing.",
  },
  {
    slug: "carpentry",
    shortTitle: "Carpentry",
    icon: "hammer",
    image: "/images/service-carpentry.jpg",
    description: "Skilled structural and finish carpentry for repairs and renovations.",
  },
  {
    slug: "additions",
    shortTitle: "Additions",
    icon: "building",
    image: "/images/service-additions.jpg",
    description: "Expand your living space with additions that blend seamlessly with your home.",
  },
  {
    slug: "dormers",
    shortTitle: "Dormers",
    icon: "triangle",
    image: "/images/service-dormers.jpg",
    description: "Add natural light, headroom, and value with professionally built dormers.",
  },
  {
    slug: "gutters",
    shortTitle: "Gutters",
    icon: "droplets",
    image: "/images/service-gutters.jpg",
    description: "Seamless gutter installation and repair to protect your foundation and landscaping.",
  },
  {
    slug: "emergency-repair",
    shortTitle: "Emergency Repair",
    icon: "alert-triangle",
    image: "/images/service-emergency.jpg",
    description: "Rapid-response emergency repairs for storm damage, leaks, and urgent exterior issues.",
  },
];

export function ServicesSection() {
  return (
    <Section id="services" className="bg-background">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What We Do"
            title="Our Services"
            description="Comprehensive roofing and exterior solutions tailored to your needs."
          />
        </Reveal>

        <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" delay={0.08}>
          {SERVICES.map((service) => {
            const Icon = serviceIconMap[service.icon];

            return (
              <StaggerItem key={service.slug}>
                <article className="glass-card group block overflow-hidden border transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-luxury">
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
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </Container>
    </Section>
  );
}
