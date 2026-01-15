import ResponsiveSection from "@/components/Banner/ResponsiveSection";
import ProductsSection from "@/components/Products/ourProducts";

const Products = () => {
  return (
    <main>
      <ResponsiveSection
        imagePath="/Product/Products.webp" // public directory
        imageSide="left" // or "right"
        title="Our Products"
        description="Dynaclean supplies high-quality cleaning equipment for use in commercial, industrial and municipal. Designed for high performance and user-friendliness, our products include  electric and diesel municipal sweeping trucks, floor sweepers, ride-on sweepers, and scrubber driers (both walk-behind and ride-on models).
We also provide escalator cleaners that effectively and safely clean escalator surfaces, jet washers for high-pressure cleaning, and strong industrial vacuum cleaners for both dry and wet applications. We are providing high quality scooter mop which cleans large area effeciently and steam cleaner for cleans the mirrors, counters, washroom accessories like showers, taps, etc.
 Dynaclean is committed to delivering reliable solutions that help maintain cleanliness and hygiene across India."
      />
      <ProductsSection />
    </main>
  );
};

export default Products;
