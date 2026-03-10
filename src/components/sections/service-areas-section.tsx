import { SectionHeading } from "@/components/sections/section-heading";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";

const SERVICE_AREA_LABEL = "Proudly Serving Essex County, NJ";

const MUNICIPALITIES = [
  "Newark",
  "East Orange",
  "Orange",
  "Irvington",
  "Belleville",
  "Bloomfield",
  "Caldwell",
  "Cedar Grove",
  "Essex Fells",
  "Glen Ridge",
  "Livingston",
  "Maplewood",
  "Millburn",
  "North Caldwell",
  "Nutley",
  "Roseland",
  "South Orange",
  "Verona",
  "West Orange",
];

export function ServiceAreasSection() {
  return (
    <Section id="service-areas" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/about-aerial.jpg')] bg-cover bg-center opacity-10" aria-hidden="true" />
      <div className="absolute inset-0 bg-background/90" aria-hidden="true" />

      <Container className="relative">
        <Reveal>
          <SectionHeading eyebrow="Coverage" title={SERVICE_AREA_LABEL} />
        </Reveal>

        <StaggerGroup className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5" delay={0.08}>
          {MUNICIPALITIES.map((town) => (
            <StaggerItem key={town}>
              <div className="glass-card border px-4 py-3 text-center text-sm font-medium text-foreground transition-colors hover:border-secondary/40">
                {town}
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </Section>
  );
}
