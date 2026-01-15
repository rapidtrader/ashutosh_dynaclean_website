import SweeperComponent from "@/components/common/ProductDesscription/HeroSection";
import data from "@/data/vaccume-cleaner/back-pack/data"; // Direct import of the JSON file
import ImageGallery from "@/components/Products/ImageGallery";

export const metadata = {
  title: "Back-Pack Vacuum Cleaner-DBP6.",
  description:
    "Back-Pack Vacuum Cleaner DBP-6 is a high-performance backpack vacuum Cleaner specifically designed for professionals and its the best vacuum cleaner cleaning in difficult areas.",
  keywords:
    "Dynaclean vacuum cleaner, vacuum cleaner, best vacuum cleaner, Back-Pack Vacuum cleaner",
  openGraph: {
    type: "website",
    title: "Back-Pack Vacuum Cleaner -DBP6.",
    description:
      "Back-Pack Vacuum Cleaner DBP-6 is a high-performance backpack vacuum Cleaner specifically designed for professionals and its the best vacuum cleaner cleaning in difficult areas.",
    url: "https://dynacleanindustries.com/products/vacuum-cleaner/back-pack-DBP6",
    images: [
      {
        url: "https://dynacleanindustries.com/Product/Vaccume-Cleaner/Back-Pack%20Vacuum%20Cleaner/1.png",
        alt: "Dynaclean Back-Pack Vacuum Cleaner",
      },
    ],
  },
};

const DRS90TSweeper = () => {
  const images = [
    "/Catalouge/Back Pack/1.png",
    "/Catalouge/Back Pack/2.png",
    "/Catalouge/Back Pack/3.png",
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
