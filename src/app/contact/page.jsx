import ContactForm from "@/components/Forms/ContactForm";
import { FaFacebookF, FaTwitter, FaInstagram, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <main className="flex flex-col md:flex-row items-start justify-center px-1 md:px-10 lg:px-80 bg-gray-50 md:my-28 pt-10">
      {/* Left Section (Image + Text + Social Icons - Hidden on Mobile) */}
      <section
        className="hidden  md:flex w-full lg:w-1/3 md:h-[45rem] flex-col justify-end text-gray-600 "
        style={{
          backgroundImage: "url('/Contact/sample.png')", // This was already correct
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className=" p-6 text-center md:text-left">
          <h2 className="text-3xl ">Contact Us</h2>
          <p className="mt-4 text-sm">
            We are here to assist you with any inquiries. Please reach out and
            we’ll get back to you as soon as possible.
          </p>
          <div className=" space-x-4 hidden md:flex mt-4">
            <a
              href="https://www.facebook.com/dynacleanindustriesofficial/"
              className="text-gray-600 text-xl hover:text-gray-400 transition-colors"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/dynacleanindustries/"
              className="text-gray-600 text-xl hover:text-gray-400 transition-colors"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </section>

      {/* Right Section (Form Component) */}
      <section className="w-full lg:w-2/3 flex flex-col p-6 space-y-4 lg:mt-29">
        {/* Phone Numbers Section */}
        <div className="my-4 pb-4 border-b border-gray-200">
          {/* Top Row - HR and Service */}
          <div className="flex flex-col xs:flex-row gap-2 xs:gap-3 mb-2 xs:mb-3">
            {/* HR Contact */}
            <div className="flex items-center gap-2 p-2 xs:p-3 bg-blue-50 rounded-lg flex-1">
              <FaPhone className="text-blue-600 text-base flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-500">HR</p>
                <p className="text-sm font-semibold text-gray-900">9289001127</p>
              </div>
              <a
                href="tel:9289001127"
                className="flex-shrink-0 px-2 xs:px-3 py-1 bg-blue-600 text-white rounded text-xs font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap"
              >
                Call Now
              </a>
            </div>

            {/* Service Contact */}
            <div className="flex items-center gap-2 p-2 xs:p-3 bg-purple-50 rounded-lg flex-1">
              <FaPhone className="text-purple-600 text-base flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-500">Service</p>
                <p className="text-sm font-semibold text-gray-900">9289001127</p>
              </div>
              <a
                href="tel:9289001127"
                className="flex-shrink-0 px-2 xs:px-3 py-1 bg-purple-600 text-white rounded text-xs font-semibold hover:bg-purple-700 transition-colors whitespace-nowrap"
              >
                Call Now
              </a>
            </div>
          </div>

          {/* Bottom Row - Sales (Centered) */}
          <div className="flex justify-center">
            <div className="flex items-center gap-2 p-2 xs:p-3 bg-green-50 rounded-lg xs:max-w-sm flex-1 xs:flex-none">
              <FaPhone className="text-green-600 text-base flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-500">Sales</p>
                <p className="text-sm font-semibold text-gray-900">9315327809</p>
              </div>
              <a
                href="tel:9315327809"
                className="flex-shrink-0 px-2 xs:px-3 py-1 bg-green-600 text-white rounded text-xs font-semibold hover:bg-green-700 transition-colors whitespace-nowrap"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl ">Get in Touch</h2>
        <p className="lg:text-lg">
          We would love to hear from you. Please fill out the form below.
        </p>
        <div className="flex space-x-4 md:hidden mt-4">
          <a
            href="#"
            className="text-gray-600 text-xl hover:text-gray-400 transition-colors"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="text-gray-600 text-xl hover:text-gray-400 transition-colors"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-gray-600 text-xl hover:text-gray-400 transition-colors"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Importing the Contact Form */}
        <ContactForm />
      </section>
    </main>
  );
}
