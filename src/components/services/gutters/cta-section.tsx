import { ServiceCtaSection } from "@/components/services/shared/service-sections";

export function GuttersCtaSection() {
  return (
    <ServiceCtaSection
      content={{
        image: "/images/service-gutters.jpg",
        imageAlt: "Gutter system background",
        title: "Ready to Improve",
        accent: "Your Drainage?",
        description: "Schedule a no-cost site visit and estimate. We'll assess runoff patterns, gutter condition, and provide a clear recommendation for repair or replacement.",
        buttonLabel: "Schedule a Free Site Visit",
      }}
    />
  );
}