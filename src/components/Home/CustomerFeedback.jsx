"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const feedbacks = [
  {
    name: "Amit Sharma",
    image: "/Home/users/user1.png",
    stars: 5,
    quote:
      "We have been using their cleaning equipment for over a year, and the performance has been exceptional. The after-sales support is also top-notch!",
  },
  {
    name: "Priya Verma",
    image: "/Home/users/user4.png",
    stars: 4,
    quote:
      "The scrubber-dryers and pressure washers we purchased have significantly improved our cleaning process. Highly recommended for industrial use!",
  },
  {
    name: "Nurul Hasan",
    image: "/Home/users/user2.png",
    stars: 5,
    quote:
      "Their team is always available for maintenance and support. The machines are durable and easy to use. A great investment for any business!",
  },
  {
    name: "Neha Joshi",
    image: "/Home/users/user5.png",
    stars: 5,
    quote:
      "We needed high-performance equipment for our logistics facility, and they delivered exactly what we needed. Great service and fast delivery!",
  },
  {
    name: "Vikas Pandey",
    image: "/Home/users/user3.png",
    stars: 4,
    quote:
      "From product selection to training, their team provided expert guidance. The machines are highly efficient and long-lasting.",
  },
];

// ✅ Updated: JavaScript version of the Stars component
const Stars = (props) => {
  const { count } = props;

  return (
    <div className="flex justify-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${
            i < count ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.462a1 1 0 00-.364 1.118l1.287 3.965c.3.922-.755 1.688-1.54 1.118L10 13.347l-3.388 2.462c-.784.57-1.838-.196-1.539-1.118l1.287-3.965a1 1 0 00-.364-1.118L2.61 9.393c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.966z" />
        </svg>
      ))}
    </div>
  );
};

export default function CustomerFeedback() {
  return (
    <section
      className="bg-cover bg-center py-16 bg-gray-200 mb-8"
      style={{ backgroundImage: "url('banner/customer_feedback.jpeg')" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl">Customers Feedback</h2>
          <div className="mt-4 w-24 mx-auto border-t-2 border-red-700"></div>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Keyboard]}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          keyboard={{ enabled: true, onlyInViewport: true }}
          pagination={{
            el: ".swiper-pagination-feedback",
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {feedbacks.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white bg-opacity-90 p-6 rounded-lg text-center shadow-sm h-full flex flex-col items-center justify-start gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="rounded-full w-24 h-24 object-cover"
                />
                <Stars count={item.stars} />
                <p className="text-xs text-gray-700 italic">"{item.quote}"</p>
                <b className="text-gray-900 mt-2">{item.name}</b>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination-feedback !relative !bottom-0 mt-6 flex justify-center items-center"></div>
        </Swiper>
      </div>
    </section>
  );
}
