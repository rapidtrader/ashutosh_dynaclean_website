"use client";
import { useState, useEffect } from "react";
// Using inline SVG icons as react-icons/fa caused compilation issues.

const faqsData = [
  {
    category: "Purchase",
    items: [
      {
        question: "Where do I place an order on cleaning machines?",
        answer:
          "You can make an order via our sales department, the website inquiry form or by calling our customer support number 9315327809. Once we have confirmed your order, we'll send you a proforma invoice for processing.",
      },
      {
        question: "Do you provide product demonstrations before purchase?",
        answer:
          "Yes, we provide free product demonstrations on your website or via video conference, based on the location you are in and the machine model.",
      },
      {
        question: "Can I purchase one unit, or are you selling in the bulk?",
        answer:
          "We are able to meet the bulk and individual purchase requirements, based on customers' requirements.",
      },
      {
        question: "Are your prices inclusive of tax?",
        answer:
          "Yes, the prices given are typically inclusive of GST and transport, unless stated otherwise.",
      },
      {
        question: "What are your acceptable ways to pay?",
        answer:
          "We accept NEFT/RTGS/IMPS UPI and cheques. For large orders, parts payment options are also available according to the conditions.",
      },
      {
        question: "Do you provide any EMI or financing facility?",
        answer:
          "The answer is yes, financing or EMI options are only available for Truck models via Our third-party partner, which is subject to our approval.",
      },
      {
        question:
          "What's the time frame for delivery after confirmation of the order?",
        answer:
          "Delivery typically takes between 5 and 10 days dependent on the availability of the machine and the location.",
      },
      {
        question: "Do you deliver across India?",
        answer:
          "Yes, we provide PAN-India via our logistics partners or our service team.",
      },
      {
        question: "Will I receive tracking information after dispatch?",
        answer:
          "Yes, we'll provide the tracking information and dispatch information once your shipment has been sent on its way.",
      },
      {
        question:
          "What happens if I don't receive an invoice for taxes and warranty papers?",
        answer:
          "Absolutely. You will receive an invoice that is GST compliant along with the user manual and warranty card at the time of delivery.",
      },
      {
        question:
          "Are you able to help in GeM or government purchase procedures?",
        answer:
          "Yes, we're registered and licensed to supply according to GeM procurement regulations and documents.",
      },
      {
        question: "Do the devices have a warranty?",
        answer:
          "Yes, all of the machines are covered by a one-year standard warranty that covers manufacturing defects.",
      },
      {
        question:
          "Does the installation included in the price of the purchase?",
        answer:
          "Installation is provided for the majority of machines. The service technician will be on site for training and setup when needed.",
      },
    ],
  },
  {
    category: "Service Support",
    items: [
      {
        question:
          "What kind of assistance will you provide following the purchase?",
        answer:
          "We provide on-site service as well as telephonic support, spare parts, and routine maintenance, based on the model and customer specifications.",
      },
      {
        question: "What can I do to file an issue with a service?",
        answer:
          "You can file a service complaint on WhatsApp, contact us at our support line or write us an email. Service tickets will be issued within minutes.",
      },
      {
        question:
          "What is the time frame for a technician to arrive after having registered the complaint?",
        answer:
          "Our service engineer typically contacts the customer promptly within the 48-hour period and visits are scheduled in accordance with the urgency and the location.",
      },
      {
        question:
          "Are spare parts readily available following the warranty expires?",
        answer:
          "Yes, we keep a stock of spare parts for every machine even after the warranty time.",
      },
      {
        question: "Do you provide annual maintenance contracts (AMC)?",
        answer:
          "Yes, we provide AMC solutions for all of our products to ensure performance over time and minimize the amount of downtime.",
      },
      {
        question:
          "Are there any charges for service after the warranty expires?",
        answer:
          "After the warranty period has expired, standard costs for service and spare part cost apply.",
      },
      {
        question:
          "What can I do to track the progress on my request for service?",
        answer:
          "Once your service request has been recorded, you will receive notifications via WhatsApp or via email. You can also contact our support staff to receive status updates.",
      },
      {
        question: "Do you offer operator training following installation?",
        answer:
          "Our technician gives an initial free training session for operators when they install and handover the machine.",
      },
      {
        question: "Do I have support for rural or remote regions?",
        answer:
          "Sure, Dynaclean offers service across India. We offer remote support as well as physical visits whenever feasible.",
      },
      {
        question:
          "Who should I call in the event of an urgent machine malfunction?",
        answer:
          "If you are in need of assistance in the event of a crisis, you can contact our dedicated service helpline at 92890 01127 or contact us via WhatsApp to get immediate assistance.",
      },
    ],
  },
  {
    category: "Dispatch & Delivery",
    items: [
      {
        question:
          "How long will it take to deliver the machine following placing an order?",
        answer:
          "Usually, dispatch is completed within 3-7 working days after receiving the full payment, contingent on the availability of the product.",
      },
      {
        question: "Will I receive tracking information after dispatch?",
        answer:
          "If the item has been shipped, we will send shipping or tracking information together with the invoice.",
      },
      {
        question:
          "Do I have the option of choosing my preferred transportation company?",
        answer:
          "You can select your own transportation provider. If not, we can arrange delivery via our reliable and regular logistic partners.",
      },
      {
        question: "Are delivery costs included within the cost?",
        answer:
          "Yes, shipping is not charged with delivery included, unless otherwise specified during the purchase.",
      },
      {
        question: "Do you offer door-step delivery?",
        answer:
          "Yes, we can provide door-to-door delivery to all major cities across India. Delivery to remote areas is dependent on the accessibility of the transporter.",
      },
      {
        question:
          "What is the method of packing the item to ensure it is safe for delivery?",
        answer:
          "All machines are packed in high-quality industrial packaging that ensures protection during transport and handling.",
      },
      {
        question:
          "Do I have the option of picking up the product on my own at your facility?",
        answer:
          "Yes, self-pickup can be arranged on request from our warehouse, with prior confirmation.",
      },
      {
        question: "What can I do if the item has been damaged in transit?",
        answer:
          "We need to be informed immediately with pictures or videos of the damaged. We will communicate with the carrier and will take immediate actions.",
      },
      {
        question:
          "Do I have the option of scheduling the delivery to a certain time?",
        answer:
          "Yes, we are able to schedule delivery to coincide with your preferred delivery timeframe if you let us know in advance.",
      },
      {
        question: "Do you ship to all states of India?",
        answer:
          "Sure, Dynaclean provides pan-India delivery and dispatch services.",
      },
    ],
  },
  {
    category: "GeM",
    items: [
      {
        question: "Is Dynaclean listed on GeM?",
        answer:
          "Yes. Dynaclean Industries is a registered seller on the Government e-Marketplace (GeM) portal.",
      },
      {
        question:
          "Do I have the ability to directly make an order to purchase Dynaclean products through GeM?",
        answer:
          "Yes, you are able to search the machines we have listed on GeM and then directly make an order.",
      },
      {
        question: "All Dynaclean product lines available for purchase on GeM?",
        answer:
          "The majority of our most popular products like the scrubber dryer, vacuum cleaners ride-on sweepers and Jet pressure equipment are in stock. If you are looking for a specific model you may get in touch with our sales department to get assistance.",
      },
      {
        question:
          "Can specifications for custom-made products be made available through GeM?",
        answer:
          "Yes, we provide customized machines based on specifications via GeM's custom bid as well as the BOQ option available on GeM.",
      },
      {
        question: "Are the GeM prices include GST?",
        answer:
          "GST is not applicable. It's an additional charge of 18 percent and is assessed according to the government's norms.",
      },
      {
        question:
          "Do you offer installation and instruction for the machines purchased through GeM?",
        answer:
          "Yes, we offer no-cost installation as well as instruction on your site for all GeM purchases.",
      },
      {
        question:
          "What is the policy on warranty on products purchased from GeM?",
        answer:
          "Our products are all covered by a standard one-year warranty. Extended warranty options are offered.",
      },
      {
        question: "Are freight costs included in the price of GeM's products?",
        answer:
          "Absolutely, freight charges are absolutely free for all orders that are placed through GeM.",
      },
      {
        question: "How do I submit a service complaint regarding GeM orders?",
        answer:
          "Contact our helpline for service or make complaints via our GeM portal. Our customer service team will quickly respond.",
      },
      {
        question: "Can I try a demonstration before I place an order on GeM?",
        answer: "Yes, Demo requests can be made.",
      },
    ],
  },

  {
    category: "Payment Terms",
    items: [
      {
        question: "What are your usual payment terms?",
        answer:
          "Our standard terms of payment include 100% in advance or in accordance with mutual agreement when you receive your confirmation of your order.",
      },
      {
        question: "Are partial payments accepted for machines?",
        answer:
          "Yes, for machines with high value or bulk orders, the terms of partial payment are possible to discuss and tailor according to the profile of the client.",
      },
      {
        question: "Do you provide credit facilities?",
        answer:
          "Credit facilities are available to certain government departments and clients with long-term contracts subject to approval.",
      },
      {
        question: "Are freight charges included in the cost?",
        answer:
          "Yes, freight costs are not charged on all orders in India unless stated otherwise.",
      },
      {
        question: "Can I purchase the product without having to pay GST?",
        answer:
          "No, GST is a requirement. According to the government regulations, 18% GST will be charged on all purchases.",
      },
      {
        question: "Which payment methods are accepted?",
        answer:
          "We accept payments via bank transfers (NEFT/RTGS), UPI, and cheque payment. Cash payments are not recommended when ordering large quantities.",
      },
      {
        question: "Do you send invoices with GST information?",
        answer:
          "Yes, we provide proper Tax invoices that are GST compliant for every transaction.",
      },
      {
        question: "Do I have a receipt or acknowledgement for my payment?",
        answer:
          "Yes, we will provide an official receipt for payment and confirmation when the transaction is completed.",
      },
      {
        question: "Does there exist a policy on refunds or cancellations?",
        answer:
          "Cancellations of orders are subject to the terms that are agreed upon at the moment of sale. Refunds, if appropriate, are processed in accordance with the policy of the company.",
      },
      {
        question: "How can I pay through GeM Portal?",
        answer:
          "Yes, if your order is made via GeM (Government electronic marketplace), payment must be processed via the GeM portal according to the terms of the government.",
      },
    ],
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState(faqsData[0].category);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [isMobileView, setIsMobileView] = useState(false); // State to track mobile view

  // Effect to determine if it's a mobile view based on window width
  useEffect(() => {
    const checkMobile = () => {
      setIsMobileView(window.innerWidth < 768); // Tailwind's 'md' breakpoint
    };

    checkMobile(); // Initial check
    window.addEventListener("resize", checkMobile); // Listen for window resize

    return () => window.removeEventListener("resize", checkMobile); // Cleanup listener
  }, []);

  const currentFaqs =
    faqsData.find((cat) => cat.category === activeCategory)?.items || [];

  const toggleQuestion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Inline SVG for the hamburger menu icon
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

  // Inline SVG for the plus icon
  const PlusIcon = ({ size }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      fill="currentColor"
      className={`w-${size / 4} h-${size / 4}`} // size prop for scaling, assuming base unit is 4px (tailwind default)
    >
      <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
    </svg>
  );

  // Inline SVG for the minus icon
  const MinusIcon = ({ size }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      fill="currentColor"
      className={`w-${size / 4} h-${size / 4}`} // size prop for scaling
    >
      <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32H400c17.7 0 32 14.3 32 32z" />
    </svg>
  );

  return (
    <div className="flex flex-col items-center  min-h-screen bg-gray-50 font-sans p-4">
      {/* Sidebar and Main Container */}
      <div className="flex w-full max-w-7xl rounded-xl shadow-2xl overflow-hidden bg-white min-h-[70vh] mt-10">
        {/* Sidebar */}
        <aside
          className={`flex flex-col p-6 space-y-6 flex-shrink-0 transition-all duration-300 ease-in-out relative bg-white
            ${sidebarVisible ? "w-64" : "w-12"}
            `}
        >
          {/* Sidebar Hamburger Button (always visible) */}
          <button
            onClick={() => setSidebarVisible(!sidebarVisible)}
            className="mb-6 text-gray-700 cursor-pointer p-3 rounded-full bg-white shadow-lg hover:bg-gray-100 transition self-start"
            aria-label="Toggle sidebar"
          >
            <BarsIcon />
          </button>

          {/* Sidebar content - categories */}
          <div
            className={`flex flex-col gap-3 overflow-hidden transition-opacity duration-300
              ${
                sidebarVisible ? "opacity-100" : "opacity-0 pointer-events-none"
              }
            `}
          >
            <h2 className="text-2xl  mb-8 text-center text-gray-900">
              Categories
            </h2>
            <nav className="flex flex-col gap-3">
              {faqsData.map((cat) => (
                <button
                  key={cat.category}
                  onClick={() => {
                    setActiveCategory(cat.category);
                    setExpandedIndex(null);
                    if (isMobileView) {
                      setSidebarVisible(false);
                    }
                  }}
                  className={`text-lg px-4 py-3 rounded-lg transition text-center
                    ${
                      activeCategory === cat.category
                        ? "bg-gray-700 text-white shadow-md"
                        : "hover:bg-gray-100 text-gray-900"
                    }
                    cursor-pointer`}
                >
                  {cat.category}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content Area */}
        <main
          className={`flex-1 overflow-y-auto p-8 flex justify-center bg-white max-h-[calc(100vh-120px)]
    ${isMobileView && sidebarVisible ? "hidden" : "block"}
    `}
        >
          {/* Your main FAQ content stays same */}
          <div className="w-full max-w-4xl">
            <h1 className="text-4xl  mb-10 text-center text-gray-900">
              {activeCategory} FAQs
            </h1>
            <div className="space-y-5">
              {currentFaqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-300 rounded-lg bg-white shadow-sm"
                >
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full flex justify-between items-center p-5 cursor-pointer text-lg font-medium text-gray-800 hover:bg-gray-100 transition"
                    aria-expanded={expandedIndex === index}
                  >
                    <span>{faq.question}</span>
                    <span className="text-blue-600">
                      {expandedIndex === index ? (
                        <MinusIcon size={18} />
                      ) : (
                        <PlusIcon size={18} />
                      )}
                    </span>
                  </button>
                  {expandedIndex === index && (
                    <div className="px-5 pb-5 pt-0 text-gray-700 leading-relaxed border-t border-gray-200 bg-gray-50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* Outside Sidebar Toggle Button (mobile only, shown only when sidebar is hidden) */}
      {isMobileView && !sidebarVisible && (
        <button
          onClick={() => setSidebarVisible(true)}
          className="fixed top-5 left-5 z-40 text-2xl text-gray-700 cursor-pointer p-3 rounded-full bg-white shadow-lg hover:bg-gray-100 transition"
          aria-label="Open sidebar"
        >
          <BarsIcon />
        </button>
      )}
    </div>
  );
}
