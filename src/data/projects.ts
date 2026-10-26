import { ProjectItem, ProjectCategory } from "@/types/portfolio";

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  "Enterprise & ERP",
  "AI & Developer Tools",
  "Consumer & Social",
  "Productivity & Systems",
];

export const projectsData: ProjectItem[] = [
  {
    slug: "imajica",
    number: "01",
    title: "Imajica Aesthetics ERP & LMS",
    tagline:
      "Developed independently as the sole developer while working at Intracode IT Solutions—360° ownership from DB to UI.",
    shortDescription:
      "Imajica brings the day-to-day work of an aesthetics clinic into one dependable workspace—connecting client records, patient care, POS booking, scheduling, inventory, business reports, and an integrated staff/applicant LMS.",
    fullDescription:
      "Designed and developed independently as the sole developer while working at Intracode IT Solutions—from database architecture and business logic to the final interface. Imajica unifies the daily operations of a multi-branch aesthetics clinic into one dependable workspace. It connects client records, patient care, scheduling, customized POS booking for front-desk auditing, products, services, stock movements, and profitability reports alongside a built-in Learning Management System (LMS) where applicants for Staff or Manager roles complete video modules and assessments.",
    category: "Enterprise & ERP",
    workType: "Professional",
    year: "2024 — 2026",
    status: "Shipped",
    role: "Sole Full-Stack Developer (100% Built by Me)",
    featured: true,
    accentColor: "#D0B66E",
    coverImage: "/projects/imajica/dashboard.png",
    metrics: [
      { value: "01", label: "Sole Developer" },
      { value: "05", label: "Core Modules" },
      { value: "360°", label: "DB to UI Ownership" },
    ],
    screenshots: [
      {
        src: "/projects/imajica/dashboard.png",
        alt: "Imajica operations dashboard",
        caption:
          "A clear starting point for every workday—surfacing appointments, sales activity, cash flow, and work that needs attention.",
      },
      {
        src: "/projects/imajica/pos-booking.png",
        alt: "Imajica POS Booking Layout",
        caption:
          "POS-styled booking customized for Imajica's front desks to audit and manage daily clinic clients.",
      },
      {
        src: "/projects/imajica/lms-applicant-dashboard.png",
        alt: "Integrated LMS - Applicant View",
        caption:
          "Integrated LMS environment for hiring applicants applying for Staff or Manager positions.",
      },
      {
        src: "/projects/imajica/lms-module-view.png",
        alt: "LMS Module View",
        caption:
          "Interactive training module view available for both Staff and Manager applicants.",
      },
      {
        src: "/projects/imajica/lms-admin-view.png",
        alt: "LMS Admin Create Module",
        caption:
          "Curriculum Manager where admins seamlessly add video titles, YouTube links, and assessment questions.",
      },
      {
        src: "/projects/imajica/patient-management.png",
        alt: "Imajica patient management interface",
        caption:
          "Patient profiles keeping essential details and treatment context easy to retrieve without digging through scattered records.",
      },
      {
        src: "/projects/imajica/client-scheduling.png",
        alt: "Imajica client scheduling interface",
        caption:
          "Scheduling built around real clinic workflows—coordinating clients, services, and available staff time.",
      },
      {
        src: "/projects/imajica/sales-report.png",
        alt: "Imajica sales reporting interface",
        caption:
          "Reports that turn activity into decisions—organizing sales, services, treatments, and profitability.",
      },
      {
        src: "/projects/imajica/Best-selling-treatment-reports.png",
        alt: "Best-Selling Treatment Reports",
        caption:
          "Performance ranking of clinic services and aesthetic treatment packages.",
      },
      {
        src: "/projects/imajica/product-profit-reports.png",
        alt: "Product Profit Margin Reports",
        caption: "SKU-level cost vs. retail profit margin breakdown.",
      },
      {
        src: "/projects/imajica/profit-loss-reports.png",
        alt: "Profit & Loss Statement Generator",
        caption: "Automated branch Profit & Loss financial summary.",
      },
      {
        src: "/projects/imajica/patient-details.png",
        alt: "Patient Profile & Clinical Details",
        caption:
          "Detailed patient consultation notes, package balances, and visit logs.",
      },
      {
        src: "/projects/imajica/product-management.png",
        alt: "Retail & Clinical Product Catalog",
        caption:
          "Product catalog management with pricing and stock thresholds.",
      },
      {
        src: "/projects/imajica/services-management.png",
        alt: "Aesthetic Services & Packages Configuration",
        caption:
          "Service menu and bundled treatment package configuration.",
      },
      {
        src: "/projects/imajica/stock-movements.png",
        alt: "Inventory Stock Movements Ledger",
        caption:
          "Audit trail for stock-in, stock-out, and clinic consumables.",
      },
      {
        src: "/projects/imajica/lms-applicant-module-view.png",
        alt: "Applicant Assessment View",
        caption: "Module assessment and graded questionnaire experience.",
      },
      {
        src: "/projects/imajica/lms-applicants-list.png",
        alt: "Applicant Screening Progress Tracker",
        caption:
          "HR view tracking applicant module completion and quiz scores.",
      },
      {
        src: "/projects/imajica/create-module.png",
        alt: "Curriculum Module Builder",
        caption:
          "Course builder for linking training videos and configuring assessments.",
      },
      {
        src: "/projects/imajica/new-client-support.png",
        alt: "Client Support & Inquiry Desk",
        caption: "Front-desk client intake and support workflow.",
      },
      {
        src: "/projects/imajica/login.png",
        alt: "Imajica login screen",
        caption:
          "Branded authentication portal for staff, managers, and applicants.",
      },
    ],
    techStack: ["PHP", "Laravel", "MySQL", "Bootstrap", "JavaScript"],
    keyFeatures: [
      "A clear starting point for every workday: operations dashboard surfacing appointments, cash flow, and clinic activity",
      "POS-styled booking layout customized for front-desk auditing of daily clients and services",
      "Integrated LMS with dedicated Applicant View, Module Player, and seamless YouTube-linked course creation",
      "Organized patient records, real-workflow client scheduling, and actionable Sales, P&L, and Profitability reports",
    ],
    architectureHighlights: [
      "100% solo-architected relational MySQL schema and Laravel MVC backend supporting multi-role clinic & LMS workflows",
      "Unified POS, inventory ledger, and financial reporting pipeline eliminating disconnected spreadsheets",
    ],
  },
  {
    slug: "multitop",
    number: "02",
    title: "Multi-top Distribution ERP & Delivery System",
    tagline:
      "Developed 100% independently as the sole full-stack developer—covering sales orders, shortage-aware inventory, sequential DR# withdrawals, and dispatch logistics.",
    shortDescription:
      "Built entirely by me from database schema to UI for Multi-top Distribution Corporation—unifying sales orders, per-client custom pricing, negative order balance (shortage) tracking, sequential batch withdrawals (DR#), truck loading/backloading, and collections.",
    fullDescription:
      "Designed and developed 100% independently as the sole developer for Multi-top Distribution Corporation—owning the entire system from relational MySQL modeling and REST APIs to the frontend views. Multi-top unifies wholesale distribution operations into one cohesive ERP: Sales Orders with custom per-client pricing, Warehouse Inventory where stock is deducted strictly upon physical withdrawal while excess ordered quantities surface in an expandable 'Product Inventory with Order Balance' shortage monitor, a Sequential Delivery Withdrawal engine (auto-generating DR# receipts and filtering products by sequence_order so dispatchers never double-withdraw items across multi-batch deliveries), Truck Dispatch & Final Loading/Backloading forms, Daily Collections/AR reports, and Employee IR/TR/Payroll reporting.",
    category: "Enterprise & ERP",
    workType: "Professional",
    year: "2025",
    status: "Shipped",
    role: "Sole Full-Stack Developer (100% Built by Me)",
    featured: true,
    accentColor: "#1D56F5",
    coverImage: "/projects/multitop/inventory-order-balance.png",
    metrics: [
      { value: "01", label: "Sole Developer (100%)" },
      { value: "DR#", label: "Sequential Dispatch Engine" },
      { value: "360°", label: "DB to UI Ownership" },
    ],
    screenshots: [
      {
        src: "/projects/multitop/inventory-order-balance.png",
        alt: "Multi-top Product Inventory & Order Balance Shortage Monitor",
        caption:
          "Warehouse stock manager paired with the expandable 'Product Inventory with Order Balance' table that flags per-customer stock shortages (-10 balance) in real time.",
      },
      {
        src: "/projects/multitop/sequential-withdrawal-dr.png",
        alt: "Multi-top Sequential Delivery Withdrawal (DR#) & Dispatch Team Engine",
        caption:
          "Sequential batch withdrawal workflow with auto-generated DR# receipts, sequence_order filtering to prevent duplicate product dispatch, truck crew assignment, and PDF export.",
      },
    ],
    techStack: [
      "PHP",
      "Laravel",
      "MySQL",
      "REST API",
      "Bootstrap",
      "JavaScript",
      "HTML2PDF",
    ],
    keyFeatures: [
      "100% Solo-Built Distribution ERP: end-to-end ownership across Sales Orders, Customer/Supplier directories, Per-Client Custom Pricing, Daily Collections, AR Reports, and Employee IR/TR/Payroll",
      "Product Inventory with Negative Order Balance (Shortage Monitor): stock deducts only upon physical withdrawal while unfulfilled customer order balances (-10 shortage) are tracked and dissolved automatically as subsequent withdrawals occur",
      "Sequential Delivery Withdrawal Engine (DR#): auto-generates Delivery Receipt numbers and filters order items by sequence_order (backed by a custom `php artisan products:sequence` CLI) to prevent double-withdrawing products across multi-batch deliveries",
      "Dispatch Team & Loading Logistics: links each withdrawal to Driver/Helper/Truck plates, Final Loading Forms, Final Backloading reconciliation, and downloadable DR PDFs",
    ],
    architectureHighlights: [
      "100% solo-architected Laravel backend, REST API endpoints (/api/inventory/products-with-balance, /api/sales-orders/{id}/withdrawal-products), and MySQL database",
      "Custom Artisan CLI (`ManageProductSequence`) and withdrawal-sequence state machine preventing warehouse dispatch errors",
    ],
  },
  {
    slug: "boti-bot",
    number: "03",
    title: "Boti-bot",
    tagline:
      "Document-first Jira task workspace, MCP server bridge, and two-stage autonomous Antigravity + Playwright QA engine.",
    shortDescription:
      "Connects to Jira via OAuth 2.0 (3LO) to surface requirement attachments (FRDs/IARs), exposes task context to AI agents via a JSON-RPC 2.0 MCP server, and verifies branch implementations inside an isolated Docker + Playwright QA sandbox.",
    fullDescription:
      "Boti-bot is a document-first Jira task workspace, autonomous QA verification engine, and Model Context Protocol (MCP) context bridge built with Next.js 16, React 19, TypeScript, Cloudflare Workers (Vinext), and Cloudflare D1 + Drizzle ORM. Instead of jumping between Jira tickets, scattered PDF/DOCX requirement specs, and local Git branches, Boti-bot brings the source documents into focus first. Its local QA runner executes a rigorous two-stage pipeline inside a read-only Docker container (botibot-qa:local): Stage 1 extracts every attachment page via PDF/OCR tools to synthesize cited acceptance criteria, and Stage 2 checks out target UI/API commits into disposable Git worktrees, provisions temporary role accounts, and drives headless Chromium/Playwright journeys to produce structured Passed/Failed/Inconclusive audit reports.",
    category: "AI & Developer Tools",
    workType: "Personal",
    year: "2026",
    status: "Building",
    role: "Creator & Systems Architect",
    featured: true,
    accentColor: "#087F80",
    coverImage: "/projects/boti-bot/task-workspace.png",
    metrics: [
      { value: "2-Stage", label: "Autonomous QA Pipeline" },
      { value: "MCP", label: "JSON-RPC 2.0 Bridge" },
      { value: "Docker", label: "Isolated Playwright Sandbox" },
    ],
    screenshots: [
      {
        src: "/projects/boti-bot/task-workspace.png",
        alt: "Boti-bot Jira Task Workspace & Antigravity QA Panel",
        caption:
          "Document-first Jira workspace displaying issue SM360-1754, attached FRD/IAR PDFs, MCP server tools, and the two-stage Antigravity QA verification report.",
      },
      {
        src: "/projects/boti-bot/playwright-evidence.png",
        alt: "Stage 1 FRD Extraction & Stage 2 Live Playwright Evidence",
        caption:
          "Real QA run artifacts showing Stage 1 FRD page rendering/OCR and Stage 2 headless Playwright browser verification across SM360-1754 and SM360-1783.",
      },
      {
        src: "/projects/boti-bot/qa-journey-superadmin.png",
        alt: "Playwright Automated Super Admin Journey",
        caption:
          "Captured Playwright evidence from journey-1-superadmin-filtered.png verifying Health Declaration filters, breadcrumbs, and table state.",
      },
      {
        src: "/projects/boti-bot/qa-journey-breakdown.png",
        alt: "Playwright Modal & Tuition Computation Verification",
        caption:
          "Captured Playwright evidence from SM360-1783 verifying the Tuition Balance Calculation Log breakdown modal.",
      },
    ],
    techStack: [
      "Next.js 16",
      "TypeScript",
      "Playwright & Docker",
      "MCP (JSON-RPC 2.0)",
      "Cloudflare Workers & D1",
      "Drizzle ORM",
      "Jira OAuth 2.0",
    ],
    keyFeatures: [
      "Task-First Jira Workspace: Atlassian OAuth 2.0 (3LO) integration with assigned-task Kanban board, ADF description parser, and inline PDF/DOCX/ODT attachment viewer",
      "Stage 1 Document Review: extracts every attachment page via pdftotext, pdftoppm, and Tesseract OCR to synthesize cited acceptance criteria with full page coverage checks",
      "Stage 2 Live App Verification: spins up disposable Git worktrees and an isolated Docker Compose stack with temporary role account provisioning and headless Playwright browser journeys",
      "Native MCP Server (/app/mcp): JSON-RPC 2.0 endpoint exposing get_task_context and get_attachment_text directly to AI coding agents",
    ],
    architectureHighlights: [
      "Strict host/container security boundary: QA runs inside an unprivileged, read-only Docker container (cap-drop=ALL, no-new-privileges) so target repos are never mutated",
      "Edge-ready Next.js 16 + Vinext deployment on Cloudflare Workers backed by Cloudflare D1 SQLite and Drizzle ORM",
    ],
    links: {
      repo: "https://github.com/manwelAC/boti-bot",
    },
  },
  {
    slug: "suma",
    number: "04",
    title: "Suma",
    tagline:
      "Money, made clear. A local-first Windows personal finance desktop app built with .NET 10 and WinUI 3.",
    shortDescription:
      "A privacy-first Windows desktop application crafted with C# / .NET 10, WinUI 3, EF Core 10, and SQLite featuring an Available to Spend (ATS) engine, strict currency isolation, cryptographic PIN lock, and 496 passing xUnit tests.",
    fullDescription:
      "Suma ('Money, made clear.') is a local-first, privacy-focused personal finance application for Windows built with C# / .NET 10, WinUI 3 (Windows App SDK), Entity Framework Core 10, and SQLite. Rather than overwhelming users with raw ledgers, Suma centers every decision around a single core invariant: Available to Spend = Included Account Balances − Protected Budget Remaining. It features multi-account management with strict currency isolation, period-based protected budgets, savings goals, recurring bills, cryptographic PIN lock protection, Windows Widget Board integration (Suma.Widgets), and Sumo—the friendly financial guardian mascot.",
    category: "Productivity & Systems",
    workType: "Personal",
    year: "2026",
    status: "Shipped",
    role: "Creator & Desktop Architect",
    featured: true,
    accentColor: "#4A7C59",
    coverImage: "/projects/suma/overview-ats.png",
    metrics: [
      { value: "496", label: "Passing xUnit Tests" },
      { value: ".NET 10", label: "WinUI 3 + EF Core 10" },
      { value: "100%", label: "Local-First SQLite" },
    ],
    screenshots: [
      {
        src: "/projects/suma/overview-ats.png",
        alt: "Suma WinUI 3 Overview & Available to Spend Dashboard",
        caption:
          "Suma Overview screen showcasing the Available to Spend (ATS) hero calculation, multi-account balances, active protected budget, and savings goals.",
      },
      {
        src: "/projects/suma/architecture-and-sumo.png",
        alt: "Suma 4-Layer .NET 10 Architecture & Sumo Mascot States",
        caption:
          "Clean 4-layer .NET 10 architecture (Domain, Application, Infrastructure, Desktop/Widgets) verified by 496 automated xUnit tests alongside Sumo mascot states.",
      },
    ],
    techStack: [
      "C# / .NET 10",
      "WinUI 3 (Windows App SDK)",
      "EF Core 10",
      "SQLite",
      "CommunityToolkit.Mvvm",
      "xUnit (496 Tests)",
    ],
    keyFeatures: [
      "Available to Spend (ATS) Engine: real-time calculation subtracting protected budget allocations from included account balances so you know what is truly safe to spend today",
      "Multi-Account & Strict Currency Isolation: manage Cash, Bank, E-Wallet, and Savings accounts without cross-currency rounding contamination",
      "Protected Budgets, Savings Goals & Recurring Obligations: period-based category allocations, goal progress tracking, and upcoming bill schedules",
      "100% Local-First Privacy & PIN Lock: offline SQLite storage, optional cryptographic PIN lock, atomic backup/restore, and Windows Widget Board companion",
    ],
    architectureHighlights: [
      "Clean 4-layer architecture (Suma.Domain, Suma.Application, Suma.Infrastructure, Suma.Desktop) backed by 496 automated xUnit tests",
      "Native WinUI 3 desktop experience with custom warm-editorial XAML theme tokens and zero cloud telemetry",
    ],
  },
  {
    slug: "nudgi",
    number: "05",
    title: "Nudgi",
    tagline:
      "Financial obligations, gently remembered. A calm, local-first recurring expense companion in Flutter.",
    shortDescription:
      "A 100% local-first recurring-expense reminder app built with Flutter, Riverpod v3, and Drift (SQLite), featuring a borderless Spatial UI, an expressive vole mascot, and dual-channel local push + Resend email nudges.",
    fullDescription:
      "Nudgi ('Financial obligations, gently remembered.') is a calm, local-first recurring-expense reminder companion built with Flutter, Riverpod v3, Drift (SQLite), and Supabase + Resend. Designed as an antidote to noisy spreadsheet trackers, Nudgi uses a borderless Spatial UI palette (#365C3A Forest Green on #FFFCF7 Warm Cream) and an expressive vole mascot across 10 emotion states. Its independent recurrence engine ensures future billing cycles exist by virtue of the schedule (where 'Pause is Not Delete'), while multi-tier reminder rules deliver both offline local phone notifications and automated cloud-assisted emails via Supabase Edge Functions and Resend.",
    category: "Productivity & Systems",
    workType: "Personal",
    year: "2026",
    status: "Shipped",
    role: "Creator & Mobile Developer",
    featured: true,
    accentColor: "#365C3A",
    coverImage: "/projects/nudgi/home-spatial-ui.png",
    metrics: [
      { value: "100%", label: "Local-First Drift DB" },
      { value: "2-Ch", label: "Local Push + Email" },
      { value: "30+", label: "Clay Avatars & Mascots" },
    ],
    screenshots: [
      {
        src: "/projects/nudgi/home-spatial-ui.png",
        alt: "Nudgi Spatial UI Home Screen & Recurrence Overview",
        caption:
          "Nudgi's warm Spatial UI home screen featuring the morning greeting hero card, active/due-today counters, and upcoming recurring bills.",
      },
      {
        src: "/projects/nudgi/mascot-avatar-system.png",
        alt: "Nudgi Vole Mascot Emotion System & 30 Bundled 3D Clay Avatars",
        caption:
          "Expressive vole mascot emotion states paired with 30 bundled 3D clay faceless avatars and portable ZIP/CSV ledger backup.",
      },
    ],
    techStack: [
      "Flutter",
      "Dart",
      "Riverpod v3",
      "Drift (SQLite)",
      "Supabase Edge Functions",
      "Resend",
    ],
    keyFeatures: [
      "Independent Recurrence Engine: supports Monthly, Weekly, Yearly, and Custom day intervals where pausing an expense preserves its full payment history",
      "Multi-Tier Dual-Channel Reminders: stack multiple reminder offsets (e.g., 7 days before, 2 days before, due day) across local phone push and automated Resend email nudges",
      "Spatial UI & Vole Mascot System: borderless tonal hierarchy paired with 10 mascot emotion states and 30 bundled 3D clay avatars for zero-upload privacy",
      "Portable ZIP + CSV Backup & Restore: one-tap export and restoration of recurring expenses, reminder rules, and occurrence history",
    ],
    architectureHighlights: [
      "Offline-first Drift (SQLite) persistence reconciled automatically on app resume and connectivity changes via Riverpod v3 providers",
      "Decoupled email queue syncing idempotent reminder jobs to Supabase Edge Functions + Resend when online",
    ],
    links: {
      repo: "https://github.com/manwelAC/nudgi",
    },
  },
  {
    slug: "code-terra",
    number: "06",
    title: "Code Terra",
    tagline:
      "Your code, rendered as terrain. A local-first repository atlas that shapes codebases into interactive 3D-projected topographic mountains.",
    shortDescription:
      "A local-first repository atlas built with Next.js 16, React 19, TypeScript, HTML5 Canvas procedural terrain projection, and Cloudflare Workers & D1—where mountain height maps to LOC, footprint maps to files, and contour rings map to commits.",
    fullDescription:
      "Code Terra ('Your code, rendered as terrain.') is a local-first interactive repository atlas built with Next.js 16, React 19, TypeScript, a custom HTML5 Canvas 2D procedural terrain engine, Cloudflare Workers (Vinext), and Cloudflare D1 + Drizzle ORM. It transforms software repositories into a living topographic landscape where each codebase rises as a multi-ring contour mountain: mountain elevation represents Lines of Code (LOC), territorial footprint represents File Count, concentric contour rings represent Commit History, and summit color reflects primary language and recent activity. Users can scrub across years (2019–2026), filter peaks by language, inspect 90-day commit rhythms, or export the entire atlas as a portable JSON snapshot without ever uploading source code.",
    category: "AI & Developer Tools",
    workType: "Personal",
    year: "2026",
    status: "Shipped",
    role: "Creator & Systems Developer",
    featured: true,
    accentColor: "#8291FF",
    coverImage: "/projects/code-terra/atlas-terrain.png",
    metrics: [
      { value: "3D", label: "Procedural Contour Canvas" },
      { value: "15 Rings", label: "Topographic Commit Strata" },
      { value: "100%", label: "Local-Only & Read-Only" },
    ],
    screenshots: [
      {
        src: "/projects/code-terra/atlas-terrain.png",
        alt: "Code Terra Interactive Topographic Repository Atlas",
        caption:
          "Interactive topographic terrain stage rendering local repositories as 3D-projected contour mountains alongside the Selected Mountain Inspector and 2019–2026 timeline scrubber.",
      },
      {
        src: "/projects/code-terra/map-key-and-index.png",
        alt: "Code Terra Map Key & Mapped Repositories Directory",
        caption:
          "Deterministic terrain encoding key (Elevation = LOC, Footprint = Files, Contours = Commits, Spectrum = Language) and the clickable Repository Index table.",
      },
    ],
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "HTML5 Canvas (Procedural 3D)",
      "Cloudflare Workers & D1",
      "Drizzle ORM",
      "Tailwind CSS v4",
    ],
    keyFeatures: [
      "Custom Procedural Topographic Canvas: renders multi-ring contour mountains using deterministic trigonometric noise, depth-sorted polygon cells, directional lighting, and additive contour lines without heavy WebGL dependencies",
      "Deterministic Code-to-Terrain Encoding: maps Lines of Code to vertical elevation, file count to base spread, commit history to 15 concentric contour strata, and language to summit hue",
      "Timeline Scrubber (2019–2026) & Language Filtering: scrub through years to watch repositories emerge and grow over time, or filter peaks by language and zoom level (90%–115%)",
      "Local-Only Privacy & Portable World Export: connects local repositories in read-only mode without storing source code and exports portable code-terra-world.json snapshots",
    ],
    architectureHighlights: [
      "Zero-dependency HTML5 Canvas 2D projection engine (TerrainCanvas) supporting interactive hover/click hit-testing, coordinate reticles, and smooth animated transitions",
      "Edge-ready Next.js 16 + Vinext architecture backed by Cloudflare D1 SQLite and Drizzle ORM",
    ],
  },
  {
    slug: "docs-for-me",
    number: "07",
    title: "Docs for Me",
    tagline:
      "Python CLI & Electron + React workspace that creates programmer-friendly guides for files, folders, and Git changes.",
    shortDescription:
      "Started as a terminal-first Python CLI and evolved into an Electron + React desktop workspace powered by local Ollama AI to map file roles, line diffs, and ready-to-copy Markdown review guides & commit messages.",
    fullDescription:
      "docs-for-me is a Python CLI and desktop companion that creates programmer-friendly guides for files, folders, and Git changes. What started as a V1 terminal tool evolved into an interactive Electron + React interface enhanced by local Ollama AI. When the system reviews repository changes, it builds a Change Map identifying each file's role, line additions/deletions, and confidence score—and produces ready-to-copy Markdown documentation and commit messages without relying on external cloud APIs.",
    category: "AI & Developer Tools",
    workType: "Personal",
    year: "2026",
    status: "Building",
    role: "Creator & Developer",
    featured: true,
    accentColor: "#6366F1",
    coverImage: "/projects/docs-for-me/docs-for-me-interface.png",
    screenshots: [
      {
        src: "/projects/docs-for-me/docs-for-me-interface.png",
        alt: "Ollama as the Local AI in docs-for-me",
        caption:
          "Desktop workspace powered by local Ollama AI to enhance findings and commit message accuracy.",
      },
      {
        src: "/projects/docs-for-me/change-map.png",
        alt: "Change Map View",
        caption:
          "Change Map identifying what each file does, total lines, lines added/removed, and system confidence score.",
      },
      {
        src: "/projects/docs-for-me/changes.png",
        alt: "Changes Result Markdown Output",
        caption:
          "Ready-to-copy Markdown summary for repository change references and commit messages.",
      },
      {
        src: "/projects/docs-for-me/commit-messages.png",
        alt: "Commit Message Synthesis",
        caption:
          "Automated commit message generator grounded in actual repository changes.",
      },
      {
        src: "/projects/docs-for-me/docs-for-me-terminal.png",
        alt: "The V1 - CLI Terminal",
        caption:
          "The V1 CLI Terminal—where docs-for-me began as a pure terminal tool for any project directory.",
      },
    ],
    techStack: ["Python", "Electron", "React", "Ollama (Local AI)", "Git CLI"],
    keyFeatures: [
      "The V1 CLI Terminal: run directly inside any project terminal for instant developer guides",
      "Change Map: identifies what a file does, total lines, additions/removals, and confidence scores",
      "Changes Result: generates ready-to-copy Markdown references and semantic commit messages",
      "Ollama Local AI integration: enhances static code findings with local LLM reasoning",
    ],
    architectureHighlights: [
      "Hybrid Python CLI + Electron/React architecture bridging fast local Git inspection with a visual workspace",
      "Local Ollama integration for private, zero-cloud code change summarization",
    ],
  },
  {
    slug: "demoshield",
    number: "08",
    title: "DemoShield",
    tagline:
      "Local desktop application for reviewing screen recordings, locating sensitive info, and exporting sanitized videos.",
    shortDescription:
      "A CapCut-inspired local desktop app built with Python and Electron that uses FFprobe, OpenCV frame comparison, and PaddleOCR to detect and redact exposed secrets in screen recordings.",
    fullDescription:
      "DemoShield is a local desktop application for reviewing screen recordings, locating sensitive information, applying redactions, and exporting a sanitized copy of the video. Featuring a CapCut-like timeline interface, it runs a secure offline pipeline: FFprobe reads file metadata, OpenCV extracts and compares video frames on visual change, and PaddleOCR scans text directly from the screen to detect and map sensitive patterns (like Bearer tokens or secret keys) with exact exposure timestamps.",
    category: "AI & Developer Tools",
    workType: "Personal",
    year: "2026",
    status: "Building",
    role: "Creator & Developer",
    featured: true,
    accentColor: "#14B8A6",
    coverImage: "/projects/demoshield/findings.png",
    screenshots: [
      {
        src: "/projects/demoshield/findings.png",
        alt: "DemoShield Findings Display",
        caption:
          "Findings Display mapping critical exposed secrets (99% confidence Bearer token) and exact exposure timestamps.",
      },
      {
        src: "/projects/demoshield/interface.png",
        alt: "DemoShield CapCut-like Interface",
        caption:
          "CapCut-inspired dark workstation where users import local videos they want to inspect.",
      },
      {
        src: "/projects/demoshield/inspecting-video.png",
        alt: "Offline Video Inspecting Pipeline",
        caption:
          "Offline inspection pipeline combining FFprobe metadata, OpenCV visual-change frame extraction, and PaddleOCR text scanning.",
      },
    ],
    techStack: [
      "Python",
      "JavaScript",
      "Electron",
      "TypeScript",
      "OpenCV & PaddleOCR",
      "FFprobe",
    ],
    keyFeatures: [
      "CapCut-inspired desktop interface for importing and scrubbing local developer screen recordings",
      "Secure offline video inspection pipeline using FFprobe, OpenCV visual frame diffing, and PaddleOCR",
      "Findings Display mapping critical exposed credentials and exact timestamp intervals",
      "Bounding-box redaction workflow to export sanitized, share-ready product demos",
    ],
    architectureHighlights: [
      "Visual-change frame sampling via OpenCV avoids redundant OCR passes on static video frames",
      "100% offline desktop execution ensuring sensitive recordings never leave the local machine",
    ],
  },
  {
    slug: "maxtel",
    number: "09",
    title: "Maxtel HRIS & Payroll System",
    tagline:
      "Contributed key HR compliance & operations modules: IR → NTE → DR workflow, Personnel Action (PAN), Performance Improvement, Unlisted Locations, and Accountabilities.",
    shortDescription:
      "Feature contributions to Maxtel's enterprise HRIS-Payroll platform: built the IR → NTE → DR compliance pipeline, Personnel Action Form (PAN), Performance Improvement notes, Unlisted Locations biometric auditing, and Employee Accountabilities tracking.",
    fullDescription:
      "For Maxtel's HRIS & Payroll System, I developed and contributed five core HR operations and compliance modules. My contributions encompass: (1) the end-to-end IR → NTE → DR employee relations workflow (Incident Reports, Notice to Explain with employee replies, and Disciplinary Action resolutions with Excel exports); (2) the Personnel Action Form (PAN) supporting Employment, Regularization, Merit/General Increases, Transfers, Promotions, and Reclassifications with a From → To particulars matrix and role-based HR Group filtering; (3) Performance Improvement Management with threaded coaching replies and file attachments; (4) Unlisted Locations & Low Attendance Auditing to cross-check mobile biometric check-ins (bio_id) against approved locations; and (5) Employee Accountabilities with both an Admin property ledger (.xlsx export) and a Staff self-service portal ('My Accountabilities').",
    category: "Enterprise & ERP",
    workType: "Professional",
    year: "2025 — 2026",
    status: "Shipped",
    role: "Full-Stack Developer (Contributed Modules)",
    featured: false,
    accentColor: "#2F47BA",
    coverImage: "/projects/maxtel/pan-and-ir-nte-dr.png",
    metrics: [
      { value: "05", label: "Contributed Modules" },
      { value: "PAN", label: "From → To Action Matrix" },
      { value: "IR→DR", label: "Compliance Pipeline" },
    ],
    screenshots: [
      {
        src: "/projects/maxtel/pan-and-ir-nte-dr.png",
        alt: "Maxtel Personnel Action Notice (PAN), IR -> NTE -> DR & Performance Improvement",
        caption:
          "My contributed HR compliance modules: Personnel Action Notice (From -> To particulars matrix), IR -> NTE -> DR pipeline, and threaded Performance Improvement notes.",
      },
      {
        src: "/projects/maxtel/unlisted-locations-accountabilities.png",
        alt: "Maxtel Unlisted Locations Biometric Audit & Employee Accountabilities Ledger",
        caption:
          "My contributed Unlisted Locations field check-in auditor (with Low Attendance & Unlisted Reports) and Employee Accountabilities asset tracker.",
      },
    ],
    techStack: [
      "PHP",
      "Laravel",
      "MySQL",
      "Bootstrap",
      "jQuery & DataTables",
      "Select2",
      "PhpSpreadsheet",
    ],
    keyFeatures: [
      "Contributed Module — IR → NTE → DR Workflow: end-to-end Incident Reports, Notice to Explain (with threaded employee replies), and Disciplinary Action resolutions with Excel exports",
      "Contributed Module — Personnel Action Form (PAN): tracks Promotions, Regularizations, Transfers, and Salary/Schedule changes via a From → To particulars table scoped by HR Group permissions",
      "Contributed Module — Performance Improvement Management: coaching case notes with file attachments, threaded employee replies, and HR Group access control",
      "Contributed Modules — Unlisted Locations & Accountabilities: flags off-site mobile biometric check-ins (`tbl_listed_locations` whitelisting + Low Attendance reports) and tracks assigned company property across Admin and Staff self-service views",
    ],
  },
  {
    slug: "shinryo",
    number: "10",
    title: "Shinryo Philippines Payroll & DTR System",
    tagline:
      "Contributed the complete DTR Management engine, biometric att_logs ingestion, and automated cutoff calculation reports.",
    shortDescription:
      "Feature contribution for Shinryo Philippines Company, Inc.: built the single-page DTR Management module, biometric att_logs uploader, and automated payroll cutoff calculation reports.",
    fullDescription:
      "For the Shinryo Philippines Payroll System, I contributed and built the complete DTR Management module and its automated cutoff calculation reports from the ground up. I designed a seamless single-page DTR Management interface where HR can process Time-In/Out edits, Schedule Management, and Leave Management without jumping across separate pages. Since Shinryo relies heavily on biometric hardware producing raw `att_logs` files, the module I built automatically filters dates by payroll cutoff upon upload and computes RT, OT, XSOT, NDOT, Lates, and Undertime seamlessly.",
    category: "Enterprise & ERP",
    workType: "Professional",
    year: "2025",
    status: "Shipped",
    role: "Full-Stack Developer (Contributed DTR Module)",
    featured: false,
    accentColor: "#3B82F6",
    coverImage: "/projects/shinryo/DTR-management.png",
    screenshots: [
      {
        src: "/projects/shinryo/DTR-management.png",
        alt: "Seamless DTR Management Interface",
        caption:
          "Single-page DTR Management interface handling Time In/Out edits, Schedule Management, and Leave Management in one place.",
      },
      {
        src: "/projects/shinryo/dtr-report.png",
        alt: "Automated DTR Cutoff Report",
        caption:
          "Automated DTR Report summarizing employee hours per cutoff: RT, OT, XSOT, NDOT, and other hour types.",
      },
      {
        src: "/projects/shinryo/att-logs-upload.png",
        alt: "Upload Biometric ATT Logs",
        caption:
          "Biometric att_logs uploader that filters dates by payroll cutoff and triggers instant DTR calculations.",
      },
      {
        src: "/projects/shinryo/dtr-statistics.png",
        alt: "Employee Attendance & DTR Analytics",
        caption:
          "Departmental attendance statistics and hour distribution overview.",
      },
      {
        src: "/projects/shinryo/dtr-preview.png",
        alt: "Exportable DTR Preview",
        caption: "Print- and export-ready Daily Time Record summary sheet.",
      },
      {
        src: "/projects/shinryo/edit-schedule.png",
        alt: "Shift & Rest Day Schedule Manager",
        caption:
          "Flexible shift assignment and rest-day configuration per employee.",
      },
      {
        src: "/projects/shinryo/edit-time.png",
        alt: "Manual Time-In/Out Adjustment Modal",
        caption:
          "Authorized time-log correction modal with audit remarks tracking.",
      },
      {
        src: "/projects/shinryo/file-leave.png",
        alt: "Leave Filing & Credit Deduction",
        caption:
          "Integrated leave application workflow linked to employee leave credit balances.",
      },
      {
        src: "/projects/shinryo/login.png",
        alt: "Shinryo login screen",
        caption: "Secure enterprise sign-in for HR and payroll administrators.",
      },
    ],
    techStack: ["PHP", "Laravel", "MySQL", "Bootstrap", "JavaScript"],
    keyFeatures: [
      "Seamless single-page DTR Management combining Edit Time In/Out, Schedule Management, and Leave Filing",
      "Direct biometric `att_logs` file ingestion with automatic payroll cutoff date filtering",
      "Automated DTR Cutoff Reports computing RT, OT, XSOT, NDOT, Lates, and Undertime",
      "Print-ready DTR previews and departmental attendance analytics",
    ],
  },
  {
    slug: "delibites",
    number: "11",
    title: "Delibites HRIS & Payroll System",
    tagline:
      "Contributed the end-to-end IR → NTE → DR compliance workflow, NTE Article Library, and departmental NTE Monitoring.",
    shortDescription:
      "Feature contribution for Delibites Concepts Corporation: built the employee relations compliance pipeline covering Incident Reports (IR), Notice to Explain (NTE), Article Library sanctions, and Disciplinary Actions (DA).",
    fullDescription:
      "For the Delibites Concepts Corporation HRIS-Payroll platform, I contributed the comprehensive IR → NTE → DR compliance workflow. The modules I built begin with Incident Reports (capturing where it happened, witnesses, and involved employees), flow into NTE Management (where involved employees explain their side using a custom rich-text editor layout), provide cross-departmental NTE Monitoring, reference a standardized NTE Article Library of corporate rulings and sanctions, and conclude with formal Disciplinary Action tracking.",
    category: "Enterprise & ERP",
    workType: "Professional",
    year: "2026",
    status: "Shipped",
    role: "Full-Stack Developer (Contributed IR→NTE→DR Modules)",
    featured: false,
    accentColor: "#10B981",
    coverImage: "/projects/delibites/nte-management.png",
    screenshots: [
      {
        src: "/projects/delibites/nte-management.png",
        alt: "Delibites NTE Management Dashboard",
        caption:
          "NTE Management (Phase 2) connected directly to Incident Reports with custom rich-text editor creation.",
      },
      {
        src: "/projects/delibites/incident-report.png",
        alt: "Incident Report Filing",
        caption:
          "Incident Report (Phase 1) documenting workplace incidents, locations, witnesses, and involved staff.",
      },
      {
        src: "/projects/delibites/nte-monitoring.png",
        alt: "Departmental NTE Monitoring",
        caption:
          "NTE Monitoring where HR and admins track NTE statuses across all company departments.",
      },
      {
        src: "/projects/delibites/nte-article-library.png",
        alt: "NTE Article Library & Sanctions",
        caption:
          "Article Library storing corporate rulings, policy articles, and progressive infraction sanctions.",
      },
      {
        src: "/projects/delibites/disciplinary-action.png",
        alt: "Disciplinary Action Resolution",
        caption:
          "Disciplinary Action (final phase) where HR records the formal resolution and sanction decision.",
      },
      {
        src: "/projects/delibites/login.png",
        alt: "Delibites login screen",
        caption:
          "Branded authentication portal for Delibites Concepts Corporation.",
      },
    ],
    techStack: ["PHP", "Laravel", "MySQL", "Bootstrap", "JavaScript"],
    keyFeatures: [
      "Complete IR → NTE → DR → DTR compliance pipeline from initial incident report to final HR decision",
      "Custom NTE creation interface with rich-text formatting connected directly to Incident Reports",
      "Cross-department NTE Monitoring dashboard tracking Ongoing, Closed, and Dropped cases",
      "Built-in NTE Article Library mapping corporate policy articles to progressive disciplinary sanctions",
    ],
  },
  {
    slug: "injap",
    number: "12",
    title: "Injap (Innovation Japan) & Inco Wallet",
    tagline:
      "Contributed the custom Inco Wallet currency system, commission-based Product Marketplace, and built-in Member Chat for Innovation Japan (一般社団法人).",
    shortDescription:
      "Feature contributions for Innovation Japan (INJAP): built the custom Inco Wallet multi-fund currency system, Super Admin-approved product marketplace with automated commissions, and built-in member chat.",
    fullDescription:
      "Innovation Japan (INJAP) is a registered non-profit general incorporated association (一般社団法人) in Japan. For this platform, I contributed three core modules: the custom 'Inco Wallet' currency system (enabling members to hold balances across Social/Charity/Available ledgers, transfer funds, and avail products), the Product Marketplace where members submit listings for Super Admin approval with automated platform commission calculation, and the built-in Conversation interface so members can message Super Admins directly without external chat apps.",
    category: "Enterprise & ERP",
    workType: "Professional",
    year: "2025",
    status: "Shipped",
    role: "Full-Stack Developer (Contributed Wallet, Marketplace & Chat)",
    featured: false,
    accentColor: "#F97316",
    coverImage: "/projects/injap/product-browse.png",
    screenshots: [
      {
        src: "/projects/injap/product-browse.png",
        alt: "Injap Product Browse Marketplace",
        caption:
          "Marketplace where members browse, avail, and submit products with Super Admin approval and commission tracking.",
      },
      {
        src: "/projects/injap/inco-wallet.png",
        alt: "Inco Wallet System",
        caption:
          "Custom Inco Wallet currency system breaking down Social, Charity, Other, Deduction, and Available funds.",
      },
      {
        src: "/projects/injap/transfer-wallet.png",
        alt: "Inco Fund Transfer",
        caption:
          "Wallet-to-wallet Inco currency transfer workflow across members.",
      },
      {
        src: "/projects/injap/conversations.png",
        alt: "Injap Built-In Chat Interface",
        caption:
          "Dedicated in-app conversation system allowing members to message the Super Admin directly without external chat apps.",
      },
      {
        src: "/projects/injap/product-avail.png",
        alt: "Product Availment Flow",
        caption: "Product detail and Inco Wallet checkout availment modal.",
      },
      {
        src: "/projects/injap/product-creation.png",
        alt: "Member Product Submission",
        caption:
          "Self-serve product listing form with Super Admin approval workflow.",
      },
      {
        src: "/projects/injap/login.png",
        alt: "Injap login screen",
        caption: "Innovation Japan member authentication portal.",
      },
    ],
    techStack: ["PHP", "Laravel", "MySQL", "Bootstrap", "JavaScript"],
    keyFeatures: [
      "Custom 'Inco Wallet' multi-fund currency system for holding balances, transferring funds, and availing items",
      "Member-driven Product Marketplace with Super Admin approval and automated platform commission split",
      "Built-in Member-to-Superadmin Chat Interface eliminating the need for external social messaging apps",
      "Auditable fund transfer and multi-ledger balance breakdown",
    ],
  },
  {
    slug: "balitaan",
    number: "13",
    title: "Balitaan",
    tagline:
      "Crowdsourced local price checker for Filipinos—answering 'What does this cost near me right now?'",
    shortDescription:
      "A hyperlocal community price-checking and social platform for Filipinos featuring custom cultural character onboarding, 5km Nearby feeds, and Philippine price maps.",
    fullDescription:
      "Balitaan is a crowdsourced local price checker for Filipinos designed to answer: 'What does this cost near me right now?' Users publish local price reports, browse personalized 'For You' updates or 'Nearby' posts within a 5km radius, inspect price pins across the Philippines on an interactive Map, and add community context through votes, comments, and user profiles. During onboarding, users pick custom-illustrated Filipino cultural characters instead of personal photos to keep community participation privacy-friendly.",
    category: "Consumer & Social",
    workType: "Personal",
    year: "2026",
    status: "Archived",
    archiveReason:
      "Balitaan is a large-scale social platform built to practice high-volume data architecture (Next.js + Laravel + PostgreSQL + Redis). As an independent developer, ongoing server, database, and map hosting costs led me to archive the live deployment for now—until I can properly fund a public rollout.",
    role: "Creator & Full-Stack Developer",
    featured: true,
    accentColor: "#8B5CF6",
    coverImage: "/projects/balitaan/onboarding.png",
    screenshots: [
      {
        src: "/projects/balitaan/onboarding.png",
        alt: "Balitaan Cultural Character Onboarding",
        caption:
          "Onboarding flow using custom Filipino cultural character avatars instead of personal photos for privacy.",
      },
      {
        src: "/projects/balitaan/map.png",
        alt: "Philippine Price Maps ('Presyo sa Mapa')",
        caption:
          "Interactive Maps feature displaying crowdsourced commodity prices and reports across the Philippines.",
      },
      {
        src: "/projects/balitaan/foryou-page.png",
        alt: "Balitaan For You Feed",
        caption:
          "Main 'For You' community attraction alongside the 5km-radius 'Nearby' price feed.",
      },
      {
        src: "/projects/balitaan/nearby.png",
        alt: "Nearby 5km Radius Feed",
        caption:
          "Proximity feed surfacing local price reports within 5km of the user's location.",
      },
      {
        src: "/projects/balitaan/onboarding-fyp.png",
        alt: "Personalize Your Feed",
        caption:
          "Algorithm calibration step where users choose the categories and commodities they want to follow.",
      },
      {
        src: "/projects/balitaan/profile-viewing.png",
        alt: "Search & View Other Users",
        caption:
          "User search and community contributor profile viewing.",
      },
      {
        src: "/projects/balitaan/login.png",
        alt: "Balitaan login screen",
        caption: "Clean, welcoming community sign-in screen.",
      },
    ],
    techStack: ["Next.js", "Laravel", "PostgreSQL", "TypeScript", "Redis"],
    keyFeatures: [
      "Character-first Onboarding: 18 custom Filipino cultural avatars so users stay anonymous while contributing",
      "For You & 5km Nearby Feeds: personalized algorithmic feed plus hyperlocal 5km proximity discovery",
      "Presyo sa Mapa: interactive Philippine map plotting crowdsourced local commodity prices",
      "Social discovery: user search, contributor profiles, community voting, and discussion threads",
    ],
    architectureHighlights: [
      "Decoupled Next.js + TypeScript frontend communicating with a Laravel API, PostgreSQL database, and Redis cache",
      "Designed to practice large-scale social feed and geospatial query patterns",
    ],
  },
  {
    slug: "check-me-up",
    number: "14",
    title: "Check me Up",
    tagline:
      "Local-first distraction and focus tracker for your terminal & desktop.",
    shortDescription:
      "Runs a lightweight background daemon, watches the currently focused window, detects idle time, stores everything locally, and renders readable daily or weekly focus reports.",
    fullDescription:
      "A local-first distraction and focus tracker for your terminal and desktop. check-me-up runs a small background daemon, watches the currently focused window, detects idle walk-away time, stores everything on your machine (private by default in local SQLite), and renders readable daily or weekly reports when you ask for them—complete with an active session dashboard and a GitHub-style productivity calendar heatmap.",
    category: "Productivity & Systems",
    workType: "Personal",
    year: "2026",
    status: "Shipped",
    role: "Creator & Developer",
    featured: false,
    accentColor: "#10B981",
    coverImage: "/projects/check-me-up/cmeup-1.png",
    screenshots: [
      {
        src: "/projects/check-me-up/cmeup-1.png",
        alt: "Check me Up Active Session Dashboard",
        caption:
          "Dashboard tracking your active session, what you're doing currently, and a multi-month productivity calendar.",
      },
      {
        src: "/projects/check-me-up/cmeup-2.png",
        alt: "Check me Up Weekly Summary",
        caption:
          "Weekly breakdown summary analyzing total focus hours, walk-away idle time, and whether your week was productive.",
      },
    ],
    techStack: ["JavaScript", "Daemon", "Electron", "HTML", "Local SQLite"],
    keyFeatures: [
      "Lightweight background daemon that watches the active OS window and detects idle time automatically",
      "100% local-first storage—every session stays on your machine with zero cloud telemetry",
      "Active Session Dashboard with live focus status and GitHub-style consistency heatmap",
      "Readable Daily & Weekly Summary reports highlighting productive streaks and unclassified distraction apps",
    ],
  },
  {
    slug: "wingman",
    number: "15",
    title: "Wingman",
    tagline:
      "Personal management mobile app for game boosters (pilots)—'Your partner in grind.'",
    shortDescription:
      "Designed for game boosters (pilots) to log jobs, track grind progress, manage their client list, and configure custom pricing and payment methods from a mobile app.",
    fullDescription:
      "Wingman is a personal management tool designed for game boosters (pilots) to organize and track their boosting work in one place. Instead of managing everything manually across spreadsheets and chat DMs, pilots can log their jobs, monitor pending/ongoing/completed grinds and earnings on a mobile dashboard, store reusable client profiles, create pilots via an interactive chat-style flow, and customize their payment methods and pricing.",
    category: "Consumer & Social",
    workType: "Personal",
    year: "2025",
    status: "Archived",
    archiveReason:
      "Built as a complete mobile-first web application; archived due to recurring domain, server hosting, and Google Play / App Store publishing budget constraints.",
    role: "Creator & Full-Stack Developer",
    featured: false,
    accentColor: "#F43F5E",
    coverImage: "/projects/wingman/dashboard.png",
    screenshots: [
      {
        src: "/projects/wingman/dashboard.png",
        alt: "Wingman Pilot Dashboard",
        caption:
          "Dashboard summarizing pending, ongoing, and completed grinds alongside total pilot earnings.",
      },
      {
        src: "/projects/wingman/landing.png",
        alt: "Wingman mobile app landing screen",
        caption:
          "Mobile landing screen with Wingman ('Your partner in grind') branding.",
      },
      {
        src: "/projects/wingman/customerpage.png",
        alt: "Wingman Client Management",
        caption:
          "Client Management module storing reusable customer details so pilots don't re-encode repeat clients.",
      },
      {
        src: "/projects/wingman/create-pilot.png",
        alt: "Chat-Style Pilot Creation",
        caption:
          "Interactive chat-interface workflow for creating and configuring new pilot jobs.",
      },
      {
        src: "/projects/wingman/payment-tracking.png",
        alt: "Customized Payment Methods & Tracking",
        caption:
          "Customizable payment method setup and payout status tracking.",
      },
      {
        src: "/projects/wingman/customer-management.png",
        alt: "Customer Directory & Order History",
        caption: "Directory view tracking client accounts and active orders.",
      },
      {
        src: "/projects/wingman/price-management.png",
        alt: "Service Tier & Price Management",
        caption: "Custom pricing setup for different game ranks and services.",
      },
    ],
    techStack: ["PHP", "Laravel", "MySQL", "Bootstrap", "Mobile Web UI"],
    keyFeatures: [
      "Wingman Dashboard summarizing pending, ongoing, and completed grinds with live earnings totals",
      "Reusable Client Management so pilots never have to re-encode repeat customer credentials or notes",
      "Interactive chat-style Pilot Creation flow for logging new boosting jobs quickly",
      "Customized Payment Methods and service pricing configuration",
    ],
  },
];

export function getFeaturedProjects(): ProjectItem[] {
  return projectsData.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return projectsData.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category?: string): ProjectItem[] {
  if (!category || category === "All") return projectsData;
  return projectsData.filter((p) => p.category === category);
}
