import { ServiceCtaSection } from "@/components/services/shared/service-sections";

export function ChimneyCtaSection() {
  return (
    <ServiceCtaSection
      content={{
        image: "/images/service-chimney.jpg",
        imageAlt: "Chimney project background",
        title: "Ready to Restore",
        accent: "Your Chimney?",
        description: "Schedule a no-cost inspection and estimate. We'll assess masonry condition, identify the source of failure, and provide a clear plan for durable repair.",
        buttonLabel: "Schedule a Free Inspection",
      }}
    />
  );
}