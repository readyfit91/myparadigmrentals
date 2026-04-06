export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600 text-white py-24 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <span className="inline-block bg-primary-500 bg-opacity-30 text-primary-100 text-sm font-semibold px-4 py-1 rounded-full mb-6 uppercase tracking-wide">
          Premium Rental Properties
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Find Your Perfect<br />
          <span className="text-sky-300">Place to Call Home</span>
        </h1>
        <p className="text-lg sm:text-xl text-primary-100 max-w-2xl mx-auto mb-10">
          MyParadigm Rentals offers quality apartments and homes that fit your lifestyle and budget. Browse available units and schedule a tour today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#properties"
            className="bg-white text-primary-700 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors text-lg"
          >
            View Properties
          </a>
          <a
            href="#contact"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-700 transition-colors text-lg"
          >
            Schedule a Tour
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-xl mx-auto">
          <div>
            <div className="text-3xl font-bold text-white">5★</div>
            <div className="text-primary-200 text-sm mt-1">Avg. Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">10+</div>
            <div className="text-primary-200 text-sm mt-1">Years in Business</div>
          </div>
        </div>
      </div>
    </section>
  );
}
