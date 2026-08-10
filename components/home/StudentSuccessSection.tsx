import { ArrowRight, ShieldCheck } from "lucide-react";

const placements = [
  { name: "Naveen", role: "Network Security Engineer", company: "Cisco", course: "CCNA & Palo Alto Firewall" },
  { name: "Rajesh", role: "Network Engineer", company: "ValueLabs", course: "CCNA Training" },
  { name: "Sai Kumar", role: "Network Administrator", company: "Bell Techlogix India Pvt. Ltd.", course: "CCNA Training" },
  { name: "Ajay", role: "Network Security Engineer", company: "Cloud4C", course: "CCNA & Palo Alto Firewall" },
  { name: "Sikesh", role: "Network Engineer", company: "HCL Technologies", course: "CCNA Training" },
  { name: "Vinay", role: "Network Engineer", company: "Teleperformance", course: "CCNA Training" },
];

// Cycled accent tints per card — same gold family, varied opacity/hue weight
// so 6 cards in a grid don't read as one flat repeated block
const accents = [
  "bg-[#D4AF37]/15 text-[#D4AF37]",
  "bg-[#E7C75A]/15 text-[#E7C75A]",
  "bg-[#D4AF37]/12 text-[#D4AF37]",
  "bg-[#C9A227]/15 text-[#C9A227]",
  "bg-[#E7C75A]/12 text-[#E7C75A]",
  "bg-[#D4AF37]/15 text-[#D4AF37]",
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export default function StudentSuccessSection() {
  return (
    <section
      id="student-success"
      aria-labelledby="student-success-heading"
      className="relative overflow-hidden py-20 md:py-24"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-[-180px] top-[-120px] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/7 blur-[180px]" />
        <div className="absolute right-[-180px] bottom-[-120px] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/6 blur-[180px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-5">

        {/* Header */}
        <header className="mx-auto max-w-[780px] text-center">
          <span
            className="
              inline-flex items-center gap-2 rounded-full border
              border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-2
              text-sm font-semibold text-[#D4AF37]
            "
          >
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            Where Our Students Work
          </span>

          <h2
            id="student-success-heading"
            className="
              mt-6 text-[40px] font-black leading-[1] tracking-[-0.04em]
              text-white md:text-[56px]
            "
          >
            Real Students. Real Placements.
          </h2>

          <p
            className="
              mx-auto mt-6 max-w-[680px] text-[17px] leading-[1.9]
              text-white/68
            "
          >
            Students trained at NG Cloud Networks are now working as network
            and security engineers at companies including Cisco, HCL
            Technologies and Cloud4C.
          </p>
        </header>

        {/* Placement cards */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {placements.map((p, index) => (
            <div
              key={p.name}
              className="
                group relative overflow-hidden rounded-[24px] border
                border-white/10 bg-white/[0.03] p-6 transition-all duration-300
                hover:border-[#D4AF37]/25 hover:bg-[#D4AF37]/[0.04]
              "
            >
              {/* Top row: avatar + verified tag */}
              <div className="flex items-start justify-between gap-3">
                <div
                  className={`
                    flex h-12 w-12 shrink-0 items-center justify-center
                    rounded-2xl text-[15px] font-black
                    ${accents[index % accents.length]}
                  `}
                >
                  {getInitials(p.name)}
                </div>

                <span
                  className="
                    inline-flex items-center gap-1 rounded-full
                    border border-white/10 bg-white/[0.03] px-2.5 py-1
                    text-[10px] font-semibold uppercase tracking-wide
                    text-white/40
                  "
                >
                  <ShieldCheck className="h-3 w-3" aria-hidden="true" />
                  Placed
                </span>
              </div>

              {/* Name + role + company */}
              <p className="mt-5 text-[17px] font-bold text-white">{p.name}</p>
              <p className="mt-1 text-[14px] font-semibold text-[#D4AF37]">
                {p.role}
              </p>
              <p className="mt-0.5 text-[13.5px] text-white/55">{p.company}</p>

              {/* Course → Role path */}
              <div className="mt-5 flex items-center gap-2 border-t border-white/10 pt-4">
                <span className="text-[12.5px] text-white/60">{p.course}</span>
                <ArrowRight
                  className="h-3.5 w-3.5 shrink-0 text-[#D4AF37]/60"
                  aria-hidden="true"
                />
                <span className="text-[12.5px] font-medium text-white/80">
                  {p.role}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}