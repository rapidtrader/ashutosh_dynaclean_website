import ResponsiveSection from "@/components/Banner/ResponsiveSection";
import Card from "@/components/common/CardComponent";
import databack from "@/data/vaccume-cleaner/back-pack/data";
import data15 from "@/data/vaccume-cleaner/dv-15/data";
import data30 from "@/data/vaccume-cleaner/dv-30/data";
import data60 from "@/data/vaccume-cleaner/dv-60/data";
import data80 from "@/data/vaccume-cleaner/dv-80/data";

export const metadata = {
  title: "Vacuum-Cleaner | Dynaclean Industries",
  description:
    "The Dynaclean Vacuum Cleaner is a highly efficient dry as well as wet & dry vacuum cleaner that is designed to take on the challenging cleaning issues that are encountered in commercial, industrial",
  keywords:
    "dynaclean vacuum cleaner, vacuum cleaner,  dry and wet vacuum cleaner, backpack vacuum cleaner,vacuum cleaner for home, vacuum cleaner for office, vacuum cleaner for industrial, vacuum cleaner for commercial, vacuum cleaner for hotels, vacuum cleaner for malls, vacuum cleaner for factories, vacuum cleaner for workshops, vacuum cleaner for warehouses, vaccume cleaner price",
  openGraph: {
    type: "website",
    title: "Vacuum-Cleaner | Dynaclean Industries",
    description:
      "The Dynaclean Vacuum Cleaner is a highly efficient dry as well as wet & dry vacuum cleaner that is designed to take on the challenging cleaning issues that are encountered in commercial, industrial",
    url: "https://dynacleanindustries.com/products/vacuum-cleaner",
    images: [
      {
        url: "https://dynacleanindustries.com/Product/Vacuum-Cleaner/Vaccume-Cleaner.png",
        alt: "Vacuum-Cleanerr",
      },
    ],
  },
};

const MuncipleDesalTruck = () => {
  const getShortDescription = (description, wordLimit) => {
    const words = description.split(" "); // Split the description into an array of words
    const shortDescription =
      words.slice(0, wordLimit).join(" ") +
      (words.length > wordLimit ? "..." : ""); // Join the first 'wordLimit' words and add "..." if there are more words
    return shortDescription;
  };
  const shortDescription = getShortDescription(databack.description, 27);
  const shortDescription1 = getShortDescription(data15.description, 27);
  const shortDescription2 = getShortDescription(data30.description, 27);
  const shortDescription3 = getShortDescription(data60.description, 27);
  const shortDescription4 = getShortDescription(data80.description, 27);
  const cardData = {
    images: [
      "/Product/Vaccume-Cleaner/Back-Pack Vacuum Cleaner/1.png",
      "/Product/Vaccume-Cleaner/Back-Pack Vacuum Cleaner/2.png",
      "/Product/Vaccume-Cleaner/Back-Pack Vacuum Cleaner/3.png",
    ],
    url: "/products/vacuum-cleaner/back-pack-DBP6",
    title: databack.title,
    description: shortDescription,
  };

  const cardData1 = {
    images: [
      "/Product/Vaccume-Cleaner/DV-15/1.png",
      "/Product/Vaccume-Cleaner/DV-15/2.png",
      "/Product/Vaccume-Cleaner/DV-15/3.png",
      "/Product/Vaccume-Cleaner/DV-15/5.png",
    ],
    url: "/products/vacuum-cleaner/dv-15",
    title: data15.title,
    description: shortDescription1,
  };

  const cardData2 = {
    images: [
      "/Product/Vaccume-Cleaner/DV-30/1.png",
      "/Product/Vaccume-Cleaner/DV-30/3.png",
      "/Product/Vaccume-Cleaner/DV-30/5.png",
      "/Product/Vaccume-Cleaner/DV-30/6.png",
    ],
    url: "/products/vacuum-cleaner/dv-30",
    title: data30.title,
    description: shortDescription2,
  };

  const cardData3 = {
    images: [
      "/Product/Vaccume-Cleaner/DV-60/1.jpg",
      "/Product/Vaccume-Cleaner/DV-60/3.png",
      "/Product/Vaccume-Cleaner/DV-60/5.png",
      "/Product/Vaccume-Cleaner/DV-60/6.png",
    ],
    url: "/products/vacuum-cleaner/dv-60",
    title: data60.title,
    description: shortDescription3,
  };
  const cardData4 = {
    images: [
      "/Product/Vaccume-Cleaner/DV-80/1.jpg",
      "/Product/Vaccume-Cleaner/DV-80/3.png",
      "/Product/Vaccume-Cleaner/DV-80/5.png",
      "/Product/Vaccume-Cleaner/DV-80/6.png",
    ],
    url: "/products/vacuum-cleaner/dv-80",
    title: data80.title,
    description: shortDescription4,
  };

  return (
    <main>
      <ResponsiveSection
        imagePath="/Product/Vaccume-Cleaner/Vaccume-Cleaner.png" // public directory
        imageSide="left" // or "right"
        title="Vacuum Cleaner"
        description="Dynaclean Industries manufacture and supply a best quality of dry and wet vacuum cleaners designed for both commercial and industrial cleaning requirements. Our products lineup includes four powerful models: DV15, DV30, DV60, and DV80, each built with high suction performance, durability, and easy to use.

each vacuum cleaners perfect both dry dust and wet waste, making them ideal for homes, offices, malls, hotels, factories, workshops, and warehouses. With strong motors, durable tanks, and efficient filtration systems, Dynaclean vacuum cleaners deliver deep, hassle-free cleaning with long-lasting reliability."
      />

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center m-4 md:mt-4 md:mb-20">
        <Card {...cardData} />
        <Card {...cardData1} />
        <Card {...cardData2} />
        <Card {...cardData3} />
        <Card {...cardData4} />
      </div>
    </main>
  );
};

export default MuncipleDesalTruck;
