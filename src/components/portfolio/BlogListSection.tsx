"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PenTool, Search, Clock, ArrowUpRight } from "lucide-react";
import { usePortfolio } from "@/context/PortfolioContext";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface BlogListSectionProps {
  limit?: number;
  showControls?: boolean;
  sectionNumber?: string;
  sectionTitle?: string;
}

export function BlogListSection({
  limit,
  showControls = false,
  sectionNumber = "01",
  sectionTitle = "blog",
}: BlogListSectionProps) {
  const { blogs } = usePortfolio();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...Array.from(new Set(blogs.map((b) => b.category))),
  ];

  const filteredBlogs = blogs.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      !searchQuery.trim() ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) =>
        t.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const displayedBlogs = limit ? filteredBlogs.slice(0, limit) : filteredBlogs;

  return (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45 }}
      className="mb-16"
    >
      <SectionHeader
        id="blog"
        number={sectionNumber}
        title={sectionTitle}
        actionLabel={limit ? "ALL POSTS" : undefined}
        actionHref={limit ? "/blog" : undefined}
        secondaryAction={
          <Link
            href="/blog/studio"
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-[var(--border-color)] bg-[var(--surface-card)] hover:bg-[var(--surface-hover)] font-mono text-[11px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            <PenTool className="w-3 h-3 text-[var(--accent-color)]" />
            <span>+ Write Post</span>
          </Link>
        }
      />

      {showControls && (
        <div className="mb-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg font-mono text-xs whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-[var(--text-primary)] text-[var(--bg-primary)] font-medium"
                    : "border border-[var(--border-color)] bg-[var(--surface-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[220px]">
            <Search className="w-3.5 h-3.5 text-[var(--text-muted)] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter articles or tags..."
              className="w-full pl-8 pr-3 py-1.5 rounded-lg border border-[var(--border-color)] bg-[var(--surface-card)] text-xs font-mono text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-color)]"
            />
          </div>
        </div>
      )}

      {/* Editorial List Layout */}
      <div className="divide-y divide-[var(--border-color)] border-b border-[var(--border-color)]">
        {displayedBlogs.map((post, idx) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: idx * 0.04 }}
          >
            <Link
              href={`/blog/${post.slug}`}
              className="group block py-5 px-2 -mx-2 rounded-xl hover:bg-[var(--surface-hover)]/50 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-6">
                <h3 className="text-[15px] sm:text-base font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-color)] transition-colors flex items-center gap-1.5">
                  <span>{post.title}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0 text-[var(--accent-color)]" />
                </h3>
                <div className="flex items-center gap-3 shrink-0 font-mono text-xs text-[var(--text-muted)]">
                  <span className="hidden md:inline-flex items-center gap-1 text-[11px]">
                    <Clock className="w-3 h-3" />
                    {post.readingTime}
                  </span>
                  <span>{post.publishedAt}</span>
                </div>
              </div>

              <p className="mt-1.5 text-sm text-[var(--text-secondary)] line-clamp-1 max-w-2xl">
                {post.excerpt}
              </p>

              {showControls && (
                <div className="mt-3 flex flex-wrap items-center gap-1.5">
                  <span className="px-2 py-0.5 rounded bg-[var(--accent-subtle)] text-[var(--accent-color)] font-mono text-[10px] font-medium">
                    {post.category}
                  </span>
                  {post.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded border border-[var(--border-color)] bg-[var(--surface-card)] font-mono text-[10px] text-[var(--text-muted)]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          </motion.article>
        ))}

        {displayedBlogs.length === 0 && (
          <div className="py-10 text-center space-y-2">
            <p className="font-mono text-xs text-[var(--text-muted)]">
              No blog posts matched your filter.
            </p>
            <Link
              href="/blog/studio"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--accent-color)] hover:underline"
            >
              Create a new post in Blog Studio →
            </Link>
          </div>
        )}
      </div>
    </motion.section>
  );
}
