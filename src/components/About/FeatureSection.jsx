"use client";

import React, { useState } from "react";

const FeatureCard = ({ icon, title, description }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center w-full max-w-sm mx-auto transition-all duration-300 pb-20">
      {/* Icon */}
      <img src={icon} alt={title} className="w-24 h-24 mb-4" />

      {/* Title */}
      <h3 className="text-2xl text-center mb-2">{title}</h3>

      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="cursor-pointer  text-gray-700 hover:underline focus:outline-none font-medium"
      >
        {open ? "Hide" : "Read More"}
      </button>

      {/* Description with animation */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? "max-h-40 mt-3 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <p className="text-gray-600 text-sm text-justify">{description}</p>
      </div>
    </div>
  );
};

const FeatureSection = ({ heading, features }) => {
  return (
    <section className="py-16 px-4 bg-gray-50 lg:mb-20">
      <h2 className="text-4xl  text-center mb-12">{heading}</h2>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, idx) => (
          <FeatureCard
            key={idx}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
