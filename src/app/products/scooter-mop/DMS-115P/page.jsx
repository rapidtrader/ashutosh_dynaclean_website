import SweeperComponent from "@/components/common/ProductDesscription/HeroSection";
import data from "@/data/Scooter-Mop/data"; // Direct import of the JSON file
import ImageGallery from "@/components/Products/ImageGallery";

export const metadata = {
  title: "Scooter Mop DMS-115P",
  description:
    "Battery power scooter mop DMS-115P is designed to assist swift and easy cleaning of expansive floor areas that combines features of a Electric scooter mop allowing users to ride on it.",
  keywords:
    "Dynaclean Electric scooter mop,  Electric scooter mop, Battery power scooter mop, industrial scooter mop, Commercial scooter mop, Dynaclean scooter mop, Eco - friendly scooter mop",
  openGraph: {
    type: "website",
    title: "Scooter Mop DMS-115P",
    description:
      "Battery power scooter mop DMS-115P is designed to assist swift and easy cleaning of expansive floor areas that combines features of a Electric scooter mop allowing users to ride on it.",
    url: "https://dynacleanindustries.com/products/scooter-mop/DMS-115P",
    images: [
      {
        url: "https://dynacleanindustries.com/Product/Scooter-mop/1.png",
        alt: "Scooter Mop DMS-115P",
      },
    ],
  },
};

const DRS90TSweeper = () => {
  const images = ["/Catalouge/Scooter Mop/1.png"];
  return (
    <div>
      {/* Directly pass the imported data as props */}
      <SweeperComponent sweeperData={data} />
      {/* <ImageGallery images={images} /> */}
    </div>
  );
};

export default DRS90TSweeper;
