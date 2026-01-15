// app/blogs/[slug]/page.jsx
"use client";

import { useState, useEffect, useMemo } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { FiClock, FiCalendar } from "react-icons/fi";
// import toast from "react-hot-toast";
import Image from "next/image";

const WORDS_PER_MINUTE = 200;
const stripHtml = (html) => {
  if (!html) return "";
  if (typeof window === "undefined") return html;
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
};

const BlogPostPage = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    const fetchBlog = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/blogs/${slug}`);
        if (!response.ok) {
          throw new Error("Failed to fetch blog post.");
        }
        const data = await response.json();
        setBlog(data.blog);
      } catch (err) {
        // toast.error(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [slug]);

  useEffect(() => {
    // fetch a few more blogs to show as suggestions in the sidebar
    const fetchRelated = async () => {
      try {
        const response = await fetch(`/api/blogs?page=1&limit=5`);
        if (!response.ok) return;
        const data = await response.json();
        const filtered = data.blogs?.filter((b) => b.slug !== slug) ?? [];
        setRelatedBlogs(filtered);
      } catch (err) {
        // fail silently for sidebar
      }
    };

    fetchRelated();
  }, [slug]);

  const readingTime = useMemo(() => {
    if (!blog?.content) return null;
    const words = stripHtml(blog.content).trim().split(/\s+/).length;
    return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
  }, [blog]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-600 text-lg">Loading blog post...</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-600 text-lg">Blog post not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50/80">
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-6xl md:mb-20">
        <div className="mb-6 md:mb-8 flex flex-wrap items-center justify-between gap-3 text-xs md:text-sm text-gray-500">
          <div className="flex flex-wrap items-center gap-1 md:gap-2">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
            <span className="text-gray-300">/</span>
            <Link
              href="/blogs"
              className="hover:text-blue-600 transition-colors"
            >
              Blogs
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-700 font-medium line-clamp-1 max-w-xs md:max-w-md">
              {blog.title}
            </span>
          </div>

          <Link
            href="/blogs"
            className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-gray-600 text-xs md:text-sm shadow-sm hover:border-blue-500 hover:text-blue-600 transition-colors"
          >
            <span className="text-xs">←</span>
            <span>Back to all blogs</span>
          </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          <article className="flex-1 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg shadow-slate-200/70 border border-slate-100 p-6 md:p-10">
            <header className="mb-7 md:mb-8">
              {blog.category && (
                <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 mb-3">
                  {blog.category}
                </span>
              )}
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 md:mb-4 leading-snug break-words">
                {blog.title}
              </h1>
              <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-gray-500">
                <span className="inline-flex items-center gap-1.5">
                  <FiCalendar className="h-4 w-4" />
                  <time dateTime={blog.created_at}>
                    {new Date(blog.created_at).toLocaleDateString()}
                  </time>
                </span>
                {readingTime && (
                  <span className="inline-flex items-center gap-1.5">
                    <FiClock className="h-4 w-4" />
                    <span>{readingTime} min read</span>
                  </span>
                )}
              </div>
            </header>

            {blog.image_path && (
              <div className="relative w-full aspect-video mb-8 rounded-2xl overflow-hidden border border-slate-100 shadow-md shadow-slate-200 bg-slate-50">
                <Image
                  src={blog.image_path}
                  alt={blog.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 60vw"
                  priority
                />
              </div>
            )}

            <section className="blog-content prose prose-base sm:prose-lg max-w-none text-slate-800">
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            </section>

            {Array.isArray(blog.tags) && blog.tags.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-2">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 border border-slate-200"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </article>

          {relatedBlogs.length > 0 && (
            <aside className="w-full md:w-72 lg:w-80 flex-shrink-0">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg shadow-slate-200/70 border border-slate-100 p-5 md:p-6 sticky top-24 max-h-[80vh] overflow-y-auto">
                <h2 className="text-lg md:text-xl font-semibold text-slate-900 mb-1">
                  More blogs
                </h2>
                <p className="text-xs text-slate-500 mb-4">
                  Discover related reads to continue exploring.
                </p>
                <ul className="space-y-3 text-sm md:text-base">
                  {relatedBlogs.map((item) => (
                    <li
                      key={item.slug}
                      className="border-b last:border-b-0 border-slate-100 pb-3 last:pb-0"
                    >
                      <Link
                        href={`/blogs/${item.slug}`}
                        className="flex items-start gap-3 group"
                      >
                        {item.image_path && (
                          <div className="relative h-12 w-12 flex-shrink-0 rounded-lg overflow-hidden bg-slate-100 border border-slate-100">
                            <Image
                              src={item.image_path}
                              alt={item.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform"
                            />
                          </div>
                        )}
                        <div className="flex-1">
                          <p className="font-medium text-slate-900 group-hover:text-blue-600 line-clamp-2">
                            {item.title}
                          </p>
                          {item.created_at && (
                            <p className="text-xs text-slate-400 mt-1">
                              {new Date(item.created_at).toLocaleDateString()}
                            </p>
                          )}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          )}
        </div>
      </div>

      <style jsx>{`
        .blog-content {
          line-height: 1.95;
          word-wrap: break-word;
          overflow-wrap: anywhere;
          letter-spacing: 0.01em;
          font-size: 1.08rem;
        }
        .blog-content a {
          color: #1d4ed8; /* blue-700 */
          text-decoration: underline;
          text-underline-offset: 3px;
          text-decoration-thickness: 2px;
          font-weight: 500;
          position: relative;
          transition: color 150ms ease, background-color 150ms ease;
        }
        .blog-content a::after {
          content: "";
          position: absolute;
          inset-x: 0;
          bottom: -0.1rem;
          height: 2px;
          border-radius: 999px;
          background: linear-gradient(to right, #38bdf8, #6366f1, #a855f7);
          opacity: 0;
          transform: scaleX(0.8);
          transform-origin: center;
          transition: opacity 150ms ease, transform 150ms ease;
        }
        .blog-content a:hover::after {
          opacity: 1;
          transform: scaleX(1);
        }
        .blog-content a:hover {
          color: #1d4ed8;
          background-color: #eff6ff; /* blue-50 */
          border-radius: 0.25rem;
        }
        .blog-content img,
        .blog-content video,
        .blog-content iframe {
          max-width: 100%;
          height: auto;
          border-radius: 0.75rem; /* more rounded */
          box-shadow: 0 18px 45px rgba(15, 23, 42, 0.12);
        }
        .blog-content figure {
          margin: 1.5rem 0;
          text-align: center;
        }
        .blog-content figcaption {
          color: #6b7280;
          font-size: 0.9em;
          margin-top: 0.5rem;
        }
        .blog-content table {
          width: 100%;
          border-collapse: collapse;
          display: block;
          overflow-x: auto; /* prevent overflow on small screens */
        }
        .blog-content th,
        .blog-content td {
          border: 1px solid #e5e7eb;
          padding: 0.5rem 0.75rem;
        }
        .blog-content pre {
          background: #020617; /* slate-950 */
          color: #e5e7eb;
          padding: 1rem 1.25rem;
          border-radius: 0.75rem;
          overflow-x: auto;
          box-shadow: 0 16px 35px rgba(15, 23, 42, 0.35);
        }
        .blog-content code {
          background: #f3f4f6;
          padding: 0.15rem 0.35rem;
          border-radius: 0.375rem;
        }
        .blog-content h1,
        .blog-content h2,
        .blog-content h3,
        .blog-content h4 {
          margin-top: 1.4em;
          margin-bottom: 0.7em;
          line-height: 1.25;
        }
        .blog-content h2 {
          font-size: 1.6rem;
          border-bottom: 2px solid #e5e7eb;
          padding-bottom: 0.3rem;
        }
        .blog-content p {
          margin: 1em 0;
        }
        .blog-content ul,
        .blog-content ol {
          padding-left: 1.2rem;
        }
        .blog-content li {
          margin: 0.45em 0;
        }
        .blog-content li::marker {
          color: #2563eb;
        }
        .blog-content blockquote {
          border-left: 4px solid #60a5fa; /* blue-400 */
          padding: 0.9rem 1.25rem;
          color: #374151; /* gray-700 */
          background: #f9fafb;
          font-style: italic;
          border-radius: 0.5rem;
        }
        .blog-content p:first-of-type {
          font-size: 1.16rem;
          color: #0f172a; /* slate-900 */
          font-weight: 500;
        }
      `}</style>
    </div>
  );
};

export default BlogPostPage;
