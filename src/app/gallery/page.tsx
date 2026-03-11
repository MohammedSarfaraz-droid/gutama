import type { Metadata } from "next";

import { GalleryHero } from "@/components/gallery/gallery-hero";
import { GalleryShowcase } from "@/components/gallery/gallery-showcase";
import { buildMetadata } from "@/lib/seo";

const REGION = "Essex County, NJ";
const DESCRIPTION =
  "Browse completed roofing, siding, chimney, and addition projects by Gutama Home Improvement across Essex County, New Jersey.";

export const metadata: Metadata = buildMetadata({
  title: `Project Gallery | ${REGION}`,
  description: DESCRIPTION,
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      <GalleryShowcase />
    </>
  );
}
