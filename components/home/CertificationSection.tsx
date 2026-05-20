"use client";

import Link from "next/link";

import {
  ShieldCheck,
  Cloud,
  Network,
  Server,
  Lock,
  Globe,
  ArrowUpRight,
  BadgeCheck,
  Users,
} from "lucide-react";

const certifications = [
  {
    title: "CCNA Routing & Switching",
    slug: "/courses/ccna-training-hyderabad",
    description:
      "Build strong networking fundamentals with routing, switching and enterprise infrastructure labs.",
    icon: Network,
    category: "Networking",
    students: "5000+",
  },

  {
    title: "CCNP Enterprise",
    slug: "/courses/ccnp-enterprise-training-hyderabad",
    description:
      "Master advanced enterprise routing, BGP, automation and scalable infrastructure technologies.",
    icon: Server,
    category: "Advanced Networking",
    students: "2500+",
  },

  {
    title: "AWS Cloud",
    slug: "/courses/aws-training-hyderabad",
    description:
      "Gain practical expertise in AWS cloud architecture, deployment and enterprise operations.",
    icon: Cloud,
    category: "Cloud Computing",
    students: "3000+",
  },

  {
    title: "Azure Cloud",
    slug: "/courses/azure-cloud-training-hyderabad",
    description:
      "Learn Azure administration, cloud networking and enterprise infrastructure integration.",
    icon: Globe,
    category: "Cloud Infrastructure",
    students: "1800+",
  },

  {
    title: "Palo Alto & Fortigate",
    slug: "/courses/palo-alto-firewall-training-hyderabad",
    description:
      "Work with enterprise firewall security, VPNs, threat prevention and infrastructure protection.",
    icon: ShieldCheck,
    category: "Cyber Security",
    students: "2200+",
  },

  {
    title: "Cloud Security",
    slug: "/courses",
    description:
      "Develop advanced cloud and infrastructure security skills across enterprise environments.",
    icon: Lock,
    category: "Enterprise Security",
    students: "1500+",
  },
];

export default function CertificationSection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-28">

      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <div className="absolute top-[-120px] left-[-120px] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/5 blur-[120px]" />

        <div className="absolute bottom-[-120px] right-[-120px] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/5 blur-[120px]" />

      </div>

      {/* CONTAINER */}
      <div className="relative z-10 mx-auto max-w-[1450px] px-5">

        {/* HEADER */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">

          {/* LEFT */}
          <div className="max-w-[860px]">

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

              <span className="text-sm font-medium text-[#f5e6b3]">
                Enterprise Certification Programs
              </span>

            </div>

            {/* TITLE */}
            <h2
              className="
                mt-7
                text-[42px]
                font-black
                leading-[0.94]
                tracking-[-0.05em]
                text-white
                md:text-[60px]
                xl:text-[72px]
              "
            >
              Build Practical Skills in

              <span
                className="
                  mt-2
                  block
                  bg-gradient-to-r
                  from-[#D4AF37]
                  via-[#f7d977]
                  to-[#D4AF37]
                  bg-clip-text
                  text-transparent
                "
              >
                Networking, Cloud
              </span>

              <span className="block text-white">
                & Enterprise Security
              </span>

            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                mt-7
                max-w-[760px]
                text-[18px]
                leading-[1.95]
                text-white/60
              "
            >
              Learn enterprise networking, cloud infrastructure,
              cyber security and firewall technologies through
              real-time implementation, practical labs and
              placement-oriented mentorship.
            </p>

          </div>

          {/* RIGHT CTA */}
          <div className="flex flex-wrap gap-4">

            <Link
              href="/courses"
              className="
                flex
                h-[56px]
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

            <Link
              href="/contact"
              className="
                flex
                h-[56px]
                items-center
                justify-center
                rounded-full
                bg-[#D4AF37]
                px-8
                text-[15px]
                font-semibold
                text-black
                transition-all
                duration-300
                hover:scale-[1.02]
                hover:shadow-[0_0_35px_rgba(212,175,55,0.30)]
              "
            >
              Book Free Demo
            </Link>

          </div>

        </div>

        {/* CARDS */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {certifications.map((item, index) => {
            const Icon = item.icon;

            return (
              <Link
                key={index}
                href={item.slug}
                className="
                  group
                  relative
                  flex
                  h-full
                  flex-col
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-7
                  backdrop-blur-2xl
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-[#D4AF37]/30
                  hover:bg-[#D4AF37]/[0.04]
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

                {/* TOP */}
                <div className="relative z-10 flex items-start justify-between">

                  {/* ICON */}
                  <div
                    className="
                      flex
                      h-[68px]
                      w-[68px]
                      items-center
                      justify-center
                      rounded-[20px]
                      border
                      border-[#D4AF37]/20
                      bg-[#D4AF37]/10
                    "
                  >

                    <Icon className="h-7 w-7 text-[#D4AF37]" />

                  </div>

                  {/* ARROW */}
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
                      transition-all
                      duration-500
                      group-hover:opacity-100
                      group-hover:translate-x-0
                      translate-x-2
                    "
                  >

                    <ArrowUpRight className="h-5 w-5 text-[#D4AF37]" />

                  </div>

                </div>

                {/* CONTENT */}
                <div className="relative z-10 mt-7 flex flex-1 flex-col">

                  {/* CATEGORY */}
                  <div
                    className="
                      inline-flex
                      w-fit
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-[#D4AF37]/20
                      bg-[#D4AF37]/10
                      px-3
                      py-1.5
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-[0.12em]
                      text-[#D4AF37]
                    "
                  >

                    <BadgeCheck className="h-3.5 w-3.5" />

                    {item.category}

                  </div>

                  {/* TITLE */}
                  <h3
                    className="
                      mt-5
                      text-[28px]
                      font-black
                      leading-[1.08]
                      tracking-[-0.03em]
                      text-white
                    "
                  >
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p
                    className="
                      mt-5
                      flex-1
                      text-[15px]
                      leading-[1.9]
                      text-white/55
                    "
                  >
                    {item.description}
                  </p>

                  {/* STATS */}
                  <div className="mt-7 flex items-center gap-3">

                    <div
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-white/10
                        bg-black/20
                        px-4
                        py-2
                      "
                    >

                      <Users className="h-4 w-4 text-[#D4AF37]" />

                      <span className="text-[13px] text-white/70">
                        {item.students} Learners
                      </span>

                    </div>

                  </div>

                  {/* CTA */}
                  <div
                    className="
                      mt-7
                      inline-flex
                      items-center
                      gap-2
                      text-[15px]
                      font-semibold
                      text-[#D4AF37]
                      transition-all
                      duration-300
                      group-hover:gap-3
                    "
                  >

                    Learn More

                    <ArrowUpRight className="h-4 w-4" />

                  </div>

                </div>

              </Link>
            );
          })}

        </div>

      </div>

    </section>
  );
}