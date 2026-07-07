import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Menu, X, Calendar, Flame, Snowflake, Clock, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data';

interface HeaderProps {
  onOpenScheduler: () => void;
}

export default function Header({ onOpenScheduler }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Why Huxley', href: '#why-huxley' },
    { name: 'Before & After', href: '#gallery' },
    { name: 'Maintenance', href: '#maintenance' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Service Area', href: '#service-area' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Notification Banner */}
      <div className="bg-brand-blue text-white text-xs py-2 px-4 border-b border-brand-blue-light font-sans tracking-wide" id="top-notification-banner">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap justify-center items-center gap-4 text-center">
            <span className="flex items-center gap-1.5 text-brand-orange font-bold uppercase tracking-wider text-[10px] bg-brand-orange-light/10 px-2 py-0.5 rounded">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-orange animate-ping" />
              Emergency Notice
            </span>
            <span>24/7 Dispatch in Long Grove & Chicago Suburbs</span>
          </div>
          <div className="flex items-center gap-4 text-gray-300">
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5 text-brand-orange" />
              <span>Response Under 2 Hours</span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5 text-brand-orange" />
              <span>Licensed, Bonded & Insured</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
            : 'bg-white py-5'
        }`}
        id="main-nav-header"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2 group" id="logo-link">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-brand-blue text-white overflow-hidden shadow-inner group-hover:scale-105 transition-transform">
              <Flame className="h-5 w-5 text-brand-orange absolute -translate-x-1.5 -translate-y-1.5 group-hover:-translate-y-1 transition-transform" />
              <Snowflake className="h-5 w-5 text-sky-400 absolute translate-x-1.5 translate-y-1.5 group-hover:translate-y-1 transition-transform" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-display font-extrabold tracking-tight text-brand-blue leading-none">
                HUXLEY
              </span>
              <span className="text-[9px] font-sans font-bold text-gray-500 uppercase tracking-[0.25em] leading-none mt-1">
                Heating & Cooling
              </span>
            </div>
          </a>

          {/* Desktop Navigation Link Menu */}
          <nav className="hidden lg:flex items-center gap-6" id="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-brand-orange transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Call and Booking Quick CTA Actions */}
          <div className="hidden sm:flex items-center gap-4" id="desktop-ctas">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center gap-2 text-brand-blue hover:text-brand-orange font-bold text-sm transition-colors py-2 px-3 rounded-lg hover:bg-gray-50 border border-transparent hover:border-gray-100"
              id="header-phone-link"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-orange-light text-brand-orange">
                <Phone className="h-4 w-4" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Talk to a Tech</span>
                <span className="font-display leading-tight">{COMPANY_INFO.phone}</span>
              </div>
            </a>
            
            <button
              onClick={onOpenScheduler}
              className="flex items-center gap-2 cursor-pointer bg-brand-orange hover:bg-opacity-90 text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow-md hover:shadow-lg transition active:scale-[0.98]"
              id="header-schedule-btn"
            >
              <Calendar className="h-4 w-4" />
              <span>Schedule Service</span>
            </button>
          </div>

          {/* Mobile Menu Open Toggle */}
          <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex sm:hidden h-10 w-10 items-center justify-center rounded-xl bg-brand-orange-light text-brand-orange"
              id="mobile-phone-shortcut-btn"
              aria-label="Call Huxley"
            >
              <Phone className="h-5 w-5" />
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="h-10 w-10 flex items-center justify-center rounded-xl hover:bg-gray-100 text-brand-blue"
              id="mobile-menu-toggle-btn"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Collapse Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-30 bg-black/50 lg:hidden"
              id="mobile-menu-backdrop"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }}
              className="fixed right-0 top-0 bottom-0 z-40 w-full max-w-sm bg-white p-6 shadow-2xl flex flex-col justify-between lg:hidden"
              id="mobile-nav-drawer"
            >
              <div>
                {/* Header inside drawer */}
                <div className="flex items-center justify-between pb-6 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-blue text-white">
                      <Flame className="h-4 w-4 text-brand-orange" />
                    </div>
                    <span className="font-display font-extrabold text-brand-blue tracking-tight text-lg">HUXLEY</span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-100"
                    id="drawer-close-btn"
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Nav Links inside drawer */}
                <div className="py-6 flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={handleLinkClick}
                      className="text-base font-semibold text-brand-blue hover:text-brand-orange py-2 px-3 rounded-lg hover:bg-brand-gray-light transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Action buttons inside drawer footer */}
              <div className="border-t border-gray-100 pt-6 space-y-4">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="w-full flex items-center justify-center gap-3 bg-brand-blue text-white font-bold py-3 px-4 rounded-xl shadow-md"
                  id="drawer-phone-btn"
                >
                  <Phone className="h-5 w-5 text-brand-orange" />
                  <span>Call Huxley: {COMPANY_INFO.phone}</span>
                </a>

                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenScheduler();
                  }}
                  className="w-full flex items-center justify-center gap-2 cursor-pointer bg-brand-orange hover:bg-opacity-90 text-white font-bold py-3 px-4 rounded-xl shadow-md transition"
                  id="drawer-schedule-btn"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Schedule Appointment</span>
                </button>

                <p className="text-center text-xs text-gray-400 mt-4">
                  Available 24 Hours for Emergency Dispatches.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
