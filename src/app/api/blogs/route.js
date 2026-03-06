// app/api/blogs/route.js

import { NextResponse } from "next/server";
import { getDbConnection } from "@/lib/db";

// GET all blogs with pagination
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') || '12', 10);

    const offset = (page - 1) * limit;

    const db = await getDbConnection();

    // Fetch the total count of published blogs for pagination
    const [totalRows] = await db.query(
      `SELECT COUNT(*) as total FROM blogs WHERE status = 'published'`
    );
    const total = totalRows[0].total;

    // Fetch the paginated blogs and include the 'content' column
    const [blogsRows] = await db.query(
      `SELECT id, title, slug, image_path, created_at, updated_at, status, category, content
       FROM blogs
       WHERE status = 'published'
       ORDER BY created_at DESC
       LIMIT ? OFFSET ?`,
      [limit, offset]
    );

    db.end();

    // Construct the full image URL for each blog post
    const blogsWithFullUrl = blogsRows.map(blog => {
      let fullImagePath = blog.image_path;
      // Fix malformed URLs (e.g. app.dynacleanindustries.com + https://res.cloudinary.com concatenated)
      if (fullImagePath && fullImagePath.includes('https://res.cloudinary.com')) {
        const cloudinaryMatch = fullImagePath.match(/https:\/\/res\.cloudinary\.com[^\s"']+/);
        if (cloudinaryMatch) fullImagePath = cloudinaryMatch[0];
      }
      // Only prepend API URL for relative paths; use as-is for full URLs (e.g. Cloudinary)
      else if (fullImagePath && !fullImagePath.startsWith('http://') && !fullImagePath.startsWith('https://')) {
        fullImagePath = `${process.env.NEXT_PUBLIC_API_URL}${fullImagePath}`;
      }
      return {
        ...blog,
        image_path: fullImagePath,
      };
    });

    return NextResponse.json({
      blogs: blogsWithFullUrl,
      total: total,
      page: page,
      limit: limit
    });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { message: "Internal server error." },
      { status: 500 }
    );
  }
}