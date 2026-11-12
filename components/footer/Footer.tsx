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
  MessageCircle,
  Phone,
} from "lucide-react";

import { courseLinks } from "@/data/courseLinks";

const quickLinks = [
  { title: "About Us", href: "/about" },
  { title: "Placements", href: "/placements" },
  { title: "Ameerpet Branch", href: "/ameerpet" },
  { title: "Corporate Training", href: "/corporate-training" },
  { title: "Resources", href: "/resources" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
];

const branches = [
  {
    name: "Ameenpur Branch",
    badge: "",
    address:
      "H.no:5-125/1/30, Plot No. 30, Royal Homes, Fusion School Back Side, Ameenpur, Hyderabad, Telangana, India 502032",
    primary: { label: "Contact this branch", href: "/contact", external: false },
  },
  {
    name: "Ameerpet Branch",
    badge: "New",
    address:
      "Flat No. 404, 4th Floor, Aditya Enclave, Annapurna Block, Ameerpet, Hyderabad, Telangana, India 500038",
    primary: { label: "Get directions", href: "https://maps.app.goo.gl/B5qT6V1v5F6zUMyv5", external: true },
    secondary: { label: "Branch details", href: "/ameerpet" },
  },
];

const socialLinks = [
  { icon: FaFacebookF, href: "https://facebook.com/ngcloudnetwork", label: "Facebook" },
  { icon: FaInstagram, href: "https://instagram.com/ng_cloud_networks", label: "Instagram" },
  { icon: FaLinkedinIn, href: "https://linkedin.com/company/ng-cloud-networks", label: "LinkedIn" },
  { icon: FaYoutube, href: "https://youtube.com/@ngcloudnetworksofficial?si=3rn1SiCyUE3gd093", label: "YouTube" },
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
    location: [
      {
        "@type": "Place",
        name: "NG Cloud Networks - Ameenpur",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "H.no:5-125/1/30, Plot No. 30, Royal Homes, Fusion School Back Side, Ameenpur",
          addressLocality: "Hyderabad",
          addressRegion: "Telangana",
          postalCode: "502032",
          addressCountry: "IN",
        },
      },
      {
        "@type": "Place",
        name: "NG Cloud Networks - Ameerpet",
        url: "https://www.ngcloudnetworks.com/ameerpet",
        hasMap: "https://maps.app.goo.gl/B5qT6V1v5F6zUMyv5",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "Flat No. 404, 4th Floor, Aditya Enclave, Annapurna Block, Ameerpet",
          addressLocality: "Hyderabad",
          addressRegion: "Telangana",
          postalCode: "500038", // must match the Ameerpet Google Business Profile
          addressCountry: "IN",
        },
      },
    ],
    ...(socialLinks.length
      ? { sameAs: socialLinks.map((s) => s.href) }
      : {}),
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050505]">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema).replace(/</g, "\\u003c") }}
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
                  quality={60}
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
                      aria-label={item.label}
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

              <div className="flex items-start gap-4 rounded-[24px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/10">
                  <MessageCircle className="h-5 w-5 text-[#D4AF37]" />
                </div>
                <a
                  href="https://wa.me/919989939191"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] text-white/60 transition-colors duration-300 hover:text-[#D4AF37]"
                >
                  Chat on WhatsApp
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* BRANCHES */}
        <div className="mt-20">
          <h3 className="text-[22px] font-black tracking-[-0.03em] text-white">
            Our Branches
          </h3>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {branches.map((b) => (
              <div
                key={b.name}
                className="flex flex-col justify-between gap-6 rounded-[28px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:border-[#D4AF37]/30 lg:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/10">
                    <MapPin className="h-5 w-5 text-[#D4AF37]" />
                  </div>
                  <address className="not-italic">
                    <div className="flex items-center gap-3">
                      <span className="text-[17px] font-bold text-white">{b.name}</span>
                      {b.badge && (
                        <span className="rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-3 py-[2px] text-[11px] font-semibold uppercase tracking-[0.14em] text-[#D4AF37]">
                          {b.badge}
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-[15px] leading-[1.8] text-white/60">{b.address}</p>
                  </address>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {b.primary.external ? (
                    <a
                      href={b.primary.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-5 py-2.5 text-[14px] font-semibold text-black transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]"
                    >
                      {b.primary.label}
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </a>
                  ) : (
                    <Link
                      href={b.primary.href}
                      className="group inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-5 py-2.5 text-[14px] font-semibold text-black transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]"
                    >
                      {b.primary.label}
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </Link>
                  )}
                  {"secondary" in b && b.secondary && (
                    <Link
                      href={b.secondary.href}
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-[14px] font-semibold text-white/80 transition-all duration-300 hover:border-[#D4AF37]/40 hover:text-[#D4AF37]"
                    >
                      {b.secondary.label}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="relative mt-14 overflow-hidden rounded-[36px] border border-[#D4AF37]/20 bg-[#D4AF37]/[0.05] p-8 backdrop-blur-2xl lg:p-10">
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
          <p className="text-[14px] text-white/55">
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