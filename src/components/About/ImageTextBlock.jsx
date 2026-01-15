import React from "react";

const ImageTextBlock = ({
  image,
  heading,
  description,
  alignment = "left",
}) => {
  const isLeft = alignment === "left";

  return (
    <div className="flex flex-col md:flex-row items-center justify-center lg:max-w-[100rem] mx-auto px-4 lg:px-12 py-8 lg:mb-20">
      {" "}
      {/* Changed max-w-5xl to max-w-6xl for a slightly larger overall width */}
      {/* Image Section */}
      <div
        className={`w-full md:w-1/2   ${isLeft ? "md:order-1" : "md:order-2"
          } flex  mb-6 md:mb-0 ${isLeft ? "md:pr-8" : "md:pl-8"}`} // Added md:pr-8 or md:pl-8 for spacing
      >
        <img
          src={image}
          alt={heading}
          className="md:max-w-full lg:w-[37rem] h-auto lg:h-96 rounded-lg shadow-md"
        />
      </div>
      {/* Text Section */}
      <div
        className={`w-full md:w-1/2 ${isLeft ? "md:order-2" : "md:order-1"
          } text-center md:text-left px-4`}
      >
        <h2 className="text-4xl mb-4">{heading}</h2>
        <p className="text-gray-700 text-base text-justify">{description}</p>
      </div>
    </div>
  );
};

export default ImageTextBlock;
