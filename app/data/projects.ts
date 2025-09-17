import { Project, Creation, Service, GalleryImage } from './types';

export const projects: Project[] = [
  {
    title: "Impact Analyzer (Case Study)",
    description: "Event-driven analysis jobs with autoscaling and metrics.",
    technologies: ["Go", "Kubernetes", "KEDA", "Prometheus", "Azure"],
    link: "#",
    featured: true
  },
  {
    title: "Creator Hub (WIP)",
    description: "Marketplace template for images & prompts.",
    technologies: ["Next.js", "Tailwind", "Stripe", "PostgreSQL"],
    link: "#",
    featured: true
  },
  {
    title: "School LMS Demo",
    description: "Prototype with CI/CD and cloud deploy.",
    technologies: ["Java", "Angular", "MongoDB", "GCP"],
    link: "#"
  }
];

export const creations: Creation[] = [
  {
    title: "Echelon Digital Studio",
    description: "AI‑assisted visuals & stories (Patreon).",
    link: "https://www.patreon.com/EchelonDigitalStudio"
  },
  {
    title: "Wirestock Portfolio",
    description: "Photography & AI image marketplace.",
    link: "https://wirestock.io/"
  },
  {
    title: "The Barman's Diary",
    description: "Contemporary romance series."
  },
  {
    title: "CupidTeesCards",
    description: "Custom AI‑inspired T‑shirts & cards."
  }
];

export const services: Service[] = [
  {
    title: "Architecture & Engineering",
    description: "Designing and building scalable systems with Go, .NET, Node/TS & cloud‑native platforms."
  },
  {
    title: "Digital Transformation Guidance",
    description: "Modernizing workflows and adopting AI for real business impact."
  },
  {
    title: "AI‑Augmented Development",
    description: "Delivering 10x productivity by blending engineering expertise with AI tools."
  },
  {
    title: "Mentorship & Team Growth",
    description: "Coaching engineers, reviewing architectures, and guiding career development."
  },
  {
    title: "Creative & Digital Products",
    description: "Bringing ideas to life through writing, photography, and AI‑assisted creations."
  }
];

export const galleryImages: GalleryImage[] = [
  { 
    alt: "Sunrise over ocean", 
    src: "https://images.unsplash.com/photo-1501973801540-537f08ccae7b?q=80&w=1200&auto=format&fit=crop",
    title: "Ocean Sunrise"
  },
  { 
    alt: "Misty mountains", 
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop",
    title: "Mountain Mist"
  },
  { 
    alt: "City long exposure", 
    src: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1200&auto=format&fit=crop",
    title: "City Lights"
  },
  { 
    alt: "Forest trail", 
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop",
    title: "Forest Path"
  }
];
