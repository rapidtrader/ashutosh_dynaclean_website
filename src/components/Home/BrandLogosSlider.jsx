"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

export default function BrandLogosSlider() {
  // Brand logos array from brand-logo.png to brand-logo11.png
  const brandLogos = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    src: `/Clients/brand-logo${i === 0 ? "" : i}.png`,
    alt: `Brand Logo ${i}`,
  }));

  return (
    <section className="bg-gray-50 py-12 mb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900">Our Clients</h2>
          <div className="mt-4 w-24 mx-auto border-t-2 border-red-700"></div>
        </div>

        <div className="overflow-hidden py-8">
          <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          loop={true}
          autoplay={{ 
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={5000}
          breakpoints={{
            0: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
            1280: { slidesPerView: 6 },
          }}
          className="pb-16"
        >
          {brandLogos.map((logo) => (
            <SwiperSlide key={logo.id}>
              <div className="flex items-center justify-center bg-white rounded-lg shadow-md h-32 p-4 hover:shadow-lg transition-shadow">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-full w-full object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
      </div>
    </section>
  );
}
