import SweeperComponent from "@/components/common/ProductDesscription/HeroSection";
import data from "@/data/scrubber-drier/Drier-DRO-8085/data"; // Direct import of the JSON file
import ImageGallery from "@/components/Products/ImageGallery";

export const metadata = {
  title: "Ride-On Scrubber Drier DRO-8085 | Dynaclean Industries",
  description:
    "Ride-On Scrubber Drier DRO-8085 is an efficient scrubber drier perfect for use in malls, airports, and other high-traffic areas requiring heavy-duty floor cleaning with advanced scrubber machines.",
  keywords:
    "Ride On Scrubber drier, Ride On Scrubber, Scrubber drier, floor scrubber drier, floor scrubber machine, scrubber machine, Scrubber, Floor scrubber",
  openGraph: {
    type: "website",
    title: "Ride-On Scrubber Drier DRO-8085 | Dynaclean Industries",
    description:
      "Ride-On Scrubber Drier DRO-8085 is an efficient scrubber drier perfect for use in malls, airports, and other high-traffic areas requiring heavy-duty floor cleaning with advanced scrubber machines.",
    url: "https://dynacleanindustries.com/products/scrubber-drier/DRO-8085",
    images: [
      {
        url: "https://dynacleanindustries.com/Product/Auto-Scrubber-Drier/DRO-8085/1.png",
        alt: "Ride-On Scrubber Drier DRO-8085",
      },
    ],
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
