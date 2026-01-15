import SweeperComponent from "@/components/common/ProductDesscription/HeroSection";
import data from "@/data/Municipal-Diesel-Sweeper-Truck/DTMS-6000/data"; // Direct import of the JSON file
import ImageGallery from "@/components/Products/ImageGallery";

export const metadata = {
  title: "Sweeper Truck DTMS-6000 | Municipal Diesel Sweeper Truck",
  description:
    "Discover Dynaclean’s DTMS-6000 Sweeper Truck – a powerful municipal diesel road sweeper truck designed for highways, industrial zones & city sanitation.",
  keywords:
    "Road Sweeper, Road Sweeper Truck, Road Sweeper Machine, Sweeper Truck, Municipal Sweeper Truck, Diesel Operated Sweeper truck, Dynaclean Sweeper Truck, Municipal Sweeper Truck",
  openGraph: {
    type: "website",
    title: "Sweeper Truck DTMS-6000 | Municipal Diesel Sweeper Truck",
    description:
      "Discover Dynaclean’s DTMS-6000 Sweeper Truck – a powerful municipal diesel road sweeper truck designed for highways, industrial zones & city sanitation.",
    url: "https://dynacleanindustries.com/products/municipal-diesel-sweeper-truck/DTMS-6000",
    images: [
      {
        url: "https://dynacleanindustries.com/Product/Munciple-Deisal-sweeper-Truck/DTMS-6000/1.png",
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
