import { ServiceFaqSection } from "@/components/services/shared/service-sections";

export function GuttersFaqSection() {
  return (
    <ServiceFaqSection
      content={{
        intro: "Still have questions? Our team can review drainage issues, gutter sizing, and whether repair or replacement is the right move.",
        items: [
          { q: "How do I know if my gutters need replacement?", a: "Frequent overflow, sagging, leaking seams, rust, repeated clogs in the same areas, or fascia damage are common signs that replacement may be more practical than ongoing repair." },
          { q: "Do you install seamless gutters?", a: "Yes. Seamless gutter systems reduce the number of joints, improve appearance, and often perform better over time than pieced-together runs." },
          { q: "Can you adjust downspouts to improve drainage?", a: "Absolutely. Downspout placement and discharge routing are critical parts of solving water management issues around the home." },
          { q: "Do gutters protect siding and foundation areas too?", a: "Yes. A properly functioning gutter system helps reduce splashback, soil erosion, staining, and excess water near the foundation." },
        ],
      }}
    />
  );
}