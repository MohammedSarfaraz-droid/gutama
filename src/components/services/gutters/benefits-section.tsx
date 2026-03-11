import { ServiceBenefitsSection } from "@/components/services/shared/service-sections";

export function GuttersBenefitsSection() {
  return (
    <ServiceBenefitsSection
      content={[
        { icon: "ruler", title: "Accurate Pitch & Sizing", desc: "Every run is laid out to move water efficiently without overflow or standing water." },
        { icon: "shield", title: "Foundation Protection", desc: "Proper downspout routing helps keep runoff away from foundation walls, walks, and planted areas." },
        { icon: "award", title: "Clean Exterior Finish", desc: "Seamless systems with tidy fastening and alignment improve both function and appearance." },
        { icon: "clock", title: "Efficient Installation", desc: "Most gutter scopes can be completed quickly with minimal disruption to daily routines." },
        { icon: "users", title: "Repair or Replace Guidance", desc: "We help you decide whether targeted repair is enough or a new system makes more sense." },
        { icon: "home", title: "Roof Edge Integration", desc: "We consider fascia condition, drip edge, and roof runoff behavior as part of the complete system." },
      ]}
    />
  );
}