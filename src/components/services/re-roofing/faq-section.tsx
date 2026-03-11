import { ServiceFaqSection } from "@/components/services/shared/service-sections";

export function ReRoofingFaqSection() {
  return (
    <ServiceFaqSection
      content={{
        intro: "Still have questions? We can review whether your roof is ready for replacement, what material options fit best, and what to expect during installation.",
        items: [
          { q: "How do I know if I need a full re-roof instead of a repair?", a: "If the roof is near the end of its service life, has widespread wear, repeated leaks, or significant flashing and ventilation issues, replacement is often the better long-term solution." },
          { q: "Will you inspect the roof deck during tear-off?", a: "Yes. We inspect the decking after removal of the old roofing so any damaged substrate can be addressed before the new roof is installed." },
          { q: "Can ventilation be improved during re-roofing?", a: "Absolutely. Re-roofing is one of the best times to correct intake and exhaust ventilation issues that may be affecting roof performance." },
          { q: "How long does a typical re-roofing project take?", a: "Most residential projects move quickly, but timing depends on roof size, slope, weather, material type, and whether deck repairs are required." },
        ],
      }}
    />
  );
}