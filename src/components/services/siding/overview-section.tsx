import { ServiceOverviewSection } from "@/components/services/shared/service-sections";

export function SidingOverviewSection() {
  return (
    <ServiceOverviewSection
      content={{
        title: "Exterior finishes that",
        accent: "perform beautifully",
        paragraphs: [
          "Siding is more than appearance. It is part of the home's protective envelope, which means alignment, moisture control, trim transitions, flashing, and fastening details all matter just as much as the product itself.",
          "We install siding systems with a clean architectural eye and a weather-performance mindset, helping homeowners improve both the look and resilience of their exterior.",
        ],
        bullets: ["Full siding replacement", "Trim and accent detailing", "Moisture-conscious installation", "Curb appeal upgrades"],
        image: "/images/after-siding.jpg",
        imageAlt: "Completed siding installation",
        badgeValue: "360+",
        badgeLabel: "Projects Completed",
      }}
    />
  );
}