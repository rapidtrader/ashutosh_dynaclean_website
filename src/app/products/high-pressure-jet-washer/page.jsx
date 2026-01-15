import ResponsiveSection from "@/components/Banner/ResponsiveSection";
import Card from "@/components/common/CardComponent";
import data200 from "@/data/High-Pressure-jet-washer/DJ-200/data";
import dataB200 from "@/data/High-Pressure-jet-washer/DJB-200/data";
import data18 from "@/data/High-Pressure-jet-washer/DJE-18/data";
import data30 from "@/data/High-Pressure-jet-washer/DJE-30/data";

export const metadata = {
  title: "High-Pressure-Jet-Washer | Dynaclean Industries",
  description:
    "High-pressure jet washer is designed for professionals who require the highest quality of cleaning with no compromise on performance. It is ideal for cleaning railways and metro tracks, ensuring efficient removal of stubborn dirt and grease.",
  keywords:
    "dynaclean High-pressure jet washer, High-pressure jet washer, Jet Pressure Washer, Electric Jet Washer, Diesel Jet Washer, Battery Jet Washer, pressure washer, high-pressure cleaner, railway cleaning, metro track cleaning",
  openGraph: {
    type: "website",
    title: "High-pressure jet washer | Dynaclean Industries",
    description:
      "High-pressure jet washer is designed for professionals who require the highest quality of cleaning with no compromise on performance. It is ideal for cleaning railways and metro tracks, ensuring efficient removal of stubborn dirt and grease.",
    url: "https://dynacleanindustries.com/products/high-pressure-jet-washer",
    images: [
      {
        url: "https://dynacleanindustries.com/Product/Jet-washer/DJB-200/1.png",
        alt: "High-pressure jet washer",
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
  const shortDescription = getShortDescription(data200.description, 27);
  const shortDescription1 = getShortDescription(dataB200.description, 27);
  const shortDescription2 = getShortDescription(data18.description, 27);
  const shortDescription3 = getShortDescription(data30.description, 27);
  const cardData = {
    images: [
      "/Product/Jet-washer/DJ-200/1.png",
      "/Product/Jet-washer/DJ-200/2.png",
      "/Product/Jet-washer/DJ-200/3.png",
    ],
    url: "/products/high-pressure-jet-washer/diesal-DJ-200",
    title: data200.title,
    description: shortDescription,
  };

  const cardData1 = {
    images: [
      "/Product/Jet-washer/DJB-200/1.png",
      "/Product/Jet-washer/DJB-200/2.png",
      "/Product/Jet-washer/DJB-200/3.png",
      "/Product/Jet-washer/DJB-200/4.png",
    ],
    url: "/products/high-pressure-jet-washer/battery-DJB-200",
    title: dataB200.title,
    description: shortDescription1,
  };

  const cardData2 = {
    images: [
      "/Product/Jet-washer/DJE-18/1.png",
      "/Product/Jet-washer/DJE-18/2.png",
      "/Product/Jet-washer/DJE-18/3.png",
      "/Product/Jet-washer/DJE-18/4.png",
    ],
    url: "/products/high-pressure-jet-washer/electric-DJE-18",
    title: data18.title,
    description: shortDescription2,
  };

  const cardData3 = {
    images: [
      "/Product/Jet-washer/DJE-30/1.png",
      "/Product/Jet-washer/DJE-30/2.png",
      "/Product/Jet-washer/DJE-30/3.png",
      "/Product/Jet-washer/DJE-30/4.png",
    ],
    url: "/products/high-pressure-jet-washer/electric-DJE-30",
    title: data30.title,
    description: shortDescription3,
  };

  return (
    <main>
      <ResponsiveSection
        imagePath="/Product/Jet-washer/High-Pressure-Jet-Washer.png" // public directory
        imageSide="left" // or "right"
        title="High Pressure Jet Washer"
        description="Dynaclean Industries Pvt. Ltd. offers a wide of Jet Pressure Washers state for powerful and efficient high-pressure cleaning needs . Our products includes four models: DJE18 and DJE30, which are electric-powered and wire-based, and one diesel-operated model DJ200 and one DJB200 battery-operated.

Its best for wsh the railways and metro tracks .These machines are ideal for removing stubborn dirt and grease. Built with durable components and high-pressure pumps, Dynaclean Jet Washers ensure deep, reliable, and time-saving cleaning performance across multiple applications."
      />

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center m-4 md:mt-4 md:mb-20">
        <Card {...cardData} />
        <Card {...cardData1} />
        <Card {...cardData2} />
        <Card {...cardData3} />
      </div>
    </main>
  );
};

export default Scrubber;
