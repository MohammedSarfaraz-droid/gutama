import { ServiceOverviewSection } from "@/components/services/shared/service-sections";

export function DormersOverviewSection() {
  return (
    <ServiceOverviewSection
      content={{
        title: "Dormers that add",
        accent: "space and balance",
        paragraphs: [
          "A well-designed dormer transforms an upper floor by improving headroom, daylight, ventilation, and the way the exterior reads from the street. It has to feel intentional, not added on as an afterthought.",
          "Our team integrates framing, roofing, siding, flashing, and finish work into one coordinated scope so the new dormer performs properly and looks proportionate to your existing home.",
        ],
        bullets: ["More usable headroom", "Integrated roofline framing", "Natural light improvements", "Architectural curb appeal"],
        image: "/images/gallery-roof-1.jpg",
        imageAlt: "Dormer construction detail",
        badgeValue: "140+",
        badgeLabel: "Dormers Completed",
      }}
    />
  );
}