"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { profileData } from "@/data/profile";

export default function StackPage() {
  return (
    <div className="space-y-12">
      <header className="space-y-3 border-b border-[var(--border-color)] pb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back</span>
        </Link>

        <h1 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-[var(--text-primary)]">
          Technical Stack
        </h1>
        <p className="text-sm text-[var(--text-secondary)] max-w-xl">
          Languages, frameworks, databases, and local-first tools I use across
          enterprise ERPs, desktop apps, and developer tooling.
        </p>
      </header>

      <div className="divide-y divide-[var(--border-color)]">
        {profileData.stackCategories.map((group) => (
          <section
            key={group.category}
            className="py-8 first:pt-0 grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
          >
            <div className="md:col-span-4 space-y-1">
              <h2 className="font-mono text-xs uppercase tracking-wider text-[var(--text-primary)] font-semibold">
                {group.category}
              </h2>
              {group.description && (
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  {group.description}
                </p>
              )}
            </div>

            <div className="md:col-span-8 divide-y divide-[var(--border-color)] border-t md:border-t-0 border-[var(--border-color)]">
              {group.items.map((item) => (
                <div
                  key={item.name}
                  className="py-3 first:pt-0 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1"
                >
                  <span className="font-display text-sm font-semibold text-[var(--text-primary)]">
                    {item.name}
                  </span>
                  <span className="font-mono text-xs text-[var(--text-secondary)]">
                    {item.role}
                  </span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
