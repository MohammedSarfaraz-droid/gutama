import { ServiceFaqSection } from "@/components/services/shared/service-sections";

export function CarpentryFaqSection() {
  return (
    <ServiceFaqSection
      content={{
        intro: "Still have questions? Our carpentry specialists can walk you through repair strategy, materials, and finish options.",
        items: [
          { q: "Do you handle both structural and finish carpentry?", a: "Yes. We manage framing corrections, exterior trim, fascia, soffits, decorative millwork, and finish carpentry details as part of one coordinated scope." },
          { q: "Can you match existing woodwork and trim profiles?", a: "In most cases, yes. We source close matches or fabricate compatible profiles so new work blends with your existing architecture." },
          { q: "How do you determine whether wood should be repaired or replaced?", a: "We inspect for rot depth, moisture damage, and structural compromise. If material can be stabilized reliably, we recommend repair; otherwise replacement is the safer option." },
          { q: "Do you provide painting or finishing after carpentry work?", a: "We can prepare surfaces for paint or finish and coordinate the final protective coating as part of the overall project scope." },
        ],
      }}
    />
  );
}