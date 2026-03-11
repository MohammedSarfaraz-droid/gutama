import { ServiceCtaSection } from "@/components/services/shared/service-sections";

export function RoofRemovalCtaSection() {
  return (
    <ServiceCtaSection
      content={{
        image: "/images/service-roof-removal.jpg",
        imageAlt: "Roof removal background",
        title: "Need a Clean Start",
        accent: "For Your Next Roof?",
        description: "Schedule a no-cost evaluation and estimate. We'll review the existing roof, explain the tear-off process, and prepare a clear removal plan.",
        buttonLabel: "Schedule a Free Evaluation",
      }}
    />
  );
}