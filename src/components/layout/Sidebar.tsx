"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Sun, Moon, Menu, X, Search } from "lucide-react";
import { profileData } from "@/data/profile";
import { projectsData } from "@/data/projects";
import { usePortfolio } from "@/context/PortfolioContext";
import { animateScrollToElement, animateScrollToY } from "@/utils/scroll";

type HomeSection = "index" | "experience" | "consulting";

export function Sidebar() {
  const pathname = usePathname();
  const { theme, setTheme, setIsCommandOpen } = usePortfolio();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHomeSection, setActiveHomeSection] =
    useState<HomeSection>("index");
  const isProgrammaticScroll = useRef(false);

  const navItems = [
    { label: "Index", href: "/", section: "index" as const },
    { label: `Projects (${projectsData.length})`, href: "/projects" },
    { label: "Stack", href: "/stack" },
    {
      label: "Experience",
      href: "/#experience",
      section: "experience" as const,
    },
    {
      label: "Contact",
      href: "/#consulting",
      section: "consulting" as const,
    },
  ];

  // Scroll-spy & initial hash handling on the home page
  useEffect(() => {
    if (pathname !== "/") return;

    const computeActiveSection = () => {
      if (isProgrammaticScroll.current) return;

      const experienceEl = document.getElementById("experience");
      const consultingEl = document.getElementById("consulting");

      const scrollBottom = window.innerHeight + window.scrollY;
      const docHeight = document.documentElement.scrollHeight;

      if (consultingEl) {
        const consultingRect = consultingEl.getBoundingClientRect();
        // Highlight Contact if near bottom of page or #consulting is in upper-mid viewport
        if (
          scrollBottom >= docHeight - 64 ||
          consultingRect.top <= window.innerHeight * 0.45
        ) {
          setActiveHomeSection("consulting");
          return;
        }
      }

      if (experienceEl) {
        const expRect = experienceEl.getBoundingClientRect();
        if (expRect.top <= window.innerHeight * 0.4) {
          setActiveHomeSection("experience");
          return;
        }
      }

      setActiveHomeSection("index");
    };

    // Check URL hash on mount or route return to "/"
    const hash = window.location.hash.replace("#", "");
    if (hash === "experience" || hash === "consulting") {
      setActiveHomeSection(hash);
      isProgrammaticScroll.current = true;
      requestAnimationFrame(() => {
        animateScrollToElement(hash, 88, 650, () => {
          isProgrammaticScroll.current = false;
        });
      });
    } else {
      computeActiveSection();
    }

    window.addEventListener("scroll", computeActiveSection, { passive: true });
    window.addEventListener("resize", computeActiveSection);
    return () => {
      window.removeEventListener("scroll", computeActiveSection);
      window.removeEventListener("resize", computeActiveSection);
    };
  }, [pathname]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: (typeof navItems)[number]
  ) => {
    setMobileOpen(false);

    if (pathname === "/" && item.section) {
      e.preventDefault();
      setActiveHomeSection(item.section);
      isProgrammaticScroll.current = true;

      if (item.section === "index") {
        window.history.pushState(null, "", "/");
        animateScrollToY(0, 650, () => {
          isProgrammaticScroll.current = false;
        });
      } else {
        window.history.pushState(null, "", `/#${item.section}`);
        animateScrollToElement(item.section, 88, 650, () => {
          isProgrammaticScroll.current = false;
        });
      }
    }
  };

  const isItemActive = (item: (typeof navItems)[number]): boolean => {
    if (pathname === "/") {
      return item.section === activeHomeSection;
    }
    if (!item.section) {
      return pathname.startsWith(item.href);
    }
    return false;
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border-color)] bg-[var(--bg-primary)]/90 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between gap-4">
        <Link
          href="/"
          onClick={(e) =>
            handleNavClick(e, {
              label: "Index",
              href: "/",
              section: "index",
            })
          }
          aria-label="John Manuel Alera Cuerdo home"
          className="font-display text-sm font-semibold tracking-tight text-[var(--text-primary)] hover:opacity-75 transition-opacity shrink-0"
        >
          {profileData.name}
          <span className="font-mono text-xs font-normal text-[var(--text-muted)] ml-2 hidden sm:inline">
            @{profileData.handle}
          </span>
        </Link>

        {/* Clean Editorial Text Navigation with Animated Highlight */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-6"
        >
          {navItems.map((item) => {
            const isActive = isItemActive(item);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                aria-current={isActive ? "page" : undefined}
                className={`relative py-1 font-mono text-xs transition-colors ${
                  isActive
                    ? "text-[var(--text-primary)] font-medium"
                    : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="nav-active-underline"
                    transition={{
                      type: "spring",
                      stiffness: 420,
                      damping: 32,
                    }}
                    className="absolute left-0 right-0 -bottom-0.5 h-[1.5px] bg-[var(--text-primary)]"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Minimal Right Controls */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsCommandOpen(true)}
            className="inline-flex items-center gap-2 px-2.5 py-1 rounded border border-[var(--border-color)] bg-[var(--surface-card)] hover:border-[var(--border-strong)] text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
            title="Command Palette (Ctrl+K)"
            aria-label="Search portfolio"
          >
            <Search className="w-3 h-3" />
            <span className="hidden sm:inline text-[11px]">Search</span>
            <kbd className="hidden sm:inline-block text-[10px] text-[var(--text-muted)]">
              ⌘K
            </kbd>
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            className="p-1.5 rounded border border-[var(--border-color)] bg-[var(--surface-card)] hover:border-[var(--border-strong)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
            title="Toggle theme"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-3.5 h-3.5" />
            ) : (
              <Moon className="w-3.5 h-3.5" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden p-1.5 rounded border border-[var(--border-color)] bg-[var(--surface-card)] text-[var(--text-primary)]"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="w-4 h-4" />
            ) : (
              <Menu className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-[var(--border-color)] bg-[var(--bg-primary)] px-5 py-4 space-y-2">
          {navItems.map((item) => {
            const isActive = isItemActive(item);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className={`block py-2 font-mono text-xs transition-colors ${
                  isActive
                    ? "text-[var(--text-primary)] font-semibold underline underline-offset-4"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
