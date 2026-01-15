"use client";
import { useEffect } from "react";

export default function ChatbaseWidget() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      (function () {
        if (!window.chatbase || window.chatbase("getState") !== "initialized") {
          window.chatbase = (...args) => {
            if (!window.chatbase.q) window.chatbase.q = [];
            window.chatbase.q.push(args);
          };
          window.chatbase = new Proxy(window.chatbase, {
            get(target, prop) {
              if (prop === "q") return target.q;
              return (...args) => target(prop, ...args);
            },
          });
        }

        const onLoad = function () {
          const script = document.createElement("script");
          script.src = "https://www.chatbase.co/embed.min.js";
          script.id = "r64Knpr8Ssyih7dHqeRYp"; // Your actual Chatbase Agent ID
          script.domain = "www.chatbase.co";
          document.body.appendChild(script);

          // Customize appearance after short delay to ensure script loads
          setTimeout(() => {
            if (window.chatbase) {
              window.chatbase("setConfig", {
                chatbotName: "DynaClean",
                // Widget Appearance
                accentColor: "#e60000", // red
                // Optional
                fontFamily: "Arial, sans-serif",
                botMessageColor: "#f8d7da",
                botMessageTextColor: "#5a0000",
                userMessageColor: "#e60000",
                userMessageTextColor: "#fff",
              });
            }
          }, 1000);
        };

        if (document.readyState === "complete") {
          onLoad();
        } else {
          window.addEventListener("load", onLoad);
        }
      })();
    }
  }, []);

  return null;
}
