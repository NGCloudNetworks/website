import type { Metadata } from "next";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

import CoursesHero from "@/components/courses/CoursesHero";
import CourseCategories from "@/components/courses/CourseCategories";
import FeaturedCourses from "@/components/courses/FeaturedCourses";
import LearningProcess from "@/components/courses/LearningProcess";
import CertificationPath from "@/components/courses/CertificationPath";
import CoursesFaq from "@/components/courses/CoursesFaq";

export const metadata: Metadata = {
  title:
    "Networking, Cloud & Cyber Security Courses in Hyderabad | NG Cloud Networks",

  description:
    "Explore CCNA, CCNP, AWS, Azure, Palo Alto, Fortigate, SD-WAN and F5 Load Balancer training courses in Hyderabad with practical labs, placement support and enterprise-level training.",

  keywords: [
    "CCNA Training Hyderabad",
    "CCNP Training Hyderabad",
    "AWS Training Hyderabad",
    "Azure Training Hyderabad",
    "Cyber Security Courses Hyderabad",
    "Networking Courses Hyderabad",
    "Cloud Computing Courses Hyderabad",
    "Cisco Training Institute Hyderabad",
    "Palo Alto Training Hyderabad",
    "Fortigate Firewall Training Hyderabad",
    "F5 Load Balancer Training Hyderabad",
    "SD-WAN Training Hyderabad",
    "Best Networking Institute Hyderabad",
    "Cloud Security Training Hyderabad",
    "IT Infrastructure Training Hyderabad",
  ],

  metadataBase: new URL("https://ngcloudnetworks.com"),

  alternates: {
    canonical: "/courses",
  },

  openGraph: {
    title:
      "Networking, Cloud & Cyber Security Courses in Hyderabad",

    description:
      "Enterprise-focused networking, cloud and cyber security training courses with practical labs and placement support.",

    url: "https://ngcloudnetworks.com/courses",

    siteName: "NG Cloud Networks",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NG Cloud Networks Courses",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Networking, Cloud & Cyber Security Courses in Hyderabad",

    description:
      "Learn CCNA, AWS, Azure, Palo Alto, Fortigate and F5 with practical enterprise labs.",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function CoursesPage() {
  return (
    <>
      {/* SEO STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",

            "@type": "CollectionPage",

            name:
              "Networking, Cloud & Cyber Security Courses Hyderabad",

            url: "https://ngcloudnetworks.com/courses",

            description:
              "Enterprise networking, cloud and cyber security courses in Hyderabad with practical training and placement support.",

            provider: {
              "@type": "EducationalOrganization",

              name: "NG Cloud Networks",

              url: "https://ngcloudnetworks.com",
            },

            hasPart: [
              {
                "@type": "Course",
                name: "CCNA Training Hyderabad",
              },

              {
                "@type": "Course",
                name: "CCNP Enterprise Training Hyderabad",
              },

              {
                "@type": "Course",
                name: "AWS Cloud Training Hyderabad",
              },

              {
                "@type": "Course",
                name: "Azure Cloud Training Hyderabad",
              },

              {
                "@type": "Course",
                name: "Palo Alto Firewall Training Hyderabad",
              },

              {
                "@type": "Course",
                name: "Fortigate Firewall Training Hyderabad",
              },

              {
                "@type": "Course",
                name: "F5 Load Balancer Training Hyderabad",
              },
            ],
          }),
        }}
      />

      <main className="overflow-hidden bg-[#050505] text-white">

        {/* HIDDEN SEO CONTENT */}
        <div className="sr-only">
          CCNA Training Hyderabad,
          CCNP Enterprise Training Hyderabad,
          AWS Cloud Training Hyderabad,
          Azure Cloud Training Hyderabad,
          Cyber Security Training Hyderabad,
          Palo Alto Firewall Training Hyderabad,
          Fortigate Firewall Training Hyderabad,
          F5 Load Balancer Training Hyderabad,
          SD-WAN Training Hyderabad,
          Networking Courses Hyderabad,
          Cloud Computing Courses Hyderabad,
          Cisco Certification Training Hyderabad,
          Enterprise Networking Institute Hyderabad,
          Practical Cloud Training Hyderabad.
        </div>

        {/* NAVBAR */}
        <Navbar />

        {/* HERO */}
        <CoursesHero />

        {/* COURSE CATEGORIES */}
        <CourseCategories />

        {/* FEATURED COURSES */}
        <FeaturedCourses />

        {/* LEARNING PROCESS */}
        <LearningProcess />

        {/* CERTIFICATIONS */}
        <CertificationPath />

        {/* FAQ */}
        <CoursesFaq />

        {/* FOOTER */}
        <Footer />

      </main>
    </>
  );
}