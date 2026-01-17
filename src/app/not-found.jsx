"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6">
      <h1 className="text-7xl font-extrabold text-gray-900 mb-4">404</h1>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Page Not Found
      </h2>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        Oops! The page you are looking for does not exist. 
        It might have been removed or the URL is incorrect.
      </p>

      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-full px-6 py-3
          bg-gradient-to-r from-blue-500 to-indigo-600
          hover:from-indigo-600 hover:to-blue-500
          text-white font-semibold shadow-lg transition-all duration-300"
      >
        <ArrowLeft size={16} /> Back to Home
      </Link>
    </div>
  );
}
