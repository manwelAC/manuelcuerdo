import { ProfileConfig } from "@/types/portfolio";

export const profileData: ProfileConfig = {
  name: "John Manuel Cuerdo",
  fullName: "John Manuel Alera Cuerdo",
  brandMark: "JMAC.",
  handle: "manuelAC",
  altHandle: "manwelAC",
  role: "Full-Stack & Systems Developer",
  location: "Caloocan / Manila, Philippines",
  timezone: "Asia/Manila",
  email: "cuerdo.johnmanuel@gmail.com",
  altEmail: "johnmanuelcuerdo@gmail.com",
  avatar: "/mypfp-page.png",
  pixelAvatar: "/assets/manuel-about-half.png",
  githubBio: "I'm e cat, I program, I build, I happy.",
  availabilityText: "Open for Custom Systems, Web Apps & Collaborations",
  responseTime: "Usually within 24 hours",
  sidebarTooltip: {
    author: "Manuel",
    message: "I built this space so we can skip the formalities. Pick what you need!",
  },
  bioParagraphs: [
    "I'm John Manuel Alera Cuerdo (also known online as manuelAC / manwelAC)—a full-stack developer focused on architecting dependable systems and clean interfaces across web, desktop, and local-first tools.",
    "I earned my BS in Computer Science from the University of Caloocan City and currently build production software at Ascendens Asia. Whether I'm solo-architecting a multi-branch clinic ERP in Laravel or tinkering with local-first developer tools in Python and Next.js, I build across the whole product.",
  ],
  indieNote:
    "Away from the editor, I'm usually exploring indie games and the small teams behind them.",
  socials: [
    {
      label: "github",
      href: "https://github.com/manwelAC",
      username: "@manwelAC",
    },
    {
      label: "instagram",
      href: "https://www.instagram.com/manwel.ac",
      username: "@manwel.ac",
    },
    {
      label: "tiktok",
      href: "https://www.tiktok.com/@manwel.ac",
      username: "@manwel.ac",
    },
    {
      label: "discord",
      href: "https://discord.gg/Gte9njj3",
      username: "Discord Community",
    },
    {
      label: "email",
      href: "mailto:cuerdo.johnmanuel@gmail.com",
      username: "cuerdo.johnmanuel@gmail.com",
    },
    {
      label: "studio",
      href: "/blog/studio",
      username: "Notes & CMS Studio",
    },
  ],
  highlights: [
    {
      title: "Business & ERP Systems",
      subtitle: "PHP · LARAVEL · MYSQL · 360° BUILDS",
      icon: "Layers",
      href: "/projects?category=Enterprise+%26+ERP",
    },
    {
      title: "Local AI & Dev Tools",
      subtitle: "PYTHON · ELECTRON · OLLAMA · OCR",
      icon: "Cpu",
      href: "/projects?category=AI+%26+Developer+Tools",
    },
    {
      title: "Web & Mobile Products",
      subtitle: "NEXT.JS · REACT · ANGULAR · REDIS",
      icon: "Sparkles",
      href: "/projects",
    },
  ],
  stats: [
    {
      value: "15",
      label: "SHIPPED & ARCHIVED BUILDS",
      trend: "↗",
      href: "/projects",
    },
    {
      value: "1,414+",
      label: "YEARLY GITHUB CONTRIBUTIONS",
      trend: "↗",
      href: "https://github.com/manwelAC",
    },
    {
      value: "360°",
      label: "DB TO UI OWNERSHIP",
      trend: "↗",
      href: "#experience",
    },
  ],
  experiences: [
    {
      id: "exp-1",
      role: "Junior System Developer",
      company: "Ascendens Asia",
      location: "Metro Manila",
      period: "Jun 2026 — Present",
      current: true,
      summary: "Full-stack enterprise systems across Laravel, Angular, and React.",
      highlights: [],
      technologies: ["Laravel", "Angular", "React", "MySQL", "Docker"],
    },
    {
      id: "exp-2",
      role: "BS Computer Science",
      company: "University of Caloocan City",
      location: "Caloocan City",
      period: "2022 — Apr 2026",
      current: false,
      summary: "Graduated while working full-time as a software developer.",
      highlights: [],
      technologies: ["Computer Science", "Systems Architecture"],
    },
    {
      id: "exp-3",
      role: "Junior Fullstack Developer",
      company: "Intracode IT Solutions",
      location: "Metro Manila",
      period: "May 2025 — Jun 2026",
      current: false,
      summary: "Solo-architected client ERPs, payroll/DTR systems, and HRIS platforms.",
      highlights: [],
      technologies: ["PHP", "Laravel", "JavaScript", "MySQL"],
    },
  ],
  stackCategories: [
    {
      category: "01 · Languages",
      description: "Core programming languages I use daily for web, desktop, mobile, and CLI builds.",
      items: [
        { name: "PHP", role: "Enterprise Backend & Server Logic", level: "Core" },
        { name: "TypeScript & JavaScript", role: "Full-Stack Web, Daemons & Desktop", level: "Core" },
        { name: "C# (.NET 10)", role: "Native Windows Desktop & Domain Architecture", level: "Core" },
        { name: "Dart", role: "Cross-Platform Mobile & Spatial UI (Flutter)", level: "Core" },
        { name: "Python", role: "CLI Tooling, FastAPI & Local OCR/CV", level: "Core" },
      ],
    },
    {
      category: "02 · Backend & APIs",
      description: "Dependable APIs, MVC architectures, and edge/service layers.",
      items: [
        { name: "Laravel", role: "Primary Full-Stack & ERP Framework", level: "Core" },
        { name: "Node.js", role: "JavaScript Runtime, QA Runners & Daemons", level: "Core" },
        { name: "MCP (JSON-RPC 2.0)", role: "AI Agent Context & Document Bridges", level: "Core" },
        { name: "Supabase Edge & Resend", role: "Serverless Cron & Transactional Email", level: "Working Set" },
        { name: "REST & GraphQL APIs", role: "Structured Service Communication", level: "Core" },
      ],
    },
    {
      category: "03 · Frontend, Desktop & Mobile",
      description: "Clear interfaces across modern web apps, native desktop workstations, and mobile.",
      items: [
        { name: "React & Next.js", role: "App Router, Interactive Workspaces & Edge", level: "Core" },
        { name: "WinUI 3 (Windows App SDK)", role: "Native .NET 10 Windows Desktop UI", level: "Core" },
        { name: "Flutter & Riverpod v3", role: "Cross-Platform Mobile & Spatial UI", level: "Core" },
        { name: "Angular", role: "Enterprise Frontend Architecture", level: "Core" },
        { name: "Electron & Tailwind CSS", role: "Local Desktop Apps & Rapid UI Styling", level: "Core" },
      ],
    },
    {
      category: "04 · Databases & Local-First Storage",
      description: "Relational modeling, ORM layers, and offline-first persistence.",
      items: [
        { name: "MySQL & PostgreSQL", role: "Relational Databases for ERPs & Web", level: "Core" },
        { name: "SQLite (EF Core 10 & Drift)", role: "Local-First Desktop & Mobile Persistence", level: "Core" },
        { name: "Cloudflare D1 & Drizzle ORM", role: "Serverless Edge SQL & Type-Safe Queries", level: "Core" },
        { name: "Redis & Firebase", role: "Fast Caching & Realtime Services", level: "Working Set" },
      ],
    },
    {
      category: "05 · QA Automation, Cloud & Local AI",
      description: "Containerized verification pipelines, version control, and local intelligence.",
      items: [
        { name: "Docker & Playwright", role: "Isolated Sandbox & Headless Browser QA", level: "Core" },
        { name: "Cloudflare Workers, AWS & Vercel", role: "Cloud Hosting & Edge Deployments", level: "Core" },
        { name: "GitHub, Bitbucket & xUnit", role: "Version Control & 496+ Automated Tests", level: "Core" },
        { name: "Ollama (Local LLM)", role: "On-Device Code & Diff Analysis", level: "Core" },
        { name: "OpenCV, PaddleOCR & FFprobe", role: "Local Video Inspection & Document OCR", level: "Working Set" },
      ],
    },
  ],
  faqs: [
    {
      question: "How does a project usually begin?",
      answer:
        "We start with a short discovery conversation about your goals, audience, current workflows, and timeline. From there, I recommend a practical scope, outline the deliverables, and prepare a clear project estimate.",
    },
    {
      question: "How long does a custom system or web app take?",
      answer:
        "Focused web applications or MVPs usually take 2 to 4 weeks, while comprehensive multi-module business systems (like an ERP, HRIS, or custom POS/payroll platform) typically run 4 to 8 weeks depending on complexity.",
    },
    {
      question: "Can I request revisions during the build?",
      answer:
        "Absolutely. I build iteratively and share working progress early so you can test real screens, adjust workflows, and refine details before final handover.",
    },
    {
      question: "Do you provide support after launch?",
      answer:
        "Yes—every build includes post-launch bug support, clean documentation, and optional ongoing maintenance or feature retainers as your team grows.",
    },
  ],
  githubPulse: {
    totalContributions: 1414,
    handle: "manwelAC",
    profileUrl: "https://github.com/manwelAC",
    recentRepos: [
      {
        name: "code-terra",
        description:
          "Local-first repository atlas that renders codebases as interactive 3D-projected topographic mountains using Next.js 16, HTML5 Canvas, and Cloudflare D1.",
        language: "TypeScript",
        url: "https://github.com/manwelAC",
        updatedAt: "Oct 2026",
      },
      {
        name: "boti-bot",
        description:
          "Document-first Jira task workspace, MCP server bridge (/app/mcp), and two-stage autonomous Antigravity + Playwright QA verification engine in Docker.",
        language: "TypeScript",
        url: "https://github.com/manwelAC/boti-bot",
        updatedAt: "Oct 2026",
      },
      {
        name: "Suma",
        description:
          "Local-first Windows personal finance desktop app built with C# / .NET 10, WinUI 3, EF Core 10, and SQLite featuring an Available to Spend (ATS) engine and 496 xUnit tests.",
        language: "C#",
        url: "https://github.com/manwelAC",
        updatedAt: "Oct 2026",
      },
      {
        name: "nudgi",
        description:
          "Calm, 100% local-first recurring-expense reminder companion built with Flutter, Riverpod v3, Drift (SQLite), Spatial UI, and dual-channel Resend email nudges.",
        language: "Dart",
        url: "https://github.com/manwelAC/nudgi",
        updatedAt: "Sep 2026",
      },
    ],
  },
  consultingPackages: [
    {
      title: "Web Application / Business System",
      priceOrTimeline: "Something people log into & actively use",
      description:
        "Custom ERPs, HRIS & payroll engines, POS booking platforms, or multi-branch operational systems built from database architecture to final UI.",
      deliverables: [
        "End-to-end PHP/Laravel or Next.js + MySQL/PostgreSQL architecture",
        "Role-based access, audit trails, and automated report generation",
        "Interfaces tailored around real daily staff workflows",
      ],
    },
    {
      title: "Website / Product Launch",
      priceOrTimeline: "For a product, service, or personal brand",
      description:
        "High-craft, responsive, SEO-friendly websites and interactive web experiences with distinctive typography and smooth motion.",
      deliverables: [
        "Custom responsive design & interactive Framer Motion polish",
        "Technical SEO, structured data, and fast Core Web Vitals",
        "Easy-to-maintain content structure and deployment setup",
      ],
    },
    {
      title: "Custom Tooling / Local AI App",
      priceOrTimeline: "Desktop, CLI, or workflow automation",
      description:
        "Local-first Electron desktop apps, Python CLIs, background daemons, or Ollama-powered developer and team productivity tools.",
      deliverables: [
        "Privacy-first local SQLite, OCR, or local LLM pipelines",
        "Cross-platform Electron/React UI or terminal companion",
        "Zero-telemetry offline reliability",
      ],
    },
  ],
};
