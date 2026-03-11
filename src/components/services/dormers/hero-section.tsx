import { ServiceHeroSection } from "@/components/services/shared/service-sections";

export function DormersHeroSection() {
  return (
    <ServiceHeroSection
      content={{
        label: "Dormers",
        title: "Dormer",
        accent: "Installation",
        image: "/images/service-dormers.jpg",
        imageAlt: "Dormer installation services",
        description: "Add natural light, headroom, and usable living space with dormers designed to improve both function and curb appeal.",
        stats: [
          { value: "18+", label: "Years of Build Experience" },
          { value: "140+", label: "Dormers Completed" },
          { value: "100%", label: "Permit-Managed Projects" },
          { value: "4.9", label: "Average Client Rating" },
        ],
      }}
    />
  );
}