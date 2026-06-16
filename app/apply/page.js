'use client';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function ApplicationForm() {
  const searchParams = useSearchParams();
  const property = searchParams.get('property') || '';
  const [submitted, setSubmitted] = useState(false);
  const [consent, setConsent] = useState(false);
  const [signature, setSignature] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputClass = 'w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent';
  const labelClass = 'block text-sm font-medium text-gray-700 mb-1';
  const sectionTitle = 'text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-4 mt-6';

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Rental Application</h1>
          {property && <p className="text-primary-600 font-medium text-lg">{property}</p>}
          <p className="text-gray-500 mt-2">Fill out the form below and we'll get back to you within 24 hours.</p>
        </div>

        {/* Notice banner */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-6 py-4 mb-6 text-sm text-yellow-800">
          <p className="font-semibold mb-1">Background Check Notice</p>
          <p>A background and credit check will be conducted on all applicants. By submitting this application you consent to this process.</p>
        </div>

        {/* Application fee banner */}
        <div className="bg-primary-50 border border-primary-200 rounded-xl px-6 py-4 mb-8 text-sm">
          <p className="font-semibold text-primary-800 mb-1">Non-Refundable $50 Application Fee</p>
          <p className="text-primary-700 mb-3">A $50 application fee is required to process your application. This fee is non-refundable.</p>
          <a
            href="https://buy.stripe.com/8x28wO31q4vAgds6vP53O01"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-primary-700 transition-colors"
          >
            Pay $50 Application Fee →
          </a>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8">
          {submitted ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Application Submitted!</h2>
              <p className="text-gray-500">Thank you! We'll review your application and reach out within 24 hours.</p>
              <a href="/" className="inline-block mt-6 text-primary-600 font-medium hover:underline">← Back to listings</a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <input type="hidden" name="property" value={property} />

              {/* Personal Info */}
              <h2 className={sectionTitle}>Personal Information</h2>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Date of Birth</label>
                  <input type="date" required className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Social Security Number</label>
                  <input type="text" required className={inputClass} placeholder="XXX-XX-XXXX" maxLength={11} />
                </div>
              </div>
              <div>
                <label className={labelClass}>Email</label>
                <input type="email" required className={inputClass} placeholder="jane@example.com" />
              </div>
              <div>
                <label className={labelClass}>Phone</label>
                <input type="tel" required className={inputClass} placeholder="(555) 000-0000" />
              </div>
              <div>
                <label className={labelClass}>Current Address</label>
                <input type="text" required className={inputClass} placeholder="123 Main St, City, State" />
              </div>

              {/* Employment */}
              <h2 className={sectionTitle}>Employment & Income</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Employer</label>
                  <input type="text" className={inputClass} placeholder="Company name" />
                </div>
                <div>
                  <label className={labelClass}>Monthly Income</label>
                  <input type="text" className={inputClass} placeholder="$0,000" />
                </div>
              </div>

              {/* Pay Stubs */}
              <h2 className={sectionTitle}>Last 4 Pay Stubs</h2>
              <p className="text-sm text-gray-500 -mt-2">Please upload your four most recent pay stubs.</p>
              {[1, 2, 3, 4].map((n) => (
                <div key={n}>
                  <label className={labelClass}>Pay Stub {n}</label>
                  <input type="file" accept=".pdf,.jpg,.jpeg,.png" required className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100 cursor-pointer" />
                </div>
              ))}

              {/* Occupants & Pets */}
              <h2 className={sectionTitle}>Occupants & Pets</h2>
              <div>
                <label className={labelClass}>Number of Occupants</label>
                <input type="number" min="1" required className={inputClass} placeholder="1" />
              </div>
              <div>
                <label className={labelClass}>Do you have pets?</label>
                <select className={inputClass}>
                  <option>No</option>
                  <option>Yes — dog</option>
                  <option>Yes — cat</option>
                  <option>Yes — other</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Desired Move-in Date</label>
                <input type="date" required className={inputClass} />
              </div>

              {/* References */}
              <h2 className={sectionTitle}>References</h2>
              {[1, 2].map((n) => (
                <div key={n} className="border border-gray-100 rounded-xl p-4 space-y-3 bg-gray-50">
                  <p className="text-sm font-medium text-gray-600">Reference {n}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className={labelClass}>Name</label>
                      <input type="text" className={inputClass} placeholder="Full name" />
                    </div>
                    <div>
                      <label className={labelClass}>Relationship</label>
                      <input type="text" className={inputClass} placeholder="e.g. Previous Landlord" />
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>Phone</label>
                    <input type="tel" className={inputClass} placeholder="(555) 000-0000" />
                  </div>
                </div>
              ))}

              {/* Notes */}
              <div>
                <label className={labelClass}>Additional Notes</label>
                <textarea rows={3} className={inputClass} placeholder="Anything else you'd like us to know..." />
              </div>

              {/* E-Signature & Consent */}
              <h2 className={sectionTitle}>Signature & Consent</h2>
              <div>
                <label className={labelClass}>Electronic Signature <span className="text-gray-400 font-normal">(type your full legal name)</span></label>
                <input
                  type="text"
                  required
                  value={signature}
                  onChange={(e) => setSignature(e.target.value)}
                  className={`${inputClass} italic`}
                  placeholder="Jane Doe"
                />
              </div>
              <div className="flex items-start gap-3">
                <input
                  id="consent"
                  type="checkbox"
                  required
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-1 w-4 h-4 accent-primary-600 cursor-pointer"
                />
                <label htmlFor="consent" className="text-sm text-gray-600 cursor-pointer">
                  I authorize MyParadigm Rentals to conduct a background and credit check as part of this application. I understand the $50 application fee is <strong>non-refundable</strong>. I certify that all information provided is true and accurate to the best of my knowledge.
                </label>
              </div>

              <button
                type="submit"
                disabled={!consent || !signature}
                className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-lg disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Submit Application
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}

export default function ApplyPage() {
  return (
    <Suspense>
      <ApplicationForm />
    </Suspense>
  );
}
