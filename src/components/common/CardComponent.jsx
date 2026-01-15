"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Card = ({ images, url, title, description }) => {
  return (
    <a
      href={url}
      className="block group w-[20rem] md:w-full lg:w-[30rem] bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out mt-2 "
    >
      {/* Image Carousel */}
      <div className="relative w-55 lg:w-full h-[320px] sm:h-[360px] md:h-[400px] overflow-hidden rounded-t-xl">
        <Swiper
          spaceBetween={8}
          slidesPerView={1}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="h-full custom-swiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src={image}
                  alt={image}
                  className="max-h-[300px] max-w-[80%] object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Card Content */}
      <div className="p-5">
        <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
        <p
          className="text-sm text-gray-600 line-clamp-3"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>

      {/* Custom styles to hide the icons and remove the background */}
      <style jsx global>{`
        .custom-swiper .swiper-button-next,
        .custom-swiper .swiper-button-prev {
          width: 26px;
          height: 26px;
          background: transparent; /* Removed background completely */
          border-radius: 9999px;
          color: transparent; /* Hides the text/icons */
          top: 50%;
          transform: translateY(-50%);
        }

        .custom-swiper .swiper-button-next::after,
        .custom-swiper .swiper-button-prev::after {
          content: ""; /* Remove the default icons */
        }

        .custom-swiper .swiper-button-next {
          right: 8px;
        }

        .custom-swiper .swiper-button-prev {
          left: 8px;
        }
      `}</style>
    </a>
  );
};

export default Card;
