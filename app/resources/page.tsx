import type { Metadata } from "next";
import ResourcesPageClient from "@/components/resources/ResourcesPageClient";

const SITE = "https://www.ngcloudnetworks.com";

export const metadata: Metadata = {
  title: "Networking, Cloud & Security Resources | NG Cloud Networks",
  description:
    "Learning resources for Cisco networking, cloud and security: study guides, lab practice and certification preparation from NG Cloud Networks, Hyderabad.",
  alternates: { canonical: `${SITE}/resources` },
  openGraph: {
    title: "Learning Resources for Networking, Cloud & Security",
    description:
      "Study guides, lab practice and certification preparation resources from NG Cloud Networks, Hyderabad.",
    url: `${SITE}/resources`,
    siteName: "NG Cloud Networks",
    locale: "en_IN",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Learning Resources for Networking, Cloud & Security", description: "Study guides, lab practice and certification preparation resources from NG Cloud Networks, Hyderabad." },
};

export default function Page() {
  return <ResourcesPageClient />;
}
