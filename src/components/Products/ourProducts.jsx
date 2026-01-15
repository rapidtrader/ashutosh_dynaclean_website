import React from "react";

const products = [
  {
    name: "Scrubber Drier",
    image: "/Product/Auto-Scrubber-Drier/DB-6070T/main.webp",
    link: "/products/scrubber-drier",
  },
  {
    name: "Escalator Cleaner",
    image: "/Product/Escalator-cleaner/Escalator-Cleaner.png",
    link: "/products/escalator-cleaner/D-510ES",
  },
  {
    name: "Sweeper Machine",
    image: "/Product/Sweeper/Sweeper.png",
    link: "/products/sweeper",
  },
  {
    name: "High Pressure Jet Washer ",
    image: "/Product/Jet-washer/High-Pressure-Jet-Washer.png",
    link: "/products/high-pressure-jet-washer",
  },
  {
    name: "Diesel Road Sweeper Truck",
    image: "/Product/Munciple-Deisal-sweeper-Truck/DTMS-1000/2.png",
    link: "/products/municipal-diesel-sweeper-truck",
  },
  {
    name: "Electric Road Sweeper Truck",
    image: "/Product/Bettery-Operated-truck/Bettery-Operated-truck.png",
    link: "/products/battery-operated-sweeper-truck",
  },
  {
    name: "Vacuum Cleaner",
    image: "/Product/Vaccume-Cleaner/Vaccume-Cleaner.png",
    link: "/products/vacuum-cleaner",
  },
  {
    name: "Single Disc Scrubber",
    image: "/Product/Single-Disc-Scrubber/Single-Disc-Scrubber.png",
    link: "/products/Single-disc-scrubber",
  },
  {
    name: "Scooter Mop",
    image: "/Product/Scooter-mop/Scooter-Mop.png",
    link: "/products/scooter-mop/DMS-115P",
  },
  {
    name: "Steam Cleaner",
    image: "/Product/steam-cleaner/Steam-Cleaner.png",
    link: "/products/steam-cleaner/D-Steam2",
  },
  {
    name: "Hand Scrubber",
    image: "/Product/hand-scrubber/hand-scrubber.jpeg",
    link: "/products/hand-scrubber/HD-15",
  },
  {
    name: "CarpetCleaner",
    image: "/Product/carpet-cleaner/carpet cleaner.jpeg",
    link: "/products/carpet-cleaner/DSC-30",
  },
];

const ProductsSection = () => {
  return (
    <section id="work" className="pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl  ">Smart Machines for Smarter Cleaning</h2>
          <div className="mt-4 w-24 mx-auto border-t-2 border-red-700"></div>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <a href={product.link}>
                <div className="overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full  object-cover transform transition duration-300 group-hover:brightness-110"
                  />
                </div>
                <div className="  text-center py-4">
                  <span className="block text-lg font-medium text-black">
                    {product.name}
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
