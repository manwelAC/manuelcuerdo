"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";
import { usePortfolio } from "@/context/PortfolioContext";

export function ProjectModal() {
  const { activeProjectModal, setActiveProjectModal } = usePortfolio();
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    setCurrentIdx(0);
  }, [activeProjectModal]);

  useEffect(() => {
    if (!activeProjectModal) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setCurrentIdx(
          (prev) => (prev + 1) % activeProjectModal.screenshots.length
        );
      } else if (e.key === "ArrowLeft") {
        setCurrentIdx(
          (prev) =>
            (prev - 1 + activeProjectModal.screenshots.length) %
            activeProjectModal.screenshots.length
        );
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeProjectModal]);

  if (!activeProjectModal) return null;

  const screenshots = activeProjectModal.screenshots;
  const activeShot = screenshots[currentIdx] || screenshots[0];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setActiveProjectModal(null)}
          className="fixed inset-0 bg-black/75 backdrop-blur-xs"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 8 }}
          transition={{ duration: 0.2 }}
          className="relative z-10 w-full max-w-5xl max-h-[88vh] flex flex-col rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] shadow-2xl overflow-hidden"
        >
          {/* Minimal Editorial Modal Header */}
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-[var(--border-color)] bg-[var(--bg-primary)]">
            <div className="flex items-baseline gap-3 min-w-0">
              <span className="font-mono text-xs text-[var(--text-muted)] shrink-0">
                {activeProjectModal.number} /
              </span>
              <h3 className="font-display text-sm sm:text-base font-semibold text-[var(--text-primary)] truncate">
                {activeProjectModal.title}
              </h3>
              <span className="hidden sm:inline font-mono text-xs text-[var(--text-muted)] shrink-0">
                · {activeProjectModal.role}
              </span>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Link
                href={`/projects/${activeProjectModal.slug}`}
                onClick={() => setActiveProjectModal(null)}
                className="inline-flex items-center gap-1 font-mono text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                <span>Open Page</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <button
                type="button"
                onClick={() => setActiveProjectModal(null)}
                className="p-1 rounded border border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Modal Body — Left Viewer Fixed on Desktop, Right Summary Clean & Uncluttered */}
          <div className="flex-1 min-h-0 overflow-y-auto lg:overflow-hidden grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[var(--border-color)]">
            {/* Left 8 Columns: Screenshot Viewer */}
            <div className="lg:col-span-8 flex flex-col justify-between gap-4 bg-zinc-950 p-4 sm:p-6 lg:h-full lg:overflow-hidden">
              <div className="relative flex-1 flex items-center justify-center min-h-[240px] sm:min-h-[340px] max-h-[54vh] overflow-hidden rounded-lg border border-zinc-800/80 bg-zinc-900/40">
                <img
                  src={activeShot.src}
                  alt={activeShot.alt}
                  className="max-h-[52vh] w-auto object-contain"
                />

                {screenshots.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setCurrentIdx(
                          (prev) =>
                            (prev - 1 + screenshots.length) % screenshots.length
                        )
                      }
                      className="absolute left-3 p-1.5 rounded-full bg-black/75 hover:bg-black text-white border border-white/10 cursor-pointer"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setCurrentIdx(
                          (prev) => (prev + 1) % screenshots.length
                        )
                      }
                      className="absolute right-3 p-1.5 rounded-full bg-black/75 hover:bg-black text-white border border-white/10 cursor-pointer"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </>
                )}
              </div>

              {/* Caption & Thumbnail Strip */}
              <div className="space-y-2.5 shrink-0">
                <div className="flex items-start justify-between gap-4 text-xs font-mono text-zinc-300">
                  <p className="leading-relaxed">{activeShot.caption}</p>
                  <span className="text-zinc-500 shrink-0">
                    {currentIdx + 1} / {screenshots.length}
                  </span>
                </div>

                {screenshots.length > 1 && (
                  <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-0.5">
                    {screenshots.map((shot, idx) => (
                      <button
                        key={shot.src}
                        type="button"
                        onClick={() => setCurrentIdx(idx)}
                        className={`relative h-11 w-18 rounded overflow-hidden border shrink-0 transition-opacity cursor-pointer ${
                          idx === currentIdx
                            ? "border-white opacity-100"
                            : "border-zinc-800 opacity-45 hover:opacity-80"
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
              </div>
            </div>

            {/* Right 4 Columns: Simple Editorial Context */}
            <div className="lg:col-span-4 lg:h-full lg:overflow-y-auto p-5 space-y-5 bg-[var(--bg-primary)]">
              <div className="space-y-1.5">
                <div className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                  Summary
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)]">
                  {activeProjectModal.shortDescription}
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-[var(--border-color)]">
                <div className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                  Highlights
                </div>
                <ul className="divide-y divide-[var(--border-color)]">
                  {activeProjectModal.keyFeatures.map((feat, i) => (
                    <li
                      key={i}
                      className="py-2.5 first:pt-1 text-xs leading-relaxed text-[var(--text-secondary)]"
                    >
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2 pt-4 border-t border-[var(--border-color)]">
                <div className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                  Stack
                </div>
                <div className="font-mono text-xs text-[var(--text-primary)] leading-relaxed">
                  {activeProjectModal.techStack.join(" · ")}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
