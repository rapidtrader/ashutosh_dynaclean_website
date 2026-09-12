import SweeperComponent from "@/components/common/ProductDesscription/HeroSection";
import data from "@/data/Highway-Sweeper-Truck/DTMS-10000/data";

export const metadata = {
  title: "Truck Mounted Road Sweeper DTMS-10000 | Dynaclean Industries",
  description:
    "Discover Dynaclean's DTMS-10000 Truck Mounted Road Sweeper, a heavy-duty road sweeper designed for highways, municipal roads, industrial zones & city cleaning",
  keywords:
    "Truck Mounted Road Sweeper, DTMS-10000, Dynaclean, Road Sweeper, Diesel Sweeper Truck, Municipal Sweeper, Industrial Cleaning",
  openGraph: {
    type: "website",
    title: "Truck Mounted Road Sweeper DTMS-10000 | Dynaclean Industries",
    description:
      "Discover Dynaclean's DTMS-10000 Truck Mounted Road Sweeper, a heavy-duty road sweeper designed for highways, municipal roads, industrial zones & city cleaning",
    url: "https://dynacleanindustries.com/products/municipal-diesel-sweeper-truck/DTMS-10000",
    images: [
      {
        url: "https://dynacleanindustries.com/Product/HIGHWAY SWEEPER TRUCK-DTMS-10000/DTMS-10000 (1).png",
        alt: "Truck Mounted Road Sweeper DTMS-10000",
      },
    ],
  },
};

const TruckMountedRoadSweeper = () => {
  // Create a modified data object with updated title and images
  const modifiedData = {
    ...data,
    title: "Truck Mounted Road Sweeper DTMS-10000",
    images: [
      "/Product/Munciple-Deisal-sweeper-Truck/DTMS-10000/1-Photoroom.png",
      "/Product/Munciple-Deisal-sweeper-Truck/DTMS-10000/2-Photoroom.png",
    ],
  };

  return (
    <div>
      <SweeperComponent sweeperData={modifiedData} />
    </div>
  );
};

export default TruckMountedRoadSweeper;
