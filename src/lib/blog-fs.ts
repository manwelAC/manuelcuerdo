import fs from "fs";
import path from "path";
import { BlogPost } from "@/types/portfolio";
import { defaultBlogsData } from "@/data/blogs";

const BLOG_CONTENT_DIR = path.join(process.cwd(), "src", "content", "blogs");

function parseFrontmatter(fileContent: string): {
  metadata: Record<string, string>;
  content: string;
} {
  const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/;
  const match = frontmatterRegex.exec(fileContent);

  if (!match) {
    return { metadata: {}, content: fileContent.trim() };
  }

  const frontMatterBlock = match[1];
  const content = match[2].trim();
  const frontMatterLines = frontMatterBlock.trim().split(/\r?\n/);
  const metadata: Record<string, string> = {};

  frontMatterLines.forEach((line) => {
    const colonIndex = line.indexOf(":");
    if (colonIndex !== -1) {
      const key = line.slice(0, colonIndex).trim();
      let value = line.slice(colonIndex + 1).trim();
      value = value.replace(/^['"](.*)['"]$/, "$1");
      metadata[key] = value;
    }
  });

  return { metadata, content };
}

export function estimateReadingTime(text: string): string {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

export function getMarkdownBlogsFromDisk(): BlogPost[] {
  try {
    if (!fs.existsSync(BLOG_CONTENT_DIR)) {
      return [];
    }

    const files = fs
      .readdirSync(BLOG_CONTENT_DIR)
      .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"));

    return files.map((file) => {
      const slug = file.replace(/\.mdx?$/, "");
      const fullPath = path.join(BLOG_CONTENT_DIR, file);
      const raw = fs.readFileSync(fullPath, "utf-8");
      const { metadata, content } = parseFrontmatter(raw);

      const tags = metadata.tags
        ? metadata.tags
            .replace(/^\[|\]$/g, "")
            .split(",")
            .map((t) => t.trim().replace(/^['"]|['"]$/g, ""))
            .filter(Boolean)
        : ["Engineering"];

      return {
        slug: metadata.slug || slug,
        title: metadata.title || slug,
        excerpt:
          metadata.excerpt ||
          content.replace(/[#*`>-]/g, "").slice(0, 150).trim() + "...",
        content,
        publishedAt: metadata.publishedAt || "Oct 2026",
        readingTime: metadata.readingTime || estimateReadingTime(content),
        category: metadata.category || "Engineering",
        tags,
        featured: metadata.featured === "true",
        coverImage: metadata.coverImage || undefined,
        relatedProjectSlug: metadata.relatedProjectSlug || undefined,
      };
    });
  } catch {
    return [];
  }
}

export function getAllBlogsServer(): BlogPost[] {
  const diskBlogs = getMarkdownBlogsFromDisk();
  const diskSlugs = new Set(diskBlogs.map((b) => b.slug));
  const remainingDefaults = defaultBlogsData.filter((b) => !diskSlugs.has(b.slug));
  return [...diskBlogs, ...remainingDefaults];
}

export function saveMarkdownBlogToDisk(post: BlogPost): { filePath: string } {
  if (!fs.existsSync(BLOG_CONTENT_DIR)) {
    fs.mkdirSync(BLOG_CONTENT_DIR, { recursive: true });
  }

  const safeSlug = post.slug
    .toLowerCase()
    .replace(/[^a-z0-9-_]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

  const frontmatter = [
    "---",
    `title: "${post.title.replace(/"/g, '\\"')}"`,
    `slug: "${safeSlug}"`,
    `excerpt: "${post.excerpt.replace(/"/g, '\\"')}"`,
    `publishedAt: "${post.publishedAt}"`,
    `readingTime: "${post.readingTime || estimateReadingTime(post.content)}"`,
    `category: "${post.category}"`,
    `tags: [${post.tags.map((t) => `"${t}"`).join(", ")}]`,
    `featured: ${Boolean(post.featured)}`,
    ...(post.coverImage ? [`coverImage: "${post.coverImage}"`] : []),
    ...(post.relatedProjectSlug
      ? [`relatedProjectSlug: "${post.relatedProjectSlug}"`]
      : []),
    "---",
    "",
    post.content.trim(),
    "",
  ].join("\n");

  const filePath = path.join(BLOG_CONTENT_DIR, `${safeSlug}.md`);
  fs.writeFileSync(filePath, frontmatter, "utf-8");
  return { filePath };
}
