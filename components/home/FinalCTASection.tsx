import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { academyStats } from "@/data/academy";

export default function FinalCTASection() {
  return (
    <section
      id="get-started"
      aria-labelledby="final-cta-heading"
      className="relative overflow-hidden py-20 md:py-28"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/8 blur-[220px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[900px] px-5 text-center">

        <span
          className="
            inline-flex rounded-full border border-[#D4AF37]/20
            bg-[#D4AF37]/10 px-4 py-2 text-sm font-semibold text-[#D4AF37]
          "
        >
          Start Your Networking Career Today
        </span>

        <h2
          id="final-cta-heading"
          className="
            mt-6 text-[36px] font-black leading-[1.1] tracking-[-0.04em]
            text-white md:text-[52px]
          "
        >
          Book a Free Demo Class at
          <span className="block text-[#D4AF37]">NG Cloud Networks, Hyderabad</span>
        </h2>

        <p
          className="
            mx-auto mt-6 max-w-[620px] text-[16px] leading-[1.9]
            text-white/65
          "
        >
          Join {academyStats.studentsTrained} students trained in CCNA, CCNP,
          AWS, Azure, Palo Alto, Fortigate and Cisco SD-WAN. Experience our
          teaching methodology and enterprise labs before you enroll.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="
              inline-flex h-[58px] items-center justify-center gap-2
              rounded-full bg-[#D4AF37] px-9 text-[15px] font-bold text-black
              transition-all duration-300 hover:scale-[1.02]
              hover:shadow-[0_0_35px_rgba(212,175,55,0.35)]
            "
          >
            Book Free Demo
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>

          <a
            href="tel:+919989939191"
            className="
              inline-flex h-[58px] items-center justify-center gap-2
              rounded-full border border-[#D4AF37]/25 bg-white/[0.03] px-9
              text-[15px] font-semibold text-white
              transition-all duration-300 hover:border-[#D4AF37]/45
              hover:bg-[#D4AF37]/5
            "
          >
            <Phone className="h-4 w-4 text-[#D4AF37]" aria-hidden="true" />
            +91 99899 39191
          </a>
        </div>

      </div>
    </section>
  );
}