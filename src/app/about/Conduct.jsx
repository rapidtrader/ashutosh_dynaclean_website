"use client";
import Link from "next/link";

export default function CodeOfConductSection() {
  return (
    <section className="bg-gray-50 py-8 md:py-20 px-4 md:px-8 lg:px-16 ">
      <div className="max-w-4xl mx-auto md:mx-20 text-left ">
        {/* Subheading */}
        <h3 className="text-lg font-semibold text-gray-800 mb-3">
          Our Code Of Conduct
        </h3>

        {/* Paragraph */}
        <p className="text-gray-600 leading-relaxed mb-4 text-justify">
          We are committed to maintaining the highest standards of integrity,
          respect, and responsibility in everything we do. Our Code of Conduct
          outlines the principles and behaviors expected from all members of our
          organization.
        </p>

        {/* Link */}
        <Link
          href="/policy/Code-Of-Conduct.pdf"
          target="_blank"
          className="inline-block text-red-600 font-medium hover:underline hover:text-red-700 transition-colors duration-200"
        >
          View Full Code of Conduct →
        </Link>
      </div>
    </section>
  );
}
