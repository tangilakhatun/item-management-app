
import { Truck, ArrowLeft, ArrowRight, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getItem(id) {
  const res = await fetch(`https://nextjs-first-server-wheat.vercel.app/items/${id}`, { cache: "no-store" });
  if (!res.ok) return null;
  return res.json();
}

export default async function ItemDetails({ params }) {
  const { id } = await params;
  const item = await getItem(id);

  if (!item) return notFound();

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      
      <div className="flex justify-between items-center text-gray-500 text-sm">
        <div></div> 
        <Link href="/items" className="flex items-center gap-1 hover:underline font-medium">
          <ArrowLeft size={16} /> Back to Products
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-10 bg-white rounded-2xl shadow-lg overflow-hidden">
       
        <div className="md:w-1/2 flex flex-col gap-4 p-4">
          <img
            src={item.image || "https://via.placeholder.com/500"}
            alt={item.name}
            className="w-full h-96 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-500"
          />
        </div>

       
        <div className="md:w-1/2 p-6 flex flex-col justify-between space-y-6">
          <div className="space-y-3">
           
            <h1 className="text-3xl font-bold text-gray-900">{item.name}</h1>

           
            {item.brand && <p className="text-sm text-gray-500">{item.brand}</p>}
            {item.tag && <span className="inline-block bg-pink-500 text-white px-3 py-1 text-xs rounded-full">{item.tag}</span>}

           
            <div className="flex items-center gap-2 text-yellow-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>{i < Math.round(item.rating) ? "★" : "☆"}</span>
              ))}
              <span className="text-gray-600 text-sm">({item.reviews})</span>
            </div>

         
            <p className="text-sm font-medium text-green-600">
              In Stock • Ready to ship
            </p>

          
            <div className="flex items-center gap-4">
              <label className="text-sm font-medium">Quantity:</label>
              <input
                type="number"
                defaultValue={1}
                min={1}
                className="w-20 border rounded px-3 py-1 text-sm"
              />
            </div>

            
            <p className="text-2xl font-bold text-gray-900">${item.price}</p>

           
            <p className="text-gray-700 text-sm md:text-base">
              {item.description || "Enhance your beauty with this premium makeup product. Perfect for daily use, long-lasting, and skin-friendly."}
            </p>
          </div>

          
          <div className="flex flex-col md:flex-row gap-3">
           
            <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3
                bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-lg
                hover:from-indigo-600 hover:to-blue-500 transition-all duration-300">
              <ShoppingCart size={16} /> Add to Cart  <ArrowRight size={16} />
            </button>

            
            <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3
                bg-gradient-to-r from-gray-300 to-gray-400 text-gray-900 font-semibold shadow hover:from-gray-400 hover:to-gray-500 transition-all duration-300">
              Buy Now <ArrowRight size={16} />
            </button>
          </div>

          
          <div className="flex flex-col md:flex-row gap-4 text-gray-500 text-xs mt-4">
            <p className="flex items-center gap-1"><Truck size={14} /> Free Shipping Over $50</p>
            <p>30-Day Returns • Money Back Guarantee</p>
            <p>Satisfaction Guaranteed • Dermatologist Tested • Cruelty-Free</p>
          </div>
        </div>
      </div>
    </div>
  );
}
