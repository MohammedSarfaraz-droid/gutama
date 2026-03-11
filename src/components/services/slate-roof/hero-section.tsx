import { ServiceHeroSection } from "@/components/services/shared/service-sections";

export function SlateRoofHeroSection() {
  return (
    <ServiceHeroSection
      content={{
        label: "Slate Roof",
        title: "Elegant",
        accent: "Slate Roofing",
        image: "/images/service-slate-roof.jpg",
        imageAlt: "Slate roofing services",
        description: "Timeless slate roofing installation and repair completed with specialized handling, traditional detailing, and long-term performance in mind.",
        stats: [
          { value: "18+", label: "Years of Slate Experience" },
          { value: "120+", label: "Slate Projects" },
          { value: "100%", label: "Heritage-Level Detailing" },
          { value: "4.9", label: "Average Client Rating" },
        ],
      }}
    />
  );
}