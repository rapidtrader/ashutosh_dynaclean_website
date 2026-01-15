"use client";

import { useEffect } from "react";

export default function TawkToChatWidget() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/688d93b7171f1719311e6015/1j1kgi239"; // ✅ Your actual script URL
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    document.body.appendChild(script);

    return () => {
      // Optional cleanup if needed
      document.body.removeChild(script);
    };
  }, []);

  return null; // This component doesn't render anything
}
