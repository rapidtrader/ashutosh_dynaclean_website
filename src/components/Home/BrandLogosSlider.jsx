"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

export default function BrandLogosSlider() {
  const singleLogos = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    src: `/Clients/brand-logo${i === 0 ? "" : i}.png`,
    alt: `Brand Logo ${i}`,
  }));

  // Duplicate logos for seamless infinite scroll
  const brandLogos = [...singleLogos, ...singleLogos];

  return (
    <section className="bg-gray-50 py-12 pb-24 mb-20 overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900">Our Clients</h2>
          <div className="mt-4 w-24 mx-auto border-t-2 border-red-700"></div>
        </div>

        <div className="py-4 px-2">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            loop={true}
            loopAdditionalSlides={2}
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
            className="pb-4"
          >
            {brandLogos.map((logo, index) => (
              <SwiperSlide key={`${logo.id}-${index}`}>
                <div className="flex items-center justify-center bg-white rounded-lg shadow-md h-40 p-4 mx-1 mb-4 hover:shadow-lg transition-shadow">
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
