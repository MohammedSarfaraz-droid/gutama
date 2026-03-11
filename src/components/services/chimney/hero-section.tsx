import { ServiceHeroSection } from "@/components/services/shared/service-sections";

export function ChimneyHeroSection() {
  return (
    <ServiceHeroSection
      content={{
        label: "Chimney",
        title: "Chimney",
        accent: "Services",
        image: "/images/service-chimney.jpg",
        imageAlt: "Chimney repair and restoration",
        description: "Complete chimney repair, rebuilding, flashing, and waterproofing services focused on safety, weather protection, and lasting masonry performance.",
        stats: [
          { value: "20+", label: "Years of Repair Experience" },
          { value: "310+", label: "Chimneys Restored" },
          { value: "100%", label: "Code-Focused Repairs" },
          { value: "4.9", label: "Average Client Rating" },
        ],
      }}
    />
  );
}