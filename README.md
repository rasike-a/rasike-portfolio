# Rasike Abeyratne — Portfolio (Next.js + Tailwind)

Minimal, deploy‑ready portfolio using Next.js App Router, TailwindCSS, and Framer Motion.

## Local Development
```bash
npm install
npm run dev
```
Visit http://localhost:3000

## Build
```bash
npm run build
npm start
```

## Customize
- Edit `app/page.tsx` — update the `profile` object (title, tagline, links).
- Replace `public/headshot.jpg` with your own image.
- Replace `public/Rasike-Abeyratne-Resume.pdf` with your own résumé.
- Projects & Gallery live inside `app/page.tsx` (search for `projects` / `gallery`).

## Contact Form (Email via Resend)
1. Create an account at https://resend.com and get an API key.
2. Use `.env.local` included here as a template; update your real API key.
3. Vercel: add `RESEND_API_KEY`, `CONTACT_TO`, `CONTACT_FROM` in Project → Settings → Environment Variables.
