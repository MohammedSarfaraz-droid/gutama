import { ServiceFaqSection } from "@/components/services/shared/service-sections";

export function DormersFaqSection() {
  return (
    <ServiceFaqSection
      content={{
        intro: "Still have questions? Our team can explain dormer options, structural considerations, and how the build affects roof performance.",
        items: [
          { q: "What type of dormer is right for my home?", a: "That depends on your roof structure, desired interior space, and architectural style. We review the layout and recommend the dormer type that balances function and curb appeal." },
          { q: "Will a dormer require structural changes?", a: "Usually yes. A dormer involves roof framing modifications and load support planning, which is why structural review is a key part of the process." },
          { q: "Can you match my existing roofing and siding?", a: "We always aim to match roofing, siding, trim, and windows closely so the dormer reads as part of the original home." },
          { q: "How disruptive is dormer construction?", a: "There is active roof and framing work involved, but we sequence the build to protect the home quickly and limit disruption as much as possible." },
        ],
      }}
    />
  );
}