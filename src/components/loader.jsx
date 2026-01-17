"use client";

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/80 z-50">
      <div className="flex flex-col items-center">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        {/* Optional Text */}
        <p className="mt-4 text-gray-700 font-semibold text-lg">Loading...</p>
      </div>
    </div>
  );
}
