import { ServiceHeroSection } from "@/components/services/shared/service-sections";

export function CarpentryHeroSection() {
  return (
    <ServiceHeroSection
      content={{
        label: "Carpentry",
        title: "Expert",
        accent: "Carpentry",
        image: "/images/service-carpentry.jpg",
        imageAlt: "Expert carpentry services",
        description: "Skilled structural and finish carpentry for repairs, trim restoration, and exterior renovations completed with precision.",
        stats: [
          { value: "25+", label: "Years of Craftsmanship" },
          { value: "480+", label: "Projects Completed" },
          { value: "100%", label: "Detail-Driven Finishes" },
          { value: "4.9", label: "Average Client Rating" },
        ],
      }}
    />
  );
}