import ResponsiveSection from "@/components/Banner/ResponsiveSection";
import Card from "@/components/common/CardComponent";
import data from "@/data/hand-scrubber/data";

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
      "/Product/hand-scrubber/hand-scrubber.jpeg",
      "/Product/hand-scrubber/1.jpeg",
      "/Product/hand-scrubber/2.jpeg",
      "/Product/hand-scrubber/3.jpeg",
    ],
    url: "/products/hand-scrubber/HD-15",
    title: data.title,
    description: shortDescription,
  };

  return (
    <main>
      <ResponsiveSection
        imagePath="/Product/hand-scrubber/hand-scrubber.jpeg" // public directory
        imageSide="left" // or "right"
        title="Hand Scrubber Polisher HD-15P"
        description="The Dynaclean HD-15P is a powerful and portable battery-operated hand scrubber designed for efficient cleaning across multiple surfaces. Its ergonomic dual-handle design and 350 RPM brush speed ensure deep, uniform cleaning on staircases, furniture, and hard floors. With a fast-charging lithium battery, this compact scrubber offers up to 30 minutes of continuous cleaning, making it ideal for both residential and industrial use. The HD-15P delivers unmatched performance, durability, and convenience — the ultimate solution for effortless cleaning anytime, anywhere."
      />

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center m-4 md:mt-4 md:mb-20">
        <Card {...cardData} />
      </div>
    </main>
  );
};

export default Scrubber;
