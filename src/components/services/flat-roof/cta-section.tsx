import { ServiceCtaSection } from "@/components/services/shared/service-sections";

export function FlatRoofCtaSection() {
  return (
    <ServiceCtaSection
      content={{
        image: "/images/service-flat-roof.jpg",
        imageAlt: "Flat roof project background",
        title: "Ready to Upgrade",
        accent: "Your Flat Roof?",
        description: "Schedule a no-cost site visit and estimate. We'll inspect the roof, review drainage and membrane conditions, and recommend the right next step.",
        buttonLabel: "Schedule a Free Roof Review",
      }}
    />
  );
}