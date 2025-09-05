import { NextResponse } from "next/server";

async function getResend() {
  const { Resend } = await import("resend");
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("Missing RESEND_API_KEY");
  return new Resend(apiKey);
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const { name = "", email = "", subject = "", message = "", website = "" } = body || {};
    if (typeof website === "string" && website.trim() !== "") {
      return NextResponse.json({ ok: true });
    }
    const errs: string[] = [];
    if (!name || name.length < 2) errs.push("Name is required.");
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.push("Valid email is required.");
    if (!subject || subject.length < 2) errs.push("Subject is required.");
    if (!message || message.length < 5) errs.push("Message is too short.");
    if (errs.length) return NextResponse.json({ ok: false, errors: errs }, { status: 400 });

    const resend = await getResend();
    const to = process.env.CONTACT_TO || "rasike.abeyratne@gmail.com";
    const from = process.env.CONTACT_FROM || "hello@rasike.me";

    const html = `<div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif">
      <h2>New portfolio inquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <pre style="white-space:pre-wrap">${message}</pre>
    </div>`;

    const { error } = await resend.emails.send({
      from,
      to,
      subject: `[Portfolio] ${subject}`,
      reply_to: email,
      html,
    });

    if (error) return NextResponse.json({ ok: false, error: "Email send failed." }, { status: 500 });
    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message || "Unknown error" }, { status: 500 });
  }
}
