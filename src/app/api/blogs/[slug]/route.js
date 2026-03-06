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

    // Construct the full image URL - only prepend API URL for relative paths; use as-is for full URLs (e.g. Cloudinary)
    if (blog && blog.image_path) {
      const isFullUrl = blog.image_path.startsWith('http://') || blog.image_path.startsWith('https://');
      blog.image_path = isFullUrl ? blog.image_path : `${process.env.NEXT_PUBLIC_API_URL}${blog.image_path}`;
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
