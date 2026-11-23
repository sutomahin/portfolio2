export type ProjectCategory = 'Full Stack' | 'Web App';
export type SkillGroup = 'Frontend' | 'Backend' | 'Data & Tooling';

export interface ProjectItem {
  id: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  description: string;
  stack: string[];
  year: string;
  role: string;
  highlights: string[];
  metrics: {label: string; value: string}[];
  liveUrl: string;
  repoUrl: string;
  previewVariant: 'fintrack' | 'shopvista' | 'taskify' | 'pulse' | 'clouddocs' | 'devlink';
  featured: boolean;
}

export interface SkillItem {
  id: string;
  name: string;
  proficiency: number;
  group: SkillGroup;
}

export interface ProcessStep {
  number: string;
  title: string;
  summary: string;
  deliverable: string;
  iconKey: 'search' | 'layout' | 'pen' | 'code' | 'shield' | 'rocket';
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  initials: string;
}

export interface StatMetric {
  value: string;
  label: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  summary: string;
}

export const PROFILE = {
  brandInitials: 'AT',
  name: 'Abdullah Tariq',
  role: 'Software Developer',
  headlinePrefix: 'I build digital',
  headlineAccent: 'experiences',
  headlineSuffix: 'that matter.',
  heroBio:
    "I'm Abdullah Tariq, a passionate full-stack developer who loves turning ideas into scalable, beautiful and performant web applications.",
  aboutBio:
    "I'm a full-stack developer with a strong focus on building modern, responsive and user-friendly web applications. I enjoy solving complex engineering problems, refining interaction details, and continuously adopting reliable technologies.",
  location: 'Lahore, Pakistan',
  email: 'hello@abdullahtariq.dev',
  phone: '+92 310 1234567',
  availability: 'Open to Work',
  availabilityDetail: 'Open to new opportunities',
  socials: {
    github: 'https://github.com/abdullahtariq-dev',
    linkedin: 'https://linkedin.com/in/abdullahtariq-dev',
    twitter: 'https://x.com/abdullahtariq',
  },
} as const;

export const HERO_METRICS: StatMetric[] = [
  {value: '4+', label: 'Years of Experience'},
  {value: '20+', label: 'Projects Completed'},
  {value: '99%', label: 'Client Satisfaction'},
];

export const CORE_PRINCIPLES = ['Clean Code', 'Scalable Solutions', 'Pixel Perfect'] as const;

export const SKILLS: SkillItem[] = [
  {id: 'js-ts', name: 'JavaScript / TypeScript', proficiency: 95, group: 'Frontend'},
  {id: 'react-next', name: 'React / Next.js', proficiency: 90, group: 'Frontend'},
  {id: 'node-express', name: 'Node.js / Express', proficiency: 85, group: 'Backend'},
  {id: 'python-django', name: 'Python / Django', proficiency: 75, group: 'Backend'},
  {id: 'sql-mongo', name: 'SQL / MongoDB', proficiency: 80, group: 'Data & Tooling'},
  {id: 'html-tailwind', name: 'HTML / CSS / Tailwind', proficiency: 95, group: 'Frontend'},
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'fintrack-dashboard',
    title: 'FinTrack Dashboard',
    category: 'Full Stack',
    summary: 'A modern finance dashboard for tracking expenses, budgets and analytics.',
    description:
      'Built an end-to-end personal and team finance workspace featuring real-time cashflow forecasting, recurring expense categorization, and exportable monthly ledger reports.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
    year: '2025',
    role: 'Lead Full-Stack Engineer',
    highlights: [
      'Designed multi-currency transaction aggregation with sub-100ms chart filtering',
      'Implemented CSV bank statement parser with deterministic duplicate detection',
      'Built role-based budget alerts and automated monthly variance summaries',
    ],
    metrics: [
      {label: 'Active Ledgers', value: '12,400+'},
      {label: 'Query Latency', value: '42ms'},
      {label: 'Lighthouse Score', value: '99/100'},
    ],
    liveUrl: 'https://fintrack.abdullahtariq.dev',
    repoUrl: 'https://github.com/abdullahtariq-dev/fintrack-dashboard',
    previewVariant: 'fintrack',
    featured: true,
  },
  {
    id: 'shopvista-ecommerce',
    title: 'ShopVista E-commerce',
    category: 'Full Stack',
    summary: 'Feature-rich e-commerce platform with secure payments and admin panel.',
    description:
      'Engineered a high-conversion apparel storefront and inventory control panel with Stripe checkout webhooks, variant stock locking, and fast faceted product discovery.',
    stack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    year: '2025',
    role: 'Full-Stack Developer',
    highlights: [
      'Architected optimistic cart state synced with server-side inventory reservations',
      'Integrated Stripe PaymentIntents with idempotent webhook fulfillment',
      'Created an operations dashboard for order tracking, refunds, and SKU analytics',
    ],
    metrics: [
      {label: 'Checkout Conversion', value: '+28%'},
      {label: 'Orders Processed', value: '45K+'},
      {label: 'Uptime SLA', value: '99.95%'},
    ],
    liveUrl: 'https://shopvista.abdullahtariq.dev',
    repoUrl: 'https://github.com/abdullahtariq-dev/shopvista-store',
    previewVariant: 'shopvista',
    featured: true,
  },
  {
    id: 'taskify-ai',
    title: 'Taskify AI',
    category: 'Web App',
    summary: 'AI-powered productivity app to manage tasks, deadlines and team collaboration.',
    description:
      'Developed a collaborative sprint planner that breaks down product specs into structured milestones, balances assignee workload, and tracks cycle velocity.',
    stack: ['Next.js', 'OpenAI API', 'Prisma', 'PostgreSQL'],
    year: '2024',
    role: 'Product Engineer',
    highlights: [
      'Built keyboard-first Kanban and timeline views with instant optimistic updates',
      'Added smart task breakdown turning meeting notes into scoped action items',
      'Implemented PostgreSQL row-level workspace isolation and audit logs',
    ],
    metrics: [
      {label: 'Team Workspaces', value: '1,800+'},
      {label: 'Tasks Completed', value: '310K'},
      {label: 'Avg. Sync Time', value: '65ms'},
    ],
    liveUrl: 'https://taskify.abdullahtariq.dev',
    repoUrl: 'https://github.com/abdullahtariq-dev/taskify-workspace',
    previewVariant: 'taskify',
    featured: true,
  },
  {
    id: 'pulse-metrics',
    title: 'PulseMetrics Telemetry',
    category: 'Web App',
    summary: 'Lightweight web vitals and uptime observability console for product teams.',
    description:
      'Created a focused performance monitoring dashboard tracking Core Web Vitals, regional endpoint latency, and release regression alerts without heavy agent overhead.',
    stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    year: '2024',
    role: 'Full-Stack Developer',
    highlights: [
      'Streamlined ingestion pipeline handling 2M+ daily browser telemetry beacons',
      'Built percentile distribution charts (p50, p95, p99) per route and release tag',
    ],
    metrics: [
      {label: 'Events / Day', value: '2.1M'},
      {label: 'Alert Delivery', value: '< 5s'},
    ],
    liveUrl: 'https://pulse.abdullahtariq.dev',
    repoUrl: 'https://github.com/abdullahtariq-dev/pulse-metrics',
    previewVariant: 'pulse',
    featured: false,
  },
  {
    id: 'clouddocs-hub',
    title: 'CloudDocs Knowledge Hub',
    category: 'Full Stack',
    summary: 'Structured engineering documentation portal with instant full-text search.',
    description:
      'Built an internal engineering handbook and API reference portal with versioned markdown publishing, code snippet verification, and sub-30ms keyboard search.',
    stack: ['Next.js', 'TypeScript', 'Django', 'PostgreSQL'],
    year: '2023',
    role: 'Software Engineer',
    highlights: [
      'Indexed 4,000+ technical docs with typo-tolerant prefix search',
      'Automated OpenAPI schema diffs on pull requests for endpoint documentation',
    ],
    metrics: [
      {label: 'Search Speed', value: '24ms'},
      {label: 'Monthly Readers', value: '18K'},
    ],
    liveUrl: 'https://clouddocs.abdullahtariq.dev',
    repoUrl: 'https://github.com/abdullahtariq-dev/clouddocs-hub',
    previewVariant: 'clouddocs',
    featured: false,
  },
  {
    id: 'devlink-gateway',
    title: 'DevLink Webhook Studio',
    category: 'Web App',
    summary: 'Developer console for inspecting, replaying and signing webhook events.',
    description:
      'Built a clean debugging workspace allowing backend teams to capture webhook payloads, verify HMAC signatures, and replay failed deliveries against local environments.',
    stack: ['React', 'Express', 'TypeScript', 'Redis'],
    year: '2023',
    role: 'Creator & Maintainer',
    highlights: [
      'Implemented deterministic HMAC-SHA256 signature verification inspector',
      'Added dead-letter queue replay with exponential backoff controls',
    ],
    metrics: [
      {label: 'Replayed Events', value: '890K'},
      {label: 'GitHub Stars', value: '640+'},
    ],
    liveUrl: 'https://devlink.abdullahtariq.dev',
    repoUrl: 'https://github.com/abdullahtariq-dev/devlink-studio',
    previewVariant: 'devlink',
    featured: false,
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    summary: 'Understanding goals, requirements and project scope.',
    deliverable: 'Product brief, user flows & technical constraints',
    iconKey: 'search',
  },
  {
    number: '02',
    title: 'Plan',
    summary: 'Planning architecture, tech stack and project roadmap.',
    deliverable: 'System architecture diagram & milestone schedule',
    iconKey: 'layout',
  },
  {
    number: '03',
    title: 'Design',
    summary: 'Creating wireframes and beautiful UI/UX designs.',
    deliverable: 'Component tokens, responsive layouts & prototype',
    iconKey: 'pen',
  },
  {
    number: '04',
    title: 'Develop',
    summary: 'Writing clean, scalable and efficient code with best practices.',
    deliverable: 'Modular TypeScript frontend, API routes & schema',
    iconKey: 'code',
  },
  {
    number: '05',
    title: 'Test',
    summary: 'Testing for bugs, performance and cross-browser issues.',
    deliverable: 'Unit/integration suites, accessibility & Web Vitals audit',
    iconKey: 'shield',
  },
  {
    number: '06',
    title: 'Deploy',
    summary: 'Deploying to production and ensuring smooth launch.',
    deliverable: 'CI/CD pipeline, monitoring & post-launch handoff',
    iconKey: 'rocket',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'hamza-ali',
    quote:
      'Abdullah is an exceptional developer! He delivered our project on time with clean code and amazing attention to detail. Highly recommended!',
    author: 'Hamza Ali',
    role: 'CEO',
    company: 'TechSolutions',
    initials: 'HA',
  },
  {
    id: 'sarah-chen',
    quote:
      'Working with Abdullah cut our dashboard load time in half. He asks the right architectural questions upfront and ships rock-solid TypeScript.',
    author: 'Sarah Chen',
    role: 'Product Lead',
    company: 'FinLedger',
    initials: 'SC',
  },
  {
    id: 'usman-raza',
    quote:
      'From Stripe checkout reliability to our internal operations UI, Abdullah owned every detail and communicated progress clearly at each milestone.',
    author: 'Usman Raza',
    role: 'Engineering Manager',
    company: 'ShopVista',
    initials: 'UR',
  },
];

export const SUMMARY_METRICS: StatMetric[] = [
  {value: '20+', label: 'Happy Clients'},
  {value: '20+', label: 'Projects Completed'},
  {value: '4+', label: 'Years Experience'},
  {value: '99%', label: 'Satisfaction Rate'},
];

export const EXPERIENCE_TIMELINE: ExperienceItem[] = [
  {
    period: '2024 — Present',
    role: 'Senior Full-Stack Developer',
    company: 'Independent & Product Consulting',
    summary:
      'Partnering with SaaS startups and e-commerce teams to architect Next.js, React, and Node.js applications from concept through production launch.',
  },
  {
    period: '2022 — 2024',
    role: 'Full-Stack Software Engineer',
    company: 'NorthStar Digital Labs',
    summary:
      'Led frontend architecture and REST/GraphQL service design for multi-tenant analytics dashboards serving 50,000+ monthly active users.',
  },
  {
    period: '2021 — 2022',
    role: 'Frontend Engineer',
    company: 'PixelCraft Studio',
    summary:
      'Built accessible component libraries, interactive marketing experiences, and custom storefront themes with TypeScript and Tailwind CSS.',
  },
];
