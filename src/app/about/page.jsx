import {
  Sparkles,
  HeartHandshake,
  Leaf,
  ShieldCheck,
  BadgeCheck,
  Users,
  Gem,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-white">

      
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <div className="flex justify-center mb-4">
          <Gem className="h-12 w-12 text-blue-600" />
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          About Our Beauty Store
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          We bring carefully selected makeup and skincare products designed to
          enhance your natural beauty — safely, honestly, and beautifully.
        </p>
      </section>

      
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <div className="flex items-center gap-3 mb-4">
              <HeartHandshake className="h-7 w-7 text-rose-500" />
              <h2 className="text-3xl font-bold text-gray-900">
                Our Story
              </h2>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              Our journey began with a simple belief — beauty products should
              feel as good as they look. Many products focus only on appearance,
              ignoring skin health and comfort.
            </p>

            <p className="text-gray-700 leading-relaxed">
              That’s why we curate makeup and skincare items that are gentle,
              effective, and suitable for everyday use — so you can feel confident
              in your skin.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1596462502278-27bfdc403348"
            alt="Beauty products"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>

   
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-14">
          What Makes Us Different
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          <ValueCard
            icon={<Sparkles className="h-8 w-8 text-blue-500" />}
            title="Premium Selection"
            desc="Only high-quality makeup and skincare products you can trust."
          />

          <ValueCard
            icon={<Leaf className="h-8 w-8 text-rose-500" />}
            title="Skin-Friendly"
            desc="Gentle formulas suitable for daily beauty routines."
          />

          <ValueCard
            icon={<ShieldCheck className="h-8 w-8 text-blue-500" />}
            title="Quality Checked"
            desc="Every product is reviewed for safety and performance."
          />

          <ValueCard
            icon={<BadgeCheck className="h-8 w-8 text-rose-500" />}
            title="Honest Beauty"
            desc="No fake promises — just real, reliable products."
          />

        </div>
      </section>

     
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-14">
            Trusted By Beauty Lovers
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <TrustCard
              icon={<Users className="h-7 w-7 text-rose-500" />}
              title="Customer First"
              desc="Thousands of customers trust us for their everyday beauty needs."
            />

            <TrustCard
              icon={<ShieldCheck className="h-7 w-7 text-blue-500" />}
              title="Safe & Reliable"
              desc="We prioritize skin safety and product quality above everything."
            />

            <TrustCard
              icon={<Sparkles className="h-7 w-7 text-rose-500" />}
              title="Modern Beauty"
              desc="Beauty that fits real life — simple, effective, and elegant."
            />

          </div>
        </div>
      </section>

      
    </div>
  );
}

/* Reusable 2 Cards */

function ValueCard({ icon, title, desc }) {
  return (
    <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="font-semibold text-lg text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
}

function TrustCard({ icon, title, desc }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h4 className="font-semibold text-lg text-gray-900 mb-2">
        {title}
      </h4>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
}
