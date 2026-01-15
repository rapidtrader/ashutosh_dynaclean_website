import SweeperComponent from "@/components/common/ProductDesscription/HeroSection";
import data from "@/data/vaccume-cleaner/dv-80/data"; // Direct import of the JSON file
import ImageGallery from "@/components/Products/ImageGallery";

export const metadata = {
  title: "Vacuum Cleaner DV-80",
  description:
    "Vacuum Cleaner DV-80 is a powerful industrial-grade dry and wet vacuum cleaner designed to take on the toughest cleaning challenges easily.",
  keywords: "Dynaclean vacuum cleaner, vacuum cleaner, best vacuum cleaner",
  openGraph: {
    type: "website",
    title: "Vacuum Cleaner DV-80",
    description:
      "Vacuum Cleaner DV-80 is a powerful industrial-grade dry and wet vacuum cleaner designed to take on the toughest cleaning challenges easily.",
    url: "https://dynacleanindustries.com/products/vacuum-cleaner/dv-80",
    images: [
      {
        url: "https://dynacleanindustries.com/Product/Vaccume-Cleaner/DV-80/1.jpg",
        alt: "Vacuum cleaner",
      },
    ],
  },
};

const DRS90TSweeper = () => {
  const images = [
    "/Catalouge/Vacuum Cleaners/1.png",
    "/Catalouge/Vacuum Cleaners/2.png",
    "/Catalouge/Vacuum Cleaners/3.png",
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
