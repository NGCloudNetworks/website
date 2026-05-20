"use client";

import {
  UserPlus,
  MonitorSmartphone,
  FolderKanban,
  BadgeCheck,
  BriefcaseBusiness,
} from "lucide-react";

const steps = [
  {
    title: "Enroll in Your Program",
    description:
      "Choose your preferred networking, cloud or cybersecurity training path with guidance from our mentors.",
    icon: UserPlus,
  },
  {
    title: "Hands-On Lab Training",
    description:
      "Practice real-world enterprise implementations through practical labs and live infrastructure environments.",
    icon: MonitorSmartphone,
  },
  {
    title: "Work on Real Projects",
    description:
      "Build practical experience through enterprise scenarios, troubleshooting and implementation-focused projects.",
    icon: FolderKanban,
  },
  {
    title: "Certification Preparation",
    description:
      "Get structured guidance and exam-focused preparation for globally recognized IT certifications.",
    icon: BadgeCheck,
  },
  {
    title: "Placement & Career Support",
    description:
      "Prepare for interviews with resume optimization, mock interviews and career mentorship programs.",
    icon: BriefcaseBusiness,
  },
];

export default function LearningProcess() {
  return (
    <section className="relative overflow-hidden py-28">

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute left-[-120px] top-[0px] h-[420px] w-[420px] bg-[#D4AF37]/5 blur-[130px]" />

      </div>

      {/* CONTAINER */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-5">

        {/* HEADER */}
        <div className="mx-auto max-w-[900px] text-center">

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
            "
          >

            <div className="h-2 w-2 rounded-full bg-[#D4AF37]" />

            <span className="text-sm text-[#f5e6b3]">
              Training Process
            </span>

          </div>

          {/* TITLE */}
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
            Your Journey to

            <span className="block text-[#D4AF37]">
              Becoming Industry Ready
            </span>

          </h2>

          {/* DESCRIPTION */}
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
            Our structured learning approach combines
            enterprise training, practical labs, certification
            preparation and placement-focused mentorship.
          </p>

        </div>

        {/* STEPS */}
        <div className="relative mt-24">

          {/* LINE */}
          <div
            className="
              absolute
              left-1/2
              top-0
              hidden
              h-full
              w-px
              -translate-x-1/2
              bg-gradient-to-b
              from-transparent
              via-[#D4AF37]/20
              to-transparent
              lg:block
            "
          />

          <div className="space-y-10">

            {steps.map((step, index) => {
              const Icon = step.icon;

              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`
                    flex
                    items-center
                    ${
                      isEven
                        ? "lg:justify-start"
                        : "lg:justify-end"
                    }
                  `}
                >

                  <div
                    className="
                      relative
                      w-full
                      lg:w-[48%]
                    "
                  >

                    {/* NUMBER */}
                    <div
                      className="
                        absolute
                        -top-5
                        left-8
                        z-20
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        bg-[#D4AF37]
                        text-sm
                        font-bold
                        text-black
                      "
                    >
                      0{index + 1}
                    </div>

                    {/* CARD */}
                    <div
                      className="
                        group
                        relative
                        overflow-hidden
                        rounded-[34px]
                        border
                        border-white/10
                        bg-white/[0.03]
                        p-8
                        backdrop-blur-xl
                        transition-all
                        duration-500
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

                      {/* CONTENT */}
                      <div className="relative">

                        {/* ICON */}
                        <div
                          className="
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

                        {/* TITLE */}
                        <h3
                          className="
                            mt-8
                            text-[30px]
                            font-bold
                            leading-[1.15]
                            tracking-[-0.03em]
                            text-white
                          "
                        >
                          {step.title}
                        </h3>

                        {/* DESCRIPTION */}
                        <p
                          className="
                            mt-5
                            text-[16px]
                            leading-[1.9]
                            text-white/55
                          "
                        >
                          {step.description}
                        </p>

                      </div>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}