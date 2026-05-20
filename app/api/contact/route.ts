import { Resend } from "resend";
import { NextResponse } from "next/server";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      course,
      message,
      type,
      date,
    } = body;

    // MAIL TO YOU
    await resend.emails.send({
      from: "NG Cloud Networks <noreply@ngcloudnetworks.com>",
      to: "info@ngcloudnetworks.com",

      subject:
        type === "demo"
          ? "New Demo Booking"
          : "New Contact Form Submission",

      html: `
        <div style="font-family:sans-serif;padding:20px">
          <h2>New ${type === "demo" ? "Demo Booking" : "Contact Lead"}</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Course:</strong> ${course}</p>

          ${
            date
              ? `<p><strong>Preferred Date:</strong> ${date}</p>`
              : ""
          }

          ${
            message
              ? `<p><strong>Message:</strong> ${message}</p>`
              : ""
          }
        </div>
      `,
    });

    // THANK YOU MAIL TO USER
    await resend.emails.send({
      from: "NG Cloud Networks <noreply@yourdomain.com>",
      to: email,

      subject: "Thank You for Contacting NG Cloud Networks",

      html: `
        <div style="font-family:sans-serif;padding:20px">

          <h2>Thank You, ${name}</h2>

          <p>
            We received your request successfully.
          </p>

          <p>
            Our team will contact you shortly regarding
            your enquiry.
          </p>

          <p>
            Thank you for choosing NG Cloud Networks.
          </p>

        </div>
      `,
    });

    return NextResponse.json({
      success: true,
    });

  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}