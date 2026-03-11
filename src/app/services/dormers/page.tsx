import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";
import { PremiumServicePage } from "@/components/services/premium-service-page";

export const metadata: Metadata = buildMetadata({
  title: "Dormer Installation | Essex County, NJ",
  description: "Add natural light, headroom, and value with professionally built dormers.",
  path: "/services/dormers",
});

export default function Page() {
  return (
    <PremiumServicePage
      serviceLabel="Dormers"
      serviceTitle="Dormer"
      serviceTitleAccent="Installation"
      heroImage="/images/service-dormers.jpg"
      heroImageAlt="Dormer installation"
      shortDescription="Add natural light, headroom, and value with professionally built dormers."
      overviewText1="Dormers expand usable upper-level space while improving natural light and architectural balance."
      overviewText2="Our team integrates structure, roofing, and finishing into one coordinated build process."
      showcaseTitle="Dormer"
    />
  );
}
