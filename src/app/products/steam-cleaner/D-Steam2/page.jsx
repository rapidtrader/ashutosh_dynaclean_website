import SweeperComponent from "@/components/common/ProductDesscription/HeroSection";
import data from "@/data/Steam-cleaner/data"; // Direct import of the JSON file
import ImageGallery from "@/components/Products/ImageGallery";

export const metadata = {
  title: "Steam Cleaner-D-Steam2",
  description:
    "Steam cleaner D-STEAM2 is a state-of-the-art multi-purpose dry steam cleaner that is environment friendly and portable to carry around and easy to use.",
  keywords:
    "dynaclean Steam cleaner, Steam cleaner, Electric powered steam cleaner, electric steam cleaner, Eco-friendly steam cleaner",
  openGraph: {
    type: "website",
    title: "Steam Cleaner-D-Steam2",
    description:
      "Steam cleaner D-STEAM2 is a state-of-the-art multi-purpose dry steam cleaner that is environment friendly and portable to carry around and easy to use.",
    url: "https://dynacleanindustries.com/products/steam-cleaner/D-Steam2",
    images: [
      {
        url: "https://dynacleanindustries.com/Product/steam-cleaner/1.png",
        alt: "Steam Cleaner-D-Steam2",
      },
    ],
  },
};

const DRS90TSweeper = () => {
  const images = ["/Catalouge/Steam Cleaner/D-STEAMS2/1.png"];
  return (
    <div>
      {/* Directly pass the imported data as props */}
      <SweeperComponent sweeperData={data} />
      {/* <ImageGallery images={images} /> */}
    </div>
  );
};

export default DRS90TSweeper;
