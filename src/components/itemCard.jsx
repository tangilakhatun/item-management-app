"use client";
import Link from "next/link";
import { ArrowRight, Truck } from "lucide-react"; 
export default function ItemCard({ item }) {
  return (
    <div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300">
      
      
      <div className="relative overflow-hidden">
        <img
          src={item.image || "https://via.placeholder.com/300"}
          alt={item.name}
          className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
        />

        
        <span className="absolute top-3 right-3 px-4 py-1 rounded-full text-sm font-semibold text-white
          bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg">
          $ {item.price}
        </span>

        
        {item.tag && (
          <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium text-white
            bg-gradient-to-r from-pink-500 to-red-500 shadow-md">
            {item.tag}
          </span>
        )}
      </div>

     
      <div className="p-5 space-y-2">
       
        <h2 className="text-lg font-bold text-gray-900 line-clamp-1">{item.name}</h2>

        <div className="flex items-center text-yellow-500 text-sm">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i}>
              {i < Math.round(item.rating) ? "★" : "☆"}
            </span>
          ))}
          <span className="ml-2 text-gray-600">({item.reviews})</span>
        </div>

       
        <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>

        
        {item.delivery && (
          <p className="text-xs text-gray-500 flex items-center gap-1">
            <Truck size={14} /> {item.delivery}
          </p>
        )}

        
        <Link
          href={`/items/${item.id}`}
          className="mt-3 inline-flex w-full items-center justify-center rounded-full px-6 py-2.5
            text-sm font-semibold text-white
            bg-gradient-to-r from-blue-500 to-indigo-600
            hover:from-indigo-600 hover:to-blue-600
            transition-all duration-300 shadow-lg gap-2"
        >
          View Details
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
