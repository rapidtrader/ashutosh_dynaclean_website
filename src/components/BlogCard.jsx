// components/BlogCard.jsx

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Helper function to strip HTML tags from a string
const stripHtmlTags = (html) => {
  if (typeof window === "undefined") {
    // For server-side rendering, return the original string
    // or handle it differently if needed.
    return html;
  }
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
};

const isValidImageUrl = (url) => {
  if (!url || typeof url !== "string") return false;
  const trimmed = url.trim();
  return trimmed.length > 0 && (trimmed.startsWith("http://") || trimmed.startsWith("https://"));
};

const BlogCard = ({ blog }) => {
  const [imageError, setImageError] = useState(false);
  const showImage = isValidImageUrl(blog?.image_path) && !imageError;

  // Get the plain text content by stripping HTML tags
  const plainTextContent = blog.content ? stripHtmlTags(blog.content) : "";

  // Create a snippet from the plain text
  const snippet =
    plainTextContent.length > 150
      ? plainTextContent.substring(0, 150) + "..."
      : plainTextContent;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <Link href={`/blogs/${blog?.slug}`} className="block">
        <div className="relative h-48 w-full bg-slate-100">
          {showImage ? (
            <Image
              src={blog.image_path}
              alt={blog?.title}
              fill
              className="object-cover group-hover:opacity-80 transition-opacity"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300">
              <svg
                className="w-16 h-16 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          )}
        </div>
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2 truncate">
            {blog?.title}
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            {new Date(blog?.created_at).toLocaleDateString()}
          </p>
          <p className="text-gray-600 line-clamp-3 mb-4">
            {/* Display the plain text snippet */}
            {snippet}
          </p>
          <div className="text-blue-600 font-medium hover:underline">
            Read more &rarr;
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
