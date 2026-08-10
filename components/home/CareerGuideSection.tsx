import { TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";

type CareerStage = {
  stage: string;
  role: string;
  salary: string;
};

type CareerTrack = {
  id: string;
  title: string;
  description: string;
  stages: CareerStage[];
  relatedCourses: { label: string; href: string }[];
};

const careerTracks: CareerTrack[] = [
  {
    id: "networking",
    title: "Networking Career Path",
    description:
      "Start with core Cisco networking fundamentals and progress into enterprise infrastructure and architecture roles.",
    stages: [
      { stage: "After CCNA", role: "Network Support Engineer", salary: "₹3 – ₹5 LPA" },
      { stage: "0–2 Years", role: "Network Engineer", salary: "₹4 – ₹6 LPA" },
      { stage: "2–5 Years", role: "Senior Network Engineer (CCNP)", salary: "₹6 – ₹10 LPA" },
      { stage: "5–8 Years", role: "Network Architect", salary: "₹12 – ₹20 LPA" },
    ],
    relatedCourses: [
      { label: "CCNA Training", href: "/courses/ccna-training-hyderabad" },
      { label: "CCNP Enterprise Training", href: "/courses/ccnp-enterprise-training-hyderabad" },
      { label: "Cisco SD-WAN Training", href: "/courses/cisco-sdwan-training-hyderabad" },
    ],
  },
  {
    id: "cloud",
    title: "Cloud Computing Career Path",
    description:
      "Build on networking fundamentals to move into AWS or Azure cloud infrastructure and cloud networking roles.",
    stages: [
      { stage: "After Certification", role: "Cloud Support Engineer", salary: "₹3.5 – ₹6 LPA" },
      { stage: "0–2 Years", role: "Cloud Engineer", salary: "₹5 – ₹8 LPA" },
      { stage: "2–5 Years", role: "Cloud Network Engineer", salary: "₹8 – ₹14 LPA" },
      { stage: "5–8 Years", role: "Cloud Solutions Architect", salary: "₹15 – ₹25 LPA" },
    ],
    relatedCourses: [
      { label: "AWS Cloud Training", href: "/courses/aws-training-hyderabad" },
      { label: "Azure Cloud Training", href: "/courses/azure-cloud-training-hyderabad" },
      { label: "Cloud Security Training", href: "/courses/cloud-security-training-hyderabad" },
    ],
  },
  {
    id: "security",
    title: "Network Security Career Path",
    description:
      "Specialize in enterprise firewall, load balancing and security technologies used to protect modern networks.",
    stages: [
      { stage: "After Certification", role: "Security Support Engineer", salary: "₹3.5 – ₹6 LPA" },
      { stage: "0–2 Years", role: "Network Security Engineer", salary: "₹5 – ₹9 LPA" },
      { stage: "2–5 Years", role: "Firewall / Security Engineer", salary: "₹9 – ₹15 LPA" },
      { stage: "5–8 Years", role: "Security Architect", salary: "₹16 – ₹28 LPA" },
    ],
    relatedCourses: [
      { label: "Palo Alto Firewall Training", href: "/courses/palo-alto-firewall-training-hyderabad" },
      { label: "Fortigate Firewall Training", href: "/courses/fortigate-firewall-training-hyderabad" },
      { label: "F5 Load Balancer Training", href: "/courses/f5-load-balancer-training-hyderabad" },
    ],
  },
];

export default function CareerGuideSection() {
  return (
    <section
      id="career-guide"
      aria-labelledby="career-guide-heading"
      className="relative overflow-hidden py-20 md:py-24"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-[-180px] top-[-120px] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/7 blur-[180px]" />
        <div className="absolute right-[-180px] bottom-[-120px] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/6 blur-[180px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-5">

        {/* Header */}
        <header className="mx-auto max-w-[820px] text-center">
          <span
            className="
              inline-flex items-center gap-2 rounded-full border
              border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-2
              text-sm font-semibold text-[#D4AF37]
            "
          >
            <TrendingUp className="h-4 w-4" aria-hidden="true" />
            Career &amp; Salary Guide
          </span>

          <h2
            id="career-guide-heading"
            className="
              mt-6 text-[40px] font-black leading-[1] tracking-[-0.04em]
              text-white md:text-[56px]
            "
          >
            What You Can Earn After Certification
          </h2>

          <p
            className="
              mx-auto mt-6 max-w-[720px] text-[17px] leading-[1.9]
              text-white/68
            "
          >
            Networking, cloud and security certifications lead to distinct
            career paths in Hyderabad&apos;s IT industry. Compare typical
            roles and salary progression across each track.
          </p>
        </header>

        {/* Career tracks */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {careerTracks.map((track) => (
            <div
              key={track.id}
              className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7"
            >
              <h3 className="text-[19px] font-bold text-white">
                {track.title}
              </h3>

              <p className="mt-2 text-[13.5px] leading-[1.7] text-white/60">
                {track.description}
              </p>

              {/* Salary progression */}
              <div className="mt-6 space-y-3 border-t border-white/10 pt-6">
                {track.stages.map((stage) => (
                  <div
                    key={stage.stage}
                    className="flex items-center justify-between gap-3"
                  >
                    <div>
                      <p className="text-[12px] text-white/45">{stage.stage}</p>
                      <p className="text-[13.5px] font-medium text-white/85">
                        {stage.role}
                      </p>
                    </div>
                    <span className="shrink-0 text-[13px] font-bold text-[#D4AF37]">
                      {stage.salary}
                    </span>
                  </div>
                ))}
              </div>

              {/* Related courses */}
              <div className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-5">
                {track.relatedCourses.map((course) => (
                  <Link
                    key={course.href}
                    href={course.href}
                    className="
                      inline-flex items-center gap-1 rounded-full
                      border border-white/10 bg-white/[0.03] px-3 py-1.5
                      text-[12px] font-medium text-white/70
                      transition-all duration-300
                      hover:border-[#D4AF37]/30 hover:text-[#D4AF37]
                    "
                  >
                    {course.label}
                    <ArrowRight className="h-3 w-3" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}