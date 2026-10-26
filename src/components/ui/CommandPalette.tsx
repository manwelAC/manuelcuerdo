"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  FolderGit2,
  Cpu,
  Sun,
  Moon,
  ArrowRight,
  X,
} from "lucide-react";
import { usePortfolio } from "@/context/PortfolioContext";
import { projectsData } from "@/data/projects";

export function CommandPalette() {
  const router = useRouter();
  const {
    isCommandOpen,
    setIsCommandOpen,
    resolvedTheme,
    setTheme,
  } = usePortfolio();
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (isCommandOpen) setQuery("");
  }, [isCommandOpen]);

  if (!isCommandOpen) return null;

  const q = query.toLowerCase().trim();

  const matchingProjects = projectsData.filter(
    (p) =>
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.techStack.some((t) => t.toLowerCase().includes(q))
  );

  const navigateTo = (href: string) => {
    setIsCommandOpen(false);
    router.push(href);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsCommandOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -10 }}
          transition={{ duration: 0.18 }}
          className="relative z-10 w-full max-w-xl rounded-2xl border border-[var(--border-color)] bg-[var(--bg-primary)] shadow-2xl overflow-hidden"
        >
          {/* Search Input Header */}
          <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[var(--border-color)]">
            <Search className="w-4 h-4 text-[var(--text-muted)] shrink-0" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Jump to a system, tech stack, or action..."
              className="w-full bg-transparent text-sm font-mono text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none"
            />
            <button
              onClick={() => setIsCommandOpen(false)}
              className="p-1 rounded-md text-[var(--text-muted)] hover:text-[var(--text-primary)]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Results List */}
          <div className="max-h-[60vh] overflow-y-auto p-3 space-y-4">
            {/* Quick Actions */}
            <div>
              <div className="px-2 pb-1.5 font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                Quick Actions
              </div>
              <div className="space-y-1">
                <button
                  onClick={() => navigateTo("/projects")}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-xl hover:bg-[var(--surface-hover)] text-left text-xs font-mono text-[var(--text-primary)] transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <FolderGit2 className="w-3.5 h-3.5 text-[var(--accent-color)]" />
                    <span>Browse All {projectsData.length} Shipped Systems</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                </button>

                <button
                  onClick={() => navigateTo("/stack")}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-xl hover:bg-[var(--surface-hover)] text-left text-xs font-mono text-[var(--text-primary)] transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <Cpu className="w-3.5 h-3.5 text-[var(--accent-color)]" />
                    <span>Inspect Technical Stack &amp; Architecture</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                </button>

                <button
                  onClick={() => {
                    setTheme(resolvedTheme === "dark" ? "light" : "dark");
                    setIsCommandOpen(false);
                  }}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-xl hover:bg-[var(--surface-hover)] text-left text-xs font-mono text-[var(--text-primary)] transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    {resolvedTheme === "dark" ? (
                      <Sun className="w-3.5 h-3.5 text-amber-400" />
                    ) : (
                      <Moon className="w-3.5 h-3.5 text-indigo-500" />
                    )}
                    <span>
                      Switch to {resolvedTheme === "dark" ? "Light" : "Dark"} Mode
                    </span>
                  </span>
                  <span className="text-[10px] text-[var(--text-muted)]">
                    Toggle
                  </span>
                </button>
              </div>
            </div>

            {/* Projects */}
            {matchingProjects.length > 0 && (
              <div>
                <div className="px-2 pb-1.5 font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                  Shipped Systems ({matchingProjects.length})
                </div>
                <div className="space-y-1">
                  {matchingProjects.slice(0, 9).map((proj) => (
                    <button
                      key={proj.slug}
                      onClick={() => navigateTo(`/projects/${proj.slug}`)}
                      className="w-full flex items-center justify-between px-3 py-2 rounded-xl hover:bg-[var(--surface-hover)] text-left transition-colors"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <FolderGit2 className="w-3.5 h-3.5 text-[var(--text-muted)] shrink-0" />
                        <span className="font-mono text-xs font-medium text-[var(--text-primary)] truncate">
                          {proj.title}
                        </span>
                        <span className="hidden sm:inline text-[11px] text-[var(--text-muted)] truncate">
                          — {proj.category}
                        </span>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-[var(--text-muted)] shrink-0" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
