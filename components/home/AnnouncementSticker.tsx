"use client";

export default function AnnouncementTicker() {
  const announcement = (
    <>
      <span className="announcement-icon">🔥</span>

      <strong>NEW BATCH ALERT</strong>

      <span className="announcement-separator">•</span>

      <span>NETWORK SECURITY ENGINEER &amp; CLOUD SECURITY</span>

      <span className="announcement-separator">•</span>

      <span>5 SEATS PER BATCH</span>

      <span className="announcement-separator">•</span>

      <span>STARTS 1 DECEMBER 2026</span>

      <span className="announcement-separator">•</span>

      <span>AMEERPET · ONLINE ALSO</span>

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