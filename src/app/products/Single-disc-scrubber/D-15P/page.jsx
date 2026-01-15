import SweeperComponent from "@/components/common/ProductDesscription/HeroSection";
import data from "@/data/Single-Disc-Scrubber/D-15P/data"; // Direct import of the JSON file
import ImageGallery from "@/components/Products/ImageGallery";
export const metadata = {
  title: "Floor Scrubber Machine D-15P | Dynaclean Industries",
  description:
    "Single Disc Floor Scrubber Machine D-15P is an effective and powerful floor scrubber Machine. It is suited for floor cleaning in commercial and industrial spaces.",
  keywords:
    "Single disc floor scrubber, floor scrubber machine, single disc scrubber drier, scrubber drier, floor scrubber drier, floor scrubber machine, walk-behind scrubber drier, scrubber machine",
  openGraph: {
    type: "website",
    title: "Floor Scrubber Machine D-15P | Dynaclean Industries",
    description:
      "Single disc floor scrubber D-15P is an effective and powerful floor scrubber Machine. It is suited for floor cleaning in commercial and industrial spaces.",
    url: "https://dynacleanindustries.com/products/Single-disc-scrubber/D-15P",
    images: [
      {
        url: "https://dynacleanindustries.com/Product/Single-Disc-Scrubber/D-15P/1.png",
        alt: "Single disc scrubber drier",
      },
    ],
  },
};

const DRS90TSweeper = () => {
  const images = [
    "/Catalouge/Single Disc Scrubber/D-15P/1.png",
    "/Catalouge/Single Disc Scrubber/D-15P/2.png",
    "/Catalouge/Single Disc Scrubber/D-15P/3.png",
    "/Catalouge/Single Disc Scrubber/D-15P/4.png",
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
