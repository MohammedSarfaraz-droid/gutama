import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";
import { PremiumServicePage } from "@/components/services/premium-service-page";

export const metadata: Metadata = buildMetadata({
  title: "Elegant Slate Roofing | Essex County, NJ",
  description: "Timeless slate roofing installation and repair by experienced craftsmen.",
  path: "/services/slate-roof",
});

export default function Page() {
  return (
    <PremiumServicePage
      serviceLabel="Slate Roof"
      serviceTitle="Elegant"
      serviceTitleAccent="Slate Roofing"
      heroImage="/images/service-slate-roof.jpg"
      heroImageAlt="Slate roofing"
      shortDescription="Timeless slate roofing installation and repair by experienced craftsmen."
      overviewText1="Slate roofing demands specialized handling, precision installation, and heritage-level detailing."
      overviewText2="We combine traditional craftsmanship with modern protection methods for long-lasting results."
      showcaseTitle="Signature"
    />
  );
}
