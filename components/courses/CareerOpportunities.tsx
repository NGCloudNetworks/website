import {
  BriefcaseBusiness,
  TrendingUp,
} from "lucide-react";

import { Course } from "@/types/course";

type Props = {
  course: Course;
};

export default function CareerOpportunities({
  course,
}: Props) {

  return (

    <section
      id="career-opportunities"
      className="relative py-24"
    >

      {/* Background */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute left-[-180px] top-[-120px] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/8 blur-[180px]" />

        <div className="absolute right-[-180px] bottom-[-120px] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/8 blur-[180px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-5">

        <div className="max-w text-center">

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

            <BriefcaseBusiness className="h-4 w-4" />

            Career Opportunities

          </div>

          <h2
            className="
              mt-7
              text-[42px]
              font-black
              leading-[0.95]
              tracking-[-0.05em]
              text-white
              md:text-[64px]
            "
          >

            Career Opportunities
            <span className="block text-[#D4AF37]">
              After {course.title}
            </span>

          </h2>

          <p
            className="
              mt-7
              max-w
              text-[18px]
              leading-[2]
              text-white/68
            "
          >
            Completing this training opens opportunities across
            enterprise networking, IT infrastructure, cloud computing
            and cybersecurity. As you gain practical experience,
            industry certifications and real-world exposure, you can
            progress into higher technical roles with increased
            responsibilities and salary potential.
          </p>

        </div>

        {/* ===============================
            Career Progression Table
        =============================== */}

        <div
          className="
            mt-14
            overflow-hidden
            rounded-[24px]
            border
            border-white/10
          "
        >

          {/* Desktop Header */}

          <div
            className="
              hidden
              md:grid
              md:grid-cols-[220px_1fr_180px]
              border-b
              border-white/10
              bg-white/[0.03]
              px-8
              py-5
            "
          >

            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.14em]
                text-white/45
              "
            >
              Career Stage
            </p>

            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.14em]
                text-white/45
              "
            >
              Typical Job Role
            </p>

            <p
              className="
                text-right
                text-sm
                font-semibold
                uppercase
                tracking-[0.14em]
                text-white/45
              "
            >
              Average Salary
            </p>

          </div>

          {course.careerPath.map((career) => (

            <div
              key={`${career.stage}-${career.role}`}
              className="
                border-b
                border-white/10
                last:border-none
              "
            >

              {/* Desktop */}

              <div
                className="
                  hidden
                  md:grid
                  md:grid-cols-[220px_1fr_180px]
                  items-center
                  gap-8
                  px-8
                  py-6
                "
              >

                <p
                  className="
                    font-semibold
                    text-white
                  "
                >
                  {career.stage}
                </p>

                <p
                  className="
                    text-white/75
                  "
                >
                  {career.role}
                </p>

                <p
                  className="
                    text-right
                    font-bold
                    text-[#D4AF37]
                  "
                >
                  {career.salary}
                </p>

              </div>

              {/* Mobile */}

              <div
                className="
                  flex
                  flex-col
                  gap-3
                  p-6
                  md:hidden
                "
              >

                <div>

                  <p
                    className="
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.14em]
                      text-white/40
                    "
                  >
                    Career Stage
                  </p>

                  <p
                    className="
                      mt-1
                      font-semibold
                      text-white
                    "
                  >
                    {career.stage}
                  </p>

                </div>

                <div>

                  <p
                    className="
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.14em]
                      text-white/40
                    "
                  >
                    Typical Job Role
                  </p>

                  <p
                    className="
                      mt-1
                      text-white/75
                    "
                  >
                    {career.role}
                  </p>

                </div>

                <div>

                  <p
                    className="
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.14em]
                      text-white/40
                    "
                  >
                    Average Salary
                  </p>

                  <p
                    className="
                      mt-1
                      font-bold
                      text-[#D4AF37]
                    "
                  >
                    {career.salary}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* ---------- PART 2 STARTS HERE ---------- */}
                {/* ======================================
            Career Note
        ====================================== */}

        <div
          className="
            mt-10
            rounded-[24px]
            border
            border-[#D4AF37]/15
            bg-[#D4AF37]/[0.04]
            p-6
            lg:p-8
          "
        >

          <div className="flex items-start gap-4">

            <div
              className="
                mt-1
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#D4AF37]/10
              "
            >

              <TrendingUp
                className="h-5 w-5 text-[#D4AF37]"
              />

            </div>

            <div>

              <h3
                className="
                  text-[22px]
                  font-bold
                  text-white
                "
              >
                Career Growth Depends on Practical Skills
              </h3>

              <p
                className="
                  mt-4
                  text-[16px]
                  leading-[1.9]
                  text-white/68
                "
              >
                The career stages and salary ranges shown above are
                indicative and may vary based on your technical
                knowledge, practical experience, communication skills,
                certifications, interview performance and the
                organization you join. Developing strong troubleshooting
                abilities and gaining hands-on experience significantly
                improve long-term career opportunities.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}