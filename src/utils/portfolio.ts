import type {ProjectCategory, ProjectItem, SkillGroup, SkillItem} from '../data/portfolio';

export interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactValidationResult {
  valid: boolean;
  errors: Partial<Record<keyof ContactFormValues, string>>;
}

export function filterProjects(
  projects: ProjectItem[],
  category: 'All' | ProjectCategory,
  showAll: boolean,
): ProjectItem[] {
  const byCategory =
    category === 'All' ? projects : projects.filter((project) => project.category === category);

  if (showAll || category !== 'All') {
    return byCategory;
  }

  return byCategory.filter((project) => project.featured);
}

export function filterSkills(skills: SkillItem[], group: 'All' | SkillGroup): SkillItem[] {
  if (group === 'All') {
    return skills;
  }
  return skills.filter((skill) => skill.group === group);
}

export function validateContactForm(values: ContactFormValues): ContactValidationResult {
  const errors: Partial<Record<keyof ContactFormValues, string>> = {};
  const trimmedName = values.name.trim();
  const trimmedEmail = values.email.trim();
  const trimmedSubject = values.subject.trim();
  const trimmedMessage = values.message.trim();

  if (trimmedName.length < 2) {
    errors.name = 'Please enter your name (at least 2 characters).';
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!emailPattern.test(trimmedEmail)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (trimmedSubject.length < 3) {
    errors.subject = 'Please add a short subject (at least 3 characters).';
  }

  if (trimmedMessage.length < 10) {
    errors.message = 'Please share a bit more detail (at least 10 characters).';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function nextCarouselIndex(current: number, total: number, delta: 1 | -1): number {
  if (total <= 0) {
    return 0;
  }
  return (current + delta + total) % total;
}

export function buildResumeDocumentText(params: {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  bio: string;
  skills: SkillItem[];
  projects: ProjectItem[];
}): string {
  const skillLines = params.skills
    .map((skill) => `- ${skill.name}: ${skill.proficiency}% (${skill.group})`)
    .join('\n');

  const projectLines = params.projects
    .slice(0, 4)
    .map(
      (project) =>
        `${project.title} (${project.year}) — ${project.role}\n  ${project.summary}\n  Stack: ${project.stack.join(', ')}`,
    )
    .join('\n\n');

  return [
    `${params.name.toUpperCase()} — ${params.role}`,
    `${params.location} | ${params.email} | ${params.phone}`,
    '',
    'SUMMARY',
    params.bio,
    '',
    'CORE EXPERTISE',
    skillLines,
    '',
    'SELECTED PROJECTS',
    projectLines,
  ].join('\n');
}
