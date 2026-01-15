import ResponsiveSection from "@/components/Banner/ResponsiveSection";
import Card from "@/components/common/CardComponent";
import data15 from "@/data/Single-Disc-Scrubber/D-15P/data.json";
import data20 from "@/data/Single-Disc-Scrubber/D-20P/data.json";
import data25 from "@/data/Single-Disc-Scrubber/D-25P/data.json";
import data2 from "@/data/Single-Disc-Scrubber/DH-2P/data.json";

export const metadata = {
  title: "single Disc Scrubber | Dynaclean Industries",
  description:
    "The Dynaclean single Disc Scrubber is an industrial/commercial-grade heavy-duty that can clean, polish and maintain every type of floor surface.",
  keywords:
    "dynaclean single disc scrubber, single disc scrubber,electric scrubber , scrubber , floor scrubber,  scrubber, walk-behind scrubber , automatic scrubber , ride-on scrubber, auto scrubber, floor scrubber machine, floor cleaning machine",
  openGraph: {
    type: "website",
    title: "single Disc Scrubber | Dynaclean Industries",
    description:
      "The Dynaclean single Disc Scrubber is an industrial/commercial-grade heavy-duty that can clean, polish and maintain every type of floor surface.",
    url: "https://dynacleanindustries.com/products/Single-disc-scrubber/",
    images: [
      {
        url: "https://dynacleanindustries.com/Product/Single-Disc-Scrubber/D-15P/1.png",
        alt: "single Disc Scrubber",
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
  const shortDescription = getShortDescription(data15.description, 27);
  const shortDescription1 = getShortDescription(data20.description, 27);
  const shortDescription2 = getShortDescription(data25.description, 27);
  const shortDescription3 = getShortDescription(data2.description, 27);
  const cardData = {
    images: [
      "/Product/Single-Disc-Scrubber/D-15P/1.png",
      "/Product/Single-Disc-Scrubber/D-15P/2.png",
      "/Product/Single-Disc-Scrubber/D-15P/3.png",
      "/Product/Single-Disc-Scrubber/D-15P/4.png",
    ],
    url: "/products/Single-disc-scrubber/D-15P",
    title: data15.title,
    description: shortDescription,
  };

  const cardData1 = {
    images: [
      "/Product/Single-Disc-Scrubber/D-20P/1.png",
      "/Product/Single-Disc-Scrubber/D-20P/2.png",
      "/Product/Single-Disc-Scrubber/D-20P/3.png",
      "/Product/Single-Disc-Scrubber/D-20P/4.png",
    ],
    url: "/products/Single-disc-scrubber/D-20P",
    title: data20.title,
    description: shortDescription1,
  };

  const cardData2 = {
    images: [
      "/Product/Single-Disc-Scrubber/D-25P/1.png",
      "/Product/Single-Disc-Scrubber/D-25P/2.png",
      "/Product/Single-Disc-Scrubber/D-25P/3.png",
      "/Product/Single-Disc-Scrubber/D-25P/4.png",
    ],
    url: "/products/Single-disc-scrubber/D-25P",
    title: data25.title,
    description: shortDescription2,
  };
  const cardData3 = {
    images: ["/Product/Single-Disc-Scrubber/DH-2P/1.jpeg"],
    url: "/products/Single-disc-scrubber/DH-2P",
    title: data2.title,
    description: shortDescription3,
  };

  return (
    <main>
      <ResponsiveSection
        imagePath="/Product/Single-Disc-Scrubber/Single-Disc-Scrubber.png" // public directory
        imageSide="left" // or "right"
        title="Single Disc Scrubber"
        description="Experience a new level of cleanliness with our advanced cleaning machine, designed to make every surface spotless with minimal effort. Equipped with cutting-edge technology, it delivers powerful performance for a sparkling clean home or workspace, every time"
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
