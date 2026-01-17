"use client";

import Link from "next/link";
import { Instagram, Facebook, Twitter, Youtube, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Branding */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">BeautyStore</h2>
          <p className="text-gray-400 text-sm max-w-xs">
            Premium makeup & skincare products curated for everyday beauty. 
            Trust, care, and quality in every order.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4 mt-2">
            <a href="#" className="hover:text-pink-500 transition">
              <Instagram size={24} />
            </a>
            <a href="#" className="hover:text-blue-500 transition">
              <Facebook size={24} />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <Twitter size={24} />
            </a>
            <a href="#" className="hover:text-red-500 transition">
              <Youtube size={24} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-white transition">Home</Link>
            </li>
            <li>
              <Link href="/items" className="hover:text-white transition">Items</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition">About</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition">Services</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Customer Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Customer</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:text-white transition">FAQ</Link></li>
            <li><Link href="#" className="hover:text-white transition">Shipping & Returns</Link></li>
            <li><Link href="#" className="hover:text-white transition">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-white transition">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
          <p className="text-gray-400 text-sm mb-3">
            Get latest updates, promotions & beauty tips.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-l-xl outline-none border-white focus:ring-2 focus:ring-pink-500"
            />
            <button className="bg-pink-500 hover:from-rose-500 hover:to-pink-500 px-4 rounded-r-xl text-white font-semibold transition">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} BeautyStore. All rights reserved.
      </div>
    </footer>
  );
}
