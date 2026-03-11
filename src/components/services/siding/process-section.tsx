import { ServiceProcessSection } from "@/components/services/shared/service-sections";

export function SidingProcessSection() {
  return (
    <ServiceProcessSection
      content={{
        intro: "A successful siding project depends on preparation, moisture management, straight installation lines, and refined finish detailing.",
        timeline: "3-8 Days",
        timelineNote: "Typical timeline depending on size, product, and trim scope",
        steps: [
          { num: "01", title: "Exterior Assessment", desc: "We inspect existing siding, trim, moisture exposure points, and any substrate concerns that need to be addressed." },
          { num: "02", title: "Material & Style Selection", desc: "Siding profile, color, accents, and trim options are selected to fit both performance needs and design goals." },
          { num: "03", title: "Removal & Surface Prep", desc: "Old materials are removed where required and the wall assembly is prepared for proper installation." },
          { num: "04", title: "Weather Barrier & Detailing", desc: "Critical layers, flashings, and transition points are installed before the siding itself goes on." },
          { num: "05", title: "Siding Installation", desc: "Panels, boards, or shingles are installed with consistent spacing, alignment, and clean edge handling." },
          { num: "06", title: "Trim Finish & Final Review", desc: "We complete the finish details, inspect the full exterior, and review the project with you before closeout." },
        ],
      }}
    />
  );
}