import { ServiceBenefitsSection } from "@/components/services/shared/service-sections";

export function RoofRemovalBenefitsSection() {
  return (
    <ServiceBenefitsSection
      content={[
        { icon: "shield", title: "Property Protection", desc: "We protect landscaping, siding, windows, and surrounding surfaces throughout the tear-off process." },
        { icon: "clock", title: "Efficient Scheduling", desc: "Removal work is sequenced to keep the project moving toward deck prep and new installation without delay." },
        { icon: "ruler", title: "Clean Deck Exposure", desc: "The roof deck is left open, visible, and ready for inspection rather than buried under old problem materials." },
        { icon: "award", title: "Disciplined Workmanship", desc: "Even removal work requires strong crew control, site awareness, and consistent cleanup standards." },
        { icon: "users", title: "Transparent Scope", desc: "We explain the tear-off process, expected debris control, and what happens next once the deck is exposed." },
        { icon: "home", title: "Better Replacement Results", desc: "A clean tear-off creates the right starting point for a longer-lasting, better-performing new roofing system." },
      ]}
    />
  );
}