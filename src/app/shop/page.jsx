"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import allProductsData from "@/data/allProducts.json";

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("single-disc-scrubber");
  const [searchQuery, setSearchQuery] = useState("");
  const [addedProducts, setAddedProducts] = useState(new Set());
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { addToCart } = useCart();

  // Use fallback data from JSON file
  useEffect(() => {
    const fallbackProducts = [];
    allProductsData.categories.forEach((category) => {
      category.products.forEach((product) => {
        fallbackProducts.push({
          id: product.id,
          name: product.name,
          price: parseInt(product.price.replace(/[₹,]/g, "")),
          last_negotiation_price: parseInt(product.price.replace(/[₹,]/g, "")),
          image: product.image,
          image_path: product.image,
          images: product.images,
          description: product.description,
          category: category.name,
          link: product.link,
        });
      });
    });
    setProducts(fallbackProducts);
  }, []);

  // Get unique categories from products - only show these 3
  const categories = [
    ...new Set(products.map((p) => p.category?.toLowerCase().replace(/\s+/g, "-"))),
  ].filter((cat) => cat === "single-disc-scrubber" || cat === "high-pressure-jet-washer" || cat === "vacuum-cleaner");

  // Set default category if not in filtered list
  useEffect(() => {
    if (categories.length > 0 && !categories.includes(selectedCategory)) {
      setSelectedCategory(categories[0]);
    }
  }, [categories, selectedCategory]);

  const filteredProducts = products.filter((product) => {
    const productName = product.name || product.product_name || "";
    const productCategory = product.category?.toLowerCase().replace(/\s+/g, "-") || "";
    
    const matchesCategory = productCategory === selectedCategory;
    const matchesSearch = productName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedProducts((prev) => new Set(prev).add(product.id));
    setTimeout(() => {
      setAddedProducts((prev) => {
        const newSet = new Set(prev);
        newSet.delete(product.id);
        return newSet;
      });
    }, 2000);
  };

  const getCategoryName = (cat) => {
    return cat
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-32">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Product Store</h1>
          <p className="text-lg md:text-xl opacity-90">
            Explore our complete range of professional cleaning equipment
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border-2 border-red-600 focus:outline-none focus:border-red-700"
            />
            <svg
              className="absolute right-4 top-3.5 h-5 w-5 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Categories</h2>
              <div className="space-y-3">
                {loading ? (
                  <div className="text-gray-600 text-sm">Loading categories...</div>
                ) : (
                  <>
                    {categories.map((category) => {
                      const categoryName = getCategoryName(category);
                      const categoryCount = products.filter(
                        (p) => {
                          const cat = p.category?.toLowerCase().replace(/\s+/g, "-") || "";
                          return cat === category;
                        }
                      ).length;

                      return (
                        <button
                          key={category}
                          onClick={() => {
                            setSelectedCategory(category);
                            setSearchQuery("");
                          }}
                          className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                            selectedCategory === category
                              ? "bg-red-600 text-white font-semibold"
                              : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                          }`}
                        >
                          <span className="flex items-center justify-between">
                            <span>{categoryName}</span>
                            <span className="text-sm opacity-75">
                              ({categoryCount})
                            </span>
                          </span>
                        </button>
                      );
                    })}
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {loading ? (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
                <p className="mt-4 text-gray-600">Loading products...</p>
              </div>
            ) : (
              <>
                {/* Category Header */}
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    {getCategoryName(selectedCategory)}
                  </h2>
                  <p className="text-gray-600">
                    Showing {filteredProducts.length} product
                    {filteredProducts.length !== 1 ? "s" : ""}
                  </p>
                </div>

                {/* Products Grid */}
                {filteredProducts && filteredProducts.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                      <div key={product.id}>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col group">
                          {/* Image Container */}
                          <div className="relative overflow-hidden bg-gray-100 h-64">
                            <img
                              src={product.images?.[0] || product.image_path || "/Product/placeholder.png"}
                              alt={product.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              onError={(e) => {
                                e.target.src = "/Product/placeholder.png";
                              }}
                            />
                          </div>

                          {/* Product Info */}
                          <div className="p-4 flex flex-col flex-grow">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-red-600 transition-colors">
                              {product.name || product.product_name || "Product"}
                            </h3>
                            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                              {product.description || "High-quality cleaning equipment"}
                            </p>

                            {/* Price and Add to Cart */}
                            <div className="mt-auto">
                              <div className="flex items-center justify-between mb-4">
                                <div className="text-3xl font-bold text-red-600">
                                  ₹{product.price ? product.price.toLocaleString() : (product.last_negotiation_price ? product.last_negotiation_price.toLocaleString() : "Contact")}
                                </div>
                                <button
                                  onClick={() => handleAddToCart(product)}
                                  className={`px-3 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                                    addedProducts.has(product.id)
                                      ? "bg-green-600 text-white"
                                      : "bg-red-600 text-white hover:bg-red-700"
                                  }`}
                                >
                                  {addedProducts.has(product.id) ? "✓ Added" : "Add"}
                                </button>
                              </div>

                              {/* View Details Button - Links to product page */}
                              <Link href={`/product/${product.id}`} className="block">
                                <button className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900 transition-colors font-semibold">
                                  View Details
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="mt-4 text-gray-600 text-lg">
                      No products found matching your search
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Dynaclean?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-block bg-red-100 p-4 rounded-full mb-4">
                <svg
                  className="h-8 w-8 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Quality Assured</h4>
              <p className="text-gray-600">
                All products are manufactured to international standards with rigorous quality control
              </p>
            </div>
            <div className="text-center">
              <div className="inline-block bg-red-100 p-4 rounded-full mb-4">
                <svg
                  className="h-8 w-8 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Expert Support</h4>
              <p className="text-gray-600">
                Our team provides comprehensive support and after-sales service for all products
              </p>
            </div>
            <div className="text-center">
              <div className="inline-block bg-red-100 p-4 rounded-full mb-4">
                <svg
                  className="h-8 w-8 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">High Performance</h4>
              <p className="text-gray-600">
                Cutting-edge technology designed for maximum efficiency and durability
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-red-600 to-red-700 rounded-lg shadow-md p-8 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Need Help Finding the Right Product?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Contact our sales team for personalized recommendations and custom quotes
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </Link>
            <a
              href="tel:+91-7982456944"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
