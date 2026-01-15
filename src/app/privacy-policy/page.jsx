"use client";
import { useState, useEffect, useRef } from "react";

const privacySections = [
  {
    category: "Privacy  Policy",
    content: `Last updated: June 11, 2025
At Dynaclean Industries, established in 2016, we're committed to protecting your privacy. This privacy  policy explains how we collect, use, disclose, and guard your personal data through our website, in compliance with the Digital Personal Data Protection Act, 2023 (DPDPA) and applicable Indian laws. No products are sold through our website, and we don't collect sensitive personal data or use cookies.`,
  },
  {
    category: "1. Information We Collect",
    content: `We collect minimal personal data to respond to your inquiries. The information we collect includes your name, email address, and phone number provided through contact forms or inquiries.
Communication Data Information from emails, phone calls, or other interactions with us.
We don't collect sensitive personal data, such as payment information, as no transactions occur through the website.`,
  },
  {
    category: "2. How We Collect Information",
    content: `We collect your information through forms you submit on our website, such as contact or inquiry forms. Direct messages, such as emails or phone calls.`,
  },
  {
    category: "3. Purpose of Collection",
    content: `We use your personal data for the following purposes:
- To respond to your inquiries and provide customer support.
- To comply with legal and regulatory obligations.
- To send marketing communications, only with your explicit consent.`,
  },
  {
    category: "4. Cookies and Tracking Technologies",
    content: `We don't use cookies or any other tracking technologies on our website. No website usage data, such as IP addresses or browsing patterns, is collected.`,
  },
  {
    category: "5. Data Sharing",
    content: `We may share your personal data with:
Legal Authorities when required by law or to protect our rights, property, or safety.
We don't sell or rent your personal information to third parties.`,
  },
  {
    category: "6. Data Security",
    content: `We apply reasonable technical and organizational measures to protect your personal data from unauthorized access, disclosure, alteration, or destruction. These include secure servers and access controls. However, no method of transmission over the internet is fully secure, and we cannot guarantee absolute security.`,
  },
  {
    category: "7. Your Rights",
    content: `Under the DPDPA 2023, you have the following rights regarding your personal data
- Right to Access: Request a copy of the personal data we hold about you.
- Right to Correction: Request correction of inaccurate or incomplete data.
- Right to Erasure: Request deletion of your data, subject to legal exceptions.
- Right to Withdraw Consent: Withdraw consent for data processing at any time.`,
  },
  {
    category: "8. Third-Party Links",
    content: `Our website may contain links to third-party websites. We are not responsible for their content or privacy practices. Please review the privacy policies of those websites.`,
  },
  {
    category: "9. Contact Information",
    content: `For questions, concerns, or to exercise your rights, contact our Data Protection Officer:
Email: sales@dynacleanindustries.com
Phone: +91 7982456944
Address: 1st floor, 13-B Kattabomman Street, Gandhi Nagar Main Road Gandhi Nagar, Ganapathy, Coimbatore,Tamil Nadu, Pincode-641006`,
  },
  {
    category: "10. Changes to This Policy",
    content: `We may update this Privacy Policy to reflect changes in our practices or legal requirements. Updates will be posted on our website with the revised effective date. We encourage you to review this policy periodically.
This Privacy Policy is governed by the laws of India, and any disputes are subject to the jurisdiction of courts in New Delhi.`,
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

export default function PrivacyPolicyPage() {
  const [activeCategory, setActiveCategory] = useState(
    privacySections[0].category
  );
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
    <div className="flex w-full max-w-full min-h-screen bg-gray-50 font-sans mb-28 ">
      {/* Sidebar */}
      <aside
        className={`flex flex-col flex-shrink-0 transition-all duration-300 ease-in-out relative bg-white
    ${sidebarVisible ? "w-64" : "w-12"}
    h-screen overflow-hidden`}
      >
        {/* Sidebar Toggle Button */}
        <button
          onClick={() => setSidebarVisible(!sidebarVisible)}
          className=" text-gray-700 cursor-pointer p-3 m-4 rounded-full bg-white shadow-lg hover:bg-gray-100 transition self-start"
          aria-label="Toggle sidebar"
        >
          <BarsIcon />
        </button>

        {/* Scrollable Sidebar Content */}
        <div
          className={`flex flex-col gap-3 overflow-y-auto pr-2
      ${sidebarVisible ? "opacity-100" : "opacity-0 pointer-events-none"}
      flex-grow`}
        >
          <h2 className="text-3xl  mb-4 text-center text-gray-900">Sections</h2>
          <nav className="flex flex-col gap-3">
            {privacySections.map((section) => (
              <button
                key={section.category}
                onClick={() => handleCategoryClick(section.category)}
                className={`text-lg px-4 py-3 rounded-lg transition text-center
            ${
              activeCategory === section.category
                ? "bg-gray-600 text-white shadow-md"
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

      {/* Main content area - fixed height, scrollable */}
      <main
        className={`flex-1 overflow-y-auto p-10 bg-white min-h-screen max-h-screen ${
          isMobileView && sidebarVisible ? "hidden" : "block"
        }`}
        style={{ scrollBehavior: "smooth" }}
      >
        <header className="mb-12 max-w-5xl mx-auto ">
          <h1 className="text-5xl  text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-gray-700 text-lg">
            At Dynaclean Industries, your privacy is our priority. Read below to
            learn how we protect your information.
          </p>
        </header>

        <article className="max-w-5xl mx-auto space-y-10 text-gray-800 leading-relaxed">
          {privacySections.map((section) => (
            <section
              key={section.category}
              ref={(el) => (sectionRefs.current[section.category] = el)}
              className="scroll-mt-28"
            >
              <h2 className="text-2xl font-semibold mb-4">
                {section.category}
              </h2>
              <p className="whitespace-pre-line">{section.content}</p>
            </section>
          ))}
        </article>
      </main>

      {/* Outside toggle button on mobile when sidebar hidden */}
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
