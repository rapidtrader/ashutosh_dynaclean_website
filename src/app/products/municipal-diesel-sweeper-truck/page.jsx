import ResponsiveSection from "@/components/Banner/ResponsiveSection";
import Card from "@/components/common/CardComponent";
import data1000 from "@/data/Municipal-Diesel-Sweeper-Truck/DTMS-1000/data";
import data2000 from "@/data/Municipal-Diesel-Sweeper-Truck/DTMS-2000/data";
import data3000 from "@/data/Municipal-Diesel-Sweeper-Truck/DTMS-3000/data";
import data4000 from "@/data/Municipal-Diesel-Sweeper-Truck/DTMS-4000/data";
import data5000 from "@/data/Municipal-Diesel-Sweeper-Truck/DTMS-5000/data";
import data6000 from "@/data/Municipal-Diesel-Sweeper-Truck/DTMS-6000/data";

export const metadata = {
  title: "Munciple-Diesel-Sweeper-Truck | Dynaclean Industries",
  description:
    "The Municipal Sweeper Truck is a diesel-powered, high-efficiency road Road Sweeper Truck ideal for urban roads, public spaces, Airports, Railways and even industrial and Commercial area. ",
  keywords:
    "Dynaclean Municipal Sweeper Truck, Municipal Sweeper Truck, Diesel Sweeper Truck, Road Sweeper Truck, Sweeper Truck, Industrial Sweeper Truck, Truck Mounted Sweeper, Truck Mounted Sweeper Truck, Munciple-Deisal-sweeper-Truck",
  openGraph: {
    type: "website",
    title: "Munciple-Diesel-Sweeper-Truck | Dynaclean Industries",
    description:
      "The Municipal Sweeper Truck is a diesel-powered, high-efficiency road Road Sweeper Truck ideal for urban roads, public spaces, Airports, Railways and even industrial and Commercial area. ",
    url: "https://dynacleanindustries.com/products/municipal-diesel-sweeper-truck",
    images: [
      {
        url: "https://dynacleanindustries.com/Product/Munciple-Deisal-sweeper-Truck/DTMS-1000/1.png",
        alt: "Munciple-Diesel-Sweeper-Truck",
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
  const shortDescription = getShortDescription(data1000.description, 27);
  const shortDescription1 = getShortDescription(data2000.description, 27);
  const shortDescription2 = getShortDescription(data3000.description, 27);
  const shortDescription3 = getShortDescription(data4000.description, 27);
  const shortDescription4 = getShortDescription(data5000.description, 27);
  const shortDescription5 = getShortDescription(data6000.description, 27);
  const cardData = {
    images: [
      "/Product/Munciple-Deisal-sweeper-Truck/DTMS-1000/2.png",
      "/Product/Munciple-Deisal-sweeper-Truck/DTMS-1000/1.png",
      "/Product/Munciple-Deisal-sweeper-Truck/DTMS-1000/3.png",
    ],
    url: "/products/municipal-diesel-sweeper-truck/DTMS-1000",
    title: data1000.title,
    description: shortDescription,
  };

  const cardData1 = {
    images: [
      "/Product/Munciple-Deisal-sweeper-Truck/DTMS-2000/1.png",
      "/Product/Munciple-Deisal-sweeper-Truck/DTMS-1000/1.png",
      "/Product/Munciple-Deisal-sweeper-Truck/DTMS-2000/2.png",
    ],
    url: "/products/municipal-diesel-sweeper-truck/DTMS-2000",
    title: data2000.title,
    description: shortDescription1,
  };

  const cardData2 = {
    images: [
      "/Product/Munciple-Deisal-sweeper-Truck/DTMS-3000/2.png",
      "/Product/Munciple-Deisal-sweeper-Truck/DTMS-3000/1.png",
      "/Product/Munciple-Deisal-sweeper-Truck/DTMS-1000/1.png",
    ],
    url: "/products/municipal-diesel-sweeper-truck/DTMS-3000",
    title: data3000.title,
    description: shortDescription2,
  };

  const cardData3 = {
    images: [
      "/Product/Munciple-Deisal-sweeper-Truck/DTMS-4000/2.png",
      "/Product/Munciple-Deisal-sweeper-Truck/DTMS-1000/1.png",
      "/Product/Munciple-Deisal-sweeper-Truck/DTMS-4000/1.png",
    ],
    url: "/products/municipal-diesel-sweeper-truck/DTMS-4000",
    title: data4000.title,
    description: shortDescription3,
  };
  const cardData4 = {
    images: [
      "/Product/Munciple-Deisal-sweeper-Truck/DTMS-5000/1.png",
      "/Product/Munciple-Deisal-sweeper-Truck/DTMS-1000/1.png",
      "/Product/Munciple-Deisal-sweeper-Truck/DTMS-5000/2.png",
    ],
    url: "/products/municipal-diesel-sweeper-truck/DTMS-5000",
    title: data5000.title,
    description: shortDescription4,
  };
  const cardData5 = {
    images: [
      "/Product/Munciple-Deisal-sweeper-Truck/DTMS-6000/1.png",
      "/Product/Munciple-Deisal-sweeper-Truck/DTMS-1000/1.png",
      "/Product/Munciple-Deisal-sweeper-Truck/DTMS-6000/2.png",
    ],
    url: "/products/municipal-diesel-sweeper-truck/DTMS-6000",
    title: data6000.title,
    description: shortDescription5,
  };

  return (
    <main>
      <ResponsiveSection
        imagePath="/Product/Munciple-Deisal-sweeper-Truck/DTMS-1000/2.png" // public directory
        imageSide="left" // or "right"
        title="Diesel Road Sweeper Truck"
        description="The Diesel Road Sweeper Truck manufactured by Dynaclean Industries is a powerful and reliable product specifically designed for large-scale roads as well as street cleaning. It is equipped with the latest sweeping technology and a durable engine that runs on diesel, this offers the best performance for municipalities roads, highways, industrial sites or commercial areas. The strong suction and sweeping mechanism assures thorough elimination of debris, dust and waste, keeping roads safe and clean, while reducing environmental pollutants.

Constructed to be durable and efficient The sweeper truck is perfect for long-term use and applications that require heavy-duty. With Dynaclean's experience in cutting-edge cleaning technologies and technology, this Diesel Road Sweeper Truck guarantees high efficiency, low maintenance and a long-lasting performance. It's the best option for companies that require professional road maintenance on a huge scale."
      />

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center m-4 md:mt-4 md:mb-20">
        <Card {...cardData} />
        <Card {...cardData1} />
        <Card {...cardData2} />
        <Card {...cardData3} />
        <Card {...cardData4} />
        <Card {...cardData5} />
      </div>
    </main>
  );
};

export default MuncipleDesalTruck;
