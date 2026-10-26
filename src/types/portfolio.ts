export interface SocialLink {
  label: string;
  href: string;
  username?: string;
}

export interface HighlightBadge {
  title: string;
  subtitle: string;
  icon: string;
  href?: string;
}

export interface MetricStat {
  value: string;
  label: string;
  trend?: string;
  href?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  technologies: string[];
}

export interface StackCategory {
  category: string;
  description: string;
  items: {
    name: string;
    role: string;
    level?: string;
  }[];
}

export interface ProjectScreenshot {
  src: string;
  alt: string;
  caption: string;
}

export type ProjectCategory =
  | "Enterprise & ERP"
  | "AI & Developer Tools"
  | "Consumer & Social"
  | "Productivity & Systems";

export interface ProjectItem {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  category: ProjectCategory;
  workType: "Professional" | "Personal";
  year: string;
  status: "Shipped" | "Building" | "Archived";
  archiveReason?: string;
  role: string;
  featured: boolean;
  accentColor: string;
  coverImage: string;
  screenshots: ProjectScreenshot[];
  techStack: string[];
  keyFeatures: string[];
  architectureHighlights?: string[];
  metrics?: {
    value: string;
    label: string;
  }[];
  links?: {
    live?: string;
    repo?: string;
    caseStudy?: string;
  };
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  readingTime: string;
  category: string;
  tags: string[];
  featured?: boolean;
  coverImage?: string;
  relatedProjectSlug?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface GithubRepoItem {
  name: string;
  description: string;
  language: string;
  url: string;
  updatedAt: string;
}

export interface ProfileConfig {
  name: string;
  fullName: string;
  brandMark: string;
  handle: string;
  altHandle: string;
  role: string;
  location: string;
  timezone: string;
  email: string;
  altEmail?: string;
  avatar: string;
  pixelAvatar: string;
  githubBio: string;
  availabilityText: string;
  responseTime: string;
  sidebarTooltip: {
    author: string;
    message: string;
  };
  bioParagraphs: string[];
  indieNote: string;
  socials: SocialLink[];
  highlights: HighlightBadge[];
  stats: MetricStat[];
  experiences: ExperienceItem[];
  stackCategories: StackCategory[];
  faqs: FaqItem[];
  githubPulse: {
    totalContributions: number;
    handle: string;
    profileUrl: string;
    recentRepos: GithubRepoItem[];
  };
  consultingPackages: {
    title: string;
    priceOrTimeline: string;
    description: string;
    deliverables: string[];
  }[];
}
