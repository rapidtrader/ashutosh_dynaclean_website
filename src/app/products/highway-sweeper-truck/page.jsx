import ResponsiveSection from "@/components/Banner/ResponsiveSection";
import Card from "@/components/common/CardComponent";

export const metadata = {
  title: "Highway Sweeper Truck DTMS-10000 | Dynaclean Industries",
  description:
    "Discover Dynaclean's DTMS-10000 Highway Sweeper Truck, a heavy-duty road sweeper designed for highways, municipal roads, industrial zones & city cleaning",
  keywords:
    "Highway Sweeper Truck, DTMS-10000, Dynaclean, Road Sweeper, Diesel Sweeper Truck, Highway Cleaning, Municipal Sweeper",
  openGraph: {
    type: "website",
    title: "Highway Sweeper Truck DTMS-10000 | Dynaclean Industries",
    description:
      "Discover Dynaclean's DTMS-10000 Highway Sweeper Truck, a heavy-duty road sweeper designed for highways, municipal roads, industrial zones & city cleaning",
    url: "https://dynacleanindustries.com/products/highway-sweeper-truck",
    images: [
      {
        url: "https://dynacleanindustries.com/Product/HIGHWAY SWEEPER TRUCK-DTMS-10000/DTMS-10000 (1).png",
        alt: "Highway Sweeper Truck DTMS-10000",
      },
    ],
  },
};

const HighwaySweeperTruck = () => {
  const cardData = {
    images: [
      "/Product/HIGHWAY SWEEPER TRUCK-DTMS-10000/DTMS-10000 (1).png",
      "/Product/HIGHWAY SWEEPER TRUCK-DTMS-10000/DTMS-10000 (2).png",
    ],
    url: "/products/highway-sweeper-truck/DTMS-10000",
    title: "Highway Sweeper Truck DTMS-10000",
    description: "High-performance, heavy-duty road cleaning machine designed for large-scale sweeping and sanitation operations.",
  };

  return (
    <main>
      <ResponsiveSection
        imagePath="/Product/HIGHWAY SWEEPER TRUCK-DTMS-10000/DTMS-10000 (1).png"
        imageSide="left"
        title="Highway Sweeper Truck DTMS-10000"
        description="The Dynaclean DTMS-10000 Sweeper Truck is a high-performance, heavy-duty road cleaning machine designed for large-scale sweeping and sanitation operations. Built to handle demanding cleaning requirements, this Highway Sweeper Truck is ideal for highways, municipal roads, industrial zones, airports, construction sites, urban roads, and other large outdoor areas.

The DTMS-10000 combines powerful sweeping performance, high-capacity dust collection, efficient suction, and controlled water spraying to effectively remove dust, dirt, leaves, gravel, plastic waste, and other road debris. Its advanced sweeping and suction system helps deliver consistent cleaning performance while reducing airborne dust during operation.

Designed for demanding Indian road and weather conditions, this Road Sweeper Truck offers reliable solutions for municipalities, infrastructure companies, industrial facilities, airports, smart city projects, and highway maintenance operations. Its robust construction, spacious operator cabin, user-friendly controls, and high-capacity waste collection system make it suitable for extended cleaning operations."
      />

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center m-4 md:mt-4 md:mb-20">
        <Card {...cardData} />
      </div>
    </main>
  );
};

export default HighwaySweeperTruck;
