"use client";

import { useState } from "react";
import Alert from "@/components/common/Alert";
import { useRouter } from "next/navigation";

const products = [
  { name: "Scrubber Drier" },
  { name: "Escalator Cleaner" },
  { name: "Sweeper" },
  { name: "High Pressure Jet Washer" },
  { name: "Diesel Road Sweeper Truck" },
  { name: "Electric Road Sweeper Truck" },
  { name: "Vaccume Cleaner" },
  { name: "Single Disc Scrubber" },
  { name: "Scooter Mop" },
  { name: "Steam Cleaner" },
  { name: "Hand Scrubber" },
  { name: "Carpet Cleaner" },
];

const productModels = {
  "Scrubber Drier": [
    "Drier DB 6070T",
    "Drier DB 9050P",
    "Drier DMOP 15P",
    "Drier DRO 100P",
    "Drier DRO 100T",
    "Drier DRO 200T",
    "Drier DRO 8085",
    "Drier DYNA 40",
    "Drier DYNA 20",
  ],
  "Escalator Cleaner": ["D-510ES"],
  Sweeper: ["DRS 90T", "DRS 180T", "DS2 55", "DSE 55"],
  "High Pressure Jet Washer": ["DJ 200", "DJB 200", "DJE 18", "DJE 30"],
  "Diesel Road Sweeper Truck": [
    "DTMS 1000",
    "DTMS 2000",
    "DTMS 3000",
    "DTMS 4000",
    "DTMS 5000",
    "DTMS 6000",
  ],
  "Electric Road Sweeper Truck": [
    "DTMS 600",
    "DTMS 1000",
    "DTMS 2000",
    "DTMS 3000",
    "DTMS 4000",
    "DTMS 5000",
    "DTMS 6000",
  ],
  "Vaccume Cleaner": ["Back Pack", "DV 15", "DV 30", "DV 60", "DV 80"],
  "Single Disc Scrubber": ["D 15P", "D 20P", "D 25P", "DH-2P"],
  "Scooter Mop": ["DMS 115P"],
  "Steam Cleaner": ["D Steam2"],
  "Hand Scrubber": ["HD-15"],
  "Carpet Cleaner": ["DSC-30"],
};

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    model: "",
    address: "",
    msg: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [touchedFields, setTouchedFields] = useState({});
  const [alert, setAlert] = useState({ type: "", message: "" });
  const router = useRouter();

  const validate = (field, value) => {
    switch (field) {
      case "name":
      case "email":
      case "product":
      case "msg":
      case "address":
        return value.trim() === "" ? "This field is required" : "";
      case "phone":
        if (!value) return "Phone number is required";
        if (!/^\d+$/.test(value)) return "Phone must contain only digits";
        if (value.length !== 10) return "Phone must be 10 digits";
        return "";
      case "model":
        if (formData.product && value.trim() === "")
          return "Please select a model";
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
    const { name, value } = e.target;

    if (name === "product") {
      setFormData((prev) => ({ ...prev, product: value, model: "" }));
      setTouchedFields((prev) => ({ ...prev, model: false, product: true }));
      setFormErrors((prev) => ({ ...prev, model: "", product: "" }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (touchedFields[name]) {
      const error = validate(name, value);
      setFormErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = {};
    Object.keys(formData).forEach((field) => {
      const error = validate(field, formData[field]);
      if (error) errors[field] = error;
    });

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setTouchedFields(
        Object.keys(formData).reduce((acc, field) => {
          acc[field] = true;
          return acc;
        }, {})
      );
      setAlert({
        type: "error",
        message: "Please fix the errors before submitting.",
      });
      return;
    }

    try {
      const res = await fetch("/api/service", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
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

  return (
    <form onSubmit={handleSubmit} className="space-y-6 mt-6 mx-auto px-4">
      <Alert type={alert.type} message={alert.message} />

      {/* Name & Email */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Name */}
        <div className="w-full md:w-1/2">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            onBlur={handleBlur}
            placeholder="Your full name"
            className="w-full p-3 mt-1 border border-gray-300 rounded-md"
          />
          {touchedFields.name && formErrors.name && (
            <p className="text-sm text-red-500 mt-1">{formErrors.name}</p>
          )}
        </div>

        {/* Email */}
        <div className="w-full md:w-1/2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            onBlur={handleBlur}
            placeholder="Your email"
            className="w-full p-3 mt-1 border border-gray-300 rounded-md"
          />
          {touchedFields.email && formErrors.email && (
            <p className="text-sm text-red-500 mt-1">{formErrors.email}</p>
          )}
        </div>
      </div>

      {/* Phone & Product */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2">
          <label htmlFor="phone">Phone</label>
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            onBlur={handleBlur}
            placeholder="Your phone number"
            className="w-full p-3 mt-1 border border-gray-300 rounded-md"
          />
          {touchedFields.phone && formErrors.phone && (
            <p className="text-sm text-red-500 mt-1">{formErrors.phone}</p>
          )}
        </div>

        <div className="w-full md:w-1/2">
          <label htmlFor="product">Products</label>
          <select
            name="product"
            value={formData.product}
            onChange={handleInputChange}
            onBlur={handleBlur}
            className="w-full p-3 mt-1 border border-gray-300 rounded-md"
          >
            <option value="">Select a product</option>
            {products.map((product) => (
              <option key={product.name} value={product.name}>
                {product.name}
              </option>
            ))}
          </select>
          {touchedFields.product && formErrors.product && (
            <p className="text-sm text-red-500 mt-1">{formErrors.product}</p>
          )}
        </div>
      </div>

      {/* Model Dropdown */}
      <div className="w-full md:w-1/2">
        <label htmlFor="model">Model</label>
        <select
          name="model"
          value={formData.model}
          onChange={handleInputChange}
          onBlur={handleBlur}
          disabled={!formData.product}
          className={`w-full p-3 mt-1 border rounded-md ${
            !formData.product ? "bg-gray-100" : "border-gray-300"
          }`}
        >
          <option value="">
            {formData.product ? "Select a model" : "Select a product first"}
          </option>
          {formData.product &&
            productModels[formData.product]?.map((model) => (
              <option key={model} value={model}>
                {model}
              </option>
            ))}
        </select>
        {touchedFields.model && formErrors.model && (
          <p className="text-sm text-red-500 mt-1">{formErrors.model}</p>
        )}
      </div>

      {/* Address */}
      <div className="w-full">
        <label htmlFor="address">Address</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          onBlur={handleBlur}
          placeholder="Your address"
          rows="2"
          className="w-full p-3 mt-1 border border-gray-300 rounded-md"
        />
        {touchedFields.address && formErrors.address && (
          <p className="text-sm text-red-500 mt-1">{formErrors.address}</p>
        )}
      </div>

      {/* Message */}
      <div className="w-full">
        <label htmlFor="msg">Issue Description</label>
        <textarea
          name="msg"
          value={formData.msg}
          onChange={handleInputChange}
          onBlur={handleBlur}
          placeholder="Please describe your issue"
          rows="4"
          className="w-full p-3 mt-1 border border-gray-300 rounded-md"
        />
        {touchedFields.msg && formErrors.msg && (
          <p className="text-sm text-red-500 mt-1">{formErrors.msg}</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-gray-700 text-white font-semibold px-6 py-3 rounded-md hover:bg-gray-800"
      >
        Submit
      </button>
    </form>
  );
}
