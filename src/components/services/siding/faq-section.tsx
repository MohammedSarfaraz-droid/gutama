import { ServiceFaqSection } from "@/components/services/shared/service-sections";

export function SidingFaqSection() {
  return (
    <ServiceFaqSection
      content={{
        intro: "Still have questions? We can walk you through siding options, trim details, and how we approach moisture control behind the finished exterior.",
        items: [
          { q: "Can you replace siding and exterior trim at the same time?", a: "Yes. We often handle trim, fascia, soffits, and accent details together so the final exterior looks cohesive and complete." },
          { q: "Do you inspect for hidden wall damage during siding replacement?", a: "Absolutely. Once old siding is removed, we check the exposed substrate for moisture damage or deterioration that should be addressed before the new system is installed." },
          { q: "Can you help me choose a style that fits my home?", a: "Yes. We guide siding profile, color, and trim choices based on the architecture and overall look you want to achieve." },
          { q: "How important is moisture detailing behind siding?", a: "It is critical. Good siding appearance means little if the underlying weather barrier and transition detailing are not handled correctly." },
        ],
      }}
    />
  );
}