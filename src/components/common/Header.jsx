"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiPhone } from "react-icons/fi";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();
  const { getCartCount, isLoaded: cartLoaded } = useCart();

  // Update cart count only after hydration
  useEffect(() => {
    setIsLoaded(true);
    if (cartLoaded) {
      setCartCount(getCartCount());
    }
  }, [cartLoaded, getCartCount]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 0);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (key) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  const handleMenuLinkClick = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className="w-full mb-28 lg:mb-28 font-noto">
      {/* Top Bar */}
      <div
        className={`bg-gradient-to-b from-[#9d4444] to-[#ff5151] py-2 text-white text-sm fixed w-full z-20 transition-all duration-200 ${
          scrolled ? "top-[-50px]" : "top-0"
        }`}
      >
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-2">
            <a
              href="tel:01145143666"
              className="hover:underline flex items-center gap-1"
            >
              <FiPhone /> 01145143666,
            </a>
            <a
              href="tel:+91-7982456944"
              className="hover:underline flex items-center gap-1"
            >
              <FiPhone /> +91-7982456944
            </a>
          </div>
          <div className="hidden md:flex gap-3 text-white text-base">
            <a
              href="https://www.facebook.com/dynacleanindustriesofficial/"
              target="_blank"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a href="https://x.com/Dynaclean01" target="_blank">
              <i className="fab fa-twitter" />
            </a>
            <a
              href="https://www.linkedin.com/company/103738021/"
              target="_blank"
            >
              <i className="fab fa-linkedin-in" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCr3lszWTzDDXyXdCMFql5OA"
              target="_blank"
            >
              <i className="fab fa-youtube" />
            </a>
            <a
              href="https://www.instagram.com/dynacleanindustries/"
              target="_blank"
            >
              <i className="fab fa-instagram" />
            </a>
            <a href="https://in.pinterest.com/Dynaclean01/" target="_blank">
              <i className="fab fa-pinterest" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav
        className={`fixed left-0 w-full bg-white shadow-md z-[9999] transition-all duration-200 ${
          scrolled ? "top-0" : "top-[50px]"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-0">
          {/* Logo */}
          <Link href="/">
            <img
              src="/logo.svg"
              alt="Dynaclean Industries"
              className="h-15 md:h-26 lg:h-32 w-17 lg:w-32 md:mt-[-1.9rem]"
            />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-gray-800 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Navigation Menu */}
          <ul
            className={`${
              menuOpen ? "flex flex-col" : "hidden"
            } lg:flex lg:flex-row lg:items-center lg:gap-4 absolute lg:relative top-full left-0 w-full md:w-auto bg-white lg:bg-transparent z-50 shadow lg:shadow-none mt-3 lg:mt-0 px-4 lg:px-0`}
          >
            {[
              ["Home", "/"],
              [
                "Our Products",
                "/products",
                "products",
                [
                  ["Scrubber Drier", "/products/scrubber-drier"],
                  ["Sweeper Machine", "/products/sweeper"],
                  [
                    "High Pressure Jet Washer",
                    "/products/high-pressure-jet-washer",
                  ],
                  ["Escalator Cleaner", "/products/escalator-cleaner/D-510ES"],
                  ["Single Disc Scrubber", "/products/Single-disc-scrubber"],
                  ["Scooter Mop", "/products/scooter-mop/DMS-115P"],
                  ["Vacuum Cleaners", "/products/vacuum-cleaner"],
                  ["Steam Cleaner", "/products/steam-cleaner/D-Steam2"],
                  [
                    "Diesel Road Sweeper Truck",
                    "/products/municipal-diesel-sweeper-truck",
                  ],
                  [
                    "Electric Road Sweeper Truck",
                    "/products/battery-operated-sweeper-truck",
                  ],
                  ["Hand Scrubber", "/products/hand-scrubber"],
                  ["Carpet Cleaner", "/products/carpet-cleaner/DSC-30"],
                ],
              ],
              [
                "About Us",
                "/about",
                "about",
                [
                  ["Overview", "/about"],
                  ["Policy", "/about/policy"],
                ],
              ],
              ["Careers", "/careers"],
              ["FAQ's", "/faq"],
              ["Blogs", "/blogs"],
              ["Contact Us", "/contact"],
              ["Service Support", "/service-support"],
            ].map(([label, href, keyOrSubmenu, maybeSubmenu], index) => {
              const submenu =
                Array.isArray(keyOrSubmenu) && !maybeSubmenu
                  ? null
                  : maybeSubmenu;
              const keyName =
                typeof keyOrSubmenu === "string" ? keyOrSubmenu : null;

              const isActive = submenu
                ? submenu.some(([, subHref]) => pathname.startsWith(subHref)) ||
                  pathname === href
                : pathname === href;

              return submenu ? (
                <li
                  key={index}
                  className="group relative md:border-8 border-white"
                >
                  <Link
                    href={href}
                    onClick={(e) => {
                      toggleDropdown(keyName); // open/close dropdown
                      // don't close menu
                    }}
                    className={`cursor-pointer block py-2 w-full text-left ${
                      isActive ? "text-red-600" : "text-gray-800"
                    } hover:text-red-600`}
                  >
                    {label}
                  </Link>

                  {/* Mobile Dropdown */}
                  <ul
                    className={`lg:hidden absolute left-0 mt-2 bg-white shadow-lg z-50 w-64 transition-all duration-300 ease-in-out ${
                      openDropdown === keyName ? "block" : "hidden"
                    }`}
                  >
                    {submenu.map(([subLabel, subHref], i) => (
                      <li key={i}>
                        <Link
                          href={subHref}
                          onClick={handleMenuLinkClick}
                          className={`block px-4 py-2 text-sm ${
                            pathname === subHref
                              ? "text-red-600"
                              : "text-gray-700"
                          } hover:bg-gray-100`}
                        >
                          {subLabel}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  {/* Desktop Hover Dropdown */}
                  <ul className="hidden lg:group-hover:block absolute left-0 mt-2 bg-white shadow-lg z-50 w-64 transition-all duration-300 ease-in-out">
                    {submenu.map(([subLabel, subHref], i) => (
                      <li key={i}>
                        <Link
                          href={subHref}
                          className={`block px-4 py-2 text-sm ${
                            pathname === subHref
                              ? "text-red-600"
                              : "text-gray-700"
                          } hover:bg-gray-100`}
                        >
                          {subLabel}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={index}>
                  <Link
                    href={href}
                    onClick={handleMenuLinkClick}
                    className={`block py-2 ${
                      isActive ? "text-red-600" : "text-gray-800"
                    } hover:text-red-600`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}

            {/* Cart Icon */}
            <li className="mt-2 md:mt-0 md:ml-4 relative">
              <Link
                href="/cart"
                onClick={handleMenuLinkClick}
                className="inline-flex items-center justify-center relative"
              >
                <svg
                  className="h-6 w-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {isLoaded && cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>

            {/* Shop Now Button */}
            <li className="mt-2 md:mt-0 md:ml-4">
              <Link
                href="/shop"
                onClick={handleMenuLinkClick}
                className="inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors font-semibold"
              >
                Shop Now
              </Link>
            </li>

            {/* Catalog Download */}
            <li className="mt-2 md:mt-0 md:ml-4">
              <a
                href="/Home/Catalog/All-Product_Catalogue-2026.pdf"
                target="_blank"
                onClick={handleMenuLinkClick}
                className="inline-block"
              >
                <img
                  src="/Download.svg"
                  alt="Download Catalog"
                  className="w-32"
                />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
