import { ServiceOverviewSection } from "@/components/services/shared/service-sections";

export function FlatRoofOverviewSection() {
  return (
    <ServiceOverviewSection
      content={{
        title: "Engineered for",
        accent: "reliable performance",
        paragraphs: [
          "Flat roofing requires more than membrane installation. Slope strategy, drainage points, edge metal, flashing transitions, and seam integrity all have to work together to prevent ponding and premature failure.",
          "We install and repair flat roofing systems with close attention to substrate condition, fastening patterns, insulation layout, and watertight detailing so the system performs in demanding weather conditions.",
        ],
        bullets: ["TPO and EPDM systems", "Drainage planning", "Seam and edge detailing", "Leak-focused repairs"],
        image: "/images/after-flat.jpg",
        imageAlt: "Completed flat roof system",
        badgeValue: "220+",
        badgeLabel: "Systems Installed",
      }}
    />
  );
}