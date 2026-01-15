"use client";
import { useState, useEffect, useRef } from "react";

const refundSections = [
  {
    category: "Cancellation Policy",
    content: `Last updated on 27-12-2025 11:01:55
DYNACLEAN INDUSTRIES PRIVATE LIMITED believes in helping its customers as far as possible, and has therefore a liberal cancellation policy. 

Cancellations will be considered only if the request is made immediately after placing the order. However, the cancellation request may not be entertained if the orders have been communicated to the vendors/merchants and they have initiated the process of shipping them.`,
  },
  {
    category: "1. Perishable Items",
    content: `DYNACLEAN INDUSTRIES PRIVATE LIMITED does not accept cancellation requests for perishable items like flowers, eatables etc. However, refund/replacement can be made if the customer establishes that the quality of product delivered is not good.`,
  },
  {
    category: "2. Damaged or Defective Items",
    content: `In case of receipt of damaged or defective items please report the same to our Customer Service team. The request will, however, be entertained once the merchant has checked and determined the same at his own end. 

This should be reported within the same day of receipt of the products.`,
  },
  {
    category: "3. Product Expectations",
    content: `In case you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within the same day of receiving the product. The Customer Service Team after looking into your complaint will take an appropriate decision.`,
  },
  {
    category: "4. Warranty & Refunds",
    content: `In case of complaints regarding products that come with a warranty from manufacturers, please refer the issue to them. 

In case of any Refunds approved by the DYNACLEAN INDUSTRIES PRIVATE LIMITED, it’ll take 6-8 days for the refund to be processed to the end customer.`,
  },
];

// Sidebar icon
const BarsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
  </svg>
);

export default function RefundPolicyPage() {
  const [activeCategory, setActiveCategory] = useState(refundSections[0].category);
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [isMobileView, setIsMobileView] = useState(false);

  const sectionRefs = useRef({});

  useEffect(() => {
    const checkMobile = () => {
      setIsMobileView(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    if (isMobileView) setSidebarVisible(false);

    const section = sectionRefs.current[category];
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex w-full max-w-full min-h-screen bg-gray-50 font-sans mb-28">
      {/* Sidebar */}
      <aside
        className={`flex flex-col flex-shrink-0 transition-all duration-300 ease-in-out relative bg-white
    ${sidebarVisible ? "w-64" : "w-12"}
    h-screen overflow-hidden border-r border-gray-200`}
      >
        <button
          onClick={() => setSidebarVisible(!sidebarVisible)}
          className="text-gray-700 cursor-pointer p-3 m-4 rounded-full bg-white shadow-lg hover:bg-gray-100 transition self-start"
          aria-label="Toggle sidebar"
        >
          <BarsIcon />
        </button>

        <div
          className={`flex flex-col gap-3 overflow-y-auto pr-2
      ${sidebarVisible ? "opacity-100" : "opacity-0 pointer-events-none"}
      flex-grow`}
        >
          <h2 className="text-xl font-bold mb-4 text-center text-gray-900 uppercase tracking-wider">Policy Navigation</h2>
          <nav className="flex flex-col gap-3">
            {refundSections.map((section) => (
              <button
                key={section.category}
                onClick={() => handleCategoryClick(section.category)}
                className={`text-sm px-4 py-3 rounded-lg transition text-left
            ${activeCategory === section.category
                    ? "bg-blue-600 text-white shadow-md"
                    : "hover:bg-gray-100 text-gray-700"
                  }
            cursor-pointer`}
              >
                {section.category}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main content area */}
      <main
        className={`flex-1 overflow-y-auto p-10 bg-white min-h-screen max-h-screen ${isMobileView && sidebarVisible ? "hidden" : "block"
          }`}
        style={{ scrollBehavior: "smooth" }}
      >
        <header className="mb-12 max-w-5xl mx-auto border-b pb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Cancellation & Refund Policy</h1>
          <p className="text-gray-600 text-lg">
            Details regarding order cancellations, returns, and refund processing for Dynaclean Industries Private Limited.
          </p>
        </header>

        <article className="max-w-5xl mx-auto space-y-12 text-gray-800 leading-relaxed">
          {refundSections.map((section) => (
            <section
              key={section.category}
              ref={(el) => (sectionRefs.current[section.category] = el)}
              className="scroll-mt-28"
            >
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                {section.category}
              </h2>
              <div className="text-gray-700 whitespace-pre-line text-lg">
                {section.content}
              </div>
            </section>
          ))}
        </article>
      </main>

      {/* Mobile Toggle */}
      {isMobileView && !sidebarVisible && (
        <button
          onClick={() => setSidebarVisible(true)}
          className="fixed top-5 left-5 z-40 text-2xl text-gray-700 cursor-pointer p-3 rounded-full bg-white shadow-lg hover:bg-gray-100 transition border border-gray-200"
          aria-label="Open sidebar"
        >
          <BarsIcon />
        </button>
      )}
    </div>
  );
}