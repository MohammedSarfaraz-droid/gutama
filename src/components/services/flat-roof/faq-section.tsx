import { ServiceFaqSection } from "@/components/services/shared/service-sections";

export function FlatRoofFaqSection() {
  return (
    <ServiceFaqSection
      content={{
        intro: "Still have questions? Our team can review membrane options, ponding concerns, and whether your flat roof is a repair or replacement candidate.",
        items: [
          { q: "What flat roofing systems do you install?", a: "We work with common flat roofing systems such as TPO, EPDM, and modified bitumen, and recommend the right option based on building use, exposure, and budget." },
          { q: "Can ponding water be fixed without full replacement?", a: "Sometimes. If the membrane is still viable, localized drainage corrections or tapered solutions may be possible. If the roof is near the end of its life, replacement is often the better long-term move." },
          { q: "How do you handle roof penetrations and edges?", a: "Penetrations, parapets, curbs, and perimeter edges are some of the most critical leak points, so we give them dedicated flashing and detailing attention during every project." },
          { q: "How long should a flat roof last?", a: "Service life depends on the membrane type, exposure, installation quality, and maintenance history, but properly installed flat roofing systems are built for long-term performance." },
        ],
      }}
    />
  );
}