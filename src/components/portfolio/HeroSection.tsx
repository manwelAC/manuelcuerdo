"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { profileData } from "@/data/profile";
import { projectsData } from "@/data/projects";
import { animateScrollToElement } from "@/utils/scroll";

export function HeroSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section aria-labelledby="hero-heading" className="pb-16 sm:pb-20">
      <div className="max-w-3xl space-y-6">
        {/* Identity Row */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border border-[var(--border-color)] shrink-0 bg-[var(--surface-elevated)]">
            <img
              src={profileData.avatar}
              alt={profileData.fullName}
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="space-y-0.5">
            <h1
              id="hero-heading"
              className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight"
            >
              {profileData.fullName}
            </h1>
            <p className="font-mono text-xs sm:text-sm text-[var(--text-muted)]">
              {profileData.role} · {profileData.location}
            </p>
          </div>
        </div>

        {/* Editorial Bio — Clean, High-Contrast Typography Without Multi-Color Slop */}
        <div className="space-y-4">
          <p className="font-display text-xl sm:text-2xl font-medium text-[var(--text-primary)] leading-snug tracking-tight">
            Architecting dependable systems and clean interfaces across web,
            desktop, and local-first tools.
          </p>

          <p className="text-sm sm:text-base leading-relaxed text-[var(--text-secondary)]">
            I earned my BS in Computer Science from the University of Caloocan
            City and currently build production software at Ascendens Asia.
            From solo-architecting multi-branch clinic ERPs and payroll engines
            in Laravel to building local-first desktop and mobile tools in .NET,
            Flutter, Python, and Next.js, I care about software that feels calm
            and works reliably.
          </p>
        </div>

        {/* Restrained Actions & Social Links */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 pt-1">
          <Link
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState(null, "", "#projects");
              animateScrollToElement("projects", 88, 650);
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--text-primary)] text-[var(--bg-primary)] font-mono text-xs font-medium hover:opacity-85 transition-opacity"
          >
            <span>Selected Work ({projectsData.length})</span>
          </Link>

          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-[var(--border-color)] bg-[var(--surface-card)] hover:border-[var(--border-strong)] font-mono text-xs text-[var(--text-primary)] transition-colors cursor-pointer"
          >
            {copiedEmail ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Copied {profileData.email}</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                <span>{profileData.email}</span>
              </>
            )}
          </button>

          <div className="flex flex-wrap items-center gap-4 font-mono text-xs">
            {profileData.socials
              .filter((s) => s.label !== "email" && s.label !== "studio")
              .map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-0.5 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors capitalize"
                >
                  <span>{social.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              ))}
          </div>
        </div>
      </div>

      {/* Structural Hairline Ledger Strip */}
      <div className="mt-10 pt-6 border-t border-[var(--border-color)] grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-xs">
        <div className="space-y-1">
          <div className="text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
            Currently
          </div>
          <div className="text-[var(--text-primary)] font-medium">
            Jr. System Developer @ Ascendens Asia
          </div>
        </div>

        <div className="space-y-1">
          <div className="text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
            Education
          </div>
          <div className="text-[var(--text-primary)] font-medium">
            BS Computer Science · Univ. of Caloocan City
          </div>
        </div>

        <div className="space-y-1">
          <div className="text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
            Core Focus
          </div>
          <div className="text-[var(--text-primary)] font-medium">
            Enterprise ERPs · Local-First Apps · Dev Tools
          </div>
        </div>
      </div>
    </section>
  );
}
