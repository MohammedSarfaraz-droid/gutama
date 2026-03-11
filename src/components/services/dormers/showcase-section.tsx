import { ServiceShowcaseSection } from "@/components/services/shared/service-sections";

export function DormersShowcaseSection() {
  return (
    <ServiceShowcaseSection
      content={{
        title: "Dormer",
        accent: "Projects",
        featured: { src: "/images/service-dormers.jpg", location: "South Orange, NJ", title: "Rear Dormer Expansion" },
        items: [
          { src: "/images/gallery-roof-1.jpg", location: "Montclair, NJ", title: "Shed Dormer Addition" },
          { src: "/images/service-dormers.jpg", location: "Maplewood, NJ", title: "Twin Front Dormers" },
          { src: "/images/gallery-roof-2.jpg", location: "Glen Ridge, NJ", title: "Primary Suite Roofline Upgrade" },
          { src: "/images/gallery-roof-3.jpg", location: "Livingston, NJ", title: "Upper-Level Space Conversion" },
        ],
      }}
    />
  );
}