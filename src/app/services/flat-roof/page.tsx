import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";
import { PremiumServicePage } from "@/components/services/premium-service-page";

export const metadata: Metadata = buildMetadata({
  title: "Flat Roof Installation & Repair | Essex County, NJ",
  description: "Specialized flat roofing systems including TPO, EPDM, and modified bitumen.",
  path: "/services/flat-roof",
});

export default function Page() {
  return (
    <PremiumServicePage
      serviceLabel="Flat Roof"
      serviceTitle="Flat Roof"
      serviceTitleAccent="Solutions"
      heroImage="/images/service-flat-roof.jpg"
      heroImageAlt="Flat roof installation and repair"
      shortDescription="Specialized flat roofing systems including TPO, EPDM, and modified bitumen."
      overviewText1="Flat roofing projects require precise slope strategy, seam integrity, and dependable drainage planning."
      overviewText2="Our team delivers systems designed for long-term performance in demanding weather conditions."
      showcaseTitle="Commercial & Residential"
    />
  );
}
