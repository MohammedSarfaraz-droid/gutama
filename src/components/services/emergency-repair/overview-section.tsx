import { ServiceOverviewSection } from "@/components/services/shared/service-sections";

export function EmergencyRepairOverviewSection() {
  return (
    <ServiceOverviewSection
      content={{
        title: "Fast action for",
        accent: "active damage",
        paragraphs: [
          "When a storm tears materials loose or a leak becomes active, the first priority is stopping further damage. We move quickly to stabilize the affected area, protect the interior, and document conditions clearly.",
          "Once the site is secure, we define the permanent repair plan so the final fix is not just fast, but durable, code-conscious, and aligned with the rest of your exterior system.",
        ],
        bullets: ["Leak stabilization", "Storm damage response", "Temporary protection", "Permanent repair planning"],
        image: "/images/gallery-roof-3.jpg",
        imageAlt: "Emergency roof repair response",
        badgeValue: "260+",
        badgeLabel: "Emergency Calls Resolved",
      }}
    />
  );
}