// components/program/ProgramPage.tsx
// Landing page for a combined-course offer. Reads everything from data/programs.ts.
import Link from "next/link";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ContactSection from "@/components/branch/ContactSection";
import { card, gold, h2, section, link, btnPrimary, btnOutline, btnGhost } from "@/components/branch/ui";
import { PHONE_DISPLAY, PHONE_TEL, WA_NUMBER, SITE } from "@/data/branches";
import { gstAmount, totalWithGst, inr, programUrl, type Program } from "@/data/programs";
import { ORG_ID } from "@/lib/site";

export default function ProgramPage({ p }: { p: Program }) {
  const PAGE = programUrl(p);
  const WHATSAPP = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Hi NG Cloud Networks, I want details about the ${p.h1} (batch starts ${p.startLabel})`)}`;
  const gst = gstAmount(p.fee);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        "@id": `${PAGE}#course`,
        name: p.h1,
        description: p.seoDescription,
        provider: { "@id": ORG_ID },
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: ["InPerson", "Online"],
          startDate: p.startDate,
          location: { "@id": `${SITE}/ameerpet#branch` },
        },
        offers: { "@type": "Offer", price: p.fee, priceCurrency: "INR", url: PAGE },
      },
      {
        "@type": "FAQPage",
        mainEntity: p.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  };

  const facts: [string, string][] = [
    ["Batch starts", p.startLabel],
    ["Duration", p.duration],
    ["Batch size", p.batchSize],
    ["Timings", p.slots.join(" · ")],
    ["Where", "Ameerpet branch, Hyderabad, or live online"],
    ["Fee", `${inr(p.fee)} + ${p.gstPercent}% GST (${inr(gst)}) = ${inr(totalWithGst(p.fee))}`],
    ["Exam vouchers", "Not included"],
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <Navbar />
      <main className="bg-[#050505] text-white">
        <section aria-labelledby="hero-h" className="relative overflow-hidden px-4 pb-10 pt-32">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.12),transparent_60%)]" />
          <div className="relative mx-auto max-w-6xl">
            <span className="inline-block rounded-full border border-[#D4AF37]/40 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">{p.eyebrow}</span>
            <h1 id="hero-h" className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight md:text-5xl">{p.h1}</h1>
            <p className="mt-5 max-w-3xl text-lg text-gray-300">{p.intro}</p>
            <p className="mt-5 text-2xl font-extrabold">
              <span className={gold}>{inr(p.fee)}</span> <span className="text-base font-semibold text-gray-300">+ {p.gstPercent}% GST · {p.duration} · {p.batchSize}</span>
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#enquire" className={btnPrimary}>Reserve a seat</a>
              <a href={`tel:${PHONE_TEL}`} className={btnOutline}>Call {PHONE_DISPLAY}</a>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className={btnGhost}>WhatsApp us</a>
            </div>
          </div>
        </section>

        <section id="modules" aria-labelledby="mod-h" className={section}>
          <h2 id="mod-h" className={h2}>What You Will <span className={gold}>Learn</span></h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {p.modules.map((m, i) => (
              <div key={m.name} className={card}>
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Module {i + 1}</p>
                <h3 className="mt-1 text-lg font-bold">{m.name}</h3>
                <p className="mt-2 text-sm text-gray-300">{m.detail}</p>
                {m.href && <Link href={m.href} className={`mt-3 inline-block text-sm ${link}`}>See the full syllabus</Link>}
              </div>
            ))}
          </div>
        </section>

        <section id="facts" aria-labelledby="facts-h" className={section}>
          <h2 id="facts-h" className={h2}>Batch, Fee and <span className={gold}>Timings</span></h2>
          <dl className="mt-6 divide-y divide-white/10 rounded-2xl border border-[#D4AF37]/20">
            {facts.map(([k, v]) => (
              <div key={k} className="grid gap-1 p-4 md:grid-cols-[200px_1fr]">
                <dt className="text-sm font-semibold uppercase tracking-wide text-gray-400">{k}</dt>
                <dd className="text-gray-200">{v}</dd>
              </div>
            ))}
          </dl>
          {p.priceNote && <p className="mt-4 text-sm text-gray-400">{p.priceNote}</p>}
          <p className="mt-2 text-sm text-gray-400">
            Prefer one course? Each can be joined individually at the fee and duration on its page, listed on our{" "}
            <Link href="/networking-training-hyderabad" className={link}>Hyderabad training page</Link>.
          </p>
        </section>

        {p.extras.length > 0 && (
          <section id="lab" aria-labelledby="lab-h" className={section}>
            <h2 id="lab-h" className={h2}>Lab and <span className={gold}>Practice</span></h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {p.extras.map((x) => (
                <div key={x.title} className={card}>
                  <h3 className="text-lg font-bold">{x.title}</h3>
                  <p className="mt-2 text-sm text-gray-300">{x.text}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section id="who" aria-labelledby="who-h" className={section}>
          <h2 id="who-h" className={h2}>Who This Is <span className={gold}>For</span></h2>
          <ul className="mt-6 space-y-3 text-gray-300">
            {p.forWho.map((w) => (
              <li key={w} className={`${card} !p-4`}>{w}</li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-gray-400">
            Career support follows our standard placement assistance: resume, interview preparation and guidance. It is assisted, not guaranteed. Read about the trainer on our{" "}
            <Link href="/about" className={link}>About page</Link>.
          </p>
        </section>

        <ContactSection
          branch="Ameerpet"
          title={<>Reserve Your Seat for the <span className={gold}>{p.startLabel}</span> Batch</>}
          intro={`Only ${p.batchSize.toLowerCase()}. Call, WhatsApp or send the form and we will confirm seat availability and timings.`}
          whatsappUrl={WHATSAPP}
          whatsappLabel="Message us on WhatsApp"
          formHeading="Reserve a seat"
          courseOptions={[
            { value: "program", label: p.formLabel },
            { value: "guidance", label: "Not sure yet, need guidance" },
          ]}
        />

        <section id="faq" aria-labelledby="faq-h" className={section}>
          <h2 id="faq-h" className={h2}>Frequently Asked <span className={gold}>Questions</span></h2>
          <div className="mt-6 space-y-4">
            {p.faqs.map((f) => (
              <div key={f.q} className={card}>
                <h3 className="text-lg font-bold">{f.q}</h3>
                <p className="mt-2 text-gray-300">{f.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
