"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Save,
  Copy,
  Check,
  Download,
  Eye,
  Code2,
  FileText,
  FolderGit2,
  Sparkles,
  Trash2,
  ArrowUpRight,
} from "lucide-react";
import { usePortfolio } from "@/context/PortfolioContext";
import { MarkdownRenderer } from "@/components/blog/MarkdownRenderer";
import { projectsData, PROJECT_CATEGORIES } from "@/data/projects";
import { BlogPost, ProjectCategory } from "@/types/portfolio";

export default function StudioPage() {
  const router = useRouter();
  const { blogs, addCustomBlog, deleteCustomBlog, refreshBlogs } =
    usePortfolio();
  const [activeTab, setActiveTab] = useState<"blog" | "project">("blog");

  // Blog Creator State
  const [title, setTitle] = useState(
    "How I Build Clean, Local-First Software Systems"
  );
  const [slug, setSlug] = useState("how-i-build-clean-local-first-systems");
  const [category, setCategory] = useState("Architecture");
  const [tagsInput, setTagsInput] = useState(
    "Next.js, TypeScript, Local-First, Systems"
  );
  const [excerpt, setExcerpt] = useState(
    "A practical guide to structuring modular full-stack applications and local AI developer tools that scale cleanly."
  );
  const [relatedProjectSlug, setRelatedProjectSlug] = useState("docs-for-me");
  const [coverImage, setCoverImage] = useState(
    "/projects/docs-for-me/docs-for-me-interface.png"
  );
  const [content, setContent] = useState(`## Designing for Long-Term Reusability

When building production software—whether it's an enterprise ERP or a developer tool—the best architecture is one you can extend in minutes without rewriting boilerplate.

### Core Principles I Follow:
- **Single Source of Truth:** Keep data contracts strictly typed in \`src/types/portfolio.ts\`.
- **Zero-Friction Publishing:** Write articles in Markdown or directly inside this studio.
- **Fast Local Feedback:** Use local intelligence and clean UI primitives.

\`\`\`typescript
export function shipFeature(name: string) {
  return {
    feature: name,
    status: "Production Ready",
  };
}
\`\`\`

> Tip: Click **Publish to Project** below to save this post directly as a Markdown file in \`src/content/blogs/\` and see it live on the homepage!`);

  const [previewMode, setPreviewMode] = useState<"split" | "preview">("split");
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState<string | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);

  // Project Generator State
  const [projTitle, setProjTitle] = useState("My Next System");
  const [projSlug, setProjSlug] = useState("my-next-system");
  const [projTagline, setProjTagline] = useState(
    "High-velocity operational platform built with Next.js."
  );
  const [projCategory, setProjCategory] = useState<ProjectCategory>(
    "AI & Developer Tools"
  );
  const [projYear, setProjYear] = useState("2026");
  const [projRole, setProjRole] = useState("Lead Full-Stack Engineer");
  const [projTech, setProjTech] = useState(
    "Next.js, TypeScript, Tailwind CSS, PostgreSQL"
  );
  const [projFeatures, setProjFeatures] = useState(
    "Real-time telemetry dashboard\nRole-based access control\nAutomated PDF & CSV reporting"
  );
  const [projScreensInput, setProjScreensInput] = useState(
    "dashboard.png | Main operational overview\nsettings.png | System configuration view"
  );
  const [copiedProjectConfig, setCopiedProjectConfig] = useState(false);

  const handleTitleChange = (val: string) => {
    setTitle(val);
    setSlug(
      val
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "")
    );
  };

  const wordCount = content.trim().split(/\s+/).filter(Boolean).length;
  const estimatedReadingTime = `${Math.max(1, Math.ceil(wordCount / 200))} min read`;

  const buildBlogPostObject = (): BlogPost => ({
    slug: slug || "untitled-post",
    title: title || "Untitled Post",
    excerpt,
    content,
    publishedAt: new Date().toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    }),
    readingTime: estimatedReadingTime,
    category,
    tags: tagsInput
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean),
    featured: true,
    coverImage: coverImage || undefined,
    relatedProjectSlug: relatedProjectSlug || undefined,
  });

  const handlePublishBlog = async () => {
    setIsSaving(true);
    setSaveMessage(null);
    const newPost = buildBlogPostObject();

    // Save to client context / localStorage immediately
    addCustomBlog(newPost);

    // Also save to src/content/blogs/[slug].md via Next.js API route
    try {
      const res = await fetch("/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPost),
      });
      if (res.ok) {
        await refreshBlogs();
        setSaveMessage(
          `Published! Saved to src/content/blogs/${newPost.slug}.md & live across your portfolio.`
        );
      } else {
        setSaveMessage(
          `Published to browser storage! View it live at /blog/${newPost.slug}.`
        );
      }
    } catch {
      setSaveMessage(
        `Published to browser storage! View it live at /blog/${newPost.slug}.`
      );
    } finally {
      setIsSaving(false);
    }
  };

  const handleCopyBlogTS = () => {
    const post = buildBlogPostObject();
    const snippet = JSON.stringify(post, null, 2);
    navigator.clipboard.writeText(snippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleDownloadMarkdown = () => {
    const post = buildBlogPostObject();
    const md = [
      "---",
      `title: "${post.title}"`,
      `slug: "${post.slug}"`,
      `excerpt: "${post.excerpt}"`,
      `publishedAt: "${post.publishedAt}"`,
      `readingTime: "${post.readingTime}"`,
      `category: "${post.category}"`,
      `tags: [${post.tags.map((t) => `"${t}"`).join(", ")}]`,
      `featured: true`,
      ...(post.coverImage ? [`coverImage: "${post.coverImage}"`] : []),
      ...(post.relatedProjectSlug
        ? [`relatedProjectSlug: "${post.relatedProjectSlug}"`]
        : []),
      "---",
      "",
      post.content,
    ].join("\n");

    const blob = new Blob([md], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${post.slug}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const generateProjectSnippet = () => {
    const screens = projScreensInput
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => {
        const [file, cap] = line.split("|").map((s) => s.trim());
        return {
          src: `/projects/${projSlug}/${file || "screen.png"}`,
          alt: `${projTitle} — ${file}`,
          caption: cap || projTagline,
        };
      });

    const obj = {
      slug: projSlug,
      title: projTitle,
      tagline: projTagline,
      shortDescription: projTagline,
      fullDescription: projTagline,
      category: projCategory,
      year: projYear,
      status: "Shipped",
      role: projRole,
      featured: true,
      accentColor: "#0D9488",
      coverImage:
        screens[0]?.src || `/projects/${projSlug}/cover.png`,
      screenshots: screens,
      techStack: projTech
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      keyFeatures: projFeatures
        .split("\n")
        .map((f) => f.trim())
        .filter(Boolean),
    };

    return JSON.stringify(obj, null, 2);
  };

  const handleCopyProjectSnippet = () => {
    navigator.clipboard.writeText(generateProjectSnippet());
    setCopiedProjectConfig(true);
    setTimeout(() => setCopiedProjectConfig(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="space-y-8"
    >
      {/* Top Navigation & Header */}
      <div className="space-y-4">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to overview</span>
        </Link>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--border-color)] pb-5">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-[var(--accent-color)] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Reusable Content Engine</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-mono font-semibold tracking-tight text-[var(--text-primary)]">
              Blog & Project Studio
            </h1>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
              Create and publish new Markdown blog posts directly to{" "}
              <code>src/content/blogs/</code> or generate reusable project
              showcase entries.
            </p>
          </div>

          {/* Mode Switcher */}
          <div className="inline-flex p-1 rounded-xl border border-[var(--border-color)] bg-[var(--surface-card)] shrink-0 self-start">
            <button
              onClick={() => setActiveTab("blog")}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-xs transition-all ${
                activeTab === "blog"
                  ? "bg-[var(--text-primary)] text-[var(--bg-primary)] font-medium"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Blog Creator</span>
            </button>
            <button
              onClick={() => setActiveTab("project")}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-xs transition-all ${
                activeTab === "project"
                  ? "bg-[var(--text-primary)] text-[var(--bg-primary)] font-medium"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Project Builder</span>
            </button>
          </div>
        </div>
      </div>

      {activeTab === "blog" ? (
        <div className="space-y-8">
          {/* Blog Metadata Form */}
          <div className="p-5 rounded-2xl border border-[var(--border-color)] bg-[var(--surface-card)] space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)]">
                  Article Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] text-sm font-mono text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-color)]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)]">
                  URL Slug (<code>/blog/{slug}</code>)
                </label>
                <input
                  type="text"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] text-sm font-mono text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-color)]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1.5">
                <label className="block font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)]">
                  Category
                </label>
                <input
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] text-xs font-mono text-[var(--text-primary)]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)]">
                  Tags (comma-separated)
                </label>
                <input
                  type="text"
                  value={tagsInput}
                  onChange={(e) => setTagsInput(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] text-xs font-mono text-[var(--text-primary)]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)]">
                  Link to Project
                </label>
                <select
                  value={relatedProjectSlug}
                  onChange={(e) => {
                    const selected = e.target.value;
                    setRelatedProjectSlug(selected);
                    const found = projectsData.find((p) => p.slug === selected);
                    if (found) setCoverImage(found.coverImage);
                  }}
                  className="w-full px-3 py-2 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] text-xs font-mono text-[var(--text-primary)]"
                >
                  <option value="">None</option>
                  {projectsData.map((p) => (
                    <option key={p.slug} value={p.slug}>
                      {p.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)]">
                Short Summary / Excerpt
              </label>
              <input
                type="text"
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] text-xs text-[var(--text-primary)]"
              />
            </div>
          </div>

          {/* Markdown Editor + Live Preview */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setContent((c) => c + "\n\n## New Section Heading\n")}
                  className="px-2.5 py-1 rounded-lg border border-[var(--border-color)] bg-[var(--surface-card)] font-mono text-[11px] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                >
                  + H2
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setContent(
                      (c) =>
                        c +
                        "\n\n```typescript\n// Code example\nconst ready = true;\n```\n"
                    )
                  }
                  className="px-2.5 py-1 rounded-lg border border-[var(--border-color)] bg-[var(--surface-card)] font-mono text-[11px] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                >
                  + Code Block
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setContent((c) => c + "\n\n> Key engineering takeaway or note.\n")
                  }
                  className="px-2.5 py-1 rounded-lg border border-[var(--border-color)] bg-[var(--surface-card)] font-mono text-[11px] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                >
                  + Quote
                </button>
                <span className="ml-2 font-mono text-[11px] text-[var(--text-muted)]">
                  {wordCount} words · {estimatedReadingTime}
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() =>
                    setPreviewMode(previewMode === "split" ? "preview" : "split")
                  }
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-[var(--border-color)] bg-[var(--surface-card)] font-mono text-[11px] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>
                    {previewMode === "split" ? "Full Preview" : "Split Editor"}
                  </span>
                </button>
              </div>
            </div>

            <div
              className={`grid gap-5 ${
                previewMode === "split"
                  ? "grid-cols-1 lg:grid-cols-2"
                  : "grid-cols-1"
              }`}
            >
              {previewMode === "split" && (
                <div className="flex flex-col rounded-2xl border border-[var(--border-color)] bg-[var(--surface-card)] overflow-hidden">
                  <div className="px-4 py-2 border-b border-[var(--border-color)] font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                    Markdown Source
                  </div>
                  <textarea
                    rows={16}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full flex-1 p-4 bg-transparent font-mono text-xs sm:text-[13px] leading-relaxed text-[var(--text-primary)] focus:outline-none resize-y"
                  />
                </div>
              )}

              <div className="flex flex-col rounded-2xl border border-[var(--border-color)] bg-[var(--surface-card)] overflow-hidden">
                <div className="px-4 py-2 border-b border-[var(--border-color)] font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)] flex items-center justify-between">
                  <span>Live Article Render</span>
                  <span>{estimatedReadingTime}</span>
                </div>
                <div className="p-5 overflow-y-auto max-h-[460px] space-y-4">
                  <h2 className="text-xl font-mono font-semibold text-[var(--text-primary)]">
                    {title}
                  </h2>
                  <MarkdownRenderer content={content} />
                </div>
              </div>
            </div>
          </div>

          {/* Action Bar: Publish to Disk, Download .md, or Copy TS */}
          <div className="p-4 sm:p-5 rounded-2xl border border-[var(--border-color)] bg-[var(--surface-card)] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <button
                onClick={handlePublishBlog}
                disabled={isSaving}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--text-primary)] text-[var(--bg-primary)] font-mono text-xs font-medium hover:opacity-90 transition-opacity cursor-pointer"
              >
                <Save className="w-3.5 h-3.5" />
                <span>
                  {isSaving
                    ? "Publishing..."
                    : "Publish to Project (src/content/blogs)"}
                </span>
              </button>

              <button
                onClick={handleDownloadMarkdown}
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] hover:bg-[var(--surface-hover)] font-mono text-xs text-[var(--text-primary)] transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download .md</span>
              </button>

              <button
                onClick={handleCopyBlogTS}
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] hover:bg-[var(--surface-hover)] font-mono text-xs text-[var(--text-primary)] transition-colors"
              >
                {copiedCode ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Copied JSON/TS!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy TS Object</span>
                  </>
                )}
              </button>
            </div>

            {saveMessage && (
              <div className="flex items-center gap-3 text-xs font-mono text-emerald-600 dark:text-emerald-400">
                <span>{saveMessage}</span>
                <button
                  onClick={() => router.push(`/blog/${slug}`)}
                  className="underline inline-flex items-center gap-1 shrink-0"
                >
                  <span>View Post</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>

          {/* Existing Published Articles Manager */}
          <div className="space-y-3 pt-4 border-t border-[var(--border-color)]">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)]">
              Current Active Blog Posts ({blogs.length})
            </h3>
            <div className="divide-y divide-[var(--border-color)] rounded-2xl border border-[var(--border-color)] bg-[var(--surface-card)] overflow-hidden">
              {blogs.map((b) => (
                <div
                  key={b.slug}
                  className="p-3.5 px-4 flex items-center justify-between gap-4 hover:bg-[var(--surface-hover)]/40"
                >
                  <div className="min-w-0">
                    <Link
                      href={`/blog/${b.slug}`}
                      className="font-mono text-xs sm:text-sm font-semibold text-[var(--text-primary)] hover:text-[var(--accent-color)] truncate block"
                    >
                      {b.title}
                    </Link>
                    <div className="font-mono text-[10px] text-[var(--text-muted)]">
                      /blog/{b.slug} · {b.category} · {b.publishedAt}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Link
                      href={`/blog/${b.slug}`}
                      className="px-2.5 py-1 rounded-lg border border-[var(--border-color)] font-mono text-[11px] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                    >
                      Read →
                    </Link>
                    <button
                      onClick={() => deleteCustomBlog(b.slug)}
                      className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-red-500 transition-colors"
                      title="Remove from custom browser list"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Project Showcase Config Builder */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 p-5 rounded-2xl border border-[var(--border-color)] bg-[var(--surface-card)] space-y-4">
            <h2 className="font-mono text-sm font-semibold text-[var(--text-primary)]">
              New Project Showcase Generator
            </h2>
            <p className="text-xs text-[var(--text-secondary)]">
              Drop your new project screenshots into{" "}
              <code>public/projects/{projSlug}/</code>, fill in the details
              below, and copy the ready-to-use TypeScript config into{" "}
              <code>src/data/projects.ts</code>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="font-mono text-[10px] uppercase text-[var(--text-muted)]">
                  Project Title
                </label>
                <input
                  type="text"
                  value={projTitle}
                  onChange={(e) => {
                    setProjTitle(e.target.value);
                    setProjSlug(
                      e.target.value
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, "-")
                        .replace(/^-|-$/g, "")
                    );
                  }}
                  className="w-full px-3 py-2 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] text-xs font-mono"
                />
              </div>

              <div className="space-y-1">
                <label className="font-mono text-[10px] uppercase text-[var(--text-muted)]">
                  Folder & URL Slug
                </label>
                <input
                  type="text"
                  value={projSlug}
                  onChange={(e) => setProjSlug(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] text-xs font-mono"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1">
                <label className="font-mono text-[10px] uppercase text-[var(--text-muted)]">
                  Category
                </label>
                <select
                  value={projCategory}
                  onChange={(e) =>
                    setProjCategory(e.target.value as ProjectCategory)
                  }
                  className="w-full px-3 py-2 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] text-xs font-mono"
                >
                  {PROJECT_CATEGORIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-mono text-[10px] uppercase text-[var(--text-muted)]">
                  Role
                </label>
                <input
                  type="text"
                  value={projRole}
                  onChange={(e) => setProjRole(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] text-xs font-mono"
                />
              </div>

              <div className="space-y-1">
                <label className="font-mono text-[10px] uppercase text-[var(--text-muted)]">
                  Year
                </label>
                <input
                  type="text"
                  value={projYear}
                  onChange={(e) => setProjYear(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] text-xs font-mono"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="font-mono text-[10px] uppercase text-[var(--text-muted)]">
                Tagline / Summary
              </label>
              <input
                type="text"
                value={projTagline}
                onChange={(e) => setProjTagline(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] text-xs"
              />
            </div>

            <div className="space-y-1">
              <label className="font-mono text-[10px] uppercase text-[var(--text-muted)]">
                Tech Stack (comma-separated)
              </label>
              <input
                type="text"
                value={projTech}
                onChange={(e) => setProjTech(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] text-xs font-mono"
              />
            </div>

            <div className="space-y-1">
              <label className="font-mono text-[10px] uppercase text-[var(--text-muted)]">
                Key Features (one per line)
              </label>
              <textarea
                rows={3}
                value={projFeatures}
                onChange={(e) => setProjFeatures(e.target.value)}
                className="w-full p-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] text-xs font-mono"
              />
            </div>

            <div className="space-y-1">
              <label className="font-mono text-[10px] uppercase text-[var(--text-muted)]">
                Screenshots (filename.png | Caption, one per line)
              </label>
              <textarea
                rows={3}
                value={projScreensInput}
                onChange={(e) => setProjScreensInput(e.target.value)}
                className="w-full p-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] text-xs font-mono"
              />
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col rounded-2xl border border-[var(--border-color)] bg-zinc-950 text-zinc-100 overflow-hidden">
            <div className="px-4 py-3 border-b border-zinc-800 flex items-center justify-between">
              <span className="font-mono text-xs text-zinc-400 flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Generated ProjectItem Config</span>
              </span>
              <button
                onClick={handleCopyProjectSnippet}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs transition-colors"
              >
                {copiedProjectConfig ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Object</span>
                  </>
                )}
              </button>
            </div>
            <pre className="p-4 text-xs font-mono text-zinc-300 overflow-x-auto flex-1">
              <code>{generateProjectSnippet()}</code>
            </pre>
          </div>
        </div>
      )}
    </motion.div>
  );
}
