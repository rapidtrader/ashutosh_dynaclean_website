// app/api/blogs/[slug]/route.js

import { NextResponse } from "next/server";
import { getDbConnection } from "@/lib/db";

export async function GET(request, { params }) {
  try {
    const { slug } = await params;

    if (!slug) {
      return NextResponse.json({ message: "Slug is missing" }, { status: 400 });
    }

    const db = await getDbConnection();
    // api work

    // Fetch the single blog post by its slug
    const [blogRows] = await db.query(
      `SELECT id, title, slug, image_path, created_at, content
       FROM blogs
       WHERE slug = ?`,
      [slug],
    );

    db.end();

    if (blogRows.length === 0) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    const blog = blogRows[0];

    // Construct the full image URL
    if (blog && blog.image_path) {
      const apiBase = (process.env.NEXT_PUBLIC_API_URL || '').replace(/\/$/, '');
      // Fix malformed URLs (e.g. app.dynacleanindustries.com + https://res.cloudinary.com concatenated)
      if (blog.image_path.includes('https://res.cloudinary.com')) {
        const cloudinaryMatch = blog.image_path.match(/https:\/\/res\.cloudinary\.com[^\s"']+/);
        if (cloudinaryMatch) blog.image_path = cloudinaryMatch[0];
      }
      // Replace localhost URLs with production API URL (DB may have localhost from dev)
      else if (blog.image_path.includes('localhost') || blog.image_path.includes('127.0.0.1')) {
        try {
          const url = new URL(blog.image_path);
          blog.image_path = apiBase ? `${apiBase}${url.pathname}` : blog.image_path;
        } catch (_) {}
      } else if (!blog.image_path.startsWith('http://') && !blog.image_path.startsWith('https://')) {
        blog.image_path = apiBase ? `${apiBase}${blog.image_path.startsWith('/') ? '' : '/'}${blog.image_path}` : blog.image_path;
      }
    }

    return NextResponse.json({ blog });
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return NextResponse.json(
      { message: "Internal server error." },
      { status: 500 },
    );
  }
}
