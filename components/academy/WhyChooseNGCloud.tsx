import {
  Award,
  BookOpen,
  BriefcaseBusiness,
  Cpu,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";

const advantages = [
  {
    title: "Enterprise Industry Expertise",
    description:
      "Learn directly from experienced enterprise professionals who have worked with production networking, cloud infrastructure and cybersecurity environments. Every concept is explained with practical implementation rather than certification theory alone.",
    icon: BriefcaseBusiness,
  },

  {
    title: "Hands-on Practical Learning",
    description:
      "Every module combines instructor-led sessions with enterprise lab exercises, troubleshooting scenarios and implementation-based learning that reflects real organizational environments.",
    icon: Cpu,
  },

  {
    title: "Career-Oriented Learning Paths",
    description:
      "Our structured programs help students progress from networking fundamentals to advanced cloud, cybersecurity and enterprise infrastructure technologies through a logical career roadmap.",
    icon: GraduationCap,
  },

  {
    title: "Industry-Relevant Curriculum",
    description:
      "Training is aligned with current enterprise technologies including Cisco, AWS, Microsoft Azure, Palo Alto Networks, Fortinet, Cisco SD-WAN and F5 application delivery solutions.",
    icon: BookOpen,
  },

  {
    title: "Mentorship Beyond the Classroom",
    description:
      "Students receive interview preparation, resume guidance, certification mentoring and personalized career support to confidently prepare for technical roles.",
    icon: Award,
  },

  {
    title: "Learning Built for Long-Term Growth",
    description:
      "Instead of preparing learners for a single certification, our programs focus on building practical knowledge that supports continuous career growth across networking, cloud computing and cybersecurity.",
    icon: ShieldCheck,
  },
];

export default function WhyChooseNGCloud() {

  return (

    <section className="relative overflow-hidden py-12">

      {/* Background */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute left-[-220px] top-[-120px] h-[430px] w-[430px] rounded-full bg-[#D4AF37]/10 blur-[180px]" />

        <div className="absolute right-[-220px] bottom-[-120px] h-[430px] w-[430px] rounded-full bg-[#D4AF37]/8 blur-[180px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-[1450px] px-5">

        {/* Heading */}

        <div className="mx-auto max-w-[940px] text-center">

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
            Why Choose NG Cloud Networks
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
            Learn Beyond
            <span className="block text-[#D4AF37]">
              Traditional Classroom Training
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-[900px]
              text-[18px]
              leading-[2]
              text-white/68
            "
          >
            Choosing an IT training institute is about more than completing
            a certification course. Modern employers value professionals
            who can confidently apply technical concepts in real enterprise
            environments, solve practical problems and continue learning as
            technology evolves. At NG Cloud Networks, every program is
            designed to combine practical implementation, industry-relevant
            technologies, structured mentorship and career-focused guidance
            that prepares learners for long-term success in networking,
            cloud computing and cyber security.
          </p>

        </div>

        {/* Feature Grid */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {advantages.map((item) => (

            <FeatureCard
              key={item.title}
              title={item.title}
              description={item.description}
              Icon={item.icon}
            />

          ))}

        </div>
                {/* Training Philosophy */}

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

          <div className="grid items-center gap-12 lg:grid-cols-[420px_1fr]">

            {/* Left */}

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
                Our Training Philosophy
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
                We Don't Just
                <span className="block text-[#D4AF37]">
                  Teach Technology
                </span>
              </h3>

            </div>

            {/* Right */}

            <div>

              <p
                className="
                  text-[18px]
                  leading-[2]
                  text-white/72
                "
              >
                Technology changes continuously, but strong fundamentals,
                practical thinking and problem-solving skills remain valuable
                throughout an IT career. Our learning approach is built around
                helping students understand how enterprise technologies work
                in real production environments instead of simply memorizing
                commands or preparing for certification exams.
              </p>

              <p
                className="
                  mt-6
                  text-[18px]
                  leading-[2]
                  text-white/72
                "
              >
                Every training program combines instructor-led learning,
                enterprise laboratory practice, guided troubleshooting,
                technical mentoring and career preparation. Whether you are
                beginning your IT journey or expanding your professional
                expertise, our goal is to help you build practical knowledge,
                technical confidence and long-term career readiness across
                networking, cloud computing and cyber security.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}

type FeatureCardProps = {
  title: string;
  description: string;
  Icon: React.ComponentType<{
    className?: string;
  }>;
};

function FeatureCard({
  title,
  description,
  Icon,
}: FeatureCardProps) {

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