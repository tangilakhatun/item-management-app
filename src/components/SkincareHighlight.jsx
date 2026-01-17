"use client";

export default function SkincareHighlight() {
  return (
    <section className="relative py-20 bg-gray-50 rounded-2xl mx-6 md:mx-12 mt-16 overflow-hidden">
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9"
            alt="Skincare Product"
            className="w-full rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </div>

       
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Skincare Essentials for Radiant Skin
          </h2>
          <p className="text-gray-700 text-lg md:text-xl">
            Discover our premium, cruelty-free skincare products designed to hydrate, protect, and brighten your skin. Perfect for daily use.
          </p>
          <a
            href="/items"
            className="inline-flex items-center gap-2 rounded-full px-8 py-3
            bg-gradient-to-r from-blue-500 to-indigo-600
            text-white font-semibold shadow-lg
            hover:from-indigo-600 hover:to-blue-500 transition-all duration-300"
          >
            Shop Skincare →
          </a>
        </div>

      </div>
    </section>
  );
}
