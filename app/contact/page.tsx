import type { Metadata } from "next";

import ContactPageClient from "@/components/contact/ContactPageClient";

export const metadata: Metadata = {
  title:
    "Contact NG Cloud Networks | Best Networking & Cloud Training Institute in Hyderabad",

  description:
    "Contact NG Cloud Networks for CCNA, CCNP, AWS, Azure, Palo Alto, Fortigate and Cloud Security Training in Hyderabad.",

  keywords: [
    "CCNA Training Hyderabad",
    "AWS Training Hyderabad",
    "Cloud Security Training Hyderabad",
    "Networking Institute Hyderabad",
    "Cyber Security Training Hyderabad",
  ],

  alternates: {
    canonical: "https://www.ngcloudnetworks.com/contact",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}