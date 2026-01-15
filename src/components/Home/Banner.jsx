"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Keyboard } from "swiper/modules";
import Image from "next/image"; // Import Next.js Image component
import Link from "next/link"; // Import Next.js Link component

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Banner = ({ numberOfSlides, urls }) => {
  // Define a mapping for alt texts and links based on the image URLs or index
  const slideData = urls.map((url, index) => {
    let altText = `Banner image ${index + 1}`; // Default alt text
    let href = "#"; // Default href

    // You can define specific alt texts and links based on your image URLs
    // For this example, I'll use the provided product links and generic alt texts
    switch (url) {
      case "/Home/Banner/1.webp":
        altText =
          "Sweeper Sweeper Machine battery Sweeper Floor Sweeper Floor cleaning machine Manual sweeper Road Sweeper Road Sweeper Truck Road Sweeper Machine Sweeper Truck Municipal Sweeper Truck Diesel Operated Sweeper truck";
        href = "products/sweeper/ride-on-sweeper-DRS90T";
        break;
      case "/Home/Banner/2.webp":
        altText =
          "Sweeper Sweeper Machine battery Sweeper Floor Sweeper Floor cleaning machine Manual sweeper Road Sweeper Road Sweeper Truck Road Sweeper Machine Sweeper Truck Municipal Sweeper Truck Diesel Operated Sweeper truck";
        href = "products/scrubber-drier/DYNA-40";
        break;
      case "/Home/Banner/3N.webp":
        altText =
          "Sweeper Sweeper Machine battery Sweeper Floor Sweeper Floor cleaning machine Manual sweeper Road Sweeper Road Sweeper Truck Road Sweeper Machine Sweeper Truck Municipal Sweeper Truck Diesel Operated Sweeper truck";
        href = "/products/municipal-diesel-sweeper-truck/DTMS-6000";
        break;
      case "/Home/Banner/4.webp":
        altText =
          "Sweeper Sweeper Machine battery Sweeper Floor Sweeper Floor cleaning machine Manual sweeper Road Sweeper Road Sweeper Truck Road Sweeper Machine Sweeper Truck Municipal Sweeper Truck Diesel Operated Sweeper truck";
        href = "products/battery-operated-sweeper-truck/DRS-600";
        break;
      default:
        break;
    }
    return { url, altText, href };
  });

  return (
    <section className="relative w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Keyboard]}
        loop={true}
        slidesPerView={1}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          el: ".swiper-pagination-custom",
          clickable: true,
          type: "bullets",
          dynamicBullets: true,
        }}
        keyboard={{
          enabled: true,
          onlyInViewport: true,
        }}
        className="w-full h-full"
      >
        {slideData.map((slide, index) => (
          <SwiperSlide key={index}>
            <Link href={slide.href} passHref>
              <div
                className="
        relative w-full
        h-[16vh]       // Default: Small height for mobile
        sm:h-[60vh]    // Small screens
        md:h-[25vh]    // Medium screens
        lg:h-[70vh]    // Large screens
      "
              >
                <Image
                  src={slide.url}
                  alt={slide.altText}
                  layout="fill"
                  objectFit="cover"
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : "auto"}
                  sizes="100vw"
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination-custom absolute bottom-5 left-0 right-0 z-10 flex justify-center items-center"></div>
      </Swiper>
    </section>
  );
};

export default Banner;
