const properties = [
  {
    name: 'The Horizon Apartments',
    beds: 2,
    baths: 1,
    sqft: 950,
    price: 1450,
    tag: 'Available Now',
    tagColor: 'bg-green-100 text-green-700',
    features: ['In-unit Laundry', 'Parking Included', 'Pet Friendly'],
  },
  {
    name: 'Parkview Studios',
    beds: 1,
    baths: 1,
    sqft: 620,
    price: 975,
    tag: 'Available Now',
    tagColor: 'bg-green-100 text-green-700',
    features: ['City Views', 'Gym Access', 'Rooftop Deck'],
  },
  {
    name: 'Maple Grove Townhomes',
    beds: 3,
    baths: 2,
    sqft: 1400,
    price: 2100,
    tag: 'Coming Soon',
    tagColor: 'bg-yellow-100 text-yellow-700',
    features: ['Private Garage', 'Fenced Yard', 'Modern Kitchen'],
  },
  {
    name: 'Downtown Lofts',
    beds: 1,
    baths: 1,
    sqft: 780,
    price: 1250,
    tag: 'Available Now',
    tagColor: 'bg-green-100 text-green-700',
    features: ['Open Floor Plan', 'High Ceilings', 'Walkable Location'],
  },
  {
    name: 'Riverside Place',
    beds: 2,
    baths: 2,
    sqft: 1100,
    price: 1750,
    tag: 'Available Now',
    tagColor: 'bg-green-100 text-green-700',
    features: ['River Views', 'Balcony', 'Dishwasher'],
  },
  {
    name: 'Sunridge Flats',
    beds: 3,
    baths: 1,
    sqft: 1250,
    price: 1900,
    tag: 'Coming Soon',
    tagColor: 'bg-yellow-100 text-yellow-700',
    features: ['Large Backyard', 'Storage Unit', 'Near Schools'],
  },
];

export default function Properties() {
  return (
    <section id="properties" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Properties in Our Portfolio</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Browse our portfolio of properties. Contact us to learn about availability and schedule a tour.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((p, i) => (
            <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
              {/* Placeholder image */}
              <div className="bg-gradient-to-br from-primary-100 to-primary-200 h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-900 text-lg">{p.name}</h3>
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${p.tagColor}`}>{p.tag}</span>
                </div>
                <div className="flex items-center gap-4 text-gray-500 text-sm mb-3">
                  <span>{p.beds} bd</span>
                  <span>{p.baths} ba</span>
                  <span>{p.sqft.toLocaleString()} sqft</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.features.map((feat, j) => (
                    <span key={j} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-md">{feat}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary-700">${p.price.toLocaleString()}<span className="text-sm font-normal text-gray-400">/mo</span></span>
                  <a
                    href="#contact"
                    className="bg-primary-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium"
                  >
                    Inquire
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
