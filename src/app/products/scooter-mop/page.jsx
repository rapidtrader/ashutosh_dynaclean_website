import ResponsiveSection from "@/components/Banner/ResponsiveSection";
import Card from "@/components/common/CardComponent";
import data from "@/data/Scooter-Mop/data";

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
      "/Product/Scooter-mop/1.webp",
      "/Product/Scooter-mop/1.webp",
      "/Product/Scooter-mop/1.webp",
      "/Product/Scooter-mop/1.webp",
    ],
    url: "/products/scooter-mop/DMS-115P",
    title: data.title,
    description: shortDescription,
  };

  return (
    <main>
      <ResponsiveSection
        imagePath="/Product/Scooter-mop/1.webp" // public directory
        imageSide="left" // or "right"
        title="Scooter Mop"
        description="Experience a new level of cleanliness with our advanced cleaning machine, designed to make every surface spotless with minimal effort. Equipped with cutting-edge technology, it delivers powerful performance for a sparkling clean home or workspace, every time"
      />

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center m-4 md:mt-4 md:mb-20">
        <Card {...cardData} />
      </div>
    </main>
  );
};

export default Scrubber;
