import SweeperComponent from "@/components/common/ProductDesscription/HeroSection";
import data from "@/data/High-Pressure-jet-washer/DJE-18/data"; // Direct import of the JSON file
import ImageGallery from "@/components/Products/ImageGallery";

export const metadata = {
  title: "High Pressure Jet Washer DJE-18",
  description:
    "High jet pressure washer DJE-18 is a powerful electric jet washer, created to remove dirt and grease with cleaning precision and industrial pressure washer cleaning.",
  keywords:
    "High jet pressure washer, jet pressure washer, pressure washer, Dynaclean jet pressure washer, Industrial pressure washer, Car washer machine, Electric jet washer",
  openGraph: {
    type: "website",
    title: "High Pressure Jet Washer DJE-18",
    description:
      "High jet pressure washer DJE-18 is a powerful electric jet washer, created to remove dirt and grease with cleaning precision and industrial pressure washer cleaning.",
    url: "https://dynacleanindustries.com/products/high-pressure-jet-washer/electric-DJE-18",
    images: [
      {
        url: "https://dynacleanindustries.com/Product/Jet-washer/DJE-18/1.png",
        alt: "High jet pressure washer",
      },
    ],
  },
};

const DRS90TSweeper = () => {
  const images = [
    "/Catalouge/High Pressure Jet Washer/DJE-18/1.png",
    "/Catalouge/High Pressure Jet Washer/DJE-18/2.png",
    "/Catalouge/High Pressure Jet Washer/DJE-18/3.png",
    "/Catalouge/High Pressure Jet Washer/DJE-18/4.png",
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
