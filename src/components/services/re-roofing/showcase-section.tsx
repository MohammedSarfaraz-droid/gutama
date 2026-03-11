import { ServiceShowcaseSection } from "@/components/services/shared/service-sections";

export function ReRoofingShowcaseSection() {
  return (
    <ServiceShowcaseSection
      content={{
        title: "Completed",
        accent: "Projects",
        featured: { src: "/images/service-re-roofing.jpg", location: "Montclair, NJ", title: "Architectural Shingle Roof Replacement" },
        items: [
          { src: "/images/before-roof.jpg", location: "Maplewood, NJ", title: "Aging Roof Tear-Off" },
          { src: "/images/after-roof.jpg", location: "South Orange, NJ", title: "Full System Re-Roof" },
          { src: "/images/gallery-roof-1.jpg", location: "Verona, NJ", title: "Flashing & Ventilation Upgrade" },
          { src: "/images/gallery-roof-2.jpg", location: "Livingston, NJ", title: "Premium Curb Appeal Improvement" },
        ],
      }}
    />
  );
}