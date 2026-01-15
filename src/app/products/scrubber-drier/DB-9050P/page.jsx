import SweeperComponent from "@/components/common/ProductDesscription/HeroSection";
import data from "@/data/scrubber-drier/Drier-DB-9050P/data"; // Direct import of the JSON file
import ImageGallery from "@/components/Products/ImageGallery";

export const metadata = {
  title: "Auto Scrubber Drier DB-9050P",
  description:
    "Auto Scrubber Drier DB-9050P is fully battery-operated scrubber machine. This floor scrubbing machine is ideal for convenience in diverse commercial and industrial places.",
  keywords:
    "Auto Scrubber drier, Scrubber drier, floor scrubber drier, floor scrubber machine, scrubber machine, Scrubber, Floor scrubber, Walk behind scrubber, Walk behind scrubber drier",
  openGraph: {
    type: "website",
    title: "Auto Scrubber Drier DB-9050P",
    description:
      "Auto Scrubber Drier DB-9050P is fully battery-operated scrubber machine. This floor scrubbing machine is ideal for convenience in diverse commercial and industrial places.",
    url: "https://dynacleanindustries.com/products/scrubber-drier/DB-9050P",
    images: [
      {
        url: "https://dynacleanindustries.com/Product/Auto-Scrubber-Drier/DB-9050P/1.png",
        alt: "Auto Scrubber Drier DB-9050P",
      },
    ],
  },
};

const DRS90TSweeper = () => {
  const images = [
    "/Catalouge/Auto Scrubber Driers/DB-9050P/1.png",
    "/Catalouge/Auto Scrubber Driers/DB-9050P/2.png",
    "/Catalouge/Auto Scrubber Driers/DB-9050P/3.png",
    "/Catalouge/Auto Scrubber Driers/DB-9050P/4.png",
    "/Catalouge/Auto Scrubber Driers/DB-9050P/5.png",
    "/Catalouge/Auto Scrubber Driers/DB-9050P/6.png",
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
