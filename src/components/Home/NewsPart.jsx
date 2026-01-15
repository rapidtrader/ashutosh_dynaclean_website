"use client";

import React from "react";

const NewsSection = () => {
  return (
    <section className="w-full bg-white py-12 lg:mt-[-8rem] px-4 md:px-10 lg:px-24">
      {/* Section Title */}
      <h1 className="text-3xl md:text-4xl text-center mb-2">
        News & Highlights
      </h1>

      <div className="w-24 mx-auto border-t-2 border-red-700 mb-12"></div>

      {/* ----------------- DESKTOP: FIRST BLOCK ----------------- */}
      <div className="max-w-7xl mx-auto flex-col lg:flex-row lg:space-x-12 hidden lg:flex">
        {/* Left Column */}
        <div className="lg:w-1/2 text-left flex flex-col space-y-6">
          <h2 className="text-2xl font-semibold">
            Green flag to Dynaclean – Powering cleanliness in Andhra Pradesh
          </h2>
          <p className="text-gray-600 text-base lg:text-lg leading-relaxed text-justify">
            HMTV Highlights the Dynaclean Sweeper Truck—Flagged Off in
            Visakhapatnam! With live coverage by HMTV News Channel, Dynaclean
            Industries celebrated the launch of our cutting-edge battery-powered
            sweeper truck in Visakhapatnam, marking yet another significant
            milestone.
          </p>
          <p className="text-gray-600 text-base lg:text-lg leading-relaxed text-justify">
            With its zero-emission performance, low maintenance requirements,
            and effective dust control, the robust Dynaclean sweeper is designed
            to handle extensive cleaning tasks with ease. As seen on Channel No.
            53 of HMTV.
          </p>
        </div>

        {/* Right Column */}
        <div className="lg:w-1/2 flex flex-col space-y-8 mt-10 lg:mt-0">
          {/* Video Thumbnail Link */}
          <a
            href="https://www.youtube.com/watch?v=6nLObpuvevA"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-full lg:w-[32rem] h-64 rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src="/Home/Thumbnail/thumbnail2.webp"
              alt="Dynaclean Launch Video"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-opacity-40">
              <svg
                className="w-16 h-16 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </a>

          {/* Static Image */}
          <img
            src="/Home/News/main.webp"
            alt="News Highlight"
            className="w-[28rem] h-auto mx-auto rounded-lg shadow-md"
            loading="lazy"
          />
        </div>
      </div>

      {/* ----------------- MOBILE: FIRST BLOCK ----------------- */}
      <div className="max-w-7xl mx-auto flex-col md:space-y-8 md:px-4 flex lg:hidden">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">
            Green flag to Dynaclean – Powering cleanliness in Andhra Pradesh
          </h2>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center justify-center space-y-4 md:space-x-6">
          {/* Mobile Video Thumbnail Link */}
          <a
            href="https://www.youtube.com/watch?v=6nLObpuvevA"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-3/4 md:w-[16rem] h-40 md:h-48 rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src="/Home/Thumbnail/thumbnail2.webp"
              alt="Dynaclean Mobile Video"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-opacity-40">
              <svg
                className="w-12 h-12 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </a>

          <img
            src="/Home/News/main.webp"
            alt="News Highlight"
            className="w-3/4 md:w-[16rem] h-auto rounded-lg shadow-md"
            loading="lazy"
          />
        </div>

        <div className="text-center">
          <p className="text-gray-600 text-base md:text-lg leading-relaxed text-justify">
            HMTV Highlights the Dynaclean Sweeper Truck—Flagged Off in
            Visakhapatnam! With live coverage by HMTV News Channel, Dynaclean
            Industries celebrated the launch of our cutting-edge battery-powered
            sweeper truck in Visakhapatnam, marking yet another significant
            milestone.
          </p>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed text-justify">
            With its zero-emission performance, low maintenance requirements,
            and effective dust control, the robust Dynaclean sweeper is designed
            to handle extensive cleaning tasks with ease. As seen on Channel No.
            53 of HMTV.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="w-24 mx-auto border-t-2 border-red-700 mb-12 mt-12"></div>

      {/* ----------------- DESKTOP: SECOND BLOCK ----------------- */}
      <div className="max-w-7xl mx-auto flex-col lg:flex-row lg:space-x-12 hidden lg:flex">
        <div className="lg:w-1/2 text-left flex flex-col space-y-6">
          <h2 className="text-2xl font-semibold">
            Trusted by NDMC – A Mark of Excellence
          </h2>
          <p className="text-gray-600 text-base lg:text-lg leading-relaxed text-justify">
            The NDMC Chairman himself relies on Dynaclean Industries for
            maintaining cleanliness with excellence. This trust from one of
            India’s most respected municipal bodies is a testament to the
            reliability, performance, and quality of Dynaclean products.
          </p>
          <p className="text-gray-600 text-base lg:text-lg leading-relaxed text-justify">
            From government institutions to private sectors, Dynaclean machines
            are helping organizations achieve Swachh Bharat goals through
            sustainable cleaning solutions that truly make a difference.
          </p>
        </div>

        <div className="lg:w-1/2 flex flex-col space-y-8 mt-10 lg:mt-0">
          {/* Video Thumbnail Link */}
          <a
            href="https://www.youtube.com/watch?v=w6Z0430yIM8"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-full lg:w-[32rem] h-64 rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src="/Home/Thumbnail/thumbnail3.webp"
              alt="NDMC Video"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-opacity-40">
              <svg
                className="w-16 h-16 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </a>
        </div>
      </div>

      {/* ----------------- MOBILE: SECOND BLOCK ----------------- */}
      <div className="max-w-7xl mx-auto flex-col md:space-y-8 md:px-4 flex lg:hidden">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">
            Trusted by NDMC – A Mark of Excellence
          </h2>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center justify-center space-y-4 md:space-x-6">
          {/* Mobile Video Thumbnail Link */}
          <a
            href="https://www.youtube.com/watch?v=w6Z0430yIM8"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-3/4 md:w-[16rem] h-40 md:h-48 rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src="/Home/Thumbnail/thumbnail3.webp"
              alt="NDMC Mobile Video"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-opacity-40">
              <svg
                className="w-12 h-12 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </a>
        </div>

        <div className="text-center">
          <p className="text-gray-600 text-base lg:text-lg leading-relaxed text-justify">
            The NDMC Chairman himself relies on Dynaclean Industries for
            maintaining cleanliness with excellence. This trust from one of
            India’s most respected municipal bodies is a testament to the
            reliability, performance, and quality of Dynaclean products.
          </p>
          <p className="text-gray-600 text-base lg:text-lg leading-relaxed text-justify">
            From government institutions to private sectors, Dynaclean machines
            are helping organizations achieve Swachh Bharat goals through
            sustainable cleaning solutions that truly make a difference.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
