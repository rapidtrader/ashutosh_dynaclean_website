import SweeperComponent from "@/components/common/ProductDesscription/HeroSection";
import data from "@/data/Electric-Sweeper-Truck/600/data";

export const metadata = {
  title: "600 Self Propelled Sweeper Truck | Battery Operated",
  description:
    "The 600 Battery Operated Self Propelled Sweeper Truck offers zero emissions, low costs, and high efficiency for smart cities, industries, and municipalities.",
  keywords:
    "Battery-operated Road Sweeper, Road Sweeper Truck, Road Sweeper Machine, Sweeper Truck, Battery-operated Sweeper Truck, Dynaclean Sweeper Truck",
  openGraph: {
    type: "website",
    title: "600 Self Propelled Sweeper Truck | Battery Operated",
    description:
      "The 600 Battery Operated Self Propelled Sweeper Truck offers zero emissions, low costs, and high efficiency for smart cities, industries, and municipalities.",
    url: "https://dynacleanindustries.com/products/battery-operated-sweeper-truck/600",
    images: [
      {
        url: "https://img.youtube.com/vi/USsqapcEh3w/hqdefault.jpg",
        alt: "Self Propelled Sweeper Truck 600",
      },
    ],
  },
};

const Sweeper600Page = () => {
  return (
    <div>
      <SweeperComponent sweeperData={data} />
    </div>
  );
};

export default Sweeper600Page;
