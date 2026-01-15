import SweeperComponent from "@/components/common/ProductDesscription/HeroSection";
import data from "@/data/scrubber-drier/Drier-DYNA-40/data"; // Direct import of the JSON file
import ImageGallery from "@/components/Products/ImageGallery";

export const metadata = {
  title: "Auto Scrubber Drier DYNA-40",
  description:
    "Auto Scrubber Driers Dyna-40 or Walk Behind Scrubber which is the ideal combination of performance and technology. Scrubber drier increased tank capacity allows uninterrupted operation.",
  keywords:
    "Auto Scrubber drier, Scrubber drier, floor scrubber drier, floor scrubber machine, scrubber machine, Scrubber, Floor scrubber, Walk behind scrubber, Walk behind scrubber drier",
  openGraph: {
    type: "website",
    title: "Auto Scrubber Drier DYNA-40",
    description:
      "Auto Scrubber Driers Dyna-40 or Walk Behind Scrubber which is the ideal combination of performance and technology. Scrubber drier increased tank capacity allows uninterrupted operation.",
    url: "https://dynacleanindustries.com/products/scrubber-drier/DYNA-40",
    images: [
      {
        url: "https://dynacleanindustries.com/Product/Auto-Scrubber-Drier/DYNA-40/1.png",
        alt: "Auto Scrubber Drier DYNA-40",
      },
    ],
  },
};

const DRS90TSweeper = () => {
  const images = [
    "/Product/Auto-Scrubber-Drier/DYNA-40/3.png",
    // "/Product/Auto-Scrubber-Drier/DYNA-40/1.png",
    "/Product/Auto-Scrubber-Drier/DYNA-40/2.png",
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
