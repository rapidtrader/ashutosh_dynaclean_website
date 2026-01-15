import SweeperComponent from "@/components/common/ProductDesscription/HeroSection";
import data from "@/data/sweeper/DRS-180T/data"; // Direct import of the JSON file
import ImageGallery from "@/components/Products/ImageGallery";

export const metadata = {
  title: "Ride On Sweeper DRS-180T | Industrial & Commercial Cleaning Machine",
  description:
    "Explore Dynaclean Ride on Sweeper Eco-friendly, efficient and efficient cleaning solution for factories warehouses, municipal projects. You can achieve high efficiency using our battery-powered ride-on sweeper models.",
  keywords:
    "Ride On Sweeper, battery operated sweeper, industrial sweeper machine, floor sweeper, commercial cleaning sweeper, warehouse cleaning machine",
  openGraph: {
    type: "website",
    title:
      "Ride On Sweeper DRS-180T | Industrial & Commercial Cleaning Machine",
    description:
      "Ride on Sweeper DRS-180T is a highly sophisticated, fully battery-operated sweeping machine built for large industrial areas and commercial sweeping tasks.",
    url: "https://dynacleanindustries.com/products/sweeper/ride-on-sweeper-DRS180T",
    images: [
      {
        url: "https://dynacleanindustries.com/Product/Sweeper/DRS-180T/1.png",
        alt: "Ride-On Sweeper DRS-180T",
      },
    ],
  },
};

const DRS90TSweeper = () => {
  const images = [
    "/Catalouge/Sweepers/Drs180T/1.png",
    "/Catalouge/Sweepers/Drs180T/2.png",
    "/Catalouge/Sweepers/Drs180T/3.png",
    "/Catalouge/Sweepers/Drs180T/4.png",
  ];
  return (
    <div>
      {/* Directly pass the imported data as props */}
      <SweeperComponent sweeperData={data} />
      {/* <ImageGallery images={images} /> */}
    </div>
  );
};

export default DRS90TSweeper;
