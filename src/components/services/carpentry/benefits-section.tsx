import { ServiceBenefitsSection } from "@/components/services/shared/service-sections";

export function CarpentryBenefitsSection() {
  return (
    <ServiceBenefitsSection
      content={[
        { icon: "ruler", title: "Precise Fit & Finish", desc: "Accurate measuring, clean cuts, and crisp detailing keep the final work refined and consistent." },
        { icon: "shield", title: "Structural Confidence", desc: "We correct framing and support issues with code-conscious execution and durable materials." },
        { icon: "award", title: "Craftsmanship First", desc: "Every trim line, joint, and finish surface is handled with a high standard of workmanship." },
        { icon: "clock", title: "Clear Scheduling", desc: "You receive a realistic scope, timeline, and phased plan before work begins." },
        { icon: "users", title: "Single Point of Contact", desc: "We keep communication simple with direct updates from planning through final review." },
        { icon: "home", title: "Seamless Integration", desc: "New carpentry elements are matched to the style and proportions of your existing exterior." },
      ]}
    />
  );
}