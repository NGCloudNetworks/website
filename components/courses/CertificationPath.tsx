"use client";

import {
  BadgeCheck,
  ShieldCheck,
  Cloud,
  Network,
} from "lucide-react";

const certifications = [
  {
    title: "Cisco Certifications",
    description:
      "Prepare for globally recognized Cisco networking certifications including CCNA and CCNP Enterprise.",
    icon: Network,
  },
  {
    title: "AWS Certifications",
    description:
      "Build cloud expertise with AWS Associate-level architecture and cloud implementation training.",
    icon: Cloud,
  },
  {
    title: "Azure Certifications",
    description:
      "Learn Microsoft Azure cloud administration, deployment and enterprise cloud infrastructure.",
    icon: BadgeCheck,
  },
  {
    title: "Security Certifications",
    description:
      "Develop practical firewall and cloud security skills with enterprise-focused cybersecurity training.",
    icon: ShieldCheck,
  },
];

export default function CertificationPath() {
  return (
    <section className="relative overflow-hidden py-28">

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute right-[-120px] bottom-[-120px] h-[420px] w-[420px] bg-[#D4AF37]/5 blur-[130px]" />

      </div>

      {/* CONTAINER */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-5">

        {/* HEADER */}
        <div className="mx-auto max-w-[900px] text-center">

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
              Certification Programs
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
              md:text-[58px]
              lg:text-[72px]
            "
          >
            Certification-Focused

            <span className="block text-[#D4AF37]">
              Enterprise Training
            </span>

          </h2>

          <p
            className="
              mx-auto
              mt-7
              max-w-[760px]
              text-[19px]
              leading-[1.8]
              text-white/60
            "
          >
            Gain practical skills and certification preparation
            for globally recognized cloud, networking and
            cybersecurity technologies.
          </p>

        </div>

        {/* GRID */}
        <div className="mt-20 grid gap-7 md:grid-cols-2 xl:grid-cols-4">

          {certifications.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-8
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-[#D4AF37]/30
                "
              >

                {/* HOVER */}
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

                {/* ICON */}
                <div
                  className="
                    relative
                    flex
                    h-[74px]
                    w-[74px]
                    items-center
                    justify-center
                    rounded-[24px]
                    border
                    border-[#D4AF37]/20
                    bg-[#D4AF37]/10
                  "
                >

                  <Icon className="h-8 w-8 text-[#D4AF37]" />

                </div>

                {/* CONTENT */}
                <div className="relative mt-8">

                  <h3
                    className="
                      text-[28px]
                      font-bold
                      leading-[1.15]
                      tracking-[-0.03em]
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
                      text-white/55
                    "
                  >
                    {item.description}
                  </p>

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}