import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getProjectBySlug } from "@/data/projects";

const recentProjects = [
  {
    slug: "agent-farmers",
    description: "A desktop workspace for planning and reviewing work with an AI crew.",
  },
  {
    slug: "growcom",
    description: "Discord tools, item lookups, and reminders for a Growtopia community.",
  },
];

export function RecentProjects() {
  return (
    <section aria-labelledby="recent-projects-heading" className="mt-10">
      <div className="mb-5 flex items-baseline justify-between gap-4 border-b border-[var(--border-color)] pb-3">
        <h2
          id="recent-projects-heading"
          className="font-mono text-xs font-medium text-[var(--text-secondary)]"
        >
          Recent projects
        </h2>
        <span className="font-mono text-[10px] text-[var(--text-muted)]">
          Personal work / 2026
        </span>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        {recentProjects.map(({ slug, description }) => {
          const project = getProjectBySlug(slug);
          if (!project) return null;

          return (
            <Link
              key={slug}
              href={`/projects/${slug}`}
              className="group flex items-start gap-4 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--text-primary)]"
            >
              <img
                src={project.coverImage}
                alt={project.screenshots[0]?.alt ?? project.title}
                width={160}
                height={100}
                className="aspect-[16/10] w-28 shrink-0 rounded border border-[var(--border-color)] object-cover sm:w-36"
              />
              <div className="min-w-0 space-y-1.5">
                <h3 className="flex items-center gap-2 font-display text-sm font-semibold text-[var(--text-primary)]">
                  <span className="group-hover:underline underline-offset-4">
                    {project.title}
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-3.5 w-3.5 shrink-0 text-[var(--text-muted)] transition-colors group-hover:text-[var(--text-primary)]"
                  />
                </h3>
                <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
                  {description}
                </p>
                <p className="font-mono text-[10px] text-[var(--text-muted)]">
                  {project.techStack.slice(0, 3).join(" · ")}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
