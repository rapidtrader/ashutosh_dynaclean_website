"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // import from react-icons

export default function WhatsAppChatButton() {
  return (
    <a
      href="https://wa.me/919315327809" // ✅ Replace with your actual number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-20 z-50 bg-green-500 text-white 
                 p-2 md:p-3 rounded-full shadow-lg 
                 hover:bg-green-600 transition-colors"
      title="Chat with us on WhatsApp"
    >
      <FaWhatsapp className="w-5 h-5 md:w-6 md:h-6" />
    </a>
  );
}
