// components/global/OfferLinks.tsx
// Short internal-link strip for the current batch offers. Reads data/programs.ts.
import Link from "next/link";
import { NETWORK_SECURITY, CLOUD_SECURITY, inr } from "@/data/programs";

export default function OfferLinks({ className = "" }: { className?: string }) {
  const items = [NETWORK_SECURITY, CLOUD_SECURITY];
  return (
    <section aria-label="Batches starting 1 December 2026" className={`px-4 py-8 ${className}`}>
      <div className="mx-auto max-w-6xl rounded-3xl border border-[#D4AF37]/25 bg-[#D4AF37]/[0.06] p-6 md:p-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-[#D4AF37]">New batches start {NETWORK_SECURITY.startLabel}</p>
        <h2 className="mt-2 text-2xl font-bold text-white">Combined programs at our Ameerpet branch</h2>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {items.map((p) => (
            <li key={p.slug} className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <Link href={p.path} className="text-lg font-bold text-[#D4AF37] underline-offset-4 hover:underline">{p.h1}</Link>
              <p className="mt-1 text-sm text-gray-300">
                {p.duration}, {inr(p.fee)} + GST, {p.batchSize.toLowerCase()}.
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
