import { ServiceOverviewSection } from "@/components/services/shared/service-sections";

export function ChimneyOverviewSection() {
  return (
    <ServiceOverviewSection
      content={{
        title: "Restoration built for",
        accent: "safety and longevity",
        paragraphs: [
          "Chimney issues often begin quietly: cracked mortar, failed flashing, loose crowns, or moisture intrusion at the roofline. Left unresolved, these problems can quickly affect both masonry integrity and interior protection.",
          "Our chimney work addresses the full system, from brick and mortar to flashing transitions and waterproofing, so the finished repair is stable, watertight, and visually clean.",
        ],
        bullets: ["Chimney rebuilding", "Flashing replacement", "Crown and cap repairs", "Waterproofing protection"],
        image: "/images/gallery-chimney-1.jpg",
        imageAlt: "Chimney masonry detail",
        badgeValue: "310+",
        badgeLabel: "Repairs Completed",
      }}
    />
  );
}