import { ServiceFaqSection } from "@/components/services/shared/service-sections";

export function EmergencyRepairFaqSection() {
  return (
    <ServiceFaqSection
      content={{
        intro: "Still have questions? Our emergency repair team can explain next steps, stabilization options, and what to do before we arrive.",
        items: [
          { q: "What should I do if water is actively entering my home?", a: "If safe, move valuables away from the affected area and contain interior water with buckets or towels. Avoid climbing onto the roof and call us so we can guide the next step." },
          { q: "Do emergency repairs include temporary protection?", a: "Yes. When weather or conditions prevent immediate permanent work, we can install protective measures to reduce further damage until full repairs can be completed." },
          { q: "Can you help determine the full extent of storm damage?", a: "Absolutely. We inspect surrounding assemblies and not just the visible opening so hidden failures are identified early." },
          { q: "Will you provide a permanent repair proposal after the emergency visit?", a: "Yes. Once the area is stabilized, we provide a clear plan for the full repair scope and recommended sequencing." },
        ],
      }}
    />
  );
}