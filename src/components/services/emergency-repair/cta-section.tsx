import { ServiceCtaSection } from "@/components/services/shared/service-sections";

export function EmergencyRepairCtaSection() {
  return (
    <ServiceCtaSection
      content={{
        image: "/images/service-emergency.jpg",
        imageAlt: "Emergency repair background",
        title: "Need Immediate",
        accent: "Site Protection?",
        description: "Contact us now for fast response, on-site assessment, and a clear plan to stabilize the damage and complete the permanent repair.",
        buttonLabel: "Request Emergency Service",
      }}
    />
  );
}