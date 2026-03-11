import { ServiceCtaSection } from "@/components/services/shared/service-sections";

export function DormersCtaSection() {
  return (
    <ServiceCtaSection
      content={{
        image: "/images/service-dormers.jpg",
        imageAlt: "Dormer installation background",
        title: "Ready to Add",
        accent: "Space and Light?",
        description: "Schedule a no-cost site visit and estimate. We'll review your roof structure, discuss dormer options, and provide a clear build plan.",
        buttonLabel: "Schedule a Free Site Visit",
      }}
    />
  );
}