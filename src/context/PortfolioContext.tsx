"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { BlogPost, ProjectItem } from "@/types/portfolio";
import { defaultBlogsData } from "@/data/blogs";

type ThemeMode = "light" | "dark" | "system";

interface PortfolioContextValue {
  theme: ThemeMode;
  resolvedTheme: "light" | "dark";
  setTheme: (theme: ThemeMode) => void;
  isCommandOpen: boolean;
  setIsCommandOpen: (open: boolean) => void;
  activeProjectModal: ProjectItem | null;
  setActiveProjectModal: (project: ProjectItem | null) => void;
  blogs: BlogPost[];
  addCustomBlog: (post: BlogPost) => void;
  deleteCustomBlog: (slug: string) => void;
  refreshBlogs: () => Promise<void>;
}

const PortfolioContext = createContext<PortfolioContextValue | undefined>(
  undefined
);

const LOCAL_STORAGE_BLOGS_KEY = "manwel_portfolio_custom_blogs_v1";
const LOCAL_STORAGE_THEME_KEY = "manwel_portfolio_theme_v1";

export function PortfolioProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>("dark");
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("dark");
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [activeProjectModal, setActiveProjectModal] =
    useState<ProjectItem | null>(null);
  const [blogs, setBlogs] = useState<BlogPost[]>(defaultBlogsData);

  // Load saved theme
  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeMode | null;
    if (saved === "light" || saved === "dark" || saved === "system") {
      setThemeState(saved);
    }
  }, []);

  // Apply theme to document
  useEffect(() => {
    const root = document.documentElement;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = () => {
      const effective =
        theme === "system" ? (mediaQuery.matches ? "dark" : "light") : theme;
      setResolvedTheme(effective);
      if (effective === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    };

    applyTheme();
    mediaQuery.addEventListener("change", applyTheme);
    return () => mediaQuery.removeEventListener("change", applyTheme);
  }, [theme]);

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  // Global keyboard shortcuts (Alt+K or Ctrl+K / Cmd+K for Command Palette)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.altKey && e.key.toLowerCase() === "k") ||
        ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k")
      ) {
        e.preventDefault();
        setIsCommandOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsCommandOpen(false);
        setActiveProjectModal(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const mergeBlogs = (serverPosts: BlogPost[], localPosts: BlogPost[]) => {
    const map = new Map<string, BlogPost>();
    for (const post of localPosts) {
      map.set(post.slug, post);
    }
    for (const post of serverPosts) {
      if (!map.has(post.slug)) {
        map.set(post.slug, post);
      }
    }
    for (const post of defaultBlogsData) {
      if (!map.has(post.slug)) {
        map.set(post.slug, post);
      }
    }
    return Array.from(map.values());
  };

  const refreshBlogs = async () => {
    let localPosts: BlogPost[] = [];
    try {
      const raw = localStorage.getItem(LOCAL_STORAGE_BLOGS_KEY);
      if (raw) localPosts = JSON.parse(raw);
    } catch {
      // ignore
    }

    try {
      const res = await fetch("/api/blogs", { cache: "no-store" });
      if (res.ok) {
        const data = await res.json();
        setBlogs(mergeBlogs(data.blogs || [], localPosts));
        return;
      }
    } catch {
      // fallback to local + defaults
    }

    setBlogs(mergeBlogs([], localPosts));
  };

  useEffect(() => {
    refreshBlogs();
  }, []);

  const addCustomBlog = (post: BlogPost) => {
    try {
      const raw = localStorage.getItem(LOCAL_STORAGE_BLOGS_KEY);
      const existing: BlogPost[] = raw ? JSON.parse(raw) : [];
      const filtered = existing.filter((b) => b.slug !== post.slug);
      const updated = [post, ...filtered];
      localStorage.setItem(LOCAL_STORAGE_BLOGS_KEY, JSON.stringify(updated));
    } catch {
      // ignore
    }
    setBlogs((prev) => [post, ...prev.filter((b) => b.slug !== post.slug)]);
  };

  const deleteCustomBlog = (slug: string) => {
    try {
      const raw = localStorage.getItem(LOCAL_STORAGE_BLOGS_KEY);
      if (raw) {
        const existing: BlogPost[] = JSON.parse(raw);
        const updated = existing.filter((b) => b.slug !== slug);
        localStorage.setItem(LOCAL_STORAGE_BLOGS_KEY, JSON.stringify(updated));
      }
    } catch {
      // ignore
    }
    setBlogs((prev) => prev.filter((b) => b.slug !== slug));
  };

  return (
    <PortfolioContext.Provider
      value={{
        theme,
        resolvedTheme,
        setTheme,
        isCommandOpen,
        setIsCommandOpen,
        activeProjectModal,
        setActiveProjectModal,
        blogs,
        addCustomBlog,
        deleteCustomBlog,
        refreshBlogs,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const ctx = useContext(PortfolioContext);
  if (!ctx) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return ctx;
}
