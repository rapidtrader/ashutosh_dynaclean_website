import SweeperComponent from "@/components/common/ProductDesscription/HeroSection";
import data from "@/data/Electric-Sweeper-Truck/DTMS-1000/data"; // Direct import of the JSON file
import ImageGallery from "@/components/Products/ImageGallery";

export const metadata = {
  title: "Electric Sweeper Truck DTMS – 1000 EV",
  description:
    "The Battery-operated Sweeper Truck DTMS-1000 is an advanced model of road sweeper truck that focuses on smart performance while ensuring sustainability and efficiency.",
  keywords:
    "Battery-operated Road Sweeper, Road Sweeper Truck, Road Sweeper Machine, Sweeper Truck, Battery-operated Sweeper Truck, Dynaclean Sweeper Truck",
  openGraph: {
    type: "website",
    title: "Electric Sweeper Truck DTMS – 1000 EV",
    description:
      "The Battery-operated Sweeper Truck DTMS-1000 is an advanced model of road sweeper truck that focuses on smart performance while ensuring sustainability and efficiency.",
    url: "https://dynacleanindustries.com/products/battery-operated-sweeper-truck/DTMS-1000",
    images: [
      {
        url: "https://dynacleanindustries.com/Product/Bettery-Operated-truck/DTMS-1000%20Ev/1.png",
        alt: "Battery-operated Sweeper Truck",
      },
    ],
  },
};

const DRS90TSweeper = () => {
  const images = [
    "/Catalouge/Battery Track EV/1.png",
    "/Catalouge/Battery Track EV/2.png",
    "/Catalouge/Battery Track EV/3.png",
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
