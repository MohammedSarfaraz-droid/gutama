import { ServiceShowcaseSection } from "@/components/services/shared/service-sections";

export function RoofRemovalShowcaseSection() {
  return (
    <ServiceShowcaseSection
      content={{
        title: "Removal",
        accent: "Projects",
        featured: { src: "/images/service-roof-removal.jpg", location: "Bloomfield, NJ", title: "Full Tear-Off & Deck Prep" },
        items: [
          { src: "/images/before-roof.jpg", location: "Montclair, NJ", title: "Multi-Layer Shingle Removal" },
          { src: "/images/gallery-roof-1.jpg", location: "Maplewood, NJ", title: "Deck Exposure & Inspection" },
          { src: "/images/gallery-roof-2.jpg", location: "Livingston, NJ", title: "Property Protection Setup" },
          { src: "/images/gallery-roof-3.jpg", location: "Verona, NJ", title: "Tear-Off Prior to Replacement" },
        ],
      }}
    />
  );
}