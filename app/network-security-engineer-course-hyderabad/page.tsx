import type { Metadata } from "next";
import ProgramPage from "@/components/program/ProgramPage";
import { NETWORK_SECURITY, programUrl } from "@/data/programs";

const p = NETWORK_SECURITY;

// noindex: this is a dated offer page for ads. It would otherwise compete with the individual course pages in search.
export const metadata: Metadata = {
  title: p.seoTitle,
  description: p.seoDescription,
  alternates: { canonical: programUrl(p) },
  robots: { index: false, follow: true },
  openGraph: { title: p.seoTitle, description: p.seoDescription, url: programUrl(p), siteName: "NG Cloud Networks", locale: "en_IN", type: "website" },
};

export default function NetworkSecurityPage() {
  return <ProgramPage p={p} />;
}
