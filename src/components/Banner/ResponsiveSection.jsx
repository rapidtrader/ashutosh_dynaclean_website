"use client";

import Image from "next/image";
import PropTypes from "prop-types";
import clsx from "clsx";

export default function ResponsiveSection({
  imagePath,
  imageSide = "left",
  title,
  description,
}) {
  const isImageLeft = imageSide === "left";

  return (
    <section className="relative flex flex-col lg:flex-row items-center gap-6 md:gap-12 px-6 py-12 md:px-20 md:py-10 overflow-hidden bg-gray-100">
      {/* Image Section */}
      <div
        className={clsx(
          "relative w-full md:w-1/2 flex justify-center items-center",
          {
            "lg:order-1": isImageLeft,
            "lg:order-2": !isImageLeft,
          }
        )}
      >
        <div className="absolute w-80 h-80 bg-red-800 rounded-full blur-[80px] opacity-90"></div>
        <div className="relative z-10">
          <Image
            src={imagePath}
            alt={imagePath}
            width={500}
            height={400}
            className="object-contain rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Text Section */}
      <div
        className={clsx(
          "w-full lg:w-1/2",
          isImageLeft
            ? "lg:order-2 text-left lg:pr-12"
            : "lg:order-1 text-left lg:text-right lg:pl-12"
        )}
      >
        <h1 className="text-5xl mb-4">{title}</h1>
        <p className="text-gray-700 text-lg text-justify">{description}</p>
      </div>
    </section>
  );
}

ResponsiveSection.propTypes = {
  imagePath: PropTypes.string.isRequired,
  imageSide: PropTypes.oneOf(["left", "right"]),
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
