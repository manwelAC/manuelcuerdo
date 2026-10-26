<div align="center">

# John Manuel Cuerdo (`JMAC.`)
### Full-Stack & Systems Developer · Manila, Philippines

[![Next.js](https://img.shields.io/badge/Next.js_15-black?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React_19-20232A?style=flat&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript_5-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=flat&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![GitHub](https://img.shields.io/badge/GitHub-@manwelAC-181717?style=flat&logo=github&logoColor=white)](https://github.com/manwelAC)

<br />

**A high-performance personal developer portfolio, deep-dive project showcase, and built-in Markdown CMS Studio.**  
Engineered with an editorial aesthetic, persistent sidebar navigation, and type-safe modular architecture.

[Live Demo](https://github.com/manwelAC) · [Report Bug](https://github.com/manwelAC/prof-portfolio/issues) · [Request Feature](https://github.com/manwelAC/prof-portfolio/issues)

</div>

---

## 📌 About Me & The Portfolio

I'm **John Manuel Alera Cuerdo** (known online as **manuelAC** / **manwelAC**)—a full-stack developer focused on architecting dependable systems and clean interfaces across web, desktop, and local-first tools.

I built this portfolio to replace traditional generic templates with a bespoke, content-first platform that highlights my **360° database-to-UI** work—from enterprise ERPs (Laravel, MySQL) to local AI tools (Python, Electron, Ollama) and modern reactive web applications (Next.js, React, Tailwind).

### Highlights:
- **Architectural Editorial UI:** Persistent responsive sidebar navigation with a centered, distraction-free reading flow and fluid Framer Motion animations.
- **Deep Project Case Studies (`/projects` & `/projects/[slug]`):** Detailed breakdowns featuring multi-screenshot galleries with custom captions, technical architecture notes, role ownership badges, and impact metrics.
- **Interactive Tech Stack Matrix (`/stack`):** Categorized view across Languages, Backend & APIs, Frontend & Desktop, Databases, and QA/DevOps pipelines.
- **In-Browser Markdown CMS Studio (`/blog/studio`):** Built-in split-screen Markdown authoring studio with live preview and one-click publishing directly to `src/content/blogs/` via local API routes.
- **Fully Type-Safe & Modular:** All content (profile, projects, experience, FAQs, and blogs) is managed via strictly typed configurations.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 15 (App Router)](https://nextjs.org/) |
| **UI & Core** | [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Motion** | [Framer Motion 12](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Content Engine** | Markdown Frontmatter + Internal API (`/api/blogs`) + Typed Data Modules |

---

## 🚀 Key Features

### 1. ✍️ Local-First Blog & CMS Studio (`/blog/studio`)
Write, format, preview, and publish technical notes without leaving the browser:
- **Split-View Markdown Editor:** Live side-by-side preview with custom typography rendering.
- **Direct File System Publishing:** A dedicated Next.js API route (`/api/blogs`) automatically validates and writes your posts to `src/content/blogs/<slug>.md`.
- **Project Config Generator:** Includes an automated "Project Builder" tab that outputs ready-to-copy TypeScript configs for `src/data/projects.ts`.

### 2. 💼 Comprehensive Project Showcase (`/projects`)
- Filterable by categories: *Enterprise & ERP*, *AI & Developer Tools*, *Consumer & Social*, and *Productivity & Systems*.
- Individual case study pages (`/projects/[slug]`) featuring:
  - Role & ownership disclosure (e.g., *Sole Full-Stack Developer - 100% Built by Me*)
  - Metrics cards (*Sole Developer*, *360° DB to UI Ownership*, *Shipped*)
  - Interactive multi-screenshot lightbox with captions
  - Technical architecture notes, stack chips, and repository / demo links.

### 3. ⚡ Tech Stack & Skills Directory (`/stack`)
- Grouped into 5 distinct disciplines:
  1. **Languages:** PHP, TypeScript, JavaScript, C# (.NET 10), Dart, Python
  2. **Backend & APIs:** Laravel, Node.js, MCP (JSON-RPC 2.0), REST/GraphQL, Supabase Edge
  3. **Frontend & Desktop:** React, Next.js, WinUI 3, Flutter, Angular, Electron
  4. **Databases & Local Storage:** MySQL, PostgreSQL, SQLite, Cloudflare D1, Redis
  5. **QA, Cloud & AI:** Docker, Playwright, Vercel, AWS, Ollama, OpenCV

---

## 📂 Project Structure

```text
prof-portfolio/
├── public/                     # Static assets (screenshots, profile picture, icons)
│   ├── projects/               # High-resolution project screenshots organized by slug
│   └── mypfp-page.png          # Profile avatar
├── src/
│   ├── app/                    # Next.js App Router routes
│   │   ├── api/blogs/          # API route for studio CMS post publishing
│   │   ├── blog/               # Blog index and [slug] reader
│   │   │   └── studio/         # In-browser CMS Markdown studio
│   │   ├── projects/           # Projects directory and [slug] case study views
│   │   ├── stack/              # Interactive technology stack breakdown
│   │   ├── layout.tsx          # Root layout with sidebar navigation
│   │   ├── page.tsx            # Home page (editorial bio, bento stats, experience)
│   │   ├── robots.ts           # Dynamic SEO robots configuration
│   │   └── sitemap.ts          # Automated sitemap generation
│   ├── components/             # Reusable UI components & layouts
│   ├── content/blogs/          # Markdown (.md) blog posts with frontmatter
│   ├── data/                   # Centralized type-safe data
│   │   ├── blogs.ts            # Blog metadata and posts registry
│   │   ├── profile.ts          # Personal bio, social links, stats, and timeline
│   │   └── projects.ts         # Project showcase items, screenshots, and details
│   └── types/                  # Shared TypeScript interfaces
├── package.json
└── tsconfig.json
```

---

## ⚡ Quick Start & Local Setup

### Prerequisites
- **Node.js** 18.18+ or 20+
- **npm**, **pnpm**, or **yarn**

### 1. Clone the repository
```bash
git clone https://github.com/manwelAC/prof-portfolio.git
cd prof-portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.  
Access [http://localhost:3000/blog/studio](http://localhost:3000/blog/studio) to launch the content CMS.

### 4. Build for production
```bash
npm run build
npm run start
```

---

## ⚙️ Personalization & Content Updates

Updating this portfolio with new achievements, articles, or clients is straightforward:

| Goal | Where to edit |
|---|---|
| **Personal Bio, Socials & Experience** | Edit [`src/data/profile.ts`](src/data/profile.ts) (bio paragraphs, avatar path, social links, metrics, experience timeline). |
| **Add / Edit Projects** | Place screenshots into `public/projects/<slug>/` and update [`src/data/projects.ts`](src/data/projects.ts) (or use `/blog/studio` to generate the snippet). |
| **Write a New Blog Post** | Visit `/blog/studio` in dev mode and click **Publish**, or place a `.md` file in `src/content/blogs/`. |
| **Customize Tech Stack** | Update `stackCategories` inside [`src/data/profile.ts`](src/data/profile.ts). |

---

## 📬 Contact & Connect

- **GitHub:** [@manwelAC](https://github.com/manwelAC)
- **Email:** [cuerdo.johnmanuel@gmail.com](mailto:cuerdo.johnmanuel@gmail.com)
- **Instagram:** [@manwel.ac](https://www.instagram.com/manwel.ac)
- **TikTok:** [@manwel.ac](https://www.tiktok.com/@manwel.ac)
- **Location:** Manila / Caloocan, Philippines

---

## 📄 License

This project is open-source under the [MIT License](LICENSE). Feel free to use it as inspiration or a template for your own developer portfolio.
