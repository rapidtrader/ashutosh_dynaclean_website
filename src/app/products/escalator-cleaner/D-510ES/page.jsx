import SweeperComponent from "@/components/common/ProductDesscription/HeroSection";
import data from "@/data/Escalator-Cleaning/dsd/data"; // Direct import of the JSON file
import ImageGallery from "@/components/Products/ImageGallery";

export const metadata = {
  title: "Escalator Cleaner D-510ES",
  description:
    "Escalator Cleaner D-510ES is specifically designed to keep escalators clean and safe in metro stations and malls. It's one of the best escalator cleaning machines for smooth operation and long-term maintenance.",
  keywords:
    "dynaclean escalator cleaners, escalator cleaners, escalator cleaning machine, best escalators cleaners, escalator cleaning for metro, escalator cleaner for mall, escalator cleaning product, escalator step cleaning machine",
  openGraph: {
    type: "website",
    title: "Escalator Cleaner D-510ES",
    description:
      "Escalator Cleaner D-510ES is specifically designed to keep escalators clean and safe in metro stations and malls. It's one of the best escalator cleaning machines for smooth operation and long-term maintenance.",
    url: "https://dynacleanindustries.com/products/escalator-cleaner/D-510ES",
    images: [
      {
        url: "https://dynacleanindustries.com/Product/Escalator-cleaner/1.png",
        alt: "Escalator Cleaner D-510ES",
      },
    ],
  },
};

const DRS90TSweeper = () => {
  const images = [
    "/Catalouge/Escaltor Cleaners/D-510ES/1.png",
    "/Catalouge/Escaltor Cleaners/D-510ES/2.png",
    "/Catalouge/Escaltor Cleaners/D-510ES/3.png",
    "/Catalouge/Escaltor Cleaners/D-510ES/4.png",
    "/Catalouge/Escaltor Cleaners/D-510ES/5.png",
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
