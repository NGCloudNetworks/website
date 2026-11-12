"use client";

// components/contact/ContactPageClient.tsx (v2)
// Semantic structure: Navbar / <main> / Footer. One H1. JSON-LD only (no mixed microdata).
// Metadata and page-level schema live in the server page.tsx.

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock3,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  MessageSquare,
  MessageCircle,
  GraduationCap,
} from "lucide-react";
import { courseLinks } from "@/data/courseLinks";

const PHONE_DISPLAY = "+91 99899 39191";
const PHONE_TEL = "+919989939191";
const EMAIL = "info@ngcloudnetworks.com";
const WHATSAPP = "https://wa.me/919989939191";
const MAPS_AMEERPET = "https://maps.app.goo.gl/B5qT6V1v5F6zUMyv5";
const MAPS_AMEENPUR = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "NG Cloud Networks, Royal Homes, Fusion School Back Side, Ameenpur, Hyderabad 502032"
)}`;
const HOURS = "Monday to Saturday, 9:00 AM to 8:00 PM"; // CONFIRM: must match the hours on both Google Business Profiles
const LAST_UPDATED = "2026-11-12";

const BRANCHES = [
  {
    id: "ameenpur",
    name: "Ameenpur Branch",
    badge: "",
    street: "H.no:5-125/1/30, Plot No. 30, Royal Homes, Fusion School Back Side, Ameenpur",
    pin: "502032",
    mapUrl: MAPS_AMEENPUR,
    mapLabel: "View on Google Maps",
    detailsHref: "",
  },
  {
    id: "ameerpet",
    name: "Ameerpet Branch",
    badge: "New",
    street: "Flat No. 404, 4th Floor, Aditya Enclave, Annapurna Block, Ameerpet",
    pin: "500038",
    mapUrl: MAPS_AMEERPET,
    mapLabel: "Get directions",
    detailsHref: "/ameerpet",
  },
];

const FAQS = [
  {
    q: "How can I contact NG Cloud Networks?",
    a: `Call or WhatsApp ${PHONE_DISPLAY}, email ${EMAIL}, or send the enquiry form on this page. Calling or WhatsApp is the fastest way to get batch timings and book a free demo class.`,
  },
  {
    q: "Where are the NG Cloud Networks branches in Hyderabad?",
    a: "NG Cloud Networks has two branches in Hyderabad: Ameenpur (Royal Homes, Fusion School Back Side, 502032) and Ameerpet (Aditya Enclave, Annapurna Block, 500038). Both offer the same courses.",
  },
  {
    q: "What are the working hours?",
    a: `The office is open ${HOURS}. Batch timings vary by course, so call to confirm the time for your course and branch.`,
  },
  {
    q: "Can I visit a branch or attend a demo class before joining?",
    a: `Yes. Call or WhatsApp ${PHONE_DISPLAY} to book a free demo class at the Ameenpur or Ameerpet branch, or online.`,
  },
  {
    q: "Which branch should I choose?",
    a: "Both branches run the same courses and the same batch timetable. Choose the one that is easier for you to reach, or choose live online if you cannot travel.",
  },
  {
    q: "Do you offer online classes?",
    a: "Yes. Live online, classroom and hybrid learning are available. Mention your preferred mode in the enquiry form.",
  },
];

const STEPS = [
  "Send the form, call or WhatsApp us with your course and preferred branch.",
  "Our team shares batch timings, the syllabus and the current fee.",
  "Attend a free demo class and meet the trainer.",
  "Confirm your batch and start hands-on labs.",
];

const pills = [
  { title: "CCNA Training in Hyderabad", href: "/courses/ccna-training-hyderabad" },
  { title: "AWS Training in Hyderabad", href: "/courses/aws-training-hyderabad" },
  { title: "Palo Alto Firewall Training", href: "/courses/palo-alto-firewall-training-hyderabad" },
  { title: "All Courses", href: "/courses" },
  { title: "Ameerpet Branch", href: "/ameerpet" },
];

const branchOptions = ["No preference", "Ameenpur Branch", "Ameerpet Branch", "Live Online"];
const courseOptions = courseLinks.map((c) => c.anchor.replace(" Hyderabad", ""));

// Page-level schema (ContactPage, branches, breadcrumb) lives in app/contact/page.tsx. This component only adds the FAQ markup.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const card = "rounded-[28px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl";
const iconBox = "flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37]/10";
const label = "mb-2 block text-[14px] font-medium text-white/70";
const field =
  "h-[58px] w-full rounded-2xl border border-white/10 bg-black/20 px-5 text-white outline-none transition-all duration-300 placeholder:text-white/35 focus:border-[#D4AF37]/50 focus:shadow-[0_0_0_4px_rgba(212,175,55,0.08)]";
const selectCls =
  "h-[58px] w-full appearance-none rounded-2xl border border-white/10 bg-[#0d0d0d] px-5 text-[15px] font-medium text-white outline-none transition-all duration-300 focus:border-[#D4AF37]/50 focus:shadow-[0_0_0_4px_rgba(212,175,55,0.08)]";
const h2cls = "text-[34px] font-black leading-[1.05] tracking-[-0.04em] text-white md:text-[48px]";

export default function ContactPageClient() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [branch, setBranch] = useState(branchOptions[0]);
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState(""); // honeypot, must stay empty

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (website) {
      setSuccess(true); // bots: pretend success, send nothing
      return;
    }
    try {
      setLoading(true);
      setSuccess(false);
      setError(false);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          course,
          message: `Preferred branch: ${branch}${message ? `\n\n${message}` : ""}`,
          branch,
          type: "contact",
        }),
      });
      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag?.("event", "generate_lead", {
          form: "contact",
          course,
          branch,
        });
        setName("");
        setEmail("");
        setPhone("");
        setCourse("");
        setBranch(branchOptions[0]);
        setMessage("");
      } else {
        setError(true);
      }
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }}
      />
      <Navbar />

      <main className="overflow-hidden bg-[#050505] text-white">
        {/* HERO + FORM */}
        <section aria-labelledby="contact-h1" className="relative overflow-hidden pb-20 pt-36 lg:pb-28 lg:pt-40">
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="absolute left-[-140px] top-[-120px] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/10 blur-[130px]" />
            <div className="absolute bottom-[-120px] right-[-140px] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/10 blur-[130px]" />
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
                backgroundSize: "52px 52px",
              }}
            />
          </div>

          <div className="relative z-10 mx-auto max-w-[1400px] px-5">
            <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/50">
              <ol className="flex items-center gap-2">
                <li><Link href="/" className="hover:text-[#D4AF37]">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-white/80">Contact</li>
              </ol>
            </nav>

            <div className="grid items-start gap-14 lg:grid-cols-[1fr_0.95fr]">
              {/* LEFT */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-5 py-2.5 backdrop-blur-xl">
                  <div className="h-2 w-2 rounded-full bg-[#D4AF37]" aria-hidden="true" />
                  <span className="text-sm tracking-wide text-[#f5e6b3]">Two branches in Hyderabad</span>
                </div>

                <h1
                  id="contact-h1"
                  className="mt-8 text-[40px] font-black leading-[1] tracking-[-0.05em] text-white md:text-[60px] xl:text-[72px]"
                >
                  Contact NG Cloud Networks
                  <span className="mt-3 block text-[#D4AF37]">Ameenpur & Ameerpet, Hyderabad</span>
                </h1>

                <p className="mt-8 max-w-[740px] text-[18px] leading-[1.9] text-white/60">
                  NG Cloud Networks has two training branches in Hyderabad: Ameenpur and the new Ameerpet
                  branch. Contact us for CCNA, CCNP, Cisco SD-WAN, Palo Alto, Fortigate, F5 Load Balancer,
                  AWS, Azure and Cloud Security training with enterprise practical labs, certification
                  guidance and placement assistance, led by Nazeer Basha, a Senior Enterprise Network &amp;
                  Infrastructure Consultant with 14+ years of experience.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="inline-flex h-[54px] items-center gap-2 rounded-full bg-[#D4AF37] px-7 text-[15px] font-semibold text-black transition-all duration-300 hover:shadow-[0_0_35px_rgba(212,175,55,0.35)]"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" /> Call {PHONE_DISPLAY}
                  </a>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-[54px] items-center gap-2 rounded-full border border-[#D4AF37]/50 px-7 text-[15px] font-semibold text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37]/10"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp
                  </a>
                </div>

                <ul className="mt-8 flex flex-wrap gap-3" aria-label="Popular pages">
                  {pills.map((c) => (
                    <li key={c.href}>
                      <Link
                        href={c.href}
                        className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[13.5px] font-medium text-white/70 transition-all duration-300 hover:border-[#D4AF37]/30 hover:text-[#D4AF37]"
                      >
                        {c.title}
                        <ArrowUpRight
                          className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 grid gap-5 md:grid-cols-2">
                  <div className={card}>
                    <div className={iconBox}><Mail className="h-6 w-6 text-[#D4AF37]" aria-hidden="true" /></div>
                    <h2 className="mt-5 text-[20px] font-bold text-white">Email Us</h2>
                    <a href={`mailto:${EMAIL}`} className="mt-2 block break-all text-[16px] text-white/60 transition-colors hover:text-[#D4AF37]">
                      {EMAIL}
                    </a>
                  </div>
                  <div className={card}>
                    <div className={iconBox}><Clock3 className="h-6 w-6 text-[#D4AF37]" aria-hidden="true" /></div>
                    <h2 className="mt-5 text-[20px] font-bold text-white">Working Hours</h2>
                    <p className="mt-2 text-[16px] text-white/60">{HOURS}</p>
                    <p className="mt-2 text-[13px] text-white/40">Batch timings vary by course. Call to confirm.</p>
                  </div>
                </div>
              </div>

              {/* FORM */}
              <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl lg:p-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.12),transparent_55%)]" aria-hidden="true" />
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-2">
                    <MessageSquare className="h-4 w-4 text-[#D4AF37]" aria-hidden="true" />
                    <span className="text-sm text-[#f5e6b3]">Get Free Career Guidance</span>
                  </div>

                  <h2 className="mt-6 text-[34px] font-black leading-[1] tracking-[-0.04em] text-white">
                    Send Us Your <span className="text-[#D4AF37]">Enquiry</span>
                  </h2>
                  <p className="mt-4 text-[16px] leading-[1.8] text-white/60">
                    Tell us your course and preferred branch. We will share batch timings, fees and a free demo slot.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-8 space-y-5" aria-label="Enquiry form">
                    <div className="grid gap-5 md:grid-cols-2">
                      <div>
                        <label htmlFor="contact-name" className={label}>Your name</label>
                        <input id="contact-name" name="name" type="text" autoComplete="name" required placeholder="Full name"
                          value={name} onChange={(e) => setName(e.target.value)} className={field} />
                      </div>
                      <div>
                        <label htmlFor="contact-phone" className={label}>Phone number</label>
                        <input id="contact-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" required
                          pattern="[0-9+\-\s]{10,15}" title="Enter a valid phone number" placeholder="+91 99999 99999"
                          value={phone} onChange={(e) => setPhone(e.target.value)} className={field} />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-email" className={label}>Email address</label>
                      <input id="contact-email" name="email" type="email" autoComplete="email" required placeholder="you@example.com"
                        value={email} onChange={(e) => setEmail(e.target.value)} className={field} />
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                      <div>
                        <label htmlFor="contact-course" className={label}>Course</label>
                        <select id="contact-course" name="course" required value={course} onChange={(e) => setCourse(e.target.value)} className={selectCls}>
                          <option value="" disabled>Select course</option>
                          {courseOptions.map((c) => (<option key={c}>{c}</option>))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="contact-branch" className={label}>Preferred branch</label>
                        <select id="contact-branch" name="branch" value={branch} onChange={(e) => setBranch(e.target.value)} className={selectCls}>
                          {branchOptions.map((b) => (<option key={b}>{b}</option>))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className={label}>Message (optional)</label>
                      <textarea id="contact-message" name="message" rows={4} placeholder="Tell us about your career goals..."
                        value={message} onChange={(e) => setMessage(e.target.value)}
                        className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-white/35 focus:border-[#D4AF37]/50 focus:shadow-[0_0_0_4px_rgba(212,175,55,0.08)]" />
                    </div>

                    {/* honeypot */}
                    <div className="absolute left-[-9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
                      <label htmlFor="contact-website">Leave this field empty</label>
                      <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off"
                        value={website} onChange={(e) => setWebsite(e.target.value)} />
                    </div>

                    <button type="submit" disabled={loading}
                      className="group flex h-[58px] w-full items-center justify-center gap-3 rounded-2xl bg-[#D4AF37] text-[15px] font-semibold text-black transition-all duration-300 hover:shadow-[0_0_35px_rgba(212,175,55,0.35)] disabled:opacity-70">
                      {loading ? "Submitting..." : "Submit Enquiry"}
                      {!loading && <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />}
                    </button>

                    <p className="text-[12.5px] leading-[1.7] text-white/40">
                      We use your details only to reply to your enquiry.
                    </p>

                    <div role="status" aria-live="polite">
                      {success && (
                        <div className="rounded-2xl border border-green-500/20 bg-green-500/10 px-5 py-4 text-sm text-green-300">
                          Thank you for contacting NG Cloud Networks. Our team will reach out to you shortly.
                        </div>
                      )}
                      {error && (
                        <div className="rounded-2xl border border-red-500/20 bg-red-500/10 px-5 py-4 text-sm text-red-300" role="alert">
                          Something went wrong. Please try again or call {PHONE_DISPLAY}.
                        </div>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BRANCHES */}
        <section aria-labelledby="branches-h" className="relative py-16 lg:py-20">
          <div className="mx-auto max-w-[1400px] px-5">
            <h2 id="branches-h" className={h2cls}>
              Our Branches in <span className="text-[#D4AF37]">Hyderabad</span>
            </h2>
            <p className="mt-4 max-w-[760px] text-[17px] leading-[1.8] text-white/60">
              Both branches run the same courses and the same batch timetable. Pick the one closest to you, or join live online.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {BRANCHES.map((b) => (
                <article key={b.id} className="flex flex-col justify-between gap-6 rounded-[32px] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-all duration-300 hover:border-[#D4AF37]/30 lg:p-8">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className={iconBox}><MapPin className="h-6 w-6 text-[#D4AF37]" aria-hidden="true" /></div>
                      {b.badge && (
                        <span className="rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-3 py-[2px] text-[11px] font-semibold uppercase tracking-[0.14em] text-[#D4AF37]">
                          {b.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="mt-6 text-[24px] font-bold text-white">{b.name}</h3>
                    <address className="mt-3 not-italic text-[16px] leading-[1.8] text-white/60">
                      {b.street}, Hyderabad, Telangana, India {b.pin}
                    </address>
                    <p className="mt-3 text-[15px] text-white/60">
                      Phone: <a href={`tel:${PHONE_TEL}`} className="font-semibold text-[#D4AF37] hover:underline">{PHONE_DISPLAY}</a>
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <a href={b.mapUrl} target="_blank" rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-5 py-2.5 text-[14px] font-semibold text-black transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                      {b.mapLabel}
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
                    </a>
                    {b.detailsHref && (
                      <Link href={b.detailsHref}
                        className="inline-flex items-center rounded-full border border-white/15 px-5 py-2.5 text-[14px] font-semibold text-white/80 transition-all duration-300 hover:border-[#D4AF37]/40 hover:text-[#D4AF37]">
                        Branch details
                      </Link>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT HAPPENS NEXT */}
        <section aria-labelledby="steps-h" className="py-16 lg:py-20">
          <div className="mx-auto max-w-[1400px] px-5">
            <h2 id="steps-h" className={h2cls}>
              What Happens <span className="text-[#D4AF37]">After You Enquire</span>
            </h2>
            <ol className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {STEPS.map((s, i) => (
                <li key={s} className={card}>
                  <span className="text-[40px] font-black leading-none text-[#D4AF37]">{i + 1}</span>
                  <p className="mt-4 text-[15.5px] leading-[1.7] text-white/65">{s}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq-h" className="py-16 lg:py-20">
          <div className="mx-auto max-w-[980px] px-5">
            <h2 id="faq-h" className={h2cls}>
              Contact <span className="text-[#D4AF37]">FAQs</span>
            </h2>
            <div className="mt-10 space-y-3">
              {FAQS.map((f) => (
                <details key={f.q} className="group rounded-[24px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl open:border-[#D4AF37]/30">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[17px] font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37]">
                    {f.q}
                    <span aria-hidden="true" className="text-[22px] text-[#D4AF37] transition-transform duration-300 group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-[16px] leading-[1.8] text-white/60">{f.a}</p>
                </details>
              ))}
            </div>
            <p className="mt-6 text-xs text-white/35">
              Last updated: <time dateTime={LAST_UPDATED}>12 November 2026</time>
            </p>
          </div>
        </section>

        {/* WHY CONTACT */}
        <section aria-labelledby="why-h" className="relative overflow-hidden py-16 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-5">
            <div className="relative overflow-hidden rounded-[40px] border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-8 backdrop-blur-2xl lg:p-14">
              <div className="absolute right-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-[#D4AF37]/10 blur-[120px]" aria-hidden="true" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-5 py-2.5">
                  <BadgeCheck className="h-4 w-4 text-[#D4AF37]" aria-hidden="true" />
                  <span className="text-sm text-[#f5e6b3]">Why Choose NG Cloud Networks</span>
                </div>
                <h2 id="why-h" className="mt-6 max-w-[900px] text-[34px] font-black leading-[1.05] tracking-[-0.04em] text-white md:text-[52px]">
                  Practical Training with <span className="text-[#D4AF37]">Career-Focused Mentorship</span>
                </h2>
                <ul className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                  {["Enterprise Practical Labs", "Placement Assistance", "Certification Guidance", "Interview Preparation"].map((item) => (
                    <li key={item} className="rounded-[28px] border border-white/10 bg-black/20 p-6">
                      <div className={iconBox}><GraduationCap className="h-6 w-6 text-[#D4AF37]" aria-hidden="true" /></div>
                      <h3 className="mt-5 text-[19px] font-bold text-white">{item}</h3>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}