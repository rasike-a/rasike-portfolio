import { NextResponse } from "next/server";
export async function POST(req: Request) {
  try {
    const body = await req.json().catch(()=>({}));
    const { name="", email="", subject="", message="", website="" } = body || {};
    if (typeof website === "string" && website.trim() !== "") return NextResponse.json({ ok: true });
    if (!process.env.RESEND_API_KEY) return NextResponse.json({ ok:false, error:"Missing RESEND_API_KEY" }, { status: 500 });
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);
    const to = process.env.CONTACT_TO || "rasike.abeyratne@gmail.com";
    const from = process.env.CONTACT_FROM || "hello@rasike.me";
    const html = `<div style="font-family:system-ui"><h2>New portfolio inquiry</h2><p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Subject:</b> ${subject}</p><pre style="white-space:pre-wrap">${message}</pre></div>`;
    const { error } = await resend.emails.send({ from, to, subject: `[Portfolio] ${subject||"New Inquiry"}`, reply_to: email, html });
    if (error) return NextResponse.json({ ok:false, error:"Email send failed." }, { status: 500 });
    return NextResponse.json({ ok:true });
  } catch (e:any) {
    return NextResponse.json({ ok:false, error: e?.message||"Unknown error" }, { status: 500 });
  }
}
