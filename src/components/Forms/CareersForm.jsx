"use client";

import { useState, useEffect } from "react";
import Alert from "@/components/common/Alert";
import { useRouter } from "next/navigation";

export default function CareersForm({ selectedJobPost }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    jobPost: "",
    resume: null,
  });

  const [formErrors, setFormErrors] = useState({});
  const [touchedFields, setTouchedFields] = useState({});
  const [alert, setAlert] = useState({ type: "", message: "" });
  const router = useRouter();

  // Validation logic
  const validate = (field, value) => {
    switch (field) {
      case "name":
      case "email":
      case "address":
      case "jobPost":
        return value.trim() === "" ? "This field is required" : "";
      case "phone":
        if (!value) return "Phone number is required";
        if (!/^\d+$/.test(value)) return "Phone must contain only digits";
        if (value.length !== 10) return "Phone must be 10 digits";
        return "";
      case "resume":
        if (!value) return "Please upload your resume";
        return "";
      default:
        return "";
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouchedFields((prev) => ({ ...prev, [name]: true }));

    const error = validate(name, formData[name]);
    setFormErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "resume") {
      const file = files[0];

      // Validation: Only allow PDF and max 1MB
      if (file) {
        if (file.type !== "application/pdf") {
          setFormErrors((prev) => ({
            ...prev,
            resume: "Only PDF files are allowed",
          }));
          setFormData((prev) => ({ ...prev, resume: null }));
          return;
        }

        if (file.size > 1048576) {
          setFormErrors((prev) => ({
            ...prev,
            resume: "File size must be under 1MB",
          }));
          setFormData((prev) => ({ ...prev, resume: null }));
          return;
        }

        // If valid
        setFormData((prev) => ({ ...prev, resume: file }));
        setFormErrors((prev) => ({ ...prev, resume: "" }));
      } else {
        setFormData((prev) => ({ ...prev, resume: null }));
      }

      setTouchedFields((prev) => ({ ...prev, resume: true }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));

      if (touchedFields[name]) {
        const error = validate(name, value);
        setFormErrors((prev) => ({ ...prev, [name]: error }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = {};
    Object.keys(formData).forEach((field) => {
      const value = formData[field];
      const error = validate(field, value);
      if (error) errors[field] = error;
    });

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setTouchedFields({
        name: true,
        email: true,
        phone: true,
        address: true,
        jobPost: true,
        resume: true,
      });
      setAlert({
        type: "error",
        message: "Please fix the errors before submitting.",
      });
      return;
    }

    try {
      // Create FormData object to handle file upload
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
      });

      const res = await fetch("/api/careers", {
        method: "POST",
        body: data,
      });

      const result = await res.json();
      if (res.ok) {
        router.push("/thank-you");
      } else {
        setAlert({
          type: "error",
          message: result.message || "Submission failed.",
        });
      }
    } catch (err) {
      console.error(err);
      setAlert({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    }
  };

  useEffect(() => {
    if (selectedJobPost) {
      setFormData((prev) => ({
        ...prev,
        jobPost: selectedJobPost,
      }));
      setTouchedFields((prev) => ({
        ...prev,
        jobPost: true,
      }));
      setFormErrors((prev) => ({
        ...prev,
        jobPost: "",
      }));
    }
  }, [selectedJobPost]);

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 mt-6"
      encType="multipart/form-data"
    >
      <Alert type={alert.type} message={alert.message} />

      {/* Name and Email */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            onBlur={handleBlur}
            placeholder="Name"
            className="w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
          />
          {touchedFields.name && formErrors.name && (
            <p className="text-sm text-red-500 mt-1">{formErrors.name}</p>
          )}
        </div>

        <div className="w-full md:w-1/2">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            onBlur={handleBlur}
            placeholder="Number"
            className="w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
          />
          {touchedFields.phone && formErrors.phone && (
            <p className="text-sm text-red-500 mt-1">{formErrors.phone}</p>
          )}
        </div>
      </div>

      <div className="w-full ">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          onBlur={handleBlur}
          placeholder="Email"
          className="w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
        />
        {touchedFields.email && formErrors.email && (
          <p className="text-sm text-red-500 mt-1">{formErrors.email}</p>
        )}
      </div>

      <div className="w-full ">
        <label
          htmlFor="address"
          className="block text-sm font-medium text-gray-700"
        >
          Address
        </label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          onBlur={handleBlur}
          placeholder="Address"
          className="w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
        />
        {touchedFields.address && formErrors.address && (
          <p className="text-sm text-red-500 mt-1">{formErrors.address}</p>
        )}
      </div>

      {/* Job Post */}
      {/* Job Post */}
      <div className="w-full">
        <label
          htmlFor="jobPost"
          className="block text-sm font-medium text-gray-700"
        >
          Job Post
        </label>
        <input
          type="text"
          name="jobPost"
          value={formData.jobPost}
          readOnly
          placeholder="Select an opening"
          className="w-full p-3 mt-1 border border-gray-300 rounded-md bg-gray-100 shadow-sm"
        />
        {touchedFields.jobPost && formErrors.jobPost && (
          <p className="text-sm text-red-500 mt-1">{formErrors.jobPost}</p>
        )}
      </div>

      {/* Upload Resume */}
      <div className="w-full">
        <label
          htmlFor="resume"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Upload Resume
        </label>

        <div className="relative cursor-pointer">
          <input
            type="file"
            name="resume"
            id="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleInputChange}
            onBlur={handleBlur}
            className=" block w-full cursor-pointer text-sm text-gray-700
                 file:mr-4 file:py-2 file:px-4
                 file:rounded-md file:border-0
                 file:text-sm file:font-medium
                 file:bg-blue-50 file:text-blue-700
                 hover:file:bg-blue-100 transition "
          />
        </div>

        {touchedFields.resume && formErrors.resume && (
          <p className="text-sm text-red-500 mt-1">{formErrors.resume}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="w-full text-center mt-35 ">
        <button
          type="submit"
          className="cursor-pointer w-full bg-gray-600 text-white py-3 rounded-md hover:bg-gray-700 focus:ring-2 focus:ring-blue-500"
        >
          Apply Now
        </button>
      </div>
    </form>
  );
}
