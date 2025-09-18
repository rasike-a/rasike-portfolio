"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  profile, 
  aboutContent, 
  skillCategories, 
  projects, 
  creations, 
  services, 
  galleryImages 
} from './data';
import { Section, Card } from './components/ui';

function useContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit(form: HTMLFormElement) {
    setLoading(true);
    setSuccess(false);
    setError(null);
    
    const data = Object.fromEntries(new FormData(form) as any);
    
    // Basic validation
    if (!data.name || data.name.length < 2) {
      setError("Name is required (at least 2 characters)");
      setLoading(false);
      return;
    }
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      setError("Valid email is required");
      setLoading(false);
      return;
    }
    if (!data.subject || data.subject.length < 2) {
      setError("Subject is required (at least 2 characters)");
      setLoading(false);
      return;
    }
    if (!data.message || data.message.length < 5) {
      setError("Message is too short (at least 5 characters)");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      const result = await response.json();
      
      if (response.ok && result.ok) {
        setSuccess(true);
        form.reset();
      } else {
        setError(result.error || "Something went wrong. Please try again.");
      }
    } catch (err: any) {
      setError(err.message || "Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  }

  return { loading, success, error, submit };
}
export default function Page(){
  const { loading, success, error, submit } = useContactForm();
  
  return (<div className="min-h-screen">
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b">
      <nav className="container flex items-center justify-between py-3">
        <a href="#home" className="font-bold text-base sm:text-lg">{profile.name}</a>
        <div className="hidden md:flex gap-6 text-sm">
          <a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a>
          <a href="#gallery">Gallery</a><a href="#creations">Creations</a><a href="#services">Work With Me</a><a href="#contact">Contact</a>
        </div>
        <div className="flex md:hidden gap-4 text-xs">
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
        <a href={profile.resumeUrl} className="rounded-xl border px-3 py-2 text-xs inline-flex items-center justify-center">Résumé</a>
      </nav>
    </header>
    <section id="home" className="relative">
      <div className="container grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center py-12 sm:py-16 md:py-24">
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.6}} className="order-2 md:order-1">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black leading-tight">{profile.title}</h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-700 max-w-prose">{profile.tagline}</p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="rounded-xl bg-slate-900 text-white px-5 py-3 text-sm text-center inline-flex items-center justify-center">Contact Me</a>
            <a href={profile.resumeUrl} className="rounded-xl border px-5 py-3 text-sm text-center inline-flex items-center justify-center">Download Résumé</a>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0,scale:.95}} animate={{opacity:1,scale:1}} transition={{duration:.6, delay:.1}} className="order-1 md:order-2">
          <div className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72">
            <img src={profile.headshot} alt={profile.name} className="absolute inset-0 w-full h-full object-cover rounded-3xl border shadow-lg"/>
          </div>
          <p className="text-center mt-3 sm:mt-4 text-sm text-slate-600">{profile.location}</p>
        </motion.div>
      </div>
    </section>
    <Section id="about" title="About">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4 text-slate-700">
          {aboutContent.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="card">
          <dl className="grid grid-cols-2 gap-4 text-sm">
            <div><dt className="text-slate-500">Phone/WhatsApp</dt><dd className="font-medium">{profile.phone}</dd></div>
            <div><dt className="text-slate-500">Email</dt><dd className="font-medium">{profile.email}</dd></div>
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
    <Section id="skills" title="Skills">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <Card key={category.title} title={category.title}>
            {category.skills}
          </Card>
        ))}
      </div>
    </Section>
    <Section id="projects" title="Projects">
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card key={project.title} title={project.title}>
            {project.description} Stack: {project.technologies.join(", ")}.
          </Card>
        ))}
      </div>
    </Section>
    <Section id="gallery" title="Gallery">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {galleryImages.map((image, index) => (
          <img 
            key={index}
            className="rounded-2xl object-cover aspect-[4/3] border" 
            alt={image.alt} 
            src={image.src}
            title={image.title}
          />
        ))}
      </div>
    </Section>
    <Section id="creations" title="Creations">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {creations.map((creation) => (
          <Card key={creation.title} title={creation.title}>
            {creation.description}
          </Card>
        ))}
      </div>
    </Section>
    <Section id="services" title="Work With Me">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Card key={service.title} title={service.title}>
            {service.description}
          </Card>
        ))}
      </div>
    </Section>
    <Section id="contact" title="Contact">
      <div className="grid md:grid-cols-3 gap-6 items-start">
        <form className="card md:col-span-2 space-y-4" onSubmit={(e)=>{e.preventDefault(); submit(e.currentTarget);}}>
          <div className="grid md:grid-cols-2 gap-4">
            <input className="border rounded-xl px-4 py-3 w-full" name="name" placeholder="Your name" required/>
            <input className="border rounded-xl px-4 py-3 w-full" name="email" placeholder="Email address" type="email" required/>
          </div>
          <input className="border rounded-xl px-4 py-3 w-full" name="subject" placeholder="Subject" required/>
          <textarea className="border rounded-xl px-4 py-3 w-full min-h-40" name="message" placeholder="Tell me about your project or idea…" required/>
          <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off"/>
          <button 
            type="submit"
            className="rounded-xl bg-slate-900 text-white px-5 py-3 text-sm hover:opacity-90 disabled:opacity-50" 
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
          {success && <p className="text-green-700 text-sm mt-2">✅ Thanks! I'll get back to you soon.</p>}
          {error && <p className="text-red-700 text-sm mt-2">❌ {error}</p>}
        </form>
        <div className="card">
          <h3 className="font-semibold mb-2">Work with me</h3>
          <p className="text-slate-700 text-sm">Consulting, part‑time engineering, product prototyping, performance audits, and creative collaborations.</p>
        </div>
      </div>
    </Section>
    <footer className="py-10 border-t">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} {profile.name} · Rasike.me</p>
        <div className="flex gap-3 text-sm">
          {profile.socials.map((social) => (
            <a key={social.label} href={social.href} className="underline hover:no-underline">
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  </div>);
}
