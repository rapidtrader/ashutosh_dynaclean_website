import SweeperComponent from "@/components/common/ProductDesscription/HeroSection";
import data from "@/data/scrubber-drier/Drier-DYNA-20/data"; // Updated DYNA-20 JSON path
import ImageGallery from "@/components/Products/ImageGallery";

export const metadata = {
  title: "Walk Behind Scrubber Drier DYNA-20",
  description:
    "The Dynaclean DYNA-20 is a compact and high-efficiency floor scrubber drier designed for deep, hygienic cleaning in commercial and institutional spaces.",
  keywords:
    "Auto Scrubber Drier, Walk Behind Scrubber Drier, DYNA-20, Floor Scrubber, Scrubber Machine, Compact Scrubber Drier",
  openGraph: {
    type: "website",
    title: "Walk Behind Scrubber Drier DYNA-20",
    description:
      "The Dynaclean DYNA-20 is a compact and powerful floor scrubber drier offering 3–4 hours of continuous cleaning with excellent water recovery and low noise.",
    url: "https://dynacleanindustries.com/products/scrubber-drier/DYNA-20",
    images: [
      {
        url: "https://dynacleanindustries.com/Product/Auto-Scrubber-Drier/DYNA-20/1.png",
        alt: "Walk Behind Scrubber Drier DYNA-20",
      },
    ],
  },
};

const DYNA20Scrubber = () => {
  const images = [
    "/Product/Auto-Scrubber-Drier/DYNA-20/1.png",
    "/Product/Auto-Scrubber-Drier/DYNA-20/2.png",
  ];

  return (
    <div>
      <SweeperComponent sweeperData={data} />
      {/* If you want gallery visible, uncomment below */}
      {/* <ImageGallery images={images} /> */}
    </div>
  );
};

export default DYNA20Scrubber;
