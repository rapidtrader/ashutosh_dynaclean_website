import React from "react";
import SweeperComponent from "@/components/common/ProductDesscription/HeroSection";
import sweeperData from "@/data/sweeper/sweeperData.json"; // Direct import of the JSON file
import ImageGallery from "@/components/Products/ImageGallery";

export const metadata = {
  title: "DRS-90T Sweeper",
  description:
    "Ride-On Sweeper DRS-90T is a battery-operated sweeper designed for industrial, commercial, and street sweeping applications.",
  keywords:
    "battery operated Sweeper, Sweeper machine, Ride on sweeper, battery sweeper, floor sweeper, floor cleaning machine, cleaning machine",
  openGraph: {
    type: "website",
    title: "DRS-90T Sweeper",
    description:
      "Ride-On Sweeper DRS-90T is a battery-operated sweeper designed for industrial, commercial, and street sweeping applications.",
    url: "https://dynacleanindustries.com/products/sweeper/ride-on-sweeper-DRS90T",
    images: [
      {
        url: "https://dynacleanindustries.com/Product/Sweeper/DRS-90T/1.png",
        alt: "Ride On Sweeper",
      },
    ],
  },
};

const DRS90TSweeper = () => {
  const images = [
    "/Catalouge/Sweepers/dRS-90T/1.png",
    "/Catalouge/Sweepers/dRS-90T/2.png",
    "/Catalouge/Sweepers/dRS-90T/3.png",
    "/Catalouge/Sweepers/dRS-90T/4.png",
  ];
  return (
    <div>
      {/* Directly pass the imported data as props */}
      <SweeperComponent sweeperData={sweeperData} />
      {/* <ImageGallery images={images} /> */}
    </div>
  );
};

export default DRS90TSweeper;
