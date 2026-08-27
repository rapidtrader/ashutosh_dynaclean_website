"use client";

import { useState } from "react";
import ResponsiveSection from "@/components/Banner/ResponsiveSectionAbout";
import ServiceSupportContactModal from "@/components/service/ServiceSupportContactModal";

const contactButtonClass =
  "inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors mt-4";

export default function ServiceSupportContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <ResponsiveSection
        imagePath="/ServiceSuport/service.png"
        imageSide="left"
        whiteImageBackground
        title="Get in Touch"
        descriptionHTML="
<p>Contact our Service &amp; Support team today to schedule maintenance, request technical assistance, enquire about AMC plans, or order genuine spare parts. We are always ready to keep your cleaning machines operating at their best.</p>
"
        actionButton={
          <button type="button" onClick={openModal} className={contactButtonClass}>
            Contact Us
          </button>
        }
      />

      <section className="bg-white px-6 py-12 md:px-20 md:py-16">
        <div className="w-11/12 max-w-[90rem] mx-auto text-gray-700 text-lg text-justify space-y-4 [&_p]:leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Reliable After-Sales Service You Can Trust
          </h2>
          <p>
            At Dynaclean Industries, our commitment doesn&apos;t end with the delivery of your machine. We provide fast service support, reliable assistance, and professional after-sales service to ensure your equipment performs at its best throughout its lifetime. Recognized for offering the <strong>Best Cleaning Machine Service in India</strong>, our dedicated support team responds promptly to every service request, minimizing downtime and maximizing productivity for businesses across various industries.
          </p>
          <p>
            Our highly skilled service engineers provide prompt doorstep service, genuine spare parts, preventive maintenance, and technical assistance to keep your cleaning machines operating efficiently across India. With a strong nationwide service network, Dynaclean Industries is known for delivering the best service of cleaning machines in India. Our commitment to quality service, timely support, and customer satisfaction makes us the preferred choice for businesses seeking dependable cleaning machine maintenance and long-term performance.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-3">Our Mission</h2>
          <p>
            Our mission is to deliver exceptional customer satisfaction through our efficient after-sales service, excellent technical assistance, and maintenance services. At Dynaclean Industries, we focus on ensuring maximum performance of machines, minimum down time, and operational efficiency through our quality services and customer-oriented solutions. Our objective is to create lasting relationships with our customers by delivering reliable services, innovative cleaning machine solutions, and continuous customer service in India.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-3">Experienced Service Engineer Team</h2>
          <p>
            At Dynaclean Industries, our team of highly skilled and experienced service engineers offers dependable services for the installation, maintenance, troubleshooting, and repairing of cleaning machines to ensure maximum efficiency of operation of these machines. With extensive industry knowledge and experience, our engineers assist companies in optimizing their machine efficiency and extend the operational life of their cleaning machines.
          </p>
          <p>
            Our professional team will ensure that you get quick, efficient and customer-oriented services when it comes to any kind of industrial cleaning equipments. Whether it is installation, maintenance or emergencies, we make sure that your machines are always working at their full efficiency. We also provide 24/7 video call support, allowing our experts to diagnose problems remotely and guide your team step by step in real time.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-3">
            Professional Service &amp; Maintenance Support for Cleaning Machines
          </h2>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Machine Installation:</strong> Professional machine installation and setup to ensure safe and efficient machine operation.</li>
            <li><strong>Preventive Maintenance Service:</strong> Inspection and maintenance service to avoid machine break-downs and extend machine life span.</li>
            <li><strong>Technical Troubleshooting:</strong> Quick diagnosis and resolution of machine-related issues by experienced technicians.</li>
            <li><strong>Emergency Breakdown Support:</strong> Prompt assistance to minimize downtime to ensure quick restoration of machine performance.</li>
            <li><strong>Genuine Spare Parts Replacement:</strong> Original spares that will keep the machines operating efficiently and durable.</li>
            <li><strong>Annual Maintenance Contract (AMC) Support:</strong> Affordable AMC services for smooth maintenance of machines and extending their life spans.</li>
          </ul>
          <p>
            With Dynaclean Industries&apos; dedicated after-sales service and technical support, customers receive dependable solutions, expert guidance, and continuous care to keep their cleaning machines operating at peak performance.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-3">
            Operator Training &amp; Machine Maintenance Support
          </h2>
          <p>
            At Dynaclean Industries, we believe that a well-trained machine operator plays a vital role in improving cleaning machine performance and increasing equipment lifespan. Dynaclean&apos;s professionally trained service engineers offer training on-site for safe, efficient, and reliable use of industrial cleaning machines. Training involves safe handling of the machine, daily operations, cleaning techniques, battery care and charge, as well as some troubleshooting assistance. With proper training and guidance, operators can reduce downtime, improve productivity, and maintain the long-term performance of industrial cleaning machines.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-3">
            Safety Guidelines &amp; Genuine Spare Parts Installation
          </h2>
          <p>
            At Dynaclean Industries, we make sure machine operation stays safe and efficient from day one, with the right safety guidelines and expert operator support. Our trained engineers give comprehensive guidance on how to handle machines safely, what to do during usage procedures, and which best practices actually work, so productivity improves while operational risks go down.
          </p>
          <p>
            For excellent performance and efficiency, we always ensure that only genuine spare parts are used in the cleaning machines. Being a reputable supplier, Dynaclean Industries guarantees a constant supply of original spare parts. The trained and experienced service engineers at Dynaclean Industries guarantee the proper installation of the genuine spare parts to enhance the performance of the machines.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-3">
            Genuine Spare Parts Installation Services for Cleaning Machines
          </h2>
          <p className="font-semibold text-gray-900">We provide installation services for:</p>
          <p>
            Dynaclean Industries offers professional installation services for spare parts to ensure that your cleaning machines work efficiently and effectively. Our trained service engineers offer professional installation of genuine spare parts such as brushes, squeegee blades, motors, batteries, filters, vacuum motors, electronic parts, and other original spare parts. We help increase the efficiency and lifespan of your machines through professional installation and quality assurance.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-3">
            Why Choose Dynaclean Service Support?
          </h2>
          <p>
            At Dynaclean Industries, we offer efficient and professional after-sale services for industrial cleaning machinery to help you get the most out of your cleaning equipment in terms of efficiency, effectiveness, and longevity. Our expert service team delivers quick assistance, technical guidance, and customized maintenance solutions to keep your cleaning equipment operating smoothly.
          </p>
          <p className="font-semibold text-gray-900">Key Benefits:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Fast service response &amp; quick breakdown resolution</li>
            <li>Certified and experienced service engineers</li>
            <li>Nationwide technical support</li>
            <li>Genuine spare parts availability</li>
            <li>Operator training after installation</li>
            <li>Preventive maintenance &amp; AMC services</li>
          </ul>
          <p>
            With a commitment to quality service, expert technical support, and dependable maintenance solutions, Dynaclean Industries ensures your cleaning machines deliver consistent performance, reduced downtime, and maximum productivity throughout their lifecycle.
          </p>
        </div>
      </section>

      <div className="flex justify-center px-4 pb-16 mb-8">
        <button type="button" onClick={openModal} className={contactButtonClass}>
          Contact Us
        </button>
      </div>

      <ServiceSupportContactModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
