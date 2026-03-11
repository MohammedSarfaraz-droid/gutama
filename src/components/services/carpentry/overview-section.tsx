import { ServiceOverviewSection } from "@/components/services/shared/service-sections";

export function CarpentryOverviewSection() {
  return (
    <ServiceOverviewSection
      content={{
        title: "Precision built for",
        accent: "lasting performance",
        paragraphs: [
          "Our carpentry work supports the structure, finish quality, and weather performance of your exterior. From framing corrections to custom trim, every cut and connection is planned for durability and clean alignment.",
          "We coordinate material selection, site protection, and finish detailing so the final result looks refined, functions properly, and integrates naturally with the rest of your home.",
        ],
        bullets: ["Structural repairs", "Exterior trim replacement", "Finish carpentry detailing", "Custom framing solutions"],
        image: "/images/about-team.jpg",
        imageAlt: "Carpentry detail work",
        badgeValue: "480+",
        badgeLabel: "Projects Delivered",
      }}
    />
  );
}