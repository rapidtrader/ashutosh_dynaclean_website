import SweeperComponent from "@/components/common/ProductDesscription/HeroSection";
import data from "@/data/Highway-Sweeper-Truck/DTMS-10000/data";

export const metadata = {
  title: "Highway Sweeper Truck DTMS-10000 | Dynaclean Industries",
  description:
    "Discover Dynaclean's DTMS-10000 Highway Sweeper Truck, a heavy-duty road sweeper designed for highways, municipal roads, industrial zones & city cleaning",
  keywords:
    "Highway Sweeper Truck, DTMS-10000, Dynaclean, Road Sweeper, Diesel Sweeper Truck, Heavy-duty Sweeper, Municipal Sweeper, Industrial Cleaning",
  openGraph: {
    type: "website",
    title: "Highway Sweeper Truck DTMS-10000 | Dynaclean Industries",
    description:
      "Discover Dynaclean's DTMS-10000 Highway Sweeper Truck, a heavy-duty road sweeper designed for highways, municipal roads, industrial zones & city cleaning",
    url: "https://dynacleanindustries.com/products/highway-sweeper-truck/DTMS-10000",
    images: [
      {
        url: "https://dynacleanindustries.com/Product/HIGHWAY SWEEPER TRUCK-DTMS-10000/DTMS-10000 (1).png",
        alt: "Highway Sweeper Truck DTMS-10000",
      },
    ],
  },
};

const HighwaySweeperTruckDTMS10000 = () => {
  return (
    <div>
      <SweeperComponent sweeperData={data} />
    </div>
  );
};

export default HighwaySweeperTruckDTMS10000;
