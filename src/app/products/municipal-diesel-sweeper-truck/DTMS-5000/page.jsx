import SweeperComponent from "@/components/common/ProductDesscription/HeroSection";
import data from "@/data/Municipal-Diesel-Sweeper-Truck/DTMS-5000/data"; // Direct import of the JSON file
import ImageGallery from "@/components/Products/ImageGallery";

export const metadata = {
  title: "Municipal Sweeper Truck DTMS-5000",
  description:
    "The municipal Sweeper Truck DTMS-5000 represents the high-capacity road sweeper technology. A powerful road sweeper truck with diesel engine, designed to offer highest cleaning coverage",
  keywords:
    "Road Sweeper, Road Sweeper Truck, Road Sweeper Machine, Sweeper Truck, Municipal Sweeper Truck, Diesel Operated Sweeper truck, Dynaclean Sweeper Truck, Municipal Sweeper Truck",
  openGraph: {
    type: "website",
    title: "Municipal Sweeper Truck DTMS-5000",
    description:
      "The municipal Sweeper Truck DTMS-5000 represents the high-capacity road sweeper technology. A powerful road sweeper truck with diesel engine, designed to offer highest cleaning coverage",
    url: "https://dynacleanindustries.com/products/municipal-diesel-sweeper-truck/DTMS-5000",
    images: [
      {
        url: "https://dynacleanindustries.com/Product/Munciple-Deisal-sweeper-Truck/DTMS-5000/1.png",
        alt: "Road Sweeper Truck",
      },
    ],
  },
};

const DRS90TSweeper = () => {
  const images = [
    "/Catalouge/Municipal/DTMS-1000/1.png",
    "/Catalouge/Municipal/DTMS-1000/2.png",
    "/Catalouge/Municipal/DTMS-1000/3.png",
    "/Catalouge/Municipal/DTMS-1000/4.png",
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
