import dynamic from "next/dynamic";

const Banner = dynamic(() => import("../components/Home/Banner"));
const Introduction = dynamic(() => import("../components/Home/Introduction"));
const ProductsSection = dynamic(() =>
  import("../components/Home/ProductsSection")
);
const WhyChooseUs = dynamic(() => import("../components/Home/WhyChooseUs"));
const ApplicationSegments = dynamic(() =>
  import("../components/Home/ApplicationSegments")
);
const OurServices = dynamic(() => import("../components/Home/OurServices"));
const NewsSection = dynamic(() => import("../components/Home/NewsPart"));
const CustomerFeedback = dynamic(() =>
  import("../components/Home/CustomerFeedback")
);

export default function Home() {
  const imageUrls = [
    "/Home/Banner/1.webp",
    "/Home/Banner/2.webp",
    "/Home/Banner/3N.webp",
    "/Home/Banner/4.webp",
  ];

  return (
    <main>
      <Banner numberOfSlides={4} urls={imageUrls} />
      <Introduction />
      <ProductsSection />
      <WhyChooseUs />
      <ApplicationSegments />
      <OurServices />
      <NewsSection />
      <CustomerFeedback />
    </main>
  );
}
