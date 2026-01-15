import SweeperComponent from "@/components/common/ProductDesscription/HeroSection";
import data from "@/data/scrubber-drier/Drier-DB-6070T/data"; // Direct import of the JSON file
import ImageGallery from "@/components/Products/ImageGallery";

export const metadata = {
  title: "Scrubber Drier Machine DB-6070T | Dynaclean Industries",
  description:
    "Buy the Dynaclean DB-6070T Scrubber Drier Machine — a powerful, battery-operated floor cleaner ideal for industrial, commercial & hospital cleaning.",
  keywords:
    "dynaclean scrubber drier, scrubber drier, floor scrubber, battery-operated scrubber, walk-behind scrubber drier, ride-on scrubber drier, automatic scrubber drier, ride-on scrubber, ride-on scrubber machine, auto scrubber, floor scrubber machine",
  openGraph: {
    type: "website",
    title: "Scrubber Drier Machine DB-6070T | Dynaclean Industries",
    description:
      "Buy the Dynaclean DB-6070T Scrubber Drier Machine — a powerful, battery-operated floor cleaner ideal for industrial, commercial & hospital cleaning.",
    url: "https://dynacleanindustries.com/products/scrubber-drier/DB-6070T",
    images: [
      {
        url: "https://dynacleanindustries.com/Product/Auto-Scrubber-Drier/DB-6070T/1.png",
        alt: "Scrubber Drier Machine DB-6070T",
      },
    ],
  },
};


const DRS90TSweeper = () => {
  const images = [
    "/Catalouge/Auto Scrubber Driers/Db-6070T/1.png",
    "/Product/Auto-Scrubber-Drier/DB-6070T/2.webp",
    "/Product/Auto-Scrubber-Drier/DB-6070T/3.webp",
  ];
  // C:\Users\PIP SERVER\Desktop\DYNACLEAN\v1\dynaclean\public\Catalouge\Auto Scrubber Driers\Db-6070T\1.png
  return (
    <div>
      {/* Directly pass the imported data as props */}
      <SweeperComponent sweeperData={data} />
      {/* <ImageGallery images={images} /> */}
    </div>
  );
};

export default DRS90TSweeper;
