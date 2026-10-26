"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, PenTool } from "lucide-react";
import { BlogListSection } from "@/components/portfolio/BlogListSection";

export default function BlogArchivePage() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="space-y-4"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to overview</span>
        </Link>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-mono font-semibold tracking-tight text-[var(--text-primary)]">
              Engineering Notes & Blog
            </h1>
            <p className="text-sm text-[var(--text-secondary)] max-w-xl">
              Deep dives on local-first AI developer tools, multi-branch ERP
              architecture, and building clean software systems.
            </p>
          </div>

          <Link
            href="/blog/studio"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[var(--text-primary)] text-[var(--bg-primary)] font-mono text-xs font-medium hover:opacity-90 shrink-0 transition-opacity"
          >
            <PenTool className="w-3.5 h-3.5" />
            <span>Open Blog Studio</span>
          </Link>
        </div>
      </motion.div>

      <BlogListSection
        showControls={true}
        sectionNumber="ALL"
        sectionTitle="published articles"
      />
    </div>
  );
}
