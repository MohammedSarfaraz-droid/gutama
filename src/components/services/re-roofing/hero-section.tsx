import { ServiceHeroSection } from "@/components/services/shared/service-sections";

export function ReRoofingHeroSection() {
  return (
    <ServiceHeroSection
      content={{
        label: "Re-Roofing",
        title: "Expert",
        accent: "Re-Roofing",
        image: "/images/service-re-roofing.jpg",
        imageAlt: "Re-roofing services",
        description: "Premium re-roofing services using top-quality materials and disciplined installation for lasting protection and stronger curb appeal.",
        stats: [
          { value: "22+", label: "Years of Roofing Experience" },
          { value: "690+", label: "Roofs Replaced" },
          { value: "100%", label: "Clean Tear-Off Standards" },
          { value: "4.9", label: "Average Client Rating" },
        ],
      }}
    />
  );
}