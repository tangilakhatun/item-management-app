
"use client";

export default function SpecialOffer() {
  return (
   <section className="relative py-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl mx-6 md:mx-12 mt-16 overflow-hidden">


  <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
  <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

  
  <div className="relative max-w-7xl mx-auto text-center text-white space-y-6">
    <h2 className="text-4xl md:text-5xl font-extrabold">
      Limited Time Beauty Sale
    </h2>
    <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
      Get up to <span className="font-bold">30% off</span> on our top skincare & makeup products.  
      Enhance your glow with premium, cruelty-free beauty essentials.
    </p>
    <a
      href="/items"
      className="inline-flex items-center gap-2 rounded-full px-8 py-3
      bg-white text-blue-600 font-semibold shadow-lg
      hover:bg-white/90 hover:text-blue-700 transition-all duration-300"
    >
      Shop Now →
    </a>
  </div>
</section>

  );
}
