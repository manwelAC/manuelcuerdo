"use client";

import React, { use } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Clock,
  Calendar,
  ArrowUpRight,
  FolderGit2,
  PenTool,
} from "lucide-react";
import { usePortfolio } from "@/context/PortfolioContext";
import { MarkdownRenderer } from "@/components/blog/MarkdownRenderer";
import { getProjectBySlug } from "@/data/projects";

export default function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const { blogs } = usePortfolio();
  const post = blogs.find((b) => b.slug === slug);

  if (!post) {
    return (
      <div className="py-20 text-center space-y-4">
        <h1 className="text-xl font-mono font-semibold text-[var(--text-primary)]">
          Article not found
        </h1>
        <p className="text-sm text-[var(--text-secondary)]">
          The article &ldquo;{slug}&rdquo; was not found. You can create it in
          the Blog Studio!
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Posts</span>
          </Link>
          <Link
            href="/blog/studio"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--accent-color)] hover:underline"
          >
            <PenTool className="w-3.5 h-3.5" />
            <span>Create in Studio</span>
          </Link>
        </div>
      </div>
    );
  }

  const relatedProject = post.relatedProjectSlug
    ? getProjectBySlug(post.relatedProjectSlug)
    : undefined;

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-10"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All Articles</span>
        </Link>

        <span className="px-2.5 py-1 rounded-full bg-[var(--accent-subtle)] text-[var(--accent-color)] font-mono text-[11px] font-medium">
          {post.category}
        </span>
      </div>

      {/* Article Header */}
      <header className="space-y-4 pb-6 border-b border-[var(--border-color)]">
        <h1 className="text-2xl sm:text-3xl font-mono font-semibold tracking-tight text-[var(--text-primary)] leading-snug">
          {post.title}
        </h1>

        <p className="text-base text-[var(--text-secondary)] leading-relaxed">
          {post.excerpt}
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[var(--text-muted)]">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {post.publishedAt}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {post.readingTime}
            </span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded border border-[var(--border-color)] bg-[var(--surface-card)] text-[10px]"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Cover Image if present */}
      {post.coverImage && (
        <div className="rounded-2xl overflow-hidden border border-[var(--border-color)] bg-zinc-950 shadow-sm">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full max-h-[420px] object-cover object-top"
          />
        </div>
      )}

      {/* Markdown Body */}
      <div className="py-2">
        <MarkdownRenderer content={post.content} />
      </div>

      {/* Related Project Callout Card */}
      {relatedProject && (
        <div className="p-5 sm:p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--surface-card)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-[var(--accent-color)] font-semibold">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Featured System in this Article</span>
            </div>
            <h3 className="font-mono text-base font-semibold text-[var(--text-primary)]">
              {relatedProject.title}
            </h3>
            <p className="text-xs text-[var(--text-secondary)] max-w-lg">
              {relatedProject.tagline}
            </p>
          </div>

          <Link
            href={`/projects/${relatedProject.slug}`}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[var(--text-primary)] text-[var(--bg-primary)] font-mono text-xs font-medium shrink-0 hover:opacity-90 transition-opacity"
          >
            <span>Explore Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      )}
    </motion.article>
  );
}
