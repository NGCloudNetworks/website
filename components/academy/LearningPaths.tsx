import {
    ArrowRight,
    BriefcaseBusiness,
    Cloud,
    Network,
    ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { courses } from "@/data/courses";
import { Course } from "@/types/course";

const learningPaths = [
    {
        title: "Become a Network Engineer",
        description:
            "Build a strong networking foundation and progressively master enterprise routing, switching and software-defined networking technologies.",
        // Direct-answer summary: self-contained, citable claim per path
        directAnswer:
            "To become a Network Engineer, start with CCNA, then CCNP Enterprise, then Cisco SD-WAN — in that order.",
        icon: Network,
        career: "Network Engineer • Infrastructure Engineer",
        courseSlugs: [
            "ccna-training-hyderabad",
            "ccnp-enterprise-training-hyderabad",
            "cisco-sdwan-training-hyderabad",
        ],
    },
    {
        title: "Become a Cloud Engineer",
        description:
            "Start with networking fundamentals before learning enterprise cloud infrastructure across AWS and Microsoft Azure platforms.",
        directAnswer:
            "To become a Cloud Engineer, start with CCNA for networking fundamentals, then specialize in AWS and Azure.",
        icon: Cloud,
        career: "Cloud Engineer • Cloud Administrator",
        courseSlugs: [
            "ccna-training-hyderabad",
            "aws-training-hyderabad",
            "azure-cloud-training-hyderabad",
        ],
    },
    {
        title: "Become a Cyber Security Professional",
        description:
            "Strengthen networking fundamentals before specializing in enterprise firewall administration and network security.",
        directAnswer:
            "To become a Security Engineer, start with CCNA, then specialize in Palo Alto and Fortigate firewall administration.",
        icon: ShieldCheck,
        career: "Security Engineer • SOC Analyst",
        courseSlugs: [
            "ccna-training-hyderabad",
            "palo-alto-firewall-training-hyderabad",
            "fortigate-firewall-training-hyderabad",
        ],
    },
    {
        title: "Become an Enterprise Infrastructure Specialist",
        description:
            "Combine networking knowledge with application delivery technologies to build expertise in enterprise infrastructure environments.",
        directAnswer:
            "To become an Infrastructure Specialist, start with CCNA, then specialize in F5 Load Balancer application delivery.",
        icon: BriefcaseBusiness,
        career: "Infrastructure Engineer • Application Delivery Engineer",
        courseSlugs: [
            "ccna-training-hyderabad",
            "f5-load-balancer-training-hyderabad",
        ],
    },
];

export default function LearningPaths() {
    return (
        <section
            id="learning-paths"
            aria-labelledby="learning-paths-heading"
            className="relative overflow-hidden py-12"
        >
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute left-[-220px] top-[-120px] h-[460px] w-[460px] rounded-full bg-[#D4AF37]/10 blur-[180px]" />
                <div className="absolute right-[-220px] bottom-[-120px] h-[460px] w-[460px] rounded-full bg-[#D4AF37]/8 blur-[180px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-[1450px] px-5">

                {/* Heading + AEO direct-answer block */}
                <div className="mx-auto max-w-[930px] text-center">
                    <div
                        className="
              inline-flex items-center gap-2 rounded-full border
              border-[#D4AF37]/20 bg-[#D4AF37]/10 px-5 py-2
              text-sm font-semibold tracking-wide text-[#D4AF37]
            "
                    >
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        Career-Focused Learning Paths
                    </div>

                    <h2
                        id="learning-paths-heading"
                        className="
              mt-8 text-[42px] font-black leading-[0.95] tracking-[-0.05em]
              text-white md:text-[64px]
            "
                    >
                        Choose the Learning Path
                        <span className="block text-[#D4AF37]">
                            That Matches Your Career Goals
                        </span>
                    </h2>

                    {/* Self-contained, citable summary of all four paths at once —
                        this is what an AI engine can lift whole for
                        "what should I learn to become a network/cloud/security engineer" */}
                    <p className="mx-auto mt-8 max-w-[900px] text-[18px] leading-[2] text-white/68">
                        <strong className="text-white">
                            Every path at NG Cloud Networks starts with CCNA.
                        </strong>{" "}
                        From there, students specialize based on their goal: CCNP
                        Enterprise and Cisco SD-WAN for a Network Engineer career, AWS
                        and Azure for a Cloud Engineer career, Palo Alto and Fortigate
                        for a Cyber Security career, or F5 Load Balancer for an
                        Enterprise Infrastructure Specialist career.
                    </p>
                </div>

                {/* Career Paths */}
                <div className="mt-20 grid gap-8 lg:grid-cols-2">
                    {learningPaths.map((path) => {
                        const pathCourses = path.courseSlugs
                            .map((slug) => courses.find((course) => course.slug === slug))
                            .filter((course): course is Course => Boolean(course));

                        return (
                            <CareerPathCard
                                key={path.title}
                                path={path}
                                pathCourses={pathCourses}
                            />
                        );
                    })}
                </div>

                {/* Career Philosophy */}
                <div
                    className="
            mt-24 overflow-hidden rounded-[40px] border border-[#D4AF37]/15
            bg-gradient-to-r from-[#D4AF37]/8 via-[#D4AF37]/4 to-transparent
            p-10 lg:p-14
          "
                >
                    <div className="grid gap-12 lg:grid-cols-[420px_1fr]">
                        <div>
                            <div
                                className="
                  inline-flex rounded-full border border-[#D4AF37]/20
                  bg-[#D4AF37]/10 px-5 py-2 text-sm font-semibold
                  text-[#D4AF37]
                "
                            >
                                Career Growth Strategy
                            </div>

                            <h3 className="mt-8 text-[40px] font-black leading-[1] tracking-[-0.04em] text-white">
                                Build Skills
                                <span className="block text-[#D4AF37]">One Step at a Time</span>
                            </h3>
                        </div>

                        <div>
                            <p className="text-[18px] leading-[2] text-white/72">
                                Enterprise technology careers are built progressively.
                                Strong networking knowledge creates the foundation for
                                cloud computing, cyber security and application delivery.
                                By following structured learning paths, students develop
                                practical skills that connect naturally and prepare them
                                for real-world enterprise environments rather than
                                isolated certification exams.
                            </p>

                            <div className="mt-10 grid gap-5 md:grid-cols-2">
                                <JourneyPoint text="Structured Learning Progression" />
                                <JourneyPoint text="Practical Enterprise Skills" />
                                <JourneyPoint text="Industry-Relevant Technologies" />
                                <JourneyPoint text="Career-Oriented Roadmaps" />
                                <JourneyPoint text="Certification & Job Readiness" />
                                <JourneyPoint text="Long-Term Professional Growth" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

type CareerPathCardProps = {
    path: (typeof learningPaths)[number];
    pathCourses: Course[];
};

function CareerPathCard({ path, pathCourses }: CareerPathCardProps) {
    const Icon = path.icon;

    return (
        <article
            className="
        group rounded-[32px] border border-white/10 bg-white/[0.03] p-8
        backdrop-blur-xl transition-all duration-500 hover:-translate-y-2
        hover:border-[#D4AF37]/30 hover:shadow-[0_25px_70px_rgba(212,175,55,.12)]
      "
        >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4AF37]/10">
                <Icon className="h-8 w-8 text-[#D4AF37]" aria-hidden="true" />
            </div>

            <h3 className="mt-8 text-[30px] font-black leading-[1.2] tracking-[-0.03em] text-white">
                {path.title}
            </h3>

            {/* Per-path direct-answer sentence — quotable on its own */}
            <p className="mt-4 text-[14.5px] font-semibold text-[#D4AF37]">
                {path.directAnswer}
            </p>

            <p className="mt-4 text-[16px] leading-[1.9] text-white/68">
                {path.description}
            </p>

            {/* Roadmap */}
            <ol className="mt-10 space-y-4">
                {pathCourses.map((course, index) => (
                    <li key={course.slug} className="flex items-center gap-4">
                        <div
                            className="
                flex h-10 w-10 shrink-0 items-center justify-center
                rounded-full bg-[#D4AF37]/10 text-sm font-bold text-[#D4AF37]
              "
                        >
                            {index + 1}
                        </div>

                        <div className="flex-1">
                            <p className="text-[17px] font-semibold text-white">
                                <Link
                                    href={`/courses/${course.slug}`}
                                    className="transition-colors hover:text-[#D4AF37]"
                                >
                                    {course.title}
                                </Link>
                            </p>
                        </div>

                        {index !== pathCourses.length - 1 && (
                            <ArrowRight className="h-4 w-4 text-[#D4AF37]" aria-hidden="true" />
                        )}
                    </li>
                ))}
            </ol>

            {/* Career */}
            <div className="mt-10 rounded-2xl border border-[#D4AF37]/15 bg-[#D4AF37]/8 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
                    Career Opportunities
                </p>
                <p className="mt-3 text-[16px] font-medium leading-[1.8] text-white">
                    {path.career}
                </p>
            </div>
        </article>
    );
}

function JourneyPoint({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#D4AF37]/10">
                <ArrowRight className="h-5 w-5 text-[#D4AF37]" aria-hidden="true" />
            </div>
            <p className="text-[16px] font-medium text-white/75">{text}</p>
        </div>
    );
}