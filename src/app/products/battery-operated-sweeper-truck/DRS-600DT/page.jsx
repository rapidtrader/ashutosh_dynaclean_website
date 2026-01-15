import SweeperComponent from "@/components/common/ProductDesscription/HeroSection";
import data from "@/data/Electric-Sweeper-Truck/DRS-600DT/data"; // Direct import of the JSON file
import ImageGallery from "@/components/Products/ImageGallery";

export const metadata = {
  title: "DRS-600DT Self Propelled Sweeper Truck | Battery Operated",
  description:
    "The DRS-600DT Battery Operated Self Propelled Sweeper Truck offers zero emissions, low costs, and high efficiency for smart cities, industries, and municipalities.",
  keywords:
    "Battery-operated Road Sweeper, Road Sweeper Truck, Road Sweeper Machine, Sweeper Truck, Battery-operated Sweeper Truck, Dynaclean Sweeper Truck",
  openGraph: {
    type: "website",
    title: "DRS-600DT Self Propelled Sweeper Truck | Battery Operated",
    description:
      "The DRS-600DT Battery Operated Self Propelled Sweeper Truck offers zero emissions, low costs, and high efficiency for smart cities, industries, and municipalities.",
    url: "https://dynacleanindustries.com/products/battery-operated-sweeper-truck/DRS-600",
    images: [
      {
        url: "https://dynacleanindustries.com/Product/Bettery-Operated-truck/600DT/4.png",
        alt: "Self Propelled Sweeper Truck",
      },
    ],
  },
};

const DRS90TSweeper = () => {
  const images = [
    "/Catalouge/Self Propelled Sweeper Trucks/1.png",
    "/Catalouge/Self Propelled Sweeper Trucks/2.png",
    "/Catalouge/Self Propelled Sweeper Trucks/3.png",
    "/Catalouge/Self Propelled Sweeper Trucks/4.png",
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
