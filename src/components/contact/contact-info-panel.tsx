import { Phone, Mail } from "lucide-react";

import { siteConfig } from "@/config/site";

const CONTACT_LINKS = [
  {
    label: "English",
    value: siteConfig.phones.english,
    href: `tel:${siteConfig.phones.english}`,
    Icon: Phone,
  },
  {
    label: "Español",
    value: siteConfig.phones.spanish,
    href: `tel:${siteConfig.phones.spanish}`,
    Icon: Phone,
  },
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    Icon: Mail,
  },
];

export function ContactInfoPanel() {
  return (
    <div className="relative flex min-h-115 flex-col justify-end overflow-hidden bg-[#1c1208] lg:min-h-full lg:justify-center">
      {/* Background photo + gradient overlays */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `
            linear-gradient(170deg, hsl(0 72% 45% / 0.15) 0%, transparent 45%),
            linear-gradient(to top, rgba(15,14,12,0.97) 0%, rgba(15,14,12,0.45) 55%, rgba(15,14,12,0.2) 100%)
          `,
        }}
      />

      {/* Diagonal slash accent */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 border-solid"
        style={{
          width: 0,
          height: 0,
          borderWidth: "0 0 200px 80px",
          borderColor: "transparent transparent hsl(0 72% 45% / 0.15) transparent",
        }}
      />

      {/* Watermark G */}
      <div
        className="pointer-events-none absolute top-1/2 -translate-y-1/2 select-none font-serif italic leading-none text-transparent"
        style={{
          right: "-0.08em",
          fontSize: "clamp(18rem, 26vw, 30rem)",
          WebkitTextStroke: "1px hsl(0 72% 45% / 0.15)",
          letterSpacing: "-0.04em",
        }}
      >
        G
      </div>

      {/* Content */}
      <div className="relative z-10 px-10 pb-11 lg:pb-0">
        {/* Eyebrow */}
        <div className="mb-4 inline-flex items-center gap-2 opacity-0 animate-[fade-up_0.6s_0.15s_ease_both]">
          <div className="h-1.25 w-1.25 rounded-full bg-primary" />
          <span className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-white/45">
            Essex County, NJ · Since 2008
          </span>
        </div>

        {/* Headline */}
        <h1
          className="mb-6 font-serif font-black leading-none text-white opacity-0 animate-[fade-up_0.65s_0.25s_ease_both]"
          style={{ fontSize: "clamp(2.4rem, 4vw, 3.6rem)" }}
        >
          Your home<br />deserves
          <em className="block not-italic text-primary">the best.</em>
        </h1>

        {/* Accent rule */}
        <div className="mb-8 h-0.75 w-11 origin-left scale-x-0 bg-primary animate-[scale-x-in_0.5s_0.4s_ease_both]" />

        {/* Contact links */}
        <div className="flex flex-col gap-3.5 opacity-0 animate-[fade-up_0.65s_0.4s_ease_both]">
          {CONTACT_LINKS.map(({ label, value, href, Icon }) => (
            <a
              key={label}
              href={href}
              className="group flex items-center gap-3 transition-transform duration-200 hover:translate-x-1"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 transition-all duration-200 group-hover:border-primary/50 group-hover:bg-primary/25">
                <Icon className="h-3.5 w-3.5 text-white/70" />
              </div>
              <div>
                <span className="block text-[0.65rem] uppercase tracking-widest text-white/30">
                  {label}
                </span>
                <span className="text-sm text-white/80">{value}</span>
              </div>
            </a>
          ))}
        </div>

        {/* Hours badge */}
        <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/9 px-3.5 py-1.5 opacity-0 animate-[fade-up_0.65s_0.5s_ease_both]">
          <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
          <span className="text-xs text-white/45">Open · Mon–Sat, 7am – 7pm</span>
        </div>
      </div>
    </div>
  );
}