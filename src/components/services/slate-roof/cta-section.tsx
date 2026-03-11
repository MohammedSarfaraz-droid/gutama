import { ServiceCtaSection } from "@/components/services/shared/service-sections";

export function SlateRoofCtaSection() {
  return (
    <ServiceCtaSection
      content={{
        image: "/images/service-slate-roof.jpg",
        imageAlt: "Slate roofing background",
        title: "Ready to Protect",
        accent: "Your Slate Roof?",
        description: "Schedule a no-cost roof evaluation and estimate. We'll inspect the slate system, identify vulnerable details, and outline the right repair or restoration approach.",
        buttonLabel: "Schedule a Free Roof Evaluation",
      }}
    />
  );
}