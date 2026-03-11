import { ServiceOverviewSection } from "@/components/services/shared/service-sections";

export function GuttersOverviewSection() {
  return (
    <ServiceOverviewSection
      content={{
        title: "Water management that",
        accent: "actually protects",
        paragraphs: [
          "A gutter system only works when the sizing, pitch, downspout placement, and fastening method are all correct. Poor layout can lead to overflow, fascia damage, siding staining, and foundation issues.",
          "We install and repair seamless gutter systems that move water efficiently away from the home while keeping the roof edge, trim, and surrounding landscape better protected year-round.",
        ],
        bullets: ["Seamless gutter installation", "Downspout optimization", "Fascia protection", "Targeted gutter repairs"],
        image: "/images/about-aerial.jpg",
        imageAlt: "Exterior drainage planning",
        badgeValue: "520+",
        badgeLabel: "Systems Installed",
      }}
    />
  );
}