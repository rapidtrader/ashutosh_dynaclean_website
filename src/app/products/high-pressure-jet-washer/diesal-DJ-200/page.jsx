import SweeperComponent from "@/components/common/ProductDesscription/HeroSection";
import data from "@/data/High-Pressure-jet-washer/DJ-200/data"; // Direct import of the JSON file
import ImageGallery from "@/components/Products/ImageGallery";

export const metadata = {
  title: "High Pressure Jet Washer DJ-200",
  description:
    "The DJ-200 is a diesel-powered high-pressure jet washer designed for industrial use. It delivers 170 bar of pressure, 17 L/min flow rate, and includes a 200-liter integrated water reservoir.",
  keywords:
    "High jet pressure washer, jet pressure washer, pressure washer, Dynaclean jet pressure washer, industrial pressure washer, car washer machine",
  openGraph: {
    type: "website",
    title: "High Pressure Jet Washer DJ-200",
    description:
      "The DJ-200 is a diesel-powered high-pressure jet washer designed for industrial use. It delivers 170 bar of pressure, 17 L/min flow rate, and includes a 200-liter integrated water reservoir.",
    url: "https://dynacleanindustries.com/products/high-pressure-jet-washer/diesel-DJ-200",
    images: [
      {
        url: "https://dynacleanindustries.com/Product/Jet-washer/DJ-200/1.png",
        alt: "High Pressure Jet Washer DJ-200",
      },
    ],
  },
};

const DRS90TSweeper = () => {
  const images = [
    "/Catalouge/High Pressure Jet Washer/Dj-200/1.png",
    "/Catalouge/High Pressure Jet Washer/Dj-200/2.png",
    "/Catalouge/High Pressure Jet Washer/Dj-200/3.png",
    "/Catalouge/High Pressure Jet Washer/Dj-200/4.png",
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
