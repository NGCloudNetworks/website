// lib/track.ts
// Fire the lead event for Google Analytics and the Meta Pixel after a successful form submit.
type W = { gtag?: (...a: unknown[]) => void; fbq?: (...a: unknown[]) => void };

export function trackMetaLead(params?: Record<string, string>) {
  if (typeof window === "undefined") return;
  (window as unknown as W).fbq?.("track", "Lead", params);
}
