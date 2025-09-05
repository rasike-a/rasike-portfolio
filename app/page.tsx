"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// =============================
// QUICK START (edit me only)
// =============================
const profile = {
  name: "Rasike Abeyratne",
  title: "Software Architect • Mentor • AI-Powered Developer • Transformation Consultant • Digital Creator",
  location: "Colombo, Sri Lanka",
  tagline:
    "18+ years of experience delivering scalable systems, mentoring engineers, and leveraging AI for 10x productivity in digital transformation journeys.",
  headshot: "/headshot.jpg", 
  resumeUrl: "/Rasike-Abeyratne-Resume.pdf",
  email: "hello@rasike.me",
  socials: [
    { label: "GitHub", href: "https://github.com/raaalk" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/rasike-abeyratne" },
    { label: "Patreon", href: "https://www.patreon.com/EchelonDigitalStudio" },
    { label: "Wirestock", href: "https://wirestock.io/" },
  ],
  highlights: [
    "18+ years across .NET, Go, Node/TypeScript, Kubernetes",
    "Built Impact Analyzer on IFS Nexus with KEDA + Prometheus",
    "AI-powered developer delivering 10x performance",
    "Mentor and team leader guiding engineers",
    "Consulting on digital transformation initiatives",
    "Creator @ Echelon Digital Studio (Patreon)",
  ],
};


const projects = [
  {
    title: "Impact Analyzer (Case Study)",
    blurb: "Event-driven analysis jobs with autoscaling and metrics.",
    tags: ["Go", "Kubernetes", "KEDA", "Prometheus", "Azure"],
    link: "#"
  },
  {
    title: "Creator Hub (WIP)",
    blurb: "A minimal marketplace template for images & prompts.",
    tags: ["Next.js", "Tailwind", "Stripe", "PostgreSQL"],
    link: "#"
  },
  {
    title: "School LMS Demo",
    blurb: "Connected LMS prototype with CI/CD and cloud deploy.",
    tags: ["Java", "Angular", "MongoDB", "GCP"],
    link: "#"
  }
] as const;

const gallery = [
  { alt: "Sunrise over ocean", src: "https://images.unsplash.com/photo-1501973801540-537f08ccae7b?q=80&w=1200&auto=format&fit=crop" },
  { alt: "Misty mountains", src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop" },
  { alt: "City long exposure", src: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1200&auto=format&fit=crop" },
  { alt: "Forest trail", src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop" },
] as const;

const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="py-20">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">{title}</h2>
      {children}
    </div>
  </section>
);

const Chip = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm">{children}</span>
);

const Card = ({ title, children, footer }: { title: string; children: React.ReactNode; footer?: React.ReactNode }) => (
  <div className="rounded-2xl border shadow-sm p-6 flex flex-col gap-4 bg-white/40 backdrop-blur">
    <h3 className="text-xl font-semibold">{title}</h3>
    <div className="text-slate-700 leading-relaxed">{children}</div>
    {footer}
  </div>
);

function useContactForm() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function submit(form: HTMLFormElement) {
    setLoading(true);
    setOk(null);
    setError(null);
    const data = Object.fromEntries(new FormData(form) as any);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.ok) {
        setOk(true);
        form.reset();
      } else {
        setOk(false);
        setError(json?.errors?.join(" ") || json?.error || "Something went wrong.");
      }
    } catch (e: any) {
      setOk(false);
      setError(e?.message || "Network error");
    } finally {
      setLoading(false);
    }
  }

  return { loading, ok, error, submit };
}

export default function Page() {
  const { loading, ok, error, submit } = useContactForm();
  return (
    <div className="min-h-screen">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b">
        <nav className="container flex items-center justify-between py-3">
          <a href="#home" className="font-bold text-lg">{profile.name}</a>
          <div className="hidden md:flex gap-6 text-sm">
            <a href="#about" className="hover:underline">About</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#gallery" className="hover:underline">Gallery</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
          <a href={profile.resumeUrl} className="rounded-full border px-4 py-2 text-sm hover:bg-slate-50">
            Download Résumé
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="container grid md:grid-cols-2 gap-10 items-center py-16 md:py-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="order-2 md:order-1">
            <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">{profile.title}</h1>
            <p className="mt-6 text-lg text-slate-700 max-w-prose">{profile.tagline}</p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
              {profile.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2">
                  <span className="mt-1 size-2 rounded-full bg-slate-900"></span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="rounded-xl bg-slate-900 text-white px-5 py-3 text-sm font-medium hover:opacity-90">Contact Me</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="order-1 md:order-2">
            <div className="relative mx-auto w-56 h-56 md:w-72 md:h-72">
              <img src={profile.headshot} alt={profile.name} className="absolute inset-0 w-full h-full object-cover rounded-3xl border shadow-lg" />
            </div>
            <p className="text-center mt-4 text-sm text-slate-600">{profile.location}</p>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" title="About">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4 text-slate-700">
            <p>
              I'm a full‑stack engineer and architect who loves turning complex ideas into
              elegant, reliable systems. I also write, travel, and shoot—then share the
              results as digital products and stories.
            </p>
            <p>
              Recent work includes the <strong>Impact Analyzer</strong> ecosystem on IFS Nexus
              (KEDA‑triggered jobs, Prometheus instrumentation, secure ALE integration),
              plus an AI‑assisted <strong>Echelon Digital Studio</strong> brand for visuals and words.
            </p>
          </div>
          <div className="rounded-2xl border p-6 bg-white/40 backdrop-blur">
            <dl className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="text-slate-500">Location</dt>
                <dd className="font-medium">{profile.location}</dd>
              </div>
              <div>
                <dt className="text-slate-500">Email</dt>
                <dd className="font-medium">{profile.email}</dd>
              </div>
              <div className="col-span-2 mt-2">
                <dt className="text-slate-500 mb-2">Links</dt>
                <dd className="flex flex-wrap gap-2">
                  {profile.socials.map((s) => (
                    <a key={s.label} href={s.href} className="rounded-full border px-3 py-1 text-sm hover:bg-white">
                      {s.label}
                    </a>
                  ))}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" title="Projects">
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <Card key={p.title} title={p.title} footer={
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => <span key={t} className="inline-flex items-center rounded-full border px-3 py-1 text-sm">{t}</span>)}
                </div>
                <a href={p.link} className="text-sm underline">Open</a>
              </div>
            }>
              {p.blurb}
            </Card>
          ))}
        </div>
      </Section>

      {/* GALLERY */}
      <Section id="gallery" title="Gallery">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {gallery.map((g) => (
            <img key={g.src} src={g.src} alt={g.alt} className="rounded-2xl object-cover aspect-[4/3] border" />
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Contact">
        <div className="grid md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-2">
            <form onSubmit={(e)=>{e.preventDefault(); submit(e.currentTarget);}} className="rounded-2xl border p-6 bg-white/40 backdrop-blur space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input className="border rounded-xl px-4 py-3 w-full" name="name" placeholder="Your name" />
                <input className="border rounded-xl px-4 py-3 w-full" name="email" placeholder="Email address" type="email" />
              </div>
              <input className="border rounded-xl px-4 py-3 w-full" name="subject" placeholder="Subject" />
              <textarea className="border rounded-xl px-4 py-3 w-full min-h-40" name="message" placeholder="Tell me about your project or idea…" />
              <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
              <button className="rounded-xl bg-slate-900 text-white px-5 py-3 text-sm font-medium hover:opacity-90" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>
              {ok === true && <p className="text-green-700 text-sm mt-2">Thanks! I'll get back to you soon.</p>}
              {ok === false && <p className="text-red-700 text-sm mt-2">{error}</p>}
            </form>
          </div>
          <div className="rounded-2xl border p-6 bg-white/40 backdrop-blur">
            <h3 className="font-semibold mb-2">Work with me</h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              Consulting, part‑time engineering, product prototyping, performance audits,
              and creative collaborations. I’m open to projects that blend tech and art.
            </p>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="py-10 border-t">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">© {new Date().getFullYear()} {profile.name} · Echelon Digital Studio</p>
          <div className="flex flex-wrap gap-3 text-sm">
            {profile.socials.map((s) => (
              <a key={s.label} href={s.href} className="underline">{s.label}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
