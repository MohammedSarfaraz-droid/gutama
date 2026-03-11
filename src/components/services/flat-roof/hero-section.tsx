import { ServiceHeroSection } from "@/components/services/shared/service-sections";

export function FlatRoofHeroSection() {
  return (
    <ServiceHeroSection
      content={{
        label: "Flat Roof",
        title: "Flat Roof",
        accent: "Solutions",
        image: "/images/service-flat-roof.jpg",
        imageAlt: "Flat roof installation and repair",
        description: "Specialized flat roofing systems including TPO, EPDM, and modified bitumen installed with precise drainage and seam detailing.",
        stats: [
          { value: "20+", label: "Years of Roofing Experience" },
          { value: "220+", label: "Flat Roof Projects" },
          { value: "100%", label: "Drainage-Focused Design" },
          { value: "4.9", label: "Average Client Rating" },
        ],
      }}
    />
  );
}