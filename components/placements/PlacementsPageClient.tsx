"use client";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Link from "next/link";

import {
    BriefcaseBusiness,
    Building2,
    Star,
    TrendingUp,
    Users,
    BadgeCheck,
    ArrowRight,
} from "lucide-react";

const placements = [
    {
        name: "Rahul Kumar",
        role: "Network Engineer",
        company: "Tech Mahindra",
        package: "5.2 LPA",
        course: "CCNA Routing & Switching",
    },
    {
        name: "Sai Teja",
        role: "Cloud Support Engineer",
        company: "TCS",
        package: "4.8 LPA",
        course: "AWS Cloud Training",
    },
    {
        name: "Akhil Reddy",
        role: "Security Analyst",
        company: "Infosys",
        package: "6.1 LPA",
        course: "Palo Alto Firewall",
    },
    {
        name: "Harsha Vardhan",
        role: "Network Administrator",
        company: "Wipro",
        package: "4.5 LPA",
        course: "CCNA Training",
    },
    {
        name: "Naveen Kumar",
        role: "Enterprise Network Engineer",
        company: "HCL Technologies",
        package: "7.5 LPA",
        course: "CCNP Enterprise",
    },
    {
        name: "Lokesh",
        role: "Cloud Engineer",
        company: "Accenture",
        package: "6.8 LPA",
        course: "Azure Cloud Training",
    },
    {
        name: "Vamsi Krishna",
        role: "SD-WAN Engineer",
        company: "Capgemini",
        package: "8.2 LPA",
        course: "Cisco SD-WAN",
    },
    {
        name: "Arun Kumar",
        role: "Firewall Administrator",
        company: "Cognizant",
        package: "5.7 LPA",
        course: "Fortigate Firewall",
    },
    {
        name: "Kiran Kumar",
        role: "F5 Load Balancer Engineer",
        company: "LTIMindtree",
        package: "7.1 LPA",
        course: "F5 Load Balancer",
    },
    {
        name: "Sai Charan",
        role: "Infrastructure Support Engineer",
        company: "DXC Technology",
        package: "4.9 LPA",
        course: "CCNA Training",
    },

    {
        name: "Mahesh",
        role: "Cloud Administrator",
        company: "IBM",
        package: "6.3 LPA",
        course: "AWS Cloud Training",
    },

    {
        name: "Rohit",
        role: "Cyber Security Engineer",
        company: "Virtusa",
        package: "7.9 LPA",
        course: "Palo Alto Firewall",
    },
];

const testimonials = [
    {
        name: "Rahul Kumar",
        review:
            "The practical labs and interview mentoring helped me confidently crack networking interviews and get placed as a Network Engineer.",
    },

    {
        name: "Sai Teja",
        review:
            "NG Cloud Networks explained cloud concepts from basics and the AWS practical sessions were highly useful for placements.",
    },

    {
        name: "Akhil Reddy",
        review:
            "The firewall implementation and real-time troubleshooting sessions helped me build strong cybersecurity confidence.",
    },

    {
        name: "Naveen Kumar",
        review:
            "The advanced CCNP enterprise routing labs were practical and industry-oriented. Great placement support.",
    },

    {
        name: "Lokesh",
        review:
            "Azure cloud projects and resume preparation sessions helped me transition into cloud infrastructure roles.",
    },

    {
        name: "Vamsi Krishna",
        review:
            "Cisco SD-WAN implementation training was extremely practical and aligned with enterprise networking requirements.",
    },

    {
        name: "Harsha Vardhan",
        review:
            "The trainers focused heavily on subnetting and troubleshooting which improved my interview performance.",
    },

    {
        name: "Arun Kumar",
        review:
            "The firewall practical labs and VPN configuration sessions were highly useful for real-world projects.",
    },

    {
        name: "Kiran Kumar",
        review:
            "F5 Load Balancer concepts were explained in a simple and practical way with enterprise-level examples.",
    },

    {
        name: "Sai Charan",
        review:
            "Placement mentorship, mock interviews and practical training made a huge difference in my career preparation.",
    },
];

export default function PlacementsPage() {
    return (
        <main className="overflow-hidden bg-[#050505] text-white">

            {/* NAVBAR */}
            <Navbar />
            {/* SEO CONTENT */}
            <section className="sr-only">

                <h1>
                    Networking, Cloud & Cyber Security Placements in Hyderabad
                </h1>

                <h2>
                    CCNA, AWS, Azure, Palo Alto & Cloud Security Placement Support
                </h2>

                <p>
                    NG Cloud Networks provides placement-focused training
                    for networking, cloud computing and cyber security careers.
                    Students receive practical enterprise lab training,
                    interview preparation, resume optimization,
                    certification guidance and placement mentoring.
                </p>

                <p>
                    Our students are placed in leading IT companies
                    including TCS, Infosys, Tech Mahindra,
                    Wipro, HCL, Accenture, IBM and Cognizant
                    for networking, cloud infrastructure
                    and cybersecurity roles.
                </p>

            </section>

            {/* HERO */}
            <section className="relative overflow-hidden pt-40 pb-24 lg:pt-44 lg:pb-32">

                {/* BACKGROUND */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">

                    <div className="absolute left-[-120px] top-[-100px] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/10 blur-[130px]" />

                    <div className="absolute right-[-120px] bottom-[-100px] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/10 blur-[130px]" />

                </div>

                <div className="relative z-10 mx-auto max-w-[1400px] px-5">

                    <div className="max-w-[1000px]">

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
                                Placement Assistance & Career Support
                            </span>

                        </div>

                        {/* TITLE */}
                        <h1
                            className="
                mt-8
                text-[46px]
                font-black
                leading-[0.95]
                tracking-[-0.05em]
                text-white
                md:text-[72px]
                lg:text-[92px]
              "
                        >
                           Networking, Cloud & Cyber Security Placements

                            <span className="mt-3 block text-[#D4AF37]">
                                Real Career Growth
                            </span>

                        </h1>

                        {/* DESCRIPTION */}
                        <p
                            className="
                mt-8
                max-w-[850px]
                text-[18px]
                leading-[1.9]
                text-white/60
              "
                        >
                            NG Cloud Networks focuses heavily on practical training,
                            certification preparation, interview mentoring and placement
                            support for networking, cloud and cybersecurity careers.
                            Our students are placed in leading IT companies across
                            enterprise networking, cloud infrastructure and security domains.
                        </p>

                        {/* STATS */}
                        <div className="mt-12 grid gap-5 md:grid-cols-4">

                            {[
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
                                    icon: Building2,
                                    value: "150+",
                                    label: "Hiring Companies",
                                },

                                {
                                    icon: TrendingUp,
                                    value: "92%",
                                    label: "Placement Support",
                                },
                            ].map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={index}
                                        className="
                      rounded-[28px]
                      border
                      border-white/10
                      bg-white/[0.03]
                      p-6
                      backdrop-blur-xl
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

                                        <h3 className="mt-6 text-[32px] font-black text-white">
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

                </div>

            </section>

            {/* PLACEMENTS */}
            <section className="relative overflow-hidden py-28">

                <div className="mx-auto max-w-[1400px] px-5">

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
                            Recently Placed

                            <span className="block text-[#D4AF37]">
                                Students
                            </span>

                        </h2>

                    </div>

                    {/* GRID */}
                    <div className="mt-20 grid gap-7 md:grid-cols-2 xl:grid-cols-3">

                        {placements.map((item, index) => (
                            <div
                                key={index}
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

                                    <div
                                        className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-[#D4AF37]/20
                      bg-[#D4AF37]/10
                      px-4
                      py-2
                      text-[12px]
                      font-semibold
                      tracking-[0.08em]
                      text-[#D4AF37]
                    "
                                    >
                                        Successfully Placed
                                    </div>

                                    <h3 className="mt-6 text-[28px] font-black text-white">
                                        {item.name}
                                    </h3>

                                    <p className="mt-2 text-[16px] text-[#D4AF37]">
                                        {item.role}
                                    </p>

                                    <div className="mt-8 space-y-4">

                                        <div
                                            className="
                        flex
                        items-center
                        justify-between
                        rounded-2xl
                        border
                        border-white/10
                        bg-black/20
                        px-5
                        py-4
                      "
                                        >

                                            <span className="text-white/60">
                                                Company
                                            </span>

                                            <span className="font-semibold text-white">
                                                {item.company}
                                            </span>

                                        </div>

                                        <div
                                            className="
                        flex
                        items-center
                        justify-between
                        rounded-2xl
                        border
                        border-white/10
                        bg-black/20
                        px-5
                        py-4
                      "
                                        >

                                            <span className="text-white/60">
                                                Package
                                            </span>

                                            <span className="font-semibold text-[#D4AF37]">
                                                {item.package}
                                            </span>

                                        </div>

                                        <div
                                            className="
                        rounded-2xl
                        border
                        border-white/10
                        bg-black/20
                        px-5
                        py-4
                      "
                                        >

                                            <p className="text-[13px] uppercase tracking-[0.16em] text-white/40">
                                                Course Completed
                                            </p>

                                            <p className="mt-2 text-[15px] font-medium text-white">
                                                {item.course}
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>

            </section>

            {/* TESTIMONIALS */}
            <section className="relative overflow-hidden py-28">

                <div className="mx-auto max-w-[1400px] px-5">

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
                            Student Success

                            <span className="block text-[#D4AF37]">
                                Testimonials
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

                                {/* STARS */}
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
                                        Successfully Placed Student
                                    </p>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>

            </section>

            {/* CTA */}
            <section className="relative overflow-hidden pb-28">

                <div className="mx-auto max-w-[1400px] px-5">

                    <div
                        className="
              relative
              overflow-hidden
              rounded-[40px]
              border
              border-[#D4AF37]/20
              bg-[#D4AF37]/5
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
                                    Start Your IT Career Journey
                                </span>

                            </div>

                            <h2
                                className="
                  mt-8
                  text-[42px]
                  font-black
                  leading-[1]
                  tracking-[-0.04em]
                  text-white
                  md:text-[68px]
                "
                            >
                                Build Your Career with

                                <span className="block text-[#D4AF37]">
                                    Practical IT Training
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
                                Join NG Cloud Networks and gain practical enterprise
                                networking, cloud and cybersecurity skills through
                                real-time labs, placement mentoring and certification-focused
                                training programs.
                            </p>
                            <div className="mt-8 flex flex-wrap gap-3">

  <Link href="/courses/ccna-training-hyderabad">
    CCNA Training Hyderabad
  </Link>

  <Link href="/courses/aws-training-hyderabad">
    AWS Cloud Training
  </Link>

  <Link href="/courses/azure-cloud-training-hyderabad">
    Azure Cloud Training
  </Link>

  <Link href="/courses/palo-alto-firewall-training-hyderabad">
    Palo Alto Training
  </Link>

  <Link href="/courses/cloud-security-training-hyderabad">
    Cloud Security Training
  </Link>

</div>

                            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                                <Link href="/contact"
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
                                    Book Free Demo

                                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />

                                </Link>

                                <Link href="/courses"
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
                                    Explore Courses
                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* FOOTER */}
            <Footer />

        </main>
    );
}