import SweeperComponent from "@/components/common/ProductDesscription/HeroSection";
import data from "@/data/scrubber-drier/Drier-DRO-100P/data"; // Direct import of the JSON file
import ImageGallery from "@/components/Products/ImageGallery";

export const metadata = {
  title: "Ride-On Scrubber Drier DRO 100P",
  description:
    "Ride on scrubber drier DRO-100P is a fully battery-operated scrubber drier that comes with ergonomic features and comfort, ensuring precise floor scrubbing with little physical exertion.",
  keywords:
    "Ride On Scrubber drier, Ride On Scrubber, Scrubber drier, floor scrubber drier, floor scrubber machine, scrubber machine, Scrubber, Floor scrubber, ride-on scrubber machine",
  openGraph: {
    type: "website",
    title: "Ride-On Scrubber Drier DRO 100P",
    description:
      "Ride on scrubber drier DRO-100P is a fully battery-operated scrubber drier that comes with ergonomic features and comfort, ensuring precise floor scrubbing with little physical exertion.",
    url: "https://dynacleanindustries.com/products/scrubber-drier/DRO-100P",
    images: [
      {
        url: "https://dynacleanindustries.com/Product/Auto-Scrubber-Drier/DRO-100P/1.png",
        alt: "Ride-On Scrubber Drier DRO 100P",
      },
    ],
  },
};

const DRS90TSweeper = () => {
  const images = [
    "/Catalouge/Ride On Scrubber Driers/DRO-100P/1.png",
    "/Catalouge/Ride On Scrubber Driers/DRO-100P/2.png",
    "/Catalouge/Ride On Scrubber Driers/DRO-100P/3.png",
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
