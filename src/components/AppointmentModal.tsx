import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, User, Phone, Mail, MapPin, MessageSquare, CheckCircle, Flame, Snowflake, AlertTriangle } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data';
import { Appointment } from '../types';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  onSuccess: (appointment: Appointment) => void;
}

export default function AppointmentModal({ isOpen, onClose, initialService = '', onSuccess }: AppointmentModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: initialService || SERVICES[0].title,
    date: '',
    time: 'Morning (8 AM - 12 PM)',
    address: '',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successData, setSuccessData] = useState<Appointment | null>(null);

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
    if (!formData.date) newErrors.date = 'Please select a preferred date';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API Call
    setTimeout(() => {
      const newAppointment: Appointment = {
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

      // Save to local storage for persistence across reloads
      const existing = localStorage.getItem('huxley_appointments');
      const list = existing ? JSON.parse(existing) : [];
      list.push(newAppointment);
      localStorage.setItem('huxley_appointments', JSON.stringify(list));

      setIsSubmitting(false);
      setSuccessData(newAppointment);
      onSuccess(newAppointment);
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
    setSuccessData(null);
  };

  const handleClose = () => {
    handleReset();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-brand-blue/80 backdrop-blur-sm"
            id="modal-backdrop"
          />

          {/* Modal Content Wrapper */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl"
            id="appointment-modal-container"
          >
            {/* Top Indicator Accent */}
            <div className="h-2 bg-brand-orange w-full" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute right-4 top-4 rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition"
              id="close-modal-btn"
              aria-label="Close scheduler"
            >
              <X className="h-5 w-5" />
            </button>

            {!successData ? (
              <div className="p-6 sm:p-8" id="appointment-form-view">
                <div className="mb-6">
                  <div className="flex items-center gap-2 text-brand-orange font-semibold tracking-wider uppercase text-xs">
                    <Calendar className="h-4 w-4" />
                    <span>Booking Portal</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-brand-blue mt-1">
                    Request an Appointment
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">
                    Submit your details and our team will contact you shortly to confirm your service window.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Service Type */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
                      Service Requested
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full rounded-lg border border-brand-gray-med bg-brand-gray-light px-3 py-2 text-sm text-brand-blue focus:border-brand-orange focus:outline-none transition"
                      id="input-service-type"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full rounded-lg border bg-brand-gray-light py-2 pl-9 pr-3 text-sm text-brand-blue focus:outline-none transition ${
                          errors.name ? 'border-red-500 focus:border-red-500' : 'border-brand-gray-med focus:border-brand-orange'
                        }`}
                        id="input-full-name"
                      />
                    </div>
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                        <input
                          type="tel"
                          placeholder="(847) 555-0199"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className={`w-full rounded-lg border bg-brand-gray-light py-2 pl-9 pr-3 text-sm text-brand-blue focus:outline-none transition ${
                            errors.phone ? 'border-red-500 focus:border-red-500' : 'border-brand-gray-med focus:border-brand-orange'
                          }`}
                          id="input-phone"
                        />
                      </div>
                      {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                        <input
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={`w-full rounded-lg border bg-brand-gray-light py-2 pl-9 pr-3 text-sm text-brand-blue focus:outline-none transition ${
                            errors.email ? 'border-red-500 focus:border-red-500' : 'border-brand-gray-med focus:border-brand-orange'
                          }`}
                          id="input-email"
                        />
                      </div>
                      {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
                      Service Address
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="e.g. 123 Main St, Long Grove, IL"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className={`w-full rounded-lg border bg-brand-gray-light py-2 pl-9 pr-3 text-sm text-brand-blue focus:outline-none transition ${
                          errors.address ? 'border-red-500 focus:border-red-500' : 'border-brand-gray-med focus:border-brand-orange'
                        }`}
                        id="input-address"
                      />
                    </div>
                    {errors.address && <p className="text-xs text-red-500 mt-1">{errors.address}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Preferred Date */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className={`w-full rounded-lg border bg-brand-gray-light px-3 py-2 text-sm text-brand-blue focus:outline-none transition ${
                          errors.date ? 'border-red-500' : 'border-brand-gray-med focus:border-brand-orange'
                        }`}
                        id="input-date"
                      />
                      {errors.date && <p className="text-xs text-red-500 mt-1">{errors.date}</p>}
                    </div>

                    {/* Preferred Time */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
                        Preferred Time Window
                      </label>
                      <select
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full rounded-lg border border-brand-gray-med bg-brand-gray-light px-3 py-2 text-sm text-brand-blue focus:border-brand-orange focus:outline-none transition"
                        id="input-time"
                      >
                        <option>Morning (8 AM - 12 PM)</option>
                        <option>Afternoon (12 PM - 4 PM)</option>
                        <option>Late Afternoon (4 PM - 7 PM)</option>
                        <option>Emergency 24/7 Dispatch</option>
                      </select>
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
                      Notes / System Issues (Optional)
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                      <textarea
                        rows={2}
                        placeholder="e.g., AC blowing warm air, loud whistling noise..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full rounded-lg border border-brand-gray-med bg-brand-gray-light py-2 pl-9 pr-3 text-sm text-brand-blue focus:border-brand-orange focus:outline-none transition"
                        id="input-notes"
                      />
                    </div>
                  </div>

                  {/* Emergency Warning */}
                  {formData.serviceType.toLowerCase().includes('emergency') && (
                    <div className="flex gap-2 rounded-lg bg-orange-50 border border-brand-orange/30 p-3 text-xs text-brand-blue">
                      <AlertTriangle className="h-4 w-4 text-brand-orange shrink-0 mt-0.5" />
                      <span>
                        <strong>Emergency callout:</strong> Dispatch charges may apply. For absolute immediate help, we suggest calling <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="font-bold text-brand-orange underline hover:text-brand-orange-light">{COMPANY_INFO.phone}</a> directly.
                      </span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 cursor-pointer bg-brand-orange hover:bg-opacity-90 text-white font-semibold py-3 px-4 rounded-xl shadow-lg transition active:scale-[0.98] disabled:opacity-75 disabled:cursor-not-allowed"
                    id="submit-appointment-btn"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Securing Slot...</span>
                      </>
                    ) : (
                      <span>Request Booking Slot</span>
                    )}
                  </button>
                </form>
              </div>
            ) : (
              <div className="p-8 text-center" id="appointment-success-view">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-6">
                  <CheckCircle className="h-10 w-10 animate-bounce" />
                </div>
                <h3 className="text-2xl font-display font-bold text-brand-blue mb-2">
                  Request Received!
                </h3>
                <p className="text-gray-500 text-sm mb-6 max-w-sm mx-auto">
                  Thank you, <strong>{successData.name}</strong>. We have registered your request for <strong>{successData.serviceType}</strong> on <strong>{successData.date}</strong>.
                </p>

                <div className="bg-brand-gray-light border border-brand-gray-med rounded-xl p-4 text-left text-xs text-brand-blue max-w-md mx-auto mb-6 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400 uppercase font-semibold">Booking ID:</span>
                    <span className="font-mono font-bold text-brand-blue-light">{successData.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 uppercase font-semibold">Service:</span>
                    <span className="font-semibold">{successData.serviceType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 uppercase font-semibold">Preferred Time:</span>
                    <span className="font-semibold">{successData.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 uppercase font-semibold">Location:</span>
                    <span className="font-semibold text-right max-w-[200px] truncate">{successData.address}</span>
                  </div>
                </div>

                <p className="text-xs text-gray-400 mb-6">
                  Our service coordinator will phone you at <strong>{successData.phone}</strong> within 15 minutes to confirm the technician's arrival window.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleClose}
                    className="flex-1 border border-brand-gray-med hover:bg-gray-50 text-brand-blue font-semibold py-2.5 px-4 rounded-xl transition"
                    id="success-close-btn"
                  >
                    Close Window
                  </button>
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="flex-1 flex items-center justify-center gap-2 bg-brand-blue text-white font-semibold py-2.5 px-4 rounded-xl hover:bg-brand-blue-light transition"
                    id="success-call-btn"
                  >
                    <Phone className="h-4 w-4" />
                    <span>Call Now ({COMPANY_INFO.phone})</span>
                  </a>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
