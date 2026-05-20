import type { Metadata } from "next";

import Footer from "@/components/footer/Footer";
import HeroSection from "@/components/hero/HeroSection";
import CareerTracks from "@/components/home/CareerTracks";
import CertificationSection from "@/components/home/CertificationSection";
import FaqSection from "@/components/home/FaqSection";
import PlacementSupport from "@/components/home/PlacementSupport";
import PopularCourses from "@/components/home/PopularCourses";
import Testimonials from "@/components/home/Testimonials";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Navbar from "@/components/navbar/Navbar";

export const metadata: Metadata = {
  title:
    "Best CCNA, AWS & Cyber Security Training Institute in Hyderabad | NG Cloud Networks",

  description:
    "NG Cloud Networks is a leading networking, cloud and cyber security training institute in Hyderabad offering CCNA, CCNP, AWS, Azure, Palo Alto, Fortigate and F5 Load Balancer training with practical labs, certification guidance and placement support.",

  keywords: [
    "CCNA Training Hyderabad",
    "CCNP Training Hyderabad",
    "AWS Training Hyderabad",
    "Azure Training Hyderabad",
    "Cyber Security Training Hyderabad",
    "Networking Training Institute Hyderabad",
    "Cloud Computing Training Hyderabad",
    "Cisco Training Hyderabad",
    "Palo Alto Firewall Training Hyderabad",
    "Fortigate Firewall Training Hyderabad",
    "F5 Load Balancer Training Hyderabad",
    "SD-WAN Training Hyderabad",
    "Best Networking Institute Hyderabad",
    "Cloud Course Hyderabad",
    "IT Training Institute Hyderabad",
    "Cyber Security Institute Hyderabad",
  ],

  metadataBase: new URL("https://ngcloudnetworks.com"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "Best CCNA, AWS & Cyber Security Training Institute in Hyderabad | NG Cloud Networks",

    description:
      "Practical networking, cloud and cyber security training institute in Hyderabad with placement support and enterprise-level labs.",

    url: "https://ngcloudnetworks.com",

    siteName: "NG Cloud Networks",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NG Cloud Networks",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Best CCNA, AWS & Cyber Security Training Institute in Hyderabad",

    description:
      "Networking, cloud and cyber security training institute with practical labs and placement support.",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "Education",
};

export default function HomePage() {
  return (
    <>
      {/* SEO STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",

            "@type": "EducationalOrganization",

            name: "NG Cloud Networks",

            url: "https://ngcloudnetworks.com",

            logo: "https://ngcloudnetworks.com/logo.png",

            image: "https://ngcloudnetworks.com/og-image.jpg",

            description:
              "Networking, Cloud and Cyber Security Training Institute in Hyderabad offering practical CCNA, AWS, Azure, Palo Alto, Fortigate and F5 Load Balancer training.",

            address: {
              "@type": "PostalAddress",

              addressLocality: "Hyderabad",

              addressRegion: "Telangana",

              addressCountry: "India",
            },

            areaServed: "Hyderabad",

            telephone: "+91 9989939191",

            email: "info@ngcloudnetworks.com",

            sameAs: [
              "https://www.instagram.com/",
              "https://www.linkedin.com/",
              "https://www.youtube.com/",
            ],

            offers: [
              {
                "@type": "Course",

                name: "CCNA Training Hyderabad",
              },

              {
                "@type": "Course",

                name: "AWS Training Hyderabad",
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
            ],
          }),
        }}
      />

      <main className="overflow-hidden bg-[#050505] text-white">

        {/* HIDDEN SEO CONTENT */}
        <div className="sr-only">
          CCNA Training Hyderabad,
          AWS Training Hyderabad,
          Azure Training Hyderabad,
          Cyber Security Training Hyderabad,
          Networking Institute Hyderabad,
          Cloud Computing Institute Hyderabad,
          Cisco Training Hyderabad,
          Palo Alto Firewall Training Hyderabad,
          Fortigate Firewall Training Hyderabad,
          F5 Load Balancer Training Hyderabad,
          SD-WAN Training Hyderabad,
          Best Networking Institute in Hyderabad,
          Cloud and Security Courses Hyderabad,
          IT Infrastructure Training Hyderabad,
          Practical Networking Courses Hyderabad.
        </div>

        <Navbar />

        <HeroSection />

        <PopularCourses />

        <CertificationSection />

        <WhyChooseUs />

        <CareerTracks />

        <PlacementSupport />

        <Testimonials />

        <FaqSection />

        <Footer />

      </main>
    </>
  );
}