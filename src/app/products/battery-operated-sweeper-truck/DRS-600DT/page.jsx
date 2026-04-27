import SweeperComponent from "@/components/common/ProductDesscription/HeroSection";
import data from "@/data/Electric-Sweeper-Truck/DRS-600DT/data";

export const metadata = {
  title: "DRS-600DT Self Propelled Sweeper Truck | Battery Operated",
  description:
    "The DRS-600DT Battery Operated Self Propelled Sweeper Truck offers zero emissions, low costs, and high efficiency for smart cities, industries, and municipalities.",
  keywords:
    "Battery-operated Road Sweeper, Road Sweeper Truck, Road Sweeper Machine, Sweeper Truck, Battery-operated Sweeper Truck, Dynaclean Sweeper Truck",
  openGraph: {
    type: "website",
    title: "DRS-600DT Self Propelled Sweeper Truck | Battery Operated",
    description:
      "The DRS-600DT Battery Operated Self Propelled Sweeper Truck offers zero emissions, low costs, and high efficiency for smart cities, industries, and municipalities.",
    url: "https://dynacleanindustries.com/products/battery-operated-sweeper-truck/DRS-600DT",
    images: [
      {
        url: "https://dynacleanindustries.com/Product/Bettery-Operated-truck/600DT/4.png",
        alt: "Self Propelled Sweeper Truck DRS-600DT",
      },
    ],
  },
};

const DRS600DTSweeper = () => {
  return (
    <div>
      <SweeperComponent sweeperData={data} />
    </div>
  );
};

export default DRS600DTSweeper;
