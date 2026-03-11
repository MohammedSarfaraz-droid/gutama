import { ServiceShowcaseSection } from "@/components/services/shared/service-sections";

export function GuttersShowcaseSection() {
  return (
    <ServiceShowcaseSection
      content={{
        title: "Drainage",
        accent: "Projects",
        featured: { src: "/images/service-gutters.jpg", location: "Montclair, NJ", title: "Seamless Gutter & Downspout Upgrade" },
        items: [
          { src: "/images/about-aerial.jpg", location: "Maplewood, NJ", title: "Foundation Runoff Improvement" },
          { src: "/images/service-gutters.jpg", location: "South Orange, NJ", title: "Full Gutter Replacement" },
          { src: "/images/gallery-roof-1.jpg", location: "Verona, NJ", title: "Overflow Correction Project" },
          { src: "/images/gallery-roof-2.jpg", location: "Livingston, NJ", title: "Fascia & Gutter Repair" },
        ],
      }}
    />
  );
}