import { ServiceProcessSection } from "@/components/services/shared/service-sections";

export function EmergencyRepairProcessSection() {
  return (
    <ServiceProcessSection
      content={{
        intro: "Emergency repair works best when speed, safety, and permanent repair planning are handled in a disciplined sequence.",
        timeline: "Same Day-5 Days",
        timelineNote: "Response and repair timing varies by conditions, access, and weather",
        steps: [
          { num: "01", title: "Urgent Call Review", desc: "We gather the damage details, urgency level, and site conditions so we can respond appropriately." },
          { num: "02", title: "On-Site Stabilization", desc: "Active leaks, exposed openings, or loose materials are secured to reduce immediate risk." },
          { num: "03", title: "Damage Assessment", desc: "We inspect surrounding assemblies to determine whether the issue is isolated or part of a larger failure." },
          { num: "04", title: "Temporary Protection", desc: "Protective coverings or temporary repairs are installed if conditions prevent immediate permanent work." },
          { num: "05", title: "Permanent Repair Execution", desc: "Once safe to proceed, we complete the full repair using the right materials and detailing for the system." },
          { num: "06", title: "Final Review & Recommendations", desc: "We confirm that the area is stable and advise on any follow-up repairs needed elsewhere." },
        ],
      }}
    />
  );
}