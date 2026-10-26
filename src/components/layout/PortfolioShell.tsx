"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { Sidebar } from "@/components/layout/Sidebar";
import { ProjectModal } from "@/components/portfolio/ProjectModal";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { profileData } from "@/data/profile";
import { projectsData } from "@/data/projects";
import { animateScrollToY } from "@/utils/scroll";

export function PortfolioShell({ children }: { children: React.ReactNode }) {
  const scrollToTop = () => {
    animateScrollToY(0, 650);
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] flex flex-col">
      <Sidebar />

      <div className="flex-1 w-full max-w-5xl mx-auto px-5 sm:px-8">
        <main aria-label="Portfolio content" className="py-12 sm:py-16">
          {children}
        </main>
      </div>

      <footer className="border-t border-[var(--border-color)]">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="font-display text-sm font-semibold text-[var(--text-primary)]">
              {profileData.fullName}
            </div>
            <p className="font-mono text-xs text-[var(--text-muted)]">
              {profileData.role} · {profileData.location}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 font-mono text-xs text-[var(--text-secondary)]">
            <Link
              href="/"
              className="hover:text-[var(--text-primary)] transition-colors"
            >
              Index
            </Link>
            <Link
              href="/projects"
              className="hover:text-[var(--text-primary)] transition-colors"
            >
              Archive ({projectsData.length})
            </Link>
            <Link
              href="/stack"
              className="hover:text-[var(--text-primary)] transition-colors"
            >
              Stack
            </Link>
            <a
              href="https://github.com/manwelAC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 hover:text-[var(--text-primary)] transition-colors"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </footer>

      <ProjectModal />
      <CommandPalette />
    </div>
  );
}
