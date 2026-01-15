"use client";

import React from "react";
import {
  FaBroom,
  FaTools,
  FaBoxOpen,
  FaChalkboardTeacher,
  FaTruckMoving,
  FaHeadset,
} from "react-icons/fa";

const services = [
  {
    icon: <FaBroom className="text-2xl text-red-800" />,
    title: "Cleaning Machines",
    desc: "We supply sweepers, scrubbers, vacuums (dry & wet), and escalator cleaners.",
  },
  {
    icon: <FaTools className="text-2xl text-red-800" />,
    title: "Maintenance",
    desc: "We provide regular servicing, on-site repairs, and preventive maintenance.",
  },
  {
    icon: <FaBoxOpen className="text-2xl text-red-800" />,
    title: "Spare Parts",
    desc: "We stock genuine parts to keep your machines running without delay.",
  },
  {
    icon: <FaChalkboardTeacher className="text-2xl text-red-800" />,
    title: "Training & Demo",
    desc: "We offer on-site and video demonstrations, plus operator training sessions.",
  },
  {
    icon: <FaTruckMoving className="text-2xl text-red-800" />,
    title: "Delivery",
    desc: "Pan-India delivery and installation including Delhi Metro, Airports & more.",
  },
  {
    icon: <FaHeadset className="text-2xl text-red-800" />,
    title: "24/7 Support",
    desc: "Our technical team is available round-the-clock to keep you running.",
  },
];

const OurServices = () => {
  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl">Our Services</h2>
        <div className="w-24 mx-auto border-t-2 border-red-700 mt-4"></div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 px-4 mt-[-8rem]">
        {/* Left - Services List */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-md p-5 text-center sm:text-left shadow-md hover:-translate-y-1 transition duration-300"
            >
              <div className="mb-2 flex justify-center sm:justify-start">
                {service.icon}
              </div>
              <h5 className="text-lg font-semibold text-gray-800 mb-1">
                {service.title}
              </h5>
              <p className="text-sm text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Right - Image */}
        {/* Right - Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="h-[30rem] md:h-[52rem] rounded-md overflow-hidden">
            <img
              src="/Home/ourService/service.webp"
              alt="Our Services"
              className="object-cover object-[71%_50%] mt-14 w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
