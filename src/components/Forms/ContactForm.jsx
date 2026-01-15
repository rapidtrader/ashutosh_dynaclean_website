"use client";

import { useState } from "react";
import Alert from "@/components/common/Alert";
import { useRouter } from "next/navigation";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    products: [], // now an array for multiple selections
    msg: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [touchedFields, setTouchedFields] = useState({});
  const [alert, setAlert] = useState({ type: "", message: "" });
  const router = useRouter();

  // Validation
  const validate = (field, value) => {
    switch (field) {
      case "name":
      case "email":
      case "msg":
        return value.trim() === "" ? "This field is required" : "";
      case "products":
        return value.length === 0 ? "Please select at least one product" : "";
      case "phone":
        if (!value) return "Phone number is required";
        if (!/^\d+$/.test(value)) return "Phone must contain only digits";
        if (value.length !== 10) return "Phone must be 10 digits";
        return "";
      default:
        return "";
    }
  };

  // On blur, mark field as touched and validate
  const handleBlur = (e) => {
    const { name } = e.target;
    setTouchedFields((prev) => ({ ...prev, [name]: true }));

    const error = validate(name, formData[name]);
    setFormErrors((prev) => ({ ...prev, [name]: error }));
  };

  // Input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (touchedFields[name]) {
      const error = validate(name, value);
      setFormErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  // Product multi-select change
  const handleProductChange = (e) => {
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );

    setFormData((prev) => ({ ...prev, products: selectedOptions }));

    if (touchedFields.products) {
      const error = validate("products", selectedOptions);
      setFormErrors((prev) => ({ ...prev, products: error }));
    }
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = {};
    Object.keys(formData).forEach((field) => {
      const error = validate(field, formData[field]);
      if (error) errors[field] = error;
    });

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setTouchedFields({
        name: true,
        email: true,
        phone: true,
        products: true,
        msg: true,
      });
      setAlert({
        type: "error",
        message: "Please fix the errors before submitting.",
      });
      return;
    }

    try {
      const res = await fetch("/api/contact", {
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
    <form onSubmit={handleSubmit} className="space-y-6 mt-6">
      <Alert type={alert.type} message={alert.message} />

      {/* Name and Email */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2">
          <label className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            onBlur={handleBlur}
            placeholder="Your full name"
            className="w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
          />
          {touchedFields.name && formErrors.name && (
            <p className="text-sm text-red-500 mt-1">{formErrors.name}</p>
          )}
        </div>

        <div className="w-full md:w-1/2">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            onBlur={handleBlur}
            placeholder="Your email"
            className="w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
          />
          {touchedFields.email && formErrors.email && (
            <p className="text-sm text-red-500 mt-1">{formErrors.email}</p>
          )}
        </div>
      </div>

      {/* Phone and Products */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2">
          <label className="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            onBlur={handleBlur}
            placeholder="Your phone number"
            className="w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
          />
          {touchedFields.phone && formErrors.phone && (
            <p className="text-sm text-red-500 mt-1">{formErrors.phone}</p>
          )}
        </div>

        {/* Products - Replaced multi-select with checkboxes */}
        <div className="w-full md:w-1/2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Products
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-2 border border-gray-300 rounded-md">
            {[
              "Scrubber Drier",
              "Escalator Cleaner",
              "Sweeper",
              "High Pressure Jet Washer",
              "Diesel Road Sweeper Truck",
              "Electric Road Sweeper Truck",
              "Vacuum Cleaner",
              "Single Disc Scrubber",
              "Scooter Mop",
              "Steam Cleaner",
              "Hand Scrubber",
              "Carpet Cleaner"
            ].map((product) => (
              <label key={product} className="flex items-center space-x-2 text-sm">
                <input
                  type="checkbox"
                  name="products"
                  value={product}
                  checked={formData.products.includes(product)}
                  onChange={(e) => {
                    const { value, checked } = e.target;
                    const updatedProducts = checked
                      ? [...formData.products, value]
                      : formData.products.filter((p) => p !== value);

                    setFormData((prev) => ({ ...prev, products: updatedProducts }));

                    if (touchedFields.products) {
                      const error = validate("products", updatedProducts);
                      setFormErrors((prev) => ({ ...prev, products: error }));
                    }
                  }}
                />
                <span>{product}</span>
              </label>
            ))}
          </div>

          {touchedFields.products && formErrors.products && (
            <p className="text-sm text-red-500 mt-1">{formErrors.products}</p>
          )}
        </div>
        
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Describe what you need
        </label>
        <textarea
          name="msg"
          value={formData.msg}
          onChange={handleInputChange}
          onBlur={handleBlur}
          placeholder="Tell us about your project"
          rows="5"
          className="w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
        />
        {touchedFields.msg && formErrors.msg && (
          <p className="text-sm text-red-500 mt-1">{formErrors.msg}</p>
        )}
      </div>

      {/* Submit */}
      <div className="text-center">
        <button
          type="submit"
          className="w-full bg-gray-600 text-white py-3 rounded-md hover:bg-gray-700 focus:ring-2 focus:ring-blue-500"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
