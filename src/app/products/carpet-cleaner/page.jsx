import ResponsiveSection from "@/components/Banner/ResponsiveSection";
import Card from "@/components/common/CardComponent";
import data from "@/data/carpet-cleaner/data";

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
      "/Product/carpet-cleaner/Carpet_cleaner_DSC-30(1).jpeg",
      "/Product/carpet-cleaner/Carpet_cleaner_DSC-30(2).jpeg",
      "/Product/carpet-cleaner/Carpet_cleaner_DSC-30(3).jpeg",
      "/Product/carpet-cleaner/Carpet_cleaner_DSC-30(4).jpeg",
      "/Product/carpet-cleaner/Carpet_cleaner_DSC-30(5).jpeg",
    ],
    url: "/products/carpet-cleaner/DSC-30",
    title: data.title,
    description: shortDescription,
  };

  return (
    <main>
      <ResponsiveSection
        imagePath="/Product/carpet-cleaner/Carpet_cleaner_DSC-30(1).jpeg" // public directory
        imageSide="left" // or "right"
        title="Carpet Cleaner DSC-30"
        description="Introducing the Dynaclean Carpet Injection Machine – a high-performance cleaning system designed to deliver professional-grade carpet care. Built with advanced injection-extraction technology, this machine provides powerful suction and deep cleaning that removes embedded dirt, dust, and stains from carpets, upholstery, and fabric surfaces."
      />

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center m-4 md:mt-4 md:mb-20">
        <Card {...cardData} />
      </div>
    </main>
  );
};

export default Scrubber;
