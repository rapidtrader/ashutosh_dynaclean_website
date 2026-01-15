import SweeperComponent from "@/components/common/ProductDesscription/HeroSection";
import data from "@/data/vaccume-cleaner/dv-30/data"; // Direct import of the JSON file
import ImageGallery from "@/components/Products/ImageGallery";

export const metadata = {
  title: "Vacuum Cleaner DV-30.",
  description:
    "Vacuum Cleaner DV-30 is an extremely efficient dry and wet vacuum cleaner designed to tackle the tough cleaning challenges encountered in industrial, commercial,etc.",
  keywords: "Dynaclean vacuum cleaner, vacuum cleaner, best vacuum claner",
  openGraph: {
    type: "website",
    title: "Vacuum Cleaner DV-30",
    description:
      "Vacuum Cleaner DV-30 is an extremely efficient dry and wet vacuum cleaner designed to tackle the tough cleaning challenges encountered in industrial, commercial,etc.",
    url: "https://dynacleanindustries.com/products/vacuum-cleaner/dv-30",
    images: [
      {
        url: "https://dynacleanindustries.com/Product/Vaccume-Cleaner/DV-30/1.png",
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
