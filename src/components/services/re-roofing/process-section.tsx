import { ServiceProcessSection } from "@/components/services/shared/service-sections";

export function ReRoofingProcessSection() {
  return (
    <ServiceProcessSection
      content={{
        intro: "A strong re-roofing project starts with disciplined tear-off, substrate review, and installation details that support the next roof for the long term.",
        timeline: "2-6 Days",
        timelineNote: "Typical timeline depending on roof size, complexity, and deck repairs",
        steps: [
          { num: "01", title: "Inspection & Replacement Planning", desc: "We review the roof condition, ventilation, flashing areas, and any structural concerns before finalizing the scope." },
          { num: "02", title: "Material Selection", desc: "Roofing products, accessories, color, and system upgrades are selected to match performance and aesthetic goals." },
          { num: "03", title: "Tear-Off & Deck Review", desc: "Old roofing is removed cleanly and the roof deck is inspected for soft spots, moisture damage, or required repairs." },
          { num: "04", title: "Underlayment & Flashing", desc: "Protective layers, leak barriers, and flashing details are installed to establish the waterproof base of the system." },
          { num: "05", title: "Roof Installation", desc: "The new roofing material is installed with attention to alignment, exposure, ridge work, and edge detailing." },
          { num: "06", title: "Final Cleanup & Review", desc: "We complete final cleanup, inspect the finished system, and review the completed work with you." },
        ],
      }}
    />
  );
}