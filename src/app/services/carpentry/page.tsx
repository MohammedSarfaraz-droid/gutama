import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";
import { PremiumServicePage } from "@/components/services/premium-service-page";

export const metadata: Metadata = buildMetadata({
  title: "Expert Carpentry Services | Essex County, NJ",
  description: "Skilled structural and finish carpentry for repairs and renovations.",
  path: "/services/carpentry",
});

export default function Page() {
  return (
    <PremiumServicePage
      serviceLabel="Carpentry"
      serviceTitle="Expert"
      serviceTitleAccent="Carpentry"
      heroImage="/images/service-carpentry.jpg"
      heroImageAlt="Carpentry services"
      shortDescription="Skilled structural and finish carpentry for repairs and renovations."
      overviewText1="Our carpentry scope supports structural stability, refined finishes, and long-term exterior performance."
      overviewText2="From targeted repairs to custom execution, we deliver precise craftsmanship with dependable project flow."
      showcaseTitle="Craftsmanship"
    />
  );
}
