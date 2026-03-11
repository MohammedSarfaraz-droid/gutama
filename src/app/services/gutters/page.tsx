import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";
import { PremiumServicePage } from "@/components/services/premium-service-page";

export const metadata: Metadata = buildMetadata({
  title: "Gutters Installation | Essex County, NJ",
  description: "Seamless gutter installation and repair to protect your foundation and landscaping.",
  path: "/services/gutters",
});

export default function Page() {
  return (
    <PremiumServicePage
      serviceLabel="Gutters"
      serviceTitle="Gutters"
      serviceTitleAccent="Installation"
      heroImage="/images/service-gutters.jpg"
      heroImageAlt="Gutters installation"
      shortDescription="Seamless gutter installation and repair to protect your foundation and landscaping."
      overviewText1="Correct water management starts with properly sized, pitched, and secured gutter systems."
      overviewText2="We install and repair gutter runs that protect siding, foundations, and exterior surfaces year-round."
      showcaseTitle="Drainage"
    />
  );
}
