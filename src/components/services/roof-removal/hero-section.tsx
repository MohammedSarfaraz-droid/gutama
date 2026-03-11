import { ServiceHeroSection } from "@/components/services/shared/service-sections";

export function RoofRemovalHeroSection() {
  return (
    <ServiceHeroSection
      content={{
        label: "Roof Removal",
        title: "Professional",
        accent: "Roof Removal",
        image: "/images/service-roof-removal.jpg",
        imageAlt: "Roof removal services",
        description: "Complete tear-off and roof removal with safe disposal, careful site protection, and a clean deck ready for the next installation phase.",
        stats: [
          { value: "22+", label: "Years of Removal Experience" },
          { value: "740+", label: "Tear-Off Projects" },
          { value: "100%", label: "Site Protection Standards" },
          { value: "4.9", label: "Average Client Rating" },
        ],
      }}
    />
  );
}