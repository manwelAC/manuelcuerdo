import { NextResponse } from "next/server";
import {
  getAllBlogsServer,
  saveMarkdownBlogToDisk,
  estimateReadingTime,
} from "@/lib/blog-fs";
import { BlogPost } from "@/types/portfolio";

export async function GET() {
  const blogs = getAllBlogsServer();
  return NextResponse.json({ blogs });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      title,
      slug,
      excerpt,
      content,
      category,
      tags,
      featured,
      coverImage,
      relatedProjectSlug,
      publishedAt,
    } = body;

    if (!title || !content) {
      return NextResponse.json(
        { error: "Title and content are required." },
        { status: 400 }
      );
    }

    const generatedSlug =
      slug ||
      title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");

    const newPost: BlogPost = {
      slug: generatedSlug,
      title,
      excerpt:
        excerpt ||
        content.replace(/[#*`>-]/g, "").slice(0, 150).trim() + "...",
      content,
      publishedAt:
        publishedAt ||
        new Date().toLocaleDateString("en-US", {
          month: "short",
          year: "numeric",
        }),
      readingTime: estimateReadingTime(content),
      category: category || "Engineering",
      tags: Array.isArray(tags)
        ? tags
        : typeof tags === "string"
        ? tags
            .split(",")
            .map((t: string) => t.trim())
            .filter(Boolean)
        : ["Engineering"],
      featured: Boolean(featured),
      coverImage: coverImage || undefined,
      relatedProjectSlug: relatedProjectSlug || undefined,
    };

    const { filePath } = saveMarkdownBlogToDisk(newPost);

    return NextResponse.json({
      success: true,
      post: newPost,
      savedTo: filePath,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to save markdown file to disk.",
      },
      { status: 500 }
    );
  }
}
