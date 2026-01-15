import ResponsiveSection from "@/components/Banner/ResponsiveSection";
import Card from "@/components/common/CardComponent";
import data1000 from "@/data/Electric-Sweeper-Truck/DTMS-1000/data";
import data2000 from "@/data/Electric-Sweeper-Truck/DTMS-2000/data";
import data3000 from "@/data/Electric-Sweeper-Truck/DTMS-3000/data";
import data4000 from "@/data/Electric-Sweeper-Truck/DTMS-4000/data";
import data5000 from "@/data/Electric-Sweeper-Truck/DTMS-5000/data";
import data6000 from "@/data/Electric-Sweeper-Truck/DTMS-6000/data";
import data600 from "@/data/Electric-Sweeper-Truck/DRS-600DT/data";

export const metadata = {
  title: "Battery-Operated-Sweeper-truck | Dynaclean Industries",
  description:
    "The Electric Sweeper Truck is an advanced model that focuses on smart performance while ensuring sustainability and efficiency and it is fully battery operated sweeper truck.",
  keywords:
    "dynaclean Battery-Operated-Sweeper-truck, Battery Operated Sweeper truck, Sweeper Truck, Electric Sweeper Truck, Battery Sweeper Truck, Electric Road Sweeper Truck,Road Sweeper Truck,Truck Mounted Sweeper, Electric Street Sweeper Truck, Battery Operated Street Sweeper Truck, Road Sweeper Truck, Street Sweeper Truck",
  openGraph: {
    type: "website",
    title: "Battery-Operated-Sweeper-truck | Dynaclean Industries",
    description:
      "The Electric Sweeper Truck is an advanced model that focuses on smart performance while ensuring sustainability and efficiency and it is fully battery operated sweeper truck.",
    url: "https://dynacleanindustries.com/products/battery-operated-sweeper-truck",
    images: [
      {
        url: "https://dynacleanindustries.com/Product/Bettery-Operated-truck/DTMS-1000 Ev/1.png",
        alt: "Battery-Operated-Sweeper-truck",
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
  const shortDescription600 = getShortDescription(data600.description, 27);
  const cardData = {
    images: [
      "/Product/Bettery-Operated-truck/DTMS-1000 Ev/1.png",
      "/Product/Bettery-Operated-truck/DTMS-1000 Ev/2.png",
    ],
    url: "/products/battery-operated-sweeper-truck/DTMS-1000",
    title: data1000.title,
    description: shortDescription,
  };

  const cardData1 = {
    images: [
      "/Product/Bettery-Operated-truck/DTMS-2000 Ev/1.png",
      "/Product/Bettery-Operated-truck/DTMS-2000 Ev/2.png",
    ],
    url: "/products/battery-operated-sweeper-truck/DTMS-2000",
    title: data2000.title,
    description: shortDescription1,
  };

  const cardData2 = {
    images: ["/Product/Bettery-Operated-truck/DTMS-3000 Ev/1.jpg"],
    url: "/products/battery-operated-sweeper-truck/DTMS-3000",
    title: data3000.title,
    description: shortDescription2,
  };

  const cardData3 = {
    images: [
      "/Product/Bettery-Operated-truck/DTMS-4000 Ev/1.png",
      "/Product/Bettery-Operated-truck/DTMS-4000 Ev/2.png",
      "/Product/Bettery-Operated-truck/DTMS-4000 Ev/3.png",
      "/Product/Bettery-Operated-truck/DTMS-4000 Ev/4.png",
    ],
    url: "/products/battery-operated-sweeper-truck/DTMS-4000",
    title: data4000.title,
    description: shortDescription3,
  };
  const cardData4 = {
    images: [
      "/Product/Bettery-Operated-truck/DTMS-5000 Ev/1.png",
      "/Product/Bettery-Operated-truck/DTMS-5000 Ev/2.png",
      "/Product/Bettery-Operated-truck/DTMS-5000 Ev/3.png",
      "/Product/Bettery-Operated-truck/DTMS-5000 Ev/4.png",
    ],
    url: "/products/battery-operated-sweeper-truck/DTMS-5000",
    title: data5000.title,
    description: shortDescription4,
  };
  const cardData5 = {
    images: [
      "/Product/Bettery-Operated-truck/DTMS-6000 Ev/1.png",
      "/Product/Bettery-Operated-truck/DTMS-6000 Ev/2.png",
      "/Product/Bettery-Operated-truck/DTMS-6000 Ev/2.png",
      "/Product/Bettery-Operated-truck/DTMS-6000 Ev/3.png",
    ],
    url: "/products/battery-operated-sweeper-truck/DTMS-6000",
    title: data6000.title,
    description: shortDescription5,
  };

  const cardData6 = {
    images: [
      "/Product/Bettery-Operated-truck/600DT/4.png",
      "/Product/Bettery-Operated-truck/600DT/1.png",
      "/Product/Bettery-Operated-truck/600DT/2.png",
      "/Product/Bettery-Operated-truck/600DT/3.png",
    ],
    url: "/products/battery-operated-sweeper-truck/DRS-600DT",
    title: data600.title,
    description: shortDescription600,
  };

  return (
    <main>
      <ResponsiveSection
        imagePath="/Product/Bettery-Operated-truck/Bettery-Operated-truck.png" // public directory
        imageSide="left" // or "right"
        title="Electric Road Sweeper Truck"
        description="Experience a new level of cleanliness with our advanced cleaning machine, designed to make every surface spotless with minimal effort. Equipped with cutting-edge technology, it delivers powerful performance for a sparkling clean home or workspace, every time"
      />

      <div className=" grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center m-4 md:mt-4 md:mb-20">
        <Card {...cardData} />
        <Card {...cardData1} />
        <Card {...cardData2} />
        <Card {...cardData3} />
        <Card {...cardData4} />
        <Card {...cardData5} />
        <Card {...cardData6} />
      </div>
    </main>
  );
};

export default MuncipleDesalTruck;
