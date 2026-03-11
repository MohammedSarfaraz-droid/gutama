import { ServiceProcessSection } from "@/components/services/shared/service-sections";

export function FlatRoofProcessSection() {
  return (
    <ServiceProcessSection
      content={{
        intro: "A strong flat roof depends on disciplined sequencing, substrate preparation, and exact membrane detailing at every transition.",
        timeline: "3-10 Days",
        timelineNote: "Typical timeline for replacement or targeted flat roof restoration",
        steps: [
          { num: "01", title: "Roof Assessment", desc: "We inspect membrane condition, insulation, drainage patterns, flashing details, and any areas of ponding or open seams." },
          { num: "02", title: "System Recommendation", desc: "You receive guidance on repair, restoration, or full replacement based on the age and condition of the current roof." },
          { num: "03", title: "Surface Prep", desc: "Existing materials are prepared or removed, the substrate is corrected, and insulation or cover boards are installed as needed." },
          { num: "04", title: "Membrane Installation", desc: "The selected flat roofing system is installed with attention to seams, fastening, adhesion, and perimeter details." },
          { num: "05", title: "Flashing & Drainage", desc: "Parapets, curbs, edges, penetrations, and drains are detailed to complete the watertight assembly." },
          { num: "06", title: "Final Inspection", desc: "We review seams, terminations, drainage function, and finish quality before project closeout." },
        ],
      }}
    />
  );
}