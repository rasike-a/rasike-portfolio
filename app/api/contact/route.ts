import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Parse request body
    let body;
    try {
      body = await req.json();
    } catch (parseError) {
      console.error("[Contact API] Failed to parse request body:", parseError);
      return NextResponse.json(
        { ok: false, error: "Invalid request format" },
        { status: 400 }
      );
    }

    const { name = "", email = "", subject = "", message = "", website = "" } = body || {};

    // Honeypot check
    if (typeof website === "string" && website.trim() !== "") {
      console.log("[Contact API] Honeypot triggered, ignoring request");
      return NextResponse.json({ ok: true });
    }

    // Validate required fields
    if (!name || name.trim().length < 2) {
      console.error("[Contact API] Validation failed: name too short");
      return NextResponse.json(
        { ok: false, error: "Name must be at least 2 characters" },
        { status: 400 }
      );
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      console.error("[Contact API] Validation failed: invalid email");
      return NextResponse.json(
        { ok: false, error: "Valid email is required" },
        { status: 400 }
      );
    }

    if (!subject || subject.trim().length < 2) {
      console.error("[Contact API] Validation failed: subject too short");
      return NextResponse.json(
        { ok: false, error: "Subject must be at least 2 characters" },
        { status: 400 }
      );
    }

    if (!message || message.trim().length < 5) {
      console.error("[Contact API] Validation failed: message too short");
      return NextResponse.json(
        { ok: false, error: "Message must be at least 5 characters" },
        { status: 400 }
      );
    }

    // Check for Resend API key
    if (!process.env.RESEND_API_KEY) {
      console.error("[Contact API] RESEND_API_KEY environment variable is missing");
      return NextResponse.json(
        { ok: false, error: "Email service is not configured. Please contact the administrator." },
        { status: 500 }
      );
    }

    // Initialize Resend
    let resend;
    try {
      const { Resend } = await import("resend");
      resend = new Resend(process.env.RESEND_API_KEY);
    } catch (importError) {
      console.error("[Contact API] Failed to import Resend:", importError);
      return NextResponse.json(
        { ok: false, error: "Email service initialization failed" },
        { status: 500 }
      );
    }

    // Prepare email
    const to = process.env.CONTACT_TO || "rasike.abeyratne@gmail.com";
    const from = process.env.CONTACT_FROM || "hello@rasike.me";
    const emailSubject = `[Portfolio] ${subject || "New Inquiry"}`;
    const html = `
      <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #1e293b; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">
          New Portfolio Inquiry
        </h2>
        <div style="margin-top: 20px;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
        </div>
        <div style="margin-top: 20px; padding: 15px; background: #f8fafc; border-left: 4px solid #3b82f6; border-radius: 4px;">
          <strong>Message:</strong>
          <pre style="white-space: pre-wrap; font-family: inherit; margin-top: 10px;">${message}</pre>
        </div>
      </div>
    `;

    // Send email
    console.log("[Contact API] Attempting to send email:", { to, from, subject: emailSubject });
    const result = await resend.emails.send({
      from,
      to,
      subject: emailSubject,
      reply_to: email,
      html,
    });

    if (result.error) {
      console.error("[Contact API] Resend API error:", result.error);
      return NextResponse.json(
        {
          ok: false,
          error: result.error.message || "Failed to send email. Please try again later.",
        },
        { status: 500 }
      );
    }

    console.log("[Contact API] Email sent successfully:", result.data?.id);
    return NextResponse.json({ ok: true, id: result.data?.id });

  } catch (e: any) {
    console.error("[Contact API] Unexpected error:", {
      message: e?.message,
      stack: e?.stack,
      name: e?.name,
    });
    return NextResponse.json(
      {
        ok: false,
        error: process.env.NODE_ENV === "development"
          ? e?.message || "Unknown error occurred"
          : "An unexpected error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}
