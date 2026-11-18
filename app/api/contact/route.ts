// app/api/contact/route.ts
// Used by the contact page, the homepage popup and the Ameenpur / Ameerpet pages.
// Same request and response contract as before ({ success: boolean }); what changed is listed in the comments.
import { Resend } from "resend";
import { NextResponse } from "next/server";

const OWNER_EMAIL = "info@ngcloudnetworks.com";
// FIX: the thank-you mail used noreply@yourdomain.com. Resend only sends from a domain you have verified.
const FROM = "NG Cloud Networks <noreply@ngcloudnetworks.com>";

// FIX: user input went straight into the HTML of the email. Escape it so a lead cannot inject markup or links.
const esc = (v: string) =>
  v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");

// Remove control characters, trim and cap the length.
const clean = (v: unknown, max: number) =>
  String(v ?? "")
    .replace(/[\u0000-\u0008\u000b-\u001f\u007f]+/g, " ")
    .trim()
    .slice(0, max);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Best-effort rate limit per IP. On serverless hosting each instance has its own memory, so this only slows
// simple abuse; add a firewall rule or Upstash rate limiting if spam continues.
const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 8;
function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 500) for (const [k, v] of hits) if (v.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
  return recent.length > MAX_HITS;
}

export async function POST(req: Request) {
  try {
    const ip = (req.headers.get("x-forwarded-for") ?? "unknown").split(",")[0].trim();
    if (limited(ip)) return NextResponse.json({ success: false }, { status: 429 });

    const body = await req.json();

    // Honeypot: bots that fill the hidden field get a fake success and nothing is sent.
    if (body?.website) return NextResponse.json({ success: true });

    const name = clean(body?.name, 80);
    const email = clean(body?.email, 120);
    const phone = clean(body?.phone, 20);
    const course = clean(body?.course, 120);
    const branch = clean(body?.branch, 40);
    const mode = clean(body?.mode, 40);
    const date = clean(body?.date, 40);
    const message = clean(body?.message, 2000);
    const type = body?.type === "demo" ? "demo" : "contact";

    // FIX: no validation before. Now a lead needs a name and a phone number; email must be valid if given.
    if (name.length < 2 || phone.replace(/\D/g, "").length < 10 || (email && !EMAIL_RE.test(email))) {
      return NextResponse.json({ success: false }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json({ success: false }, { status: 500 });
    }
    // FIX: create the client inside the handler so a missing key cannot break the build.
    const resend = new Resend(apiKey);

    const where = branch && branch !== "No preference" ? ` (${branch})` : "";
    const subject = `${type === "demo" ? "New Demo Booking" : "New Contact Lead"}${where}${course ? `: ${course}` : ""}`;

    const row = (k: string, v: string) => (v ? `<p><strong>${k}:</strong> ${esc(v)}</p>` : "");

    // Mail to you
    const owner = await resend.emails.send({
      from: FROM,
      to: OWNER_EMAIL,
      // Lets you reply straight to the lead from your inbox.
      replyTo: email && EMAIL_RE.test(email) ? email : undefined,
      subject,
      html: `
        <div style="font-family:sans-serif;padding:20px">
          <h2>New ${type === "demo" ? "Demo Booking" : "Contact Lead"}</h2>
          ${row("Name", name)}
          ${row("Phone", phone)}
          ${row("Email", email)}
          ${row("Course", course)}
          ${row("Branch", branch)}
          ${row("Mode", mode)}
          ${row("Preferred Date", date)}
          ${message ? `<p><strong>Message:</strong><br/>${esc(message).replace(/\n/g, "<br/>")}</p>` : ""}
        </div>
      `,
    });

    // FIX: Resend returns { data, error } instead of throwing, so the old code reported success even when
    // sending had failed. If the mail to you fails, tell the visitor so they can call or use WhatsApp.
    if (owner.error) {
      console.error("Owner email failed", owner.error);
      return NextResponse.json({ success: false }, { status: 500 });
    }

    // Thank-you mail to the visitor. Best effort: a failure here must not hide a lead that already reached you.
    if (email && EMAIL_RE.test(email)) {
      const thanks = await resend.emails.send({
        from: FROM,
        to: email,
        subject: "Thank You for Contacting NG Cloud Networks",
        html: `
          <div style="font-family:sans-serif;padding:20px">
            <h2>Thank you, ${esc(name)}</h2>
            <p>We received your request${course ? ` for ${esc(course)}` : ""}${branch && branch !== "No preference" ? ` at our ${esc(branch)}` : ""}.</p>
            <p>Our team will contact you shortly. For a faster reply, call or WhatsApp +91 99899 39191.</p>
            <p>Thank you for choosing NG Cloud Networks.</p>
          </div>
        `,
      });
      if (thanks.error) console.error("Thank-you email failed", thanks.error);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}