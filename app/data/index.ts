// Central export file for all data
export * from './types';
export * from './profile';
export * from './projects';
export * from './skills';

// Re-export commonly used data for convenience
export { profile, aboutContent } from './profile';
export { projects, creations, services, galleryImages, workWithMeIntro, workWithMeOutro } from './projects';
export { skillCategories, detailedSkills } from './skills';
