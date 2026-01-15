import SweeperComponent from "@/components/common/ProductDesscription/HeroSection";
import data from "@/data/Single-Disc-Scrubber/DH-2P/data"; // Updated DH-2P JSON File
import ImageGallery from "@/components/Products/ImageGallery";

export const metadata = {
  title: "DH-2P Single Disc Scrubber",
  description:
    "The Dynaclean DH-2P is a heavy-duty single-disc scrubber designed for industrial and commercial deep cleaning. Equipped with a 2 HP motor, triple-disc system, and 90 kg brush pressure, it delivers powerful scrubbing performance.",
  keywords:
    "Single disc scrubber, DH-2P scrubber, industrial floor scrubber, heavy-duty scrubber, floor cleaning machine, commercial scrubber, triple disc scrubber",
  openGraph: {
    type: "website",
    title: "DH-2P Single Disc Scrubber",
    description:
      "The Dynaclean DH-2P is a powerful industrial-grade single-disc scrubber featuring a 2 HP motor, 3×300 mm brush setup, and 90 kg brush pressure for deep heavy-duty cleaning.",
    url: "https://dynacleanindustries.com/products/Single-disc-scrubber/DH-2P",
    images: [
      {
        url: "https://dynacleanindustries.com/Product/Single-Disc-Scrubber/DH-2P/1.jpeg",
        alt: "DH-2P Single Disc Scrubber",
      },
    ],
  },
};

const DH2PScrubber = () => {
  const images = ["/Product/Single-Disc-Scrubber/DH-2P/1.jpeg"];

  return (
    <div>
      <SweeperComponent sweeperData={data} />
      {/* Uncomment if image gallery is needed */}
      {/* <ImageGallery images={images} /> */}
    </div>
  );
};

export default DH2PScrubber;
