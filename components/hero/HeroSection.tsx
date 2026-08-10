import Link from "next/link";
import { ShieldCheck, Users2, Award, MapPin } from "lucide-react";
import { academyStats, trainer } from "@/data/academy";

export default function HeroSection() {
  const heroSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": "https://www.ngcloudnetworks.com/#organization",
    name: "NG Cloud Networks",
    url: "https://www.ngcloudnetworks.com",
    logo: "https://www.ngcloudnetworks.com/logo/ng-icon.png",
    description:
      "NG Cloud Networks is a networking, cloud and cyber security training institute in Ameenpur, Hyderabad, offering CCNA, CCNP, AWS, Azure, Palo Alto, Fortigate, F5 and Cisco SD-WAN training with practical labs and placement support.",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "H.no:5-125/1/30, Plot No. 30, Royal Homes, Fusion School Back Side, Ameenpur",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "502032", // confirm real PIN
      addressCountry: "IN",
    },
    telephone: "+91-9989939191",
    // sameAs omitted until real profile URLs are confirmed — see note below
  };

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-[180px] pb-20 md:pt-[220px] md:pb-28"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-[-200px] top-[-140px] h-[480px] w-[480px] rounded-full bg-[#D4AF37]/8 blur-[200px]" />
        <div className="absolute right-[-200px] top-[100px] h-[480px] w-[480px] rounded-full bg-[#D4AF37]/6 blur-[200px]" />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(heroSchema) }}
      />

      <div className="relative z-10 mx-auto max-w-[1100px] px-5 text-center">

        <span
          className="
            inline-flex items-center gap-2 rounded-full border
            border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-2
            text-sm font-semibold text-[#D4AF37]
          "
        >
          <MapPin className="h-4 w-4" aria-hidden="true" />
          Enterprise Networking, Cloud &amp; Security Academy — Ameenpur, Hyderabad
        </span>

        <h1
          id="hero-heading"
          className="
            mt-7 text-[42px] font-black leading-[1.05] tracking-[-0.04em]
            text-white md:text-[64px]
          "
        >
          Best CCNA, CCNP &amp; Cloud Security
          <span className="block text-[#D4AF37]">Training Institute in Hyderabad</span>
        </h1>

        <p
          className="
            mx-auto mt-7 max-w-[820px] text-[17px] leading-[1.9]
            text-white/70 md:text-[18px]
          "
        >
          NG Cloud Networks is a Hyderabad-based training institute offering
          practical CCNA, CCNP Enterprise, CCNP Core, AWS, Azure, Palo Alto,
          Fortigate, F5 Load Balancer and Cisco SD-WAN training. Led by{" "}
          {trainer.name}, a {trainer.designation.toLowerCase()} with{" "}
          {trainer.experience} of industry experience, courses run on real
          enterprise lab equipment with certification guidance, interview
          preparation and placement support.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="
              inline-flex h-[58px] items-center justify-center rounded-full
              bg-[#D4AF37] px-9 text-[15px] font-bold text-black
              transition-all duration-300 hover:scale-[1.02]
              hover:shadow-[0_0_35px_rgba(212,175,55,0.35)]
            "
          >
            Book Free Demo
          </Link>

          <Link
            href="/courses"
            className="
              inline-flex h-[58px] items-center justify-center rounded-full
              border border-[#D4AF37]/25 bg-white/[0.03] px-9
              text-[15px] font-semibold text-white
              transition-all duration-300 hover:border-[#D4AF37]/45
              hover:bg-[#D4AF37]/5
            "
          >
            Explore All Courses
          </Link>
        </div>

        <dl
          className="
            mx-auto mt-14 grid max-w-[820px] grid-cols-2 gap-6
            border-t border-white/10 pt-10 sm:grid-cols-4
          "
        >
          <div className="flex flex-col-reverse items-center gap-2">
            <dt className="text-xs text-white/50">Students Trained</dt>
            <dd className="text-[26px] font-black text-white">
              {academyStats.studentsTrained}
            </dd>
          </div>

          <div className="flex flex-col-reverse items-center gap-2">
            <dt className="text-xs text-white/50">Placement Support</dt>
            <dd className="text-[26px] font-black text-white">
              {academyStats.placementSupport}
            </dd>
          </div>

          <div className="flex flex-col-reverse items-center gap-2">
            <dt className="text-xs text-white/50">Trainer Experience</dt>
            <dd className="text-[26px] font-black text-white">
              {trainer.experience}
            </dd>
          </div>

          <div className="flex flex-col-reverse items-center gap-2">
            <dt className="text-xs text-white/50">Batch Rating</dt>
            <dd className="text-[26px] font-black text-white">
              {academyStats.rating}
            </dd>
          </div>
        </dl>

      </div>
    </section>
  );
}