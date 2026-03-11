import { ServiceCtaSection } from "@/components/services/shared/service-sections";

export function SidingCtaSection() {
  return (
    <ServiceCtaSection
      content={{
        image: "/images/service-siding.jpg",
        imageAlt: "Siding project background",
        title: "Ready to Refresh",
        accent: "Your Exterior?",
        description: "Schedule a no-cost site visit and estimate. We'll assess the existing siding, discuss material options, and create a clear upgrade plan.",
        buttonLabel: "Schedule a Free Site Visit",
      }}
    />
  );
}