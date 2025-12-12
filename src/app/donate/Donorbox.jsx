"use client";

import { useEffect } from "react";

export default function Donorbox() {
  useEffect(() => {
    // Inject Donorbox script only once
    const script = document.createElement("script");
    script.src = "https://donorbox.org/widget.js";
    script.setAttribute("paypalExpress", "true");
    script.async = true;

    document.body.appendChild(script);
  }, []);

  return (
    <iframe
      src="https://donorbox.org/embed/herveg-05?"
      name="donorbox"
      allowPaymentRequest
      frameBorder="0"
      seamless="seamless"
      scrolling="no"
      height="900px"
      width="100%"
      style={{
        maxWidth: "500px",
        minWidth: "250px",
        maxHeight: "none",
      }}
      allow="payment"
    />
  );
}
