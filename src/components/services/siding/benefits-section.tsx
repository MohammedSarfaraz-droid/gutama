import { ServiceBenefitsSection } from "@/components/services/shared/service-sections";

export function SidingBenefitsSection() {
  return (
    <ServiceBenefitsSection
      content={[
        { icon: "home", title: "Sharper Curb Appeal", desc: "Updated siding can dramatically improve the visual quality and value perception of the home." },
        { icon: "shield", title: "Envelope Protection", desc: "Flashing, trim transitions, and moisture management are handled to support long-term exterior performance." },
        { icon: "ruler", title: "Straight Lines & Clean Finish", desc: "Alignment, reveal consistency, and detail transitions are treated as finish-level craftsmanship." },
        { icon: "award", title: "Material-Specific Installation", desc: "Different siding products need different fastening, spacing, and detailing approaches, and we install accordingly." },
        { icon: "clock", title: "Organized Scheduling", desc: "We keep removal, repairs, trim work, and final installation on a clear project plan." },
        { icon: "users", title: "Guided Selections", desc: "We help you choose colors, textures, and trim combinations that suit the architecture of your home." },
      ]}
    />
  );
}