import SweeperComponent from "@/components/common/ProductDesscription/HeroSection";
import data from "@/data/vaccume-cleaner/dv-60/data"; // Direct import of the JSON file
import ImageGallery from "@/components/Products/ImageGallery";

export const metadata = {
  title: "Vacuum Cleaner DV-60.",
  description:
    "Vacuum Cleaner DV-60 is a sturdy, high-capacity dry and wet cleaning machine that is one of the best vacuum cleaners designed for high-end performance in the industrial sector.",
  keywords: "Dynaclean vacuum cleaner, vacuum cleaner, best vacuum cleaner",
  openGraph: {
    type: "website",
    title: "Vacuum Cleaner DV-60",
    description:
      "Vacuum Cleaner DV-60 is a sturdy, high-capacity dry and wet cleaning machine that is one of the best vacuum cleaners designed for high-end performance in the industrial sector.",
    url: "https://dynacleanindustries.com/products/vacuum-cleaner/dv-60",
    images: [
      {
        url: "https://dynacleanindustries.com/Product/Vaccume-Cleaner/DV-60/1.jpg",
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
