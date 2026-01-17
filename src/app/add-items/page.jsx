"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Image, Tag, DollarSign, List, PlusCircle } from "lucide-react";

export default function AddItemPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const itemData = {
      name: formData.get("name"),
      category: formData.get("category"),
      description: formData.get("description"),
      price: parseFloat(formData.get("price")) || 0,
      demoUrl: formData.get("demoUrl"),
      image: formData.get("image"),
      tags: formData.get("tags")?.split(",").map(t => t.trim()) || [],
      features: formData.get("features")?.split(",").map(f => f.trim()) || [],
      rating: parseFloat(formData.get("rating")) || 0,
      reviews: parseInt(formData.get("reviews")) || 0,
    };

    try {
      const res = await fetch("http://localhost:5000/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(itemData),
      });

      if (res.ok) {
        setToast(true);
        setTimeout(() => setToast(false), 3000);
        e.target.reset();
      } else {
        alert("Failed to add item");
      }
    } catch (err) {
      alert("Error: " + err.message);
    }

    setLoading(false);
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">
        Add New Item
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-2xl shadow-lg space-y-6"
      >
       
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Product Name *
          </label>
          <div className="relative">
            <List className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              name="name"
              placeholder="Enter product name"
              required
              className="w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>

       
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Category *
          </label>
          <select
            name="category"
            required
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="">Select Category</option>
            <option value="Makeup">Makeup</option>
            <option value="Skincare">Skincare</option>
            <option value="Haircare">Haircare</option>
            <option value="Tools">Tools</option>
          </select>
        </div>

       
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Description *
          </label>
          <textarea
            name="description"
            rows={4}
            placeholder="Describe your product..."
            required
            className="w-full px-4 py-3 border rounded-xl resize-none focus:ring-2 focus:ring-blue-500 outline-none"
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Price (USD) *
          </label>
          <div className="relative">
            <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="number"
              name="price"
              step="0.01"
              placeholder="$49.99"
              required
              className="w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>

      
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Demo URL (Optional)
          </label>
          <input
            type="url"
            name="demoUrl"
            placeholder="https://demo.example.com"
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

      
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Product Image
          </label>
          <div className="flex gap-4 items-center">
            <button
              type="button"
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-xl hover:bg-gray-200 transition"
            >
              <Image className="h-5 w-5 text-gray-600" /> Click to upload
            </button>
            <input
              type="url"
              name="image"
              placeholder="Or enter image URL"
              className="flex-1 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Tags
          </label>
          <input
            type="text"
            name="tags"
            placeholder="Add tags (comma separated)"
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Features
          </label>
          <input
            type="text"
            name="features"
            placeholder="Add features (comma separated)"
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

       
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Rating
            </label>
            <input
              type="number"
              name="rating"
              min="0"
              max="5"
              step="0.1"
              placeholder="4.5"
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Reviews Count
            </label>
            <input
              type="number"
              name="reviews"
              min="0"
              placeholder="100"
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>

        {/* Add Product Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-full px-6 py-3 text-white font-semibold
          bg-gradient-to-r from-blue-500 to-indigo-600
          hover:from-indigo-600 hover:to-blue-500
          transition-all duration-300 shadow-lg"
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>

      {/* TOAST */}
      {toast && (
        <div className="fixed bottom-5 right-5 bg-green-500 text-white px-6 py-4 rounded-xl shadow-lg animate-bounce">
          Product added successfully!
        </div>
      )}
    </div>
  );
}
