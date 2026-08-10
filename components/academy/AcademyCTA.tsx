import Link from "next/link";

import {
  ArrowRight,
  BriefcaseBusiness,
  GraduationCap,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const highlights = [
  {
    title: "Personalized Career Guidance",
    description:
      "Receive expert guidance to choose the right learning path based on your background, experience and long-term career goals.",
    icon: GraduationCap,
  },

  {
    title: "Enterprise Practical Training",
    description:
      "Learn through live instructor-led sessions, enterprise labs, real-world projects and implementation-based exercises.",
    icon: Sparkles,
  },

  {
    title: "100% Placement Assistance",
    description:
      "Build interview confidence with resume support, LinkedIn optimization, mock interviews and continuous career mentoring.",
    icon: BriefcaseBusiness,
  },

  {
    title: "Flexible Learning Options",
    description:
      "Choose classroom, live online or hybrid learning with weekday, weekend and working-professional friendly batches.",
    icon: ShieldCheck,
  },
];

export default function AcademyCTA() {

  return (

    <section className="relative overflow-hidden py-12">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-[-220px] top-[-120px] h-[500px] w-[500px] rounded-full bg-[#D4AF37]/10 blur-[180px]" />

        <div className="absolute right-[-220px] bottom-[-120px] h-[500px] w-[500px] rounded-full bg-[#D4AF37]/8 blur-[180px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-[1450px] px-5">

        <div
          className="
            overflow-hidden
            rounded-[42px]
            border
            border-[#D4AF37]/15
            bg-gradient-to-br
            from-[#D4AF37]/10
            via-white/[0.03]
            to-transparent
            p-10
            lg:p-16
          "
        >

          {/* Heading */}

          <div className="mx-auto max-w-[980px] text-center">

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
                py-2
                text-sm
                font-semibold
                tracking-wide
                text-[#D4AF37]
              "
            >

              <Sparkles className="h-4 w-4" />

              Start Your Learning Journey

            </div>

            <h2
              className="
                mt-8
                text-[42px]
                font-black
                leading-[0.95]
                tracking-[-0.05em]
                text-white
                md:text-[68px]
              "
            >
              Start Building Your
              <span className="block text-[#D4AF37]">
                IT Career with Confidence
              </span>
            </h2>

            <p
              className="
                mx-auto
                mt-8
                max-w-[900px]
                text-[18px]
                leading-[2]
                text-white/72
              "
            >
              Whether you're beginning your first IT course, planning a
              career transition or upgrading your technical expertise,
              our training experts will help you choose the right
              learning path based on your current skills, career goals
              and industry demand. Build practical experience through
              enterprise-focused training, real-world labs and dedicated
              career support designed to prepare you for long-term
              professional success.
            </p>

          </div>
                    {/* CTA Buttons */}

          <div className="mt-20 flex flex-col items-center justify-center gap-5 sm:flex-row">

            <Link
              href="/courses"
              className="
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-full
                bg-[#D4AF37]
                px-9
                py-4
                text-[16px]
                font-bold
                text-black
                transition-all
                duration-300
                hover:scale-105
                hover:bg-[#E8C252]
              "
            >
              Explore All Courses

              <ArrowRight className="h-5 w-5" />

            </Link>

            <Link
              href="/contact"
              className="
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-full
                border
                border-[#D4AF37]/30
                bg-white/[0.03]
                px-9
                py-4
                text-[16px]
                font-semibold
                text-white
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-[#D4AF37]
                hover:bg-[#D4AF37]/10
              "
            >

              <MessageCircle className="h-5 w-5 text-[#D4AF37]" />

              Book a Free Career Consultation

            </Link>

          </div>

          {/* Trust Strip */}

          <div
            className="
              mt-20
              grid
              gap-5
              rounded-[30px]
              border
              border-white/10
              bg-black/20
              p-8
              md:grid-cols-2
              xl:grid-cols-4
            "
          >

            <TrustPoint text="Live Instructor-Led Training" />

            <TrustPoint text="Enterprise Practical Labs" />

            <TrustPoint text="Career Mentoring & Guidance" />

            <TrustPoint text="100% Placement Assistance" />

          </div>

          {/* Closing */}

          <div className="mx-auto mt-16 max-w-[920px] text-center">

            <h3
              className="
                text-[34px]
                font-black
                leading-tight
                text-white
              "
            >
              Not Sure Which Course
              <span className="block text-[#D4AF37]">
                Is Right for You?
              </span>
            </h3>

            <p
              className="
                mt-6
                text-[18px]
                leading-[2]
                text-white/70
              "
            >
              Speak with our training experts to receive personalized
              guidance based on your educational background, current
              experience and long-term career goals. We'll help you
              choose the most suitable learning path so you can build
              practical skills with confidence and move toward your
              desired IT career.
            </p>

          </div>

        </div>

      </div>

    </section>

  );

}

function TrustPoint({
  text,
}: {
  text: string;
}) {

  return (

    <div
      className="
        flex
        items-center
        gap-4
      "
    >

      <div
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          bg-[#D4AF37]/10
        "
      >

        <ShieldCheck
          className="h-5 w-5 text-[#D4AF37]"
        />

      </div>

      <p
        className="
          text-[16px]
          font-medium
          text-white/80
        "
      >
        {text}
      </p>

    </div>

  );

}