"use client";

import { useEffect } from "react";

export default function SupportPage() {
  useEffect(() => {
    // Redirect to email client
    window.location.href = "mailto:info@snugled.com";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <p className="text-gray-600">Redirecting to email...</p>
        <p className="text-gray-500 mt-2">
          If nothing happens, please email us at{" "}
          <a href="mailto:info@snugled.com" className="text-blue-600 hover:underline">
            info@snugled.com
          </a>
        </p>
      </div>
    </div>
  );
}
