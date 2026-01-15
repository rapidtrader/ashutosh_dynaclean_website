import SweeperComponent from "@/components/common/ProductDesscription/HeroSection";
import data from "@/data/scrubber-drier/Drier-DMOP-15P/data"; // Direct import of the JSON file
import ImageGallery from "@/components/Products/ImageGallery";

export const metadata = {
  title: "Auto Scrubber Drier DMOP-15P | Dynaclean Industries",
  description:
    "Auto scrubber Drier DMOP-15P is a flexible and efficient compact walk behind scrubber drier with heavy industrial use productivity goals in mind. Floor Scrubber Machine scrubs floors.",
  keywords:
    "Auto Scrubber drier, Scrubber drier, floor scrubber drier, floor scrubber machine, scrubber machine, Scrubber, Floor scrubber, Walk behind scrubber, Walk behind scrubber drier",
  openGraph: {
    type: "website", // Only 'website' or 'article' are allowed
    title: "Auto Scrubber Drier DMOP-15P | Dynaclean Industries",
    description:
      "Auto scrubber Drier DMOP-15P is a flexible and efficient compact walk behind scrubber drier with heavy industrial use productivity goals in mind. Floor Scrubber Machine scrubs floors.",
    url: "https://dynacleanindustries.com/products/scrubber-drier/DMOP-15P",
    images: [
      {
        url: "https://dynacleanindustries.com/Product/Auto-Scrubber-Drier/DMOP-15P/1.png",
        alt: "Auto Scrubber Drier DMOP-15P",
      },
    ],
  },
};

const DRS90TSweeper = () => {
  const images = [
    "/Catalouge/Auto Scrubber Driers/DMOP-15P/1.png",
    "/Catalouge/Auto Scrubber Driers/DMOP-15P/2.png",
    "/Catalouge/Auto Scrubber Driers/DMOP-15P/3.png",
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
