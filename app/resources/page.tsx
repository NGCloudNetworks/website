"use client";

import Link from "next/link";

import {
  ArrowUpRight,
  BookOpen,
  Download,
  FileText,
  Globe2,
  GraduationCap,
  Laptop2,
  PlayCircle,
  ShieldCheck,
  Video,
  Workflow,
  Wrench,
  Clock3,
  BadgeCheck,
  CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const resources = [
  {
    title: "Cisco Networking Resources",
    description:
      "Access practical CCNA, CCNP and enterprise networking study materials, subnetting guides, routing labs, switching concepts and troubleshooting documentation.",
    icon: Workflow,
    items: [
      "CCNA Study Materials",
      "Subnetting Cheat Sheets",
      "Routing & Switching Labs",
      "Enterprise Troubleshooting Guides",
    ],
  },

  {
    title: "Cloud Computing Resources",
    description:
      "Learn AWS and Azure cloud concepts through deployment guides, cloud networking tutorials, infrastructure documentation and practical labs.",
    icon: Globe2,
    items: [
      "AWS Architecture Notes",
      "Azure Administration Guides",
      "Cloud Networking Concepts",
      "Infrastructure Deployment Labs",
    ],
  },

  {
    title: "Cyber Security Resources",
    description:
      "Explore firewall administration, VPN implementation, security policies and enterprise cyber security practical learning resources.",
    icon: ShieldCheck,
    items: [
      "Palo Alto Firewall Notes",
      "Fortigate Configuration Guides",
      "VPN Troubleshooting",
      "Security Policy Examples",
    ],
  },
];

const learningFormats = [
  {
    title: "Video Tutorials",
    description:
      "Step-by-step practical implementation sessions with enterprise-level concepts and troubleshooting.",
    icon: PlayCircle,
  },

  {
    title: "Practical Lab Guides",
    description:
      "Hands-on implementation documents for networking, cloud and security technologies.",
    icon: Laptop2,
  },

  {
    title: "Certification Notes",
    description:
      "Structured certification-oriented materials designed for interview and exam preparation.",
    icon: FileText,
  },

  {
    title: "Downloadable PDFs",
    description:
      "Quick-reference notes, cheat sheets and enterprise implementation documents.",
    icon: Download,
  },
];

const featuredMaterials = [
  {
    title: "CCNA Subnetting Master Guide",
    category: "Networking",
    duration: "2 Hours Reading",
  },

  {
    title: "AWS VPC Practical Implementation",
    category: "Cloud",
    duration: "1.5 Hours",
  },

  {
    title: "Palo Alto Firewall Policies",
    category: "Security",
    duration: "Advanced Guide",
  },

  {
    title: "Enterprise SD-WAN Architecture",
    category: "Enterprise Networking",
    duration: "Practical Resource",
  },
];

export default function ResourcesPage() {
  return (
    <main className="overflow-hidden bg-[#050505] text-white">
      <Navbar/>
      {/* HERO */}
      <section className="relative overflow-hidden pt-40 pb-24 lg:pt-44 lg:pb-32">

        {/* BACKGROUND */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">

          <div className="absolute left-[-120px] top-[-120px] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/10 blur-[130px]" />

          <div className="absolute right-[-120px] bottom-[-120px] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/10 blur-[130px]" />

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
                  Free Learning Resources & Study Materials
                </span>

              </div>

              {/* TITLE */}
              <h1
                className="
                  mt-8
                  max-w-[980px]
                  text-[46px]
                  font-black
                  leading-[0.9]
                  tracking-[-0.05em]
                  text-white
                  md:text-[74px]
                  xl:text-[100px]
                "
              >
                Learning Resources

                <span className="mt-3 block text-[#D4AF37]">
                  for Networking, Cloud & Security
                </span>

              </h1>

              {/* DESCRIPTION */}
              <p
                className="
                  mt-8
                  max-w-[820px]
                  text-[18px]
                  leading-[2]
                  text-white/60
                "
              >
                Access premium technical learning resources including
                networking notes, cloud implementation guides,
                cyber security documentation, practical labs,
                certification materials and enterprise troubleshooting
                references designed for students and IT professionals.
              </p>

              {/* CTA */}
              <div className="mt-12 flex flex-col gap-5 sm:flex-row">

                <Link
                  href="/courses"
                  className="
                    group
                    flex
                    h-[62px]
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    bg-[#D4AF37]
                    px-9
                    text-[15px]
                    font-semibold
                    text-black
                    transition-all
                    duration-300
                    hover:scale-[1.02]
                    hover:shadow-[0_0_45px_rgba(212,175,55,0.35)]
                  "
                >

                  Explore Courses

                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />

                </Link>

                <Link
                  href="/contact"
                  className="
                    flex
                    h-[62px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.03]
                    px-9
                    text-[15px]
                    font-medium
                    text-white
                    transition-all
                    duration-300
                    hover:border-[#D4AF37]/30
                    hover:text-[#D4AF37]
                  "
                >
                  Contact Mentors
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
                  What You Can Access
                </h2>

                <div className="mt-10 space-y-5">

                  {[
                    {
                      title: "Certification-Oriented Notes",
                      icon: GraduationCap,
                    },
                    {
                      title: "Enterprise Practical Labs",
                      icon: Laptop2,
                    },
                    {
                      title: "Cloud & Security Guides",
                      icon: ShieldCheck,
                    },
                    {
                      title: "Interview Preparation Resources",
                      icon: BadgeCheck,
                    },
                  ].map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={index}
                        className="
                          flex
                          items-center
                          gap-5
                          rounded-[24px]
                          border
                          border-white/10
                          bg-black/20
                          px-6
                          py-5
                        "
                      >

                        <div
                          className="
                            flex
                            h-14
                            w-14
                            items-center
                            justify-center
                            rounded-2xl
                            bg-[#D4AF37]/10
                          "
                        >

                          <Icon className="h-6 w-6 text-[#D4AF37]" />

                        </div>

                        <div>

                          <p className="text-[17px] font-semibold text-white">
                            {item.title}
                          </p>

                        </div>

                      </div>
                    );
                  })}

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* RESOURCE DOMAINS */}
      <section className="relative overflow-hidden py-24">

        <div className="mx-auto max-w-[1450px] px-5">

          <div className="max-w-[900px]">

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
              "
            >

              <div className="h-2 w-2 rounded-full bg-[#D4AF37]" />

              <span className="text-sm text-[#f5e6b3]">
                Learning Categories
              </span>

            </div>

            <h2
              className="
                mt-8
                text-[44px]
                font-black
                leading-[0.96]
                tracking-[-0.04em]
                text-white
                md:text-[64px]
              "
            >
              Premium Technical

              <span className="block text-[#D4AF37]">
                Learning Resources
              </span>

            </h2>

          </div>

          <div className="mt-18 grid gap-7 lg:grid-cols-3">

            {resources.map((resource, index) => {
              const Icon = resource.icon;

              return (
                <div
                  key={index}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[36px]
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-8
                    backdrop-blur-2xl
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-[#D4AF37]/30
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

                      <Icon className="h-8 w-8 text-[#D4AF37]" />

                    </div>

                    <h3
                      className="
                        mt-8
                        text-[30px]
                        font-black
                        leading-[1.1]
                        tracking-[-0.03em]
                        text-white
                      "
                    >
                      {resource.title}
                    </h3>

                    <p
                      className="
                        mt-6
                        text-[16px]
                        leading-[1.9]
                        text-white/60
                      "
                    >
                      {resource.description}
                    </p>

                    <div className="mt-8 space-y-4">

                      {resource.items.map((item, idx) => (

                        <div
                          key={idx}
                          className="
                            flex
                            items-center
                            gap-3
                            rounded-2xl
                            border
                            border-white/10
                            bg-black/20
                            px-5
                            py-4
                          "
                        >

                          <CheckCircle2 className="h-5 w-5 text-[#D4AF37]" />

                          <span className="text-[15px] text-white/80">
                            {item}
                          </span>

                        </div>
                      ))}

                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* LEARNING FORMATS */}
      <section className="relative overflow-hidden py-24">

        <div className="mx-auto max-w-[1450px] px-5">

          <div
            className="
              rounded-[40px]
              border
              border-white/10
              bg-white/[0.03]
              p-10
              backdrop-blur-2xl
              lg:p-16
            "
          >

            <div className="max-w-[850px]">

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
                "
              >

                <div className="h-2 w-2 rounded-full bg-[#D4AF37]" />

                <span className="text-sm text-[#f5e6b3]">
                  Resource Formats
                </span>

              </div>

              <h2
                className="
                  mt-8
                  text-[44px]
                  font-black
                  leading-[0.96]
                  tracking-[-0.04em]
                  text-white
                  md:text-[62px]
                "
              >
                Learn Through Multiple

                <span className="block text-[#D4AF37]">
                  Practical Formats
                </span>

              </h2>

            </div>

            <div className="mt-16 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">

              {learningFormats.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="
                      rounded-[30px]
                      border
                      border-white/10
                      bg-black/20
                      p-8
                    "
                  >

                    <div
                      className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        bg-[#D4AF37]/10
                      "
                    >

                      <Icon className="h-7 w-7 text-[#D4AF37]" />

                    </div>

                    <h3
                      className="
                        mt-7
                        text-[24px]
                        font-black
                        leading-[1.1]
                        text-white
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-5
                        text-[15px]
                        leading-[1.9]
                        text-white/60
                      "
                    >
                      {item.description}
                    </p>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </section>

      {/* FEATURED MATERIALS */}
      <section className="relative overflow-hidden py-24">

        <div className="mx-auto max-w-[1450px] px-5">

          <div className="text-center max-w-[950px] mx-auto">

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
              "
            >

              <div className="h-2 w-2 rounded-full bg-[#D4AF37]" />

              <span className="text-sm text-[#f5e6b3]">
                Featured Resources
              </span>

            </div>

            <h2
              className="
                mt-8
                text-[44px]
                font-black
                leading-[0.96]
                tracking-[-0.04em]
                text-white
                md:text-[64px]
              "
            >
              Popular Technical

              <span className="block text-[#D4AF37]">
                Learning Materials
              </span>

            </h2>

          </div>

          <div className="mt-18 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {featuredMaterials.map((item, index) => (

              <div
                key={index}
                className="
                  rounded-[30px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-8
                  backdrop-blur-xl
                "
              >

                <div
                  className="
                    inline-flex
                    rounded-full
                    border
                    border-[#D4AF37]/20
                    bg-[#D4AF37]/10
                    px-4
                    py-2
                    text-[12px]
                    font-semibold
                    tracking-wide
                    text-[#D4AF37]
                  "
                >
                  {item.category}
                </div>

                <h3
                  className="
                    mt-7
                    text-[24px]
                    font-black
                    leading-[1.3]
                    text-white
                  "
                >
                  {item.title}
                </h3>

                <div className="mt-8 flex items-center gap-3">

                  <Clock3 className="h-4 w-4 text-[#D4AF37]" />

                  <span className="text-[14px] text-white/65">
                    {item.duration}
                  </span>

                </div>

                <button
                  className="
                    mt-8
                    flex
                    h-[52px]
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-2xl
                    border
                    border-white/10
                    bg-black/20
                    text-[14px]
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:border-[#D4AF37]/30
                    hover:text-[#D4AF37]
                  "
                >

                  Access Resource

                  <ArrowUpRight className="h-4 w-4" />

                </button>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24">

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
              text-center
              backdrop-blur-2xl
              lg:p-16
            "
          >

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_60%)]" />

            <div className="relative z-10 max-w-[900px] mx-auto">

              <div
                className="
                  mx-auto
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-full
                  bg-[#D4AF37]/10
                "
              >

                <BookOpen className="h-10 w-10 text-[#D4AF37]" />

              </div>

              <h2
                className="
                  mt-8
                  text-[42px]
                  font-black
                  leading-[0.96]
                  tracking-[-0.04em]
                  text-white
                  md:text-[64px]
                "
              >
                Start Learning with

                <span className="block text-[#D4AF37]">
                  Enterprise Technical Resources
                </span>

              </h2>

              <p
                className="
                  mt-8
                  text-[18px]
                  leading-[2]
                  text-white/65
                "
              >
                Build practical networking, cloud and cyber security
                expertise through premium learning materials,
                certification resources and practical implementation guides.
              </p>

              <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">

                <Link
                  href="/courses"
                  className="
                    group
                    flex
                    h-[62px]
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    bg-[#D4AF37]
                    px-9
                    text-[15px]
                    font-semibold
                    text-black
                    transition-all
                    duration-300
                    hover:scale-[1.02]
                  "
                >

                  Explore Training Programs

                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />

                </Link>

                <Link
                  href="/contact"
                  className="
                    flex
                    h-[62px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.03]
                    px-9
                    text-[15px]
                    font-medium
                    text-white
                    transition-all
                    duration-300
                    hover:border-[#D4AF37]/30
                    hover:text-[#D4AF37]
                  "
                >
                  Talk to Mentors
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>
<Footer/>
    </main>
  );
}