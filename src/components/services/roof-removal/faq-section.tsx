import { ServiceFaqSection } from "@/components/services/shared/service-sections";

export function RoofRemovalFaqSection() {
  return (
    <ServiceFaqSection
      content={{
        intro: "Still have questions? We can explain the tear-off process, cleanup standards, and what deck issues may only be visible once the old roof is removed.",
        items: [
          { q: "Why is full roof removal better than layering over old roofing?", a: "Removing the old roof allows proper deck inspection, reduces excess weight, and gives the new system a cleaner, more reliable substrate for installation." },
          { q: "Will you inspect the deck after removal?", a: "Yes. Once the old roofing is off, we evaluate the exposed substrate for soft spots, moisture damage, and any required repairs before the next phase begins." },
          { q: "How do you protect landscaping and surrounding areas?", a: "We use site protection measures, controlled debris handling, and continuous cleanup to reduce risk to nearby surfaces and plantings." },
          { q: "Is disposal included in roof removal?", a: "Yes. Material disposal is part of the removal scope so the site is left clean and ready for continued work." },
        ],
      }}
    />
  );
}