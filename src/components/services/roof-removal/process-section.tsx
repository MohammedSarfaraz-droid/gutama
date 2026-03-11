import { ServiceProcessSection } from "@/components/services/shared/service-sections";

export function RoofRemovalProcessSection() {
  return (
    <ServiceProcessSection
      content={{
        intro: "Disciplined removal protects the property, exposes real deck conditions, and creates the right base for whatever comes next.",
        timeline: "1-3 Days",
        timelineNote: "Typical timeline depending on roof size, layers, and access",
        steps: [
          { num: "01", title: "Pre-Job Protection", desc: "We protect the work zone, surrounding landscaping, and access areas before tear-off begins." },
          { num: "02", title: "Material Removal", desc: "Existing shingles or roofing layers are removed systematically to maintain control and reduce unnecessary mess." },
          { num: "03", title: "Debris Containment", desc: "Debris is collected continuously to keep the site safer, cleaner, and more manageable throughout the project." },
          { num: "04", title: "Deck Exposure", desc: "The roof deck is fully exposed so soft spots, moisture damage, and substrate issues can be identified accurately." },
          { num: "05", title: "Cleanup & Disposal", desc: "Removed material is cleared from the site and disposal is handled as part of the project scope." },
          { num: "06", title: "Ready-for-Next-Phase Review", desc: "We confirm the deck condition and transition the project cleanly into repair or replacement work." },
        ],
      }}
    />
  );
}