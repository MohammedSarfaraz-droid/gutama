import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";
import { PremiumServicePage } from "@/components/services/premium-service-page";

export const metadata: Metadata = buildMetadata({
  title: "Expert Re-Roofing Solutions | Essex County, NJ",
  description: "Premium re-roofing services using top-quality materials for lasting protection and curb appeal.",
  path: "/services/re-roofing",
});

export default function Page() {
  return (
    <PremiumServicePage
      serviceLabel="Re-Roofing"
      serviceTitle="Expert"
      serviceTitleAccent="Re-Roofing"
      heroImage="/images/service-re-roofing.jpg"
      heroImageAlt="Expert re-roofing"
      shortDescription="Premium re-roofing services using top-quality materials for lasting protection and curb appeal."
      overviewText1="We replace aging roofing systems with modern materials selected for performance and aesthetics."
      overviewText2="From prep to final detail, our process is built for durability, weather resistance, and clean finishing."
      showcaseTitle="Completed"
    />
  );
}
