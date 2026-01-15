import SweeperComponent from "@/components/common/ProductDesscription/HeroSection";
import data from "@/data/carpet-cleaner/data"; // Direct import of the JSON file
import ImageGallery from "@/components/Products/ImageGallery";

export const metadata = {
  title: "Carpet cleaner DSC-30 | Dynaclean Industries",
  description:
    "Clean Sofa & Carpet with Dynaclean Sofa & Carpet Cleaning Machine. Best injection-extraction tech removes deep dirt & stains efficiently.",
  keywords:
    "Carpet Injection Machine , Carpet Cleaning Machine , Sofa and Carpet Cleaner , Injection Extraction Carpet Cleaner , Professional Carpet Cleaner , Dynaclean Industries",
  openGraph: {
    type: "website",
    title: "Carpet cleaner DSC-30 | Dynaclean Industries",
    description:
      "Clean Sofa & Carpet with Dynaclean Sofa & Carpet Cleaning Machine. Best injection-extraction tech removes deep dirt & stains efficiently.",
    url: "https://dynacleanindustries.com/products/carpet-cleaner/DSC-30",
    images: [
      {
        url: "https://dynacleanindustries.com/Product/carpet-cleaner/carpet cleaner.jpeg",
        alt: "CARPET CLEANER DSC-30",
      },
    ],
  },
};

const DRS90TSweeper = () => {
  const images = ["/Catalouge/carpet-cleaner/carpet cleaner.jpeg"];
  return (
    <div>
      {/* Directly pass the imported data as props */}
      <SweeperComponent sweeperData={data} />
      {/* <ImageGallery images={images} /> */}
    </div>
  );
};

export default DRS90TSweeper;
