"use client";

import Link from "next/link";
import { HiCheckCircle } from "react-icons/hi";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function ThankYouPage() {
  return (
    <main className="relative h-[80vh] flex items-center justify-center bg-gray-50 overflow-hidden px-4 py-12">
      {/* Diagonal background triangles */}
      <div className="absolute top-0 left-0 w-0 h-0 border-t-[150px] border-l-[150px] border-t-yellow-400 border-l-transparent"></div>
      <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[150px] border-r-[150px] border-b-green-400 border-r-transparent"></div>

      <div className="z-10 max-w-2xl w-full text-center">
        <HiCheckCircle className="mx-auto text-green-500 text-6xl mb-4" />
        <h1 className="text-4xl  text-gray-800 mb-2">Thank you!</h1>
        <p className="text-gray-600 mb-10 text-base md:text-lg">
          Thank you for connecting with us. Your message has been successfully
          received by our team. We’ll get back to you shortly.
        </p>

        {/* Boxes Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl mx-auto">
          {/* Social Box */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-lg text-gray-800 mb-4">Connect With Us</h2>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.facebook.com/dynacleanindustriesofficial/"
                className="text-blue-600 hover:text-blue-800 text-xl"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.linkedin.com/in/dynacleanindustries/"
                className="text-blue-700 hover:text-blue-900 text-xl"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com/dynacleanindustries/"
                className="text-pink-500 hover:text-pink-600 text-xl"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/channel/UCr3lszWTzDDXyXdCMFql5OA"
                className="text-red-600 hover:text-red-700 text-xl"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Resources Box */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-lg  text-gray-800 mb-4">Browse Our Products</h2>
            <Link
              href="/products"
              className="inline-block px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded-full transition duration-300"
            >
              Explore Now
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
