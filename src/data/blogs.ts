import { BlogPost } from "@/types/portfolio";

export const defaultBlogsData: BlogPost[] = [
  {
    slug: "local-first-ai-developer-tools-ollama",
    title: "Building Local-First Developer Tools in Python & Electron: Lessons from Docs for Me & DemoShield",
    excerpt:
      "How I built a terminal-to-desktop Git change workspace with local Ollama AI and an offline video privacy scanner using FFprobe, OpenCV, and PaddleOCR.",
    publishedAt: "Oct 2026",
    readingTime: "6 min read",
    category: "Developer Tools",
    tags: ["Python", "Electron", "Ollama", "OpenCV", "Local-First"],
    featured: true,
    coverImage: "/projects/docs-for-me/change-map.png",
    relatedProjectSlug: "docs-for-me",
    content: `## Why I Build Local-First Tools

When you're working on client repositories—like enterprise payroll engines or clinic ERPs—pasting raw Git diffs or uploading unredacted screen recordings to third-party cloud APIs is often a non-starter.

That led me to build two local desktop tools: **Docs for Me** (a Python CLI and Electron + React workspace that turns Git changes into programmer-friendly guides and commit messages) and **DemoShield** (a CapCut-inspired local video inspector that locates exposed secrets before you share a recording).

---

## 1. Evolving \`docs-for-me\` from V1 Terminal CLI to Local AI Workspace

\`docs-for-me\` wasn't originally meant to have a graphical interface—V1 was a pure Python CLI tool you could run inside any project terminal.

As I used it daily, I wanted a clearer **Change Map** that answers:
- What does each modified file actually do?
- How many lines were added or removed?
- How confident is the system in its findings?

By pairing the static Git diff parser with **local Ollama AI**, \`docs-for-me\` enhances its findings and generates ready-to-copy Markdown summaries and commit messages right on your machine.

---

## 2. Offline Video Inspection in \`DemoShield\`

Every developer knows the stress of recording a quick demo and realizing an API key or Bearer token flashed on screen.

In **DemoShield**, I built an offline inspection pipeline:
- **FFprobe** reads video metadata and timeline structure.
- **OpenCV** extracts and compares frames on visual change so we don't waste cycles scanning identical frames.
- **PaddleOCR** scans text directly from the screen to map sensitive patterns onto the **Findings Display** with exact exposure timestamps.`,
  },
  {
    slug: "architecting-multi-branch-erp-and-payroll-systems",
    title: "360° Ownership in Laravel: Building Imajica ERP, Shinryo DTR, and Delibites HRIS",
    excerpt:
      "What I learned solo-architecting Imajica Aesthetics ERP & LMS and building end-to-end Philippine payroll and NTE compliance systems with PHP, Laravel, and MySQL.",
    publishedAt: "Sep 2026",
    readingTime: "8 min read",
    category: "Systems & ERP",
    tags: ["PHP", "Laravel", "MySQL", "Bootstrap", "ERP"],
    featured: true,
    coverImage: "/projects/imajica/dashboard.png",
    relatedProjectSlug: "imajica",
    content: `## Learning by Building Real Business Systems

While working at **Intracode IT Solutions** (and completing my BS in Computer Science at the University of Caloocan City), I had the opportunity to take deep ownership of production business systems built with **PHP, Laravel, MySQL, and Bootstrap**.

Four builds in particular shaped how I think about software architecture:
1. **Imajica Aesthetics ERP & LMS:** Developed independently as the sole developer—from database design and business logic to the POS booking layout, financial reports, and integrated applicant LMS.
2. **Shinryo Philippines Payroll & DTR:** A complete DTR Management engine built from the ground up with biometric \`att_logs\` ingestion and automated cutoff reports (\`RT\`, \`OT\`, \`XSOT\`, \`NDOT\`).
3. **Delibites HRIS & Payroll:** A comprehensive \`IR → NTE → DR → DTR\` workflow connecting Incident Reports, custom rich-text NTE Management, departmental monitoring, and an Article Library of corporate sanctions.
4. **Injap (Innovation Japan):** A community platform featuring the custom **Inco Wallet** currency system, commission-based product marketplace, and built-in member-to-superadmin chat.

---

## Designing Around Real Daily Workflows

In **Shinryo**, HR staff used to jump across multiple screens just to reconcile one employee's cutoff. I designed a single-page **DTR Management** interface where editing Time In/Out, managing shift schedules, and filing leaves happen seamlessly in one view.

In **Imajica**, front-desk staff needed a **POS-styled booking layout** tailored for auditing daily clients, while hiring managers needed an **Integrated LMS** where they could simply paste a YouTube link and title to create training modules for Staff and Manager applicants.`,
  },
  {
    slug: "why-i-built-check-me-up-local-sqlite-focus-daemon",
    title: "Why I Built Check me Up: A Local-First Focus & Distraction Daemon",
    excerpt:
      "Tracking active windows, idle walk-away time, and weekly productivity directly from a lightweight background daemon without cloud telemetry.",
    publishedAt: "Aug 2026",
    readingTime: "5 min read",
    category: "Productivity",
    tags: ["JavaScript", "Daemon", "Electron", "SQLite", "Local-First"],
    featured: true,
    coverImage: "/projects/check-me-up/cmeup-1.png",
    relatedProjectSlug: "check-me-up",
    content: `## Observability for Your Own Focus

Most time trackers either force you to manually start timers all day or stream your window titles to a remote server.

I built **Check me Up** to be a quiet, local-first companion:
- A small background daemon watches the currently focused window and detects idle time.
- Everything is stored locally on your machine.
- Whenever you ask for it, the dashboard renders your active session and a **Weekly Summary** showing whether your week was genuinely productive.`,
  },
  {
    slug: "designing-hyperlocal-community-discovery-balitaan",
    title: "Building Balitaan: Crowdsourced Price Discovery ('Presyo sa Mapa') with Next.js & Laravel",
    excerpt:
      "How I combined Next.js, Laravel, PostgreSQL, and Redis to build a hyperlocal price checker for Filipinos—and honest lessons on indie hosting costs.",
    publishedAt: "Jul 2026",
    readingTime: "5 min read",
    category: "Product & Architecture",
    tags: ["Next.js", "Laravel", "PostgreSQL", "Redis", "TypeScript"],
    featured: false,
    coverImage: "/projects/balitaan/onboarding.png",
    relatedProjectSlug: "balitaan",
    content: `## Answering "What Does This Cost Near Me Right Now?"

**Balitaan** started with a practical everyday question for Filipinos: what do commodities and essentials actually cost in my area today?

To practice architecting for large-scale social data, I built Balitaan with a **Next.js + TypeScript** frontend backed by **Laravel, PostgreSQL, and Redis**:
- **Character-First Onboarding:** Instead of asking for personal selfies, users pick from custom Filipino cultural characters to stay private while contributing.
- **For You & 5km Nearby Feeds:** Combining algorithmic interest tuning with a 5km radius proximity feed.
- **Presyo sa Mapa:** Plotting crowdsourced price reports across the Philippines.

While I archived the public deployment due to the recurring server and hosting costs of running a large-scale social app solo, building Balitaan pushed my full-stack system design further than almost any other personal project.`,
  },
];

export function getBlogBySlug(slug: string, customPosts: BlogPost[] = []): BlogPost | undefined {
  const all = [...customPosts, ...defaultBlogsData];
  return all.find((post) => post.slug === slug);
}
