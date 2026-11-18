// components/global/HubCallout.tsx
// Internal-link block that sends visitors (and crawlers) to the Hyderabad hub and the two branch pages.
// Server component, no hooks, so it can be dropped into any page.
import Link from "next/link";

const HUB = "/networking-training-hyderabad";

type Props = {
  title: string;
  text: string;
  hubAnchor?: string; // descriptive anchor text for the hub link
  className?: string;
};

export default function HubCallout({
  title,
  text,
  hubAnchor = "Networking & cloud training in Hyderabad",
  className = "",
}: Props) {
  return (
    <section aria-label={title} className={`px-5 py-10 ${className}`}>
      <div className="mx-auto max-w-[1100px] rounded-3xl border border-[#D4AF37]/20 bg-[#D4AF37]/[0.05] p-7 md:p-9">
        <h2 className="text-[22px] font-extrabold tracking-[-0.02em] text-white md:text-[26px]">{title}</h2>
        <p className="mt-3 max-w-[820px] text-[16px] leading-[1.8] text-white/70">{text}</p>
        <p className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-[15px] font-semibold">
          <Link href={HUB} className="text-[#D4AF37] underline underline-offset-4">{hubAnchor}</Link>
          <Link href="/ameenpur" className="text-[#D4AF37] underline underline-offset-4">Ameenpur branch</Link>
          <Link href="/ameerpet" className="text-[#D4AF37] underline underline-offset-4">Ameerpet branch</Link>
        </p>
      </div>
    </section>
  );
}
