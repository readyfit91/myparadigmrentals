import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'About Us | Paradigm Rentals',
  description: 'Learn the story behind Paradigm Rentals — a family-owned business built on sacrifice, perseverance, and the belief that every home should feel like one.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600 text-white py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-primary-500 bg-opacity-30 text-primary-100 text-sm font-semibold px-4 py-1 rounded-full mb-6 uppercase tracking-wide">
            Our Story
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            Built on Sacrifice.<br />
            <span className="text-sky-300">Rooted in Purpose.</span>
          </h1>
          <p className="text-lg text-primary-100 max-w-2xl mx-auto leading-relaxed">
            Paradigm Rentals is more than a property company. It is the realization of a dream
            carried across borders, shaped by perseverance, and grounded in the belief that
            every person deserves a place that truly feels like home.
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Where It All Began</h2>
          <div className="space-y-5 text-gray-600 leading-relaxed text-lg">
            <p>
              Paradigm Rentals was born from a deeply personal journey — the journey of an immigrant
              family arriving in the United States with little more than determination, faith, and an
              unrelenting will to build something meaningful. Like so many who have come before us,
              we arrived searching not just for opportunity, but for belonging. For stability.
              For a place to call our own.
            </p>
            <p>
              What followed were years of family sacrifice and quiet perseverance — long hours,
              difficult decisions, and the kind of resilience that only comes from having no other
              choice but to keep moving forward. Every step of that journey shaped the values that
              now define everything we do.
            </p>
            <p>
              It was in the middle of that journey that a perspective shift changed everything.
            </p>
          </div>
        </div>
      </section>

      {/* Paradigm Shift */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="border-l-4 border-primary-600 pl-6 mb-10">
            <p className="text-xl italic text-gray-700 leading-relaxed">
              "A paradigm shift is a fundamental, radical change in the underlying assumptions,
              beliefs, or methods that define a subject, an industry, or a worldview."
            </p>
            <p className="text-sm text-gray-500 mt-3 font-medium">— Thomas Kuhn, <em>The Structure of Scientific Revolutions</em></p>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Idea Behind the Name</h2>
          <div className="space-y-5 text-gray-600 leading-relaxed text-lg">
            <p>
              The name <strong className="text-gray-800">Paradigm Rentals</strong> is rooted in the
              concept of the Paradigm Shift, a term coined by philosopher and scientist Thomas Kuhn
              to describe a profound transformation in the way we see the world.
            </p>
            <p>
              For us, that shift was the realization that a house — four walls and a roof — means
              very little if it does not feel like a home. In our own experience of searching for
              stability in a new country, we came to understand that the spaces we live in
              profoundly affect who we become. A home is not just shelter. It is the foundation
              from which a person builds their life.
            </p>
            <p>
              That understanding changed everything about how we approach this work.
            </p>
          </div>
        </div>
      </section>

      {/* Our Belief */}
      <section className="py-20 px-4 bg-primary-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Belief</h2>
          <p className="text-xl text-primary-100 leading-relaxed mb-6">
            We believe your place of living should be more than an address.
            It should be a <strong className="text-white">sanctuary</strong> — a safe, peaceful space
            where you feel protected, at ease, and free to grow into the best version of yourself.
          </p>
          <p className="text-lg text-primary-200 leading-relaxed">
            Every property we offer, every interaction we have with our residents, and every
            decision we make as a company is guided by that single conviction: <em>a house is
            nothing without the feeling of home.</em>
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What We Stand For</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Safety & Peace',
                desc: 'Every resident deserves to come home to a space that feels secure and calm — a true refuge from the demands of the world.',
              },
              {
                title: 'Dignity & Respect',
                desc: 'We treat every resident the way we would want to be treated. Transparent communication, fair practices, and genuine care are non-negotiable.',
              },
              {
                title: 'Growth & Possibility',
                desc: 'We believe the right environment unlocks potential. Our goal is to provide homes where families and individuals can thrive.',
              },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
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
          <h2 className="text-3xl font-bold mb-4">Find Your Home With Us</h2>
          <p className="text-primary-100 mb-8">
            We would be honored to be part of your story. Browse our portfolio or start your application today.
          </p>
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
