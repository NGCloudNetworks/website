"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import {
  Cloud,
  Shield,
  Network,
  Briefcase,
  ArrowUpRight,
  BadgeCheck,
} from "lucide-react";

const tracks = [
  {
    title: "Cloud Engineer",
    description:
      "Master AWS, Azure, cloud infrastructure and enterprise deployment technologies.",
    icon: Cloud,
    category: "Cloud Computing",
    href: "/courses/aws-training-hyderabad",
  },

  {
    title: "Network Engineer",
    description:
      "Build expertise in routing, switching and enterprise networking infrastructure.",
    icon: Network,
    category: "Enterprise Networking",
    href: "/courses/ccna-training-hyderabad",
  },

  {
    title: "Cloud Security Engineer",
    description:
      "Learn firewall security, threat prevention and infrastructure protection skills.",
    icon: Shield,
    category: "Cyber Security",
    href: "/courses/palo-alto-firewall-training-hyderabad",
  },

  {
    title: "NOC Engineer",
    description:
      "Develop monitoring, troubleshooting and infrastructure operations expertise.",
    icon: Briefcase,
    category: "Infrastructure Operations",
    href: "/placements",
  },
];

export default function CareerTracks() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-28">

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute top-[-120px] right-[-120px] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/5 blur-[120px]" />

        <div className="absolute bottom-[-120px] left-[-120px] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/5 blur-[120px]" />

      </div>

      {/* CONTAINER */}
      <div className="relative z-10 mx-auto max-w-[1450px] px-5">

        {/* HEADER */}
        <div className="mx-auto max-w-[940px] text-center">

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
              Career-Focused Learning Paths
            </span>

          </div>

          {/* TITLE */}
          <h2
            className="
              mt-7
              text-[42px]
              font-black
              leading-[0.95]
              tracking-[-0.05em]
              text-white
              md:text-[60px]
              xl:text-[72px]
            "
          >
            Build Your Career in

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
              Cloud, Networking
            </span>

            <span className="block text-white">
              & Enterprise Security
            </span>

          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mx-auto
              mt-7
              max-w-[760px]
              text-[18px]
              leading-[1.95]
              text-white/60
            "
          >
            Industry-focused training programs designed for
            real-world infrastructure, cloud and cyber security
            careers with practical implementation experience.
          </p>

        </div>

        {/* GRID */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {tracks.map((track, index) => {
            const Icon = track.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
              >

                <Link
                  href={track.href}
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

                      {track.category}

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
                      {track.title}
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
                      {track.description}
                    </p>

                    {/* LINK */}
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

                      Explore Path

                      <ArrowUpRight className="h-4 w-4" />

                    </div>

                  </div>

                </Link>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}