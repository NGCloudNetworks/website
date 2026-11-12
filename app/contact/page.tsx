// app/contact/page.tsx
import type { Metadata } from "next";
import ContactPageClient from "@/components/contact/ContactPageClient";

const SITE = "https://www.ngcloudnetworks.com"; // www = the canonical host (non-www 308-redirects here)

export const metadata: Metadata = {
  title: "Contact NG Cloud Networks | Ameenpur & Ameerpet, Hyderabad",
  description:
    "Contact NG Cloud Networks for CCNA, CCNP, AWS, Azure and firewall training in Hyderabad. Visit our Ameenpur or Ameerpet branch, call or WhatsApp.",
  alternates: { canonical: `${SITE}/contact` },
  openGraph: {
    title: "Contact NG Cloud Networks: Ameenpur & Ameerpet Branches",
    description:
      "Call, WhatsApp or visit our Hyderabad branches for CCNA, CCNP, AWS, Azure, Palo Alto and Fortigate training. Free demo sessions available.",
    url: `${SITE}/contact`,
    siteName: "NG Cloud Networks",
    locale: "en_IN",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": `${SITE}/contact#webpage`,
      url: `${SITE}/contact`,
      name: "Contact NG Cloud Networks: Ameenpur & Ameerpet Branches, Hyderabad",
      inLanguage: "en-IN",
      dateModified: "2026-11-12",
      about: { "@id": `${SITE}/#organization` },
      mainEntity: { "@id": `${SITE}/#organization` },
      breadcrumb: { "@id": `${SITE}/contact#breadcrumb` },
    },
    {
      "@type": ["EducationalOrganization", "LocalBusiness"],
      "@id": `${SITE}/contact#ameenpur`,
      name: "NG Cloud Networks - Ameenpur",
      telephone: "+91-9989939191",
      email: "info@ngcloudnetworks.com",
      parentOrganization: { "@id": `${SITE}/#organization` },
      address: {
        "@type": "PostalAddress",
        streetAddress: "H.no:5-125/1/30, Plot No. 30, Royal Homes, Fusion School Back Side, Ameenpur",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        postalCode: "502032",
        addressCountry: "IN",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "20:00",
      },
    },
    {
      "@type": ["EducationalOrganization", "LocalBusiness"],
      "@id": `${SITE}/ameerpet#branch`,
      name: "NG Cloud Networks - Ameerpet",
      url: `${SITE}/ameerpet`,
      telephone: "+91-9989939191",
      email: "info@ngcloudnetworks.com",
      hasMap: "https://maps.app.goo.gl/B5qT6V1v5F6zUMyv5",
      parentOrganization: { "@id": `${SITE}/#organization` },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Flat No. 404, 4th Floor, Aditya Enclave, Annapurna Block, Ameerpet",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        postalCode: "500038",
        addressCountry: "IN",
      },
      // Add openingHoursSpecification once the Ameerpet hours are confirmed.
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE}/contact#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "Contact", item: `${SITE}/contact` },
      ],
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
      />
      <ContactPageClient />
    </>
  );
}