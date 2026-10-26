"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface SectionHeaderProps {
  number?: string;
  title: string;
  subtitle?: string;
  handwrittenNote?: string;
  actionLabel?: string;
  actionHref?: string;
  secondaryAction?: React.ReactNode;
  id?: string;
}

export function SectionHeader({
  number,
  title,
  subtitle,
  actionLabel,
  actionHref,
  secondaryAction,
  id,
}: SectionHeaderProps) {
  return (
    <div id={id} className="scroll-mt-24 mb-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-[var(--border-color)]">
        <div className="space-y-1">
          <div className="flex items-baseline gap-3">
            {number && (
              <span className="font-mono text-xs text-[var(--text-muted)]">
                {number} /
              </span>
            )}
            <h2 className="text-xl sm:text-2xl font-display font-bold tracking-tight text-[var(--text-primary)]">
              {title}
            </h2>
          </div>
          {subtitle && (
            <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-xl">
              {subtitle}
            </p>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-3 self-start sm:self-end">
          {secondaryAction}
          {actionLabel && actionHref && (
            <Link
              href={actionHref}
              className="group inline-flex items-center gap-1 font-mono text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              <span>{actionLabel}</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
