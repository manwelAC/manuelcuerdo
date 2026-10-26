"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Layers, Smartphone, ArrowUpRight } from "lucide-react";
import { projectsData } from "@/data/projects";
import { usePortfolio } from "@/context/PortfolioContext";

export function HighlightsGrid() {
  const { setActiveProjectModal } = usePortfolio();

  const domains = [
    {
      code: "DOM.01",
      title: "Local-First AI & Dev Workstations",
      subtitle: "ZERO-TELEMETRY · OLLAMA · AST & OCR",
      description:
        "On-device developer intelligence, Git change mapping, automated video secret redaction, and background focus telemetry daemons.",
      icon: Cpu,
      projects: projectsData.filter(
        (p) =>
          p.category === "AI & Developer Tools" ||
          p.category === "Productivity & Systems"
      ),
    },
    {
      code: "DOM.02",
      title: "Enterprise ERP, HRIS & Payroll",
      subtitle: "MULTI-BRANCH · STATUTORY · POS & LMS",
      description:
        "Production operational backbones for clinics and corporations: automated PH statutory payroll, DTR timekeeping, NTE compliance, and P&L reporting.",
      icon: Layers,
      projects: projectsData.filter((p) => p.category === "Enterprise & ERP"),
    },
    {
      code: "DOM.03",
      title: "Consumer Mobile, Geo & FinTech",
      subtitle: "GEOSPATIAL · DIGITAL WALLETS · MARKETPLACES",
      description:
        "Interactive map price discovery platforms, multi-fund digital wallets, and real-time mobile pilot dispatch applications.",
      icon: Smartphone,
      projects: projectsData.filter((p) => p.category === "Consumer & Social"),
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
      className="mb-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {domains.map((domain) => {
          const Icon = domain.icon;
          return (
            <div
              key={domain.code}
              className="group relative rounded-2xl border border-[var(--border-color)] bg-[var(--surface-card)] p-5 flex flex-col justify-between space-y-5 hover:border-[var(--accent-color)]/60 transition-all shadow-2xs"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded bg-[var(--accent-subtle)] text-[var(--accent-color)] font-semibold">
                    {domain.code}
                  </span>
                  <div className="w-8 h-8 rounded-lg border border-[var(--border-color)] bg-[var(--surface-elevated)] flex items-center justify-center text-[var(--accent-color)]">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-base font-bold text-[var(--text-primary)]">
                    {domain.title}
                  </h3>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)] mt-0.5">
                    {domain.subtitle}
                  </div>
                </div>

                <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
                  {domain.description}
                </p>
              </div>

              {/* Direct Interactive Shipped Systems in this Domain */}
              <div className="pt-3 border-t border-[var(--border-color)] space-y-2">
                <div className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                  Shipped Systems ({domain.projects.length})
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {domain.projects.map((proj) => (
                    <button
                      key={proj.slug}
                      onClick={() => setActiveProjectModal(proj)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border border-[var(--border-color)] bg-[var(--surface-elevated)] hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] font-mono text-[11px] text-[var(--text-primary)] transition-colors"
                      title={`Preview ${proj.title} (${proj.screenshots.length} screens)`}
                    >
                      <span>{proj.title}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-60" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}
