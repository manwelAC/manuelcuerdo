"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Maximize2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { getProjectBySlug, projectsData } from "@/data/projects";
import { usePortfolio } from "@/context/PortfolioContext";

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const project = getProjectBySlug(slug);
  const { setActiveProjectModal } = usePortfolio();
  const [activeScreenIdx, setActiveScreenIdx] = useState(0);

  if (!project) {
    return (
      <div className="py-20 space-y-4">
        <h1 className="text-xl font-display font-semibold text-[var(--text-primary)]">
          Project not found
        </h1>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)]"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to projects</span>
        </Link>
      </div>
    );
  }

  const currentIdxInAll = projectsData.findIndex(
    (p) => p.slug === project.slug
  );
  const prevProject =
    projectsData[
      (currentIdxInAll - 1 + projectsData.length) % projectsData.length
    ];
  const nextProject =
    projectsData[(currentIdxInAll + 1) % projectsData.length];

  const screenshots = project.screenshots;
  const activeShot = screenshots[activeScreenIdx] || screenshots[0];

  return (
    <article className="space-y-12">
      {/* Editorial Header */}
      <header className="space-y-6">
        <div className="flex items-center justify-between font-mono text-xs text-[var(--text-muted)]">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 hover:text-[var(--text-primary)] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Projects</span>
          </Link>

          <span>
            {project.number} / {String(projectsData.length).padStart(2, "0")}
          </span>
        </div>

        <div className="space-y-2 max-w-3xl">
          <h1 className="text-2xl sm:text-4xl font-display font-bold tracking-tight text-[var(--text-primary)]">
            {project.title}
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Hairline Metadata Ledger */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-4 border-y border-[var(--border-color)] font-mono text-xs">
          <div>
            <div className="text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
              Role
            </div>
            <div className="text-[var(--text-primary)] mt-1">
              {project.role}
            </div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
              Category
            </div>
            <div className="text-[var(--text-primary)] mt-1">
              {project.category}
            </div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
              Timeline
            </div>
            <div className="text-[var(--text-primary)] mt-1">
              {project.year} · {project.status}
            </div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
              Stack
            </div>
            <div className="text-[var(--text-primary)] mt-1 truncate">
              {project.techStack.slice(0, 3).join(" · ")}
            </div>
          </div>
        </div>
      </header>

      {/* Clean Screenshot Viewer */}
      <section className="space-y-3">
        <div className="relative rounded-xl overflow-hidden border border-[var(--border-color)] bg-zinc-950">
          <div className="aspect-[16/10] flex items-center justify-center p-2 sm:p-4">
            <img
              src={activeShot.src}
              alt={activeShot.alt}
              onClick={() => setActiveProjectModal(project)}
              className="max-h-full max-w-full object-contain rounded cursor-zoom-in"
            />
          </div>

          {screenshots.length > 1 && (
            <>
              <button
                type="button"
                onClick={() =>
                  setActiveScreenIdx(
                    (prev) =>
                      (prev - 1 + screenshots.length) % screenshots.length
                  )
                }
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 hover:bg-black text-white border border-white/10 transition-colors cursor-pointer"
                aria-label="Previous screenshot"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() =>
                  setActiveScreenIdx((prev) => (prev + 1) % screenshots.length)
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 hover:bg-black text-white border border-white/10 transition-colors cursor-pointer"
                aria-label="Next screenshot"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </>
          )}

          <button
            type="button"
            onClick={() => setActiveProjectModal(project)}
            className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/75 hover:bg-black text-white font-mono text-[11px] border border-white/10 cursor-pointer"
          >
            <Maximize2 className="w-3 h-3" />
            <span>Expand</span>
          </button>

          <div className="px-4 py-3 border-t border-zinc-800/80 bg-zinc-950 flex items-center justify-between gap-4 font-mono text-xs text-zinc-300">
            <span className="leading-relaxed">{activeShot.caption}</span>
            <span className="text-zinc-500 shrink-0">
              {activeScreenIdx + 1} / {screenshots.length}
            </span>
          </div>
        </div>

        {/* Clean Thumbnail Strip (No Scrollbar) */}
        {screenshots.length > 1 && (
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-1">
            {screenshots.map((shot, idx) => (
              <button
                key={shot.src}
                type="button"
                onClick={() => setActiveScreenIdx(idx)}
                className={`relative h-12 w-20 rounded overflow-hidden border shrink-0 transition-opacity cursor-pointer ${
                  idx === activeScreenIdx
                    ? "border-[var(--text-primary)] opacity-100"
                    : "border-[var(--border-color)] opacity-45 hover:opacity-80"
                }`}
              >
                <img
                  src={shot.src}
                  alt={shot.alt}
                  className="w-full h-full object-cover object-top"
                />
              </button>
            ))}
          </div>
        )}
      </section>

      {/* Simple Editorial Breakdown — No Boxed Cards or AI Slop */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pt-2">
        {/* Left 8 Columns: Overview & Key Contributions */}
        <div className="md:col-span-8 space-y-8">
          <div className="space-y-2.5">
            <h2 className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)]">
              Overview
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[var(--text-secondary)]">
              {project.fullDescription}
            </p>
          </div>

          {project.archiveReason && (
            <div className="py-3 border-y border-[var(--border-color)] text-xs sm:text-sm text-[var(--text-secondary)]">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)] block mb-1">
                Archive Note
              </span>
              {project.archiveReason}
            </div>
          )}

          <div className="space-y-3">
            <h2 className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)]">
              What Was Built
            </h2>
            <ul className="divide-y divide-[var(--border-color)] border-t border-b border-[var(--border-color)]">
              {project.keyFeatures.map((feat, idx) => (
                <li
                  key={idx}
                  className="py-3.5 text-sm leading-relaxed text-[var(--text-secondary)] flex items-baseline gap-4"
                >
                  <span className="font-mono text-xs text-[var(--text-muted)] shrink-0">
                    0{idx + 1}
                  </span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right 4 Columns: Clean Editorial Specs */}
        <aside className="md:col-span-4 space-y-6">
          <div className="space-y-2.5">
            <h2 className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)]">
              Technologies
            </h2>
            <div className="pt-2 border-t border-[var(--border-color)] flex flex-wrap gap-x-3 gap-y-1.5 font-mono text-xs text-[var(--text-primary)]">
              {project.techStack.map((tech, i) => (
                <span key={tech}>
                  {tech}
                  {i < project.techStack.length - 1 && (
                    <span className="text-[var(--text-muted)] ml-3">·</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {project.architectureHighlights &&
            project.architectureHighlights.length > 0 && (
              <div className="space-y-2.5">
                <h2 className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)]">
                  Architecture
                </h2>
                <ul className="pt-2 border-t border-[var(--border-color)] space-y-2.5 text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)]">
                  {project.architectureHighlights.map((note, idx) => (
                    <li key={idx}>{note}</li>
                  ))}
                </ul>
              </div>
            )}

          {project.links?.repo && (
            <div className="pt-2 border-t border-[var(--border-color)]">
              <a
                href={project.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-mono text-xs text-[var(--text-primary)] hover:opacity-75 transition-opacity"
              >
                <span>View Source Repository</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </aside>
      </section>

      {/* Minimal Prev / Next Footer Navigation */}
      <nav
        aria-label="Project navigation"
        className="pt-6 border-t border-[var(--border-color)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs"
      >
        <Link
          href={`/projects/${prevProject.slug}`}
          className="group space-y-1"
        >
          <span className="text-[10px] uppercase tracking-wider text-[var(--text-muted)] block">
            ← Previous
          </span>
          <span className="text-sm font-display font-semibold text-[var(--text-primary)] group-hover:underline underline-offset-4">
            {prevProject.title}
          </span>
        </Link>

        <Link
          href={`/projects/${nextProject.slug}`}
          className="group space-y-1 sm:text-right"
        >
          <span className="text-[10px] uppercase tracking-wider text-[var(--text-muted)] block">
            Next →
          </span>
          <span className="text-sm font-display font-semibold text-[var(--text-primary)] group-hover:underline underline-offset-4">
            {nextProject.title}
          </span>
        </Link>
      </nav>
    </article>
  );
}
