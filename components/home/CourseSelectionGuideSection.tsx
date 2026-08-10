import { GraduationCap, Zap, ArrowRight, TrendingUp, Rocket } from "lucide-react";
import Link from "next/link";

type LevelGuide = {
  level: string;
  forWhom: string;
  courses: { label: string; href: string }[];
  note: string;
};

const levelGuides: LevelGuide[] = [
  {
    level: "Beginner",
    forWhom: "Students, freshers, career switchers with no networking background",
    courses: [{ label: "CCNA Training", href: "/courses/ccna-training-hyderabad" }],
    note: "CCNA is the standard starting point. It requires no prior certification and builds the networking foundation every other course assumes you already have.",
  },
  {
    level: "Intermediate",
    forWhom: "CCNA holders or working professionals ready to specialize",
    courses: [
      { label: "CCNP Enterprise", href: "/courses/ccnp-enterprise-training-hyderabad" },
      { label: "CCNP Core", href: "/courses/ccnp-core-training-hyderabad" },
      { label: "AWS Cloud", href: "/courses/aws-training-hyderabad" },
      { label: "Azure Cloud", href: "/courses/azure-cloud-training-hyderabad" },
    ],
    note: "Choose CCNP to go deeper into enterprise networking, or AWS/Azure to pivot toward cloud infrastructure. Both build directly on CCNA fundamentals.",
  },
  {
    level: "Advanced",
    forWhom: "CCNP holders or professionals targeting security/infrastructure specialist roles",
    courses: [
      { label: "Palo Alto Firewall", href: "/courses/palo-alto-firewall-training-hyderabad" },
      { label: "Fortigate Firewall", href: "/courses/fortigate-firewall-training-hyderabad" },
      { label: "F5 Load Balancer", href: "/courses/f5-load-balancer-training-hyderabad" },
      { label: "Cisco SD-WAN", href: "/courses/cisco-sdwan-training-hyderabad" },
      { label: "Cloud Security", href: "/courses/cloud-security-training-hyderabad" },
    ],
    note: "These specialist courses command the highest salaries but assume solid routing, switching and infrastructure fundamentals already in place.",
  },
];

type NextStep = {
  after: string;
  afterHref: string;
  options: { label: string; href: string; why: string }[];
};

const nextSteps: NextStep[] = [
  {
    after: "CCNA",
    afterHref: "/courses/ccna-training-hyderabad",
    options: [
      { label: "CCNP Enterprise", href: "/courses/ccnp-enterprise-training-hyderabad", why: "for deeper enterprise routing & switching roles" },
      { label: "AWS Cloud", href: "/courses/aws-training-hyderabad", why: "to pivot into cloud infrastructure" },
      { label: "Palo Alto Firewall", href: "/courses/palo-alto-firewall-training-hyderabad", why: "to specialize in network security early" },
    ],
  },
  {
    after: "CCNP",
    afterHref: "/courses/ccnp-enterprise-training-hyderabad",
    options: [
      { label: "Cisco SD-WAN", href: "/courses/cisco-sdwan-training-hyderabad", why: "for enterprise WAN architect roles" },
      { label: "Fortigate Firewall", href: "/courses/fortigate-firewall-training-hyderabad", why: "to move into security engineering" },
      { label: "F5 Load Balancer", href: "/courses/f5-load-balancer-training-hyderabad", why: "for application delivery specialist roles" },
    ],
  },
  {
    after: "AWS or Azure",
    afterHref: "/courses/aws-training-hyderabad",
    options: [
      { label: "Cloud Security", href: "/courses/cloud-security-training-hyderabad", why: "to specialize in securing cloud infrastructure" },
      { label: "Azure Cloud", href: "/courses/azure-cloud-training-hyderabad", why: "to become multi-cloud proficient (if starting with AWS)" },
    ],
  },
  {
    after: "Cloud Security",
    afterHref: "/courses/cloud-security-training-hyderabad",
    options: [
      { label: "Palo Alto Firewall", href: "/courses/palo-alto-firewall-training-hyderabad", why: "for hands-on firewall and threat prevention skills" },
      { label: "Fortigate Firewall", href: "/courses/fortigate-firewall-training-hyderabad", why: "to broaden across leading security platforms" },
    ],
  },
];

export default function CourseSelectionGuideSection() {
  return (
    <section
      id="which-course"
      aria-labelledby="which-course-heading"
      className="relative overflow-hidden py-20 md:py-24"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-[-180px] top-[-120px] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/7 blur-[180px]" />
        <div className="absolute right-[-180px] bottom-[-120px] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/6 blur-[180px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-5">

        {/* Header + AEO direct-answer block */}
        <header className="mx-auto max-w-[860px] text-center">
          <span
            className="
              inline-flex items-center gap-2 rounded-full border
              border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-2
              text-sm font-semibold text-[#D4AF37]
            "
          >
            <GraduationCap className="h-4 w-4" aria-hidden="true" />
            Not Sure Which Course to Take?
          </span>

          <h2
            id="which-course-heading"
            className="
              mt-6 text-[40px] font-black leading-[1] tracking-[-0.04em]
              text-white md:text-[56px]
            "
          >
            Which Course Should You Choose?
          </h2>

          <p
            className="
              mx-auto mt-6 max-w-[760px] text-[17px] leading-[1.9]
              text-white/70
            "
          >
            <strong className="text-white">
              If you are new to networking, start with CCNA.
            </strong>{" "}
            It requires no prior certification and leads to the fastest
            entry-level job placement. Professionals already holding CCNA
            typically choose CCNP Enterprise to specialize in networking,
            AWS or Azure to move into cloud infrastructure, or Palo Alto and
            Fortigate to specialize in network security — based on the
            career path they want.
          </p>
        </header>

        {/* Choose by experience level */}
        <div className="mt-16">
          <h3 className="text-center text-[13px] font-semibold uppercase tracking-wider text-[#D4AF37]/80">
            Choose Based on Your Experience Level
          </h3>

          <div className="mt-7 grid gap-6 lg:grid-cols-3">
            {levelGuides.map((guide) => (
              <div
                key={guide.level}
                className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7"
              >
                <span
                  className="
                    inline-flex rounded-full bg-[#D4AF37]/10 px-3 py-1
                    text-[12px] font-bold uppercase tracking-wide
                    text-[#D4AF37]
                  "
                >
                  {guide.level}
                </span>

                <p className="mt-4 text-[13.5px] leading-[1.7] text-white/60">
                  {guide.forWhom}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {guide.courses.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="
                        inline-flex items-center gap-1 rounded-full
                        border border-white/10 bg-white/[0.03] px-3 py-1.5
                        text-[12px] font-medium text-white/75
                        transition-all duration-300
                        hover:border-[#D4AF37]/30 hover:text-[#D4AF37]
                      "
                    >
                      {c.label}
                      <ArrowRight className="h-3 w-3" aria-hidden="true" />
                    </Link>
                  ))}
                </div>

                <p className="mt-5 border-t border-white/10 pt-5 text-[13.5px] leading-[1.7] text-white/65">
                  {guide.note}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Fastest job for freshers — highlighted callout */}
        <div
          className="
            mt-16 flex flex-col gap-5 rounded-[28px] border
            border-[#D4AF37]/20 bg-[#D4AF37]/[0.05] p-7 sm:flex-row
            sm:items-center md:p-8
          "
        >
          <div
            className="
              flex h-12 w-12 shrink-0 items-center justify-center
              rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37]
            "
          >
            <Rocket className="h-6 w-6" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-[17px] font-bold text-white">
              Want the fastest job as a fresher?
            </h3>
            <p className="mt-2 text-[14.5px] leading-[1.8] text-white/70">
              <Link
                href="/courses/ccna-training-hyderabad"
                className="font-semibold text-[#D4AF37] underline underline-offset-2"
              >
                CCNA
              </Link>{" "}
              leads to the fastest entry-level placement since it is
              designed for freshers with no prior certification. Roles like
              Network Support Engineer and NOC Engineer commonly hire CCNA
              graduates directly.
            </p>
          </div>
        </div>

        {/* What to learn next — decision chains */}
        <div className="mt-16">
          <h3 className="text-center text-[13px] font-semibold uppercase tracking-wider text-[#D4AF37]/80">
            What Should You Learn After Your Current Course?
          </h3>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            {nextSteps.map((step) => (
              <div
                key={step.after}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="flex items-center gap-2 text-[14px]">
                  <span className="text-white/50">After</span>
                  <Link
                    href={step.afterHref}
                    className="font-bold text-white underline underline-offset-2 hover:text-[#D4AF37]"
                  >
                    {step.after}
                  </Link>
                </div>

                <ul className="mt-4 space-y-3">
                  {step.options.map((opt) => (
                    <li key={opt.href} className="flex items-start gap-2.5">
                      <ArrowRight
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#D4AF37]"
                        aria-hidden="true"
                      />
                      <p className="text-[13.5px] leading-[1.6] text-white/70">
                        <Link
                          href={opt.href}
                          className="font-semibold text-white hover:text-[#D4AF37]"
                        >
                          {opt.label}
                        </Link>{" "}
                        — {opt.why}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Demand & future outlook */}
        <div className="mt-16">
          <div className="flex items-center justify-center gap-2">
            <TrendingUp className="h-4 w-4 text-[#D4AF37]" aria-hidden="true" />
            <h3 className="text-center text-[13px] font-semibold uppercase tracking-wider text-[#D4AF37]/80">
              Demand &amp; Future Outlook
            </h3>
          </div>

          <p
            className="
              mx-auto mt-5 max-w-[820px] text-center text-[14.5px]
              leading-[1.9] text-white/65
            "
          >
            Core networking skills (CCNA, CCNP) remain the foundation every
            IT infrastructure role depends on. Demand is currently strongest
            for professionals who combine networking with cloud (AWS,
            Azure) or security (Palo Alto, Fortigate, Cloud Security)
            skills, as organizations continue shifting toward hybrid and
            cloud-first infrastructure.
          </p>
        </div>

        {/* Pointer to the full FAQ for decision-stage questions */}
        <div className="mt-14 text-center">
          <p className="text-[14px] text-white/50">
            Still have questions?{" "}
            <a
              href="#faq"
              className="font-semibold text-[#D4AF37] underline underline-offset-2"
            >
              See answers in Choosing a Course FAQs
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}