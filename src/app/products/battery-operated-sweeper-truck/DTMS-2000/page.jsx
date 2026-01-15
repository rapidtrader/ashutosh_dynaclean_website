import SweeperComponent from "@/components/common/ProductDesscription/HeroSection";
import data from "@/data/Electric-Sweeper-Truck/DTMS-2000/data"; // Direct import of the JSON file
import ImageGallery from "@/components/Products/ImageGallery";

export const metadata = {
  title: "Electric Sweeper Truck DTMS – 2000 EV",
  description:
    "The battery-operated Sweeper Truck DTMS-2000 is capable road sweeper and carrying out smart city operations. This road sweeper machine is designed for cleaning of urban areas.",
  keywords:
    "Battery-operated Road Sweeper, Road Sweeper Truck, Road Sweeper Machine, Sweeper Truck, Battery-operated Sweeper Truck, Dynaclean Sweeper Truck",
  openGraph: {
    type: "website",
    title: "Electric Sweeper Truck DTMS – 2000 EV",
    description:
      "The battery-operated Sweeper Truck DTMS-2000 is capable road sweeper and carrying out smart city operations. This road sweeper machine is designed for cleaning of urban areas.",
    url: "https://dynacleanindustries.com/products/battery-operated-sweeper-truck/DTMS-3000",
    images: [
      {
        url: "https://dynacleanindustries.com/Product/Bettery-Operated-truck/DTMS-3000%20Ev/1.png",
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
