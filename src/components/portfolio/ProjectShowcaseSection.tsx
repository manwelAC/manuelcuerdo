"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Search, X } from "lucide-react";
import { projectsData, PROJECT_CATEGORIES } from "@/data/projects";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/portfolio/ProjectCard";

interface ProjectShowcaseSectionProps {
  limit?: number;
  showSearch?: boolean;
  initialCategory?: string;
  sectionNumber?: string;
  sectionTitle?: string;
}

export function ProjectShowcaseSection({
  limit,
  showSearch = false,
  initialCategory = "All",
  sectionNumber = "01",
  sectionTitle = "Selected Work",
}: ProjectShowcaseSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [viewMode, setViewMode] = useState<"grid" | "compact">("grid");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", ...PROJECT_CATEGORIES];

  const filtered = projectsData.filter((project) => {
    const matchesCat =
      selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch =
      !searchQuery.trim() ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDescription
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      project.techStack.some((t) =>
        t.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCat && matchesSearch;
  });

  // Lead the homepage preview with real-world ERP work, preserving order
  // within each category and leaving the full archive order unchanged.
  const ordered = limit
    ? [
        ...filtered.filter((project) => project.category === "Enterprise & ERP"),
        ...filtered.filter((project) => project.category !== "Enterprise & ERP"),
      ]
    : filtered;
  const displayed = limit ? ordered.slice(0, limit) : ordered;

  return (
    <section aria-labelledby="projects" className="mb-24">
      <SectionHeader
        id="projects"
        number={sectionNumber}
        title={sectionTitle}
        actionLabel={limit ? `All ${projectsData.length} Projects` : undefined}
        actionHref={limit ? "/projects" : undefined}
        secondaryAction={
          <div className="inline-flex items-center gap-3 font-mono text-xs">
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              className={`cursor-pointer transition-colors ${
                viewMode === "grid"
                  ? "text-[var(--text-primary)] font-semibold underline underline-offset-4"
                  : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              }`}
            >
              Grid
            </button>
            <span className="text-[var(--border-strong)]">/</span>
            <button
              type="button"
              onClick={() => setViewMode("compact")}
              className={`cursor-pointer transition-colors ${
                viewMode === "compact"
                  ? "text-[var(--text-primary)] font-semibold underline underline-offset-4"
                  : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              }`}
            >
              Index
            </button>
          </div>
        }
      />

      {/* Editorial Category Filter & Search — Never Clips Text */}
      <div className="mb-10 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {categories.map((cat) => {
            const count =
              cat === "All"
                ? projectsData.length
                : projectsData.filter((p) => p.category === cat).length;
            const isSelected = selectedCategory === cat;

            return (
              <button
                type="button"
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`relative py-1 font-mono text-xs transition-colors cursor-pointer ${
                  isSelected
                    ? "text-[var(--text-primary)] font-medium"
                    : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                }`}
              >
                <span>{cat}</span>
                <span className="ml-1 text-[10px] opacity-60">({count})</span>
                {isSelected && (
                  <motion.span
                    layoutId="project-category-underline"
                    transition={{
                      type: "spring",
                      stiffness: 420,
                      damping: 32,
                    }}
                    className="absolute left-0 right-0 -bottom-0.5 h-[1.5px] bg-[var(--text-primary)]"
                  />
                )}
              </button>
            );
          })}
        </div>

        {showSearch && (
          <div className="relative w-full sm:w-52 shrink-0">
            <Search className="w-3.5 h-3.5 text-[var(--text-muted)] absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search stack or title..."
              className="w-full pl-8 pr-7 py-1 rounded border border-[var(--border-color)] bg-transparent text-xs font-mono text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--text-primary)] transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer"
                aria-label="Clear filter"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>
        )}
      </div>

      {/* Editorial 2-Column Grid */}
      {displayed.length === 0 ? (
        <div className="py-12 font-mono text-xs text-[var(--text-muted)]">
          No matching projects found for &ldquo;{searchQuery}&rdquo;.
        </div>
      ) : viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {displayed.map((project, idx) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={idx}
              variant="grid"
            />
          ))}
        </div>
      ) : (
        <div className="border-t border-[var(--border-color)]">
          {displayed.map((project, idx) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={idx}
              variant="compact"
            />
          ))}
        </div>
      )}
      {limit && (
        <div className="mt-10 flex justify-center border-t border-[var(--border-color)] pt-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-md border border-[var(--border-color)] px-5 py-2.5 font-mono text-xs text-[var(--text-primary)] transition-colors hover:border-[var(--border-strong)] hover:bg-[var(--surface-hover)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--text-primary)]"
          >
            View more projects
            <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
          </Link>
        </div>
      )}
    </section>
  );
}
