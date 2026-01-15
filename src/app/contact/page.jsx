import ContactForm from "@/components/Forms/ContactForm";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

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
