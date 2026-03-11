import { ServiceBenefitsSection } from "@/components/services/shared/service-sections";

export function ReRoofingBenefitsSection() {
  return (
    <ServiceBenefitsSection
      content={[
        { icon: "shield", title: "Complete System Protection", desc: "Underlayment, flashing, ventilation, and shingle installation are handled as one coordinated assembly." },
        { icon: "award", title: "Premium Material Standards", desc: "We install roofing products chosen for weather performance, appearance, and long-term value." },
        { icon: "ruler", title: "Clean Installation Detailing", desc: "Lines, transitions, ridges, and edge conditions are executed with finish quality in mind." },
        { icon: "clock", title: "Efficient Project Flow", desc: "Tear-off, deck review, and new installation are carefully sequenced to keep the project moving." },
        { icon: "users", title: "Clear Scope & Communication", desc: "You know what will be replaced, what will be inspected, and what improvements are recommended before work begins." },
        { icon: "home", title: "Stronger Curb Appeal", desc: "A well-installed new roof improves both protection and the overall visual impact of the home." },
      ]}
    />
  );
}