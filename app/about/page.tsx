import Link from "next/link";
import Image from "next/image";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import type { Metadata } from "next";

import {
  BadgeCheck,
  Users,
  GraduationCap,
  BriefcaseBusiness,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  Star,
  Network,
  Cloud,
  Lock,
  ArrowUpRight,
} from "lucide-react";

// ---------------------------------------------
// DATA
// ---------------------------------------------

const stats = [
  { icon: Users, value: "10,000+", label: "Students Trained" },
  { icon: BriefcaseBusiness, value: "2500+", label: "Placements" },
  { icon: GraduationCap, value: "15+", label: "Industry Courses" },
  { icon: TrendingUp, value: "92%", label: "Career Support" },
];

const values = [
  {
    icon: Network,
    title: "Enterprise Networking Training",
    href: "/courses/ccna-training-hyderabad",
    description:
      "Learn real-time enterprise routing, switching, SD-WAN and infrastructure implementation with practical Cisco lab environments.",
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure Skills",
    href: "/courses/aws-training-hyderabad",
    description:
      "Build practical AWS and Azure cloud expertise with deployment, networking and cloud administration training.",
  },
  {
    icon: ShieldCheck,
    title: "Cyber Security Training",
    href: "/courses/palo-alto-firewall-training-hyderabad",
    description:
      "Gain hands-on experience in Palo Alto, Fortigate and enterprise security implementation through practical labs.",
  },
  {
    icon: Lock,
    title: "Practical Learning Approach",
    href: "/placements",
    description:
      "We focus heavily on implementation, troubleshooting, projects and interview-oriented practical training.",
  },
];

// Founder / Lead Trainer — real data
const founder = {
  name: "Nazeer Basha",
  designation: "Senior Enterprise Network & Infrastructure Consultant",
  experience: "14+ Years",
  bio: "Nazeer Basha is an experienced enterprise networking professional with more than 14 years of industry and training experience. He has trained hundreds of students, freshers and working professionals in Cisco Networking, Enterprise Infrastructure, Routing & Switching, SD-WAN, Network Security and Cloud Networking. His practical teaching methodology focuses on real-world implementation, enterprise troubleshooting, certification preparation and interview readiness.",
  expertise: [
    "Cisco Enterprise Networking",
    "CCNA",
    "CCNP Enterprise",
    "Enterprise Routing & Switching",
    "Cisco SD-WAN",
    "Network Security",
    "Cloud Networking",
    "Infrastructure Design",
    "Enterprise Network Troubleshooting",
    "Campus Network Architecture",
  ],
};

// Real alumni placements
const alumni = [
  { name: "Naveen", role: "Network Security Engineer", company: "Cisco", course: "CCNA & Palo Alto Firewall" },
  { name: "Rajesh", role: "Network Engineer", company: "ValueLabs", course: "CCNA Training" },
  { name: "Sai Kumar", role: "Network Administrator", company: "Bell Techlogix India Pvt. Ltd.", course: "CCNA Training" },
  { name: "Ajay", role: "Network Security Engineer", company: "Cloud4C", course: "CCNA & Palo Alto Firewall" },
  { name: "Sikesh", role: "Network Engineer", company: "HCL Technologies", course: "CCNA Training" },
  { name: "Vinay", role: "Network Engineer", company: "Teleperformance", course: "CCNA Training" },
];

// Real Google Business Profile reviews (6 of 13 total)
const testimonials = [
  {
    name: "Janardhana Anke",
    courses: "CCNA, CCNP Enterprise & Palo Alto Firewall",
    quote:
      "The training was excellent, with a strong focus on real-time industry requirements and hands-on lab practice. After completing the training and preparing for interviews under Nazeer Sir's guidance, I successfully got a job in the networking field.",
  },
  {
    name: "Jagan Kandula",
    courses: "CCNA & Palo Alto Firewall",
    quote:
      "I gained strong knowledge of switching, routing, and Palo Alto firewall technologies. The live practical labs and real-time scenarios helped me build confidence and improve my hands-on networking skills.",
  },
  {
    name: "Mohammed Zain",
    courses: "CCNA & Palo Alto Firewall",
    quote:
      "He explains networking protocols from the basics to advanced levels, making sure every concept is clearly understood. His way of teaching helps in understanding how protocols actually work in real networks, not just for exams but for practical implementation.",
  },
  {
    name: "Mohammed Muzammil",
    courses: "CCNA & CCNP",
    quote:
      "The comprehensive curriculum covered everything from routing and switching fundamentals to advanced protocols like OSPF, EIGRP, and BGP, with excellent exam preparation materials that boosted my confidence.",
  },
  {
    name: "Sudharshan Reddy",
    courses: "CCNP Enterprise",
    quote:
      "The trainer explained every topic clearly with practical lab sessions and real-time examples. The hands-on practice and troubleshooting sessions greatly improved my networking skills and confidence.",
  },
  {
    name: "Bhargav Vijay",
    courses: "CCNA & Palo Alto Firewall",
    quote:
      "The sessions were well-structured, interactive, and included practical examples that helped me build confidence in both networking fundamentals and firewall technologies.",
  },
];

const aboutFaqs = [
  {
    q: "Who founded NG Cloud Networks?",
    a: "NG Cloud Networks was founded by Nazeer Basha, a Senior Enterprise Network & Infrastructure Consultant with 14+ years of industry and training experience in Cisco Networking, Enterprise Infrastructure, Network Security and Cloud Networking.",
  },
  {
    q: "Who is the trainer at NG Cloud Networks?",
    a: "All courses at NG Cloud Networks are trained directly by Nazeer Basha, who has trained hundreds of students, freshers and working professionals in CCNA, CCNP Enterprise, Cisco SD-WAN, Network Security and Cloud Networking with a practical, real-world implementation approach.",
  },
  {
    q: "Where is NG Cloud Networks located?",
    a: "NG Cloud Networks is located in Ameenpur, Hyderabad, Telangana, near Fusion School.",
  },
  {
    q: "What courses does NG Cloud Networks offer?",
    a: "NG Cloud Networks offers CCNA, CCNP Enterprise, AWS, Azure, Palo Alto Firewall, Fortigate Firewall and F5 Load Balancer training with enterprise-level practical labs and placement support.",
  },
  {
    q: "Does NG Cloud Networks provide placement support?",
    a: "Yes. NG Cloud Networks provides placement-oriented training with interview preparation and career mentorship. Alumni have gone on to roles at companies including Cisco, HCL Technologies, ValueLabs, Cloud4C, Bell Techlogix and Teleperformance.",
  },
];

// ---------------------------------------------
// METADATA
// ---------------------------------------------

export const metadata: Metadata = {
  title:
    "About NG Cloud Networks | Best Networking, Cloud & Cyber Security Training Institute in Hyderabad",
  description:
    "NG Cloud Networks is a Hyderabad-based networking, cloud and cyber security training institute founded by Nazeer Basha (14+ years experience). Practical CCNA, CCNP, AWS, Azure, Palo Alto, Fortigate and F5 Load Balancer training with placement support.",
  keywords: [
    "About NG Cloud Networks",
    "Nazeer Basha",
    "Networking Institute Hyderabad",
    "Cloud Training Institute Hyderabad",
    "Cyber Security Training Hyderabad",
    "CCNA Institute Hyderabad",
    "CCNP Training Hyderabad",
    "AWS Training Hyderabad",
    "Azure Training Hyderabad",
    "Palo Alto Training Hyderabad",
    "Fortigate Training Hyderabad",
    "F5 Load Balancer Training Hyderabad",
    "IT Training Institute Hyderabad",
    "Best Networking Institute",
    "Cloud Computing Courses Hyderabad",
    "Cyber Security Institute Hyderabad",
    "Placement Oriented IT Training",
    "Enterprise Networking Training",
    "Practical IT Training Hyderabad",
    "Cisco Training Institute",
    "Network Engineer Training",
  ],
  alternates: {
    canonical: "https://ngcloudnetworks.com/about",
  },
  openGraph: {
    title: "About NG Cloud Networks",
    description:
      "Practical networking, cloud and cybersecurity training institute in Hyderabad, founded by Nazeer Basha, with enterprise labs and placement support.",
    url: "https://ngcloudnetworks.com/about",
    siteName: "NG Cloud Networks",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About NG Cloud Networks",
    description:
      "Enterprise networking, cloud and cybersecurity training institute in Hyderabad, founded by Nazeer Basha.",
  },
};

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#050505] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden pt-40 pb-24 lg:pt-44 lg:pb-32">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute left-[-140px] top-[-120px] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/10 blur-[130px]" />
          <div className="absolute right-[-140px] bottom-[-120px] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/10 blur-[130px]" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "52px 52px",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[1450px] px-5">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-5 py-2.5 backdrop-blur-xl">
                <div className="h-2 w-2 rounded-full bg-[#D4AF37]" />
                <span className="text-sm tracking-wide text-[#f5e6b3]">
                  About NG Cloud Networks
                </span>
              </div>

              <h1 className="mt-8 text-[48px] font-black leading-[0.92] tracking-[-0.05em] text-white md:text-[74px] xl:text-[96px]">
                Practical IT Training
                <span className="mt-3 block text-[#D4AF37]">
                  For Real Careers
                </span>
              </h1>

              <p className="mt-8 max-w-[820px] text-[18px] leading-[1.95] text-white/60">
                NG Cloud Networks is a networking, cloud computing and
                cyber security training institute based in Ameenpur,
                Hyderabad, founded by Nazeer Basha, a Senior Enterprise
                Network & Infrastructure Consultant with 14+ years of
                industry and training experience. We offer practical
                CCNA, CCNP, AWS, Azure, Palo Alto, Fortigate and F5
                Load Balancer training with enterprise-level labs,
                certification guidance and placement assistance.
              </p>

              <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/courses"
                  className="group flex h-[60px] items-center justify-center gap-3 rounded-full bg-[#D4AF37] px-8 text-[15px] font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(212,175,55,0.35)]"
                >
                  Explore Courses
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/contact"
                  className="flex h-[60px] items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-8 text-[15px] font-medium text-white transition-all duration-300 hover:border-[#D4AF37]/30 hover:text-[#D4AF37]"
                >
                  Book Free Demo
                </Link>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl lg:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.12),transparent_55%)]" />

              <div className="relative z-10">
                <h2 className="text-[34px] font-black tracking-[-0.03em] text-white">
                  Why Students Choose Us
                </h2>

                <div className="mt-10 space-y-5">
                  {[
                    "Enterprise-Level Practical Labs",
                    "Real-Time Networking & Cloud Projects",
                    "Placement-Oriented Training",
                    "Certification Preparation",
                    "Interview Mentorship & Resume Support",
                    "Industry-Focused Practical Sessions",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 rounded-[24px] border border-white/10 bg-black/20 px-5 py-5 transition-all duration-300 hover:border-[#D4AF37]/20"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#D4AF37]/10">
                        <BadgeCheck className="h-5 w-5 text-[#D4AF37]" />
                      </div>
                      <p className="text-[16px] leading-[1.8] text-white/75">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="sr-only">
        NG Cloud Networks, founded by Nazeer Basha, provides practical
        IT training in Hyderabad including CCNA training, CCNP
        Enterprise training, AWS cloud training, Azure cloud training,
        Palo Alto firewall training, Fortigate firewall training and
        F5 Load Balancer training with enterprise practical labs,
        certification guidance and placement support.
      </div>

      {/* FOUNDER / LEAD TRAINER — E-E-A-T */}
      <section className="relative overflow-hidden py-20">
        <div className="mx-auto max-w-[1450px] px-5">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#D4AF37]/70">
                Founder & Lead Trainer
              </p>

              <h2 className="mt-3 text-[36px] font-black tracking-[-0.03em] text-white">
                {founder.name}
              </h2>

              <p className="mt-2 text-[16px] text-white/60">
                {founder.designation} · {founder.experience} Experience
              </p>

              <p className="mt-6 text-[16px] leading-[1.9] text-white/70">
                {founder.bio}
              </p>

              <div
                itemScope
                itemType="https://schema.org/Person"
                className="mt-6 flex flex-wrap gap-2"
              >
                <meta itemProp="name" content={founder.name} />
                <meta itemProp="jobTitle" content={founder.designation} />
                {founder.expertise.map((skill) => (
                  <span
                    key={skill}
                    itemProp="knowsAbout"
                    className="rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-4 py-1.5 text-[13px] text-[#f5e6b3]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative overflow-hidden py-20">
        <div className="mx-auto max-w-[1450px] px-5">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-300 hover:border-[#D4AF37]/20 hover:bg-[#D4AF37]/[0.03]"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4AF37]/10">
                    <Icon className="h-7 w-7 text-[#D4AF37]" />
                  </div>
                  <h3 className="mt-7 text-[46px] font-black tracking-[-0.04em] text-white">
                    {item.value}
                  </h3>
                  <p className="mt-2 text-[15px] text-white/60">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="relative overflow-hidden py-28">
        <div className="mx-auto max-w-[1450px] px-5">
          <div className="max-w-[900px]">
            <h2 className="text-[42px] font-black leading-[0.96] tracking-[-0.05em] text-white md:text-[66px]">
              What Makes Our
              <span className="block text-[#D4AF37]">Training Different</span>
            </h2>
            <p className="mt-8 max-w-[760px] text-[18px] leading-[1.95] text-white/60">
              We focus on practical implementation, enterprise
              scenarios, interview preparation and career-oriented
              technical training under the direct mentorship of Nazeer
              Basha.
            </p>
          </div>

          <div className="mt-20 grid gap-7 md:grid-cols-2">
            {values.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link
                  key={index}
                  href={item.href}
                  className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:border-[#D4AF37]/30 hover:bg-[#D4AF37]/[0.03]"
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.12),transparent_55%)]" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4AF37]/10">
                        <Icon className="h-7 w-7 text-[#D4AF37]" />
                      </div>
                      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] opacity-0 translate-x-2 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
                        <ArrowUpRight className="h-5 w-5 text-[#D4AF37]" />
                      </div>
                    </div>

                    <h3 className="mt-8 text-[30px] font-black leading-[1.1] tracking-[-0.03em] text-white">
                      {item.title}
                    </h3>
                    <p className="mt-5 text-[16px] leading-[1.9] text-white/60">
                      {item.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ALUMNI PLACEMENTS */}
      <section className="relative overflow-hidden py-28">
        <div className="mx-auto max-w-[1450px] px-5">
          <div className="max-w-[850px]">
            <h2 className="text-[42px] font-black leading-[1] tracking-[-0.04em] text-white md:text-[64px]">
              Where Our
              <span className="block text-[#D4AF37]">Alumni Work</span>
            </h2>
            <p className="mt-7 max-w-[720px] text-[18px] leading-[1.9] text-white/60">
              Real students, real placements — trained by Nazeer Basha
              and now working across leading networking and IT
              organizations.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {alumni.map((person, index) => (
              <div
                key={index}
                className="rounded-[30px] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-all duration-300 hover:border-[#D4AF37]/20"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4AF37]/10">
                  <BriefcaseBusiness className="h-5 w-5 text-[#D4AF37]" />
                </div>
                <h3 className="mt-5 text-[19px] font-bold text-white">
                  {person.name}
                </h3>
                <p className="mt-1 text-[14px] text-[#D4AF37]">
                  {person.role} · {person.company}
                </p>
                <p className="mt-3 text-[13px] text-white/50">
                  Trained in: {person.course}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS — real Google Business Profile reviews */}
      <section className="relative overflow-hidden py-28">
        <div className="mx-auto max-w-[1450px] px-5">
          <div className="max-w-[850px]">
            <h2 className="text-[42px] font-black leading-[1] tracking-[-0.04em] text-white md:text-[64px]">
              Student
              <span className="block text-[#D4AF37]">Success Stories</span>
            </h2>
            <p className="mt-6 text-[16px] text-white/50">
              From our Google Business Profile — 13 verified reviews
              and counting.
            </p>
          </div>

          <div className="mt-20 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="rounded-[34px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
              >
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-[#D4AF37] text-[#D4AF37]"
                    />
                  ))}
                </div>

                <p className="mt-7 text-[16px] leading-[1.9] text-white/60">
                  &ldquo;{item.quote}&rdquo;
                </p>

                <div className="mt-8">
                  <h3 className="text-[20px] font-bold text-white">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-[#D4AF37]">{item.courses}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://www.google.com/search?q=NG+Cloud+Networks+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] text-white/50 underline hover:text-[#D4AF37]"
            >
              Read all 13 reviews on Google
            </a>
          </div>
        </div>
      </section>

      {/* POPULAR COURSES */}
      <section className="relative overflow-hidden py-24">
        <div className="mx-auto max-w-[1450px] px-5">
          <div className="max-w-[950px]">
            <h2 className="text-[40px] font-black leading-[1] tracking-[-0.04em] text-white md:text-[62px]">
              Explore Our
              <span className="block text-[#D4AF37]">Popular IT Courses</span>
            </h2>
            <p className="mt-7 max-w-[760px] text-[18px] leading-[1.9] text-white/60">
              Build practical skills in enterprise networking, cloud
              computing, cyber security and infrastructure
              technologies with placement-oriented practical training.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {[
              { title: "CCNA Training", href: "/courses/ccna-training-hyderabad" },
              { title: "CCNP Enterprise Training", href: "/courses/ccnp-enterprise-training-hyderabad" },
              { title: "AWS Cloud Training", href: "/courses/aws-training-hyderabad" },
              { title: "Azure Cloud Training", href: "/courses/azure-cloud-training-hyderabad" },
              { title: "Palo Alto Firewall Training", href: "/courses/palo-alto-firewall-training-hyderabad" },
              { title: "F5 Load Balancer Training", href: "/courses/f5-load-balancer-training-hyderabad" },
            ].map((course) => (
              <Link
                key={course.title}
                href={course.href}
                className="group flex items-center justify-between rounded-[28px] border border-white/10 bg-white/[0.03] px-6 py-5 transition-all duration-300 hover:border-[#D4AF37]/30 hover:bg-[#D4AF37]/[0.03]"
              >
                <span className="text-[17px] font-medium text-white">
                  {course.title}
                </span>
                <ArrowUpRight className="h-5 w-5 text-[#D4AF37] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — AEO direct-answer block */}
      <section className="relative overflow-hidden py-24">
        <div className="mx-auto max-w-[950px] px-5">
          <h2 className="text-[36px] font-black tracking-[-0.03em] text-white md:text-[48px]">
            Frequently Asked Questions
          </h2>

          <div className="mt-10 space-y-4">
            {aboutFaqs.map((item, i) => (
              <div
                key={i}
                className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6"
              >
                <h3 className="text-[18px] font-semibold text-white">
                  {item.q}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.8] text-white/60">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden pb-28">
        <div className="mx-auto max-w-[1450px] px-5">
          <div className="relative overflow-hidden rounded-[42px] border border-[#D4AF37]/20 bg-[#D4AF37]/[0.05] p-10 backdrop-blur-2xl lg:p-16">
            <div className="absolute right-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-[#D4AF37]/10 blur-[120px]" />

            <div className="relative z-10 max-w-[900px]">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-5 py-2.5">
                <BadgeCheck className="h-4 w-4 text-[#D4AF37]" />
                <span className="text-sm text-[#f5e6b3]">
                  Build Your IT Career
                </span>
              </div>

              <h2 className="mt-8 text-[42px] font-black leading-[0.96] tracking-[-0.04em] text-white md:text-[68px]">
                Start Learning with
                <span className="block text-[#D4AF37]">NG Cloud Networks</span>
              </h2>

              <p className="mt-8 max-w-[760px] text-[18px] leading-[1.9] text-white/60">
                Learn enterprise networking, cloud computing and
                cybersecurity directly from Nazeer Basha, with
                practical labs, placement mentorship and real-world
                implementation training.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/courses"
                  className="group flex h-[58px] items-center justify-center gap-3 rounded-full bg-[#D4AF37] px-8 text-[15px] font-semibold text-black transition-all duration-300 hover:scale-[1.02]"
                >
                  Explore Courses
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/contact"
                  className="flex h-[58px] items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-8 text-[15px] font-medium text-white transition-all duration-300 hover:border-[#D4AF37]/30 hover:text-[#D4AF37]"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCHEMA: EducationalOrganization + Founder */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "NG Cloud Networks",
            url: "https://ngcloudnetworks.com",
            logo: "https://ngcloudnetworks.com/logo.png",
            telephone: "+91-9989939191",
            description:
              "Networking, cloud computing and cyber security training institute in Hyderabad, founded by Nazeer Basha.",
            founder: {
              "@type": "Person",
              name: founder.name,
              jobTitle: founder.designation,
              knowsAbout: founder.expertise,
            },
            employee: {
              "@type": "Person",
              name: founder.name,
              jobTitle: founder.designation,
              knowsAbout: founder.expertise,
            },
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "H.no:5-125/1/30, Plot no 30, Royal Homes, Fusion School Back Side, Ameenpur",
              addressLocality: "Hyderabad",
              addressRegion: "Telangana",
              postalCode: "502032",
              addressCountry: "IN",
            },
            sameAs: [
              "https://www.instagram.com/ng_cloud_networks",
              "https://www.linkedin.com/company/ng-cloud-networks",
            ],
            offers: [
              { "@type": "Course", name: "CCNA Training Hyderabad" },
              { "@type": "Course", name: "AWS Training Hyderabad" },
              { "@type": "Course", name: "Palo Alto Firewall Training Hyderabad" },
            ],
          }),
        }}
      />

      {/* SCHEMA: FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: aboutFaqs.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          }),
        }}
      />

      <Footer />
    </main>
  );
}