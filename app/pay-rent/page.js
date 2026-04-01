'use client';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function PayRentPage() {
  const [method, setMethod] = useState(null);

  const paymentMethods = [
    {
      id: 'online',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      title: 'Pay Online',
      desc: 'Credit/debit card or bank transfer via our secure portal.',
    },
    {
      id: 'check',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Mail a Check',
      desc: 'Send a check or money order to our office address.',
    },
    {
      id: 'dropoff',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Drop Off',
      desc: 'Bring payment to our office during business hours.',
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600 text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Pay Rent</h1>
          <p className="text-lg text-primary-100">
            Choose your preferred payment method below. Rent is due on the 1st of each month.
          </p>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">How would you like to pay?</h2>
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {paymentMethods.map(({ id, icon, title, desc }) => (
              <button
                key={id}
                onClick={() => setMethod(id)}
                className={`text-left p-6 rounded-xl border-2 transition-all ${
                  method === id
                    ? 'border-primary-600 bg-primary-50 shadow-md'
                    : 'border-gray-200 bg-white hover:border-primary-300 hover:shadow-sm'
                }`}
              >
                <div className={`mb-3 ${method === id ? 'text-primary-600' : 'text-gray-500'}`}>{icon}</div>
                <div className="font-semibold text-gray-900 mb-1">{title}</div>
                <div className="text-sm text-gray-500">{desc}</div>
              </button>
            ))}
          </div>

          {/* Method Details */}
          {method === 'online' && (
            <div className="bg-white rounded-xl shadow-sm p-8 border border-primary-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pay Online</h3>
              <p className="text-gray-600 mb-6">
                Our secure online portal accepts Visa, Mastercard, Discover, and ACH bank transfers. You can also set up
                autopay to never miss a due date.
              </p>
              <div className="bg-primary-50 rounded-lg p-4 mb-6 text-sm text-primary-800">
                <strong>Note:</strong> A 2.9% processing fee applies to credit/debit card payments. ACH transfers are free.
              </div>
              <a
                href="#"
                className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Go to Payment Portal
              </a>
            </div>
          )}

          {method === 'check' && (
            <div className="bg-white rounded-xl shadow-sm p-8 border border-primary-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mail a Check</h3>
              <p className="text-gray-600 mb-6">
                Make checks or money orders payable to <strong>MyParadigm Rentals</strong> and mail to:
              </p>
              <div className="bg-gray-50 rounded-lg p-5 font-mono text-sm text-gray-800 leading-relaxed mb-6">
                MyParadigm Rentals
              </div>
              <p className="text-sm text-gray-500">
                Please write your unit number and full name in the memo line. Allow 3–5 business days for mailed payments to be processed.
              </p>
            </div>
          )}

          {method === 'dropoff' && (
            <div className="bg-white rounded-xl shadow-sm p-8 border border-primary-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Drop Off Payment</h3>
              <p className="text-gray-600 mb-6">
                Bring a check, money order, or cashier's check to our office. We do not accept cash.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-5">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Office Address</p>
                  <p className="text-sm text-gray-600">
                    Saint Louis, MO<br />
                    <span className="italic text-gray-400">Address available upon request</span>
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-5">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Office Hours</p>
                  <p className="text-sm text-gray-600">
                    Call/Text 24/7
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Payment FAQs</h2>
          <div className="space-y-6">
            {[
              {
                q: 'When is rent due?',
                a: 'Rent is due on the 1st of each month. A late fee applies after the 5th.',
              },
              {
                q: 'What if I need to set up a payment plan?',
                a: 'Please contact us at (314) 649-0073 or info@myparadigmrentals.com before your due date to discuss options.',
              },
              {
                q: 'Can I pay with cash?',
                a: 'We do not accept cash payments. Please use one of the methods above.',
              },
              {
                q: 'How do I get a payment receipt?',
                a: 'Online payments generate an automatic email receipt. For check or drop-off payments, contact our office to request a receipt.',
              },
            ].map(({ q, a }) => (
              <div key={q} className="border-b border-gray-100 pb-6">
                <p className="font-semibold text-gray-900 mb-2">{q}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
