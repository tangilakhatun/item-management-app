import ItemCard from "./itemCard";


async function getItems() {
  const res = await fetch("http://localhost:5000/items", {
    cache: "no-store",
  });
  return res.json();
}

export default async function TopItems() {
  const items = await getItems();

  const topItems = items.slice(0, 8);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

     
        <div className="text-center mb-14 space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Top Beauty Picks
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most loved makeup and skincare products, trusted by beauty lovers every day.
          </p>
        </div>

      
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {topItems.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>

        
        <div className="mt-14 text-center">
          <a
            href="/items"
            className="inline-flex items-center gap-2 rounded-full px-8 py-3
            bg-gradient-to-r from-pink-500 to-rose-500
            hover:from-rose-500 hover:to-pink-500
            text-white text-sm font-semibold shadow-lg
            transition-all duration-300"
          >
            View All Products →
          </a>
        </div>
      </div>
    </section>
  );
}
