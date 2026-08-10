import {
  BadgeCheck,
  BriefcaseBusiness,
  FileText,
  MessagesSquare,
  Users,
} from "lucide-react";

const careerSupport = [
  {
    title: "100% Placement Assistance",
    description:
      "Every student receives complete placement assistance throughout the job search process, including interview scheduling guidance, application support and career mentoring until they become confident in pursuing opportunities.",
    icon: BadgeCheck,
  },

  {
    title: "ATS-Friendly Resume Building",
    description:
      "Learn how to create a professional resume that highlights technical skills, practical projects, certifications and achievements in a format preferred by recruiters and applicant tracking systems.",
    icon: FileText,
  },
  {
    title: "Technical Interview Preparation",
    description:
      "Prepare through structured mock interviews, technical discussions and scenario-based questions covering networking, cloud computing, cyber security and enterprise technologies.",
    icon: MessagesSquare,
  },

  {
    title: "Career Mentorship",
    description:
      "Receive personalized guidance on choosing the right learning path, preparing for certifications, improving technical confidence and planning long-term professional growth.",
    icon: Users,
  },

  {
    title: "Job Search Guidance",
    description:
      "Understand how to identify suitable job opportunities, approach recruiters professionally, apply strategically and prepare effectively for technical hiring processes.",
    icon: BriefcaseBusiness,
  },
];

export default function PlacementHighlights() {

  return (

    <section className="relative overflow-hidden py-12">

      {/* Background */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute left-[-220px] top-[-120px] h-[450px] w-[450px] rounded-full bg-[#D4AF37]/10 blur-[180px]" />

        <div className="absolute right-[-220px] bottom-[-120px] h-[450px] w-[450px] rounded-full bg-[#D4AF37]/8 blur-[180px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-[1450px] px-5">

        {/* Heading */}

        <div className="mx-auto max-w-[950px] text-center">

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

            Career Success Program

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
            Complete Career Support
            <span className="block text-[#D4AF37]">
              Beyond Classroom Training
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-[920px]
              text-[18px]
              leading-[2]
              text-white/68
            "
          >
            Learning technical skills is only one part of building a
            successful IT career. At NG Cloud Networks, every student
            receives structured career guidance, practical interview
            preparation and <strong className="text-white">100% Placement Assistance</strong>
            designed to improve job readiness. From resume building and
            LinkedIn optimization to mock interviews and career mentoring,
            our goal is to help learners confidently transition from
            training to professional employment.
          </p>

        </div>

        {/* Career Support Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {careerSupport.map((item) => (

            <SupportCard
              key={item.title}
              title={item.title}
              description={item.description}
              Icon={item.icon}
            />

          ))}

        </div>

        {/* Companies */}

        <div
          className="
            mt-20
            rounded-[34px]
            border
            border-white/10
            bg-white/[0.03]
            p-10
            text-center
          "
        >

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
            Career Opportunities
          </div>

          <h3
            className="
              mt-8
              text-[36px]
              font-black
              leading-tight
              text-white
            "
          >
            Preparing Students for
            <span className="block text-[#D4AF37]">
              Leading Technology Companies
            </span>
          </h3>

          <p
            className="
              mx-auto
              mt-8
              max-w-[900px]
              text-[18px]
              leading-[2]
              text-white/70
            "
          >
            Our training methodology is designed around the technical
            expectations of modern IT employers. Through practical
            learning, interview preparation and continuous mentoring,
            students build the confidence required to pursue
            opportunities across networking, cloud computing,
            cyber security and enterprise infrastructure roles.
          </p>

          <div
            className="
              mt-10
              flex
              flex-wrap
              justify-center
              gap-4
            "
          >

            {[
              "TCS",
              "Accenture",
              "Cognizant",
              "Capgemini",
              "Wipro",
              "HCLTech",
              "Tech Mahindra",
              "EY",
              "PwC",
              "Bosch",
              "Amazon",
              "Mphasis",
            ].map((company) => (

              <span
                key={company}
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-black/20
                  px-5
                  py-3
                  text-sm
                  font-medium
                  text-white/75
                "
              >
                {company}
              </span>

            ))}

          </div>

        </div>

      </div>

    </section>

  );

}

type SupportCardProps = {
  title: string;
  description: string;
  Icon: React.ComponentType<{
    className?: string;
  }>;
};

function SupportCard({
  title,
  description,
  Icon,
}: SupportCardProps) {

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
        "
      >

        <Icon className="h-8 w-8 text-[#D4AF37]" />

      </div>

      <h3
        className="
          mt-8
          text-[24px]
          font-bold
          leading-[1.3]
          text-white
        "
      >
        {title}
      </h3>

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

type CareerStepProps = {
  step: string;
  title: string;
  description: string;
};

function CareerStep({
  step,
  title,
  description,
}: CareerStepProps) {

  return (

    <div
      className="
        flex
        gap-5
        rounded-[24px]
        border
        border-white/10
        bg-white/[0.03]
        p-6
      "
    >

      <div
        className="
          flex
          h-12
          w-12
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#D4AF37]/10
          text-sm
          font-black
          text-[#D4AF37]
        "
      >
        {step}
      </div>

      <div>

        <h4
          className="
            text-[20px]
            font-bold
            text-white
          "
        >
          {title}
        </h4>

        <p
          className="
            mt-2
            text-[16px]
            leading-[1.8]
            text-white/68
          "
        >
          {description}
        </p>

      </div>

    </div>

  );

}