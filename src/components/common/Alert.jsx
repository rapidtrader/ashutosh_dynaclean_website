"use client";

import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaTimesCircle,
} from "react-icons/fa";

const alertStyles = {
  success: "bg-green-100 text-green-700 border-green-400",
  error: "bg-red-100 text-red-700 border-red-400",
  message: "bg-yellow-100 text-yellow-700 border-yellow-400",
};

const alertIcons = {
  success: <FaCheckCircle className="text-green-600 text-lg mr-2" />,
  error: <FaTimesCircle className="text-red-600 text-lg mr-2" />,
  message: <FaExclamationTriangle className="text-yellow-600 text-lg mr-2" />,
};

export default function Alert({ type = "message", message }) {
  if (!message) return null;

  return (
    <div
      className={`flex items-center p-4 border rounded-md ${alertStyles[type]} mt-4`}
    >
      {alertIcons[type]}
      <span className="text-sm">{message}</span>
    </div>
  );
}
