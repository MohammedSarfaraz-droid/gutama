import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";
import { PremiumServicePage } from "@/components/services/premium-service-page";

export const metadata: Metadata = buildMetadata({
  title: "Professional Roof Removal | Essex County, NJ",
  description: "Complete tear-off and roof removal with safe disposal and clean site preparation for new installation.",
  path: "/services/roof-removal",
});

export default function Page() {
  return (
    <PremiumServicePage
      serviceLabel="Roof Removal"
      serviceTitle="Professional"
      serviceTitleAccent="Roof Removal"
      heroImage="/images/service-roof-removal.jpg"
      heroImageAlt="Professional roof removal"
      shortDescription="Complete tear-off and roof removal with safe disposal and clean site preparation for new installation."
      overviewText1="Our roof removal crews strip aging roofing systems to the deck with strict site protection and cleanup standards."
      overviewText2="You get a clean, inspection-ready surface for a reliable new roofing installation."
      showcaseTitle="Recent"
    />
  );
}
