"use client";

import { useEffect } from "react";
import ContactForm from "@/components/Forms/Service";
import ContactInfo from "@/components/service/ContactInfo";

export default function ServiceSupportContactModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl bg-white shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-gray-500 hover:text-gray-800 text-2xl leading-none"
          aria-label="Close"
        >
          &times;
        </button>

        <div className="p-6 md:p-8">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
