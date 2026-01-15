"use client";

import CareersForm from "@/components/Forms/CareersForm"; // Adjust this to your actual form component
import JobRoleSelector from "@/components/Careers/JobRoleSelector"; // Adjust this to your actual form component
// import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { useState } from "react";

export default function Careers() {
  const [selectedJobPost, setSelectedJobPost] = useState("");
  return (
    <main className="flex flex-col md:flex-row items-start justify-center px-1 lg:px-35 bg-gray-50 md:my-28 pt-10 ">
      {/* Left Section (Form Component) */}
      <section className="w-full md:w-4/5 flex flex-col p-6 space-y-4 ">
        <h2 className="text-3xl md:text-4xl">Join Our Team</h2>
        <p className="lg:text-lg">
          We’re excited to meet talented people like you. Please fill out the
          form below to apply.
        </p>

        {/* Social Icons visible only on small screens */}
        <div className="lg:space-x-4 flex md:hidden mt-4">
          <JobRoleSelector onSelect={setSelectedJobPost} />
        </div>

        {/* Importing the Careers Form */}
        <CareersForm selectedJobPost={selectedJobPost} />
      </section>

      {/* Right Section (Image + Text + Social Icons - Hidden on Mobile) */}
      <section
        className="hidden md:flex w-full  md:h-[37rem] flex-col justify-end text-gray-600 rounded-2xl "
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)), url('/Careers/test.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="p-6 text-center md:text-left">
          {/* <h2 className="text-3xl">Careers</h2> */}
          <p className="mt-4 text-white text-3xl">
            We believe in hiring smart, diverse, and interesting people and
            giving them full autonomy to do the best work of their careers. We'd
            love to chat to you.
          </p>
          <div className="space-x-4 hidden md:flex mt-6">
            <JobRoleSelector onSelect={setSelectedJobPost} />
          </div>
        </div>
      </section>
    </main>
  );
}
