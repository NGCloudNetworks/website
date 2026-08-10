import Link from "next/link";

import {
    ArrowRight,
    CalendarCheck2,
    CheckCircle2,
    GraduationCap,
    PhoneCall,
} from "lucide-react";

import { Course } from "@/types/course";
import { academyStats, trainer } from "@/data/academy";

type Props = {
    course: Course;
};

export default function CTASection({
    course,
}: Props) {

    return (

        <section className="relative overflow-hidden py-28">

            {/* Background */}

            <div className="absolute inset-0 pointer-events-none">

                <div className="absolute left-[-220px] top-[-120px] h-[500px] w-[500px] rounded-full bg-[#D4AF37]/10 blur-[180px]" />

                <div className="absolute right-[-220px] bottom-[-120px] h-[500px] w-[500px] rounded-full bg-[#D4AF37]/8 blur-[180px]" />

            </div>

            <div className="relative z-10 mx-auto max-w-[1450px] px-5">

                <div
                    className="
            overflow-hidden
            rounded-[40px]
            border
            border-[#D4AF37]/20
            bg-gradient-to-br
            from-[#D4AF37]/10
            via-[#0B0B0B]
            to-[#050505]
            p-12
            lg:p-16
          "
                >

                    <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr]">

                        {/* Left */}

                        <div>

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

                                Start Your Learning Journey

                            </div>

                            <h2
                                className="
                  mt-8
                  text-[44px]
                  font-black
                  leading-[0.95]
                  tracking-[-0.05em]
                  text-white
                  md:text-[64px]
                "
                            >
                                {course.cta.title}
                            </h2>

                            <p
                                className="
                  mt-8
                  max-w-[720px]
                  text-[18px]
                  leading-[2]
                  text-white/72
                "
                            >
                                {course.cta.description}
                            </p>

                            {/* Benefits */}

                            <div className="mt-12 grid gap-5 sm:grid-cols-2">

                                <BenefitCard
                                    icon={
                                        <CalendarCheck2 className="h-6 w-6 text-[#D4AF37]" />
                                    }
                                    title="Free Demo Session"
                                    description="Experience our practical teaching methodology before joining."
                                />

                                <BenefitCard
                                    icon={
                                        <GraduationCap className="h-6 w-6 text-[#D4AF37]" />
                                    }
                                    title="Career Guidance"
                                    description="Receive personalized advice based on your career goals."
                                />

                                <BenefitCard
                                    icon={
                                        <CheckCircle2 className="h-6 w-6 text-[#D4AF37]" />
                                    }
                                    title="Certification Support"
                                    description="Get guidance for certification preparation and exam planning."
                                />

                                <BenefitCard
                                    icon={
                                        <PhoneCall className="h-6 w-6 text-[#D4AF37]" />
                                    }
                                    title="Dedicated Support"
                                    description="Speak directly with our training team whenever you need assistance."
                                />

                            </div>

                        </div>

                        {/* Right */}

                        <div>

                            <div
                                className="
                  rounded-[32px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-10
                  backdrop-blur-xl
                "
                            >

                                <p
                                    className="
                    text-sm
                    font-semibold
                    tracking-[0.18em]
                    text-[#D4AF37]
                  "
                                >
                                    WHY STUDENTS TRUST US
                                </p>

                                <h3
                                    className="
                    mt-6
                    text-[36px]
                    font-black
                    leading-[1]
                    tracking-[-0.04em]
                    text-white
                  "
                                >
                                    Practical Learning.
                                    <span className="block text-[#D4AF37]">
                                        Real Career Growth.
                                    </span>
                                </h3>

                                <p
                                    className="
                    mt-8
                    text-[17px]
                    leading-[2]
                    text-white/70
                  "
                                >
                                    We focus on helping students develop practical,
                                    job-ready skills through enterprise labs, live
                                    mentoring, structured assessments and interview
                                    preparation. Our goal is to prepare you for
                                    real-world IT environments—not just certification
                                    exams.
                                </p>

                                <div className="mt-10 space-y-5">                <TrustPoint text="Experienced enterprise networking trainer with real-world industry expertise." />

                                    <TrustPoint text="Hands-on practical labs designed around enterprise networking scenarios." />

                                    <TrustPoint text="Placement-focused learning with interview preparation and career mentoring." />

                                    <TrustPoint text="Flexible online, classroom and hybrid learning options." />

                                    {/* CTA Buttons */}

                                    <div className="mt-12 flex flex-col gap-4 sm:flex-row">

                                        <Link
                                            href="/contact"
                                            className="
                      inline-flex
                      h-[58px]
                      items-center
                      justify-center
                      gap-2
                      rounded-2xl
                      bg-[#D4AF37]
                      px-8
                      text-[16px]
                      font-semibold
                      text-black
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:shadow-[0_12px_40px_rgba(212,175,55,.30)]
                    "
                                        >

                                            {course.cta.primaryButton}

                                            <ArrowRight className="h-5 w-5" />

                                        </Link>

                                        <Link
                                            href="/contact"
                                            className="
                      inline-flex
                      h-[58px]
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      px-8
                      text-[16px]
                      font-semibold
                      text-white
                      transition-all
                      duration-300
                      hover:border-[#D4AF37]/40
                      hover:text-[#D4AF37]
                    "
                                        >
                                            Talk To Our Counselor
                                        </Link>

                                    </div>

                                    {/* Statistics */}

                                    <div className="mt-14 grid grid-cols-2 gap-5 lg:grid-cols-4">

                                        <StatCard
                                            value={academyStats.studentsTrained}
                                            label="Students Trained"
                                        />

                                        <StatCard
                                            value={trainer.experience}
                                            label="Trainer Experience"
                                        />

                                        <StatCard
                                            value={academyStats.placementSupport}
                                            label="Placement Support"
                                        />

                                        <StatCard
                                            value={academyStats.rating}
                                            label="Student Rating"
                                        />

                                    </div>

                                    {/* Bottom Note */}

                                    <div
                                        className="
                    mt-12
                    rounded-2xl
                    border
                    border-[#D4AF37]/15
                    bg-[#D4AF37]/5
                    p-6
                  "
                                    >

                                        <p
                                            className="
                      text-[16px]
                      leading-[1.9]
                      text-white/72
                    "
                                        >
                                            Every successful IT career begins with strong
                                            fundamentals and consistent practical learning.
                                            Whether you're starting from scratch or upgrading
                                            your technical skills, our team is here to guide
                                            you through every stage of your learning journey.
                                        </p>

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

function BenefitCard({
    icon,
    title,
    description,
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
}) {

    return (

        <div
            className="
        rounded-[24px]
        border
        border-white/10
        bg-white/[0.03]
        p-6
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-[#D4AF37]/30
        hover:-translate-y-1
      "
        >

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
                {icon}
            </div>

            <h4
                className="
          mt-6
          text-[20px]
          font-bold
          text-white
        "
            >
                {title}
            </h4>

            <p
                className="
          mt-3
          text-[15px]
          leading-[1.9]
          text-white/65
        "
            >
                {description}
            </p>

        </div>

    );

}

function TrustPoint({
    text,
}: {
    text: string;
}) {

    return (

        <div className="flex items-start gap-4">

            <div
                className="
          mt-1
          flex
          h-10
          w-10
          shrink-0
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
          text-[16px]
          leading-[1.8]
          text-white/72
        "
            >
                {text}
            </p>

        </div>

    );

}

function StatCard({
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
        bg-black/20
        p-5
        text-center
      "
        >

            <h4
                className="
          text-[28px]
          font-black
          text-[#D4AF37]
        "
            >
                {value}
            </h4>

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