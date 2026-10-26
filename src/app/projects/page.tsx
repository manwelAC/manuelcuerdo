"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ProjectShowcaseSection } from "@/components/portfolio/ProjectShowcaseSection";

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Back</span>
      </Link>

      <ProjectShowcaseSection
        showSearch={true}
        sectionTitle="All Projects"
      />
    </div>
  );
}
