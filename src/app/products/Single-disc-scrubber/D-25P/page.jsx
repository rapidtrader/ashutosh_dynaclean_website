import SweeperComponent from "@/components/common/ProductDesscription/HeroSection";
import data from "@/data/Single-Disc-Scrubber/D-25P/data"; // Direct import of the JSON file
import ImageGallery from "@/components/Products/ImageGallery";

export const metadata = {
  title: "D-25P Single Disc Scrubber",
  description:
    "Single Disc scrubber drier D-25P is a commercial-grade heavy-duty mop scrubber drier. This floor scrubber machine cleans, polishes and maintains every type of floor surface.",
  keywords:
    "Single disc floor scrubber, single disc scrubber drier, scrubber drier, floor scrubber drier, floor scrubber machine, walk-behind scrubber drier, scrubber machine",
  openGraph: {
    type: "website",
    title: "D-25P Single Disc Scrubber",
    description:
      "Single Disc scrubber drier D-25P is a commercial-grade heavy-duty mop scrubber drier. This floor scrubber machine cleans, polishes and maintains every type of floor surface.",
    url: "https://dynacleanindustries.com/products/Single-disc-scrubber/D-25P",
    images: [
      {
        url: "https://dynacleanindustries.com/Product/Single-Disc-Scrubber/D-25P/1.png",
        alt: "Single disc scrubber",
      },
    ],
  },
};

const DRS90TSweeper = () => {
  const images = [
    "/Catalouge/Single Disc Scrubber/D-25P/1.png",
    "/Catalouge/Single Disc Scrubber/D-25P/2.png",
    "/Catalouge/Single Disc Scrubber/D-25P/3.png",
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
