import SweeperComponent from "@/components/common/ProductDesscription/HeroSection";
import data from "@/data/Electric-Sweeper-Truck/DTMS-7500/data";
import ImageGallery from "@/components/Products/ImageGallery";

export const metadata = {
  title: "Electric Sweeper Truck DTMS – 7500 EV",
  description:
    "The battery-operated sweeper Truck DTMS-7500EV is the best choice in dealing eco-friendly road sweeping. This road sweeper ideal for municipalities, industrial areas, airports.",
  keywords:
    "Battery-operated Road Sweeper, Road Sweeper Truck, Road Sweeper Machine, Sweeper Truck, Battery-operated Sweeper Truck, Dynaclean Sweeper Truck",
  openGraph: {
    type: "website",
    title: "Electric Sweeper Truck DTMS – 7500 EV",
    description:
      "The battery-operated sweeper Truck DTMS-7500EV is the best choice in dealing eco-friendly road sweeping. This road sweeper ideal for municipalities, industrial areas, airports.",
    url: "https://dynacleanindustries.com/products/battery-operated-sweeper-truck/DTMS-7500",
    images: [
      {
        url: "https://dynacleanindustries.com/Product/Bettery-Operated-truck/DTMS-7500 Ev/a.png",
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
      <SweeperComponent sweeperData={data} />
    </div>
  );
};

export default DRS90TSweeper;
