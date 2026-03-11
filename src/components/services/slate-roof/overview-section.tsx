import { ServiceOverviewSection } from "@/components/services/shared/service-sections";

export function SlateRoofOverviewSection() {
  return (
    <ServiceOverviewSection
      content={{
        title: "Traditional roofing with",
        accent: "specialized precision",
        paragraphs: [
          "Slate roofing is a specialty system that requires careful handling, compatible flashings, exact layout work, and a strong understanding of how the roof ages over time. It is not a standard shingle installation.",
          "Whether we are repairing a damaged area or completing a larger slate roofing scope, we focus on durability, visual consistency, and preservation of the roof's architectural character.",
        ],
        bullets: ["Slate roof repairs", "Selective slate replacement", "Flashing integration", "Historic roof detailing"],
        image: "/images/service-slate-roof.jpg",
        imageAlt: "Slate roofing detail",
        badgeValue: "120+",
        badgeLabel: "Slate Projects Completed",
      }}
    />
  );
}