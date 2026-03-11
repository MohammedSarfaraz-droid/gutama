import { ServiceHeroSection } from "@/components/services/shared/service-sections";

export function GuttersHeroSection() {
  return (
    <ServiceHeroSection
      content={{
        label: "Gutters",
        title: "Gutters",
        accent: "Installation",
        image: "/images/service-gutters.jpg",
        imageAlt: "Gutter installation services",
        description: "Seamless gutter installation and repair designed to control roof runoff, protect your foundation, and preserve exterior finishes.",
        stats: [
          { value: "22+", label: "Years in Exterior Protection" },
          { value: "520+", label: "Gutter Systems Installed" },
          { value: "100%", label: "Drainage-Focused Layouts" },
          { value: "4.9", label: "Average Client Rating" },
        ],
      }}
    />
  );
}