'use client';
import { useState } from 'react';

const rooms = [
  'Kitchen',
  'Living Room',
  'Dining Room',
  'Basement',
  'Bathroom',
  'Bedroom',
  'Other',
];

export default function MaintenancePage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputClass = 'w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent';
  const labelClass = 'block text-sm font-medium text-gray-700 mb-1';

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero Banner */}
      <div
        className="relative h-64 sm:h-80 flex items-center justify-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative text-center px-4">
          <div className="flex items-center justify-center mb-3">
            <svg className="w-10 h-10 text-white mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">Maintenance Request</h1>
          </div>
          <p className="text-gray-200 text-lg max-w-xl mx-auto">
            Let us know what needs attention. Our team is here to help.
          </p>
          <div className="mt-4 inline-block bg-white/20 border border-white/30 text-white text-sm font-medium px-4 py-1.5 rounded-full backdrop-blur-sm">
            ⏱ We respond within 24 hours
          </div>
        </div>
      </div>

      <div className="py-12 px-4">

      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm p-8">
          {submitted ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Request Submitted!</h2>
              <p className="text-gray-500">Thank you! Someone from our office will contact you within <strong>24 hours</strong>.</p>
              <a href="/" className="inline-block mt-6 text-primary-600 font-medium hover:underline">← Back to home</a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>First Name</label>
                  <input type="text" required className={inputClass} placeholder="Jane" />
                </div>
                <div>
                  <label className={labelClass}>Last Name</label>
                  <input type="text" required className={inputClass} placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className={labelClass}>Unit Address</label>
                <input type="text" required className={inputClass} placeholder="e.g. 1311 Wachtel Ave, Saint Louis, MO 63125" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Phone</label>
                  <input type="tel" required className={inputClass} placeholder="(555) 000-0000" />
                </div>
                <div>
                  <label className={labelClass}>Email</label>
                  <input type="email" required className={inputClass} placeholder="jane@example.com" />
                </div>
              </div>

              {/* Room Selection */}
              <div>
                <label className={labelClass}>Which room is the issue in?</label>
                <select required className={inputClass}>
                  <option value="">— Select a room —</option>
                  {rooms.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </div>

              {/* Description */}
              <div>
                <label className={labelClass}>Description of the Issue</label>
                <textarea
                  rows={5}
                  required
                  className={inputClass}
                  placeholder="Please describe what is going on in as much detail as possible..."
                />
              </div>

              {/* Photo Upload */}
              <div>
                <label className={labelClass}>
                  Upload Photos <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg px-4 py-6 text-center hover:border-primary-400 transition-colors">
                  <svg className="w-8 h-8 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm text-gray-500 mb-2">Attach photos to help us understand the issue</p>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    className="text-sm text-gray-500 file:mr-3 file:py-1.5 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100 cursor-pointer"
                  />
                </div>
              </div>

              {/* 24hr notice */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-3 text-sm text-blue-800">
                Someone from our office will contact you within <strong>24 hours</strong> of receiving your request.
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-lg"
              >
                Submit Maintenance Request
              </button>
            </form>
          )}
        </div>
      </div>
      </div>
      </div>
    </main>
  );
}
