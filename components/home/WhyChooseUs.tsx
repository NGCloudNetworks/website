import { Server, Users, Briefcase, BadgeCheck } from "lucide-react";
import { trainer, trainingFeatures, placementSupport } from "@/data/academy";

const reasons = [
  {
    icon: Server,
    title: "Enterprise Lab Infrastructure",
    description: `Train using ${trainingFeatures.practicalLabs.toLowerCase()}, working directly with configurations used across enterprise network environments.`,
  },
  {
    icon: Users,
    title: "Corporate Industry Trainers",
    description: `Learn from ${trainer.name}, a ${trainer.designation.toLowerCase()} with ${trainer.experience} of industry and training experience across Cisco networking, SD-WAN and cloud infrastructure.`,
  },
  {
    icon: Briefcase,
    title: "Career & Placement Support",
    description: `Placement assistance includes resume building, mock technical interviews and job referrals, with students placed at companies including ${placementSupport.companies.slice(0, 4).join(", ")} and more.`,
  },
  {
    icon: BadgeCheck,
    title: "Small Batch, Structured Learning",
    description: `Batches are capped at ${trainingFeatures.batchSize.toLowerCase()}, with weekly assessments, recorded sessions and live doubt support included in every course.`,
  },
];

export default function WhyChooseSection() {
  return (
    <section
      id="why-choose-us"
      aria-labelledby="why-choose-heading"
      className="relative overflow-hidden py-20 md:py-24"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-[-180px] top-[-120px] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/7 blur-[180px]" />
        <div className="absolute right-[-180px] bottom-[-120px] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/6 blur-[180px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-5">

        <header className="mx-auto max-w-[820px] text-center">
          <span
            className="
              inline-flex rounded-full border border-[#D4AF37]/20
              bg-[#D4AF37]/10 px-4 py-2 text-sm font-semibold text-[#D4AF37]
            "
          >
            Why NG Cloud Networks
          </span>

          <h2
            id="why-choose-heading"
            className="
              mt-6 text-[40px] font-black leading-[1] tracking-[-0.04em]
              text-white md:text-[56px]
            "
          >
            Built for Future IT Professionals
          </h2>

          <p
            className="
              mx-auto mt-6 max-w-[720px] text-[17px] leading-[1.9]
              text-white/68
            "
          >
            NG Cloud Networks combines enterprise-grade lab infrastructure,
            a trainer with {trainer.experience} of industry experience and
            structured placement support to prepare students in Hyderabad
            for networking, cloud and cybersecurity roles.
          </p>
        </header>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="
                  rounded-[28px] border border-white/10
                  bg-white/[0.03] p-7 transition-all duration-300
                  hover:border-[#D4AF37]/25 hover:bg-[#D4AF37]/[0.04]
                "
              >
                <div
                  className="
                    flex h-12 w-12 items-center justify-center
                    rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37]
                  "
                >
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>

                <h3 className="mt-6 text-[19px] font-bold text-white">
                  {reason.title}
                </h3>

                <p className="mt-3 text-[15px] leading-[1.8] text-white/65">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}