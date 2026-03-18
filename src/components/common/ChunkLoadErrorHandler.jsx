"use client";

import { useEffect, useState } from "react";

/**
 * Catches ChunkLoadError in production (happens when deployment changes chunks
 * but user has cached old JS). Shows a refresh prompt instead of breaking.
 */
export default function ChunkLoadErrorHandler() {
  const [showRefresh, setShowRefresh] = useState(false);

  useEffect(() => {
    const isChunkLoadError = (msg, reason) => {
      const str = String(msg || reason?.message || reason || "");
      return (
        str.includes("ChunkLoadError") ||
        str.includes("Loading chunk") ||
        str.includes("Loading CSS chunk") ||
        reason?.name === "ChunkLoadError"
      );
    };

    const handleError = (event) => {
      if (isChunkLoadError(event?.message, event?.error)) {
        setShowRefresh(true);
        event.preventDefault?.();
        event.stopPropagation?.();
        return true;
      }
      return false;
    };

    const handleUnhandledRejection = (event) => {
      if (isChunkLoadError(event?.reason?.message, event?.reason)) {
        setShowRefresh(true);
        event.preventDefault();
      }
    };

    window.addEventListener("error", handleError);
    window.addEventListener("unhandledrejection", handleUnhandledRejection);

    return () => {
      window.removeEventListener("error", handleError);
      window.removeEventListener("unhandledrejection", handleUnhandledRejection);
    };
  }, []);

  const handleRefresh = () => {
    window.location.reload();
  };

  if (!showRefresh) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
      role="alert"
    >
      <div className="mx-4 max-w-md rounded-xl bg-white p-6 shadow-2xl">
        <h3 className="font-semibold text-gray-900">Update available</h3>
        <p className="mt-2 text-sm text-gray-600">
          A new version of the site is available. Please refresh to load the latest content.
        </p>
        <button
          onClick={handleRefresh}
          className="mt-4 w-full rounded-lg bg-blue-600 px-4 py-2.5 font-medium text-white hover:bg-blue-700 transition-colors"
        >
          Refresh page
        </button>
      </div>
    </div>
  );
}
