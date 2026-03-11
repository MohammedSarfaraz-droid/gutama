import { ServiceProcessSection } from "@/components/services/shared/service-sections";

export function ChimneyProcessSection() {
  return (
    <ServiceProcessSection
      content={{
        intro: "A systematic repair process helps us solve the visible issue and the underlying water or structural problem causing it.",
        timeline: "2-7 Days",
        timelineNote: "Typical timeline for repair, rebuild, and flashing scopes",
        steps: [
          { num: "01", title: "Inspection & Diagnosis", desc: "We inspect brickwork, mortar, crown condition, flashing, and surrounding roof areas to identify the full repair need." },
          { num: "02", title: "Scope & Recommendations", desc: "You receive a clear explanation of whether the chimney needs pointing, sealing, rebuilding, or full flashing replacement." },
          { num: "03", title: "Stabilization & Prep", desc: "Loose materials are removed, surrounding surfaces are protected, and the repair area is prepared for durable installation." },
          { num: "04", title: "Masonry & Flashing Work", desc: "Brick, mortar, crown, cap, and flashing components are repaired or replaced to restore system integrity." },
          { num: "05", title: "Waterproofing & Finish", desc: "Protective sealants and finish detailing are applied where appropriate to extend the service life of the repair." },
          { num: "06", title: "Final Walkthrough", desc: "We review the completed work with you, confirm performance details, and provide maintenance guidance where needed." },
        ],
      }}
    />
  );
}