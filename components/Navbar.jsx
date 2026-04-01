'use client';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-primary-700 font-bold text-xl tracking-tight">
              MyParadigm<span className="text-gray-800"> Rentals</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#properties" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">Properties</a>
            <a href="#features" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">Why Us</a>
            <a href="#contact" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">Contact</a>
            <a
              href="#contact"
              className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium"
            >
              Schedule a Tour
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#properties" className="block px-3 py-2 text-gray-600 hover:text-primary-600 font-medium" onClick={() => setMenuOpen(false)}>Properties</a>
            <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-primary-600 font-medium" onClick={() => setMenuOpen(false)}>Why Us</a>
            <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-primary-600 font-medium" onClick={() => setMenuOpen(false)}>Contact</a>
            <a href="#contact" className="block px-3 py-2 bg-primary-600 text-white rounded-lg text-center font-medium" onClick={() => setMenuOpen(false)}>Schedule a Tour</a>
          </div>
        )}
      </div>
    </nav>
  );
}
