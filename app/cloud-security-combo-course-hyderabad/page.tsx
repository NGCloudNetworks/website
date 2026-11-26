import type { Metadata } from "next";
import ProgramPage from "@/components/program/ProgramPage";
import { CLOUD_SECURITY, programUrl } from "@/data/programs";

const p = CLOUD_SECURITY;

// Indexable: linked from the homepage, hub, courses and branch pages. Update the dates in data/programs.ts for each new batch
// instead of creating a new URL, so the page keeps its history.
export const metadata: Metadata = {
  title: p.seoTitle,
  description: p.seoDescription,
  alternates: { canonical: programUrl(p) },
  openGraph: { title: p.seoTitle, description: p.seoDescription, url: programUrl(p), siteName: "NG Cloud Networks", locale: "en_IN", type: "website" },
};

export default function CloudSecurityComboPage() {
  return <ProgramPage p={p} />;
}
