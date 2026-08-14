import type { Metadata } from "next";
import ContactPageClient from "@/components/contact/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact NG Cloud Networks | CCNA, CCNP, AWS, Azure Training in Hyderabad",
  description:
    "Contact NG Cloud Networks in Ameenpur, Hyderabad for CCNA, CCNP, AWS, Azure, Palo Alto, Fortigate and F5 Load Balancer training. Call +91 9989939191 or book a free demo.",
  keywords: [
    "Contact NG Cloud Networks",
    "Networking Institute Hyderabad Contact",
    "CCNA Training Enquiry Hyderabad",
    "Cloud Training Institute Contact Hyderabad",
    "IT Training Ameenpur Hyderabad",
  ],
  alternates: {
    canonical: "https://ngcloudnetworks.com/contact",
  },
  openGraph: {
    title: "Contact NG Cloud Networks",
    description:
      "Get in touch for CCNA, CCNP, AWS, Azure, Palo Alto and Fortigate training in Hyderabad. Free demo sessions available.",
    url: "https://ngcloudnetworks.com/contact",
    siteName: "NG Cloud Networks",
    locale: "en_IN",
    type: "website",
  },
};

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact NG Cloud Networks",
    url: "https://ngcloudnetworks.com/contact",
    mainEntity: {
      "@type": "EducationalOrganization",
      "@id": "https://www.ngcloudnetworks.com/#organization",
      name: "NG Cloud Networks",
      telephone: "+91-9989939191",
      email: "info@ngcloudnetworks.com",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "H.no:5-125/1/30, Plot No. 30, Royal Homes, Fusion School Back Side, Ameenpur",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        postalCode: "502032",
        addressCountry: "IN",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "20:00",
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://ngcloudnetworks.com" },
      { "@type": "ListItem", position: 2, name: "Contact", item: "https://ngcloudnetworks.com/contact" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ContactPageClient />
    </>
  );
}