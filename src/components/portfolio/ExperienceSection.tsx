"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { profileData } from "@/data/profile";
import { SectionHeader } from "@/components/ui/SectionHeader";

const CORE_TOOLS = [
  "PHP",
  "Laravel",
  "TypeScript",
  "React / Next.js",
  "Angular",
  "C# / .NET",
  "Flutter",
  "Python",
  "MySQL",
  "SQLite",
  "Docker",
  "Playwright",
];

export function ExperienceSection({
  sectionNumber = "02",
  sectionTitle = "Experience & Stack",
}: {
  sectionNumber?: string;
  sectionTitle?: string;
}) {
  return (
    <section aria-labelledby="experience" className="mb-24">
      <SectionHeader
        id="experience"
        number={sectionNumber}
        title={sectionTitle}
        actionLabel="Full Stack"
        actionHref="/stack"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Left 7 Columns: Scannable 3-Row Experience Index */}
        <div className="lg:col-span-7 divide-y divide-[var(--border-color)] border-b border-[var(--border-color)]">
          {profileData.experiences.map((exp) => (
            <div key={exp.id} className="py-4 first:pt-0 space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div className="flex flex-wrap items-baseline gap-2">
                  <h3 className="text-base font-display font-semibold text-[var(--text-primary)]">
                    {exp.role}
                  </h3>
                  <span className="font-mono text-xs text-[var(--text-muted)]">
                    · {exp.company}
                  </span>
                </div>

                <span className="font-mono text-xs text-[var(--text-muted)] shrink-0">
                  {exp.period}
                </span>
              </div>

              <p className="text-sm text-[var(--text-secondary)]">
                {exp.summary}
              </p>
            </div>
          ))}
        </div>

        {/* Right 5 Columns: Compact Core Toolkit Grid */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-baseline justify-between">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)]">
              Core Toolkit
            </h3>
            <Link
              href="/stack"
              className="font-mono text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] inline-flex items-center gap-0.5"
            >
              <span>All tools</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {CORE_TOOLS.map((tool) => (
              <div
                key={tool}
                className="px-3 py-2 rounded-lg border border-[var(--border-color)] bg-[var(--surface-card)] font-mono text-xs text-[var(--text-primary)]"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
