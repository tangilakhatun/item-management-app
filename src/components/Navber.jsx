"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const pathname = usePathname(); 

  useEffect(() => {
    const token = document.cookie.includes("auth=true");
    setIsLoggedIn(token);
  }, []);

  const handleLogout = () => {
    document.cookie = "auth=; path=/; max-age=0";
    setIsLoggedIn(false);
    router.push("/login");
  };

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Items", href: "/items" },
  ];

  return (
    <nav className="bg-white  shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

  
        <Link href="/" className="text-2xl font-bold text-blue-600">
          MyShop
        </Link>

        
        <div className="hidden md:flex gap-8 font-medium">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-2 py-1 transition ${
                pathname === link.href
                  ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Login / Logout */}
        <div className="hidden md:block">
          {!isLoggedIn ? (
            <Link
              href="/login"
              className="px-6 py-2 rounded-full text-white font-semibold
              bg-gradient-to-r from-blue-500 to-indigo-600
              hover:from-indigo-600 hover:to-blue-600 transition"
            >
              Login
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="px-6 py-2 rounded-full bg-red-500 text-white font-semibold hover:bg-red-600 transition"
            >
              Logout
            </button>
          )}
        </div>

        
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-5 space-y-4">

          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block px-2 py-1 transition ${
                pathname === link.href
                  ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {!isLoggedIn ? (
            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="block text-center py-2 rounded-lg text-white font-semibold
              bg-gradient-to-r from-blue-500 to-indigo-600"
            >
              Login
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="w-full py-2 rounded-lg bg-red-500 text-white font-semibold"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
