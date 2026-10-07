"use client";

export default function AnnouncementTicker() {
  const announcement = (
    <>
      <span className="announcement-icon">🔥</span>

      <strong>NEW BATCH ALERT</strong>

      <span className="announcement-separator">•</span>

      <span>CCNP ENTERPRISE</span>

      <span className="announcement-separator">•</span>

      <span>ENCOR + ENARSI</span>

      <span className="announcement-separator">•</span>

      <span>STARTS 15 OCTOBER 2026</span>

      <span className="announcement-separator">•</span>

      <span>7:00 AM – 9:00 AM</span>

      <span className="announcement-separator">•</span>

      <strong>ENQUIRE NOW →</strong>
    </>
  );

  return (
    <div className="announcement-ticker">
      <a href="#upcoming-batch" className="announcement-ticker-link">
        <div className="announcement-track">
          <div className="announcement-content">
            {announcement}
          </div>

          <div className="announcement-content" aria-hidden="true">
            {announcement}
          </div>
        </div>
      </a>
    </div>
  );
}