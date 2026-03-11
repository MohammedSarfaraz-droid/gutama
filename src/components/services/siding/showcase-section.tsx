import { ServiceShowcaseSection } from "@/components/services/shared/service-sections";

export function SidingShowcaseSection() {
  return (
    <ServiceShowcaseSection
      content={{
        title: "Exterior",
        accent: "Projects",
        featured: { src: "/images/service-siding.jpg", location: "Montclair, NJ", title: "Full Exterior Siding Upgrade" },
        items: [
          { src: "/images/before-siding.jpg", location: "Maplewood, NJ", title: "Outdated Cladding Replacement" },
          { src: "/images/after-siding.jpg", location: "South Orange, NJ", title: "Modern Siding Transformation" },
          { src: "/images/gallery-siding-1.jpg", location: "Verona, NJ", title: "Trim & Accent Detail Package" },
          { src: "/images/service-siding.jpg", location: "Glen Ridge, NJ", title: "Weatherproof Envelope Upgrade" },
        ],
      }}
    />
  );
}