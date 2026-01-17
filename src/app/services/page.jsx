import {
  Sparkles,
  Truck,
  ShieldCheck,
  Headphones,
  RefreshCcw,
  PackageCheck,
  Mail,
  User,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="bg-white">

      
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <div className="flex justify-center mb-4">
          <Sparkles className="h-12 w-12 text-blue-600" />
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Our Services
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          More than beauty products — we provide care, reliability, and a smooth
          shopping experience designed around you.
        </p>
      </section>

   
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-14">
          What We Do Best
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition text-center">
            <PackageCheck className="h-9 w-9 text-blue-500 mx-auto mb-4" />
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              Curated Beauty Products
            </h3>
            <p className="text-gray-600 text-sm">
              Every makeup and skincare item is selected with care to ensure
              safety, comfort, and everyday usability.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition text-center">
            <Truck className="h-9 w-9 text-rose-500 mx-auto mb-4" />
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              Fast & Secure Delivery
            </h3>
            <p className="text-gray-600 text-sm">
              Reliable delivery service that brings your beauty essentials
              safely to your doorstep.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition text-center">
            <ShieldCheck className="h-9 w-9 text-blue-500 mx-auto mb-4" />
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              Quality & Authenticity
            </h3>
            <p className="text-gray-600 text-sm">
              We ensure products are authentic, well-packaged, and meet quality
              expectations.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition text-center">
            <RefreshCcw className="h-9 w-9 text-rose-500 mx-auto mb-4" />
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              Easy Returns
            </h3>
            <p className="text-gray-600 text-sm">
              Simple return process designed to keep your shopping stress-free.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition text-center">
            <Headphones className="h-9 w-9 text-blue-500 mx-auto mb-4" />
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              Customer Support
            </h3>
            <p className="text-gray-600 text-sm">
              Our support team is always ready to help you with orders and
              product questions.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition text-center">
            <Sparkles className="h-9 w-9 text-rose-500 mx-auto mb-4" />
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              Beauty Guidance
            </h3>
            <p className="text-gray-600 text-sm">
              Honest beauty tips and product suggestions that match your skin
              and lifestyle.
            </p>
          </div>
        </div>
      </section>

     
      <section className="bg-gray-50 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <Mail className="h-10 w-10 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900">
              Need Help or Have a Question?
            </h2>
            <p className="text-gray-600 mt-3">
              Send us a message — our team will get back to you as soon as possible.
            </p>
          </div>

          <form className="bg-white p-10 rounded-2xl shadow-lg space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Message
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 text-gray-400 h-5 w-5" />
                <textarea
                  rows={5}
                  placeholder="Write your message here..."
                  className="w-full pl-12 pr-4 py-3 border rounded-xl resize-none focus:ring-2 focus:ring-blue-500 outline-none"
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-full px-6 py-3 text-white font-semibold
              bg-gradient-to-r from-blue-500 to-indigo-600
              hover:from-indigo-600 hover:to-blue-500
              transition-all duration-300 shadow-lg"
            >
              Send Message   
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}
