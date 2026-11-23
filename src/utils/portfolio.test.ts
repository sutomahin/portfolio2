import test from 'node:test';
import assert from 'node:assert/strict';
import {PROJECTS, SKILLS, PROFILE} from '../data/portfolio';
import {
  buildResumeDocumentText,
  filterProjects,
  filterSkills,
  nextCarouselIndex,
  validateContactForm,
} from './portfolio';

test('filterProjects returns only featured projects when category is All and showAll is false', () => {
  const result = filterProjects(PROJECTS, 'All', false);
  assert.equal(result.length, 3);
  assert.ok(result.every((item) => item.featured));
});

test('filterProjects returns all matching projects when showAll is true or category is specific', () => {
  const all = filterProjects(PROJECTS, 'All', true);
  assert.equal(all.length, PROJECTS.length);

  const webApps = filterProjects(PROJECTS, 'Web App', false);
  assert.ok(webApps.length >= 2);
  assert.ok(webApps.every((item) => item.category === 'Web App'));
});

test('filterSkills filters by group and keeps full list for All', () => {
  assert.equal(filterSkills(SKILLS, 'All').length, SKILLS.length);
  const frontend = filterSkills(SKILLS, 'Frontend');
  assert.ok(frontend.length > 0);
  assert.ok(frontend.every((skill) => skill.group === 'Frontend'));
});

test('validateContactForm rejects empty or invalid inputs without fallback substitution', () => {
  const emptyResult = validateContactForm({
    name: '',
    email: 'not-an-email',
    subject: 'Hi',
    message: 'Short',
  });
  assert.equal(emptyResult.valid, false);
  assert.ok(emptyResult.errors.name);
  assert.ok(emptyResult.errors.email);
  assert.ok(emptyResult.errors.subject);
  assert.ok(emptyResult.errors.message);
});

test('validateContactForm accepts valid inquiries', () => {
  const validResult = validateContactForm({
    name: 'Hamza Ali',
    email: 'hamza@techsolutions.io',
    subject: 'Web platform rebuild',
    message: 'Looking to collaborate on our next SaaS analytics dashboard.',
  });
  assert.equal(validResult.valid, true);
  assert.deepEqual(validResult.errors, {});
});

test('nextCarouselIndex wraps cleanly forward and backward', () => {
  assert.equal(nextCarouselIndex(0, 3, 1), 1);
  assert.equal(nextCarouselIndex(2, 3, 1), 0);
  assert.equal(nextCarouselIndex(0, 3, -1), 2);
  assert.equal(nextCarouselIndex(0, 0, 1), 0);
});

test('buildResumeDocumentText includes core profile details and skills', () => {
  const doc = buildResumeDocumentText({
    name: PROFILE.name,
    role: PROFILE.role,
    location: PROFILE.location,
    email: PROFILE.email,
    phone: PROFILE.phone,
    bio: PROFILE.aboutBio,
    skills: SKILLS,
    projects: PROJECTS,
  });
  assert.match(doc, /ABDULLAH TARIQ/);
  assert.match(doc, /JavaScript \/ TypeScript: 95%/);
  assert.match(doc, /FinTrack Dashboard/);
});
