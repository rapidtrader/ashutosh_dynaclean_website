import SweeperComponent from "@/components/common/ProductDesscription/HeroSection";
import data from "@/data/scrubber-drier/Drier-DRO-100T/data"; // Direct import of the JSON file
import ImageGallery from "@/components/Products/ImageGallery";

export const metadata = {
  title: "Ride On Scrubber Machine DRO-100T | Dynaclean Industries",
  description:
    "Ride on scrubber Machine DRO-100T is an advanced floor scrubber drier equipped with industrial-grade capabilities suitable for intelligent control and large area or floor cleaning.",
  keywords:
    "Ride On Scrubber Machine, Ride On Scrubber, Scrubber drier, floor scrubber drier, floor scrubber machine, scrubber machine, Scrubber, Floor scrubber",
  openGraph: {
    type: "website",
    title: "Ride On Scrubber Machine DRO-100T | Dynaclean Industries",
    description:
      "Ride on scrubber Machine DRO-100T is an advanced floor scrubber drier equipped with industrial-grade capabilities suitable for intelligent control and large area or floor cleaning.",
    url: "https://dynacleanindustries.com/products/scrubber-drier/DRO-100T",
    images: [
      {
        url: "https://dynacleanindustries.com/Product/Auto-Scrubber-Drier/DRO-100T/1.png",
        alt: "Ride On Scrubber Machine DRO-100T",
      },
    ],
  },
};

const DRS90TSweeper = () => {
  const images = [
    "/Catalouge/Ride On Scrubber Driers/DRO-100T/1.png",
    "/Catalouge/Ride On Scrubber Driers/DRO-100T/2.png",
    "/Catalouge/Ride On Scrubber Driers/DRO-100T/3.png",
    "/Catalouge/Ride On Scrubber Driers/DRO-100T/4.png",
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
