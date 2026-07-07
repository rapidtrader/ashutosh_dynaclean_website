"use client";

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { useState, useEffect } from "react";

export default function Footer() {
  const [imgWidth, setImgWidth] = useState("160px");

  useEffect(() => {
    const updateWidth = () => {
      const w = window.innerWidth;
      if (w < 480) setImgWidth("288px");        // mobile - bada
      else if (w < 768) setImgWidth("160px");   // sm
      else if (w < 1024) setImgWidth("176px");  // md
      else if (w < 1600) setImgWidth("208px");  // lg/xl - chota
      else if (w < 1800) setImgWidth("352px");  // 1600+ - bada
      else setImgWidth("512px");                 // 1800+ - aur bada
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);
  return (
    <footer className="bg-[#000000] mt-[-3%]">
      <div className="py-12 sm:py-8 w-full">
        <div className="w-full sm:w-11/12 lg:w-11/12 mx-auto px-4">
          <div className="flex flex-row flex-wrap lg:flex-nowrap lg:overflow-hidden -mx-4 text-white">
            {/* Logo + Description + Social */}
            <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 px-4 mb-8 sm:mb-0 text-center sm:text-left border-r border-gray-600 pr-6">
              <a href="index.html" className="inline-block mb-5">
                <img
                  src="/logo.svg"
                  alt="Logo"
                  className="w-[151px] rounded-lg mx-auto sm:mx-0"
                />
              </a>
              <p className="text-xs max-w-[95%] sm:max-w-full mb-5 text-white">
                With over a decade of experience in facility management
                services, particularly in machine-based solutions, we specialize
                in providing top-quality cleaning equipment tailored to diverse
                industry needs.
              </p>
              <div className="flex items-center gap-4 text-base">
                <a
                  href="https://www.facebook.com/dynacleanindustriesofficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="text-inherit" aria-hidden="true" />
                </a>
                <a
                  href="https://www.instagram.com/dynacleanindustries/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-inherit" aria-hidden="true" />
                </a>

                <a
                  href="https://www.linkedin.com/in/dynacleanindustries/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn className="text-inherit" aria-hidden="true" />
                </a>
              </div>

              {/* Social Icons */}
              <ul className="flex justify-center sm:justify-start space-x-4 text-white">
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="hover:text-red-500 transition"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="hover:text-red-500 transition"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="hover:text-red-500 transition"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="hover:text-red-500 transition"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="w-1/2 md:w-1/4 lg:w-1/5 px-4 mb-8 md:mb-0 border-r border-gray-600 pr-6 text-center sm:text-left">
              <h3
                className="text-white text-lg font-semibold uppercase mb-4"
              // style={{ color: "#E6D8D8" }}
              >
                Quick Links
              </h3>
              <ul className="space-y-2 text-white text-sm">
                <li>
                  <a href="/" className="hover:text-red-500 transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/products" className="hover:text-red-500 transition">
                    Our Products
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-red-500 transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/careers" className="hover:text-red-500 transition">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="/faq" className="hover:text-red-500 transition">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-red-500 transition">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy-policy"
                    className="hover:text-red-500 transition"
                  >
                    Privacy & Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/cancellation&refund-policy"
                    className="hover:text-red-500 transition"
                  >
                    Cancellation & Refund Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms&conditions"
                    className="hover:text-red-500 transition"
                  >
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>

            {/* Our Services */}
            <div className="w-1/2 md:w-1/4 lg:w-1/5 px-4 mb-8 md:mb-0 border-r border-gray-600 pr-6 text-center sm:text-left">
              <h3
                className="text-white text-lg font-semibold uppercase mb-4"
              // style={{ color: "#E6D8D8" }}
              >
                Our Products
              </h3>
              <ul className="space-y-2 text-white text-sm">
                <li>
                  <a
                    href="/products/scrubber-drier"
                    className="hover:text-red-500 transition"
                  >
                    Scrubber Drier
                  </a>
                </li>
                <li>
                  <a
                    href="/products/sweeper"
                    className="hover:text-red-500 transition"
                  >
                    Sweeper Machine
                  </a>
                </li>
                <li>
                  <a
                    href="/products/Single-disc-scrubber"
                    className="hover:text-red-500 transition"
                  >
                    Single Disc Scrubber
                  </a>
                </li>
                <li>
                  <a
                    href="/products/escalator-cleaner/D-510ES"
                    className="hover:text-red-500 transition"
                  >
                    Escalator Cleaner
                  </a>
                </li>
                <li>
                  <a
                    href="/products/steam-cleaner/D-Steam2"
                    className="hover:text-red-500 transition"
                  >
                    Steam Cleaner
                  </a>
                </li>
                <li>
                  <a
                    href="/products/scooter-mop/DMS-115P"
                    className="hover:text-red-500 transition"
                  >
                    Scooter Mop
                  </a>
                </li>
                <li>
                  <a
                    href="/products/high-pressure-jet-washer"
                    className="hover:text-red-500 transition"
                  >
                    High Pressure Jet Washer
                  </a>
                </li>
                <li>
                  <a
                    href="/products/municipal-diesel-sweeper-truck"
                    className="hover:text-red-500 transition"
                  >
                    Diesel Road Sweeper Truck
                  </a>
                </li>
                <li>
                  <a
                    href="/products/battery-operated-sweeper-truck"
                    className="hover:text-red-500 transition"
                  >
                    Electric Road Sweeper Truck
                  </a>
                </li>
                <li>
                  <a
                    href="/products/vacuum-cleaner"
                    className="hover:text-red-500 transition"
                  >
                    Vacuum Cleaner
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info + Images Together */}
            <div className="w-full md:w-1/4 lg:w-1/2 px-4 mb-8 md:mb-0">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Contact Text */}
                <div className="flex-1">
                  <h3
                    className="text-white text-lg font-semibold uppercase mb-4"
                  >
                    Contact Info
                  </h3>
                  <address className="not-italic space-y-3 text-white text-sm max-w-[320px]">
                    <p className="flex items-start gap-2">
                      <GoLocation style={{ fontSize: "50px" }} />

                      <a href="#" className="hover:text-red-500 transition">
                        1st floor, 13-B Kattabomman Street, Gandhi Nagar Main Road,
                        Gandhi Nagar, Ganapathy, Coimbatore, Tamil Nadu,
                        Pincode-641006
                      </a>
                    </p>
                    <p className="flex items-center gap-2">
                      <HiOutlineMail size={16} aria-hidden="true" />
                      sales@dynacleanindustries.com
                    </p>

                    <p className="flex items-center gap-2">
                      <FiPhone size={16} aria-hidden="true" />
                      01145143666
                    </p>

                    <p className="flex items-center gap-2">
                      <FiPhone size={16} aria-hidden="true" />
                      +91 7982456944
                    </p>
                  </address>
                </div>

                {/* Footer Images */}
                <div className="flex flex-col gap-2 items-center xs:items-start md:items-end w-full md:w-auto md:ml-auto md:flex-shrink-0">
                  <img
                    src="/footer image/trial2.jpg"
                    alt="Trial"
                    style={{ width: imgWidth }}
                    className="h-auto object-contain rounded mx-auto xs:mx-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom copyright bar */}
      <div className="bg-[#000000] border-t border-gray-700 text-center py-4 text-white text-sm">
        <div className="container mx-auto px-4">
          <p>
            Copyright &copy; 2025 All Right Reserved |{" "}
            <strong>Dynaclean Industries</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}
