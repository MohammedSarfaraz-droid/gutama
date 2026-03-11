import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";
import { PremiumServicePage } from "@/components/services/premium-service-page";

export const metadata: Metadata = buildMetadata({
  title: "Premium Siding Installation | Essex County, NJ",
  description: "Transform your exterior with premium siding installation and precise finishing.",
  path: "/services/siding",
});

export default function Page() {
  return (
    <PremiumServicePage
      serviceLabel="Siding"
      serviceTitle="Premium"
      serviceTitleAccent="Siding"
      heroImage="/images/service-siding.jpg"
      heroImageAlt="Siding installation"
      shortDescription="Transform your exterior with premium siding installation and precise finishing."
      overviewText1="Modern siding systems improve curb appeal while strengthening your home&apos;s weather envelope."
      overviewText2="Our crews focus on alignment, sealing, and clean architectural finishing for a polished final look."
      showcaseTitle="Exterior"
    />
  );
}
