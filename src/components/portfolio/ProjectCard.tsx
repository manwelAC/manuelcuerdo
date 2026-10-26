"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from "lucide-react";
import { ProjectItem } from "@/types/portfolio";
import { usePortfolio } from "@/context/PortfolioContext";

interface ProjectCardProps {
  project: ProjectItem;
  index?: number;
  variant?: "grid" | "compact";
}

export function ProjectCard({
  project,
  variant = "grid",
}: ProjectCardProps) {
  const { setActiveProjectModal } = usePortfolio();
  const [activeSlide, setActiveSlide] = useState(0);

  const screenshots = project.screenshots;
  const currentShot = screenshots[activeSlide] || {
    src: project.coverImage,
    alt: project.title,
    caption: project.shortDescription,
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveSlide((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveSlide(
      (prev) => (prev - 1 + screenshots.length) % screenshots.length
    );
  };

  if (variant === "compact") {
    return (
      <article className="group py-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-6 border-b border-[var(--border-color)] hover:bg-[var(--surface-hover)]/40 px-2 -mx-2 rounded transition-colors">
        <div className="flex items-baseline gap-4 min-w-0">
          <span className="font-mono text-xs text-[var(--text-muted)] w-6 shrink-0">
            {project.number}
          </span>
          <div className="min-w-0">
            <div className="flex flex-wrap items-baseline gap-2.5">
              <Link
                href={`/projects/${project.slug}`}
                className="font-display text-base font-semibold text-[var(--text-primary)] group-hover:underline underline-offset-4"
              >
                {project.title}
              </Link>
              <span className="font-mono text-[11px] text-[var(--text-muted)]">
                {project.workType} · {project.role}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] line-clamp-1 mt-0.5">
              {project.shortDescription}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0 pl-10 sm:pl-0">
          <span className="font-mono text-[11px] text-[var(--text-muted)] hidden md:inline">
            {project.techStack.slice(0, 3).join(" · ")}
          </span>
          <button
            type="button"
            onClick={() => setActiveProjectModal(project)}
            className="font-mono text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer"
          >
            Preview ({screenshots.length})
          </button>
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-0.5 font-mono text-xs text-[var(--text-primary)] hover:opacity-75"
          >
            <span>Read</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex flex-col space-y-3.5">
      {/* Top Editorial Index Line */}
      <div className="flex items-center justify-between gap-2 font-mono text-xs text-[var(--text-muted)]">
        <span className="truncate">
          {project.number} — {project.role}
        </span>
        <span className="shrink-0">
          {project.workType} · {project.year}
        </span>
      </div>

      {/* Clean Uncluttered Screenshot Frame */}
      <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--surface-elevated)]">
        <img
          src={currentShot.src}
          alt={currentShot.alt}
          onClick={() => setActiveProjectModal(project)}
          className="w-full h-full object-cover object-top cursor-pointer transition-transform duration-500 ease-out group-hover:scale-[1.015]"
        />

        {/* Subtle Hover Controls */}
        {screenshots.length > 1 && (
          <div className="absolute inset-x-3 top-1/2 -translate-y-1/2 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <button
              type="button"
              onClick={prevSlide}
              className="pointer-events-auto p-1.5 rounded-full bg-black/70 text-white hover:bg-black transition-colors cursor-pointer"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="pointer-events-auto p-1.5 rounded-full bg-black/70 text-white hover:bg-black transition-colors cursor-pointer"
              aria-label="Next screenshot"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Minimal Bottom-Right Lightbox Trigger */}
        <button
          type="button"
          onClick={() => setActiveProjectModal(project)}
          className="absolute bottom-2.5 right-2.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/75 text-white font-mono text-[10px] opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity cursor-pointer"
          title="Open gallery"
        >
          <Maximize2 className="w-3 h-3" />
          <span>
            {activeSlide + 1} / {screenshots.length}
          </span>
        </button>
      </div>

      {/* Editorial Text Block */}
      <div className="space-y-1.5 pt-0.5">
        <div className="flex items-start justify-between gap-3">
          <Link
            href={`/projects/${project.slug}`}
            className="font-display text-lg font-bold text-[var(--text-primary)] group-hover:underline underline-offset-4 decoration-1"
          >
            {project.title}
          </Link>

          <Link
            href={`/projects/${project.slug}`}
            className="text-[var(--text-muted)] hover:text-[var(--text-primary)] shrink-0 pt-1 transition-colors"
            aria-label={`View ${project.title}`}
          >
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <p className="text-sm leading-relaxed text-[var(--text-secondary)] line-clamp-2">
          {project.shortDescription}
        </p>

        <div className="pt-1 font-mono text-[11px] text-[var(--text-muted)]">
          {project.techStack.slice(0, 5).join(" · ")}
          {project.status === "Archived" && " · Archived"}
        </div>
      </div>
    </article>
  );
}
