"use client";

import { useEffect } from "react";

export default function BhashiniLoader() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://translation-plugin.bhashini.co.in/v3/website_translation_utility.js";
    script.async = true;
    script.setAttribute("language-icon-color", "#020000ff"); // Optional

    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return null;
}
