import SweeperComponent from "@/components/common/ProductDesscription/HeroSection";
import data from "@/data/sweeper/DSE-55/data"; // Direct import of the JSON file
import ImageGallery from "@/components/Products/ImageGallery";

export const metadata = {
  title: "Sweeper Machine | Manual Sweeper DSE55 – Dynaclean Industries",
  description:
    "Dynaclean Sweeper Machine DSE-55 is the ideal combination of efficiency, longevity, and eco-friendliness for every need for cleaning. ",
  keywords:
    "Sweeper, Sweeper machine, manual sweeper, electric sweeper, walk behind sweeper, floor sweeper, floor cleaning machine, cleaning machine",
  openGraph: {
    type: "website",
    title: "Sweeper Machine | Manual Sweeper DSE55 – Dynaclean Industries",
    description:
      "Dynaclean Sweeper Machine DSE-55 is the ideal combination of efficiency, longevity, and eco-friendliness for every need for cleaning. ",
    url: "https://dynacleanindustries.com/products/sweeper/manual-sweeper-DSE55",
    images: [
      {
        url: "https://dynacleanindustries.com/Product/Sweeper/DSE-55/1.png",
        alt: "Manual Sweeper DSE-55",
      },
    ],
  },
};

const DRS90TSweeper = () => {
  const images = [
    "/Catalouge/Sweepers/dse-55/1.png",
    "/Catalouge/Sweepers/dse-55/2.png",
    "/Catalouge/Sweepers/dse-55/3.png",
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
