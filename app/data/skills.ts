import { SkillCategory } from './types';

export const skillCategories: SkillCategory[] = [
  {
    title: "Back‑End & Cloud",
    skills: "Go, .NET 8, Node/TS, NestJS, PostgreSQL, Kafka/SQS, Docker, Kubernetes, KEDA, Argo CD, Azure"
  },
  {
    title: "Front‑End",
    skills: "React, Next.js, Tailwind, shadcn/ui"
  },
  {
    title: "Observability",
    skills: "Prometheus, Grafana, OpenTelemetry"
  },
  {
    title: "Security",
    skills: "SAST/DAST, Veracode, Pentest reviews"
  },
  {
    title: "Creative & AI",
    skills: "Midjourney, Sora, Resend, Photography, Wirestock"
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
