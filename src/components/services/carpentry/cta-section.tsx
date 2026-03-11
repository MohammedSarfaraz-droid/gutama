import { ServiceCtaSection } from "@/components/services/shared/service-sections";

export function CarpentryCtaSection() {
  return (
    <ServiceCtaSection
      content={{
        image: "/images/service-carpentry.jpg",
        imageAlt: "Carpentry background",
        title: "Ready to Start",
        accent: "Your Carpentry Project?",
        description: "Schedule a no-cost site visit and estimate. We'll review the scope, assess existing conditions, and provide a clear plan for durable, detail-driven work.",
        buttonLabel: "Schedule a Free Site Visit",
      }}
    />
  );
}