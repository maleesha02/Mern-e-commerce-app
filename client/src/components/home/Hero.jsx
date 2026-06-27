function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Side */}
        <div className="max-w-xl">
          <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
            🚀 New Collection Available
          </span>

          <h1 className="text-5xl font-bold mt-6 leading-tight">
            Discover Amazing Products
          </h1>

          <p className="mt-6 text-lg text-blue-100">
            Shop thousands of products from multiple categories with secure payments and fast delivery.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Shop Now
            </button>

            <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition">
              Explore Categories
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="mt-12 lg:mt-0">
          <div className="w-80 h-80 rounded-full bg-white/10 flex items-center justify-center text-7xl">
            🛍️
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;