import { ServiceProcessSection } from "@/components/services/shared/service-sections";

export function DormersProcessSection() {
  return (
    <ServiceProcessSection
      content={{
        intro: "Dormer construction succeeds when structural framing, roof integration, and exterior detailing are coordinated from day one.",
        timeline: "3-8 Weeks",
        timelineNote: "Typical timeline depending on size, structure, and finishing scope",
        steps: [
          { num: "01", title: "Site Review & Feasibility", desc: "We review the attic or upper level, roof structure, and the most effective dormer type for your goals." },
          { num: "02", title: "Design & Approvals", desc: "Plans, dimensions, and municipal permitting are coordinated before field work begins." },
          { num: "03", title: "Roof Opening & Framing", desc: "The existing roof is opened and the dormer structure is framed with proper load transfer and weather protection." },
          { num: "04", title: "Envelope Installation", desc: "Roofing, flashing, windows, siding, and exterior trim are installed to make the new dormer watertight." },
          { num: "05", title: "Interior Integration", desc: "Interior framing, insulation, drywall prep, and finish transitions are completed for a cohesive result." },
          { num: "06", title: "Final Review", desc: "We inspect fit, finish, and weatherproofing details with you before closing the project." },
        ],
      }}
    />
  );
}