import React from "react";
import {
  FaIndustry,
  FaMapMarkerAlt,
  FaTools,
  FaWarehouse,
  FaUsers,
} from "react-icons/fa";

const iconData = [
  {
    icon: <FaIndustry className="text-4xl" />,
    label: "India’s Trusted Industrial Cleaning Brand",
  },
  {
    icon: <FaMapMarkerAlt className="text-4xl" />,
    label: "150+ Service Points Across India",
  },
  {
    icon: <FaTools className="text-4xl" />,
    label: "Expert Support for 100,000+ Machines in Operation",
  },
  {
    icon: <FaUsers className="text-4xl" />,
    label: "100,000+ Happy Users Benefiting Every Day",
  },
  {
    icon: <FaWarehouse className="text-4xl" />,
    label: "Huge Warehouse Stock for Faster Shipments",
  },
];

const FeaturesSection = () => {
  return (
    <section className="pt-16 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-4xl ">Why Choose Us</h2>
        <div className="mt-4 w-24 mx-auto border-t-2 border-red-700"></div>

        {/* Description */}
        <p className="w-full mx-auto mt-6 text-gray-600 text-sm md:text-base text-justify">
          Dynaclean Industries Pvt. Ltd. is among India's fastest-growing
          businesses in manufacturing and supplying cleaning equipment with a
          particular emphasis on sustainability, innovation, and quality. With
          many years of expertise in development, design and supply of
          top-quality cleaning tools, Dynaclean offers a wide assortment of
          products including ride-on scrubbers, ride-on sweepers, roadsweeper
          vehicles, vacuum cleaners, vacuum cleaners with jet pressure, elevator
          cleaners carpet and sofa cleaners, scooter mops, and others. Our
          machines are used by important sectors like metros, airports and
          railways industry, municipalities, and hospitals. We have several
          service points throughout India and have a robust after-sales support
          program to ensure prompt maintenance and satisfaction of customers.
          Dynaclean is a brand that is growing in the Indian cleaning industry.
          Dynaclean is expanding its reach and staying in line with its purpose
          - "Powering Clean India with Smart & Green Cleaning Solutions."
        </p>

        {/* Icon Row */}
        <div className="hidden sm:flex flex-wrap justify-center gap-20 mt-12 font-bold">
          {iconData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center lg:w-30 sm:w-20"
            >
              {/* Circular icon container */}
              <div className="lg:w-30 lg:h-30 sm:w-16 sm:h-16 flex items-center justify-center border-2 border-gray-300 rounded-full transition-colors duration-300 hover:border-red-800 text-gray-700 group">
                <div className="text-3xl sm:text-xl text-gray-700 group-hover:text-red-800">
                  {item.icon}
                </div>
              </div>
              {/* Label below circle */}
              <span className="mt-3 text-center text-sm text-gray-500 w-full sm:hidden">
                {item.label}
              </span>
              <span className="mt-3 text-center text-sm text-gray-500 w-full hidden sm:block">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Image Section */}
        <div className="mt-20">
          <img
            src="/Home/WhyChoose/Factory.webp"
            alt="Cleaning Illustration"
            className="w-full h-auto max-h-[500px] object-cover object-center rounded-md shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
