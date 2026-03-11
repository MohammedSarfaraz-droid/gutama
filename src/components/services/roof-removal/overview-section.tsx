import { ServiceOverviewSection } from "@/components/services/shared/service-sections";

export function RoofRemovalOverviewSection() {
  return (
    <ServiceOverviewSection
      content={{
        title: "Clean removal for a",
        accent: "better next roof",
        paragraphs: [
          "A proper roof replacement starts with disciplined removal. Old roofing has to come off cleanly, debris needs to be controlled, and the deck must be left ready for full inspection and preparation.",
          "Our roof removal crews protect the property, work efficiently, and leave a clean, inspection-ready surface so the next roofing system can be installed on a dependable foundation.",
        ],
        bullets: ["Controlled tear-off", "Clean jobsite practices", "Deck exposure for inspection", "Disposal and site protection"],
        image: "/images/before-roof.jpg",
        imageAlt: "Roof tear-off preparation",
        badgeValue: "740+",
        badgeLabel: "Roofs Removed",
      }}
    />
  );
}