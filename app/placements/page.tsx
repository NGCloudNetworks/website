import type { Metadata } from "next";

import PlacementsSupport from "@/components/home/PlacementSupport";

export const metadata: Metadata = {
  title:
    "Placements | Networking, Cloud & Cyber Security Jobs in Hyderabad",

  description:
    "Explore student placements from NG Cloud Networks in networking, cloud computing and cyber security domains including CCNA, AWS, Azure, Palo Alto, Fortigate and F5 Load Balancer careers.",

  keywords: [
    "Networking Placements Hyderabad",
    "Cloud Computing Placements Hyderabad",
    "Cyber Security Placements Hyderabad",
    "CCNA Placement Support",
    "AWS Placement Training Hyderabad",
    "Azure Jobs Hyderabad",
    "Palo Alto Firewall Jobs",
    "Fortigate Careers",
    "F5 Load Balancer Jobs",
    "Best IT Placement Institute Hyderabad",
    "Cloud Engineer Jobs Hyderabad",
    "Network Engineer Jobs Hyderabad",
    "Cyber Security Jobs Hyderabad",
  ],

  alternates: {
    canonical: "https://www.ngcloudnetworks.com/placements",
  },

  openGraph: {
    title:
      "NG Cloud Networks Placements | IT Career Training Hyderabad",

    description:
      "Discover networking, cloud and cybersecurity placement success stories from NG Cloud Networks students.",

    url: "https://www.ngcloudnetworks.com/placements",

    siteName: "NG Cloud Networks",

    locale: "en_IN",

    type: "website",
  },
};

export default function PlacementsPage() {
  return <PlacementsSupport />;
}