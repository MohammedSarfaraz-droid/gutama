import { ServiceShowcaseSection } from "@/components/services/shared/service-sections";

export function EmergencyRepairShowcaseSection() {
  return (
    <ServiceShowcaseSection
      content={{
        title: "Rapid-Response",
        accent: "Projects",
        featured: { src: "/images/service-emergency.jpg", location: "Essex County, NJ", title: "Storm Damage Tarp & Roofline Repair" },
        items: [
          { src: "/images/gallery-roof-1.jpg", location: "Montclair, NJ", title: "Active Leak Stabilization" },
          { src: "/images/gallery-roof-2.jpg", location: "Maplewood, NJ", title: "Wind Damage Securement" },
          { src: "/images/gallery-roof-3.jpg", location: "Livingston, NJ", title: "Flashing Failure Emergency Repair" },
          { src: "/images/service-emergency.jpg", location: "Verona, NJ", title: "Temporary Protection to Permanent Repair" },
        ],
      }}
    />
  );
}