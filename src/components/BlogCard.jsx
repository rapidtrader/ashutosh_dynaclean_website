// components/BlogCard.jsx

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

const BlogCard = ({ blog }) => {
  // Get the plain text content by stripping HTML tags
  const plainTextContent = blog.content ? stripHtmlTags(blog.content) : "";

  // Create a snippet from the plain text
  const snippet =
    plainTextContent.length > 150
      ? plainTextContent.substring(0, 150) + "..."
      : plainTextContent;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <Link href={`/blogs/${blog.slug}`} className="block">
        <div className="relative h-48 w-full">
          <Image
            src={blog.image_path}
            alt={blog.title}
            layout="fill"
            objectFit="cover"
            className="group-hover:opacity-80 transition-opacity"
          />
        </div>
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2 truncate">
            {blog.title}
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            {new Date(blog.created_at).toLocaleDateString()}
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
