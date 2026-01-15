"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Keyboard } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

const ImageTextSlider = ({ slides, mainHeading }) => {
  return (
    <section className="w-full bg-gray-300-">
      {/* Main Heading */}
      <div className="text-center py-8 md:py-12 mb-12">
        <h2 className="text-4xl md:text-4xl ">{mainHeading}</h2>
      </div>

      {/* Slider */}
      <Swiper
        modules={[Autoplay, Pagination, Keyboard]}
        autoplay={{ delay: 5000 }}
        keyboard={{ enabled: true }}
        pagination={{ clickable: true }}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {/* <div className="flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-8 lg:px-16 gap-8 py-10"> */}
            <div className="flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto px-4 md:px-8 gap-8 py-10">
              {/* Image Section */}
              <div className="w-full md:w-1/2 max-w-md h-70  relative rounded-lg overflow-hidden ">
                <Image
                  src={slide.image}
                  alt={slide.heading}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Text Section */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl  mb-4">{slide.heading}</h3>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed text-justify">
                  {slide.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-10 mb-19">
        <div className="swiper-pagination !static flex gap-2" />
      </div>
    </section>
  );
};

export default ImageTextSlider;
