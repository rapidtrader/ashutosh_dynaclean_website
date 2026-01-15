"use client";
import Link from "next/link";

export default function CodeOfConductSection() {
  return (
    <section className="bg-gray-50 py-8 md:py-20 px-4 md:px-8 lg:px-16  ">
      <div className=" mx-auto md:mx-10 text-left ">
        {/* Subheading */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Corporate Policies
        </h2>

        {/* Paragraph */}
        <p className="text-gray-600 leading-relaxed mb-4 ">
          We are committed to maintaining the highest standards of integrity,
          respect, and responsibility in everything we do. Our Code of Conduct
          outlines the principles and behaviors expected from all members of our
          organization.
        </p>

        {/* Link */}
        <div className=" py-6 lg:mb-38 ">
          <h3 className=" md:text-xl font-semibold text-gray-800 mb-2">
            Company Policies
          </h3>
          <Link
            href="/policy/Code-Of-Conduct.pdf"
            target="_blank"
            className="inline-block text-sm text-red-600 font-medium hover:underline hover:text-red-700 transition-colors duration-200"
          >
            Code of Conduct for Employees and Officers
          </Link>
        </div>
      </div>
    </section>
  );
}
