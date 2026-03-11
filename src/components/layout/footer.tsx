import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Music2, Phone } from "lucide-react";

import { siteConfig } from "@/config/site";

const BUSINESS_NAME = "Gutama Home Improvement";
const REGION = "Essex County, NJ";
const DESCRIPTION =
  "Premium roofing and exterior solutions for residential and commercial properties in Essex County, New Jersey.";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/#about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Service Areas", href: "/#service-areas" },
  { label: "Contact", href: "/contact" },
];

const TOP_SERVICES = [
  { slug: "roof-removal", shortTitle: "Roof Removal" },
  { slug: "re-roofing", shortTitle: "Re-Roofing" },
  { slug: "flat-roof", shortTitle: "Flat Roof" },
  { slug: "slate-roof", shortTitle: "Slate Roof" },
  { slug: "chimney", shortTitle: "Chimney" },
  { slug: "siding", shortTitle: "Siding" },
  { slug: "carpentry", shortTitle: "Carpentry" },
  { slug: "additions", shortTitle: "Additions" },
  { slug: "dormers", shortTitle: "Dormers" },
  { slug: "gutters", shortTitle: "Gutters" },
];

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  { label: "Facebook", href: "https://facebook.com", icon: Facebook },
  { label: "TikTok", href: "https://www.tiktok.com/@gutamaroofing.com", icon: Music2 },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/20">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="inline-flex">
            <Image src="/images/logo2.png" alt={BUSINESS_NAME} width={124} height={48} className="h-14 w-auto object-contain" />
          </Link>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{DESCRIPTION}</p>
          <div className="mt-4 space-y-2 text-sm">
            <a href={`tel:${siteConfig.phones.english}`} className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground">
              <Phone className="h-4 w-4 text-primary" />
              English: {siteConfig.phones.english}
            </a>
            <a href={`tel:${siteConfig.phones.spanish}`} className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground">
              <Phone className="h-4 w-4 text-secondary" />
              Espanol: {siteConfig.phones.spanish}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground">
              <Mail className="h-4 w-4 text-secondary" />
              {siteConfig.email}
            </a>
            <p className="inline-flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              {REGION}
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-serif text-lg text-foreground">Quick Links</h3>
          <div className="gold-divider mx-0! my-4" />
          <div className="flex flex-col gap-2">
            {QUICK_LINKS.map((item) => (
              <Link key={item.label} href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-serif text-lg text-foreground">Top Services</h3>
          <div className="gold-divider mx-0! my-4" />
          <div className="flex flex-col gap-2">
            {TOP_SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {service.shortTitle}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-serif text-lg text-foreground">Need An Estimate?</h3>
          <div className="gold-divider mx-0! my-4" />
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>Call us for free consultation and project planning.</p>
            <Link href="/contact" className="text-primary hover:text-primary/80">
              Go to Contact Page
            </Link>
            <div className="pt-2">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Follow Us</p>
              <div className="flex items-center gap-3">
                {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${label}`}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-border/60 text-muted-foreground transition-all hover:border-primary/50 hover:bg-primary/5 hover:text-primary"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 border-t border-border/40 px-4 py-5 text-sm text-muted-foreground md:flex-row">
        <p>© {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.</p>
        <p>Licensed & Fully Insured | {REGION}</p>
      </div>
    </footer>
  );
}
