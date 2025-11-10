// TypeScript interfaces for portfolio data

export interface SocialLink {
  label: string;
  href: string;
}

export interface Profile {
  name: string;
  title: string;
  location: string;
  tagline: string;
  headshot: string;
  resumeUrl: string;
  email: string;
  phone: string;
  socials: SocialLink[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface GalleryImage {
  alt: string;
  src: string;
  title?: string;
}

export interface Creation {
  title: string;
  description: string;
  link?: string;
}

export interface Service {
  title: string;
  description: string;
}

// Contact form types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  website?: string; // Honeypot field
}

export interface ContactFormState {
  loading: boolean;
  success: boolean;
  error: string | null;
}

// Animation types
export interface AnimationConfig {
  initial: object;
  animate: object;
  transition: object;
}

// Section props
export interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

// Card props
export interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}
