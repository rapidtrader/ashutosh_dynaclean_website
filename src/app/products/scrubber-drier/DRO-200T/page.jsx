import SweeperComponent from "@/components/common/ProductDesscription/HeroSection";
import data from "@/data/scrubber-drier/Drier-DRO-200T/data"; // Direct import of the JSON file
import ImageGallery from "@/components/Products/ImageGallery";

export const metadata = {
  title: "Ride on Scrubber Drier DRO-200T",
  description:
    "Ride-On Scrubber machine DRO-200T is the most powerful and fully battery-operated scrubber machine, purpose-built for large-scale industrial and commercial floor scrubbing.",
  keywords:
    "DRO-200T, Ride On Scrubber drier,  Ride On Scrubber, Scrubber drier, floor scrubber drier, floor scrubber machine, scrubber machine, Scrubber, Floor scrubber",
  openGraph: {
    type: "website",
    title: "Ride on Scrubber Drier DRO-200T",
    description:
      "Ride-On Scrubber machine DRO-200T is the most powerful and fully battery-operated scrubber machine, purpose-built for large-scale industrial and commercial floor scrubbing.",
    url: "https://dynacleanindustries.com/products/scrubber-drier/DRO-200T",
    images: [
      {
        url: "https://dynacleanindustries.com/Product/Auto-Scrubber-Drier/DRO-200T/1.png",
        alt: "Ride-On Scrubber Drier DRO 200T",
      },
    ],
  },
  alternates: {
    canonical:
      "https://dynacleanindustries.com/products/scrubber-drier/DRO-200T",
  },
};

const DRS90TSweeper = () => {
  const images = [
    "/Catalouge/Ride On Scrubber Driers/DRO-200/1.png",
    "/Catalouge/Ride On Scrubber Driers/DRO-200/2.png",
    "/Catalouge/Ride On Scrubber Driers/DRO-200/3.png",
    "/Catalouge/Ride On Scrubber Driers/DRO-200/4.png",
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
