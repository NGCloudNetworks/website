import type { Metadata } from "next";
import CorporateTrainingClient from "@/components/corporate/CorporateTrainingClient";

const SITE = "https://www.ngcloudnetworks.com";

export const metadata: Metadata = {
  title: "Corporate Networking & Cloud Training | NG Cloud Networks",
  description:
    "Customised corporate training for enterprise IT teams in Hyderabad: routing, switching, SD-WAN, firewalls and cloud, delivered on-site or online.",
  alternates: { canonical: `${SITE}/corporate-training` },
  openGraph: {
    title: "Corporate Training for Enterprise IT Teams | NG Cloud Networks",
    description:
      "Customised networking, security and cloud training for enterprise IT teams in Hyderabad, on-site or online.",
    url: `${SITE}/corporate-training`,
    siteName: "NG Cloud Networks",
    locale: "en_IN",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Corporate Training for Enterprise IT Teams | NG Cloud Networks", description: "Customised networking, security and cloud training for enterprise IT teams in Hyderabad, on-site or online." },
};

export default function Page() {
  return <CorporateTrainingClient />;
}
