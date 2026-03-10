import type { Metadata } from "next";

import { siteConfig, siteUrl } from "@/config/site";

const BUSINESS_NAME = "Gutama Home Improvement";
const LEGAL_NAME = "Gutama Home Improvement LLC";
const DESCRIPTION =
  "Premium roofing and exterior solutions for residential and commercial properties in Essex County, New Jersey.";
const REGION = "Essex County, NJ";
const LOCALE = "en_US";

interface BuildMetadataInput {
  title: string;
  description: string;
  path?: string;
}

export function buildMetadata({ title, description, path = "/" }: BuildMetadataInput): Metadata {
  const url = new URL(path, siteUrl).toString();

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      locale: LOCALE,
      siteName: BUSINESS_NAME,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: BUSINESS_NAME,
    legalName: LEGAL_NAME,
    description: DESCRIPTION,
    areaServed: REGION,
    telephone: siteConfig.phones.english,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country,
    },
    url: siteUrl,
  };
}
