
"use client";

import { useEffect, useState } from "react";
import ItemCard from "@/components/itemCard";
import { Search } from "lucide-react";
import Loader from "@/components/loader";

export default function ItemsPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true); // ✅ add loading state
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("all");

  useEffect(() => {
    setLoading(true); // start loading
    fetch("https://nextjs-first-server-wheat.vercel.app/items")
      .then(res => res.json())
      .then(data => setItems(data))
      .finally(() => setLoading(false)); // stop loading
  }, []);

  if (loading) return <Loader />; // show loader while fetching

  const filteredItems = items
    .filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter(item =>
      category === "all" ? true : item.category === category
    )
    .sort((a, b) => {
      if (sort === "low") return a.price - b.price;
      if (sort === "high") return b.price - a.price;
      return 0;
    });

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">All Products</h1>
        <p className="text-sm text-gray-500">
          {filteredItems.length} items found
        </p>
      </div>

      {/* Search, Category, Sort */}
      <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col md:flex-row gap-4 items-center">
        
        <div className="relative flex-1">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-full border focus:ring-2 focus:ring-indigo-500 outline-none"
          />
        </div>

        <select
          value={category}
          onChange={e => setCategory(e.target.value)}
          className="rounded-full border px-4 py-2 text-sm focus:ring-2 focus:ring-indigo-500"
        >
          <option value="all">All Categories</option>
          <option value="makeup">Makeup</option>
          <option value="skincare">Skincare</option>
          <option value="accessories">Accessories</option>
        </select>

        <select
          value={sort}
          onChange={e => setSort(e.target.value)}
          className="rounded-full border px-4 py-2 text-sm focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Sort by</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItems.map(item => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
