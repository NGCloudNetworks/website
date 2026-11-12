// app/ameerpet/page.tsx  (v3)
// Data-driven: course names/links/categories come from data/courseLinks.ts,
// trainer/features/modes come from data/academy.ts. Items marked CONFIRM need your input.
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import EnquiryForm from "@/components/ameerpet/EnquiryForm";
import { courseLinks, courseCategories } from "@/data/courseLinks";
import { trainer, trainingFeatures, trainingModes, placementSupport, courseBatches } from "@/data/academy";
import type { CourseBatch } from "@/data/academy";

const SITE = "https://www.ngcloudnetworks.com";
const PHONE_DISPLAY = "+91 99899 39191";
const PHONE_TEL = "+919989939191";
const WA_NUMBER = "919989939191";
const WHATSAPP = `https://wa.me/${WA_NUMBER}?text=Hi%20NG%20Cloud%20Networks%2C%20I%20want%20details%20about%20the%20Ameerpet%20branch%20batches`;
const MAP_URL = "https://maps.app.goo.gl/B5qT6V1v5F6zUMyv5";
const LAST_UPDATED = "2026-11-12"; // update whenever you edit this page's content
const TRAINER_FULL_NAME = "Nazeer Basha";

const ADDRESS = {
  street: "Flat No. 404, 4th Floor, Aditya Enclave, Annapurna Block, Ameerpet",
  locality: "Hyderabad",
  region: "Telangana",
  postalCode: "500038", // must match the Ameerpet Google Business Profile
  country: "IN",
};
const ADDRESS_LINE = `${ADDRESS.street}, ${ADDRESS.locality}, ${ADDRESS.region} ${ADDRESS.postalCode}`;

// Same 10 courses run at Ameerpet and Ameenpur (confirmed). To hide one here, delete its slug from this set.
const OFFERED = new Set<string>(courseLinks.map((c) => c.slug));

// CONFIRM: fee/duration per course. Ideally read these from data/courses/*.ts so there is one source of truth.
// Note: CCNA shows no GST while the others say "+ GST". Make that consistent.
const FACTS: Record<string, { duration: string; fee: string }> = {
  ccna: { duration: "2 months", fee: "₹10,000" },
  "ccnp-enterprise": { duration: "3 months", fee: "₹15,000 + GST" },
  "ccnp-core": { duration: "3 months", fee: "₹15,000 + GST" },
  "cisco-sdwan": { duration: "1 month", fee: "₹12,000 + GST" },
  "aws-cloud": { duration: "30 days", fee: "₹10,000 + GST" },
  "azure-cloud": { duration: "30 days", fee: "₹10,000 + GST" },
  "cloud-security": { duration: "45 days", fee: "₹15,000 + GST" },
  "palo-alto-firewall": { duration: "1 month", fee: "₹10,000 + GST" },
  "fortigate-firewall": { duration: "20 days", fee: "₹10,000 + GST" },
  "f5-load-balancer": { duration: "1 month", fee: "₹10,000 + GST" },
};

// Ameerpet follows the same timetable as Ameenpur (confirmed), so it reuses courseBatches from data/academy.ts.
const AMEERPET_BATCHES: CourseBatch[] = courseBatches;

const courses = courseLinks.filter((c) => OFFERED.has(c.slug));
const byCat = courseCategories.map((cat) => ({ cat, items: courses.filter((c) => c.category === cat) }));
const href = (slug: string) => courses.find((c) => c.slug === slug)?.href ?? "/courses";
const modes = trainingModes.map((m) => m.mode);

const PATHS = [
  {
    title: "New to IT or networking",
    text: "Start with CCNA to learn routing, switching and IP addressing, then move to CCNP Enterprise.",
    links: [["CCNA", "ccna"], ["CCNP Enterprise", "ccnp-enterprise"]],
  },
  {
    title: "Network engineer adding security",
    text: "Add Palo Alto or Fortigate firewall skills, then Cloud Security to protect on-premise and cloud networks.",
    links: [["Palo Alto", "palo-alto-firewall"], ["Fortigate", "fortigate-firewall"], ["Cloud Security", "cloud-security"]],
  },
  {
    title: "Moving into cloud",
    text: "Pick AWS or Azure based on the jobs you are targeting; our comparison guide explains the difference.",
    links: [["AWS", "aws-cloud"], ["Azure", "azure-cloud"]],
  },
] as const;

const FAQS = [
  {
    q: "Where is NG Cloud Networks in Ameerpet?",
    a: `NG Cloud Networks Ameerpet is at ${ADDRESS.street}, Hyderabad ${ADDRESS.postalCode}. Use the Google Maps link on this page for directions, or call or WhatsApp ${PHONE_DISPLAY} and we will guide you to the building.`,
  },
  {
    q: "Which courses can I join at the Ameerpet branch?",
    a: `You can join ${courses.length} courses: ${courses.map((c) => c.anchor.replace(" Training Hyderabad", "")).join(", ")}. They are grouped as networking, cloud and security programs, and each has its own syllabus page.`,
  },
  {
    q: "How much do the courses cost?",
    a: "Course fees range from ₹10,000 to ₹15,000, and most courses add 18% GST. CCNA is ₹10,000. See the fees and duration table on this page for each course, and ask for the latest figure when you enquire.",
  },
  {
    q: "Which course should a beginner start with?",
    a: "Beginners with no networking background should start with CCNA, which builds the base for CCNP, firewalls and cloud. If you want to go straight to cloud, AWS or Azure is a practical first course.",
  },
  {
    q: "Are classes online or in the classroom?",
    a: `Both. We run ${modes.join(", ").toLowerCase()} options, so you can attend at the Ameerpet branch, join live online, or combine the two.`,
  },
  {
    q: "How big are the batches?",
    a: `${trainingFeatures.batchSize} per batch. Small batches mean more lab time and doubt support for each student, and class recordings are available for revision.`,
  },
  {
    q: "Do you offer placement support?",
    a: "Yes, we offer placement assistance: career guidance, resume building, mock technical and HR interviews, and job referral assistance. It is assistance, not a job guarantee.",
  },
  {
    q: "Can I attend a free demo class?",
    a: `Yes. Call or WhatsApp ${PHONE_DISPLAY}, or use the enquiry form on this page, to book a free demo class and meet the trainer before you pay.`,
  },
  {
    q: "What is the difference between the Ameerpet and Ameenpur branches?",
    a: "Both follow the same courses and lab approach. Ameerpet is in central Hyderabad and Ameenpur is on the western side near BHEL Township. Choose whichever is easier to reach, or ask us to match you to the nearest batch.",
  },
];

export const metadata: Metadata = {
  title: "CCNA, CCNP & AWS Training in Ameerpet, Hyderabad | NG Cloud",
  description:
    "Networking, firewall and cloud training in Ameerpet, Hyderabad: CCNA, CCNP, Palo Alto, Fortigate, F5, AWS, Azure. Hands-on labs. Book a free demo.",
  alternates: { canonical: `${SITE}/ameerpet` },
  openGraph: {
    title: "NG Cloud Networks Ameerpet: Networking, Security & Cloud Training",
    description: "Visit our Ameerpet branch for CCNA, CCNP, firewall and cloud courses with hands-on labs and a free demo class.",
    url: `${SITE}/ameerpet`,
    type: "website",
    locale: "en_IN",
    // images: [{ url: `${SITE}/images/ameerpet-branch.jpg`, width: 1200, height: 630, alt: "NG Cloud Networks Ameerpet branch" }], // add a real photo
  },
  twitter: { card: "summary_large_image", title: "NG Cloud Networks Ameerpet", description: "CCNA, CCNP, firewall and cloud training in Ameerpet, Hyderabad." },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE}/ameerpet#webpage`,
      url: `${SITE}/ameerpet`,
      name: "CCNA, CCNP & AWS Training in Ameerpet, Hyderabad",
      inLanguage: "en-IN",
      dateModified: LAST_UPDATED,
      about: { "@id": `${SITE}/ameerpet#branch` },
      isPartOf: { "@id": `${SITE}/#website` }, // CONFIRM your homepage schema defines this @id, or remove the line
      breadcrumb: { "@id": `${SITE}/ameerpet#breadcrumb` },
    },
    {
      "@type": ["EducationalOrganization", "LocalBusiness"],
      "@id": `${SITE}/ameerpet#branch`,
      name: "NG Cloud Networks - Ameerpet",
      url: `${SITE}/ameerpet`,
      telephone: "+91-9989939191",
      priceRange: "₹10,000 - ₹15,000",
      description:
        "Networking, firewall and cloud training institute in Ameerpet, Hyderabad offering CCNA, CCNP, Cisco SD-WAN, Palo Alto, Fortigate, F5, AWS, Azure and Cloud Security courses.",
      parentOrganization: { "@id": `${SITE}/#organization` },
      address: {
        "@type": "PostalAddress",
        streetAddress: ADDRESS.street,
        addressLocality: ADDRESS.locality,
        addressRegion: ADDRESS.region,
        postalCode: ADDRESS.postalCode,
        addressCountry: ADDRESS.country,
      },
      hasMap: MAP_URL,
      sameAs: [MAP_URL],
      areaServed: ["Ameerpet", "SR Nagar", "Begumpet", "Punjagutta", "Hyderabad"],
      employee: { "@id": `${SITE}/about#nazeer` }, // Nazeer teaches at Ameerpet (confirmed)
      // Add image, geo and openingHoursSpecification once real values exist.
    },
    {
      "@type": "Person",
      "@id": `${SITE}/about#nazeer`, // CONFIRM: must match the Person @id on your About page
      name: TRAINER_FULL_NAME,
      jobTitle: trainer.designation,
      url: `${SITE}/about`,
      knowsAbout: trainer.expertise,
    },
    {
      "@type": "ItemList",
      "@id": `${SITE}/ameerpet#courses`,
      name: "Courses at NG Cloud Networks Ameerpet",
      itemListElement: courses.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${SITE}${c.href}`,
        name: c.anchor,
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE}/ameerpet#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "Ameerpet", item: `${SITE}/ameerpet` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

const gold = "text-[#D4AF37]";
const card = "rounded-2xl border border-[#D4AF37]/20 bg-white/[0.03] p-6";
const h2 = "text-2xl font-bold md:text-3xl";

export default function AmeerpetPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
      />
      <Navbar />
      <main className="bg-[#050505] text-white">
        {/* Hero + direct answer */}
        <section aria-labelledby="hero-h" className="relative overflow-hidden px-4 pb-14 pt-32">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.12),transparent_60%)]" />
          <div className="relative mx-auto max-w-6xl">
            <nav aria-label="Breadcrumb" className="text-sm text-gray-400">
              <ol className="flex gap-2">
                <li><Link href="/" className="hover:text-[#D4AF37]">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page">Ameerpet</li>
              </ol>
            </nav>
            <span className="mt-4 inline-block rounded-full border border-[#D4AF37]/40 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
              New Branch · Ameerpet, Hyderabad
            </span>
            <h1 id="hero-h" className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight md:text-5xl">
              CCNA, CCNP, Firewall & <span className={gold}>Cloud Training in Ameerpet</span>
            </h1>
            <p className="mt-5 max-w-3xl text-lg text-gray-300">
              NG Cloud Networks Ameerpet is a networking, security and cloud training institute at Aditya
              Enclave, Annapurna Block, Hyderabad. Learn through live, lab-based classes in small batches,
              online or in the classroom.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={`tel:${PHONE_TEL}`} className="rounded-xl bg-[#D4AF37] px-6 py-3 font-bold text-black hover:opacity-90">
                Call {PHONE_DISPLAY}
              </a>
              <a href="#enquire" className="rounded-xl border border-[#D4AF37] px-6 py-3 font-bold text-[#D4AF37] hover:bg-[#D4AF37]/10">
                Book a Free Demo
              </a>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                [String(courses.length), "Courses"],
                [trainingFeatures.batchSize.replace("Maximum ", "Max "), "Batch size"],
                [trainer.experience, "Trainer experience"],
                [String(trainingModes.length), "Learning modes"],
              ].map(([v, l]) => (
                <div key={l} className={`${card} !p-4 text-center`}>
                  <dt className="text-xs uppercase tracking-wide text-gray-400">{l}</dt>
                  <dd className={`mt-1 text-xl font-bold ${gold}`}>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Fees and duration (single source for course data on this page) */}
        <section aria-labelledby="courses-h" className="mx-auto max-w-6xl px-4 py-12">
          <h2 id="courses-h" className={h2}>
            Courses in Ameerpet: <span className={gold}>Fees and Duration</span>
          </h2>
          <p className="mt-3 max-w-3xl text-gray-300">
            Open any course for its full syllabus. Fees exclude GST where shown, and can change, so ask for the latest figure when you enquire.
          </p>
          <div
            className="mt-6 overflow-x-auto rounded-2xl border border-[#D4AF37]/20"
            tabIndex={0}
            role="region"
            aria-label="Courses, duration and fee table, scrolls sideways on small screens"
          >
            <table className="w-full min-w-[640px] text-left text-sm">
              <caption className="sr-only">Courses, focus, duration and fee at NG Cloud Networks Ameerpet</caption>
              <thead className="bg-[#D4AF37]/10 text-[#D4AF37]">
                <tr>
                  <th scope="col" className="p-4">Course</th>
                  <th scope="col" className="p-4">Focus</th>
                  <th scope="col" className="p-4">Duration</th>
                  <th scope="col" className="p-4">Fee</th>
                </tr>
              </thead>
              {byCat.map(({ cat, items }) => (
                <tbody key={cat}>
                  <tr className="border-t border-white/10 bg-white/[0.03]">
                    <th scope="colgroup" colSpan={4} className="p-3 text-xs uppercase tracking-wider text-gray-400">{cat}</th>
                  </tr>
                  {items.map((c) => (
                    <tr key={c.slug} className="border-t border-white/10">
                      <th scope="row" className="p-4 font-semibold">
                        <Link href={c.href} className="hover:text-[#D4AF37]">{c.anchor.replace("Hyderabad", "in Hyderabad")}</Link>
                      </th>
                      <td className="p-4 text-gray-300">{c.subtitle}</td>
                      <td className="p-4 text-gray-300">{FACTS[c.slug]?.duration}</td>
                      <td className="p-4 text-gray-300">{FACTS[c.slug]?.fee}</td>
                    </tr>
                  ))}
                </tbody>
              ))}
            </table>
          </div>
        </section>

        {/* Learning paths */}
        <section aria-labelledby="paths-h" className="mx-auto max-w-6xl px-4 py-12">
          <h2 id="paths-h" className={h2}>
            Which Course Should You <span className={gold}>Start With?</span>
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {PATHS.map((p) => (
              <div key={p.title} className={card}>
                <h3 className="text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-300">{p.text}</p>
                <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                  {p.links.map(([label, slug]) => (
                    <li key={slug}>
                      <Link href={href(slug)} className="font-semibold text-[#D4AF37] underline-offset-2 hover:underline">{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm text-gray-400">
            Still unsure? Read{" "}
            <Link href="/blog/ccna-vs-ccnp-which-should-you-learn-first" className="text-[#D4AF37] underline">CCNA vs CCNP</Link>,{" "}
            <Link href="/blog/aws-vs-azure-which-cloud-platform-learn-2026" className="text-[#D4AF37] underline">AWS vs Azure</Link>, or compare everything on the{" "}
            <Link href="/courses" className="text-[#D4AF37] underline">all courses page</Link>.
          </p>
        </section>

        {/* How we teach (from academy data, not repeated elsewhere) */}
        <section aria-labelledby="how-h" className="mx-auto max-w-6xl px-4 py-12">
          <h2 id="how-h" className={h2}>
            How Training Works at <span className={gold}>Ameerpet</span>
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {trainingModes.map((m) => (
              <div key={m.mode} className={card}>
                <h3 className={`font-bold ${gold}`}>{m.mode}</h3>
                <p className="mt-2 text-sm text-gray-300">{m.description}</p>
              </div>
            ))}
          </div>
          <ul className="mt-6 grid gap-2 text-sm text-gray-300 md:grid-cols-2">
            <li>✓ {trainingFeatures.batchSize} per batch</li>
            <li>✓ {trainingFeatures.practicalLabs}</li>
            {trainingFeatures.recordings && <li>✓ Recorded sessions for revision</li>}
            {trainingFeatures.weeklyAssessments && <li>✓ Weekly practical assessments</li>}
            {trainingFeatures.liveDoubtSupport && <li>✓ Live doubt clarification</li>}
            {trainingFeatures.certificationGuidance && <li>✓ Certification guidance</li>}
          </ul>
          <p className="mt-6 text-sm text-gray-400">
            Career support covers {placementSupport.process.slice(0, 4).join(", ").toLowerCase()} and job referral
            assistance. It is assistance, not a job guarantee.
          </p>
        </section>

        {/* Batch timings */}
        <section aria-labelledby="batch-h" className="mx-auto max-w-6xl px-4 py-12">
          <h2 id="batch-h" className={h2}>
            Batch Timings at <span className={gold}>Ameerpet</span>
          </h2>
          {AMEERPET_BATCHES.length > 0 ? (
            <div className="mt-6 overflow-x-auto rounded-2xl border border-[#D4AF37]/20" tabIndex={0} role="region" aria-label="Batch timings table">
              <table className="w-full min-w-[560px] text-left text-sm">
                <thead className="bg-[#D4AF37]/10 text-[#D4AF37]">
                  <tr>
                    <th scope="col" className="p-4">Course</th>
                    <th scope="col" className="p-4">Time</th>
                    <th scope="col" className="p-4">Trainer</th>
                    <th scope="col" className="p-4">Mode</th>
                  </tr>
                </thead>
                <tbody>
                  {AMEERPET_BATCHES.map((b, i) => (
                    <tr key={i} className="border-t border-white/10">
                      <th scope="row" className="p-4 font-semibold">
                        <Link href={`/courses/${b.courseSlug}`} className="hover:text-[#D4AF37]">{b.course}</Link>
                      </th>
                      <td className="p-4 text-gray-300">{b.time} ({b.period})</td>
                      <td className="p-4 text-gray-300">{b.trainer}</td>
                      <td className="p-4 text-gray-300">{b.mode}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="mt-3 max-w-3xl text-gray-300">
              Batch timings are being updated. Call{" "}
              <a href={`tel:${PHONE_TEL}`} className="font-semibold text-[#D4AF37]">{PHONE_DISPLAY}</a> or use the form below to get the current timings for your course.
            </p>
          )}
        </section>

        {/* Trainer (EEAT) */}
        <section aria-labelledby="trainer-h" className="mx-auto max-w-6xl px-4 py-12">
          <h2 id="trainer-h" className={h2}>
            Your Trainer: <span className={gold}>{TRAINER_FULL_NAME}</span>
          </h2>
          <div className={`${card} mt-6`}>
            <p className="font-semibold">{trainer.designation} · {trainer.experience}</p>
            <p className="mt-2 text-gray-300">{trainer.bio}</p>
            <p className="mt-3 text-sm text-gray-400">
              Areas of expertise: {trainer.expertise.slice(0, 6).join(", ")}.{" "}
              <Link href="/about" className="text-[#D4AF37] underline">Read his full profile</Link>.
            </p>
            {/* Nazeer teaches at Ameerpet (confirmed). Cloud Security uses a separate specialist trainer. */}
            {/* Add a real trainer photo here with next/image and descriptive alt text. */}
          </div>
        </section>

        {/* Location */}
        <section aria-labelledby="loc-h" className="mx-auto max-w-6xl px-4 py-12">
          <h2 id="loc-h" className={h2}>
            Visit Us in <span className={gold}>Ameerpet, Hyderabad</span>
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className={card}>
              <h3 className={`font-bold ${gold}`}>Address</h3>
              <address className="mt-2 not-italic text-gray-300">
                NG Cloud Networks<br />
                {ADDRESS.street},<br />
                {ADDRESS.locality}, {ADDRESS.region} {ADDRESS.postalCode}
              </address>
              <p className="mt-3 text-gray-300">
                Phone / WhatsApp: <a href={`tel:${PHONE_TEL}`} className="font-semibold text-[#D4AF37]">{PHONE_DISPLAY}</a>
              </p>
              <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block rounded-xl bg-[#D4AF37] px-5 py-2 font-bold text-black">
                Open in Google Maps
              </a>
              {/* CONFIRM: add opening hours and a real landmark line (nearest metro exit, nearby building). */}
            </div>
            <div className="overflow-hidden rounded-2xl border border-[#D4AF37]/20">
              <iframe
                title="NG Cloud Networks Ameerpet on Google Maps"
                src={`https://www.google.com/maps?q=${encodeURIComponent("NG Cloud Networks " + ADDRESS_LINE)}&output=embed`}
                className="h-72 w-full border-0 md:h-full md:min-h-72"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* Enquiry */}
        <section id="enquire" aria-labelledby="enq-h" className="mx-auto max-w-4xl px-4 py-12">
          <div className="rounded-3xl border border-[#D4AF37]/40 bg-[#D4AF37]/10 p-6 md:p-8">
            <h2 id="enq-h" className={h2}>Book a Free Demo at Ameerpet</h2>
            <p className="mb-6 mt-2 text-gray-300">Tell us your course and preferred mode. We will share batch timings and a demo slot.</p>
            <EnquiryForm
              whatsappNumber={WA_NUMBER}
              courses={courses.map((c) => ({ value: c.slug, label: c.anchor.replace(" Hyderabad", "") }))}
              modes={modes}
            />
            <p className="mt-4 text-sm text-gray-300">
              Prefer to talk? Call <a href={`tel:${PHONE_TEL}`} className="font-semibold text-[#D4AF37]">{PHONE_DISPLAY}</a> or{" "}
              <a href={WHATSAPP} className="font-semibold text-[#D4AF37]">message us on WhatsApp</a>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq-h" className="mx-auto max-w-4xl px-4 py-12">
          <h2 id="faq-h" className={h2}>
            Ameerpet Branch <span className={gold}>FAQs</span>
          </h2>
          <div className="mt-6 space-y-3">
            {FAQS.map((f) => (
              <details key={f.q} className={`${card} group !p-5`}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37]">
                  {f.q}
                  <span aria-hidden="true" className="text-[#D4AF37] transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-gray-300">{f.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-6 text-xs text-gray-500">Last updated: <time dateTime={LAST_UPDATED}>12 November 2026</time></p>
        </section>
      </main>
      <Footer />
    </>
  );
}