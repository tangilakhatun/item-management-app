"use client";

import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export default function Error({ error, reset }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6">
      <AlertTriangle className="h-12 w-12 text-red-500 mb-4" />
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
        Something went wrong
      </h1>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        Sorry, an unexpected error has occurred. Try refreshing the page.
      </p>

      <button
        onClick={() => reset()}
        className="inline-flex items-center gap-2 rounded-full px-6 py-3
          bg-gradient-to-r from-blue-500 to-indigo-600
          hover:from-indigo-600 hover:to-blue-500
          text-white font-semibold shadow-lg transition-all duration-300"
      >
        Retry
      </button>
    </div>
  );
}
