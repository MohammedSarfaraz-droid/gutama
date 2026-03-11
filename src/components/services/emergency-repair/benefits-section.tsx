import { ServiceBenefitsSection } from "@/components/services/shared/service-sections";

export function EmergencyRepairBenefitsSection() {
  return (
    <ServiceBenefitsSection
      content={[
        { icon: "clock", title: "Rapid Stabilization", desc: "We prioritize immediate protection to limit interior damage and prevent the problem from spreading." },
        { icon: "shield", title: "Protection First", desc: "Temporary coverings, securement, and controlled repair sequencing help keep the property safe while permanent work is planned." },
        { icon: "users", title: "Clear Communication", desc: "We explain what happened, what needs immediate attention, and what the long-term repair should include." },
        { icon: "award", title: "Permanent Repair Quality", desc: "Urgent work is completed with long-term performance in mind, not just a quick patch." },
        { icon: "home", title: "System-Wide Thinking", desc: "We evaluate roofing, flashing, siding, and structural conditions together to solve the actual failure point." },
        { icon: "ruler", title: "Documented Scope", desc: "You receive clear documentation of damage, protection work, and recommended repair steps." },
      ]}
    />
  );
}