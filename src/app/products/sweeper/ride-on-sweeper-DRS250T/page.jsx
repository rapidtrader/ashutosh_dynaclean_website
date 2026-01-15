import SweeperComponent from "@/components/common/ProductDesscription/HeroSection";
import data from "@/data/sweeper/DRS-250T/data"; // Direct import of the JSON file
import ImageGallery from "@/components/Products/ImageGallery";

export const metadata = {
  title: "DRS-250T Sweeper",
  description:
    "Ride-On Sweeper DRS-250T is a highly sophisticated, fully battery-operated sweeping machine built for large industrial areas and commercial sweeping tasks.",
  keywords:
    "Ride On Sweeper, battery operated sweeper, industrial sweeper machine, floor sweeper, commercial cleaning sweeper, warehouse cleaning machine",
  openGraph: {
    type: "website",
    title: "DRS-180T Sweeper",
    description:
      "Ride-On Sweeper DRS-250T is a highly sophisticated, fully battery-operated sweeping machine built for large industrial areas and commercial sweeping tasks.",
    url: "https://dynacleanindustries.com/products/sweeper/ride-on-sweeper-DRS180T",
    images: [
      {
        url: "https://dynacleanindustries.com/Product/Sweeper/DRS-180T/1.png",
        alt: "Ride-On Sweeper DRS-250T",
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
    </div>
  );
};

export default DRS90TSweeper;
