import SweeperComponent from "@/components/common/ProductDesscription/HeroSection";
import data from "@/data/Electric-Sweeper-Truck/DTMS-5000/data"; // Direct import of the JSON file
import ImageGallery from "@/components/Products/ImageGallery";

export const metadata = {
  title: "Electric Sweeper Truck DTMS – 5000 EV",
  description:
    "Electric Sweeper Truck DTMS-5000 is capable of battery-powered street sweeper & it does not emit harmful gases. The road sweeper machine is best suited for cleaning urban areas.",
  keywords:
    "Battery-operated Road Sweeper, Road Sweeper Truck, Road Sweeper Machine, Sweeper Truck, Battery-operated Sweeper Truck, Dynaclean Sweeper Truck",
  openGraph: {
    type: "website",
    title: "Electric Sweeper Truck DTMS – 5000 EV",
    description:
      "Electric Sweeper Truck DTMS-5000 is capable of battery-powered street sweeper & it does not emit harmful gases. The road sweeper machine is best suited for cleaning urban areas.",
    url: "https://dynacleanindustries.com/products/battery-operated-sweeper-truck/DTMS-5000",
    images: [
      {
        url: "https://dynacleanindustries.com/Product/Bettery-Operated-truck/DTMS-5000%20Ev/1.png",
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
