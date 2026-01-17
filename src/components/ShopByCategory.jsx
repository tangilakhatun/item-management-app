"use client";

import { Gift, Droplet, Sparkle, Eye, Heart } from "lucide-react";


const categories = [
  { name: "Makeup", icon: <Sparkle className="h-8 w-8" />, color: "from-pink-500 to-rose-500" },
  { name: "Skincare", icon: <Droplet className="h-8 w-8" />, color: "from-blue-500 to-indigo-600" },
  { name: "Lip Care", icon: <Heart className="h-8 w-8" />, color: "from-red-400 to-pink-500" },
  { name: "Eye Makeup", icon: <Eye className="h-8 w-8" />, color: "from-blue-500 to-indigo-600" },
];


export default function ShopByCategory() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-14 space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Shop by Category
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our curated beauty categories to find your perfect product.
          </p>
        </div>

       
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="relative group bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center justify-center
              transition-all duration-300 hover:shadow-2xl cursor-pointer"
            >
             
              <div
                className={`flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br ${cat.color} text-white shadow-lg
                group-hover:scale-110 transition-transform`}
              >
                {cat.icon}
              </div>

              
              <h3 className="mt-5 text-lg font-semibold">{cat.name}</h3>

              
              <p className="mt-2 text-sm text-gray-500 text-center">
                Explore {cat.name.toLowerCase()} products
              </p>

             
              <div className="pointer-events-none absolute inset-0 rounded-3xl
                bg-gradient-to-tr from-white/20 via-transparent to-white/10
                opacity-0 group-hover:opacity-100 transition"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
