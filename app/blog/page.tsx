import type { Metadata } from "next";
import BlogPageClient from "@/components/blog/BlogPageClient";

const SITE = "https://www.ngcloudnetworks.com";

export const metadata: Metadata = {
  title: "Networking, Cloud & Security Blog | NG Cloud Networks",
  description:
    "Practical guides on CCNA, CCNP, SD-WAN, firewalls, AWS and Azure careers, written by the trainers at NG Cloud Networks, Hyderabad.",
  alternates: { canonical: `${SITE}/blog` },
  openGraph: {
    title: "NG Cloud Networks Blog: Networking, Cloud & Security",
    description:
      "Practical guides on CCNA, CCNP, firewalls, AWS and Azure from the trainers at NG Cloud Networks, Hyderabad.",
    url: `${SITE}/blog`,
    siteName: "NG Cloud Networks",
    locale: "en_IN",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "NG Cloud Networks Blog: Networking, Cloud & Security", description: "Practical guides on CCNA, CCNP, firewalls, AWS and Azure from the trainers at NG Cloud Networks, Hyderabad." },
};

export default function Page() {
  return <BlogPageClient />;
}
