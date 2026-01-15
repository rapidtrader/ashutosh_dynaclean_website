import SweeperComponent from "@/components/common/ProductDesscription/HeroSection";
import data from "@/data/High-Pressure-jet-washer/DJB-200/data"; // Direct import of the JSON file
import ImageGallery from "@/components/Products/ImageGallery";

export const metadata = {
  title: "High Pressure Jet Washer DJB-200",
  description:
    "High Pressure Jet Washer DJB-200 is a battery-powered jet pressure washer designed to provide strong, portable, and non-emission eco-friendly cleaning.",
  keywords:
    "High jet pressure washer, jet pressure washer, industrial pressure washer, pressure washer, Dynaclean jet pressure washer, eco-friendly pressure washer",
  openGraph: {
    type: "website",
    title: "High Pressure Jet Washer DJB-200",
    description:
      "High Pressure Jet Washer DJB-200 is a battery-powered jet pressure washer designed to provide strong, portable, and non-emission eco-friendly cleaning.",
    url: "https://dynacleanindustries.com/products/high-pressure-jet-washer/battery-DJB-200",
    images: [
      {
        url: "https://dynacleanindustries.com/Product/Jet-washer/DJB-200/1.png",
        alt: "High Pressure Jet Washer DJB-200",
      },
    ],
  },
};

const DRS90TSweeper = () => {
  const images = [
    // "/Product/Jet-washer/DJB-200/1.png",
    "/Product/Jet-washer/DJB-200/2.png",
    // "/Product/Jet-washer/DJB-200/3.png",
    "/Product/Jet-washer/DJB-200/4.png",
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
