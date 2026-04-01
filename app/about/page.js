import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'About Us | MyParadigm Rentals',
  description: 'Learn about MyParadigm Rentals — our mission, values, and team.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-primary-100 max-w-2xl mx-auto">
            We're dedicated to making rental living simple, comfortable, and transparent for every resident.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              At MyParadigm Rentals, we believe everyone deserves a place they're proud to call home. Since our founding,
              we've been committed to offering quality rental properties with honest pricing and exceptional service.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We manage every property with care, respond to maintenance requests promptly, and treat every resident
              with respect — because great living starts with a great landlord.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { stat: '50+', label: 'Properties Managed' },
              { stat: '10+', label: 'Years of Experience' },
              { stat: '500+', label: 'Happy Residents' },
              { stat: '5★', label: 'Average Rating' },
            ].map(({ stat, label }) => (
              <div key={label} className="bg-primary-50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-primary-700">{stat}</div>
                <div className="text-sm text-gray-600 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Transparency',
                desc: 'No hidden fees, no surprises. We believe in clear communication from application to move-out.',
              },
              {
                title: 'Community',
                desc: "Our properties are more than buildings — they're neighborhoods where residents feel at home.",
              },
              {
                title: 'Responsiveness',
                desc: 'When something needs attention, we act fast. Your comfort is our priority.',
              },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-primary-700 mb-3">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-primary-700 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Home?</h2>
          <p className="text-primary-100 mb-8">Browse our available properties or start your rental application today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/" className="bg-white text-primary-700 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
              View Properties
            </a>
            <a href="/apply" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-700 transition-colors">
              Apply Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
