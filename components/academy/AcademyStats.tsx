import {
  Award,
  BriefcaseBusiness,
  GraduationCap,
  Star,
} from "lucide-react";

const academyStats = [
  {
    value: "1500+",
    title: "Students Trained",
    description:
      "Students, graduates and working professionals have developed practical networking, cloud computing and cybersecurity skills through our industry-focused training programs.",
    icon: GraduationCap,
  },
  {
    value: "14+",
    title: "Years of Enterprise Experience",
    description:
      "Learn directly from an experienced enterprise networking professional with extensive real-world infrastructure, routing, switching and security expertise.",
    icon: BriefcaseBusiness,
  },
  {
    value: "8+",
    title: "Professional Training Programs",
    description:
      "Comprehensive learning paths covering networking, cloud computing, cybersecurity, software-defined networking and application delivery technologies.",
    icon: Award,
  },
  {
    value: "4.9★",
    title: "Student Satisfaction",
    description:
      "Our practical teaching methodology, personalized mentoring and enterprise lab approach continue to earn positive feedback from learners.",
    icon: Star,
  },
];

export default function AcademyStats() {

  return (

    <section className="relative overflow-hidden py-12">

      {/* Background */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute left-[-220px] top-[-120px] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/10 blur-[180px]" />

        <div className="absolute right-[-220px] bottom-[-120px] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/8 blur-[180px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-[1450px] px-5">

        {/* Heading */}

        <div className="mx-auto max-w-[930px] text-center">

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
            Trusted Learning Ecosystem
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
            Trusted by Students
            <span className="block text-[#D4AF37]">
              Building Successful IT Careers
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-[860px]
              text-[18px]
              leading-[2]
              text-white/68
            "
          >
            Over the years, NG Cloud Networks has helped students,
            fresh graduates and working professionals build practical
            expertise in enterprise networking, cloud computing and
            cyber security through instructor-led training,
            real-world laboratory practice, certification guidance
            and career-focused learning. Every milestone reflects
            our commitment to developing industry-ready professionals
            with practical technical skills rather than theoretical
            knowledge alone.
          </p>

        </div>

                {/* Bottom Authority Banner */}

        <div
          className="
            mt-24
            overflow-hidden
            rounded-[36px]
            border
            border-[#D4AF37]/15
            bg-gradient-to-r
            from-[#D4AF37]/8
            via-[#D4AF37]/4
            to-transparent
            p-10
          "
        >

          <div className="grid items-center gap-10 lg:grid-cols-[380px_1fr]">

            <div>

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
                  text-[#D4AF37]
                "
              >
                Why These Numbers Matter
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
                Every Number
                <span className="block text-[#D4AF37]">
                  Represents a Career Journey
                </span>
              </h3>

            </div>

            <div>

              <p
                className="
                  text-[18px]
                  leading-[2]
                  text-white/72
                "
              >
                Behind every statistic is a student who invested in
                learning practical enterprise technologies, improving
                technical confidence and preparing for long-term
                professional growth. Our focus has always been on
                helping learners build real-world skills through
                instructor-led training, enterprise lab practice,
                certification guidance and career-oriented mentoring
                that aligns with current industry expectations.
              </p>

              <p
                className="
                  mt-6
                  text-[18px]
                  leading-[2]
                  text-white/72
                "
              >
                Whether your goal is to become a
                <strong className="text-white">
                  {" "}Network Engineer
                </strong>,
                <strong className="text-white">
                  {" "}Cloud Engineer
                </strong>,
                <strong className="text-white">
                  {" "}Cyber Security Professional
                </strong>
                {" "}or
                <strong className="text-white">
                  {" "}Infrastructure Specialist
                </strong>,
                our learning ecosystem is designed to provide the
                practical knowledge, structured guidance and
                enterprise exposure needed to confidently progress
                toward your career objectives.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}

type StatCardProps = {
  value: string;
  title: string;
  description: string;
  Icon: React.ComponentType<{
    className?: string;
  }>;
};

function StatCard({
  value,
  title,
  description,
  Icon,
}: StatCardProps) {

  return (

    <div
      className="
        group
        rounded-[30px]
        border
        border-white/10
        bg-white/[0.03]
        p-8
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-[#D4AF37]/30
        hover:shadow-[0_25px_70px_rgba(212,175,55,.12)]
      "
    >

      <div
        className="
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-[#D4AF37]/10
          transition-all
          duration-300
          group-hover:bg-[#D4AF37]/15
        "
      >

        <Icon
          className="h-8 w-8 text-[#D4AF37]"
        />

      </div>

      <h3
        className="
          mt-8
          text-[48px]
          font-black
          leading-none
          tracking-[-0.04em]
          text-[#D4AF37]
        "
      >
        {value}
      </h3>

      <h4
        className="
          mt-4
          text-[22px]
          font-bold
          leading-[1.3]
          text-white
        "
      >
        {title}
      </h4>

      <p
        className="
          mt-5
          text-[16px]
          leading-[1.9]
          text-white/68
        "
      >
        {description}
      </p>

    </div>

  );

}