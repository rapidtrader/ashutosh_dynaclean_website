import SweeperComponent from "@/components/common/ProductDesscription/HeroSection";
import data from "@/data/Electric-Sweeper-Truck/DRS-2000HD/data"; // Direct import of the JSON file
import ImageGallery from "@/components/Products/ImageGallery";

export const metadata = {
  title: "Electric Road Sweeper Truck DRS-2000HD",
  description:
    "The battery-operated Sweeper Truck DRS-2000HD is a capable road sweeper designed for smart city operations. This advanced electric road sweeper machine is engineered for cleaning of urban areas and industrial spaces with zero emissions.",
  keywords:
    "Battery-operated Road Sweeper, Electric Road Sweeper Truck, DRS-2000HD, Road Sweeper Truck, Road Sweeper Machine, Sweeper Truck, Battery-operated Sweeper Truck, Dynaclean Sweeper Truck",
  openGraph: {
    type: "website",
    title: "Electric Road Sweeper Truck DRS-2000HD",
    description:
      "The battery-operated Sweeper Truck DRS-2000HD is a capable road sweeper and carrying out smart city operations. This road sweeper machine is designed for cleaning of urban areas.",
    url: "https://dynacleanindustries.com/products/battery-operated-sweeper-truck/DRS-2000HD",
    images: [
      {
        url: "https://dynacleanindustries.com/Product/Bettery-Operated-truck/DRS-2000HD/DRS_2000HD (1).png",
        alt: "Electric Road Sweeper Truck DRS-2000HD",
      },
    ],
  },
};

const DRS2000HDSweeper = () => {
  const images = [
    "/Product/Bettery-Operated-truck/DRS-2000HD/DRS_2000HD (1).png",
    "/Product/Bettery-Operated-truck/DRS-2000HD/DRS_2000HD (2).png",
    "/Product/Bettery-Operated-truck/DRS-2000HD/DRS_2000HD (3).png",
  ];
  return (
    <div>
      {/* Directly pass the imported data as props */}
      <SweeperComponent sweeperData={data} />
      {/* <ImageGallery images={images} /> */}
    </div>
  );
};

export default DRS2000HDSweeper;
