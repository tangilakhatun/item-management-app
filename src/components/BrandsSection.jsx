"use client";

export default function BrandsSection() {
  const brands = [
    { name: "L'Oréal", logo: "https://i.ibb.co.com/k6xzkTWF/loreal.jpg" },
    { name: "Sephora", logo: "https://i.ibb.co.com/nsLCmBQz/sephora.jpg" },
    { name: "Maybelline", logo: "https://i.ibb.co.com/B2ZcCbcq/me.webp" },
    { name: "Estée Lauder", logo: "https://i.ibb.co.com/VcLx5162/es.webp" },
    { name: "MAC", logo: "https://i.ibb.co.com/SDBWB0vh/mac.jpg" },
    { name: "Clinique", logo: "https://i.ibb.co.com/2JBdq7z/cl.webp" },
  ];

  return (
    <section className="py-16 rounded-2xl mx-6 md:mx-12 mt-16">
      <div className="max-w-7xl mx-auto text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Trusted by Leading Brands
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          We collaborate with top beauty brands to bring you high-quality products.
        </p>

       
        <div className="mt-8 flex rounded-2xl space-x-6 overflow-x-auto scrollbar-hide py-4">
          {brands.map((brand, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-40 flex justify-center items-center p-4 rounded-lg bg-white shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-28 rounded-lg  object-contain  hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
