// app/networking-training-hyderabad/page.tsx
// The single home for everything that is true for BOTH branches: course comparison, fees, doubts about learning,
// job struggles, how training works, full timetable, trainer profile and academy-wide FAQs.
// /ameenpur and /ameerpet link here instead of repeating it, so the three pages do not compete or duplicate.
// Items marked CONFIRM need your input before launch.
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import ContactSection from "@/components/branch/ContactSection";
import { card, gold, h2, section, th, link, btnPrimary, btnOutline, btnGhost } from "@/components/branch/ui";
import {
  FACTS, COURSE_META, courses, byCat, href, shortName, nameOf, modes,
  PATHS, DOUBTS, STRUGGLES, PROMISE, NOT_PROMISE, JOURNEY,
} from "@/data/trainingContent";
import { trainer, trainingFeatures, trainingModes, courseBatches, weekendSchedule, learningMethodology, placementSupport } from "@/data/academy";
import { SITE, PHONE_DISPLAY, PHONE_TEL, WA_NUMBER, EMAIL, TRAINER_FULL_NAME, HUB_PATH, AMEENPUR, AMEERPET } from "@/data/branches";

const PAGE = `${SITE}${HUB_PATH}`;
const LAST_UPDATED = "2026-11-17";
const LAST_UPDATED_LABEL = "17 November 2026";
const WHATSAPP = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hi NG Cloud Networks, I want details about your courses and batches")}`;
const BRANCHES = [AMEENPUR, AMEERPET];

export const metadata: Metadata = {
  title: "Networking & Cloud Training in Hyderabad | NG Cloud Networks",
  description:
    "Compare CCNA, CCNP, AWS, Azure, Palo Alto and Fortigate courses in Hyderabad: fees, duration, batches and trainer. Ameenpur and Ameerpet branches.",
  alternates: { canonical: PAGE },
  openGraph: {
    title: "Networking, Cloud & Security Training in Hyderabad | NG Cloud Networks",
    description: "Courses, fees, batch timings and trainer details for NG Cloud Networks, with branches in Ameenpur and Ameerpet, Hyderabad.",
    url: PAGE,
    type: "website",
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image", title: "Networking & Cloud Training in Hyderabad", description: "CCNA, CCNP, firewall and cloud courses with hands-on labs at NG Cloud Networks." },
};

const NAV = [
  ["Branches", "#branches"],
  ["Your doubts", "#doubts"],
  ["Courses", "#courses"],
  ["Jobs", "#jobs"],
  ["Batches", "#batches"],
  ["Trainer", "#trainer"],
  ["Reviews", "#reviews"],
  ["Contact", "#enquire"],
  ["FAQ", "#faq"],
] as const;

const FAQS = [
  {
    q: "Which networking and cloud courses can I join in Hyderabad?",
    a: `You can join ${courses.length} courses: ${courses.map((c) => shortName(c.anchor)).join(", ")}. They are grouped as networking, cloud and security programs, and each has its own syllabus page.`,
  },
  {
    q: "How much do the courses cost?",
    a: "Course fees range from ₹10,000 to ₹15,000, and most courses add 18% GST; CCNA is ₹10,000. See the fees table on this page and ask for the latest figure when you enquire.",
  },
  {
    q: "Which course should a beginner start with?",
    a: "Beginners with no networking background should start with CCNA, which builds the base for CCNP, firewalls and cloud. If you want cloud directly, AWS or Azure is a practical first course.",
  },
  {
    q: "Who teaches the courses?",
    a: `${TRAINER_FULL_NAME}, the founder, teaches the networking, firewall, SD-WAN and cloud courses and has ${trainer.experience.toLowerCase()} of industry and training experience. Cloud Security is taught by a separate specialist trainer.`,
  },
  {
    q: "What are the batch timings?",
    a: "Weekday batches run from early morning to late evening, and Saturday and Sunday sessions run 9:00 AM to 1:00 PM. See the batch table on this page for each course.",
  },
  {
    q: "Are classes online or in the classroom?",
    a: `Both. We run ${modes.join(", ").toLowerCase()} options, so you can attend at a branch, join live online, or combine the two.`,
  },
  {
    q: "Do you offer placement support, and will I get a job?",
    a: "We offer placement assistance: career guidance, resume building, mock technical and HR interviews, and job referral assistance. It is assistance, not a job guarantee.",
  },
  {
    q: "Does the course fee include the certification exam?",
    a: "The fee covers training and certification guidance. Official exam fees (Cisco, AWS, Microsoft and others) are paid to the exam provider unless your enrolment offer says otherwise.",
  },
  {
    q: "Can I attend a free demo class before joining?",
    a: `Yes. Call or WhatsApp ${PHONE_DISPLAY}, or use the enquiry form on this page, to book a free demo and meet the trainer before you pay.`,
  },
  {
    q: "Where are the NG Cloud Networks branches in Hyderabad?",
    a: "We have two branches: Ameenpur (Royal Homes, Fusion School Back Side, 502032) and Ameerpet (Aditya Enclave, Annapurna Block, 500038). Both run the same courses and timetable, so choose the one that is easier to reach or join live online.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE}#webpage`,
      url: PAGE,
      name: "Networking, Cloud & Security Training in Hyderabad",
      inLanguage: "en-IN",
      dateModified: LAST_UPDATED,
      about: { "@id": `${SITE}/#organization` },
      mentions: [{ "@id": `${SITE}/ameenpur#branch` }, { "@id": `${SITE}/ameerpet#branch` }],
      breadcrumb: { "@id": `${PAGE}#breadcrumb` },
    },
    {
      "@type": "Person",
      "@id": `${SITE}/#trainer-nazeer-basha`,
      name: TRAINER_FULL_NAME,
      jobTitle: trainer.designation,
      url: `${SITE}/about`,
      worksFor: { "@id": `${SITE}/#organization` },
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE}#courses`,
      name: "Networking, cloud and security courses at NG Cloud Networks, Hyderabad",
      itemListElement: courses.map((c, i) => ({ "@type": "ListItem", position: i + 1, url: `${SITE}${c.href}`, name: c.anchor })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "Training in Hyderabad", item: PAGE },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE}#faq`,
      mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ],
};

export default function HyderabadTrainingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <Navbar />
      <main className="bg-[#050505] text-white">
        <section aria-labelledby="hero-h" className="relative overflow-hidden px-4 pb-10 pt-32">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.12),transparent_60%)]" />
          <div className="relative mx-auto max-w-6xl">
            <nav aria-label="Breadcrumb" className="text-sm text-gray-400">
              <ol className="flex gap-2">
                <li><Link href="/" className="hover:text-[#D4AF37]">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page">Training in Hyderabad</li>
              </ol>
            </nav>
            <h1 id="hero-h" className="mt-6 max-w-4xl text-3xl font-extrabold leading-tight md:text-5xl">
              Networking, Cloud & Security <span className={gold}>Training in Hyderabad</span>
            </h1>
            <p className="mt-5 max-w-3xl text-lg text-gray-300">
              NG Cloud Networks trains learners in networking, cloud and security from two Hyderabad branches, Ameenpur and Ameerpet, or live online.
              Compare {courses.length} courses by fee, duration and prerequisite, see the batch timetable, and meet the trainer before you pay.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={`tel:${PHONE_TEL}`} className={btnPrimary}>Call {PHONE_DISPLAY}</a>
              <a href="#enquire" className={btnOutline}>Book a Free Demo</a>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className={btnGhost}>WhatsApp us</a>
            </div>
            <nav aria-label="On this page" className="mt-8 flex flex-wrap gap-2 text-sm">
              {NAV.map(([label, to]) => (
                <a key={to} href={to} className="rounded-full border border-white/15 px-4 py-1.5 text-gray-300 hover:border-[#D4AF37] hover:text-[#D4AF37]">{label}</a>
              ))}
            </nav>
          </div>
        </section>

        {/* Branch chooser: links to the two local pages */}
        <section id="branches" aria-labelledby="br-h" className={section}>
          <h2 id="br-h" className={h2}>Choose Your <span className={gold}>Branch</span></h2>
          <p className="mt-3 max-w-3xl text-gray-300">Both branches run the same courses, timetable and trainer. Pick the one that is easier for you to reach, or join live online.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {BRANCHES.map((b) => (
              <article key={b.slug} className={card}>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">NG Cloud Networks {b.name}</h3>
                  {b.isNew && <span className="rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-3 py-[2px] text-[11px] font-semibold uppercase tracking-wider text-[#D4AF37]">New</span>}
                </div>
                <address className="mt-2 not-italic text-sm text-gray-300">{b.street}, Hyderabad, Telangana {b.postalCode}</address>
                <p className="mt-2 text-sm text-gray-400">Nearby: {b.nearbyAreas.join(", ")}</p>
                <p className="mt-4 flex flex-wrap gap-4 text-sm">
                  <Link href={`/${b.slug}`} className={link}>{b.name} branch details →</Link>
                  <a href={b.mapUrl} target="_blank" rel="noopener noreferrer" className={link}>Directions</a>
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="doubts" aria-labelledby="doubts-h" className={section}>
          <h2 id="doubts-h" className={h2}>Doubts Students Have <span className={gold}>Before Joining</span></h2>
          <p className="mt-3 max-w-3xl text-gray-300">These are the questions that stop people from starting. Here are straight answers.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {DOUBTS.map((d) => (
              <div key={d.q} className={card}>
                <h3 className="text-lg font-bold">{d.q}</h3>
                <p className="mt-2 text-sm text-gray-300">{d.a}</p>
                {d.link && <p className="mt-3 text-sm"><Link href={href(d.link[1])} className={link}>{d.link[0]} →</Link></p>}
              </div>
            ))}
          </div>
        </section>

        <section id="courses" aria-labelledby="courses-h" className={section}>
          <h2 id="courses-h" className={h2}>Choose Your Course: <span className={gold}>Fees, Duration & Prerequisites</span></h2>
          <p className="mt-3 max-w-3xl text-gray-300">Fees exclude GST where shown and can change, so ask for the latest figure when you enquire. Open any course for its full syllabus.</p>

          <h3 className="mt-8 text-xl font-bold">Course finder: where should you start?</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {PATHS.map((p) => (
              <div key={p.who} className={card}>
                <h4 className="font-bold">{p.who}</h4>
                <p className="mt-2 text-sm">
                  <span className="text-gray-400">Start with </span><Link href={href(p.start)} className={link}>{nameOf(p.start)}</Link>
                  <span className="text-gray-400">, then </span><Link href={href(p.then)} className={link}>{nameOf(p.then)}</Link>
                </p>
                <p className="mt-2 text-sm text-gray-300">{p.why}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-gray-400">
            Still unsure? Read <Link href="/blog/ccna-vs-ccnp-which-should-you-learn-first" className="text-[#D4AF37] underline">CCNA vs CCNP</Link>,{" "}
            <Link href="/blog/aws-vs-azure-which-cloud-platform-learn-2026" className="text-[#D4AF37] underline">AWS vs Azure</Link>,{" "}
            <Link href="/blog/is-ccna-worth-it-in-2026" className="text-[#D4AF37] underline">is CCNA worth it in 2026</Link>, or compare everything on the{" "}
            <Link href="/courses" className="text-[#D4AF37] underline">all courses page</Link>.
          </p>

          <h3 className="mt-10 text-xl font-bold">All courses at a glance</h3>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-[#D4AF37]/20" tabIndex={0} role="region" aria-label="Courses, duration, fee and prerequisite table, scrolls sideways on small screens">
            <table className="w-full min-w-[760px] text-left text-sm">
              <caption className="sr-only">Courses, duration, fee and prerequisite at NG Cloud Networks Hyderabad</caption>
              <thead className="bg-[#D4AF37]/10 text-[#D4AF37]">
                <tr>
                  <th scope="col" className={th}>Course</th>
                  <th scope="col" className={th}>Duration</th>
                  <th scope="col" className={th}>Fee</th>
                  <th scope="col" className={th}>Prerequisite</th>
                  <th scope="col" className={th}>Best for</th>
                </tr>
              </thead>
              {byCat.map(({ cat, items }) => (
                <tbody key={cat}>
                  <tr className="border-t border-white/10 bg-white/[0.03]">
                    <th scope="colgroup" colSpan={5} className="p-3 text-xs uppercase tracking-wider text-gray-400">{cat}</th>
                  </tr>
                  {items.map((c) => (
                    <tr key={c.slug} className="border-t border-white/10">
                      <th scope="row" className="p-4 font-semibold"><Link href={c.href} className="hover:text-[#D4AF37]">{shortName(c.anchor)}</Link></th>
                      <td className="p-4 text-gray-300">{FACTS[c.slug]?.duration}</td>
                      <td className="p-4 text-gray-300">{FACTS[c.slug]?.fee}</td>
                      <td className="p-4 text-gray-300">{COURSE_META[c.slug]?.prerequisite}</td>
                      <td className="p-4 text-gray-300">{COURSE_META[c.slug]?.suits}</td>
                    </tr>
                  ))}
                </tbody>
              ))}
            </table>
          </div>

          <h3 className="mt-10 text-xl font-bold">What you will learn and the roles it leads to</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((c) => {
              const m = COURSE_META[c.slug];
              if (!m) return null;
              return (
                <article key={c.slug} className={card}>
                  <h4 className="text-lg font-bold"><Link href={c.href} className="hover:text-[#D4AF37]">{shortName(c.anchor)}</Link></h4>
                  <ul className="mt-3 space-y-1 text-sm text-gray-300">{m.learn.map((l) => <li key={l}>✓ {l}</li>)}</ul>
                  <p className="mt-3 text-xs uppercase tracking-wide text-gray-400">Roles it supports</p>
                  <p className="text-sm text-gray-300">{m.roles.join(", ")}</p>
                  <p className="mt-3 text-sm">
                    <Link href={c.href} className={link}>Full syllabus →</Link>
                    {m.next && <span className="text-gray-400"> · Next: <Link href={href(m.next)} className="text-gray-200 underline">{nameOf(m.next)}</Link></span>}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section aria-labelledby="mid-cta-h" className="mx-auto max-w-6xl px-4 py-6">
          <div className="rounded-3xl border border-[#D4AF37]/40 bg-[#D4AF37]/10 p-6 md:flex md:items-center md:justify-between md:gap-6 md:p-8">
            <div>
              <h2 id="mid-cta-h" className="text-xl font-bold md:text-2xl">Not sure which course fits you?</h2>
              <p className="mt-1 text-gray-300">Tell us your background and goal, and the trainer will suggest a path before you pay.</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-3 md:mt-0">
              <a href={`tel:${PHONE_TEL}`} className={btnPrimary}>Call now</a>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className={btnGhost}>WhatsApp</a>
              <a href="#enquire" className={btnOutline}>Fill the form</a>
            </div>
          </div>
        </section>

        <section id="jobs" aria-labelledby="jobs-h" className={section}>
          <h2 id="jobs-h" className={h2}>Why Freshers Struggle to Get Networking Jobs, <span className={gold}>and What We Do About It</span></h2>
          <p className="mt-3 max-w-3xl text-gray-300">These are common reasons candidates miss offers after finishing a course. Each one is addressed in how we teach, not left for you to fix later.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {STRUGGLES.map((x) => (
              <div key={x.struggle} className={card}>
                <h3 className="font-bold">{x.struggle}</h3>
                <p className="mt-2 text-sm text-gray-400"><span className="font-semibold text-gray-300">Why: </span>{x.cause}</p>
                <p className="mt-2 text-sm text-gray-300"><span className={`font-semibold ${gold}`}>What we do: </span>{x.fix}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-gray-400">
            Career support covers {placementSupport.process.slice(0, 4).join(", ").toLowerCase()} and job referral assistance. See <Link href="/placements" className="text-[#D4AF37] underline">placement details</Link>.
          </p>
        </section>

        <section id="how" aria-labelledby="how-h" className={section}>
          <h2 id="how-h" className={h2}>How Training <span className={gold}>Works</span></h2>
          <ol className="mt-6 grid gap-4 md:grid-cols-5">
            {JOURNEY.map((j, i) => (
              <li key={j.t} className={`${card} !p-5`}>
                <span className={`text-sm font-bold ${gold}`}>Step {i + 1}</span>
                <h3 className="mt-1 font-bold">{j.t}</h3>
                <p className="mt-2 text-sm text-gray-300">{j.d}</p>
              </li>
            ))}
          </ol>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {trainingModes.map((m) => (
              <div key={m.mode} className={card}>
                <h3 className={`font-bold ${gold}`}>{m.mode}</h3>
                <p className="mt-2 text-sm text-gray-300">{m.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="batches" aria-labelledby="batch-h" className={section}>
          <h2 id="batch-h" className={h2}>Batch Timings <span className={gold}>at Both Branches</span></h2>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-[#D4AF37]/20" tabIndex={0} role="region" aria-label="Batch timings table, scrolls sideways on small screens">
            <table className="w-full min-w-[560px] text-left text-sm">
              <caption className="sr-only">Weekday batch timings by course at NG Cloud Networks</caption>
              <thead className="bg-[#D4AF37]/10 text-[#D4AF37]">
                <tr>
                  <th scope="col" className={th}>Course</th>
                  <th scope="col" className={th}>Time</th>
                  <th scope="col" className={th}>Trainer</th>
                  <th scope="col" className={th}>Mode</th>
                </tr>
              </thead>
              <tbody>
                {courseBatches.map((x, i) => (
                  <tr key={i} className="border-t border-white/10">
                    <th scope="row" className="p-4 font-semibold"><Link href={`/courses/${x.courseSlug}`} className="hover:text-[#D4AF37]">{x.course}</Link></th>
                    <td className="p-4 text-gray-300">{x.time} ({x.period})</td>
                    <td className="p-4 text-gray-300">{x.trainer}</td>
                    <td className="p-4 text-gray-300">{x.mode}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {weekendSchedule.map((w) => (
              <div key={w.day} className={`${card} !p-5`}>
                <h3 className={`font-bold ${gold}`}>{w.day}: {w.time}</h3>
                <p className="mt-1 text-sm text-gray-300">{w.purpose}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-gray-400">
            Course not listed or your slot is full? Call <a href={`tel:${PHONE_TEL}`} className="font-semibold text-[#D4AF37]">{PHONE_DISPLAY}</a> and we will find the nearest batch.
          </p>
        </section>

        <section id="trainer" aria-labelledby="trainer-h" className={section}>
          <h2 id="trainer-h" className={h2}>Learn From the Founder: <span className={gold}>{TRAINER_FULL_NAME}</span></h2>
          <div className={`${card} mt-6`}>
            <div className="grid gap-6 md:grid-cols-[1.4fr_1fr]">
              <div>
                <p className="font-semibold">{trainer.designation} · {trainer.experience}</p>
                <p className="mt-2 text-gray-300">{trainer.bio}</p>
                <p className="mt-4 text-sm text-gray-400">
                  He teaches every networking, firewall, SD-WAN and cloud course except Cloud Security, which is taught by a specialist trainer.{" "}
                  <Link href="/about" className="text-[#D4AF37] underline">Read his full profile</Link>.
                </p>
                <h3 className="mt-5 text-sm font-bold uppercase tracking-wide text-gray-400">Areas of expertise</h3>
                <ul className="mt-2 flex flex-wrap gap-2 text-sm">
                  {trainer.expertise.map((e) => <li key={e} className="rounded-full border border-[#D4AF37]/30 px-3 py-1 text-gray-200">{e}</li>)}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wide text-gray-400">What his classes look like</h3>
                <ul className="mt-2 space-y-1 text-sm text-gray-300">{learningMethodology.slice(0, 8).map((l) => <li key={l}>✓ {l}</li>)}</ul>
              </div>
            </div>
            {/* Add a real, recent photo of Nazeer teaching with next/image and descriptive alt text. */}
          </div>
          <p className="mt-4 text-gray-300">You do not have to take our word for it. <a href="#enquire" className={link}>Book a free demo</a> and judge the teaching before you pay.</p>
        </section>

        <section id="reviews" aria-labelledby="rev-h" className={section}>
          <h2 id="rev-h" className={h2}>What Students Say <span className={gold}>on Google</span></h2>
          <p className="mt-3 max-w-3xl text-gray-300">
            Our Ameenpur profile has {AMEENPUR.reviewCount} Google reviews and our Ameerpet profile has {AMEERPET.reviewCount}, as of {AMEENPUR.reviewsAsOf}. Read more on each branch page.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[{ r: AMEENPUR.reviews[0], b: AMEENPUR }, { r: AMEERPET.reviews[0], b: AMEERPET }].map(({ r, b }) => (
              <figure key={b.slug} className={card}>
                <blockquote className="text-sm text-gray-200">“{r.text}”</blockquote>
                <figcaption className="mt-3 text-xs text-gray-400">{r.name}, <Link href={`/${b.slug}#reviews`} className="underline">{b.name} branch</Link></figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="promise" aria-labelledby="promise-h" className={section}>
          <h2 id="promise-h" className={h2}>What We Promise, <span className={gold}>and What We Do Not</span></h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className={card}>
              <h3 className={`font-bold ${gold}`}>We promise</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-300">{PROMISE.map((p) => <li key={p}>✓ {p}</li>)}</ul>
            </div>
            <div className={card}>
              <h3 className="font-bold text-gray-200">We do not promise</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-300">{NOT_PROMISE.map((p) => <li key={p}>✕ {p}</li>)}</ul>
            </div>
          </div>
        </section>

        <ContactSection
          branch="Hyderabad"
          branchOptions={["Ameenpur", "Ameerpet", "Live Online", "No preference"]}
          title={<>Book a Free Demo <span className={gold}>in Hyderabad</span></>}
          intro={`To book a free demo or ask about batches, call or WhatsApp ${PHONE_DISPLAY}, or fill in the form below and choose your branch. Our team will contact you shortly.`}
          whatsappUrl={WHATSAPP}
          whatsappLabel="Chat about courses"
          formHeading="Send an Enquiry"
        />

        <section id="faq" aria-labelledby="faq-h" className="mx-auto max-w-4xl scroll-mt-24 px-4 py-12">
          <h2 id="faq-h" className={h2}>Hyderabad Training <span className={gold}>FAQs</span></h2>
          <div className="mt-6 space-y-3">
            {FAQS.map((f) => (
              <div key={f.q} className={`${card} !p-5`}>
                <h3 className="font-semibold">{f.q}</h3>
                <p className="mt-2 text-gray-300">{f.a}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-400">
            Questions about one branch? See <Link href="/ameenpur" className="text-[#D4AF37] underline">Ameenpur</Link> or <Link href="/ameerpet" className="text-[#D4AF37] underline">Ameerpet</Link>, or email {EMAIL}.
          </p>
          <p className="mt-2 text-xs text-gray-400">Last updated: <time dateTime={LAST_UPDATED}>{LAST_UPDATED_LABEL}</time></p>
        </section>
      </main>
      <Footer />
    </>
  );
}