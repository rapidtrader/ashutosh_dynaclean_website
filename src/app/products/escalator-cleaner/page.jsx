import ResponsiveSection from "@/components/Banner/ResponsiveSection";
import Card from "@/components/common/CardComponent";
import data from "@/data/Escalator-Cleaning/dsd/data";

const Scrubber = () => {
  const getShortDescription = (description, wordLimit) => {
    const words = description.split(" "); // Split the description into an array of words
    const shortDescription =
      words.slice(0, wordLimit).join(" ") +
      (words.length > wordLimit ? "..." : ""); // Join the first 'wordLimit' words and add "..." if there are more words
    return shortDescription;
  };
  const shortDescription = getShortDescription(data.description, 27);
  const cardData = {
    images: [
      "/Product/Escalator-cleaner/1.webp",
      "/Product/Escalator-cleaner/1.webp",
      "/Product/Escalator-cleaner/1.webp",
      "/Product/Escalator-cleaner/1.webp",
    ],
    url: "/products/escalator-cleaner/D-510ES",
    title: data.title,
    description: shortDescription,
  };

  return (
    <main>
      <ResponsiveSection
        imagePath="/Product/Escalator-cleaner/1.webp" // public directory
        imageSide="left" // or "right"
        title="Escalator Cleaner"
        description="Dynaclean Industries Pvt. Ltd. manufactures and supplies a special Escalator Cleaner Machined d-510es module manufactured to clean escalator steps quickly, safely, and effectively. This d-510es deeply removes dust and dirt from the grooves and surfaces of escalator steps without dismantling the unit.

its designed with high-speed Scrubeer brushes, strong suction power, the Dynaclean Escalator Cleaner ensures perfect cleaning for escalator steps. It is easy to operate, saves manual effort, and is ideal for use in malls, metro stations, airports, hospitals."
      />

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center m-4 md:mt-4 md:mb-20">
        <Card {...cardData} />
      </div>
    </main>
  );
};

export default Scrubber;
