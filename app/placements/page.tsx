import type { Metadata } from "next";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import PlacementSupport from "@/components/home/PlacementSupport";
import StudentSuccessSection from "@/components/home/StudentSuccessSection";
import { placementSupport, academyStats } from "@/data/academy";
import { ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title:
    "Placements | Networking, Cloud & Cyber Security Jobs in Hyderabad | NG Cloud Networks",

  description:
    "NG Cloud Networks students are placed in networking, cloud computing and cyber security roles at companies including Cisco, HCL Technologies, Cloud4C and Teleperformance, after CCNA, AWS, Azure, Palo Alto, Fortigate and F5 Load Balancer training.",

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

  metadataBase: new URL("https://www.ngcloudnetworks.com"),

  alternates: {
    canonical: "/placements",
  },

  openGraph: {
    title: "Placements | NG Cloud Networks",
    description:
      "Networking, cloud and cyber security placement outcomes from NG Cloud Networks students in Hyderabad.",
    url: "https://www.ngcloudnetworks.com/placements",
    siteName: "NG Cloud Networks",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "NG Cloud Networks Placements" }],
  },

  twitter: {
    card: "summary_large_image",
    title: "Placements | NG Cloud Networks",
    description: "Networking, cloud and cyber security placement outcomes in Hyderabad.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

const placementFaqs = [
  {
    question: "Does NG Cloud Networks guarantee a job after training?",
    answer:
      "NG Cloud Networks provides placement assistance — resume building, mock interviews, HR interview preparation and job referrals — but does not guarantee employment. Placement outcomes depend on the student's skills, interview performance and market conditions.",
  },
  {
    question: "What is the starting salary after training?",
    answer: `Starting salaries for freshers typically begin around ${placementSupport.startingSalary}, depending on the course completed, interview performance and the hiring company.`,
  },
  {
    question: "Which companies have hired NG Cloud Networks students?",
    answer:
      "Students have been placed at companies including Cisco, HCL Technologies, Cloud4C, ValueLabs, Teleperformance and Bell Techlogix, across network engineering, network security and network administration roles.",
  },
  {
    question: "Is placement assistance included in the course fee?",
    answer:
      "Yes. Placement assistance is included in every course fee at NG Cloud Networks and covers resume building, mock interviews, HR interview preparation and job referral support.",
  },
];

export default function PlacementsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ngcloudnetworks.com" },
      { "@type": "ListItem", position: 2, name: "Placements", item: "https://www.ngcloudnetworks.com/placements" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: placementFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
        author: { "@id": "https://www.ngcloudnetworks.com/#organization" },
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="overflow-hidden bg-[#050505] text-white">
        <Navbar />

        {/* Page hero with AEO direct-answer block */}
        <section className="relative overflow-hidden pt-[180px] pb-12 md:pt-[220px]">
          <div className="mx-auto max-w-[900px] px-5 text-center">
            <nav aria-label="Breadcrumb" className="mb-6 flex justify-center gap-2 text-[13px] text-white/45">
              <a href="/" className="hover:text-[#D4AF37]">Home</a>
              <span>/</span>
              <span className="text-white/70">Placements</span>
            </nav>

            <h1 className="text-[38px] font-black leading-[1.05] tracking-[-0.04em] text-white md:text-[54px]">
              Placements at{" "}
              <span className="text-[#D4AF37]">NG Cloud Networks</span>
            </h1>

            <p className="mx-auto mt-6 max-w-[760px] text-[16px] leading-[1.9] text-white/70">
              NG Cloud Networks students are placed in networking, cloud and
              cyber security roles at companies including{" "}
              <strong className="text-white">
                Cisco, HCL Technologies, Cloud4C and Teleperformance
              </strong>
              , with placement assistance included in every course fee and
              starting salaries around {academyStats.placementSupport} placement support rate.
            </p>
          </div>
        </section>

        <PlacementSupport />
        <StudentSuccessSection />

        {/* Placement-specific FAQ, distinct from homepage FAQ */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-[900px] px-5">
            <h2 className="text-center text-[28px] font-black tracking-[-0.03em] text-white md:text-[36px]">
              Placement Questions
            </h2>

            <div className="mt-10 divide-y divide-white/10">
              {placementFaqs.map((faq) => (
                <details key={faq.question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[16px] font-semibold text-white marker:hidden">
                    {faq.question}
                    <ChevronDown className="h-5 w-5 shrink-0 text-[#D4AF37] transition-transform duration-300 group-open:rotate-180" aria-hidden="true" />
                  </summary>
                  <p className="mt-3 max-w-[820px] text-[15px] leading-[1.8] text-white/65">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}