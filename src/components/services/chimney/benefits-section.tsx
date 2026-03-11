import { ServiceBenefitsSection } from "@/components/services/shared/service-sections";

export function ChimneyBenefitsSection() {
  return (
    <ServiceBenefitsSection
      content={[
        { icon: "shield", title: "Weatherproof Protection", desc: "We stop water intrusion at the roofline and chimney envelope before deeper damage develops." },
        { icon: "ruler", title: "Clean Masonry Detailing", desc: "Mortar joints, brick alignment, flashing bends, and finish transitions are handled with precision." },
        { icon: "award", title: "Repair or Rebuild Expertise", desc: "We can stabilize isolated failures or execute full chimney rebuilds when structural damage requires it." },
        { icon: "clock", title: "Straightforward Scheduling", desc: "You get a defined repair scope, timeline, and sequence before work begins." },
        { icon: "users", title: "Clear Communication", desc: "We explain the cause of failure, the recommended fix, and the expected life cycle of the repair." },
        { icon: "home", title: "Integrated Roofline Work", desc: "Chimney masonry, flashing, and adjacent roofing details are treated as one coordinated system." },
      ]}
    />
  );
}