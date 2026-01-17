"use client";

import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sophia L.",
    role: "Beauty Enthusiast",
    rating: 5,
    comment: "Absolutely love the makeup collection! The colors are vibrant and long-lasting.",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    name: "Emma R.",
    role: "Skincare Lover",
    rating: 4,
    comment: "The skincare products are gentle on my skin and give a radiant glow.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Jefair K.",
    role: "Makeup Artist",
    rating: 5,
    comment: "Premium quality and cruelty-free! These products are perfect for my clients.",
    image: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    name: "Ava M.",
    role: "Daily User",
    rating: 4,
    comment: "Fast delivery and amazing results. Definitely my go-to beauty store.",
    image: "https://randomuser.me/api/portraits/women/33.jpg"
  }
];

export default function Reviews() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        
        <div className="text-center mb-14 space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from beauty lovers who trust our premium makeup and skincare products.
          </p>
        </div>

       
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="relative group bg-white rounded-3xl p-6 shadow-lg
                hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center"
            >
             
              <img
                src={r.image}
                alt={r.name}
                className="h-16 w-16 rounded-full object-cover mb-4 shadow-md"
              />

             
              <div className="flex items-center gap-1 text-yellow-400 mb-2">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className={`h-4 w-4 ${idx < r.rating ? "fill-yellow-400" : "text-gray-300"}`} />
                ))}
              </div>

             
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                "{r.comment}"
              </p>

             
              <div>
                <h3 className="font-semibold text-gray-900">{r.name}</h3>
                <p className="text-gray-500 text-xs">{r.role}</p>
              </div>

              
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
