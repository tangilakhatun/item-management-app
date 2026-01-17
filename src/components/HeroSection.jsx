"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348",
      tag: "MAKEUP COLLECTION",
      title: "Glow Like Never Before",
      desc: "Discover premium makeup essentials designed to enhance your natural beauty and boost confidence every day."
    },
    {
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9",
      tag: "SKINCARE ESSENTIALS",
      title: "Skincare That Truly Cares",
      desc: "Gentle, dermatologist-tested skincare products for healthy, radiant, and glowing skin."
    },
    {
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
      tag: "CLEAN BEAUTY",
      title: "Beauty That Feels Natural",
      desc: "Cruelty-free, skin-friendly beauty products crafted for comfort, care, and confidence."
    }
  ];

  return (
    <div className="w-full rounded-3xl overflow-hidden shadow-2xl">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4500 }}
        pagination={{ clickable: true }}
        loop
        className="h-[460px]"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              className="h-full bg-cover bg-center relative flex items-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
             
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

             
              <div className="relative z-10 max-w-3xl px-8 md:px-12 text-white space-y-5">
                
                
                <span className="inline-block text-xs tracking-widest font-semibold px-4 py-1 rounded-full
                  bg-white/20 backdrop-blur">
                  {slide.tag}
                </span>

                
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                  {slide.title}
                </h1>

                <p className="text-sm md:text-lg text-gray-200 max-w-xl">
                  {slide.desc}
                </p>

                
                <button
                  className="mt-4 inline-flex items-center gap-2 rounded-full px-7 py-3.5
                 bg-gradient-to-r from-pink-500 to-rose-500
            hover:from-rose-500 hover:to-pink-500
                  transition-all duration-300 shadow-xl text-sm font-semibold"
                >
                  Shop Now <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
