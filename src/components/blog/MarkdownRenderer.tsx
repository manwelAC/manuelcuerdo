"use client";

import React from "react";

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  // Split content into blocks (code blocks vs regular markdown lines)
  const parts = content.split(/(```[\s\S]*?```)/g);

  const renderInline = (text: string) => {
    // Handle bold, italic, and inline code
    const tokens = text.split(/(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*)/g);
    return tokens.map((token, idx) => {
      if (token.startsWith("`") && token.endsWith("`")) {
        return (
          <code
            key={idx}
            className="px-1.5 py-0.5 rounded bg-[var(--surface-hover)] border border-[var(--border-color)] font-mono text-[13px] text-[var(--accent-color)]"
          >
            {token.slice(1, -1)}
          </code>
        );
      }
      if (token.startsWith("**") && token.endsWith("**")) {
        return (
          <strong key={idx} className="font-semibold text-[var(--text-primary)]">
            {token.slice(2, -2)}
          </strong>
        );
      }
      if (token.startsWith("*") && token.endsWith("*")) {
        return (
          <em key={idx} className="italic">
            {token.slice(1, -1)}
          </em>
        );
      }
      return token;
    });
  };

  return (
    <div className="space-y-5 text-[15px] leading-relaxed text-[var(--text-secondary)]">
      {parts.map((part, partIdx) => {
        if (part.startsWith("```") && part.endsWith("```")) {
          const lines = part.slice(3, -3).trim().split("\n");
          const firstLine = lines[0]?.trim() || "";
          const hasLang = /^[a-zA-Z0-9_-]+$/.test(firstLine);
          const lang = hasLang ? firstLine : "code";
          const codeBody = hasLang ? lines.slice(1).join("\n") : lines.join("\n");

          return (
            <div
              key={partIdx}
              className="my-5 rounded-xl overflow-hidden border border-[var(--border-color)] bg-zinc-950 text-zinc-100 shadow-sm"
            >
              <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800 bg-zinc-900/70 font-mono text-[11px] text-zinc-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                </div>
                <span className="uppercase tracking-wider">{lang}</span>
              </div>
              <pre className="p-4 overflow-x-auto font-mono text-xs sm:text-[13px] leading-relaxed text-zinc-200">
                <code>{codeBody}</code>
              </pre>
            </div>
          );
        }

        const blocks = part.trim().split(/\r?\n\r?\n/);
        return (
          <React.Fragment key={partIdx}>
            {blocks.map((block, bIdx) => {
              const trimmed = block.trim();
              if (!trimmed) return null;

              if (trimmed === "---") {
                return (
                  <hr
                    key={bIdx}
                    className="my-8 border-[var(--border-color)]"
                  />
                );
              }

              if (trimmed.startsWith("## ")) {
                return (
                  <h2
                    key={bIdx}
                    className="pt-4 text-xl font-mono font-semibold tracking-tight text-[var(--text-primary)]"
                  >
                    {trimmed.slice(3)}
                  </h2>
                );
              }

              if (trimmed.startsWith("### ")) {
                return (
                  <h3
                    key={bIdx}
                    className="pt-2 text-base font-mono font-semibold text-[var(--text-primary)]"
                  >
                    {trimmed.slice(4)}
                  </h3>
                );
              }

              if (trimmed.startsWith("> ")) {
                return (
                  <blockquote
                    key={bIdx}
                    className="pl-4 py-1 border-l-2 border-[var(--accent-color)] bg-[var(--surface-card)]/60 rounded-r-lg italic text-[var(--text-secondary)]"
                  >
                    {renderInline(trimmed.replace(/^>\s*/gm, ""))}
                  </blockquote>
                );
              }

              const lines = trimmed.split(/\r?\n/);
              const isUnorderedList = lines.every((l) =>
                l.trim().startsWith("- ")
              );
              if (isUnorderedList) {
                return (
                  <ul key={bIdx} className="space-y-2 pl-5 list-disc marker:text-[var(--accent-color)]">
                    {lines.map((line, lIdx) => (
                      <li key={lIdx} className="pl-1">
                        {renderInline(line.trim().slice(2))}
                      </li>
                    ))}
                  </ul>
                );
              }

              const isOrderedList = lines.every((l) =>
                /^\d+\.\s/.test(l.trim())
              );
              if (isOrderedList) {
                return (
                  <ol key={bIdx} className="space-y-2 pl-5 list-decimal marker:font-mono marker:text-[var(--accent-color)]">
                    {lines.map((line, lIdx) => (
                      <li key={lIdx} className="pl-1">
                        {renderInline(line.trim().replace(/^\d+\.\s/, ""))}
                      </li>
                    ))}
                  </ol>
                );
              }

              return <p key={bIdx}>{renderInline(trimmed)}</p>;
            })}
          </React.Fragment>
        );
      })}
    </div>
  );
}
