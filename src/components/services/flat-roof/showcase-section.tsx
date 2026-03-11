import { ServiceShowcaseSection } from "@/components/services/shared/service-sections";

export function FlatRoofShowcaseSection() {
  return (
    <ServiceShowcaseSection
      content={{
        title: "Flat Roof",
        accent: "Projects",
        featured: { src: "/images/service-flat-roof.jpg", location: "Newark, NJ", title: "Low-Slope Membrane Replacement" },
        items: [
          { src: "/images/before-flat.jpg", location: "Montclair, NJ", title: "Ponding Water Correction" },
          { src: "/images/after-flat.jpg", location: "Bloomfield, NJ", title: "TPO System Installation" },
          { src: "/images/gallery-roof-2.jpg", location: "Maplewood, NJ", title: "Drainage & Edge Metal Upgrade" },
          { src: "/images/gallery-roof-3.jpg", location: "Livingston, NJ", title: "Leak Repair & Flashing Restoration" },
        ],
      }}
    />
  );
}