"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import allProductsData from "@/data/allProducts.json";

export default function ProductPage({ params }) {
  const { id } = params;
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const { addToCart } = useCart();

  // Find product from allProductsData
  let product = null;
  let categoryName = "";

  for (const category of allProductsData.categories) {
    const foundProduct = category.products.find((p) => p.id === id);
    if (foundProduct) {
      product = foundProduct;
      categoryName = category.name;
      break;
    }
  }

  if (!product) {
    return (
      <main className="min-h-screen bg-gray-50 pt-32">
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
          <Link
            href="/shop"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Back to Shop
          </Link>
        </div>
      </main>
    );
  }

  const handleAddToCart = () => {
    const priceStr = product.price.replace(/[₹,]/g, "");
    const priceNum = parseInt(priceStr);
    
    for (let i = 0; i < quantity; i++) {
      addToCart({
        ...product,
        price: priceNum,
      });
    }
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-32">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4 text-sm text-gray-600">
        <Link href="/shop" className="text-red-600 hover:underline">
          Shop
        </Link>
        <span className="mx-2">/</span>
        <Link href="/shop" className="text-red-600 hover:underline">
          {categoryName}
        </Link>
        <span className="mx-2">/</span>
        <span>{product.name}</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image Gallery */}
          <div className="flex flex-col gap-4">
            {/* Main Image */}
            <div className="bg-white rounded-lg shadow-md p-8 flex items-center justify-center h-[500px]">
              <img
                src={product.images?.[selectedImage] || product.image}
                alt={product.name}
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.src = "/Product/placeholder.png";
                }}
              />
            </div>

            {/* Thumbnail Images */}
            {product.images && product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? "border-red-600"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = "/Product/placeholder.png";
                      }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            {/* Category Badge */}
            <div className="inline-block w-fit mb-4">
              <span className="bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold">
                {categoryName}
              </span>
            </div>

            {/* Product Name */}
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>

            {/* Description */}
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              {product.description}
            </p>

            {/* Price Section */}
            <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-lg p-6 mb-6">
              <p className="text-gray-600 text-sm mb-2">Price</p>
              <div className="text-5xl font-bold text-red-600 mb-2">
                {product.price}
              </div>
              <p className="text-gray-600 text-sm">
                Competitive pricing for professional-grade equipment
              </p>
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block text-gray-800 font-semibold mb-3">
                Quantity
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  −
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-16 text-center py-2 border-l border-r border-gray-300 outline-none"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 rounded-lg font-bold text-white text-lg transition-all duration-300 mb-4 ${
                addedToCart
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-red-600 hover:bg-red-700"
              }`}
            >
              {addedToCart ? "✓ Added to Cart" : "Add to Cart"}
            </button>

            {/* Continue Shopping Button */}
            <Link
              href="/shop"
              className="w-full py-3 rounded-lg font-bold text-gray-800 text-center border-2 border-gray-300 hover:border-red-600 hover:text-red-600 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>

        {/* Specifications Section */}
        {product.specifications && product.specifications.length > 0 && (
          <div className="mt-16 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Specifications</h2>
            <div className="grid grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                {product.specifications.slice(0, Math.ceil(product.specifications.length / 2)).map((spec, index) => (
                  <div key={index} className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <p className="text-gray-600 font-semibold">{spec.label}</p>
                    <p className="text-gray-800 font-bold text-lg">{spec.value}</p>
                  </div>
                ))}
              </div>
              
              {/* Right Column */}
              <div className="space-y-6">
                {product.specifications.slice(Math.ceil(product.specifications.length / 2)).map((spec, index) => (
                  <div key={index} className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <p className="text-gray-600 font-semibold">{spec.label}</p>
                    <p className="text-gray-800 font-bold text-lg">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-8">
              <button className="px-8 py-3 border-2 border-gray-800 text-gray-800 font-bold rounded-lg hover:bg-gray-800 hover:text-white transition-colors">
                ENQUIRE NOW
              </button>
              <button className="px-8 py-3 border-2 border-gray-800 text-gray-800 font-bold rounded-lg hover:bg-gray-800 hover:text-white transition-colors">
                DOWNLOAD CATALOGUE
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Related Products Section */}
      <section className="mt-20 bg-white py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">More Products in {categoryName}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {allProductsData.categories
              .find((c) => c.name === categoryName)
              ?.products.filter((p) => p.id !== id)
              .slice(0, 4)
              .map((relatedProduct) => (
                <Link key={relatedProduct.id} href={`/product/${relatedProduct.id}`}>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer h-full">
                    <div className="relative overflow-hidden bg-gray-100 h-48">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-800 line-clamp-2 group-hover:text-red-600">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-red-600 font-bold mt-2">{relatedProduct.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
