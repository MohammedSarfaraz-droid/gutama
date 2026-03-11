import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
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

export const metadata: Metadata = buildMetadata({
  title: `Roofing & Exterior Contractor | ${siteConfig.business.regionLabel}`,
  description: siteConfig.business.description,
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
