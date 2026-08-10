import { Star, Quote } from "lucide-react";
import { academyStats } from "@/data/academy";

// TODO: confirm this against the real total on Google Business Profile
const TOTAL_REVIEW_COUNT = 13;

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

export default function TestimonialsSection() {
  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "NG Cloud Networks Training Programs",
    "@id": "https://www.ngcloudnetworks.com/#training-programs",
    brand: {
      "@id": "https://www.ngcloudnetworks.com/#organization",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: academyStats.rating.split("/")[0],
      bestRating: "5",
      reviewCount: TOTAL_REVIEW_COUNT,
    },
    review: testimonials.map((t) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: t.name,
      },
      reviewBody: t.quote,
    })),
  };

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative overflow-hidden py-20 md:py-24"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-[-180px] top-[-120px] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/7 blur-[180px]" />
        <div className="absolute right-[-180px] bottom-[-120px] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/6 blur-[180px]" />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
      />

      <div className="relative z-10 mx-auto max-w-[1280px] px-5">

        {/* Header */}
        <header className="mx-auto max-w-[780px] text-center">
          <span
            className="
              inline-flex items-center gap-2 rounded-full border
              border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-2
              text-sm font-semibold text-[#D4AF37]
            "
          >
            Student Reviews
          </span>

          <h2
            id="testimonials-heading"
            className="
              mt-6 text-[40px] font-black leading-[1] tracking-[-0.04em]
              text-white md:text-[56px]
            "
          >
            What Our Students Say
          </h2>

          {/* Rating summary — real, visible, matches schema */}
          <div className="mt-5 flex items-center justify-center gap-2.5">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-[#D4AF37] text-[#D4AF37]"
                  aria-hidden="true"
                />
              ))}
            </div>
            <span className="text-[15px] font-semibold text-white">
              {academyStats.rating}
            </span>
            <span className="text-[14px] text-white/50">
              ({TOTAL_REVIEW_COUNT} Google Reviews)
            </span>
          </div>
        </header>

        {/* Testimonials grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="
                flex flex-col rounded-[28px] border border-white/10
                bg-white/[0.03] p-7
              "
            >
              <Quote
                className="h-6 w-6 text-[#D4AF37]/40"
                aria-hidden="true"
              />

              <blockquote className="mt-4 flex-1 text-[14.5px] leading-[1.8] text-white/75">
                {t.quote}
              </blockquote>

              <figcaption className="mt-6 border-t border-white/10 pt-5">
                <p className="text-[15px] font-bold text-white">{t.name}</p>
                <p className="mt-1 text-[13px] text-[#D4AF37]/80">{t.courses}</p>
              </figcaption>
            </figure>
          ))}
        </div>

      </div>
    </section>
  );
}