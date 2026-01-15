import SweeperComponent from "@/components/common/ProductDesscription/HeroSection";
import data from "@/data/Single-Disc-Scrubber/D-20P/data"; // Direct import of the JSON file
import ImageGallery from "@/components/Products/ImageGallery";

export const metadata = {
  title: "D-20P Single Disc Scrubber",
  description:
    "Single disc scrubber D-20P is an industrial/commercial-grade heavy-duty floor scrubber drier that can clean, polish and maintain every type of floor surface with efficiency.",
  keywords:
    "Single disc floor scrubber, single disc scrubber drier, scrubber drier, floor scrubber drier, floor scrubber machine, walk-behind scrubber drier, scrubber machine",
  openGraph: {
    type: "website",
    title: "D-20P Single Disc Scrubber",
    description:
      "Single disc scrubber D-20P is an industrial/commercial-grade heavy-duty floor scrubber drier that can clean, polish and maintain every type of floor surface with efficiency.",
    url: "https://dynacleanindustries.com/products/Single-disc-scrubber/D-20P",
    images: [
      {
        url: "https://dynacleanindustries.com/Product/Single-Disc-Scrubber/D-20P/1.png",
        alt: "Single disc scrubber",
      },
    ],
  },
};

const DRS90TSweeper = () => {
  const images = [
    "/Catalouge/Single Disc Scrubber/D-20P/1.png",
    "/Catalouge/Single Disc Scrubber/D-20P/2.png",
    "/Catalouge/Single Disc Scrubber/D-20P/3.png",
    "/Catalouge/Single Disc Scrubber/D-20P/4.png",
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
