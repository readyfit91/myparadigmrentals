'use client';
import { useState } from 'react';

const FORMSPREE_URL = 'https://formspree.io/f/mlgolpej';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const input = "w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500";
const section = "bg-white rounded-xl shadow-sm p-8";
const sectionTitle = "text-xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-100";
const label = "block text-sm font-medium text-gray-700 mb-1";

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [pets, setPets] = useState([{ type: '', breed: '', weight: '' }]);
  const [vehicles, setVehicles] = useState([{ make: '', model: '', plate: '' }]);
  const [occupantSSNs, setOccupantSSNs] = useState([]);
  const [showSSNModal, setShowSSNModal] = useState(false);
  const [form, setForm] = useState({
    // Personal
    firstName: '', lastName: '', dob: '', ssn: '', email: '', phone: '',
    // Current address
    currentAddress: '', currentCity: '', currentState: '', currentZip: '',
    currentLengthOfStay: '', currentLandlordName: '', currentLandlordPhone: '',
    reasonForLeaving: '',
    // Previous address (shown if < 2 years)
    prevAddress: '', prevCity: '', prevState: '', prevZip: '',
    prevLengthOfStay: '', prevLandlordName: '', prevLandlordPhone: '',
    prevReasonForLeaving: '',
    // Rental history
    hasEviction: '', evictionDetails: '',
    hasLeaseViolation: '', leaseViolationDetails: '',
    // Financial
    creditScore: '', employer: '', jobTitle: '', monthlyIncome: '', employmentLength: '',
    // Occupancy
    numAdults: '', numChildren: '', occupantNames: '',
    // Lifestyle
    smokingStatus: '', hasBankruptcy: '', bankruptcyDetails: '',
    // Desired unit
    desiredUnit: '', moveInDate: '',
    // Authorizations
    authCredit: false, authCriminal: false, authEviction: false,
    // Agreements
    agreeSecurityDeposit: false, agreeFirstLast: false, agreeAppFee: false,
    agreeTerms: false,
  });

  const showPrevAddress = form.currentLengthOfStay && parseInt(form.currentLengthOfStay) < 24;

  function handleChange(e) {
    const { name, value, type, checked, files } = e.target;
    if (type === 'checkbox') setForm({ ...form, [name]: checked });
    else if (type === 'file') setForm({ ...form, [name]: files[0] || null });
    else setForm({ ...form, [name]: value });
  }

  function handlePet(i, field, value) {
    const updated = pets.map((p, idx) => idx === i ? { ...p, [field]: value } : p);
    setPets(updated);
  }
  function addPet() { setPets([...pets, { type: '', breed: '', weight: '' }]); }
  function removePet(i) { setPets(pets.filter((_, idx) => idx !== i)); }

  function handleOccupantCount(e) {
    const { name, value } = e.target;
    const updated = { ...form, [name]: value };
    const adults = parseInt(name === 'numAdults' ? value : form.numAdults) || 0;
    const children = parseInt(name === 'numChildren' ? value : form.numChildren) || 0;
    const additional = Math.max(0, adults + children - 1);
    setOccupantSSNs(prev => {
      const next = Array.from({ length: additional }, (_, i) => prev[i] || { name: '', ssn: '' });
      return next;
    });
    setForm(updated);
    if (additional > 0) setShowSSNModal(true);
  }

  function handleVehicle(i, field, value) {
    const updated = vehicles.map((v, idx) => idx === i ? { ...v, [field]: value } : v);
    setVehicles(updated);
  }
  function addVehicle() { setVehicles([...vehicles, { make: '', model: '', plate: '' }]); }
  function removeVehicle(i) { setVehicles(vehicles.filter((_, idx) => idx !== i)); }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError('');

    const data = new FormData();

    // Flat form fields
    Object.entries(form).forEach(([key, val]) => {
      if (val !== null && val !== undefined) data.append(key, val);
    });

    // Pets
    pets.forEach((pet, i) => {
      data.append(`pet_${i + 1}_type`, pet.type);
      data.append(`pet_${i + 1}_breed`, pet.breed);
      data.append(`pet_${i + 1}_weight`, pet.weight);
    });

    // Vehicles
    vehicles.forEach((v, i) => {
      data.append(`vehicle_${i + 1}_make`, v.make);
      data.append(`vehicle_${i + 1}_model`, v.model);
      data.append(`vehicle_${i + 1}_plate`, v.plate);
    });

    // Additional occupant SSNs
    occupantSSNs.forEach((occ, i) => {
      data.append(`occupant_${i + 2}_name`, occ.name);
      data.append(`occupant_${i + 2}_ssn`, occ.ssn);
    });

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const json = await res.json();
        setSubmitError(json?.errors?.[0]?.message || 'Submission failed. Please try again.');
      }
    } catch {
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <div className="flex flex-col items-center justify-center py-32 px-4 text-center">
          <div className="bg-green-100 rounded-full p-6 mb-6">
            <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Application Submitted!</h1>
          <p className="text-gray-600 max-w-md mb-2">
            Thank you, {form.firstName}! We have received your rental application and will be in touch within 2–3 business days.
          </p>
          <p className="text-gray-500 text-sm max-w-md mb-8">
            Please note: the non-refundable application fee of <strong>$65.00</strong> is due upon submission. We will contact you with payment instructions.
          </p>
          <a href="/" className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
            Back to Home
          </a>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600 text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Rental Application</h1>
          <p className="text-lg text-primary-100 mb-4">
            Complete all sections below. A non-refundable application fee of <strong>$65.00</strong> is required to process your application.
          </p>
          <div className="inline-block bg-yellow-400 text-yellow-900 text-sm font-semibold px-4 py-2 rounded-lg">
            Application Fee: $65.00 — Non-Refundable
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">

            {/* ── 1. Personal Information ── */}
            <div className={section}>
              <h2 className={sectionTitle}>1. Personal Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={label}>First Name *</label>
                  <input required name="firstName" value={form.firstName} onChange={handleChange} className={input} />
                </div>
                <div>
                  <label className={label}>Last Name *</label>
                  <input required name="lastName" value={form.lastName} onChange={handleChange} className={input} />
                </div>
                <div>
                  <label className={label}>Date of Birth *</label>
                  <input required type="date" name="dob" value={form.dob} onChange={handleChange} className={input} />
                </div>
                <div>
                  <label className={label}>Social Security Number *</label>
                  <input required name="ssn" value={form.ssn} onChange={handleChange} placeholder="XXX-XX-XXXX" className={input} />
                  <p className="text-xs text-gray-400 mt-1">Used solely for background and credit screening.</p>
                </div>
                <div>
                  <label className={label}>Email Address *</label>
                  <input required type="email" name="email" value={form.email} onChange={handleChange} className={input} />
                </div>
                <div>
                  <label className={label}>Phone Number *</label>
                  <input required type="tel" name="phone" value={form.phone} onChange={handleChange} className={input} />
                </div>
              </div>
            </div>

            {/* ── 2. Current Address ── */}
            <div className={section}>
              <h2 className={sectionTitle}>2. Current Address</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="sm:col-span-2">
                  <label className={label}>Street Address *</label>
                  <input required name="currentAddress" value={form.currentAddress} onChange={handleChange} className={input} />
                </div>
                <div>
                  <label className={label}>City *</label>
                  <input required name="currentCity" value={form.currentCity} onChange={handleChange} className={input} />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={label}>State *</label>
                    <input required name="currentState" value={form.currentState} onChange={handleChange} maxLength={2} placeholder="MO" className={input + " uppercase"} />
                  </div>
                  <div>
                    <label className={label}>ZIP *</label>
                    <input required name="currentZip" value={form.currentZip} onChange={handleChange} maxLength={5} className={input} />
                  </div>
                </div>
                <div>
                  <label className={label}>Length of Stay (months) *</label>
                  <input required type="number" min="0" name="currentLengthOfStay" value={form.currentLengthOfStay} onChange={handleChange} placeholder="e.g. 18" className={input} />
                </div>
                <div>
                  <label className={label}>Reason for Leaving *</label>
                  <input required name="reasonForLeaving" value={form.reasonForLeaving} onChange={handleChange} className={input} />
                </div>
                <div>
                  <label className={label}>Landlord / Property Manager Name *</label>
                  <input required name="currentLandlordName" value={form.currentLandlordName} onChange={handleChange} className={input} />
                </div>
                <div>
                  <label className={label}>Landlord / Property Manager Phone *</label>
                  <input required type="tel" name="currentLandlordPhone" value={form.currentLandlordPhone} onChange={handleChange} className={input} />
                </div>
              </div>

              {/* Previous Address (conditional) */}
              {showPrevAddress && (
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <p className="text-sm font-semibold text-primary-700 mb-4">
                    Since you have been at your current address for less than 2 years, please provide your previous address.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="sm:col-span-2">
                      <label className={label}>Previous Street Address *</label>
                      <input required name="prevAddress" value={form.prevAddress} onChange={handleChange} className={input} />
                    </div>
                    <div>
                      <label className={label}>City *</label>
                      <input required name="prevCity" value={form.prevCity} onChange={handleChange} className={input} />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className={label}>State *</label>
                        <input required name="prevState" value={form.prevState} onChange={handleChange} maxLength={2} className={input + " uppercase"} />
                      </div>
                      <div>
                        <label className={label}>ZIP *</label>
                        <input required name="prevZip" value={form.prevZip} onChange={handleChange} maxLength={5} className={input} />
                      </div>
                    </div>
                    <div>
                      <label className={label}>Length of Stay (months) *</label>
                      <input required type="number" min="0" name="prevLengthOfStay" value={form.prevLengthOfStay} onChange={handleChange} className={input} />
                    </div>
                    <div>
                      <label className={label}>Reason for Leaving *</label>
                      <input required name="prevReasonForLeaving" value={form.prevReasonForLeaving} onChange={handleChange} className={input} />
                    </div>
                    <div>
                      <label className={label}>Landlord / Property Manager Name *</label>
                      <input required name="prevLandlordName" value={form.prevLandlordName} onChange={handleChange} className={input} />
                    </div>
                    <div>
                      <label className={label}>Landlord / Property Manager Phone *</label>
                      <input required type="tel" name="prevLandlordPhone" value={form.prevLandlordPhone} onChange={handleChange} className={input} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* ── 3. Rental History ── */}
            <div className={section}>
              <h2 className={sectionTitle}>3. Rental History</h2>
              <div className="space-y-5">
                <div>
                  <label className={label}>Have you ever been evicted? *</label>
                  <select required name="hasEviction" value={form.hasEviction} onChange={handleChange} className={input}>
                    <option value="">Select...</option>
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
                  {form.hasEviction === 'yes' && (
                    <textarea name="evictionDetails" value={form.evictionDetails} onChange={handleChange}
                      placeholder="Please explain the circumstances..." rows={3}
                      className={input + " mt-2 resize-none"} />
                  )}
                </div>
                <div>
                  <label className={label}>Have you ever had a lease violation? *</label>
                  <select required name="hasLeaseViolation" value={form.hasLeaseViolation} onChange={handleChange} className={input}>
                    <option value="">Select...</option>
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
                  {form.hasLeaseViolation === 'yes' && (
                    <textarea name="leaseViolationDetails" value={form.leaseViolationDetails} onChange={handleChange}
                      placeholder="Please explain the circumstances..." rows={3}
                      className={input + " mt-2 resize-none"} />
                  )}
                </div>
              </div>
            </div>

            {/* ── 4. Employment & Financial ── */}
            <div className={section}>
              <h2 className={sectionTitle}>4. Employment & Financial Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={label}>Employer Name *</label>
                  <input required name="employer" value={form.employer} onChange={handleChange} className={input} />
                </div>
                <div>
                  <label className={label}>Job Title *</label>
                  <input required name="jobTitle" value={form.jobTitle} onChange={handleChange} className={input} />
                </div>
                <div>
                  <label className={label}>Gross Monthly Income *</label>
                  <input required name="monthlyIncome" value={form.monthlyIncome} onChange={handleChange} placeholder="$" className={input} />
                </div>
                <div>
                  <label className={label}>Length of Employment *</label>
                  <input required name="employmentLength" value={form.employmentLength} onChange={handleChange} placeholder="e.g. 2 years" className={input} />
                </div>
                <div>
                  <label className={label}>Self-Reported Credit Score *</label>
                  <input required name="creditScore" value={form.creditScore} onChange={handleChange} placeholder="e.g. 680" className={input} />
                </div>
                <div className="sm:col-span-2">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-3 text-sm text-blue-800">
                    <strong>Pay Stubs:</strong> Please email your last 3 months of pay stubs to <strong>(314) 649-0073</strong> (text) or directly to us after submitting. Do not include pay stubs as attachments here.
                  </div>
                </div>
              </div>
            </div>

            {/* ── 5. Occupancy Details ── */}
            <div className={section}>
              <h2 className={sectionTitle}>5. Occupancy Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={label}>Number of Adults *</label>
                  <input required type="number" min="1" name="numAdults" value={form.numAdults} onChange={handleOccupantCount} className={input} />
                </div>
                <div>
                  <label className={label}>Number of Children</label>
                  <input type="number" min="0" name="numChildren" value={form.numChildren} onChange={handleOccupantCount} className={input} />
                </div>
                <div className="sm:col-span-2">
                  <label className={label}>Full Names of All Occupants *</label>
                  <textarea required name="occupantNames" value={form.occupantNames} onChange={handleChange}
                    placeholder="List the full name of every person who will reside in the unit" rows={3}
                    className={input + " resize-none"} />
                </div>
              </div>
            </div>

            {/* ── 6. Pets ── */}
            <div className={section}>
              <h2 className={sectionTitle}>6. Pets</h2>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6 text-sm text-amber-800 leading-relaxed">
                <strong>Pet Policy:</strong> A pet deposit of <strong>$250.00 per pet</strong> is required. Up to $150.00 of this deposit is refundable upon move-out pending inspection; the remaining $100.00 is a non-refundable pet cleanup fee. In addition, a monthly pet rent of <strong>$50.00 per pet</strong> will be added to your monthly rent. Paradigm Rentals reserves the right to approve or deny pets based on type, breed, and weight.
              </div>
              {pets.map((pet, i) => (
                <div key={i} className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Pet {i + 1}</p>
                    {pets.length > 1 && (
                      <button type="button" onClick={() => removePet(i)} className="text-xs text-red-500 hover:text-red-700">Remove</button>
                    )}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className={label}>Type</label>
                      <input value={pet.type} onChange={e => handlePet(i, 'type', e.target.value)} placeholder="e.g. Dog" className={input} />
                    </div>
                    <div>
                      <label className={label}>Breed</label>
                      <input value={pet.breed} onChange={e => handlePet(i, 'breed', e.target.value)} placeholder="e.g. Labrador" className={input} />
                    </div>
                    <div>
                      <label className={label}>Weight (lbs)</label>
                      <input value={pet.weight} onChange={e => handlePet(i, 'weight', e.target.value)} placeholder="e.g. 45" className={input} />
                    </div>
                  </div>
                </div>
              ))}
              <button type="button" onClick={addPet}
                className="mt-2 text-sm text-primary-600 hover:text-primary-800 font-medium flex items-center gap-1">
                <span>+ Add Another Pet</span>
              </button>
              <p className="text-xs text-gray-400 mt-3">Leave blank if no pets.</p>
            </div>

            {/* ── 7. Vehicles ── */}
            <div className={section}>
              <h2 className={sectionTitle}>7. Vehicle Information</h2>
              <p className="text-sm text-gray-500 mb-5">List all vehicles that will be parked at the property.</p>
              {vehicles.map((vehicle, i) => (
                <div key={i} className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Vehicle {i + 1}</p>
                    {vehicles.length > 1 && (
                      <button type="button" onClick={() => removeVehicle(i)} className="text-xs text-red-500 hover:text-red-700">Remove</button>
                    )}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className={label}>Make</label>
                      <input value={vehicle.make} onChange={e => handleVehicle(i, 'make', e.target.value)} placeholder="e.g. Toyota" className={input} />
                    </div>
                    <div>
                      <label className={label}>Model</label>
                      <input value={vehicle.model} onChange={e => handleVehicle(i, 'model', e.target.value)} placeholder="e.g. Camry" className={input} />
                    </div>
                    <div>
                      <label className={label}>License Plate</label>
                      <input value={vehicle.plate} onChange={e => handleVehicle(i, 'plate', e.target.value)} placeholder="e.g. ABC1234" className={input + " uppercase"} />
                    </div>
                  </div>
                </div>
              ))}
              <button type="button" onClick={addVehicle}
                className="mt-2 text-sm text-primary-600 hover:text-primary-800 font-medium">
                + Add Another Vehicle
              </button>
            </div>

            {/* ── 8. Lifestyle Disclosures ── */}
            <div className={section}>
              <h2 className={sectionTitle}>8. Disclosures</h2>
              <div className="space-y-5">
                <div>
                  <label className={label}>Smoking Status *</label>
                  <select required name="smokingStatus" value={form.smokingStatus} onChange={handleChange} className={input}>
                    <option value="">Select...</option>
                    <option value="non-smoker">Non-Smoker</option>
                    <option value="smoker-outside">Smoker — Outside Only</option>
                    <option value="smoker">Smoker</option>
                  </select>
                  <p className="text-xs text-gray-400 mt-1">All Paradigm Rentals properties are strictly non-smoking indoors.</p>
                </div>
                <div>
                  <label className={label}>Have you ever filed for bankruptcy? *</label>
                  <select required name="hasBankruptcy" value={form.hasBankruptcy} onChange={handleChange} className={input}>
                    <option value="">Select...</option>
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
                  {form.hasBankruptcy === 'yes' && (
                    <textarea name="bankruptcyDetails" value={form.bankruptcyDetails} onChange={handleChange}
                      placeholder="Please provide details (type, year, discharge status)..." rows={3}
                      className={input + " mt-2 resize-none"} />
                  )}
                </div>
              </div>
            </div>

            {/* ── 9. Desired Unit ── */}
            <div className={section}>
              <h2 className={sectionTitle}>9. Rental Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={label}>Desired Unit / Property</label>
                  <input name="desiredUnit" value={form.desiredUnit} onChange={handleChange} placeholder="e.g. 2BR apartment" className={input} />
                </div>
                <div>
                  <label className={label}>Desired Move-In Date *</label>
                  <input required type="date" name="moveInDate" value={form.moveInDate} onChange={handleChange} className={input} />
                </div>
              </div>
            </div>

            {/* ── 10. Authorization ── */}
            <div className={section}>
              <h2 className={sectionTitle}>10. Authorization for Screening</h2>
              <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                By checking the boxes below, I hereby authorize Paradigm Rentals to obtain consumer reports and conduct the following checks as part of evaluating my rental application. I understand these checks will be performed by a third-party screening service and that I have rights under the Fair Credit Reporting Act (FCRA).
              </p>
              <div className="space-y-4">
                {[
                  { name: 'authCredit', label: 'I authorize Paradigm Rentals to run a credit check on my behalf.' },
                  { name: 'authCriminal', label: 'I authorize Paradigm Rentals to conduct a criminal background check.' },
                  { name: 'authEviction', label: 'I authorize Paradigm Rentals to review my eviction history.' },
                ].map(({ name, label: lbl }) => (
                  <label key={name} className="flex items-start gap-3 cursor-pointer">
                    <input required type="checkbox" name={name} checked={form[name]} onChange={handleChange}
                      className="mt-0.5 w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500" />
                    <span className="text-sm text-gray-700">{lbl}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* ── 11. Agreements ── */}
            <div className={section}>
              <h2 className={sectionTitle}>11. Financial Agreements & Terms</h2>
              <div className="bg-gray-50 rounded-lg p-5 mb-6 text-sm text-gray-700 space-y-3 leading-relaxed">
                <p><strong>Security Deposit:</strong> A security deposit of <strong>$1,000.00</strong> is required prior to move-in.</p>
                <p><strong>First & Last Month Rent:</strong> First month's rent and last month's rent are due in full at the time of lease signing.</p>
                <p><strong>Application Fee:</strong> A non-refundable application fee of <strong>$65.00</strong> is due upon submission of this application. This fee covers the cost of screening and is not applied toward rent or deposit.</p>
              </div>

              {/* Application Fee Payment — Embedded Stripe */}
              <div className="border-2 border-primary-200 rounded-xl overflow-hidden mb-6">
                <div className="bg-primary-600 px-5 py-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  <span className="text-white font-semibold">Application Fee — $65.00</span>
                </div>
                <div className="p-5">
                  <p className="text-sm text-gray-600 mb-4">
                    Pay your non-refundable $65.00 application fee securely below. Payment is required to process your application.
                  </p>
                  <button
                    type="button"
                    onClick={() => window.open('https://buy.stripe.com/fZu4gy7hG9PUbXc9I153O00', 'stripe_payment', 'width=500,height=700,scrollbars=yes,resizable=yes,left=' + Math.round((window.screen.width - 500) / 2) + ',top=' + Math.round((window.screen.height - 700) / 2))}
                    className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z"/>
                    </svg>
                    Pay $65.00 via Stripe
                  </button>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { name: 'agreeSecurityDeposit', label: 'I understand and agree to the $1,000.00 security deposit requirement.' },
                  { name: 'agreeFirstLast', label: 'I understand and agree that first and last month\'s rent are due at lease signing if my application is approved.' },
                  { name: 'agreeAppFee', label: 'I understand the $65.00 application fee is non-refundable regardless of the outcome of my application.' },
                  { name: 'agreeTerms', label: 'I certify that all information provided in this application is true and accurate to the best of my knowledge. I understand that any misrepresentation may result in denial or termination of my tenancy.' },
                ].map(({ name, label: lbl }) => (
                  <label key={name} className="flex items-start gap-3 cursor-pointer">
                    <input required type="checkbox" name={name} checked={form[name]} onChange={handleChange}
                      className="mt-0.5 w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500" />
                    <span className="text-sm text-gray-700">{lbl}</span>
                  </label>
                ))}
              </div>
            </div>

            {submitError && (
              <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-5 py-4 text-sm">
                {submitError}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-primary-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-primary-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? 'Submitting…' : 'Submit Application — $65.00 Fee Required'}
            </button>
            <p className="text-center text-xs text-gray-400 pb-4">
              By submitting this application you confirm all information is accurate and consent to all authorizations listed above.
            </p>

          </form>
        </div>
      </section>

      <Footer />

      {/* ── Occupant SSN Modal ── */}
      {showSSNModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-900">Additional Occupant Information</h2>
              <p className="text-sm text-gray-500 mt-1">
                Please provide the full name and Social Security Number for each additional occupant.
                This information is used solely for screening purposes.
              </p>
            </div>
            <div className="p-6 space-y-6">
              {occupantSSNs.map((occ, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-5">
                  <p className="text-sm font-semibold text-primary-700 uppercase tracking-wide mb-4">
                    Occupant {i + 2}
                  </p>
                  <div className="space-y-4">
                    <div>
                      <label className={label}>Full Name *</label>
                      <input
                        required
                        value={occ.name}
                        onChange={e => {
                          const updated = occupantSSNs.map((o, idx) => idx === i ? { ...o, name: e.target.value } : o);
                          setOccupantSSNs(updated);
                        }}
                        placeholder="First and Last Name"
                        className={input}
                      />
                    </div>
                    <div>
                      <label className={label}>Social Security Number *</label>
                      <input
                        required
                        value={occ.ssn}
                        onChange={e => {
                          const updated = occupantSSNs.map((o, idx) => idx === i ? { ...o, ssn: e.target.value } : o);
                          setOccupantSSNs(updated);
                        }}
                        placeholder="XXX-XX-XXXX"
                        className={input}
                      />
                      <p className="text-xs text-gray-400 mt-1">Used solely for background and credit screening.</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-6 border-t border-gray-100">
              <button
                type="button"
                onClick={() => setShowSSNModal(false)}
                className="w-full bg-primary-600 text-white py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors"
              >
                Save & Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
