import { ServiceShowcaseSection } from "@/components/services/shared/service-sections";

export function SlateRoofShowcaseSection() {
  return (
    <ServiceShowcaseSection
      content={{
        title: "Signature",
        accent: "Projects",
        featured: { src: "/images/service-slate-roof.jpg", location: "Montclair, NJ", title: "Historic Slate Roof Restoration" },
        items: [
          { src: "/images/gallery-roof-1.jpg", location: "Maplewood, NJ", title: "Selective Slate Replacement" },
          { src: "/images/gallery-roof-2.jpg", location: "South Orange, NJ", title: "Copper Flashing Upgrade" },
          { src: "/images/gallery-roof-3.jpg", location: "Glen Ridge, NJ", title: "Heritage Roof Repair" },
          { src: "/images/service-slate-roof.jpg", location: "Livingston, NJ", title: "Architectural Slate Detailing" },
        ],
      }}
    />
  );
}