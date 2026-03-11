import { ServiceHeroSection } from "@/components/services/shared/service-sections";

export function EmergencyRepairHeroSection() {
  return (
    <ServiceHeroSection
      content={{
        label: "Emergency Repair",
        title: "Emergency",
        accent: "Repair",
        image: "/images/service-emergency.jpg",
        imageAlt: "Emergency exterior repair services",
        description: "Rapid-response emergency repairs for storm damage, active leaks, and urgent exterior failures that need immediate stabilization.",
        stats: [
          { value: "24/7", label: "Rapid Response Support" },
          { value: "260+", label: "Urgent Repairs Completed" },
          { value: "100%", label: "Site Protection First" },
          { value: "4.9", label: "Average Client Rating" },
        ],
      }}
    />
  );
}