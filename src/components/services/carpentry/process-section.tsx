import { ServiceProcessSection } from "@/components/services/shared/service-sections";

export function CarpentryProcessSection() {
  return (
    <ServiceProcessSection
      content={{
        intro: "A disciplined carpentry process keeps layout, fit, and finish aligned from the first measurement to the final walkthrough.",
        timeline: "3-10 Days",
        timelineNote: "Typical timeline depending on repair scope and finish complexity",
        steps: [
          { num: "01", title: "Assessment & Measurements", desc: "We inspect existing conditions, identify structural concerns, and confirm exact dimensions." },
          { num: "02", title: "Scope & Material Planning", desc: "Material selections, repair strategy, and sequencing are finalized before fabrication begins." },
          { num: "03", title: "Preparation & Protection", desc: "Work areas are protected and damaged materials are removed with care to preserve adjacent finishes." },
          { num: "04", title: "Build & Installation", desc: "Framing, trim, panels, or specialty woodwork are installed with tight tolerances and clean alignment." },
          { num: "05", title: "Finish Detailing", desc: "Joints, edges, transitions, and exposed surfaces are refined for a polished final appearance." },
          { num: "06", title: "Final Review", desc: "We walk the completed scope with you, verify quality, and address any finishing touches before sign-off." },
        ],
      }}
    />
  );
}