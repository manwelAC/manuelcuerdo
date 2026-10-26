"use client";

import React, { useState } from "react";
import { Check, Copy, ArrowUpRight } from "lucide-react";
import { profileData } from "@/data/profile";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ConsultingSection({
  sectionNumber = "03",
  sectionTitle = "Contact",
}: {
  sectionNumber?: string;
  sectionTitle?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section aria-labelledby="consulting" className="mb-8">
      <SectionHeader
        id="consulting"
        number={sectionNumber}
        title={sectionTitle}
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-7 space-y-3">
          <h3 className="font-display text-lg sm:text-xl font-semibold text-[var(--text-primary)]">
            {profileData.availabilityText}
          </h3>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-xl">
            If you need a custom business system, web application, or
            local-first tool built from database architecture to interface, feel
            free to reach out directly.
          </p>
        </div>

        <div className="md:col-span-5 flex flex-col sm:flex-row md:flex-col items-start gap-3">
          <a
            href={`mailto:${profileData.email}?subject=Project%20Inquiry%20%E2%80%94%20Portfolio`}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[var(--text-primary)] text-[var(--bg-primary)] font-mono text-xs font-medium hover:opacity-85 transition-opacity"
          >
            <span>Email {profileData.email}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-2 font-mono text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors cursor-pointer py-1"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Copied address to clipboard</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy email address</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
