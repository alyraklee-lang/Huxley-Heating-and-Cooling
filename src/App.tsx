/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import BeforeAfter from './components/BeforeAfter';
import Testimonials from './components/Testimonials';
import Maintenance from './components/Maintenance';
import ServiceProcess from './components/ServiceProcess';
import Faqs from './components/Faqs';
import ServiceArea from './components/ServiceArea';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';
import { COMPANY_INFO } from './data';
import { Phone, Calendar, ArrowUp, Flame, Snowflake } from 'lucide-react';

export default function App() {
  const [isSchedulerOpen, setIsSchedulerOpen] = useState(false);
  const [preSelectedService, setPreSelectedService] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll to top listener
  useEffect(() => {
    const toggleVisibility = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleOpenScheduler = (serviceName: string = '') => {
    setPreSelectedService(serviceName);
    setIsSchedulerOpen(true);
  };

  const handleBookSuccess = (appointment: any) => {
    console.log('Successfully booked appointment:', appointment);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen bg-white relative font-sans text-gray-800 antialiased selection:bg-brand-orange/30 selection:text-brand-blue" id="huxley-hvac-app">
      
      {/* Sticky Top Header Navigation */}
      <Header onOpenScheduler={() => handleOpenScheduler('')} />

      {/* Main Sections */}
      <main>
        {/* Hero Section */}
        <Hero onOpenScheduler={() => handleOpenScheduler('')} />

        {/* Services Showcase Section */}
        <Services onSelectService={(serviceName) => handleOpenScheduler(serviceName)} />

        {/* About Section */}
        <About />

        {/* Why Choose Huxley Section */}
        <WhyChooseUs />

        {/* Before / After Transformation Slider Section */}
        <BeforeAfter />

        {/* Seasonal Maintenance Promotion Section */}
        <Maintenance onOpenScheduler={() => handleOpenScheduler('HVAC Tune-Ups')} />

        {/* 4-Step Process Guide Section */}
        <ServiceProcess />

        {/* Customer reviews and testimonials slider */}
        <Testimonials />

        {/* Service Area Checkers & SEO local Section */}
        <ServiceArea />

        {/* On-page Contact & Appointment requests form Section */}
        <ContactForm />
      </main>

      {/* Footer copyright, services links, and coordinates */}
      <Footer />

      {/* Persistent Floating Mobile CTA bar */}
      <div className="fixed bottom-0 inset-x-0 z-30 bg-white border-t border-brand-gray-med p-3 shadow-[0_-8px_30px_rgb(0,0,0,0.12)] flex sm:hidden items-center justify-between gap-3 max-w-full">
        {/* Call CTA */}
        <a
          href={`tel:${COMPANY_INFO.phoneRaw}`}
          className="flex-1 flex items-center justify-center gap-2 bg-brand-blue text-white font-bold text-xs py-3 px-4 rounded-xl active:scale-95 transition-transform"
          id="mobile-floating-call"
        >
          <Phone className="h-4 w-4 text-brand-orange" />
          <span>Call: {COMPANY_INFO.phone}</span>
        </a>

        {/* Book Appointment CTA */}
        <button
          onClick={() => handleOpenScheduler('')}
          className="flex-1 flex items-center justify-center gap-2 cursor-pointer bg-brand-orange text-white font-bold text-xs py-3 px-4 rounded-xl active:scale-95 transition-transform shadow-md"
          id="mobile-floating-book"
        >
          <Calendar className="h-4 w-4" />
          <span>Book Online</span>
        </button>
      </div>

      {/* Desktop Float-to-top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="hidden sm:flex fixed bottom-6 right-6 h-12 w-12 items-center justify-center rounded-xl bg-brand-blue text-white shadow-xl hover:bg-brand-orange border border-brand-blue-light hover:border-transparent transition-all z-40 cursor-pointer animate-fade-in hover:-translate-y-1"
          id="desktop-scroll-top-btn"
          aria-label="Scroll to top of page"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}

      {/* Global Interactive Booking Modal Overlay */}
      <AppointmentModal
        isOpen={isSchedulerOpen}
        onClose={() => setIsSchedulerOpen(false)}
        initialService={preSelectedService}
        onSuccess={handleBookSuccess}
      />

    </div>
  );
}

