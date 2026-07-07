import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin, Clock, Mail, CheckCircle, AlertTriangle, Send } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data';
import { Appointment } from '../types';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: SERVICES[0].title,
    date: '',
    time: 'Morning (8 AM - 12 PM)',
    address: '',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [bookedData, setBookedData] = useState<Appointment | null>(null);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.address.trim()) newErrors.address = 'Service address is required';
    if (!formData.date) newErrors.date = 'Preferred date is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate scheduling pipeline
    setTimeout(() => {
      const appointment: Appointment = {
        id: 'hux-' + Math.floor(Math.random() * 1000000),
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        serviceType: formData.serviceType,
        date: formData.date,
        time: formData.time,
        address: formData.address,
        notes: formData.notes,
        status: 'pending',
        createdAt: new Date().toISOString(),
      };

      // Store in local storage
      const existing = localStorage.getItem('huxley_appointments');
      const list = existing ? JSON.parse(existing) : [];
      list.push(appointment);
      localStorage.setItem('huxley_appointments', JSON.stringify(list));

      setIsSubmitting(false);
      setSuccess(true);
      setBookedData(appointment);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      serviceType: SERVICES[0].title,
      date: '',
      time: 'Morning (8 AM - 12 PM)',
      address: '',
      notes: '',
    });
    setErrors({});
    setSuccess(false);
    setBookedData(null);
  };

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold text-brand-orange uppercase tracking-widest bg-brand-orange-light/60 px-3 py-1 rounded">
            Book Service Now
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-blue tracking-tight">
            Schedule an Appointment or Ask a Question
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Fill out our online contact form to reserve your diagnostic slot, or call our customer care office directly to speak with a coordinator immediately.
          </p>
        </div>

        {/* Contact Matrix Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Company Details Left Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6" id="contact-info-panel">
            <div className="bg-brand-blue rounded-3xl p-8 text-white text-left flex-1 flex flex-col justify-between shadow-lg">
              <div>
                <span className="text-xs font-bold text-brand-orange uppercase tracking-wider">Huxley Office</span>
                <h3 className="text-2xl font-display font-extrabold text-white mt-1 mb-6">
                  {COMPANY_INFO.name}
                </h3>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex gap-4">
                    <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/5">
                      <MapPin className="h-5 w-5 text-brand-orange" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-semibold uppercase">Office Address</p>
                      <p className="text-sm font-semibold mt-0.5">{COMPANY_INFO.address}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4">
                    <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/5">
                      <Phone className="h-5 w-5 text-brand-orange" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-semibold uppercase">Direct Telephone</p>
                      <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-lg font-bold text-brand-orange hover:underline block mt-0.5">
                        {COMPANY_INFO.phone}
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex gap-4">
                    <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/5">
                      <Clock className="h-5 w-5 text-brand-orange" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-semibold uppercase">Operating Hours</p>
                      <p className="text-sm font-semibold mt-0.5">{COMPANY_INFO.hours}</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4">
                    <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/5">
                      <Mail className="h-5 w-5 text-brand-orange" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-semibold uppercase">General Email</p>
                      <p className="text-sm font-semibold mt-0.5">{COMPANY_INFO.email}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call Now Button on page */}
              <div className="pt-8 border-t border-brand-blue-light mt-8">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="w-full flex items-center justify-center gap-3 bg-brand-orange hover:bg-opacity-90 text-white font-bold py-3.5 px-4 rounded-xl shadow-md transition"
                  id="contact-call-btn"
                >
                  <Phone className="h-5 w-5 animate-pulse" />
                  <span>Call {COMPANY_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Appointment Form Right Column */}
          <div className="lg:col-span-7" id="contact-form-panel">
            <div className="bg-brand-gray-light border border-brand-gray-med rounded-3xl p-6 sm:p-8 shadow-sm h-full flex flex-col justify-center">
              
              {!success ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="text-left mb-4">
                    <h4 className="font-display font-bold text-lg text-brand-blue">
                      Service Booking Wizard
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      No payment required online. We will call you to confirm dispatch timing.
                    </p>
                  </div>

                  {/* Name Input */}
                  <div className="text-left">
                    <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">Full Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Robert Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full rounded-xl border bg-white px-3.5 py-2 text-sm text-brand-blue focus:outline-none transition ${
                        errors.name ? 'border-red-500 focus:border-red-500' : 'border-brand-gray-med focus:border-brand-orange'
                      }`}
                      id="form-full-name"
                    />
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                  </div>

                  {/* Phone & Email Inputs Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                    <div>
                      <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="e.g. (847) 555-0155"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full rounded-xl border bg-white px-3.5 py-2 text-sm text-brand-blue focus:outline-none transition ${
                          errors.phone ? 'border-red-500 focus:border-red-500' : 'border-brand-gray-med focus:border-brand-orange'
                        }`}
                        id="form-phone"
                      />
                      {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">Email Address</label>
                      <input
                        type="email"
                        placeholder="e.g. robert@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full rounded-xl border bg-white px-3.5 py-2 text-sm text-brand-blue focus:outline-none transition ${
                          errors.email ? 'border-red-500 focus:border-red-500' : 'border-brand-gray-med focus:border-brand-orange'
                        }`}
                        id="form-email"
                      />
                      {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Service selection */}
                  <div className="text-left">
                    <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">Service Type</label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full rounded-xl border border-brand-gray-med bg-white px-3.5 py-2 text-sm text-brand-blue focus:border-brand-orange focus:outline-none transition"
                      id="form-service-type"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Address Input */}
                  <div className="text-left">
                    <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">Service Address</label>
                    <input
                      type="text"
                      placeholder="e.g. 104 Country Lane, Long Grove, IL 60047"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className={`w-full rounded-xl border bg-white px-3.5 py-2 text-sm text-brand-blue focus:outline-none transition ${
                        errors.address ? 'border-red-500 focus:border-red-500' : 'border-brand-gray-med focus:border-brand-orange'
                      }`}
                      id="form-address"
                    />
                    {errors.address && <p className="text-xs text-red-500 mt-1">{errors.address}</p>}
                  </div>

                  {/* Date & Time Window */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                    <div>
                      <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">Preferred Date</label>
                      <input
                        type="date"
                        value={formData.date}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className={`w-full rounded-xl border bg-white px-3.5 py-2 text-sm text-brand-blue focus:outline-none transition ${
                          errors.date ? 'border-red-500 focus:border-red-500' : 'border-brand-gray-med focus:border-brand-orange'
                        }`}
                        id="form-date"
                      />
                      {errors.date && <p className="text-xs text-red-500 mt-1">{errors.date}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">Time Window</label>
                      <select
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full rounded-xl border border-brand-gray-med bg-white px-3.5 py-2 text-sm text-brand-blue focus:border-brand-orange focus:outline-none transition"
                        id="form-time-window"
                      >
                        <option>Morning (8 AM - 12 PM)</option>
                        <option>Afternoon (12 PM - 4 PM)</option>
                        <option>Late Afternoon (4 PM - 7 PM)</option>
                        <option>Emergency 24/7 Dispatch</option>
                      </select>
                    </div>
                  </div>

                  {/* Notes */}
                  <div className="text-left">
                    <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">Service Notes (Optional)</label>
                    <textarea
                      rows={2}
                      placeholder="e.g. AC compressor makes ticking noise, filter replacement is needed..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full rounded-xl border border-brand-gray-med bg-white px-3.5 py-2 text-sm text-brand-blue focus:border-brand-orange focus:outline-none transition"
                      id="form-notes"
                    />
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 cursor-pointer bg-brand-orange hover:bg-opacity-95 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                    id="form-submit-btn"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Transmitting Request...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Submit Service Request</span>
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="text-center py-10" id="onpage-form-success">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-6">
                    <CheckCircle className="h-10 w-10 animate-bounce" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-brand-blue mb-2">
                    Request Received!
                  </h3>
                  <p className="text-sm text-gray-500 mb-6 max-w-sm mx-auto">
                    Thanks for choosing Huxley, <strong>{bookedData?.name}</strong>. We registered your <strong>{bookedData?.serviceType}</strong> request for <strong>{bookedData?.date}</strong>.
                  </p>

                  <div className="bg-white border border-brand-gray-med rounded-2xl p-4 text-left text-xs text-brand-blue max-w-md mx-auto mb-6 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400 uppercase font-semibold">Booking ID:</span>
                      <span className="font-mono font-bold text-brand-blue-light">{bookedData?.id}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400 uppercase font-semibold">Date / Window:</span>
                      <span className="font-semibold">{bookedData?.date} • {bookedData?.time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400 uppercase font-semibold">Dispatch Address:</span>
                      <span className="font-semibold truncate max-w-[180px]">{bookedData?.address}</span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-400 mb-6">
                    Our scheduler will phone you at <strong>{bookedData?.phone}</strong> within 15 minutes to lock in your technician’s exact dispatch timing.
                  </p>

                  <button
                    onClick={handleReset}
                    className="bg-brand-blue hover:bg-brand-blue-light text-white font-bold text-xs py-2.5 px-6 rounded-xl shadow transition"
                    id="form-reset-success-btn"
                  >
                    Submit Another Request
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
