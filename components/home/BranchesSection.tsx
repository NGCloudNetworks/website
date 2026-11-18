import Link from "next/link";
import { MapPin, Phone, ArrowUpRight } from "lucide-react";

const PHONE = "+91 99899 39191";
const PHONE_TEL = "+919989939191";

const branches = [
  {
    name: "Ameenpur Branch",
    badge: "",
    address:
      "H.no:5-125/1/30, Plot No. 30, Royal Homes, Fusion School Back Side, Ameenpur, Hyderabad, Telangana 502032",
    href: "/ameenpur",
    cta: "Ameenpur branch details",
    external: false,
  },
  {
    name: "Ameerpet Branch",
    badge: "New",
    address:
      "Flat No. 404, 4th Floor, Aditya Enclave, Annapurna Block, Ameerpet, Hyderabad, Telangana 500038",
    href: "/ameerpet",
    cta: "Ameerpet branch details",
    external: false,
  },
];

export default function BranchesSection() {
  return (
    <section
      id="branches"
      aria-labelledby="branches-heading"
      className="relative overflow-hidden py-20 md:py-24"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-[-180px] top-[-120px] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/7 blur-[180px]" />
        <div className="absolute right-[-180px] bottom-[-120px] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/6 blur-[180px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-5">
        <header className="mx-auto max-w-[820px] text-center">
          <span className="inline-flex rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-2 text-sm font-semibold text-[#D4AF37]">
            Our Branches
          </span>

          <h2
            id="branches-heading"
            className="mt-6 text-[40px] font-black leading-[1] tracking-[-0.04em] text-white md:text-[56px]"
          >
            Two Branches in Hyderabad
          </h2>

          <p className="mx-auto mt-6 max-w-[720px] text-[17px] leading-[1.9] text-white/68">
            Train at our Ameenpur or Ameerpet branch, or join live online. Both
            branches run the same courses and the same batch timetable.
          </p>
        </header>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {branches.map((b) => (
            <article
              key={b.name}
              className="flex flex-col justify-between gap-7 rounded-[28px] border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:border-[#D4AF37]/25 hover:bg-[#D4AF37]/[0.04]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37]">
                    <MapPin className="h-6 w-6" aria-hidden="true" />
                  </div>
                  {b.badge && (
                    <span className="rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-3 py-[2px] text-[11px] font-semibold uppercase tracking-[0.14em] text-[#D4AF37]">
                      {b.badge}
                    </span>
                  )}
                </div>

                <h3 className="mt-6 text-[22px] font-bold text-white">{b.name}</h3>

                <address className="mt-3 not-italic text-[15px] leading-[1.8] text-white/65">
                  {b.address}
                </address>

                <p className="mt-3 flex items-center gap-2 text-[15px] text-white/65">
                  <Phone className="h-4 w-4 text-[#D4AF37]" aria-hidden="true" />
                  <a href={`tel:${PHONE_TEL}`} className="hover:text-[#D4AF37]">
                    {PHONE}
                  </a>
                </p>
              </div>

              <Link
                href={b.href}
                className="group inline-flex h-[52px] w-fit items-center gap-2 rounded-full bg-[#D4AF37] px-7 text-[15px] font-semibold text-black transition-all duration-300 hover:scale-[1.02]"
              >
                {b.cta}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-[16px] text-white/70">
          Compare every course, fee and batch in one place:{" "}
          <Link href="/networking-training-hyderabad" className="font-semibold text-[#D4AF37] underline underline-offset-4">
            Networking &amp; Cloud Training in Hyderabad
          </Link>
          .
        </p>
      </div>
    </section>
  );
}