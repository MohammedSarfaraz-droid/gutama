import { ServiceBenefitsSection } from "@/components/services/shared/service-sections";

export function FlatRoofBenefitsSection() {
  return (
    <ServiceBenefitsSection
      content={[
        { icon: "shield", title: "Leak-Resistant Detailing", desc: "Transitions, penetrations, seams, and edge conditions are handled with waterproofing discipline." },
        { icon: "ruler", title: "Drainage Precision", desc: "We plan slope, crickets, drains, and edges to reduce ponding and extend roof life." },
        { icon: "award", title: "System-Specific Expertise", desc: "Different membranes perform differently, and we tailor installation to the exact roof system selected." },
        { icon: "clock", title: "Minimal Disruption", desc: "Work is sequenced efficiently to reduce downtime for occupied residential and commercial properties." },
        { icon: "users", title: "Clear Scope & Options", desc: "We explain repair versus replacement recommendations and the benefits of each membrane type." },
        { icon: "home", title: "Long-Term Performance", desc: "The full assembly is built for durability, weather resistance, and easier future maintenance." },
      ]}
    />
  );
}