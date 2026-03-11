import { ServiceFaqSection } from "@/components/services/shared/service-sections";

export function SlateRoofFaqSection() {
  return (
    <ServiceFaqSection
      content={{
        intro: "Still have questions? We can explain slate repair options, flashing compatibility, and how to preserve the life of an aging slate roof.",
        items: [
          { q: "Can damaged slate tiles be replaced individually?", a: "Yes. In many cases, selective replacement is possible, provided the surrounding roof remains sound and compatible replacement material can be used." },
          { q: "Do slate roofs require special flashing materials?", a: "They often benefit from carefully selected flashing details and long-life metals that support the durability of the slate assembly." },
          { q: "How do you match replacement slates?", a: "We consider size, thickness, tone, and overall visual compatibility so repairs blend as naturally as possible with the existing roof." },
          { q: "Is slate roofing worth repairing instead of replacing?", a: "Often yes. Because slate can be extremely durable, targeted repairs and flashing corrections may extend its service life significantly when the broader system is still sound." },
        ],
      }}
    />
  );
}