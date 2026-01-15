import ResponsiveSection from "@/components/Banner/ResponsiveSection";
import Card from "@/components/common/CardComponent";
import data6070T from "@/data/scrubber-drier/Drier-DB-6070T/data";
import data9050p from "@/data/scrubber-drier/Drier-DB-9050P/data";
import data15p from "@/data/scrubber-drier/Drier-DMOP-15P/data";
import data100p from "@/data/scrubber-drier/Drier-DRO-100P/data";
import data100t from "@/data/scrubber-drier/Drier-DRO-100T/data";
import data200t from "@/data/scrubber-drier/Drier-DRO-200T/data";
import data8085 from "@/data/scrubber-drier/Drier-DRO-8085/data";
import data40 from "@/data/scrubber-drier/Drier-DYNA-40/data";
import data20 from "@/data/scrubber-drier/Drier-DYNA-20/data";

export const metadata = {
  title: "Scrubber-Drier | Dynaclean Industries",
  description:
    "The Dynaclean Industries Scrubber machine is fully battery-operated scrubber drier which is designed for maximum performance & is one of the best floor scrubber Machine  ",
  keywords:
    "dynaclean scrubber drier, scrubber drier, floor scrubber, battery-operated scrubber, walk-behind scrubber drier, ride-on scrubber drier, automatic scrubber drier, ride-on scrubber, ride-on scrubber machine, auto scrubber, floor scrubber machine",
  openGraph: {
    type: "website",
    title: "Scrubber-Drier | Dynaclean Industries",
    description:
      "The Dynaclean Industries Scrubber machine is fully battery-operated scrubber drier which is designed for maximum performance & is one of the best floor scrubber Machine   ",
    url: "https://dynacleanindustries.com/products/scrubber-drier/",
    images: [
      {
        url: "https://dynacleanindustries.com/Product/Auto-Scrubber-Drier/Auto-Scrubber-Drier.png",
        alt: "Scrubber-Drier",
      },
    ],
  },
};

const Scrubber = () => {
  const getShortDescription = (description, wordLimit) => {
    const words = description.split(" "); // Split the description into an array of words
    const shortDescription =
      words.slice(0, wordLimit).join(" ") +
      (words.length > wordLimit ? "..." : ""); // Join the first 'wordLimit' words and add "..." if there are more words
    return shortDescription;
  };
  const shortDescription = getShortDescription(data6070T.description, 27); // Get the first sentence from the description
  const shortDescription1 = getShortDescription(data9050p.description, 27); // Get the first sentence from the description
  const shortDescription2 = getShortDescription(data15p.description, 27); // Get the first sentence from the description
  const shortDescription3 = getShortDescription(data100p.description, 27); // Get the first sentence from the description
  const shortDescription4 = getShortDescription(data100t.description, 27); // Get the first sentence from the description
  const shortDescription5 = getShortDescription(data200t.description, 27); // Get the first sentence from the description
  const shortDescription6 = getShortDescription(data8085.description, 27); // Get the first sentence from the description
  const shortDescription7 = getShortDescription(data40.description, 27); // Get the first sentence from the description
  const shortDescription8 = getShortDescription(data20.description, 27); // Get the first sentence from the description

  const cardData0 = {
    images: [
      "/Product/Auto-Scrubber-Drier/DB-6070T/main.webp",
      "/Product/Auto-Scrubber-Drier/DB-6070T/2.webp",
      "/Product/Auto-Scrubber-Drier/DB-6070T/3.webp",
      "/Product/Auto-Scrubber-Drier/DB-6070T/4.png",
    ],
    url: "/products/scrubber-drier/DB-6070T",
    title: data6070T.title,
    description: shortDescription,
  };

  const cardData = {
    images: [
      "/Product/Auto-Scrubber-Drier/DB-9050P/1.png",
      "/Product/Auto-Scrubber-Drier/DB-9050P/2.png",
      "/Product/Auto-Scrubber-Drier/DB-9050P/3.png",
      "/Product/Auto-Scrubber-Drier/DB-9050P/4.png",
    ],
    url: "/products/scrubber-drier/DB-9050P",
    title: data9050p.title,
    description: shortDescription1,
  };
  const cardData1 = {
    images: [
      "/Product/Auto-Scrubber-Drier/DMOP-15P/1.png",
      "/Product/Auto-Scrubber-Drier/DMOP-15P/2.png",
      "/Product/Auto-Scrubber-Drier/DMOP-15P/3.png",
      "/Product/Auto-Scrubber-Drier/DMOP-15P/4.png",
    ],
    url: "/products/scrubber-drier/DMOP-15P",
    title: data15p.title,
    description: shortDescription2,
  };
  const cardData2 = {
    images: [
      "/Product/Auto-Scrubber-Drier/DRO-100P/1.png",
      "/Product/Auto-Scrubber-Drier/DRO-100P/2.png",
      "/Product/Auto-Scrubber-Drier/DRO-100P/3.png",
      "/Product/Auto-Scrubber-Drier/DRO-100P/4.png",
    ],
    url: "/products/scrubber-drier/DRO-100P",
    title: data100p.title,
    description: shortDescription3,
  };
  const cardData3 = {
    images: [
      "/Product/Auto-Scrubber-Drier/DRO-100T/1.png",
      "/Product/Auto-Scrubber-Drier/DRO-100T/2.png",
    ],
    url: "/products/scrubber-drier/DRO-100T",
    title: data100t.title,
    description: shortDescription4,
  };
  const cardData4 = {
    images: [
      "/Product/Auto-Scrubber-Drier/DRO-200T/1.png",
      "/Product/Auto-Scrubber-Drier/DRO-200T/2.png",
    ],
    url: "/products/scrubber-drier/DRO-200T",
    title: data200t.title,
    description: shortDescription5,
  };
  const cardData5 = {
    images: [
      "/Product/Auto-Scrubber-Drier/DRO-8085/1.png",
      "/Product/Auto-Scrubber-Drier/DRO-8085/2.png",
      "/Product/Auto-Scrubber-Drier/DRO-8085/3.png",
      "/Product/Auto-Scrubber-Drier/DRO-8085/4.png",
    ],
    url: "/products/scrubber-drier/DRO-8085",
    title: data8085.title,
    description: shortDescription6,
  };
  const cardData6 = {
    images: [
      "/Product/Auto-Scrubber-Drier/DYNA-40/1.png",
      "/Product/Auto-Scrubber-Drier/DYNA-40/2.png",
      "/Product/Auto-Scrubber-Drier/DYNA-40/3.png",
    ],
    url: "/products/scrubber-drier/DYNA-40",
    title: data40.title,
    description: shortDescription7,
  };

  const cardData7 = {
    images: [
      "/Product/Auto-Scrubber-Drier/DYNA-20/1.png",
      "/Product/Auto-Scrubber-Drier/DYNA-20/2.png",
    ],
    url: "/products/scrubber-drier/DYNA-20",
    title: data20.title,
    description: shortDescription8,
  };

  return (
    <main>
      <ResponsiveSection
        imagePath="/Product/Auto-Scrubber-Drier/DB-6070T/main.webp" // public directory
        imageSide="left" // or "right"
        title="Scrubber Drier"
        description="At Dynaclean Industries Pvt. Ltd., we manufacture and supply a wide range of 8 scrubber drier machine, designed to deliver best floor cleaning performance. Our product are includes 4 walk-behind models — DMOP15P, DYNA40, DB6070, and DB9050 and 4 ride-on models — DRO8085, DRO100P, DRO100T, and DRO200T. Each machine is manufactured with high-quality scrubber brushes for deep cleaning, with high quality squeegees that leave the floor clean, dry, and shining in a same time.

Our Scrubber Driers are ideal for cleaning small and large commercial and industrial sectors such as malls, hospitals, basements , airports, railways, metro, factories, and more. Designed for durability and easy for operation, Dynaclean scrubber driers ensure efficient, time-saving, and hygienic cleaning across all types of hard floors."
      />

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center m-4 md:mt-4 md:mb-20 text-justify">
        <Card {...cardData0} />
        <Card {...cardData} />
        <Card {...cardData1} />
        <Card {...cardData6} />
        <Card {...cardData7} />
        <Card {...cardData2} />
        <Card {...cardData3} />
        <Card {...cardData4} />
        <Card {...cardData5} />
      </div>
    </main>
  );
};

export default Scrubber;
