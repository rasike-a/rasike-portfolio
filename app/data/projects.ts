import { Project, Creation, Service, GalleryImage } from './types';

export const projectsIntro =
  "A selection of projects that reflect my experience in architecture, AI integration, DevOps automation, and digital transformation across diverse domains.";

export const projects: Project[] = [
  {
    title: "Impact Analyzer",
    domain: "Enterprise DevTools / AI-assisted Analysis",
    description:
      "A scalable impact analysis platform built with Go and Java microservices on Kubernetes and Azure CI/CD. It evaluates how core updates affect custom modules, using event-driven processing and Prometheus-based performance monitoring."
  },
  {
    title: "Developer Studio",
    domain: "Developer Productivity / Automation",
    description:
      "An integrated development framework automating metadata generation and boilerplate code creation. Enhanced developer efficiency with static analysis, secure pipelines, and continuous integration for high-quality delivery."
  },
  {
    title: "Sales Force Automation (SFA)",
    domain: "Sales / CRM",
    description:
      "A cloud-based sales automation platform built with .NET, Angular, and Node.js to streamline operations, automate workflows, and provide real-time insights for sales teams and managers."
  },
  {
    title: "LogisticOne",
    domain: "Supply Chain / Logistics",
    description:
      "A logistics and supply-chain platform providing real-time visibility into costs, inventory, and transport data. Designed with mobile-ready dashboards to optimize operations and reduce overhead."
  },
  {
    title: "Cancer Research Information System (CCIA)",
    domain: "Healthcare / Research Informatics",
    description:
      "A modern research data management system using React, NestJS, and MySQL with AWS containerization. Enabled researchers to store, analyze, and visualize clinical datasets securely and efficiently."
  },
  {
    title: "Cloud Smart School",
    domain: "Education Technology / e-Learning",
    description:
      "A cloud-based learning and school management solution built with Java, Angular, and Kubernetes. Integrated student tracking, digital classrooms, and analytics to power hybrid learning experiences."
  },
  {
    title: "Continuous Delivery & Automation Framework",
    domain: "DevOps / Software Engineering",
    description:
      "An enterprise CI/CD framework automating build, test, and release workflows using Jenkins, SonarQube, and Selenium. Improved release velocity and ensured quality through full automation."
  },
  {
    title: "Test Automation Framework",
    domain: "QA Automation / Engineering Productivity",
    description:
      "A no-code UI automation framework built with Node.js and WebDriverIO. Allowed QA teams to define test cases via Excel sheets, enabling scalable test automation integrated with CI/CD pipelines."
  },
  {
    title: "Financial Data Integration API (DCP)",
    domain: "FinTech / Market Data",
    description:
      "A unified API platform for ingesting and validating financial data from global providers. Enabled real-time synchronization, validation, and notifications across distributed systems."
  },
  {
    title: "Enterprise Trading Platform",
    domain: "FinTech / Real-time Trading Systems",
    description:
      "A high-performance trading and market data platform designed to deliver real-time stock and financial information with near-zero latency. Built using modern JavaScript frameworks and .NET back-end services, it supported seamless trading across multiple markets and devices with responsive design and scalable data dissemination infrastructure."
  },
  {
    title: "Excel Add-In for Market Data",
    domain: "FinTech / Data Analytics",
    description:
      "A Microsoft Excel add-in built with C# and Excel DNA to access live financial data directly from enterprise APIs. Empowered analysts with real-time modeling and forecasting within Excel."
  },
  {
    title: "Web Carbon Emission Analyzer",
    domain: "Sustainability / Web Performance",
    description:
      "A platform for assessing and reducing website carbon footprints. Designed algorithms and dashboards to analyze performance and provide actionable emission reduction insights."
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
