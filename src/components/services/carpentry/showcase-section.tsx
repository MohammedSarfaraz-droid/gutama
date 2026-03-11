import { ServiceShowcaseSection } from "@/components/services/shared/service-sections";

export function CarpentryShowcaseSection() {
  return (
    <ServiceShowcaseSection
      content={{
        title: "Crafted",
        accent: "Projects",
        featured: { src: "/images/service-carpentry.jpg", location: "Montclair, NJ", title: "Custom Exterior Trim Restoration" },
        items: [
          { src: "/images/about-team.jpg", location: "Maplewood, NJ", title: "Porch Framing Repair" },
          { src: "/images/service-carpentry.jpg", location: "South Orange, NJ", title: "Decorative Millwork Upgrade" },
          { src: "/images/about-team.jpg", location: "Verona, NJ", title: "Window & Fascia Rebuild" },
          { src: "/images/service-carpentry.jpg", location: "Glen Ridge, NJ", title: "Custom Soffit Detailing" },
        ],
      }}
    />
  );
}