"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import {
  ArrowRight,
  Cloud,
  Network,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

const trainingTracks = [
  {
    title: "Networking",
    desc: "CCNA, CCNP Enterprise & Infrastructure",
    icon: Network,
    href: "/courses/ccna-training-hyderabad",
  },

  {
    title: "Cloud Computing",
    desc: "AWS & Azure Enterprise Cloud",
    icon: Cloud,
    href: "/courses/aws-training-hyderabad",
  },

  {
    title: "Cyber Security",
    desc: "Firewall Security & Protection",
    icon: ShieldCheck,
    href: "/courses/palo-alto-firewall-training-hyderabad",
  },
];

export default function CoursesHero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 lg:pt-40 lg:pb-24">

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* GLOW */}
        <div className="absolute left-[-120px] top-[-120px] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/10 blur-[130px]" />

        <div className="absolute right-[-120px] bottom-[-120px] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/10 blur-[130px]" />

        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />

      </div>

      {/* CONTAINER */}
      <div className="relative z-10 mx-auto max-w-[1450px] px-5">

        <div className="grid items-center gap-12 xl:grid-cols-[1.02fr_0.98fr]">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-[840px]"
          >

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

              <span className="text-sm font-medium tracking-wide text-[#f5e6b3]">
                Enterprise IT Training Programs
              </span>

            </div>

            {/* TITLE */}
            <h1
              className="
                mt-7
                text-[46px]
                font-black
                leading-[0.9]
                tracking-[-0.05em]
                text-white
                md:text-[72px]
                xl:text-[92px]
              "
            >
              Master

              <span
                className="
                  ml-3
                  bg-gradient-to-r
                  from-[#D4AF37]
                  via-[#f8dc82]
                  to-[#D4AF37]
                  bg-clip-text
                  text-transparent
                "
              >
                Cloud,
              </span>

              <span className="mt-2 block text-white">
                Networking &
              </span>

              <span className="block text-[#D4AF37]">
                Cyber Security
              </span>

            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                mt-7
                max-w-[760px]
                text-[18px]
                leading-[1.95]
                text-white/60
                lg:text-[19px]
              "
            >
              Explore premium enterprise-focused training programs
              designed with practical labs, certification mentorship,
              real-time infrastructure scenarios and placement-oriented
              learning paths.
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-wrap items-center gap-4">

              {/* PRIMARY */}
              <Link
                href="/courses"
                className="
                  group
                  flex
                  h-[58px]
                  items-center
                  justify-center
                  gap-2.5
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

                <ArrowRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />

              </Link>

              {/* SECONDARY */}
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
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-[#D4AF37]/30
                  hover:bg-[#D4AF37]/[0.03]
                  hover:text-[#D4AF37]
                "
              >
                Book Free Demo
              </Link>

            </div>

            {/* STATS */}
            <div className="mt-14 grid max-w-[640px] grid-cols-3 gap-5">

              {[
                {
                  value: "10+",
                  label: "Enterprise Courses",
                },
                {
                  value: "5000+",
                  label: "Students Trained",
                },
                {
                  value: "1000+",
                  label: "Placements",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="
                    rounded-[26px]
                    border
                    border-white/10
                    bg-white/[0.03]
                    px-5
                    py-5
                    backdrop-blur-xl
                  "
                >

                  <h3
                    className="
                      text-[34px]
                      font-black
                      leading-none
                      text-[#D4AF37]
                    "
                  >
                    {item.value}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-white/50">
                    {item.label}
                  </p>

                </div>
              ))}

            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >

            {/* GLOW */}
            <div className="absolute inset-0 bg-[#D4AF37]/10 blur-[90px]" />

            {/* CARD */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[36px]
                border
                border-white/10
                bg-white/[0.03]
                p-7
                backdrop-blur-2xl
              "
            >

              {/* TOP */}
              <div className="flex items-center justify-between">

                <div>

                  <p
                    className="
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-[0.28em]
                      text-[#D4AF37]
                    "
                  >
                    Career Domains
                  </p>

                  <h3
                    className="
                      mt-3
                      text-[34px]
                      font-black
                      leading-none
                      tracking-[-0.03em]
                      text-white
                    "
                  >
                    Training Tracks
                  </h3>

                </div>

              </div>

              {/* TRACKS */}
              <div className="mt-8 space-y-4">

                {trainingTracks.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={index}
                      href={item.href}
                      className="
                        group
                        relative
                        flex
                        items-start
                        gap-5
                        overflow-hidden
                        rounded-[28px]
                        border
                        border-white/10
                        bg-black/20
                        p-5
                        transition-all
                        duration-300
                        hover:border-[#D4AF37]/30
                        hover:bg-[#D4AF37]/[0.03]
                      "
                    >

                      {/* LIGHT */}
                      <div
                        className="
                          absolute
                          inset-0
                          opacity-0
                          transition-opacity
                          duration-500
                          group-hover:opacity-100
                          bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.10),transparent_60%)]
                        "
                      />

                      {/* ICON */}
                      <div
                        className="
                          relative
                          z-10
                          flex
                          h-[62px]
                          w-[62px]
                          shrink-0
                          items-center
                          justify-center
                          rounded-2xl
                          border
                          border-[#D4AF37]/20
                          bg-[#D4AF37]/10
                        "
                      >

                        <Icon className="h-7 w-7 text-[#D4AF37]" />

                      </div>

                      {/* CONTENT */}
                      <div className="relative z-10 flex-1">

                        <div className="flex items-start justify-between gap-4">

                          <div>

                            <h4
                              className="
                                text-[22px]
                                font-bold
                                tracking-[-0.03em]
                                text-white
                              "
                            >
                              {item.title}
                            </h4>

                            <p
                              className="
                                mt-2
                                text-[14px]
                                leading-[1.8]
                                text-white/55
                              "
                            >
                              {item.desc}
                            </p>

                          </div>

                          <div
                            className="
                              flex
                              h-10
                              w-10
                              shrink-0
                              items-center
                              justify-center
                              rounded-full
                              border
                              border-white/10
                              bg-white/[0.03]
                              opacity-0
                              translate-x-2
                              transition-all
                              duration-300
                              group-hover:translate-x-0
                              group-hover:opacity-100
                            "
                          >

                            <ArrowUpRight className="h-4 w-4 text-[#D4AF37]" />

                          </div>

                        </div>

                      </div>

                    </Link>
                  );
                })}

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}