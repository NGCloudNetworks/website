import Link from "next/link";

import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  GraduationCap,
} from "lucide-react";

import { courses } from "@/data/courses";

export default function AcademyHero() {

  return (

    <section className="relative overflow-hidden">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-[-220px] top-[-120px] h-[520px] w-[520px] rounded-full bg-[#D4AF37]/10 blur-[180px]" />

        <div className="absolute right-[-240px] bottom-[-120px] h-[520px] w-[520px] rounded-full bg-[#D4AF37]/8 blur-[180px]" />

      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1450px] items-center px-5 py-28">

        <div className="grid items-center gap-20 lg:grid-cols-[1.05fr_0.95fr]">

          {/* Left Content */}

          <div>

            {/* Badge */}

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

              <GraduationCap className="h-4 w-4" />

              Enterprise IT Training Institute in Hyderabad

            </div>

            {/* Heading */}

            <h1
              className="
                mt-8
                text-[46px]
                font-black
                leading-[0.92]
                tracking-[-0.05em]
                text-white
                md:text-[72px]
              "
            >
              Networking, Cloud &
              <span
                className="
                  mt-2
                  block
                  bg-gradient-to-r
                  from-[#D4AF37]
                  via-[#F5E6B3]
                  to-[#D4AF37]
                  bg-clip-text
                  text-transparent
                "
              >
                Cyber Security
              </span>

              <span className="mt-2 block text-white">
                Training Institute
              </span>

              <span
                className="
                  mt-2
                  block
                  text-[32px]
                  font-bold
                  tracking-normal
                  text-white/70
                  md:text-[42px]
                "
              >
                in Hyderabad
              </span>

            </h1>

            {/* Description */}

            <p
              className="
                mt-10
                max-w-[760px]
                text-[18px]
                leading-[2]
                text-white/70
              "
            >
              Build practical skills in
              <strong className="font-semibold text-white">
                {" "}Enterprise Networking
              </strong>,
              <strong className="font-semibold text-white">
                {" "}Cloud Computing
              </strong>
              {" "}and
              <strong className="font-semibold text-white">
                {" "}Cyber Security
              </strong>
              {" "}through instructor-led training, enterprise lab
              environments, certification guidance and placement-focused
              learning. Explore industry-recognized programs including
              Cisco, AWS, Microsoft Azure, Palo Alto Networks,
              Fortinet, Cisco SD-WAN and F5 technologies designed
              to prepare students and working professionals for
              successful IT careers.

            </p>

            {/* Trust Badges */}

            <div className="mt-10 flex flex-wrap gap-4">

              <TrustBadge text="Enterprise Trainers" />

              <TrustBadge text="Hands-on Practical Labs" />

              <TrustBadge text="Placement Assistance" />

              <TrustBadge text="Certification Guidance" />

              <TrustBadge text="Hybrid Learning" />

            </div>

            {/* CTA */}

            <div className="mt-12 flex flex-col gap-4 sm:flex-row">

              <Link
                href="#featured-courses"
                className="
                  inline-flex
                  h-[60px]
                  items-center
                  justify-center
                  gap-2
                  rounded-2xl
                  bg-[#D4AF37]
                  px-9
                  text-[16px]
                  font-semibold
                  text-black
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_12px_40px_rgba(212,175,55,.30)]
                "
              >

                Explore Courses

                <ArrowRight className="h-5 w-5" />

              </Link>

              <Link
                href="/contact"
                className="
                  inline-flex
                  h-[60px]
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-9
                  text-[16px]
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:border-[#D4AF37]/40
                  hover:text-[#D4AF37]
                "
              >
                Book Free Demo
              </Link>

            </div>

            {/* Academy Statistics */}

            <div className="mt-16 grid grid-cols-2 gap-5 lg:grid-cols-4">

              <HeroStat
                value="1500+"
                label="Students"
              />

              <HeroStat
                value="14+"
                label="Years Experience"
              />

              <HeroStat
                value={`${courses.length}+`}
                label="Professional Courses"
              />

              <HeroStat
                value="4.9★"
                label="Student Rating"
              />

            </div>

          </div>
                    {/* Right Content */}

          <div className="relative">

            {/* Main Card */}

            <div
              className="
                relative
                overflow-hidden
                rounded-[36px]
                border
                border-white/10
                bg-[#0B0B0B]
                p-10
                shadow-[0_30px_80px_rgba(0,0,0,.45)]
              "
            >

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,.12),transparent_65%)]" />

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
                    text-sm
                    font-semibold
                    text-[#D4AF37]
                  "
                >

                  <BookOpen className="h-4 w-4" />

                  Learning Ecosystem

                </div>

                <h2
                  className="
                    mt-8
                    text-[40px]
                    font-black
                    leading-[1]
                    tracking-[-0.04em]
                    text-white
                  "
                >
                  Learn Today's
                  <span className="block text-[#D4AF37]">
                    Most In-Demand Technologies
                  </span>
                </h2>

                <p
                  className="
                    mt-8
                    text-[17px]
                    leading-[2]
                    text-white/70
                  "
                >
                  Our academy provides practical, career-focused
                  training across networking, cloud computing,
                  cybersecurity and enterprise infrastructure.
                  Every program is designed around real-world
                  implementation, industry best practices and
                  professional growth.
                </p>

                {/* Technologies */}

                <div className="mt-10 grid grid-cols-2 gap-4">

                  <TechnologyCard name="Cisco CCNA" />

                  <TechnologyCard name="CCNP Enterprise" />

                  <TechnologyCard name="Cisco SD-WAN" />

                  <TechnologyCard name="AWS Cloud" />

                  <TechnologyCard name="Microsoft Azure" />

                  <TechnologyCard name="Palo Alto" />

                  <TechnologyCard name="Fortinet" />

                  <TechnologyCard name="F5 BIG-IP" />

                </div>

                {/* Bottom Trust */}

                <div
                  className="
                    mt-10
                    rounded-3xl
                    border
                    border-[#D4AF37]/20
                    bg-[#D4AF37]/5
                    p-6
                  "
                >

                  <div className="flex items-center gap-4">

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

                      <BriefcaseBusiness
                        className="h-7 w-7 text-[#D4AF37]"
                      />

                    </div>

                    <div>

                      <h3
                        className="
                          text-[20px]
                          font-bold
                          text-white
                        "
                      >
                        Career-Focused Training
                      </h3>

                      <p
                        className="
                          mt-2
                          text-[15px]
                          leading-[1.8]
                          text-white/65
                        "
                      >
                        Every course combines practical labs,
                        certification preparation, interview
                        mentoring and placement guidance to help
                        students become job-ready professionals.
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}

/* ---------- Hero Statistics ---------- */

function HeroStat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {

  return (

    <div
      className="
        rounded-2xl
        border
        border-white/10
        bg-white/[0.03]
        p-5
        text-center
        backdrop-blur-xl
      "
    >

      <h3
        className="
          text-[30px]
          font-black
          text-[#D4AF37]
        "
      >
        {value}
      </h3>

      <p
        className="
          mt-2
          text-[13px]
          font-medium
          uppercase
          tracking-wide
          text-white/60
        "
      >
        {label}
      </p>

    </div>

  );

}

/* ---------- Trust Badge ---------- */

function TrustBadge({
  text,
}: {
  text: string;
}) {

  return (

    <div
      className="
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        border-white/10
        bg-white/[0.03]
        px-4
        py-2.5
      "
    >

      <CheckCircle2
        className="h-4 w-4 text-[#D4AF37]"
      />

      <span
        className="
          text-[14px]
          font-medium
          text-white/75
        "
      >
        {text}
      </span>

    </div>

  );

}

/* ---------- Technology Card ---------- */

function TechnologyCard({
  name,
}: {
  name: string;
}) {

  return (

    <div
      className="
        rounded-2xl
        border
        border-white/10
        bg-white/[0.03]
        px-5
        py-4
        text-center
        transition-all
        duration-300
        hover:border-[#D4AF37]/30
        hover:-translate-y-1
      "
    >

      <span
        className="
          text-[15px]
          font-semibold
          text-white
        "
      >
        {name}
      </span>

    </div>

  );

}