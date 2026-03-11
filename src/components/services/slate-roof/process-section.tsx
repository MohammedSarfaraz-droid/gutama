import { ServiceProcessSection } from "@/components/services/shared/service-sections";

export function SlateRoofProcessSection() {
  return (
    <ServiceProcessSection
      content={{
        intro: "Slate roofing demands patience, precision, and detailing choices that respect both the material and the architecture it protects.",
        timeline: "3-12 Days",
        timelineNote: "Typical timeline depending on repair extent and access conditions",
        steps: [
          { num: "01", title: "Roof Assessment", desc: "We inspect broken slates, flashing details, fastening condition, and the broader health of the slate system." },
          { num: "02", title: "Repair Strategy", desc: "We define whether selective slate replacement, flashing correction, or a broader restoration scope is needed." },
          { num: "03", title: "Material Matching", desc: "Replacement slate size, texture, and visual compatibility are considered before installation begins." },
          { num: "04", title: "Slate & Flashing Work", desc: "Damaged units are replaced and flashing details are repaired or upgraded where needed to restore protection." },
          { num: "05", title: "Finish Review", desc: "The repaired areas are checked for alignment, visual continuity, and proper installation detailing." },
          { num: "06", title: "Final Walkthrough", desc: "We review the completed scope with you and explain any recommended maintenance or future monitoring points." },
        ],
      }}
    />
  );
}