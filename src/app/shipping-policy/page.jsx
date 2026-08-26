"use client";
import { useState, useRef } from "react";

const shippingSections = [
  {
    category: "1. Shipping Locations",
    content: `We currently offer shipping within India.`,
  },
  {
    category: "2. Order Processing Time",
    content: `• Processing Time: All orders are processed within 3 business days (Monday to Saturday, excluding public holidays).

• Same-Day Shipping: We aim to dispatch orders placed on weekdays before 6:00 PM on the same day, ensuring faster delivery.

• Processing Hours: Orders placed after 3:00 PM will be processed on the next business day.`,
  },
  {
    category: "3. Shipping Methods",
    content: `We provide two main shipping methods:

• Prepaid Courier Service: For prepaid orders, we use Delhivery/Wheelseye Logistics for local shipments within India.

• Cash on Delivery (COD): For COD orders, shipping is done via Delhivery.

Once the shipment is dispatched, you will receive a tracking number to monitor your delivery.`,
  },
  {
    category: "4. Delivery Time",
    content: `Delivery times depend on the shipping method and destination. On average, deliveries can take anywhere between 7 to 10 business days.

• Local Deliveries: Typically, within 1–2 business days.

• National Deliveries: Typically, 7–10 business days depending on the location.`,
  },
  {
    category: "5. Shipping Charges",
    content: `• Prepaid Orders: Shipping charges are calculated at checkout based on the weight, dimensions of the package, and delivery location.

• COD Orders: Shipping charges are calculated at checkout. Additional COD fees may apply as per the delivery partner.`,
  },
  {
    category: "6. Packaging",
    content: `We take great care in packaging your products to ensure they are delivered in perfect condition. Packages are securely packed with protective materials to safeguard the items.`,
  },
  {
    category: "7. Address Verification",
    content: `Please ensure that the shipping address entered is complete and accurate. We cannot be responsible for delays or delivery failures due to incorrect or incomplete address details.`,
  },
  {
    category: "8. Delivery Issues",
    content: `• Missing or Lost Packages: In the rare case that your package goes missing or is delayed, please contact us immediately with your order details, and we will assist you in tracking the package.

• Damaged Packages: In the unlikely event that your package is damaged during transit, please contact us immediately, along with photos and videos of the damage. We will initiate a claim with the courier company and resolve the issue.

• Return-to-Sender: If the package is returned to us due to incorrect or incomplete address details, we will contact you to confirm the correct address. Additional shipping charges will apply for reshipping.`,
  },
  {
    category: "9. Shipping Notifications",
    content: `Once your order has been dispatched, we will send you:

• A dispatch confirmation email

• A tracking number along with the courier details via email and WhatsApp (if available).`,
  },
  {
    category: "10. Delivery Restrictions",
    content: `• We do not deliver to P.O. Boxes, international locations, or remote areas where service is not available.

• Orders placed for pre-owned components may have additional shipping time based on availability.`,
  },
  {
    category: "11. Addresses",
    content: `Operations Address: 3rd Floor, Plot No 9, Block-B, Pocket-3, Dwarka Sector-17, South West Delhi, Delhi-110078

Registered / Permanent Address: 10, Gandhi Nagar Main Road, Ganapathy, Coimbatore, Coimbatore North, Tamil Nadu, India, 641006`,
  },
];

export default function ShippingPolicyPage() {
  const [activeCategory, setActiveCategory] = useState(shippingSections[0].category);
  const sectionRefs = useRef({});

  const handleCategoryClick = (category) => {
    setActiveCategory(category);

    const section = sectionRefs.current[category];
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full max-w-full min-h-screen bg-gray-50 font-sans mb-28 pt-4 md:pt-6">
      <aside className="flex flex-col flex-shrink-0 w-full md:w-64 lg:w-72 bg-white border-b md:border-b-0 md:border-r border-gray-200 p-4 md:p-6 md:sticky md:top-28 md:self-start md:max-h-[calc(100vh-8rem)] md:overflow-y-auto">
        <h2 className="text-xl font-bold mb-4 text-center text-gray-900 uppercase tracking-wider">
          Policy Navigation
        </h2>
        <nav className="flex flex-col gap-3">
          {shippingSections.map((section) => (
            <button
              key={section.category}
              onClick={() => handleCategoryClick(section.category)}
              className={`text-sm px-4 py-3 rounded-lg transition text-left cursor-pointer ${
                activeCategory === section.category
                  ? "bg-blue-600 text-white shadow-md"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              {section.category}
            </button>
          ))}
        </nav>
      </aside>

      <main
        className="flex-1 overflow-y-auto p-6 md:p-10 bg-white min-h-[calc(100vh-8rem)]"
        style={{ scrollBehavior: "smooth" }}
      >
        <header className="mb-12 max-w-5xl mx-auto border-b pb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Shipping Policy</h1>
          <p className="text-gray-600 text-lg">
            Information about shipping locations, delivery times, charges, and policies for Dynaclean Industries Private Limited.
          </p>
        </header>

        <article className="max-w-5xl mx-auto space-y-12 text-gray-800 leading-relaxed">
          {shippingSections.map((section) => (
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
    </div>
  );
}
