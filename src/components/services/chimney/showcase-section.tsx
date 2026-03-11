import { ServiceShowcaseSection } from "@/components/services/shared/service-sections";

export function ChimneyShowcaseSection() {
  return (
    <ServiceShowcaseSection
      content={{
        title: "Restoration",
        accent: "Projects",
        featured: { src: "/images/service-chimney.jpg", location: "Montclair, NJ", title: "Full Chimney Rebuild & Flashing Upgrade" },
        items: [
          { src: "/images/gallery-chimney-1.jpg", location: "Maplewood, NJ", title: "Masonry Repointing Repair" },
          { src: "/images/service-chimney.jpg", location: "Livingston, NJ", title: "Crown & Cap Restoration" },
          { src: "/images/gallery-chimney-1.jpg", location: "Verona, NJ", title: "Leak Investigation & Flashing Replacement" },
          { src: "/images/service-chimney.jpg", location: "Millburn, NJ", title: "Brick Stabilization Project" },
        ],
      }}
    />
  );
}