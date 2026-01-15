"use client";

import React from "react";
import { FaPhoneAlt } from "react-icons/fa"; // phone icon

export default function CallNowButton() {
  return (
    <a
      href="tel:+919315327809" // ✅ Replace with your actual number
      className="fixed right-4 bottom-36 z-50 bg-red-400 text-white 
                 p-2 md:p-3 rounded-full shadow-lg 
                 hover:bg-red-600 transition-colors"
      title="Call us now"
    >
      <FaPhoneAlt className="w-5 h-5 md:w-6 md:h-6" />
    </a>
  );
}
