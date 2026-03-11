import { ServiceCtaSection } from "@/components/services/shared/service-sections";

export function ReRoofingCtaSection() {
  return (
    <ServiceCtaSection
      content={{
        image: "/images/service-re-roofing.jpg",
        imageAlt: "Re-roofing background",
        title: "Ready for a",
        accent: "New Roof System?",
        description: "Schedule a no-cost roof evaluation and estimate. We'll inspect the existing roof, explain the right replacement approach, and outline a clear project plan.",
        buttonLabel: "Schedule a Free Roof Evaluation",
      }}
    />
  );
}