"use client";

import {
  Sparkles,
  Leaf,
  ShieldCheck,
  Truck,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Sparkles className="h-7 w-7" />,
      title: "Premium Quality",
      desc: "High-quality makeup and skincare crafted to deliver flawless results with every use."
    },
    {
      icon: <Leaf className="h-7 w-7" />,
      title: "Skin-Friendly",
      desc: "Dermatologist-tested formulas suitable for all skin types, even sensitive skin."
    },
    {
      icon: <ShieldCheck className="h-7 w-7" />,
      title: "Quality Assured",
      desc: "Carefully tested products ensuring safety, consistency, and long-lasting beauty."
    },
    {
      icon: <Truck className="h-7 w-7" />,
      title: "Fast & Free Delivery",
      desc: "Enjoy free shipping on orders over $100 with safe and secure packaging."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        
        <div className="text-center mb-14 space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Why Choose Our Beauty Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience premium beauty solutions designed to enhance your natural glow with confidence and care.
          </p>
        </div>

        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, i) => (
            <div
              key={i}
              className="group relative rounded-3xl p-8
              bg-white/70 backdrop-blur
              border border-gray-200
              shadow-lg hover:shadow-2xl
              transition-all duration-300"
            >
             
              <div
                className="flex items-center justify-center h-14 w-14 rounded-full
                bg-gradient-to-br from-blue-500 to-indigo-600
                text-white shadow-lg
                group-hover:scale-110 transition"
              >
                {item.icon}
              </div>

              
              <h3 className="mt-6 text-lg font-semibold">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>

              
              <div className="pointer-events-none absolute inset-0 rounded-3xl
                bg-gradient-to-tr from-white/20 via-transparent to-white/10
                opacity-0 group-hover:opacity-100 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
