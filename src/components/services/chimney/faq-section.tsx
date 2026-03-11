import { ServiceFaqSection } from "@/components/services/shared/service-sections";

export function ChimneyFaqSection() {
  return (
    <ServiceFaqSection
      content={{
        intro: "Still have questions? Our chimney specialists can explain repair options, expected service life, and how we handle active leaks safely.",
        items: [
          { q: "How do I know if my chimney needs repair or rebuilding?", a: "We look at mortar erosion, cracked bricks, leaning, crown failure, and water damage. Minor failures may only need repair, while advanced structural deterioration can require partial or full rebuilding." },
          { q: "Do you replace chimney flashing as part of the repair?", a: "Yes. If flashing is compromised, we replace it as part of the scope because masonry repairs alone will not solve a roofline leak." },
          { q: "Can you waterproof my chimney after repairs?", a: "Absolutely. Once the masonry is properly restored, we can apply breathable waterproofing to help reduce future moisture absorption." },
          { q: "How long does chimney repair usually last?", a: "Service life depends on exposure and the existing condition of the structure, but properly executed masonry and flashing repairs are designed for long-term performance." },
        ],
      }}
    />
  );
}