export default function Properties() {
  return (
    <section id="properties" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Properties in Our Portfolio</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Our first property is on its way. Stay tuned — something great is coming.
          </p>
        </div>

        {/* Single Property Card */}
        <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">

          {/* Photo Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-1 bg-gray-100 p-1">
            {[1, 2, 3, 4, 5].map((n) => (
              <div
                key={n}
                className="bg-gradient-to-br from-primary-100 to-primary-200 aspect-square flex flex-col items-center justify-center rounded-lg"
              >
                <svg className="w-8 h-8 text-primary-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-xs font-semibold text-primary-500 uppercase tracking-wide">Coming Soon</span>
              </div>
            ))}
          </div>

          {/* Property Info */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-bold text-gray-900">New Property</h3>
              <span className="bg-yellow-100 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full">Pending</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="italic">Address Not Yet Available</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              This property is currently pending and not yet available. Details including address, pricing,
              and unit specifications will be announced soon. Contact us to be the first to know when it becomes available.
            </p>
            <a
              href="#contact"
              className="inline-block bg-primary-600 text-white text-sm px-6 py-2.5 rounded-lg hover:bg-primary-700 transition-colors font-medium"
            >
              Get Notified
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
