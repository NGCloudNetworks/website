"use client";

import Link from "next/link";

import {
    ArrowUpRight,
    BadgeCheck,
    Building2,
    CheckCircle2,
    Globe2,
    GraduationCap,
    ShieldCheck,
    Users,
    Workflow,
    Clock3,
    Target,
    BriefcaseBusiness,
    Layers3,
    Star,
} from "lucide-react";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

const trainingPrograms = [
    {
        title: "Enterprise Networking Training",
        href: "/courses/ccnp-enterprise-training-hyderabad",
        description:
            "Practical corporate networking training programs focused on routing, switching, enterprise troubleshooting, SD-WAN, infrastructure operations and advanced Cisco technologies.",
        topics: [
            "CCNA & CCNP Enterprise",
            "Cisco SD-WAN",
            "Routing & Switching",
            "Enterprise Troubleshooting",
            "Network Security Fundamentals",
        ],
    },

    {
        title: "Cloud Infrastructure Training",
        href: "/courses/aws-training-hyderabad",
        description:
            "Hands-on cloud infrastructure training programs focused on enterprise cloud deployment, networking, virtualization and infrastructure management.",
        topics: [
            "AWS Cloud",
            "Microsoft Azure",
            "Cloud Networking",
            "Cloud Security",
            "Infrastructure Monitoring",
        ],
    },

    {
        title: "Cyber Security & Firewall Training",
        href: "/courses/palo-alto-firewall-training-hyderabad",
        description:
            "Enterprise cyber security training programs designed for firewall administration, threat prevention, VPN implementation and infrastructure protection.",
        topics: [
            "Palo Alto Firewall",
            "Fortigate Firewall",
            "Security Policies",
            "VPN Implementation",
            "Threat Prevention",
        ],
    },
];

const benefits = [
    "Customized Corporate Training Programs",
    "Industry Expert Trainers",
    "Real-Time Enterprise Scenarios",
    "Hands-On Practical Labs",
    "Online & Offline Training",
    "Flexible Corporate Batches",
    "Certification-Oriented Learning",
    "Post Training Support",
];

const process = [
    {
        title: "Requirement Analysis",
        description:
            "We understand your organizational goals, employee skill gaps and infrastructure requirements before designing the training plan.",
    },

    {
        title: "Customized Training Plan",
        description:
            "Training modules are customized based on your enterprise technologies, project requirements and team experience levels.",
    },

    {
        title: "Practical Enterprise Training",
        description:
            "Employees work on real-time enterprise scenarios, infrastructure labs and implementation-focused practical sessions.",
    },

    {
        title: "Assessment & Support",
        description:
            "We conduct technical assessments, progress tracking and provide post-training support for improved implementation confidence.",
    },
];

const stats = [
    {
        title: "Corporate Batches",
        value: "120+",
    },

    {
        title: "Professionals Trained",
        value: "8000+",
    },

    {
        title: "Enterprise Technologies",
        value: "15+",
    },

    {
        title: "Training Satisfaction",
        value: "4.9/5",
    },
];

const companies = [
    "Enterprise IT Teams",
    "Networking Teams",
    "Cloud Operations Teams",
    "Cyber Security Teams",
    "Infrastructure Engineers",
    "Technical Support Teams",
];

export default function CorporateTrainingPage() {
    return (
        <main className="overflow-hidden bg-[#050505] text-white">
            <Navbar />
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
                                    Enterprise Corporate Training Solutions
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
                                Corporate Training

                                <span className="mt-3 block text-[#D4AF37]">
                                    for Enterprise IT Teams
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
                                NG Cloud Networks provides premium corporate training
                                programs for enterprise organizations, infrastructure
                                teams and IT professionals. Our training focuses on
                                practical enterprise networking, cloud infrastructure,
                                firewall security and real-world implementation designed
                                for operational excellence and technical growth.
                            </p>

                            {/* CTA */}
                            <div className="mt-12 flex flex-col gap-5 sm:flex-row">

                                <Link
                                    href="/contact"
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

                                    Request Corporate Training

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
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:border-[#D4AF37]/30
                    hover:text-[#D4AF37]
                  "
                                >
                                    Schedule Consultation
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
                                    Why Enterprises Choose NG Cloud Networks
                                </h2>

                                <div className="mt-10 space-y-5">

                                    {[
                                        {
                                            title: "Industry Expert Trainers",
                                            icon: GraduationCap,
                                        },
                                        {
                                            title: "Customized Training Modules",
                                            icon: Workflow,
                                        },
                                        {
                                            title: "Real-Time Enterprise Labs",
                                            icon: ShieldCheck,
                                        },
                                        {
                                            title: "Flexible Online & Offline Training",
                                            icon: Globe2,
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

            {/* STATS */}
            <section className="relative overflow-hidden pb-10">

                <div className="mx-auto max-w-[1450px] px-5">

                    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

                        {stats.map((item, index) => (

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

                                <h3
                                    className="
                    text-[52px]
                    font-black
                    tracking-[-0.04em]
                    text-[#D4AF37]
                  "
                                >
                                    {item.value}
                                </h3>

                                <p className="mt-3 text-[17px] text-white/70">
                                    {item.title}
                                </p>

                            </div>
                        ))}

                    </div>

                </div>

            </section>

            {/* TRAINING PROGRAMS */}
            {/* TRAINING PROGRAMS */}
            <section className="relative overflow-hidden py-24">

                <div className="absolute inset-0 overflow-hidden pointer-events-none">

                    <div className="absolute top-[-120px] right-[-120px] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/5 blur-[130px]" />

                </div>

                <div className="relative z-10 mx-auto max-w-[1450px] px-5">

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
                                Corporate Training Domains
                            </span>

                        </div>

                        <h2
                            className="
          mt-8
          text-[44px]
          font-black
          leading-[0.94]
          tracking-[-0.05em]
          text-white
          md:text-[64px]
        "
                        >
                            Enterprise Technology

                            <span className="block text-[#D4AF37]">
                                Training Programs
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
                            Premium enterprise-focused training programs designed
                            for modern infrastructure, cloud and cyber security teams.
                        </p>

                    </div>

                    <div className="mt-20 grid gap-7 lg:grid-cols-3">

                        {trainingPrograms.map((program, index) => (

                            <Link
                                key={index}
                                href={program.href}
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
            hover:-translate-y-1.5
            hover:border-[#D4AF37]/30
            hover:bg-[#D4AF37]/[0.03]
          "
                            >

                                {/* HOVER LIGHT */}
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

                                    {/* TOP */}
                                    <div className="flex items-start justify-between">

                                        <div
                                            className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-[#D4AF37]/20
                  bg-[#D4AF37]/10
                "
                                        >

                                            <Building2 className="h-8 w-8 text-[#D4AF37]" />

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

                                    {/* CONTENT */}
                                    <div className="mt-8">

                                        <h3
                                            className="
                  text-[30px]
                  font-black
                  leading-[1.05]
                  tracking-[-0.04em]
                  text-white
                  transition-colors
                  duration-300
                  group-hover:text-[#D4AF37]
                "
                                        >
                                            {program.title}
                                        </h3>

                                        <p
                                            className="
                  mt-6
                  text-[16px]
                  leading-[1.9]
                  text-white/60
                "
                                        >
                                            {program.description}
                                        </p>

                                        {/* TOPICS */}
                                        <div className="mt-8 space-y-4">

                                            {program.topics.map((topic, idx) => (

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
                      transition-all
                      duration-300
                      group-hover:border-[#D4AF37]/15
                      group-hover:bg-[#D4AF37]/[0.03]
                    "
                                                >

                                                    <CheckCircle2 className="h-5 w-5 text-[#D4AF37]" />

                                                    <span className="text-[15px] text-white/80">
                                                        {topic}
                                                    </span>

                                                </div>
                                            ))}

                                        </div>

                                        {/* FOOTER */}
                                        <div
                                            className="
                  mt-8
                  flex
                  items-center
                  justify-between
                  rounded-2xl
                  border
                  border-white/10
                  bg-black/20
                  px-5
                  py-4
                  transition-all
                  duration-300
                  group-hover:border-[#D4AF37]/20
                "
                                        >

                                            <div className="flex items-center gap-3">

                                                <div
                                                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#D4AF37]/10
                    "
                                                >

                                                    <Layers3 className="h-5 w-5 text-[#D4AF37]" />

                                                </div>

                                                <div>

                                                    <p className="text-[14px] font-semibold text-white">
                                                        Enterprise Training Track
                                                    </p>

                                                    <p className="mt-1 text-[13px] text-white/45">
                                                        Practical • Real-Time • Industry Focused
                                                    </p>

                                                </div>

                                            </div>

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

                                        </div>

                                    </div>

                                </div>

                            </Link>
                        ))}

                    </div>

                </div>

            </section>

            {/* TRAINING PROCESS */}
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
                                    Training Workflow
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
                                Our Corporate Training

                                <span className="block text-[#D4AF37]">
                                    Delivery Process
                                </span>

                            </h2>

                        </div>

                        <div className="mt-16 grid gap-6 lg:grid-cols-2">

                            {process.map((item, index) => (

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

                                        <span className="text-[18px] font-bold text-[#D4AF37]">
                                            0{index + 1}
                                        </span>

                                    </div>

                                    <h3
                                        className="
                      mt-7
                      text-[28px]
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
                      text-[16px]
                      leading-[1.9]
                      text-white/60
                    "
                                    >
                                        {item.description}
                                    </p>

                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </section>

            {/* FINAL CTA */}
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

                                <Target className="h-10 w-10 text-[#D4AF37]" />

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
                                Upskill Your Enterprise Teams

                                <span className="block text-[#D4AF37]">
                                    with Practical Technology Training
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
                                Partner with NG Cloud Networks for premium corporate
                                training programs focused on enterprise networking,
                                cloud infrastructure and cyber security technologies.
                            </p>

                            <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">

                                <Link
                                    href="/contact"
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

                                    Contact Our Team

                                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />

                                </Link>

                                <Link
                                    href="/placements"
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
                                    View Success Stories
                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
            <Footer />
        </main>
    );
}