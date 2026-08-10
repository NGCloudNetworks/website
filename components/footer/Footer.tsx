"use client";

import Image from "next/image";
import Link from "next/link";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import {
  ArrowUpRight,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

import { courseLinks } from "@/data/courseLinks";

const quickLinks = [
  { title: "About Us", href: "/about" },
  { title: "Placements", href: "/placements" },
  { title: "Corporate Training", href: "/corporate-training" },
  { title: "Resources", href: "/resources" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
];

// Fill in real profile URLs once available — omit entries you don't have yet
const socialLinks = [
  { icon: FaFacebookF, href: "https://facebook.com/ngcloudnetworks" },
  { icon: FaInstagram, href: "https://instagram.com/ngcloudnetworks" },
  { icon: FaLinkedinIn, href: "https://linkedin.com/company/ngcloudnetworks" },
  { icon: FaYoutube, href: "https://youtube.com/@ngcloudnetworks" },
];

export default function Footer() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": "https://www.ngcloudnetworks.com/#organization",
    name: "NG Cloud Networks",
    url: "https://www.ngcloudnetworks.com",
    logo: "https://www.ngcloudnetworks.com/logo/ng-icon.png",
    email: "info@ngcloudnetworks.com",
    telephone: "+91-9989939191",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "H.no:5-125/1/30, Plot No. 30, Royal Homes, Fusion School Back Side, Ameenpur",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "502032",
      addressCountry: "IN",
    },
    ...(socialLinks.length
      ? { sameAs: socialLinks.map((s) => s.href) }
      : {}),
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050505]">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute right-[-120px] bottom-[-120px] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/5 blur-[130px]" />
        <div className="absolute left-[-120px] top-[-120px] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/5 blur-[130px]" />
      </div>

      {/* CONTAINER */}
      <div className="relative z-10 mx-auto max-w-[1450px] px-5 pt-24 pb-10">

        {/* TOP GRID */}
        <div className="grid gap-14 lg:grid-cols-[1.2fr_0.85fr_0.75fr_1fr]">

          {/* BRAND */}
          <div className="max-w-[430px]">

            <Link href="/" className="group flex items-center">
              <div
                className="
                  rounded-2xl border border-white/10 bg-white/[0.03] p-2
                  transition-all duration-300 group-hover:border-[#D4AF37]/30
                  group-hover:bg-[#D4AF37]/[0.05]
                "
              >
                <Image
                  src="/logo/ng-icon.png"
                  alt="NG Cloud Networks"
                  width={52}
                  height={52}
                  className="object-contain"
                />
              </div>

              <div className="ml-4 pt-[1px]">
                <h3 className="text-[19px] font-extrabold tracking-[0.24em] text-white leading-none">
                  NG CLOUD
                </h3>
                <p className="mt-[7px] text-[9px] font-medium uppercase tracking-[0.52em] text-[#D4AF37] leading-none">
                  NETWORKS
                </p>
              </div>
            </Link>

            <p className="mt-8 text-[15px] leading-[2] text-white/55">
              NG Cloud Networks is an enterprise-focused networking,
              cloud and cybersecurity training academy delivering
              practical real-world learning, certification preparation,
              infrastructure implementation skills and placement-focused
              mentorship for students and professionals.
            </p>

            {/* SOCIAL — only renders real, confirmed profile links */}
            {socialLinks.length > 0 && (
              <div className="mt-8 flex items-center gap-4">
                {socialLinks.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={index}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        group flex h-12 w-12 items-center justify-center
                        rounded-2xl border border-white/10 bg-white/[0.03]
                        text-white/60 backdrop-blur-xl transition-all
                        duration-300 hover:-translate-y-1
                        hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/10
                        hover:text-[#D4AF37]
                      "
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            )}

          </div>

          {/* COURSES — now sourced from the shared, locked data */}
          <div>
            <h3 className="text-[22px] font-black tracking-[-0.03em] text-white">
              Popular Courses
            </h3>

            <div className="mt-8 flex flex-col gap-5">
              {courseLinks.map((course) => (
                <Link
                  key={course.slug}
                  href={course.href}
                  className="
                    group flex items-center justify-between text-[15px]
                    text-white/55 transition-all duration-300
                    hover:text-[#D4AF37]
                  "
                >
                  {course.anchor}
                  <ArrowUpRight
                    className="
                      h-4 w-4 opacity-0 translate-x-1 transition-all
                      duration-300 group-hover:translate-x-0
                      group-hover:opacity-100
                    "
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-[22px] font-black tracking-[-0.03em] text-white">
              Quick Links
            </h3>

            <div className="mt-8 flex flex-col gap-5">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="
                    group flex items-center justify-between text-[15px]
                    text-white/55 transition-all duration-300
                    hover:text-[#D4AF37]
                  "
                >
                  {link.title}
                  <ArrowUpRight
                    className="
                      h-4 w-4 opacity-0 translate-x-1 transition-all
                      duration-300 group-hover:translate-x-0
                      group-hover:opacity-100
                    "
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-[22px] font-black tracking-[-0.03em] text-white">
              Contact Us
            </h3>

            <div className="mt-8 flex flex-col gap-6">

              <div className="flex items-start gap-4 rounded-[24px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/10">
                  <MapPin className="h-5 w-5 text-[#D4AF37]" />
                </div>
                <p className="text-[15px] leading-[1.8] text-white/60">
                  H.no:5-125/1/30, Plot No. 30, Royal Homes, Fusion School
                  Back Side, Ameenpur, Hyderabad, Telangana, India 502032
                </p>
              </div>

              <div className="flex items-start gap-4 rounded-[24px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/10">
                  <Mail className="h-5 w-5 text-[#D4AF37]" />
                </div>
                <a
                  href="mailto:info@ngcloudnetworks.com"
                  className="text-[15px] text-white/60 transition-colors duration-300 hover:text-[#D4AF37]"
                >
                  info@ngcloudnetworks.com
                </a>
              </div>

              <div className="flex items-start gap-4 rounded-[24px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/10">
                  <Phone className="h-5 w-5 text-[#D4AF37]" />
                </div>
                <a
                  href="tel:+919989939191"
                  className="text-[15px] text-white/60 transition-colors duration-300 hover:text-[#D4AF37]"
                >
                  +91 9989939191
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* CTA SECTION */}
        <div className="relative mt-20 overflow-hidden rounded-[36px] border border-[#D4AF37]/20 bg-[#D4AF37]/[0.05] p-8 backdrop-blur-2xl lg:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_60%)]" />

          <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-[760px]">
              <h3 className="text-[34px] font-black leading-[1] tracking-[-0.04em] text-white md:text-[42px]">
                Start Your Career in
                <span className="block text-[#D4AF37]">
                  Networking, Cloud & Cyber Security
                </span>
              </h3>
              <p className="mt-5 text-[16px] leading-[1.9] text-white/60">
                Build practical enterprise skills with real-time labs,
                certification-focused mentorship and placement-oriented
                training programs.
              </p>
            </div>

            <Link
              href="/contact"
              className="
                group flex h-[60px] shrink-0 items-center justify-center
                gap-3 rounded-full bg-[#D4AF37] px-8 text-[15px]
                font-semibold text-black transition-all duration-300
                hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(212,175,55,0.35)]
              "
            >
              Contact Our Team
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-[14px] text-white/40">
            © 2026 NG Cloud Networks. All rights reserved.
          </p>
          <p className="text-[14px] text-white/40">
            Enterprise Learning • Real-World Skills • Career Growth
          </p>
        </div>

      </div>
    </footer>
  );
}