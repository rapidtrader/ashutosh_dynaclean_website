"use client";

import React from "react";
import {
  FaHospital,
  FaTrain,
  FaPlaneDeparture,
  FaSubway,
  FaIndustry,
  FaRoad,
} from "react-icons/fa";

const segments = [
  {
    title: "Hospitals & Healthcare Facilities",
    icon: FaHospital,
    desc: "Dynaclean cleaning machines ensure dust-free, germ-free, and hygienic environments in hospitals.",
  },
  {
    title: "Railways & Stations",
    icon: FaTrain,
    desc: "Dynaclean is suitable for the heavy-duty cleaning of railway platforms, coaches, and stations.",
  },
  {
    title: "Airports",
    icon: FaPlaneDeparture,
    desc: "Dynaclean machines clean terminals, runways, and parking areas for a hygienic and efficient airport environment.",
  },
  {
    title: "Metros",
    icon: FaSubway,
    desc: "Dynaclean machines are designed for deep cleaning of elevated and underground metro stations and coaches, supporting low-emission, quiet operations.",
  },
  {
    title: "Industrial Areas",
    icon: FaIndustry,
    desc: "Built for rugged performance, Dynaclean machines handle oil, grease, dust, and debris in warehouses and production areas.",
  },
  {
    title: "Highways & Roads",
    icon: FaRoad,
    desc: "Dynaclean sweeper trucks are ideal for large-scale road and highway cleaning.",
  },
];

const ApplicationSegments = () => {
  return (
    <section className="bg-white py-16 px-4 text-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl ">Application Segments</h2>
        <div className="mt-4 w-24 mx-auto border-t-2 border-red-700"></div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-10">
          {segments.map(({ title, icon: Icon, desc }) => (
            <div
              key={title}
              className="bg-gray-100 rounded-md shadow-md p-6 text-left hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center gap-4 mb-3">
                <Icon className="text-red-800 text-3xl" />
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <p className="text-sm text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationSegments;
