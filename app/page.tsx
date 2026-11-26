import type { Metadata } from "next";

import Footer from "@/components/footer/Footer";
import HeroSection from "@/components/hero/HeroSection";
import FAQSection from "@/components/home/FaqSection";
import PlacementSection from "@/components/home/PlacementSupport";
import WhyChooseSection from "@/components/home/WhyChooseUs";
import Navbar from "@/components/navbar/Navbar";
import TrainerSection from "@/components/home/TrainerSection";
import CoursesSection from "@/components/home/CoursesSection";
import BranchesSection from "@/components/home/BranchesSection";
import TrainingScheduleSection from "@/components/home/TrainingScheduleSection";
import WhoShouldJoinSection from "@/components/home/WhoShouldJoin";
import ComparisonSection from "@/components/home/ComparisonSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import StudentSuccessSection from "@/components/home/StudentSuccessSection";
import FinalCTASection from "@/components/home/FinalCTASection";
import CareerGuideSection from "@/components/home/CareerGuideSection";
import CourseSelectionGuideSection from "@/components/home/CourseSelectionGuideSection";
import UpcomingBatch from "@/components/home/UpcomingBatch";
import AnnouncementTicker from "@/components/home/AnnouncementSticker";

export const metadata: Metadata = {
  title:
    "CCNA, CCNP & Cloud Training in Hyderabad | NG Cloud Networks",

  description:
    "NG Cloud Networks: CCNA, CCNP, AWS, Azure, Palo Alto and Fortigate training in Hyderabad. Hands-on labs, placement support. Ameenpur & Ameerpet branches.",

  metadataBase: new URL("https://www.ngcloudnetworks.com"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "CCNA, CCNP & Cloud Training in Hyderabad | NG Cloud Networks",

    description:
      "Practical networking, cloud and cyber security training institute in Hyderabad with placement support and enterprise-level labs.",

    url: "https://www.ngcloudnetworks.com",

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
      "CCNA, CCNP & Cloud Training in Hyderabad | NG Cloud Networks",

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
      {/* No page-level EducationalOrganization schema here — HeroSection
          already emits the canonical org entity with @id
          "https://www.ngcloudnetworks.com/#organization". A second,
          conflicting Organization block was removed to avoid entity
          ambiguity. */}

      <main className="overflow-hidden bg-[#050505] text-white">

        {/* Hidden sr-only keyword block removed — same hidden-text pattern
            already flagged and removed from the course page template.
            Every keyword here is already covered naturally in visible
            copy across Hero, Why Choose, Courses Grid and FAQ. */}

        <header className="relative z-50">

          <Navbar />

          {/* <div className="mt-[122px]">
            <AnnouncementTicker />
          </div> */}

        </header>
        <HeroSection />
        <UpcomingBatch />
        <WhyChooseSection />
        <TrainerSection />

        <CoursesSection />
        <BranchesSection />
        <TrainingScheduleSection />
        <WhoShouldJoinSection />
        <CareerGuideSection />
        <CourseSelectionGuideSection />
        <ComparisonSection />
        <PlacementSection />
        <StudentSuccessSection />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTASection />
        <Footer />

      </main>
    </>
  );
}