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

export const workWithMeIntro =
  "I collaborate with startups, creators, and organizations who want to bring ideas to life through technology, design, and intelligent systems. Whether you’re building software, exploring AI, or seeking creative or educational expertise — here’s how we can work together.";

export const workWithMeOutro =
  "Have an idea, a project, or a challenge in mind? Let’s build something extraordinary together.";

export const services: Service[] = [
  {
    title: "For Tech Teams & Startups",
    summary: "Let’s design systems that scale.",
    items: [
      "Software architecture and system design",
      "Full-stack web development (Java, .NET, Go, Node.js, React, Angular, Next.js)",
      "Cloud migration and DevOps automation (Azure / AWS / GCP)",
      "API strategy, performance optimization, and CI/CD integration"
    ],
    cta: {
      label: "→ Schedule a technical consultation or propose a project collaboration.",
      href: "#contact"
    }
  },
  {
    title: "For Innovators Exploring AI",
    summary: "Turn ideas into intelligent experiences.",
    items: [
      "Agentic AI design and workflow automation",
      "Generative AI integration across text, image, and data",
      "Machine learning–based personalization and insights",
      "AI strategy, prototyping, and implementation"
    ],
    cta: {
      label: "→ Discuss your AI concept or request a proof-of-concept build.",
      href: "#contact"
    }
  },
  {
    title: "For Creative Professionals & Businesses",
    summary: "Bring imagination to life through technology and design.",
    items: [
      "AI-assisted digital art and visual storytelling",
      "Product imagery and content generation for brands",
      "Marketplace-ready digital packs and creative collections"
    ],
    cta: {
      label: "→ Commission a creative pack or collaborate on a visual concept.",
      href: "#contact"
    }
  },
  {
    title: "For Educators & Students",
    summary: "Empowering the next generation of learners.",
    items: [
      "IGCSE learning content development (Maths, Physics, STEM)",
      "Curriculum design and structured study materials",
      "Educational technology and interactive learning solutions"
    ],
    cta: {
      label: "→ Request resource development or academic collaboration.",
      href: "#contact"
    }
  },
  {
    title: "For Collaborators & Partners",
    summary: "Let’s shape the future — together.",
    items: [
      "Joint product ventures and startup partnerships",
      "Research collaborations in AI, education, and innovation",
      "Mentorship, writing, and speaking engagements"
    ],
    cta: {
      label: "→ Reach out for partnership or co-creation opportunities.",
      href: "#contact"
    }
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
