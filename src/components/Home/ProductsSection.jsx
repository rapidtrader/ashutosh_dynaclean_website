import React from "react";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "Single Disc Scrubber",
    image: "/Home/Products/Gall/products-1.webp",
    link: "/products/Single-disc-scrubber",
  },
  {
    name: "Walk Behind Sweeper",
    image: "/Home/Products/Gall/products-2.webp",
    link: "/products/sweeper/manual-sweeper-DSE55",
  },
  {
    name: "Ride On Sweeper",
    image: "/Home/Products/Gall/product-3.webp",
    link: "/products/sweeper/ride-on-sweeper-DRS90T",
  },
  {
    name: "Auto Scrubber Drier",
    image: "/Home/Products/Gall/products-4.webp",
    link: "/products/scrubber-drier/DB-6070T",
  },
  {
    name: "Ride On Scrubber Drier",
    image: "/Home/Products/Gall/products-5.webp",
    link: "/products/scrubber-drier/DRO-100P",
  },
  {
    name: "Scooter Mop",
    image: "/Home/Products/Gall/products-6.webp",
    link: "products/scooter-mop/DMS-115P",
  },
];

// 💡 Reusable card component
const ProductCard = ({ product }) => (
  <div className="group overflow-hidden rounded shadow-md hover:shadow-lg transition-shadow duration-300">
    <Link href={product.link}>
      <div className="overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={300}
          className="w-full h-auto object-cover transform transition duration-300 group-hover:brightness-110"
          loading="lazy"
          placeholder="blur"
          blurDataURL="/placeholder.webp" // Replace with real low-quality preview or remove if not available
        />
      </div>
      <div className="text-center py-4">
        <span className="block text-lg font-medium text-black">
          {product.name}
        </span>
      </div>
    </Link>
  </div>
);

const ProductsSection = () => {
  return (
    <section id="work" className="pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl">Our Products</h2>
          <div className="mt-4 w-24 mx-auto border-t-2 border-red-700"></div>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
