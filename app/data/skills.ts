import { SkillCategory } from './types';

export const skillCategories: SkillCategory[] = [
  {
    title: "🧠 1. Software Architecture & System Design",
    skills: [
      "Architect microservices, event-driven, and cloud-native systems with a focus on resilience and maintainability.",
      "Design distributed platforms optimized for high performance, availability, and graceful degradation.",
      "Shape API ecosystems across REST, GraphQL, and gRPC with governance, versioning, and performance discipline.",
      "Lead architectural standards, integration patterns, and modernization initiatives in complex enterprises.",
      "Build developer platforms, automation, and enablement tooling that uplift engineering effectiveness."
    ]
  },
  {
    title: "💻 2. Full-Stack Engineering",
    skills: [
      "Build end-to-end web applications leveraging modern frontend and backend stacks across diverse ecosystems.",
      "Deliver responsive, accessible UIs with Angular, React, and Next.js, backed by strong design-system discipline.",
      "Implement performant, secure services with Java (Spring Boot), .NET, Node.js, and Go.",
      "Design relational and NoSQL data models, including MySQL, MSSQL, Oracle, and MongoDB.",
      "Integrate authentication, authorization, and APIs to connect distributed systems safely."
    ]
  },
  {
    title: "☁️ 3. Cloud & DevOps Engineering",
    skills: [
      "Deploy resilient solutions across Azure, AWS, and GCP with cost-aware scaling and governance controls.",
      "Automate CI/CD pipelines via GitHub Actions, Bitbucket Pipelines, and Argo CD for rapid, reliable delivery.",
      "Run container platforms with Docker, Kubernetes, Helm, and KEDA to unlock elastic infrastructure.",
      "Instrument platforms using Prometheus, Grafana, Kibana, and OpenTelemetry for real-time observability.",
      "Apply Infrastructure-as-Code with Terraform and policy automation to ensure secure, repeatable environments."
    ]
  },
  {
    title: "🔒 4. Quality, Security & Performance",
    skills: [
      "Strong commitment to secure software development practices, including code analysis, threat modeling, and compliance with industry security standards.",
      "Proficient in conducting static and dynamic application security testing (SAST/DAST), vulnerability assessments, and risk mitigation strategies.",
      "Experienced in implementing comprehensive monitoring and logging frameworks to ensure system health, traceability, and operational visibility.",
      "Skilled in performance profiling, optimization, and load testing, ensuring efficiency and scalability across complex distributed systems.",
      "Adept at establishing quality assurance processes, code review guidelines, and continuous improvement practices that enhance software reliability and maintainability."    
    ]
  },
  {
    title: "🎨 5. Digital Creation & Entrepreneurship",
    skills: [
      "Deep expertise in AI-driven creativity, leveraging generative and agentic AI to design intelligent, adaptive, and autonomous digital experiences.",
      "Skilled in applying machine learning and generative models to enhance creative workflows, automate production pipelines, and personalize user engagement.",
      "Experienced in developing digital platforms and ecosystems that integrate AI-powered content generation, distribution, and monetization capabilities.",
      "Proficient in digital marketing, growth strategy, and SEO optimization, utilizing data-driven insights to strengthen brand presence and customer reach.",
      "Entrepreneurial and innovation-focused, with a proven ability to bridge technology, creativity, and AI-driven automation to deliver impactful digital products and ventures."
    ]
  },
  {
     title: "📚 6. Education, Mentorship & Thought Leadership",
    skills: [
      "Passionate about knowledge sharing and mentorship, empowering teams and individuals through structured learning, coaching, and continuous skill development.",
      "Experienced in creating comprehensive educational content across technology and STEM disciplines, combining clarity, pedagogy, and real-world relevance.",
      "Advocate for AI literacy and digital fluency, promoting responsible adoption of intelligent systems and future-ready skills.",
      "Skilled in technical writing, documentation, and public communication, effectively translating complex engineering and AI concepts into accessible insights.",
      "Committed to fostering innovation-driven learning cultures, guiding professionals and students to think critically, adapt rapidly, and lead confidently in an AI-augmented world."
    ]
  }
];

// Alternative detailed skills structure for future use
export const detailedSkills = {
  backend: {
    languages: ["Go", ".NET 8", "Node.js", "TypeScript", "Java"],
    frameworks: ["NestJS", "Express", "ASP.NET Core"],
    databases: ["PostgreSQL", "MongoDB", "Redis"],
    messaging: ["Kafka", "SQS", "RabbitMQ"],
    cloud: ["Azure", "AWS", "GCP"]
  },
  frontend: {
    frameworks: ["React", "Next.js", "Angular"],
    styling: ["Tailwind CSS", "CSS3", "SCSS"],
    ui: ["shadcn/ui", "Material-UI", "Ant Design"]
  },
  devops: {
    containerization: ["Docker", "Kubernetes"],
    cicd: ["Argo CD", "GitHub Actions", "Azure DevOps"],
    monitoring: ["Prometheus", "Grafana", "OpenTelemetry"],
    scaling: ["KEDA", "HPA", "VPA"]
  },
  security: {
    tools: ["Veracode", "SonarQube", "OWASP ZAP"],
    practices: ["SAST", "DAST", "Security Reviews"],
    compliance: ["SOC2", "ISO 27001", "GDPR"]
  },
  creative: {
    ai: ["Midjourney", "Sora", "ChatGPT", "GitHub Copilot"],
    design: ["Figma", "Adobe Creative Suite"],
    photography: ["Lightroom", "Photoshop", "Wirestock"],
    writing: ["Technical Documentation", "Fiction", "Content Creation"]
  }
};
