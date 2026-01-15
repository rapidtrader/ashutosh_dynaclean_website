"use client";
import { useState, useEffect, useRef } from "react";

const termsSections = [
  {
    category: "Terms & Conditions",
    content: `Last updated on 27-12-2025 11:01:33
These Terms and Conditions, along with privacy policy or other terms (“Terms”) constitute a binding agreement by and between DYNACLEAN INDUSTRIES PRIVATE LIMITED, ( “Website Owner” or “we” or “us” or “our”) and you (“you” or “your”) and relate to your use of our website, goods (as applicable) or services (as applicable) (collectively, “Services”).

By using our website and availing the Services, you agree that you have read and accepted these Terms (including the Privacy Policy). We reserve the right to modify these Terms at any time and without assigning any reason. It is your responsibility to periodically review these Terms to stay informed of updates.`,
  },
  {
    category: "1. User Responsibilities",
    content: `To access and use the Services, you agree to provide true, accurate and complete information to us during and after registration, and you shall be responsible for all acts done through the use of your registered account.`,
  },
  {
    category: "2. Accuracy of Information",
    content: `Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials offered on this website or through the Services, for any specific purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.`,
  },
  {
    category: "3. Use and Risk",
    content: `Your use of our Services and the website is solely at your own risk and discretion. You are required to independently assess and ensure that the Services meet your requirements.`,
  },
  {
    category: "4. Intellectual Property",
    content: `The contents of the Website and the Services are proprietary to Us and you will not have any authority to claim any intellectual property rights, title, or interest in its contents. You acknowledge that unauthorized use of the Website or the Services may lead to action against you as per these Terms or applicable laws.`,
  },
  {
    category: "5. Fees and Conduct",
    content: `You agree to pay us the charges associated with availing the Services. 

You agree not to use the website and/ or Services for any purpose that is unlawful, illegal or forbidden by these Terms, or Indian or local laws that might apply to you.`,
  },
  {
    category: "6. Third-Party Links",
    content: `You agree and acknowledge that website and the Services may contain links to other third party websites. On accessing these links, you will be governed by the terms of use, privacy policy and such other policies of such third party websites.`,
  },
  {
    category: "7. Binding Contract",
    content: `You understand that upon initiating a transaction for availing the Services you are entering into a legally binding and enforceable contract with us for the Services.`,
  },
  {
    category: "8. Refunds and Claims",
    content: `You shall be entitled to claim a refund of the payment made by you in case we are not able to provide the Service. The timelines for such return and refund will be according to the specific Service you have availed or within the time period provided in our policies (as applicable). In case you do not raise a refund claim within the stipulated time, that would make you ineligible for a refund.`,
  },
  {
    category: "9. Force Majeure",
    content: `Notwithstanding anything contained in these Terms, the parties shall not be liable for any failure to perform an obligation under these Terms if performance is prevented or delayed by a force majeure event.`,
  },
  {
    category: "10. Governing Law",
    content: `These Terms and any dispute or claim relating to it, or its enforceability, shall be governed by and construed in accordance with the laws of India. 

All disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in NEW DELHI, DELHI.`,
  },
  {
    category: "11. Contact",
    content: `All concerns or communications relating to these Terms must be communicated to us using the contact information provided on this website.`,
  },
];

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

export default function TermsAndConditionsPage() {
  const [activeCategory, setActiveCategory] = useState(termsSections[0].category);
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
          <h2 className="text-xl font-bold mb-4 text-center text-gray-900">Legal Sections</h2>
          <nav className="flex flex-col gap-3">
            {termsSections.map((section) => (
              <button
                key={section.category}
                onClick={() => handleCategoryClick(section.category)}
                className={`text-sm px-4 py-3 rounded-lg transition text-left
                ${activeCategory === section.category
                    ? "bg-gray-800 text-white shadow-md"
                    : "hover:bg-gray-100 text-gray-900"
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
        <header className="mb-12 max-w-5xl mx-auto ">
          <h1 className="text-5xl font-bold text-gray-900 mb-2">Terms & Conditions</h1>
          <p className="text-gray-700 text-lg">
            Please read these terms carefully. By using our website and services,
            you agree to the terms outlined below by DYNACLEAN INDUSTRIES PRIVATE LIMITED.
          </p>
        </header>

        <article className="max-w-5xl mx-auto space-y-10 text-gray-800 leading-relaxed">
          {termsSections.map((section) => (
            <section
              key={section.category}
              ref={(el) => (sectionRefs.current[section.category] = el)}
              className="scroll-mt-28"
            >
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                {section.category}
              </h2>
              <p className="whitespace-pre-line text-gray-700">{section.content}</p>
            </section>
          ))}
        </article>
      </main>

      {/* Mobile toggle button */}
      {isMobileView && !sidebarVisible && (
        <button
          onClick={() => setSidebarVisible(true)}
          className="fixed top-5 left-5 z-40 text-2xl text-gray-700 cursor-pointer p-3 rounded-full bg-white shadow-lg hover:bg-gray-100 transition border"
          aria-label="Open sidebar"
        >
          <BarsIcon />
        </button>
      )}
    </div>
  );
}