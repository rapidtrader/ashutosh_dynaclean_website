import SweeperComponent from "@/components/common/ProductDesscription/HeroSection";
import data from "@/data/hand-scrubber/data"; // Direct import of the JSON file
import ImageGallery from "@/components/Products/ImageGallery";

export const metadata = {
  title: "Hand Scrubber Polisher HD-15P | Dynaclean Industries",
  description:
    "Clean & polish floors effortlessly with Dynaclean Hand Scrubber Polisher HD-15P. Perfect for tiles, marble, granite & commercial surfaces.",
  keywords:
    "Hand Scrubber Polisher, Floor Polisher Machine, Dynaclean Hand Polisher, Professional Floor Polisher, Commercial Hand Scrubber Polisher, Hand Scrubber Polisher for Tiles and Marble",
  openGraph: {
    type: "website",
    title: "Hand Scrubber Polisher HD-15P | Dynaclean Industries",
    description:
      "Clean & polish floors effortlessly with Dynaclean Hand Scrubber Polisher HD-15P. Perfect for tiles, marble, granite & commercial surfaces.",
    url: "https://dynacleanindustries.com/products/hand-scrubber/HD-15",
    images: [
      {
        url: "https://dynacleanindustries.com/Product/hand-scrubber/hand-scrubber.jpeg",
        alt: "Hand Scrubber Polisher HD-15P",
      },
    ],
  },
};

const DRS90TSweeper = () => {
  const images = ["/Catalouge/hand-scrubber/hand-scrubber.jpeg"];
  return (
    <div>
      {/* Directly pass the imported data as props */}
      <SweeperComponent sweeperData={data} />
      {/* <ImageGallery images={images} /> */}
    </div>
  );
};

export default DRS90TSweeper;
