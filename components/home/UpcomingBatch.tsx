import Image from "next/image";
import Link from "next/link";

export default function UpcomingBatch() {
  return (
    <section
      id="upcoming-batch"
      className="upcoming-batch"
      aria-labelledby="upcoming-batch-title"
    >
      <div className="upcoming-batch-container">

        {/* Section heading */}
        <div className="upcoming-batch-heading">
          <span className="upcoming-batch-eyebrow">
            NEW BATCH
          </span>

          <h2 id="upcoming-batch-title">
            CCNP Enterprise Training
          </h2>

          <p>
            ENCOR + ENARSI · Starts 15 October 2026
          </p>
        </div>

        {/* Main content */}
        <div className="upcoming-batch-grid">

          {/* Poster */}
          <div className="upcoming-batch-poster">
            <Image
              src="/images/batches/ccnp-enterprise-october-2026.webp"
              alt="CCNP Enterprise ENCOR and ENARSI training batch starting 15 October 2026 at NG Cloud Networks"
              width={1080}
              height={1080}
              sizes="(max-width: 900px) 100vw, 58vw"
              priority
            />
          </div>

          {/* Information */}
          <div className="upcoming-batch-info">

            <div className="batch-status">
              <span className="status-dot" />
              Admissions Open
            </div>

            <h3>
              Build Advanced Enterprise Networking Skills
            </h3>

            <p>
              Join the upcoming CCNP Enterprise training program covering
              ENCOR and ENARSI with practical Cisco networking labs and
              real-world troubleshooting scenarios.
            </p>

            <div className="batch-details">

              <div>
                <span>Batch Starts</span>
                <strong>15 October 2026</strong>
              </div>

              <div>
                <span>Schedule</span>
                <strong>Monday – Saturday</strong>
              </div>

              <div>
                <span>Time</span>
                <strong>7:00 AM – 9:00 AM</strong>
              </div>

              <div>
                <span>Location</span>
                <strong>Ameenpur, Hyderabad</strong>
              </div>

            </div>

            <div className="batch-modules">
              <span>350-401 ENCOR</span>
              <span>300-410 ENARSI</span>
              <span>Hands-on Cisco Labs</span>
            </div>

            <div className="batch-actions">

              <Link
                href="/courses/ccnp-enterprise-training-hyderabad"
                className="batch-primary-btn"
              >
                View Course
              </Link>

              <a
                href="https://wa.me/919989939191?text=Hi%20NG%20Cloud%20Networks%2C%20I%20am%20interested%20in%20the%20CCNP%20Enterprise%20batch%20starting%2015%20October%202026."
                target="_blank"
                rel="noopener noreferrer"
                className="batch-secondary-btn"
              >
                Enquire on WhatsApp
              </a>

            </div>

            <div className="batch-contact">
              <a href="tel:+919989939191">
                +91 9989939191
              </a>

              <a href="mailto:info@ngcloudnetworks.com">
                info@ngcloudnetworks.com
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}