'use client';
import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-20 bg-gray-50 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-gray-500 text-lg">
            Interested in a property or have questions? Send us a message and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
              <p className="text-gray-500">Thanks for reaching out. We'll be in touch within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input
                    type="text"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input
                    type="text"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="jane@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone (optional)</label>
                <input
                  type="tel"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="(555) 000-0000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">I'm interested in...</label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                  <option>Scheduling a tour</option>
                  <option>Rental pricing & availability</option>
                  <option>Starting a rental application</option>
                  <option>General question</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Tell us which property you're interested in and any questions you have..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-lg"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Contact Info */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-primary-600 font-semibold mb-1">Phone</div>
            <div className="text-gray-600">(555) 123-4567</div>
          </div>
          <div>
            <div className="text-primary-600 font-semibold mb-1">Email</div>
            <div className="text-gray-600">info@myparadigmrentals.com</div>
          </div>
          <div>
            <div className="text-primary-600 font-semibold mb-1">Office Hours</div>
            <div className="text-gray-600">Mon–Fri, 9am–6pm</div>
          </div>
        </div>
      </div>
    </section>
  );
}
