export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div>
            <div className="text-white font-bold text-lg mb-3">
              MyParadigm<span className="text-primary-400"> Rentals</span>
            </div>
            <p className="text-sm leading-relaxed">
              Quality apartments and rental homes. We make finding your next home simple, transparent, and stress-free.
            </p>
          </div>
          <div>
            <div className="text-white font-semibold mb-3">Quick Links</div>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/apply" className="hover:text-white transition-colors">Apply</a></li>
              <li><a href="/pay-rent" className="hover:text-white transition-colors">Pay Rent</a></li>
            </ul>
          </div>
          <div>
            <div className="text-white font-semibold mb-3">Contact</div>
            <ul className="space-y-2 text-sm">
              <li>(555) 123-4567</li>
              <li>info@myparadigmrentals.com</li>
              <li>Mon–Fri, 9am–6pm</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-center text-sm">
          © {new Date().getFullYear()} MyParadigm Rentals. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
