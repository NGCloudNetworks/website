import {
  ArrowUpRight,
  Briefcase,
  CheckCircle2,
  Cloud,
  Network,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

import { Course } from "@/types/course";

type Props = {
  course: Course;
};

export default function WhyLearn({
  course,
}: Props) {
  return (
    <section className="relative overflow-hidden py-12">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute left-[-180px] top-[-120px] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/8 blur-[140px]" />

        <div className="absolute right-[-180px] bottom-[-120px] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/8 blur-[140px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-[1450px] px-5">

        {/* Heading */}

        <div className="mx-auto max-w-[920px] text-center">

          <div
            className="
              inline-flex
              rounded-full
              border
              border-[#D4AF37]/20
              bg-[#D4AF37]/10
              px-5
              py-2
              text-sm
              font-semibold
              tracking-wide
              text-[#D4AF37]
            "
          >
            Why Learn This Course?
          </div>

          <h2
            className="
              mt-8
              text-[42px]
              font-black
              leading-[0.95]
              tracking-[-0.05em]
              text-white
              md:text-[64px]
            "
          >
            {course.whyLearn.title}
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-[860px]
              text-[18px]
              leading-[2]
              text-white/65
            "
          >
            {course.whyLearn.description}
          </p>

        </div>

        {/* Content */}

        <div className="mt-20 grid items-center gap-14 lg:grid-cols-[1fr_1.05fr]">

          {/* Left */}

          <div
            className="
              relative
              overflow-hidden
              rounded-[34px]
              border
              border-[#D4AF37]/15
              bg-[#D4AF37]/[0.05]
              p-10
            "
          >

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.12),transparent_65%)]" />

            <div className="relative z-10">

              <div
                className="
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-3xl
                  bg-[#D4AF37]/10
                "
              >
                <TrendingUp className="h-10 w-10 text-[#D4AF37]" />
              </div>

              <h3
                className="
                  mt-8
                  text-[38px]
                  font-black
                  leading-[1]
                  tracking-[-0.04em]
                  text-white
                "
              >
                Build Skills That
                <span className="block text-[#D4AF37]">
                  Employers Need
                </span>
              </h3>

              <p
                className="
                  mt-8
                  text-[17px]
                  leading-[2]
                  text-white/65
                "
              >
                Modern organizations rely on skilled professionals
                who understand networking, cloud computing,
                infrastructure and cyber security. This course
                prepares you with practical implementation skills
                instead of only theoretical concepts.
              </p>

              {/* Career Highlights */}

              <div className="mt-10 grid gap-5 sm:grid-cols-2">

                <CareerMiniCard
                  icon={<Network className="h-7 w-7 text-[#D4AF37]" />}
                  title="Enterprise Networking"
                />

                <CareerMiniCard
                  icon={<Cloud className="h-7 w-7 text-[#D4AF37]" />}
                  title="Cloud Foundation"
                />

                <CareerMiniCard
                  icon={<ShieldCheck className="h-7 w-7 text-[#D4AF37]" />}
                  title="Cyber Security"
                />

                <CareerMiniCard
                  icon={<Briefcase className="h-7 w-7 text-[#D4AF37]" />}
                  title="Career Growth"
                />

              </div>

            </div>

          </div>

          {/* Right */}

          <div
            className="
              rounded-[34px]
              border
              border-white/10
              bg-white/[0.03]
              p-10
              backdrop-blur-2xl
            "
          >

            <h3
              className="
                text-[30px]
                font-black
                tracking-[-0.03em]
                text-white
              "
            >
              Benefits You'll Gain
            </h3>

            <div className="mt-10 space-y-6">

              {course.whyLearn.points.map((point, index) => (

                <div
                  key={index}
                  className="
                    flex
                    items-start
                    gap-4
                  "
                >

                  <div
                    className="
                      mt-1
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-[#D4AF37]/10
                    "
                  >

                    <CheckCircle2 className="h-5 w-5 text-[#D4AF37]" />

                  </div>

                  <p
                    className="
                      flex-1
                      text-[17px]
                      leading-[1.9]
                      text-white/72
                    "
                  >
                    {point}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

function CareerMiniCard({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-white/10
        bg-black/20
        p-5
      "
    >

      <div
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-xl
          bg-[#D4AF37]/10
        "
      >
        {icon}
      </div>

      <h4
        className="
          mt-5
          text-[17px]
          font-semibold
          text-white
        "
      >
        {title}
      </h4>

    </div>
  );
}