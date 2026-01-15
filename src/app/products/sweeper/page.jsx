import ResponsiveSection from "@/components/Banner/ResponsiveSection";
import Card from "@/components/common/CardComponent";
import data90T from "@/data/sweeper/DRS-90T/data";
import data180T from "@/data/sweeper/DRS-180T/data";
import data55 from "@/data/sweeper/DS2-55/data";
import datae55 from "@/data/sweeper/DSE-55/data";
import data250 from "@/data/sweeper//DRS-250T/data";

export const metadata = {
  title: "Sweeper Machine | Dynaclean Industries",
  description:
    "A Sweeper Machine and Ride on Sweeper Machine is a highly sophisticated cleaning machine designed for sweeping large industrial as well as commercial areas.",
  keywords:
    "dynaclean sweeper Machine, Sweeper Machine, Ride on Sweeper Machine, battery operated sweeper, industrial sweeper machine, floor sweeper, floor cleaning machine, Manual Sweeper, Electric Sweeper, warehouse cleaning machine",
  openGraph: {
    type: "website",
    title: "Sweeper Machine",
    description:
      "A Sweeper Machine and Ride on Sweeper Machine is a highly sophisticated cleaning machine designed for sweeping large industrial as well as commercial areas.",
    url: "https://dynacleanindustries.com/products/sweeper",
    images: [
      {
        url: "https://dynacleanindustries.com/Product/Sweeper/DRS-180T/1.png",
        alt: "Sweeper Machine",
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
  const shortDescription = getShortDescription(data90T.description, 27);
  const shortDescription1 = getShortDescription(data180T.description, 27);
  const shortDescription2 = getShortDescription(data55.description, 27);
  const shortDescription3 = getShortDescription(datae55.description, 27);
  const shortDescription4 = getShortDescription(data250.description, 27);
  const cardData = {
    images: [
      "/Product/Sweeper/DRS-90T/1.png",
      "/Product/Sweeper/DRS-90T/2.png",
      "/Product/Sweeper/DRS-90T/3.png",
      "/Product/Sweeper/DRS-90T/4.png",
      "/Product/Sweeper/DRS-90T/5.png",
    ],
    url: "/products/sweeper/ride-on-sweeper-DRS90T",
    title: data90T.title,
    description: shortDescription,
  };

  const cardData1 = {
    images: [
      "/Product/Sweeper/DRS-180T/1.png",
      "/Product/Sweeper/DRS-180T/2.png",
      "/Product/Sweeper/DRS-180T/3.png",
      "/Product/Sweeper/DRS-180T/4.png",
    ],
    url: "/products/sweeper/ride-on-sweeper-DRS180T",
    title: data180T.title,
    description: shortDescription1,
  };

  const cardData2 = {
    images: [
      "/Product/Sweeper/DS2-55/1.png",
      "/Product/Sweeper/DS2-55/2.png",
      "/Product/Sweeper/DS2-55/3.png",
      "/Product/Sweeper/DS2-55/4.png",
    ],
    url: "/products/sweeper/manual-sweeper-DS255",
    title: data55.title,
    description: shortDescription2,
  };

  const cardData3 = {
    images: [
      "/Product/Sweeper/DSE-55/1.png",
      "/Product/Sweeper/DSE-55/2.png",
      "/Product/Sweeper/DSE-55/3.png",
      "/Product/Sweeper/DSE-55/4.png",
    ],
    url: "/products/sweeper/manual-sweeper-DSE55",
    title: datae55.title,
    description: shortDescription3,
  };
  const cardData4 = {
    images: ["/Product/Sweeper/DRS-250T/1.webp"],
    url: "/products/sweeper/ride-on-sweeper-DRS250T",
    title: data250.title,
    description: shortDescription4,
  };

  return (
    <main>
      <ResponsiveSection
        imagePath="/Product/Sweeper/Sweeper.png"
        imageSide="left" // or "right"
        title="Sweeper Machine"
        description="Dynaclean Industries Pvt. Ltd. manufactures and supplies high-performance sweeper machine every sweeper machine designed for effective dust and debris removal all industrial and commercial sectors. walk behind manual sweeper machine module DS255 , known for its lightweight and user-friendly operation, and the DSE55 Electric Sweeper, which provides best cleaning with minimal effort.

we provides the module DRS90T and DRS180T Ride on Sweeper Machine — both are battery-operated which is best for large areas . All our sweeper machine are manufactured with high-quality brushes that ensure efficient surface cleaning. Built for durability, easy handling, and strong performance, Dynaclean sweepers are ideal for cleaning roads, warehouses, factories, parking areas, and public spaces"
      />

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center m-4 md:mt-4 md:mb-20">
        <Card {...cardData} />
        <Card {...cardData1} />
        <Card {...cardData4} />
        <Card {...cardData2} />
        <Card {...cardData3} />
      </div>
    </main>
  );
};

export default Scrubber;
