import { ServiceBenefitsSection } from "@/components/services/shared/service-sections";

export function SlateRoofBenefitsSection() {
  return (
    <ServiceBenefitsSection
      content={[
        { icon: "award", title: "Specialized Slate Handling", desc: "Slate requires a different installation mindset than standard roofing materials, and we treat it accordingly." },
        { icon: "shield", title: "Compatible Roof Detailing", desc: "Flashings, transitions, and repairs are planned to work with slate rather than compromise it." },
        { icon: "ruler", title: "Clean Visual Consistency", desc: "Repair and replacement work is approached with attention to layout, size matching, and the roof's overall character." },
        { icon: "clock", title: "Thoughtful Project Sequencing", desc: "Slate work is paced carefully to protect fragile materials and maintain installation quality." },
        { icon: "users", title: "Guided Preservation Decisions", desc: "We help you determine when repair is sufficient and when broader restoration is the better investment." },
        { icon: "home", title: "Architectural Longevity", desc: "Proper slate work protects not just the roof, but the historic value and visual integrity of the home." },
      ]}
    />
  );
}