// components/home/UpcomingBatch.tsx
// Homepage section for the next batch. Everything comes from data/programs.ts, so a new batch is a one-file edit.
import Image from "next/image";
import Link from "next/link";
import { NETWORK_SECURITY, CLOUD_SECURITY, gstAmount, inr, type Program } from "@/data/programs";
import { PHONE_DISPLAY, PHONE_TEL, WA_NUMBER } from "@/data/branches";

const OFFERS: { p: Program; image: string; width: number; height: number; alt: string; short: string; covers: string[] }[] = [
  {
    p: NETWORK_SECURITY,
    image: "/images/batches/network-security-engineer-dec-2026.webp",
    width: 1080,
    height: 1350,
    alt: "Network Security Engineer course at NG Cloud Networks Ameerpet: CCNA, CCNP, Palo Alto and FortiGate, batch starts 1 December 2026, 5 students per batch",
    short: "Network Security Engineer",
    covers: ["CCNA", "CCNP Enterprise", "Palo Alto", "FortiGate"],
  },
  {
    p: CLOUD_SECURITY,
    image: "/images/batches/cloud-security-combo-dec-2026.webp",
    width: 1080,
    height: 1296,
    alt: "Cloud Security combined course at NG Cloud Networks Ameerpet: CCNA, Linux, AWS and multi-cloud security, batch starts 1 December 2026, 5 members per batch",
    short: "Cloud Security",
    covers: ["CCNA", "Linux", "AWS Security", "AWS · Azure · GCP"],
  },
];

export default function UpcomingBatch() {
  const start = NETWORK_SECURITY.startLabel;
  return (
    <section id="upcoming-batch" className="upcoming-batch" aria-labelledby="upcoming-batch-title">
      <div className="upcoming-batch-container">
        <div className="upcoming-batch-heading">
          <span className="upcoming-batch-eyebrow">NEXT BATCH · {start.toUpperCase()}</span>
          <h2 id="upcoming-batch-title">New Batches Start {start}</h2>
          <p>
            Two combined programs at our Ameerpet branch in Hyderabad, in the classroom or live online, with only 5
            students per batch. Individual courses can still be joined separately at the fees on their course pages.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {OFFERS.map(({ p, image, width, height, alt, short, covers }) => {
            const wa = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Hi NG Cloud Networks, I am interested in the ${short} program starting ${start}.`)}`;
            return (
              <article key={p.slug} className="flex flex-col overflow-hidden rounded-3xl border border-[#D4AF37]/25 bg-white/[0.03]">
                <Link href={p.path} aria-label={`${p.h1}: details and fees`} className="block">
                  <Image src={image} alt={alt} width={width} height={height} sizes="(max-width: 1024px) 100vw, 600px" className="h-auto w-full" />
                </Link>

                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <div className="batch-status">
                    <span className="status-dot" />
                    Admissions Open
                  </div>

                  <h3 className="mt-3 text-[22px] font-extrabold leading-snug text-white">
                    <Link href={p.path} className="hover:text-[#D4AF37]">{p.h1}</Link>
                  </h3>

                  <div className="batch-modules mt-4">
                    {covers.map((c) => (
                      <span key={c}>{c}</span>
                    ))}
                  </div>

                  <div className="batch-details mt-5">
                    <div>
                      <span>Batch Starts</span>
                      <strong>{p.startLabel}</strong>
                    </div>
                    <div>
                      <span>Duration</span>
                      <strong>{p.duration}</strong>
                    </div>
                    <div>
                      <span>Fee</span>
                      <strong>{inr(p.fee)} + GST</strong>
                    </div>
                    <div>
                      <span>Timing</span>
                      <strong>{p.slots.join(" · ")}</strong>
                    </div>
                  </div>
                  <p className="mt-2 text-xs text-white/50">
                    GST {p.gstPercent}% = {inr(gstAmount(p.fee))}. {p.batchSize}. Exam vouchers not included.
                  </p>

                  <div className="batch-actions mt-6">
                    <Link href={p.path} className="batch-primary-btn">
                      View details and fees
                    </Link>
                    <a href={wa} target="_blank" rel="noopener noreferrer" className="batch-secondary-btn">
                      Enquire on WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-8 text-center text-[15px] text-white/60">
          Questions about seats or timings? Call{" "}
          <a href={`tel:${PHONE_TEL}`} className="font-semibold text-[#D4AF37]">{PHONE_DISPLAY}</a>, or see all{" "}
          <Link href="/networking-training-hyderabad" className="font-semibold text-[#D4AF37] underline underline-offset-4">
            courses, fees and batches in Hyderabad
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
