import { ServiceProcessSection } from "@/components/services/shared/service-sections";

export function GuttersProcessSection() {
  return (
    <ServiceProcessSection
      content={{
        intro: "A reliable gutter system starts with field measurements, correct slope planning, and downspout placement tailored to the property.",
        timeline: "1-3 Days",
        timelineNote: "Typical timeline for installation or repair of residential gutter systems",
        steps: [
          { num: "01", title: "Measurement & Runoff Review", desc: "We measure roof edges, inspect drainage paths, and identify problem areas where overflow or poor discharge occurs." },
          { num: "02", title: "Layout Planning", desc: "System size, downspout count, pitch, and discharge direction are planned for the property's water movement needs." },
          { num: "03", title: "Preparation & Removal", desc: "Old gutters are removed where needed and fascia or attachment points are checked before installation." },
          { num: "04", title: "Installation", desc: "Seamless runs, hangers, end caps, outlets, and downspouts are installed for clean appearance and dependable drainage." },
          { num: "05", title: "Flow Testing", desc: "We confirm slope, water movement, and secure attachment throughout the system." },
          { num: "06", title: "Final Walkthrough", desc: "You receive a completed review of the system, maintenance guidance, and recommendations for long-term performance." },
        ],
      }}
    />
  );
}