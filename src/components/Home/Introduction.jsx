"use client";

import React, { useState } from "react";

const DynacleanIndustries = () => {
  const youtubeVideoId = "rC4SDRDB0cQ";
  const [hasPlayed, setHasPlayed] = useState(false);

  return (
    <section className="bg-light-gray py-16 px-4 lg:mb-20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl">Dynaclean Industries</h2>
          <div className="mt-4 w-24 mx-auto border-t-2 border-red-700"></div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse justify-center items-center gap-12">
          {/* ✅ Optimized YouTube Embed */}
          {/* <div className="flex-1 relative lg:w-[640px] h-64 lg:h-72 rounded-lg shadow-lg overflow-hidden"> */}
          <div className="w-full max-w-2xl aspect-video relative rounded-lg shadow-lg overflow-hidden">
            {hasPlayed ? (
              <iframe
                loading="lazy"
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0&modestbranding=1&controls=1&disablekb=1`}
                title="About Dynaclean Video"
                frameBorder="0"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <button
                onClick={() => setHasPlayed(true)}
                aria-label="Play Dynaclean YouTube Video"
                className="relative w-full h-full focus:outline-none"
              >
                <img
                  src={`https://img.youtube.com/vi/${youtubeVideoId}/maxresdefault.jpg`}
                  alt="Dynaclean Video Thumbnail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center  bg-opacity-50">
                  <svg
                    className="w-16 h-16 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            )}
          </div>

          {/* Text Section */}
          <div className="flex-1 text-gray-900 text-justify leading-relaxed">
            <p>
              Dynaclean Industries Pvt. Ltd, Founded in 2016, is one of the
              greatest manufacturers and suppliers of revolutionary cleaning
              machines and solutions in India. We deal in scrubbers, ride-on
              sweepers, vacuum cleaners, road sweeper trucks, jet pressure
              machines, escalator cleaners, sponge mops, and sofa and carpet
              cleaners. We have a strong foothold in eco-friendly, efficient,
              innovative cleaning technology in major sectors such as Airports,
              Metro-rail stations, Hospitals, Industrial plants, Railways,
              Highways, Municipalities, etc.
            </p>

            <p className="mt-4">
              Our battery-operated machines, anti-smog units, water-saving
              features, and other sustainable equipment support modernization
              while helping maintain urban hygiene requirements. Dynaclean is
              the trusted partner for India’s infrastructure and smart cities
              and is proud to stand by its reputation of quality, service, and
              service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynacleanIndustries;
