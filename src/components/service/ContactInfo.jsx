import React from "react";
import { MdEmail, MdPhone } from "react-icons/md";

const ContactInfo = () => {
  return (
    <div className="">
      <span className="text-sm md:text-lg md:font-semibold text-center text-gray-800 border-b pb-2">
        Need assistance? Get in touch with us directly.
      </span>
      <br />

      <div className="flex items-center space-x-4 mt-10">
        <MdEmail className="text-xl" />
        <a
          href="mailto:service@dynacleanindustries.com"
          className="text-gray-700 hover:underline break-all"
        >
          service@dynacleanindustries.com
        </a>
      </div>

      <div className="flex items-center space-x-4">
        <MdPhone className="text-xl " />
        <span className="text-gray-700">+91 92890 01127</span>
      </div>

      <div className="flex  items-center space-x-4">
        <MdPhone className="text-xl " />
        <span className="text-gray-700">+91 93153 27809</span>
      </div>
    </div>
  );
};

export default ContactInfo;
