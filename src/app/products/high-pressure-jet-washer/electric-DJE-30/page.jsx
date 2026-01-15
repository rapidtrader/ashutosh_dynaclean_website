import SweeperComponent from "@/components/common/ProductDesscription/HeroSection";
import data from "@/data/High-Pressure-jet-washer/DJE-30/data"; // Direct import of the JSON file
import ImageGallery from "@/components/Products/ImageGallery";

export const metadata = {
  title: "High-Pressure Jet Washer DJE-30",
  description:
    "High jet pressure washer DJE-30 is a sturdy electric jet washer that is designed for Industrial pressure washer cleaning who require the cleaning with no compromise.",
  keywords:
    "High jet pressure washer, jet pressure washer, pressure washer, Dynaclean jet pressure washer, Industrial pressure washer, Car washer machine, Electric jet washer",
  openGraph: {
    type: "website",
    title: "High-Pressure Jet Washer DJE-30",
    description:
      "High jet pressure washer DJE-30 is a sturdy electric jet washer that is designed for Industrial pressure washer cleaning who require the cleaning with no compromise.",
    url: "https://dynacleanindustries.com/products/high-pressure-jet-washer/electric-DJE-30",
    images: [
      {
        url: "https://dynacleanindustries.com/Product/Jet-washer/DJE-30/1.png",
        alt: "High jet pressure washer",
      },
    ],
  },
};

const DRS90TSweeper = () => {
  const images = [
    "/Catalouge/High Pressure Jet Washer/Dje-30/1.png",
    "/Catalouge/High Pressure Jet Washer/Dje-30/2.png",
    "/Catalouge/High Pressure Jet Washer/Dje-30/3.png",
    "/Catalouge/High Pressure Jet Washer/Dje-30/4.png",
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
