import { ServiceHeroSection } from "@/components/services/shared/service-sections";

export function SidingHeroSection() {
  return (
    <ServiceHeroSection
      content={{
        label: "Siding",
        title: "Premium",
        accent: "Siding",
        image: "/images/service-siding.jpg",
        imageAlt: "Siding installation services",
        description: "Transform your exterior with premium siding installation, moisture-conscious detailing, and finish work that sharpens curb appeal.",
        stats: [
          { value: "20+", label: "Years of Exterior Experience" },
          { value: "360+", label: "Siding Projects" },
          { value: "100%", label: "Weather Envelope Focus" },
          { value: "4.9", label: "Average Client Rating" },
        ],
      }}
    />
  );
}