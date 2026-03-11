import { ServiceBenefitsSection } from "@/components/services/shared/service-sections";

export function DormersBenefitsSection() {
  return (
    <ServiceBenefitsSection
      content={[
        { icon: "home", title: "Architectural Fit", desc: "We design dormers to match roof proportions, siding lines, trim details, and overall massing." },
        { icon: "shield", title: "Weather-Tight Integration", desc: "Flashing, roofing transitions, and exterior cladding are handled as part of one protected envelope." },
        { icon: "award", title: "Finish-Ready Craftsmanship", desc: "Framing, windows, trim, and siding are installed with a high standard of finish quality." },
        { icon: "clock", title: "Managed Build Sequence", desc: "Design, approvals, structural work, and exterior finishing are kept on a clear project schedule." },
        { icon: "users", title: "One Coordinated Team", desc: "You avoid fragmented trades by working with one team managing the entire dormer scope." },
        { icon: "ruler", title: "Functional Space Gain", desc: "The layout is planned to improve how the upper level actually works, not just how it looks." },
      ]}
    />
  );
}