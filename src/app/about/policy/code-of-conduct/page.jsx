// "use client";

// import React, { useState, useEffect } from "react";
// import codeOfConductData from "./data.json";
// import { FaBars, FaTimes } from "react-icons/fa";

// const CodeOfConductPage = () => {
//   const [isIndexVisible, setIsIndexVisible] = useState(false);

//   // Define commonly used section class
//   const sectionClass = "mb-8 scroll-mt-24";

//   useEffect(() => {
//     document.documentElement.style.scrollBehavior = "smooth";
//     // Cleanup function to reset scroll behavior when component unmounts
//     return () => {
//       document.documentElement.style.scrollBehavior = "auto";
//     };
//   }, []);

//   const toggleIndex = () => {
//     setIsIndexVisible(!isIndexVisible);
//   };

//   const allSections = [
//     { title: codeOfConductData.preamble.title, id: "preamble" },
//     { title: codeOfConductData.applicability.title, id: "applicability" },
//     {
//       title: codeOfConductData.codeOfConduct.title,
//       id: "code-of-conducttest",
//     },
//     ...codeOfConductData.codeOfConduct.sections.map((section) => ({
//       title: section.heading,
//       id: section.id,
//       isSub: true,
//     })),
//     {
//       title: codeOfConductData.implementationAndMonitoring.title,
//       id: "implementation-and-monitoring",
//     },
//     { title: codeOfConductData.ecomDisclosure.title, id: "ecom-disclosure" },
//     {
//       title: codeOfConductData.reviewAndAmendment.title,
//       id: "review-and-amendment",
//     },
//     { title: codeOfConductData.nonCompliance.title, id: "non-compliance" },
//     { title: codeOfConductData.annexure.title, id: "annexure" },
//     { title: codeOfConductData.acknowledgement.title, id: "acknowledgement" },
//   ];

//   const renderContentWithBreaks = (text) => {
//     return text.split("\n").map((line, index) => (
//       <p key={index} className="mb-2">
//         {line}
//       </p>
//     ));
//   };

//   const renderTable = (tableData) => {
//     if (!tableData || !tableData.headers || !tableData.rows) return null;

//     return (
//       <div className="overflow-x-auto rounded-lg border border-gray-200">
//         <table className="min-w-full divide-y divide-gray-200 ">
//           <thead className="bg-gray-50">
//             <tr>
//               {tableData.headers.map((header, index) => (
//                 <th
//                   key={index}
//                   className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 md:px-6"
//                 >
//                   {header}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-200 bg-white">
//             {tableData.rows.map((row, rowIndex) => (
//               <tr key={rowIndex}>
//                 {row.map((cell, cellIndex) => (
//                   <td
//                     key={cellIndex}
//                     className="whitespace-normal break-words px-4 py-4 text-sm text-gray-500 md:px-6"
//                   >
//                     {cell}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   };

//   return (
//     <div className="flex min-h-screen flex-col bg-gray-100 p-4 md:flex-row md:p-8 mb-10 ">
//       {/* Mobile Index Navigation Overlay */}
//       {isIndexVisible && (
//         <nav className="fixed inset-0 z-50 overflow-y-auto bg-white p-8 shadow-lg md:hidden">
//           <div className="flex items-center justify-between">
//             <h3 className="text-xl font-bold text-blue-900">Index</h3>
//             <button
//               onClick={toggleIndex}
//               className="text-red-500 transition-colors duration-200 hover:text-red-700"
//             >
//               <FaTimes size={24} />
//             </button>
//           </div>
//           <ul className="mt-8 space-y-4">
//             {allSections.map((section) => (
//               <li
//                 key={section.id}
//                 className={`${section.isSub ? "ml-4" : ""} text-base`}
//               >
//                 <button
//                   onClick={() => {
//                     const el = document.getElementById(section.id);
//                     if (el) {
//                       el.scrollIntoView({
//                         behavior: "smooth",
//                         block: "start",
//                       });
//                       setIsIndexVisible(false); // Close the index after clicking
//                     }
//                   }}
//                   className="text-left font-medium text-blue-600 transition-colors duration-200 hover:text-blue-800"
//                 >
//                   {section.title}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       )}

//       {/* Desktop Index Navigation */}
//       <nav className="hidden w-1/4 p-8 lg:sticky lg:top-8 lg:h-screen lg:overflow-y-auto lg:bg-white lg:shadow-lg lg:block">
//         <div className="flex items-center justify-between">
//           <h3 className="text-xl font-bold text-blue-900">Index</h3>
//         </div>
//         <ul className="mt-4 space-y-2">
//           {allSections.map((section) => (
//             <li
//               key={section.id}
//               className={`${section.isSub ? "ml-4" : ""} text-base`}
//             >
//               <button
//                 onClick={() => {
//                   const el = document.getElementById(section.id);
//                   if (el) {
//                     el.scrollIntoView({
//                       behavior: "smooth",
//                       block: "center",
//                     });
//                   }
//                 }}
//                 className="text-left w-full font-medium text-blue-600 transition-colors duration-200 hover:text-blue-800"
//               >
//                 {section.title}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </nav>

//       {/* Main Content */}
//       <main className="flex-1 lg:p-8">
//         <div className="mx-auto max-w-4xl rounded-lg bg-white p-6 my-4 shadow-lg md:my-8 md:p-8">
//           {/* Mobile hamburger icon */}
//           <div className="flex justify-end lg:hidden">
//             <button
//               onClick={toggleIndex}
//               className="text-blue-500 transition-colors duration-200 hover:text-blue-700"
//             >
//               <FaBars size={24} />
//             </button>
//           </div>

//           <header className="mb-8 text-center">
//             <h2 className="text-2xl font-semibold text-blue-700 md:text-3xl">
//               {codeOfConductData.documentTitle}
//             </h2>
//             <h3 className="text-lg text-gray-600 md:text-xl">
//               {codeOfConductData.documentSubtitle}
//             </h3>
//             <p className="mt-2 text-sm text-gray-500">
//               {codeOfConductData.versionInfo}
//             </p>
//           </header>

//           {/* Content Sections */}
//           <section id="preamble" className={sectionClass}>
//             <h2 className="mb-4 text-xl font-bold text-blue-900 md:text-2xl">
//               {codeOfConductData.preamble.title}
//             </h2>
//             <p className="mb-4 text-gray-700">
//               {codeOfConductData.preamble.content}
//             </p>
//           </section>

//           <section id="applicability" className={sectionClass}>
//             <h2 className="mb-4 text-xl font-bold text-blue-900 md:text-2xl">
//               {codeOfConductData.applicability.title}
//             </h2>
//             <p className="mb-4 text-gray-700">
//               {codeOfConductData.applicability.content}
//             </p>
//           </section>

//           <section id="code-of-conducttest" className={sectionClass}>
//             <h2 className="mb-4 text-xl font-bold text-blue-900 md:text-2xl">
//               {codeOfConductData.codeOfConduct.title}
//             </h2>
//             {codeOfConductData.codeOfConduct.sections.map((section) => (
//               <div key={section.id} id={section.id} className={sectionClass}>
//                 <h3 className="mb-2 text-lg font-semibold text-blue-800 md:text-xl">
//                   {section.heading}
//                 </h3>
//                 <div className="text-gray-700">
//                   {renderContentWithBreaks(section.content)}
//                 </div>
//               </div>
//             ))}
//           </section>

//           <section id="implementation-and-monitoring" className={sectionClass}>
//             <h2 className="mb-4 text-xl font-bold text-blue-900 md:text-2xl">
//               {codeOfConductData.implementationAndMonitoring.title}
//             </h2>
//             <p className="mb-4 text-gray-700">
//               {codeOfConductData.implementationAndMonitoring.content}
//             </p>
//           </section>

//           <section id="ecom-disclosure" className={sectionClass}>
//             <h2 className="mb-4 text-xl font-bold text-blue-900 md:text-2xl">
//               {codeOfConductData.ecomDisclosure.title}
//             </h2>
//             <p className="mb-4 text-gray-700">
//               {codeOfConductData.ecomDisclosure.content}
//             </p>
//           </section>

//           <section id="review-and-amendment" className={sectionClass}>
//             <h2 className="mb-4 text-xl font-bold text-blue-900 md:text-2xl">
//               {codeOfConductData.reviewAndAmendment.title}
//             </h2>
//             <p className="mb-4 text-gray-700">
//               {codeOfConductData.reviewAndAmendment.content}
//             </p>
//           </section>

//           <section id="non-compliance" className={sectionClass}>
//             <h2 className="mb-4 text-xl font-bold text-blue-900 md:text-2xl">
//               {codeOfConductData.nonCompliance.title}
//             </h2>
//             <p className="mb-4 text-gray-700">
//               {codeOfConductData.nonCompliance.content}
//             </p>
//           </section>

//           <section id="annexure" className={sectionClass}>
//             <h2 className="mb-4 text-xl font-bold text-blue-900 md:text-2xl">
//               {codeOfConductData.annexure.title}
//             </h2>
//             <h3 className="mb-2 text-lg font-semibold text-blue-800 md:text-xl">
//               Reporting Structure
//             </h3>
//             {renderTable(codeOfConductData.annexure.reportingTable)}
//             <h3 className="mb-2 mt-6 text-lg font-semibold text-blue-800 md:text-xl">
//               Clarification /Permissions
//             </h3>
//             {renderTable(codeOfConductData.annexure.clarificationTable)}
//             <div className="mt-4">
//               <h4 className="mb-1 text-base font-medium text-blue-700 md:text-lg">
//                 Legend:
//               </h4>
//               <ul className="ml-4 list-inside list-disc space-y-1 text-gray-700">
//                 {Object.entries(codeOfConductData.annexure.legend).map(
//                   ([key, value]) => (
//                     <li key={key}>
//                       {key}: {value}
//                     </li>
//                   )
//                 )}
//               </ul>
//               <p className="mt-4 text-gray-700">
//                 {codeOfConductData.annexure.escalationInfo}
//               </p>
//             </div>
//           </section>

//           <section id="acknowledgement" className={sectionClass}>
//             <h2 className="mb-4 text-xl font-bold text-blue-900 md:text-2xl">
//               {codeOfConductData.acknowledgement.title}
//             </h2>
//             <form className="space-y-4 text-gray-700">
//               {renderContentWithBreaks(
//                 codeOfConductData.acknowledgement.content
//               )}
//               <div className="mt-6 flex flex-col space-y-4 md:flex-row md:space-x-8 md:space-y-0">
//                 {codeOfConductData.acknowledgement.fields.map((field) => (
//                   <div key={field.label} className="flex-1">
//                     <label className="block text-sm font-medium">
//                       {field.label}:
//                     </label>
//                     <input
//                       type={field.type}
//                       className="w-full border-b border-gray-400 focus:border-blue-500 focus:outline-none"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </form>
//           </section>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default CodeOfConductPage;

"use client";
import Link from "next/link";

export default function CodeOfConductSection() {
  return (
    <section className="bg-gray-50 py-8 md:py-20 px-4 md:px-8 lg:px-16 ">
      <div className="max-w-4xl mx-auto md:mx-20 text-left ">
        {/* Subheading */}
        <h3 className="text-lg font-semibold text-gray-800 mb-3">
          Our Code Of Conduct
        </h3>

        {/* Paragraph */}
        <p className="text-gray-600 leading-relaxed mb-4">
          We are committed to maintaining the highest standards of integrity,
          respect, and responsibility in everything we do. Our Code of Conduct
          outlines the principles and behaviors expected from all members of our
          organization.
        </p>

        {/* Link */}
        <Link
          href="/policy/Code-Of-Conduct.pdf"
          target="_blank"
          className="inline-block text-red-600 font-medium hover:underline hover:text-red-700 transition-colors duration-200"
        >
          View Full Code of Conduct →
        </Link>
      </div>
    </section>
  );
}
