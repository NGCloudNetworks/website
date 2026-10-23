import Link from "next/link";
import { MapPin } from "lucide-react";
import { academyStats, trainer } from "@/data/academy";

const heroCourses = [
  { label: "CCNA", href: "/courses/ccna-training-hyderabad" },
  { label: "CCNP Enterprise", href: "/courses/ccnp-enterprise-training-hyderabad" },
  { label: "CCNP Core", href: "/courses/ccnp-core-training-hyderabad" },
  { label: "AWS Cloud", href: "/courses/aws-training-hyderabad" },
  { label: "Azure Cloud", href: "/courses/azure-cloud-training-hyderabad" },
  { label: "Multi-Cloud Security", href: "/courses/cloud-security-training-hyderabad" },
  { label: "Palo Alto Firewall", href: "/courses/palo-alto-firewall-training-hyderabad" },
  { label: "FortiGate Firewall", href: "/courses/fortigate-firewall-training-hyderabad" },
  { label: "F5 Load Balancer", href: "/courses/f5-load-balancer-training-hyderabad" },
  { label: "Cisco SD-WAN", href: "/courses/cisco-sdwan-training-hyderabad" },
];

export default function HeroSection() {
  const heroSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": "https://www.ngcloudnetworks.com/#organization",
    name: "NG Cloud Networks",
    url: "https://www.ngcloudnetworks.com",
    logo: "https://www.ngcloudnetworks.com/logo/ng-icon.png",
    description:
      "NG Cloud Networks is a networking, cloud and cybersecurity training institute in Ameenpur, Hyderabad, offering CCNA, CCNP Enterprise, CCNP Core, AWS, Microsoft Azure, Multi-Cloud Security, Palo Alto Firewall, FortiGate Firewall, F5 Load Balancer and Cisco SD-WAN training with hands-on labs and placement support.",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "H.no:5-125/1/30, Plot No. 30, Royal Homes, Fusion School Back Side, Ameenpur",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "502032",
      addressCountry: "IN",
    },
    telephone: "+91-9989939191",
    areaServed: [
      { "@type": "City", name: "Hyderabad" },
      { "@type": "State", name: "Telangana" },
      { "@type": "State", name: "Andhra Pradesh" },
    ],
    knowsAbout: [
      "CCNA",
      "CCNP Enterprise",
      "AWS Cloud",
      "Microsoft Azure",
      "Multi-Cloud Security",
      "Palo Alto Firewall",
      "FortiGate Firewall",
      "F5 Load Balancer",
      "Cisco SD-WAN",
      "Network Security",
    ],
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
          Best CCNA, CCNP &amp; Multi-Cloud Security
          <span className="block text-[#D4AF37]">Training Institute in Hyderabad</span>
        </h1>

        <p
          className="
            mx-auto mt-7 max-w-[820px] text-[17px] leading-[1.9]
            text-white/70 md:text-[18px]
          "
        >
          NG Cloud Networks is a networking, cloud and cybersecurity training
          institute in Ameenpur, Hyderabad. We teach CCNA, CCNP Enterprise,
          CCNP Core, AWS, Microsoft Azure, Multi-Cloud Security, Palo Alto
          Firewall, FortiGate Firewall, F5 Load Balancer and Cisco SD-WAN
          through live online and classroom batches with hands-on enterprise
          labs. Training is led by {trainer.name}, a{" "}
          {trainer.designation.toLowerCase()} with{" "}
          {trainer.experience.toLowerCase()} of industry experience, and
          includes certification guidance, interview preparation and
          placement support.
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

        <nav aria-label="Courses offered at NG Cloud Networks" className="mt-8">
          <ul className="mx-auto flex max-w-[900px] flex-wrap items-center justify-center gap-2.5">
            {heroCourses.map((course) => (
              <li key={course.href}>
                <Link
                  href={course.href}
                  className="
                    inline-flex rounded-full border border-white/10
                    bg-white/[0.03] px-4 py-2 text-[13px] font-medium
                    text-white/70 transition-all duration-300
                    hover:border-[#D4AF37]/35 hover:text-[#D4AF37]
                  "
                >
                  {course.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

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