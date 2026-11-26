import Link from "next/link";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import ContactSection from "@/components/branch/ContactSection";
import { card, gold, h2, section, link, btnPrimary, btnOutline, btnGhost } from "@/components/branch/ui";
import { courses, shortName, modes } from "@/data/trainingContent";
import { trainer, trainingFeatures } from "@/data/academy";
import { SITE, PHONE_DISPLAY, PHONE_TEL, WA_NUMBER, EMAIL, TRAINER_FULL_NAME, HUB_PATH, type Branch } from "@/data/branches";

const NAV = [
  ["Quick facts", "#quick-facts"],
  ["Who it suits", "#suits"],
  ["Your questions", "#local-doubts"],
  ["Courses", "#courses"],
  ["Reviews", "#reviews"],
  ["Location", "#location"],
  ["Contact", "#enquire"],
  ["FAQ", "#faq"],
] as const;

export default function BranchPage({ branch: b }: { branch: Branch }) {
  const PAGE = `${SITE}/${b.slug}`;
  const ADDRESS_LINE = `${b.street}, Hyderabad, Telangana ${b.postalCode}`;
  const WHATSAPP = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Hi NG Cloud Networks, I want details about the ${b.name} branch batches`)}`;

  // Only questions that are about this branch. Fees, beginners, placement and similar are answered once on the Hyderabad page.
  const faqs = [
    {
      q: `Where is NG Cloud Networks in ${b.name}?`,
      a: `NG Cloud Networks ${b.name} is at ${b.street}, Hyderabad ${b.postalCode}. Open the Google Maps link on this page, or call or WhatsApp ${PHONE_DISPLAY} and we will guide you to the building.`,
    },
    ...b.faqLocal,
    {
      q: `How can I contact the ${b.name} branch?`,
      a: `Call or WhatsApp ${PHONE_DISPLAY}, email ${EMAIL}, or fill in the enquiry form on this page. Calling or WhatsApp is the fastest way to get batch timings and book a free demo class.`,
    },
    {
      q: `Which courses can I join at the ${b.name} branch?`,
      a: `All ${courses.length} courses run here, from CCNA and CCNP to AWS, Azure and firewall training. Fees, durations and syllabus links are on our Hyderabad training page.`,
    },
    {
      q: `Can I attend a free demo class at ${b.name}?`,
      a: `Yes. Call or WhatsApp ${PHONE_DISPLAY}, or use the form on this page, to book a free demo and meet the trainer before you pay.`,
    },
    {
      q: `What is the difference between the ${b.name} and ${b.other.name} branches?`,
      a: b.difference,
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE}#webpage`,
        url: PAGE,
        name: b.webPageName,
        inLanguage: "en-IN",
        dateModified: b.lastUpdated,
        about: { "@id": `${PAGE}#branch` },
        breadcrumb: { "@id": `${PAGE}#breadcrumb` },
      },
      {
        "@type": ["EducationalOrganization", "LocalBusiness"],
        "@id": `${PAGE}#branch`, // the contact page uses this same @id
        name: `NG Cloud Networks - ${b.name}`,
        url: PAGE,
        telephone: "+91-9989939191",
        email: EMAIL,
        priceRange: "₹10,000 - ₹20,000",
        description: b.schemaDescription,
        parentOrganization: { "@id": `${SITE}/#organization` },
        address: {
          "@type": "PostalAddress",
          streetAddress: b.street,
          addressLocality: "Hyderabad",
          addressRegion: "Telangana",
          postalCode: b.postalCode,
          addressCountry: "IN",
        },
        hasMap: b.mapUrl,
        contactPoint: { "@type": "ContactPoint", telephone: "+91-9989939191", email: EMAIL, contactType: "customer support", areaServed: "IN" },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "20:00",
        }, // CONFIRM: office hours, must match the Google Business Profile
        areaServed: [b.name, ...b.nearbyAreas.map((a) => a.replace(/ \(.*\)/, "")), "Hyderabad"],
        founder: { "@id": `${SITE}/#trainer-nazeer-basha` },
        employee: { "@id": `${SITE}/#trainer-nazeer-basha` },
        // Add image and geo once real values exist.
      },
      {
        "@type": "Person",
        "@id": `${SITE}/#trainer-nazeer-basha`, // same @id as the homepage TrainerSection
        name: TRAINER_FULL_NAME,
        jobTitle: trainer.designation,
        url: `${SITE}/about`,
        worksFor: { "@id": `${SITE}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE },
          { "@type": "ListItem", position: 2, name: b.name, item: PAGE },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${PAGE}#faq`,
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  };

  const quickFacts: [string, React.ReactNode][] = [
    ["Address", ADDRESS_LINE],
    ["Phone / WhatsApp", <a key="p" href={`tel:${PHONE_TEL}`} className={link}>{PHONE_DISPLAY}</a>],
    ["Courses", `${courses.length} (networking, cloud and security)`],
    ["Learning modes", modes.join(", ")],
    ["Batch size", trainingFeatures.batchSize],
    ["Trainer", `${TRAINER_FULL_NAME}, founder (${trainer.experience})`],
    ["Office hours", `${b.hoursText}. Classes run outside these hours.`],
    ["Fees, batches and syllabus", <Link key="h" href={HUB_PATH} className={link}>See the Hyderabad training page</Link>],
    ["Other branch", <Link key="o" href={b.other.path} className={link}>{b.other.name}, Hyderabad</Link>],
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <Navbar />
      <main className="bg-[#050505] text-white">
        {/* Hero + direct answer */}
        <section aria-labelledby="hero-h" className="relative overflow-hidden px-4 pb-10 pt-32">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.12),transparent_60%)]" />
          <div className="relative mx-auto max-w-6xl">
            <nav aria-label="Breadcrumb" className="text-sm text-gray-400">
              <ol className="flex gap-2">
                <li><Link href="/" className="hover:text-[#D4AF37]">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page">{b.name}</li>
              </ol>
            </nav>
            <span className="mt-4 inline-block rounded-full border border-[#D4AF37]/40 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
              {b.isNew ? "New Branch" : `${b.name} Branch`} · Hyderabad
            </span>
            <h1 id="hero-h" className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight md:text-5xl">
              CCNA, CCNP, Firewall & <span className={gold}>Cloud Training in {b.name}</span>
            </h1>
            <p className="mt-5 max-w-3xl text-lg text-gray-300">{b.heroIntro}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={`tel:${PHONE_TEL}`} className={btnPrimary}>Call {PHONE_DISPLAY}</a>
              <a href="#enquire" className={btnOutline}>Book a Free Demo</a>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className={btnGhost}>WhatsApp us</a>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                [trainer.experience, "Trainer experience"],
                [trainingFeatures.batchSize.replace("Maximum ", "Max "), "Batch size"],
                [String(courses.length), "Courses"],
                [b.reviewStat, "Google reviews"],
              ].map(([v, l]) => (
                <div key={l} className={`${card} !p-4 text-center`}>
                  <dt className="text-xs uppercase tracking-wide text-gray-400">{l}</dt>
                  <dd className={`mt-1 text-xl font-bold ${gold}`}>{v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 text-xs text-gray-400">Google review figures as of {b.reviewsAsOf}.</p>
            <nav aria-label="On this page" className="mt-8 flex flex-wrap gap-2 text-sm">
              {NAV.map(([label, to]) => (
                <a key={to} href={to} className="rounded-full border border-white/15 px-4 py-1.5 text-gray-300 hover:border-[#D4AF37] hover:text-[#D4AF37]">{label}</a>
              ))}
            </nav>
          </div>
        </section>

        <section id="quick-facts" aria-labelledby="facts-h" className={section}>
          <h2 id="facts-h" className={h2}>NG Cloud Networks {b.name}: <span className={gold}>Quick Facts</span></h2>
          <dl className="mt-6 divide-y divide-white/10 rounded-2xl border border-[#D4AF37]/20">
            {quickFacts.map(([k, v]) => (
              <div key={k} className="grid gap-1 p-4 md:grid-cols-[220px_1fr]">
                <dt className="text-sm font-semibold uppercase tracking-wide text-gray-400">{k}</dt>
                <dd className="text-gray-200">{v}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Branch-specific content */}
        <section id="suits" aria-labelledby="suits-h" className={section}>
          <h2 id="suits-h" className={h2}>Who the <span className={gold}>{b.name} Branch</span> Suits</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {b.suits.map((s) => (
              <div key={s.title} className={card}>
                <h3 className="text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-300">{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="local-doubts" aria-labelledby="ld-h" className={section}>
          <h2 id="ld-h" className={h2}>Questions About Studying <span className={gold}>at {b.name}</span></h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {b.localDoubts.map((d) => (
              <div key={d.q} className={card}>
                <h3 className="text-lg font-bold">{d.q}</h3>
                <p className="mt-2 text-sm text-gray-300">{d.a}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-gray-400">
            Worried about being a beginner, labs, or jobs? Our <Link href={HUB_PATH} className="text-[#D4AF37] underline">Hyderabad training page</Link> answers those, with the full fees table and timetable.
          </p>
        </section>

        <section id="courses" aria-labelledby="courses-h" className={section}>
          <h2 id="courses-h" className={h2}>Courses You Can Join <span className={gold}>at {b.name}</span></h2>
          <p className="mt-3 max-w-3xl text-gray-300">
            All {courses.length} courses run here, with the same trainer and timetable as at {b.other.name}. Open a course for its syllabus, or compare fees and prerequisites on the{" "}
            <Link href={HUB_PATH} className="text-[#D4AF37] underline">Hyderabad training page</Link>.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2 text-sm">
            {courses.map((c) => (
              <li key={c.slug}>
                <Link href={c.href} className="inline-block rounded-full border border-[#D4AF37]/30 px-4 py-1.5 text-gray-200 hover:border-[#D4AF37] hover:text-[#D4AF37]">
                  {shortName(c.anchor)}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section id="reviews" aria-labelledby="rev-h" className={section}>
          <h2 id="rev-h" className={h2}>What {b.name} Students Say <span className={gold}>on Google</span></h2>
          <p className="mt-3 max-w-3xl text-gray-300">{b.reviewsIntro}</p>
          <div className={`mt-6 grid gap-4 ${b.reviews.length >= 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
            {b.reviews.map((r) => (
              <figure key={r.name} className={card}>
                <blockquote className="text-sm text-gray-200">“{r.text}”</blockquote>
                <figcaption className="mt-3 text-xs text-gray-400">{r.name}</figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-4 text-sm">
            <a href={b.mapUrl} target="_blank" rel="noopener noreferrer" className={link}>Read all reviews on Google →</a>
          </p>
        </section>

        <section id="location" aria-labelledby="loc-h" className={section}>
          <h2 id="loc-h" className={h2}>Visit Us in <span className={gold}>{b.name}, Hyderabad</span></h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className={card}>
              <h3 className={`font-bold ${gold}`}>Address</h3>
              <address className="mt-2 not-italic text-gray-300">
                NG Cloud Networks<br />
                {b.street},<br />
                Hyderabad, Telangana {b.postalCode}
              </address>
              <p className="mt-3 text-gray-300">
                Phone / WhatsApp: <a href={`tel:${PHONE_TEL}`} className={link}>{PHONE_DISPLAY}</a>
              </p>
              <p className="mt-1 text-gray-300">Office hours: {b.hoursText}.</p>
              <p className="mt-3 text-sm text-gray-400">Convenient for learners in nearby areas such as {b.nearbyAreas.join(", ")}.</p>
              <a href={b.mapUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block rounded-xl bg-[#D4AF37] px-5 py-2 font-bold text-black">
                Open in Google Maps
              </a>
              {/* CONFIRM: add a real landmark line (nearest main road, bus stop or metro exit), entry notes and a branch photo. */}
            </div>
            <div className="overflow-hidden rounded-2xl border border-[#D4AF37]/20">
              <iframe
                title={`NG Cloud Networks ${b.name} on Google Maps`}
                src={`https://www.google.com/maps?q=${encodeURIComponent("NG Cloud Networks " + ADDRESS_LINE)}&output=embed`}
                className="h-72 w-full border-0 md:h-full md:min-h-72"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-400">
            Closer to {b.other.name}? Visit our <Link href={b.other.path} className="text-[#D4AF37] underline">{b.other.name} branch</Link>, or see both on the{" "}
            <Link href="/contact" className="text-[#D4AF37] underline">contact page</Link>.
          </p>
        </section>

        <ContactSection
          branch={b.name}
          title={<>Contact the <span className={gold}>{b.name} Branch</span></>}
          intro={`To book a free demo or ask about batches at ${b.name}, call or WhatsApp ${PHONE_DISPLAY}, or fill in the form below. Our team will contact you shortly.`}
          whatsappUrl={WHATSAPP}
          whatsappLabel={`Chat about ${b.name}`}
          formHeading={`Book a Free Demo at ${b.name}`}
        />

        <section id="faq" aria-labelledby="faq-h" className="mx-auto max-w-4xl scroll-mt-24 px-4 py-12">
          <h2 id="faq-h" className={h2}>{b.name} Branch <span className={gold}>FAQs</span></h2>
          <div className="mt-6 space-y-3">
            {faqs.map((f) => (
              <div key={f.q} className={`${card} !p-5`}>
                <h3 className="font-semibold">{f.q}</h3>
                <p className="mt-2 text-gray-300">{f.a}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-400">
            More questions, such as fees and placement? See the <Link href={HUB_PATH} className="text-[#D4AF37] underline">Hyderabad training FAQs</Link>.
          </p>
          <p className="mt-2 text-xs text-gray-400">Last updated: <time dateTime={b.lastUpdated}>{b.lastUpdatedLabel}</time></p>
        </section>
      </main>
      <Footer />
    </>
  );
}