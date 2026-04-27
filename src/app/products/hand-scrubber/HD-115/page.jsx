import SweeperComponent from "@/components/common/ProductDesscription/HeroSection";
import data from "@/data/hand-scrubber/HD-115/data";

export const metadata = {
  title: "Hand Scrubber Polisher HD-115 | Dynaclean Industries",
  description:
    "Clean & polish floors effortlessly with Dynaclean Hand Scrubber Polisher HD-115. Ideal for tiles, marble, granite & commercial surfaces.",
  keywords:
    "Hand Scrubber Polisher, Floor Polisher Machine, Dynaclean Hand Polisher, Professional Floor Polisher, Commercial Hand Scrubber Polisher, Hand Scrubber Polisher for Tiles and Marble",
  openGraph: {
    type: "website",
    title: "Hand Scrubber Polisher HD-115 | Dynaclean Industries",
    description:
      "Clean & polish floors effortlessly with Dynaclean Hand Scrubber Polisher HD-115. Ideal for tiles, marble, granite & commercial surfaces.",
    url: "https://dynacleanindustries.com/products/hand-scrubber/HD-115",
    images: [
      {
        url: "https://img.youtube.com/vi/XiE8_fL5tWI/maxresdefault.jpg",
        alt: "Hand Scrubber Polisher HD-115",
      },
    ],
  },
};

const HandScrubberHD115 = () => {
  return (
    <div>
      <SweeperComponent sweeperData={data} />
    </div>
  );
};

export default HandScrubberHD115;
