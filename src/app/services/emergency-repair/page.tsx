import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";
import { PremiumServicePage } from "@/components/services/premium-service-page";

export const metadata: Metadata = buildMetadata({
  title: "Emergency Repair Services | Essex County, NJ",
  description: "Rapid-response emergency repairs for storm damage, leaks, and urgent exterior issues.",
  path: "/services/emergency-repair",
});

export default function Page() {
  return (
    <PremiumServicePage
      serviceLabel="Emergency Repair"
      serviceTitle="Emergency"
      serviceTitleAccent="Repair"
      heroImage="/images/service-emergency.jpg"
      heroImageAlt="Emergency repair services"
      shortDescription="Rapid-response emergency repairs for storm damage, leaks, and urgent exterior issues."
      overviewText1="When damage is active, speed and site protection are critical. We stabilize first, then execute permanent repairs."
      overviewText2="Our team provides clear communication, documented scope, and quality-focused restoration under pressure."
      showcaseTitle="Rapid-Response"
    />
  );
}
