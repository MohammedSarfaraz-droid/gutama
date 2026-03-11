import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";
import { PremiumServicePage } from "@/components/services/premium-service-page";

export const metadata: Metadata = buildMetadata({
  title: "Chimney Services | Essex County, NJ",
  description: "Complete chimney repair, rebuilding, flashing, and waterproofing services.",
  path: "/services/chimney",
});

export default function Page() {
  return (
    <PremiumServicePage
      serviceLabel="Chimney"
      serviceTitle="Chimney"
      serviceTitleAccent="Services"
      heroImage="/images/service-chimney.jpg"
      heroImageAlt="Chimney services"
      shortDescription="Complete chimney repair, rebuilding, flashing, and waterproofing services."
      overviewText1="From flashing corrections to structural rebuilds, we restore safety and weather resistance."
      overviewText2="Every chimney project is completed with code-focused detailing and long-term protection in mind."
      showcaseTitle="Restoration"
    />
  );
}
