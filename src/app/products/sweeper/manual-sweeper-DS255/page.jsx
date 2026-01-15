import SweeperComponent from "@/components/common/ProductDesscription/HeroSection";
import data from "@/data/sweeper/DS2-55/data"; // Direct import of the JSON file
import ImageGallery from "@/components/Products/ImageGallery";

export const metadata = {
  title: "Best Manual Sweeper DS2-55",
  description:
    "Best Sweeper Machine DS2-55 is a compact, lightweight, walk-behind sweeper machine designed to efficiently clean dust and dirt in commercial areas.",
  keywords:
    "Best Sweeper Machine , Sweeper, Sweeper machine, manual sweeper, walk behind sweeper, floor sweeper, floor cleaning machine, cleaning machine",
  openGraph: {
    type: "website",
    title: "Manual Sweeper DS2-55",
    description:
      "Manual Sweeper DS2-55 is a compact, lightweight, walk-behind sweeper machine designed to efficiently clean dust and dirt in commercial areas.",
    url: "https://dynacleanindustries.com/products/sweeper/manual-sweeper-ds2-55",
    images: [
      {
        url: "https://dynacleanindustries.com/Product/Sweeper/DS2-55/1.png", // Update this with actual image path
        alt: "Manual Sweeper DS2-55",
      },
    ],
  },
};

const DRS90TSweeper = () => {
  const images = [
    "/Catalouge/Sweepers/DS2-55/1.png",
    "/Catalouge/Sweepers/DS2-55/2.png",
    "/Catalouge/Sweepers/DS2-55/3.png",
    "/Catalouge/Sweepers/DS2-55/4.png",
    "/Catalouge/Sweepers/DS2-55/5.png",
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
