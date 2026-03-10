import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import { getLocalBusinessSchema } from "@/lib/seo";
import { SiteShell } from "@/components/layout/site-shell";

import "./globals.css";

const BUSINESS_NAME = "Gutama Home Improvement";
const REGION = "Essex County, NJ";
const DESCRIPTION =
  "Premium roofing and exterior solutions for residential and commercial properties in Essex County, New Jersey.";

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const headingFont = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gutamahomeimprovement.com"),
  title: {
    default: `${BUSINESS_NAME} | ${REGION}`,
    template: `%s | ${BUSINESS_NAME}`,
  },
  description: DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = getLocalBusinessSchema();

  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${headingFont.variable} antialiased`}>
        <SiteShell>{children}</SiteShell>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </body>
    </html>
  );
}
