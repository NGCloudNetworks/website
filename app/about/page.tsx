import Link from "next/link";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import type { Metadata } from "next";

import {
  BadgeCheck,
  Users,
  GraduationCap,
  BriefcaseBusiness,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  Star,
  Network,
  Cloud,
  Lock,
  ArrowUpRight,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "10,000+",
    label: "Students Trained",
  },

  {
    icon: BriefcaseBusiness,
    value: "2500+",
    label: "Placements",
  },

  {
    icon: GraduationCap,
    value: "15+",
    label: "Industry Courses",
  },

  {
    icon: TrendingUp,
    value: "92%",
    label: "Career Support",
  },
];

const values = [
  {
    icon: Network,
    title: "Enterprise Networking Training",
    href: "/courses/ccna-training-hyderabad",
    description:
      "Learn real-time enterprise routing, switching, SD-WAN and infrastructure implementation with practical Cisco lab environments.",
  },

  {
    icon: Cloud,
    title: "Cloud & Infrastructure Skills",
    href: "/courses/aws-training-hyderabad",
    description:
      "Build practical AWS and Azure cloud expertise with deployment, networking and cloud administration training.",
  },

  {
    icon: ShieldCheck,
    title: "Cyber Security Training",
    href: "/courses/palo-alto-firewall-training-hyderabad",
    description:
      "Gain hands-on experience in Palo Alto, Fortigate and enterprise security implementation through practical labs.",
  },

  {
    icon: Lock,
    title: "Practical Learning Approach",
    href: "/placements",
    description:
      "We focus heavily on implementation, troubleshooting, projects and interview-oriented practical training.",
  },
];

const testimonials = [
  {
    name: "Rahul Kumar",
    role: "Network Engineer",
    review:
      "The practical Cisco labs and troubleshooting sessions helped me gain confidence in enterprise networking projects and interviews.",
  },

  {
    name: "Sai Teja",
    role: "Cloud Support Engineer",
    review:
      "The AWS cloud training and placement mentoring helped me successfully transition into cloud infrastructure roles.",
  },

  {
    name: "Akhil Reddy",
    role: "Security Analyst",
    review:
      "The firewall practical sessions and enterprise security scenarios were highly useful for real-world cybersecurity implementation.",
  },
];
export const metadata: Metadata = {
  title:
    "About NG Cloud Networks | Best Networking, Cloud & Cyber Security Training Institute in Hyderabad",

  description:
    "Learn about NG Cloud Networks — Hyderabad's practical IT training institute for CCNA, CCNP, AWS, Azure, Palo Alto, Fortigate and F5 Load Balancer training with placement support and enterprise labs.",

  keywords: [
    "About NG Cloud Networks",
    "Networking Institute Hyderabad",
    "Cloud Training Institute Hyderabad",
    "Cyber Security Training Hyderabad",
    "CCNA Institute Hyderabad",
    "CCNP Training Hyderabad",
    "AWS Training Hyderabad",
    "Azure Training Hyderabad",
    "Palo Alto Training Hyderabad",
    "Fortigate Training Hyderabad",
    "F5 Load Balancer Training Hyderabad",
    "IT Training Institute Hyderabad",
    "Best Networking Institute",
    "Cloud Computing Courses Hyderabad",
    "Cyber Security Institute Hyderabad",
    "Placement Oriented IT Training",
    "Enterprise Networking Training",
    "Practical IT Training Hyderabad",
    "Cisco Training Institute",
    "Network Engineer Training",
  ],

  alternates: {
    canonical:
      "https://ngcloudnetworks.com/about",
  },

  openGraph: {
    title:
      "About NG Cloud Networks",

    description:
      "Practical networking, cloud and cybersecurity training institute in Hyderabad with enterprise labs and placement support.",

    url:
      "https://ngcloudnetworks.com/about",

    siteName:
      "NG Cloud Networks",

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "About NG Cloud Networks",

    description:
      "Enterprise networking, cloud and cybersecurity training institute in Hyderabad.",
  },
};
export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#050505] text-white">

      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden pt-40 pb-24 lg:pt-44 lg:pb-32">

        {/* BACKGROUND */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">

          <div className="absolute left-[-140px] top-[-120px] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/10 blur-[130px]" />

          <div className="absolute right-[-140px] bottom-[-120px] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/10 blur-[130px]" />

          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "52px 52px",
            }}
          />

        </div>

        <div className="relative z-10 mx-auto max-w-[1450px] px-5">

          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">

            {/* LEFT */}
            <div>

              {/* BADGE */}
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#D4AF37]/20
                  bg-[#D4AF37]/5
                  px-5
                  py-2.5
                  backdrop-blur-xl
                "
              >

                <div className="h-2 w-2 rounded-full bg-[#D4AF37]" />

                <span className="text-sm tracking-wide text-[#f5e6b3]">
                  About NG Cloud Networks
                </span>

              </div>

              {/* TITLE */}
              <h1
                className="
                  mt-8
                  text-[48px]
                  font-black
                  leading-[0.92]
                  tracking-[-0.05em]
                  text-white
                  md:text-[74px]
                  xl:text-[96px]
                "
              >
                Practical IT Training

                <span className="mt-3 block text-[#D4AF37]">
                  For Real Careers
                </span>

              </h1>

              {/* DESCRIPTION */}
              <p
                className="
                  mt-8
                  max-w-[820px]
                  text-[18px]
                  leading-[1.95]
                  text-white/60
                "
              >
                NG Cloud Networks is one of the leading networking,
                cloud computing and cyber security training institutes
                in Hyderabad offering practical CCNA, CCNP, AWS,
                Azure, Palo Alto, Fortigate and F5 Load Balancer
                training with enterprise-level labs, certification
                guidance, placement assistance and real-time
                infrastructure implementation training.
              </p>

              {/* CTA */}
              <div className="mt-12 flex flex-col gap-4 sm:flex-row">

                <Link
                  href="/courses"
                  className="
                    group
                    flex
                    h-[60px]
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    bg-[#D4AF37]
                    px-8
                    text-[15px]
                    font-semibold
                    text-black
                    transition-all
                    duration-300
                    hover:scale-[1.02]
                    hover:shadow-[0_0_35px_rgba(212,175,55,0.35)]
                  "
                >
                  Explore Courses

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />

                </Link>

                <Link
                  href="/contact"
                  className="
                    flex
                    h-[60px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.03]
                    px-8
                    text-[15px]
                    font-medium
                    text-white
                    transition-all
                    duration-300
                    hover:border-[#D4AF37]/30
                    hover:text-[#D4AF37]
                  "
                >
                  Book Free Demo
                </Link>

              </div>

            </div>

            {/* RIGHT */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[40px]
                border
                border-white/10
                bg-white/[0.03]
                p-8
                backdrop-blur-2xl
                lg:p-10
              "
            >

              <div
                className="
                  absolute
                  inset-0
                  bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.12),transparent_55%)]
                "
              />

              <div className="relative z-10">

                <h2
                  className="
                    text-[34px]
                    font-black
                    tracking-[-0.03em]
                    text-white
                  "
                >
                  Why Students Choose Us
                </h2>

                <div className="mt-10 space-y-5">

                  {[
                    "Enterprise-Level Practical Labs",
                    "Real-Time Networking & Cloud Projects",
                    "Placement-Oriented Training",
                    "Certification Preparation",
                    "Interview Mentorship & Resume Support",
                    "Industry-Focused Practical Sessions",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="
                        flex
                        items-start
                        gap-4
                        rounded-[24px]
                        border
                        border-white/10
                        bg-black/20
                        px-5
                        py-5
                        transition-all
                        duration-300
                        hover:border-[#D4AF37]/20
                      "
                    >

                      <div
                        className="
                          flex
                          h-11
                          w-11
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          bg-[#D4AF37]/10
                        "
                      >

                        <BadgeCheck className="h-5 w-5 text-[#D4AF37]" />

                      </div>

                      <p className="text-[16px] leading-[1.8] text-white/75">
                        {item}
                      </p>

                    </div>
                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
      <div className="sr-only">
        NG Cloud Networks provides practical IT training
        in Hyderabad including CCNA training, CCNP
        Enterprise training, AWS cloud training,
        Azure cloud training, Palo Alto firewall training,
        Fortigate firewall training and F5 Load Balancer
        training with enterprise practical labs,
        certification guidance and placement support.

      </div>

      {/* STATS */}
      <section className="relative overflow-hidden py-20">

        <div className="mx-auto max-w-[1450px] px-5">

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="
                    rounded-[32px]
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-8
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:border-[#D4AF37]/20
                    hover:bg-[#D4AF37]/[0.03]
                  "
                >

                  <div
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#D4AF37]/10
                    "
                  >

                    <Icon className="h-7 w-7 text-[#D4AF37]" />

                  </div>

                  <h3 className="mt-7 text-[46px] font-black tracking-[-0.04em] text-white">
                    {item.value}
                  </h3>

                  <p className="mt-2 text-[15px] text-white/60">
                    {item.label}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* VALUES */}
      <section className="relative overflow-hidden py-28">

        <div className="mx-auto max-w-[1450px] px-5">

          <div className="max-w-[900px]">

            <h2
              className="
                text-[42px]
                font-black
                leading-[0.96]
                tracking-[-0.05em]
                text-white
                md:text-[66px]
              "
            >
              What Makes Our

              <span className="block text-[#D4AF37]">
                Training Different
              </span>

            </h2>

            <p
              className="
                mt-8
                max-w-[760px]
                text-[18px]
                leading-[1.95]
                text-white/60
              "
            >
              We focus on practical implementation,
              enterprise scenarios, interview preparation
              and career-oriented technical training.
            </p>

          </div>

          {/* GRID */}
          <div className="mt-20 grid gap-7 md:grid-cols-2">

            {values.map((item, index) => {
              const Icon = item.icon;

              return (
                <Link
                  key={index}
                  href={item.href}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[34px]
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-8
                    backdrop-blur-2xl
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-[#D4AF37]/30
                    hover:bg-[#D4AF37]/[0.03]
                  "
                >

                  <div
                    className="
                      absolute
                      inset-0
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                      bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.12),transparent_55%)]
                    "
                  />

                  <div className="relative z-10">

                    <div className="flex items-start justify-between">

                      <div
                        className="
                          flex
                          h-16
                          w-16
                          items-center
                          justify-center
                          rounded-2xl
                          bg-[#D4AF37]/10
                        "
                      >

                        <Icon className="h-7 w-7 text-[#D4AF37]" />

                      </div>

                      <div
                        className="
                          flex
                          h-11
                          w-11
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/10
                          bg-white/[0.03]
                          opacity-0
                          translate-x-2
                          transition-all
                          duration-500
                          group-hover:translate-x-0
                          group-hover:opacity-100
                        "
                      >

                        <ArrowUpRight className="h-5 w-5 text-[#D4AF37]" />

                      </div>

                    </div>

                    <h3 className="mt-8 text-[30px] font-black leading-[1.1] tracking-[-0.03em] text-white">
                      {item.title}
                    </h3>

                    <p className="mt-5 text-[16px] leading-[1.9] text-white/60">
                      {item.description}
                    </p>

                  </div>

                </Link>
              );
            })}

          </div>

        </div>

      </section>

      {/* TESTIMONIALS */}
      <section className="relative overflow-hidden py-28">

        <div className="mx-auto max-w-[1450px] px-5">

          <div className="max-w-[850px]">

            <h2
              className="
                text-[42px]
                font-black
                leading-[1]
                tracking-[-0.04em]
                text-white
                md:text-[64px]
              "
            >
              Student

              <span className="block text-[#D4AF37]">
                Success Stories
              </span>

            </h2>

          </div>

          <div className="mt-20 grid gap-7 md:grid-cols-2 xl:grid-cols-3">

            {testimonials.map((item, index) => (
              <div
                key={index}
                className="
                  rounded-[34px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-8
                  backdrop-blur-xl
                "
              >

                <div className="flex items-center gap-1">

                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-[#D4AF37] text-[#D4AF37]"
                    />
                  ))}

                </div>

                <p className="mt-7 text-[16px] leading-[1.9] text-white/60">
                  “{item.review}”
                </p>

                <div className="mt-8">

                  <h3 className="text-[20px] font-bold text-white">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-[#D4AF37]">
                    {item.role}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>
      <section className="relative overflow-hidden py-24">

        <div className="mx-auto max-w-[1450px] px-5">

          <div className="max-w-[950px]">

            <h2
              className="
          text-[40px]
          font-black
          leading-[1]
          tracking-[-0.04em]
          text-white
          md:text-[62px]
        "
            >
              Explore Our

              <span className="block text-[#D4AF37]">
                Popular IT Courses
              </span>

            </h2>

            <p
              className="
          mt-7
          max-w-[760px]
          text-[18px]
          leading-[1.9]
          text-white/60
        "
            >
              Build practical skills in enterprise networking,
              cloud computing, cyber security and infrastructure
              technologies with placement-oriented practical training.
            </p>

          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">

            {[
              {
                title: "CCNA Training",
                href: "/courses/ccna-training-hyderabad",
              },
              {
                title: "CCNP Enterprise Training",
                href: "/courses/ccnp-enterprise-training-hyderabad",
              },
              {
                title: "AWS Cloud Training",
                href: "/courses/aws-training-hyderabad",
              },
              {
                title: "Azure Cloud Training",
                href: "/courses/azure-cloud-training-hyderabad",
              },
              {
                title: "Palo Alto Firewall Training",
                href:
                  "/courses/palo-alto-firewall-training-hyderabad",
              },
              {
                title: "F5 Load Balancer Training",
                href:
                  "/courses/f5-load-balancer-training-hyderabad",
              },
            ].map((course) => (

              <Link
                key={course.title}
                href={course.href}
                className="
            group
            flex
            items-center
            justify-between
            rounded-[28px]
            border
            border-white/10
            bg-white/[0.03]
            px-6
            py-5
            transition-all
            duration-300
            hover:border-[#D4AF37]/30
            hover:bg-[#D4AF37]/[0.03]
          "
              >

                <span className="text-[17px] font-medium text-white">
                  {course.title}
                </span>

                <ArrowUpRight
                  className="
              h-5
              w-5
              text-[#D4AF37]
              transition-transform
              duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
                />

              </Link>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="relative overflow-hidden pb-28">

        <div className="mx-auto max-w-[1450px] px-5">

          <div
            className="
              relative
              overflow-hidden
              rounded-[42px]
              border
              border-[#D4AF37]/20
              bg-[#D4AF37]/[0.05]
              p-10
              backdrop-blur-2xl
              lg:p-16
            "
          >

            <div className="absolute right-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-[#D4AF37]/10 blur-[120px]" />

            <div className="relative z-10 max-w-[900px]">

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#D4AF37]/20
                  bg-[#D4AF37]/10
                  px-5
                  py-2.5
                "
              >

                <BadgeCheck className="h-4 w-4 text-[#D4AF37]" />

                <span className="text-sm text-[#f5e6b3]">
                  Build Your IT Career
                </span>

              </div>

              <h2
                className="
                  mt-8
                  text-[42px]
                  font-black
                  leading-[0.96]
                  tracking-[-0.04em]
                  text-white
                  md:text-[68px]
                "
              >
                Start Learning with

                <span className="block text-[#D4AF37]">
                  NG Cloud Networks
                </span>

              </h2>

              <p
                className="
                  mt-8
                  max-w-[760px]
                  text-[18px]
                  leading-[1.9]
                  text-white/60
                "
              >
                Learn enterprise networking, cloud computing
                and cybersecurity with practical labs,
                placement mentorship and real-world implementation training.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                <Link
                  href="/courses"
                  className="
                    group
                    flex
                    h-[58px]
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    bg-[#D4AF37]
                    px-8
                    text-[15px]
                    font-semibold
                    text-black
                    transition-all
                    duration-300
                    hover:scale-[1.02]
                  "
                >
                  Explore Courses

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />

                </Link>

                <Link
                  href="/contact"
                  className="
                    flex
                    h-[58px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.03]
                    px-8
                    text-[15px]
                    font-medium
                    text-white
                    transition-all
                    duration-300
                    hover:border-[#D4AF37]/30
                    hover:text-[#D4AF37]
                  "
                >
                  Contact Us
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",

            "@type": "EducationalOrganization",

            name: "NG Cloud Networks",

            url: "https://ngcloudnetworks.com",

            logo:
              "https://ngcloudnetworks.com/logo.png",

            description:
              "Networking, cloud computing and cyber security training institute in Hyderabad.",

            address: {
              "@type": "PostalAddress",

              addressLocality: "Hyderabad",

              addressRegion: "Telangana",

              addressCountry: "IN",
            },

            sameAs: [
              "https://www.instagram.com/",
              "https://www.linkedin.com/",
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

                name: "Palo Alto Firewall Training Hyderabad",
              },
            ],
          }),
        }}
      />
      <Footer />

    </main>
  );
}