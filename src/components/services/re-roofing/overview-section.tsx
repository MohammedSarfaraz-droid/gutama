import { ServiceOverviewSection } from "@/components/services/shared/service-sections";

export function ReRoofingOverviewSection() {
  return (
    <ServiceOverviewSection
      content={{
        title: "Replacement roofing with",
        accent: "lasting value",
        paragraphs: [
          "When a roof reaches the end of its service life, the replacement needs more than new shingles. Deck condition, flashing details, ventilation, underlayment, and edge protection all influence how the next roof will perform.",
          "We handle re-roofing with a complete system mindset, removing failing materials, correcting problem conditions, and installing a new assembly built for durability, weather resistance, and clean visual finish.",
        ],
        bullets: ["Full tear-off replacement", "Deck and flashing review", "Ventilation improvements", "Premium roofing materials"],
        image: "/images/after-roof.jpg",
        imageAlt: "Completed re-roofing project",
        badgeValue: "690+",
        badgeLabel: "Roofs Replaced",
      }}
    />
  );
}