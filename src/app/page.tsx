import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";
import { AboutSection } from "@/components/sections/about-section";
import { BeforeAfterSection } from "@/components/sections/before-after-section";
import { CtaSection } from "@/components/sections/cta-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PerksStrip } from "@/components/sections/perks-strip";
import { ServiceAreasSection } from "@/components/sections/service-areas-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { WhyChooseSection } from "@/components/sections/why-choose-section";

const REGION = "Essex County, NJ";
const DESCRIPTION =
  "Premium roofing and exterior solutions for residential and commercial properties in Essex County, New Jersey.";

export const metadata: Metadata = buildMetadata({
  title: `Roofing & Exterior Contractor | ${REGION}`,
  description: DESCRIPTION,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PerksStrip />
      <ServicesSection />
      <AboutSection />
      <GallerySection />
      <WhyChooseSection />
      <BeforeAfterSection />
      <ServiceAreasSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
