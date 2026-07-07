import React from 'react';
import { motion } from 'motion/react';
import { Phone, Calendar, ShieldCheck, Award, Star, ThumbsUp } from 'lucide-react';
import { COMPANY_INFO, ASSETS } from '../data';

interface HeroProps {
  onOpenScheduler: () => void;
}

export default function Hero({ onOpenScheduler }: HeroProps) {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-brand-blue overflow-hidden" id="hero-section">
      {/* Background Image with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.heroBanner}
          alt="Huxley HVAC professional technician"
          className="h-full w-full object-cover object-center opacity-45 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-blue/90 to-transparent md:to-brand-blue/20" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Copy Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Quick Emergency Notice Tag */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-brand-orange text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md"
              id="hero-emergency-tag"
            >
              <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
              Emergency HVAC Response • Long Grove & Surrounds
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-tight"
              id="hero-headline"
            >
              Reliable Heating & Cooling Service <span className="text-brand-orange">You Can Count On</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed"
              id="hero-subheadline"
            >
              {COMPANY_INFO.subheadline}
            </motion.p>

            {/* Trust Bullet Items */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2 text-sm text-white"
              id="hero-trust-bullets"
            >
              <span className="flex items-center gap-1.5 font-semibold">
                <ShieldCheck className="h-4 w-4 text-brand-orange" />
                <span>Fast Response</span>
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-gray-500 hidden sm:inline" />
              <span className="flex items-center gap-1.5 font-semibold">
                <Award className="h-4 w-4 text-brand-orange" />
                <span>Professional Technicians</span>
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-gray-500 hidden sm:inline" />
              <span className="flex items-center gap-1.5 font-semibold">
                <ThumbsUp className="h-4 w-4 text-brand-orange" />
                <span>Quality Service Guarantee</span>
              </span>
            </motion.div>

            {/* Core Action Call buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
              id="hero-actions"
            >
              <button
                onClick={onOpenScheduler}
                className="flex items-center justify-center gap-2 cursor-pointer bg-brand-orange hover:bg-opacity-90 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5 active:scale-95"
                id="hero-schedule-btn"
              >
                <Calendar className="h-5 w-5" />
                <span>Schedule Service</span>
              </button>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 bg-white text-brand-blue hover:bg-gray-100 font-bold py-4 px-8 rounded-xl shadow-lg border border-transparent hover:border-gray-200 transition transform hover:-translate-y-0.5 active:scale-95"
                id="hero-call-btn"
              >
                <Phone className="h-5 w-5 text-brand-orange" />
                <span>Call Now: {COMPANY_INFO.phone}</span>
              </a>
            </motion.div>

          </div>

          {/* Trust Counter Card Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
            id="hero-badge-card-container"
          >
            <div className="bg-brand-blue/85 border border-brand-blue-light rounded-2xl p-6 sm:p-8 backdrop-blur-md max-w-sm shadow-2xl space-y-6">
              
              {/* Star Rating Block */}
              <div>
                <div className="flex items-center gap-1 text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <h4 className="text-xl font-display font-bold text-white">
                  Top-Rated Customer Choice
                </h4>
                <p className="text-xs text-gray-400 mt-1">
                  Based on over {COMPANY_INFO.reviewCount} verified local reviews in Long Grove & surrounding suburbs.
                </p>
              </div>

              <hr className="border-brand-blue-light" />

              {/* Verified Badge info */}
              <div className="space-y-3">
                <div className="flex gap-3 text-sm text-left">
                  <div className="h-5 w-5 rounded-full bg-brand-orange-light text-brand-orange flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[10px] font-bold">✓</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white">Locally Owned & Managed</h5>
                    <p className="text-xs text-gray-400">Deeply rooted in Lake County/Long Grove communities.</p>
                  </div>
                </div>

                <div className="flex gap-3 text-sm text-left">
                  <div className="h-5 w-5 rounded-full bg-brand-orange-light text-brand-orange flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[10px] font-bold">✓</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white">NATE-Certified Experts</h5>
                    <p className="text-xs text-gray-400">All of our technicians are fully certified and vetted.</p>
                  </div>
                </div>
              </div>

              {/* Emergency Banner accent inside card */}
              <div className="bg-brand-orange/10 border border-brand-orange/30 rounded-xl p-3 text-center">
                <p className="text-xs text-brand-orange font-bold uppercase tracking-wider">
                  ❄ 24/7 Heat & AC Emergency Hotline ☼
                </p>
                <p className="text-xs text-white mt-1">
                  Call <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="font-bold underline hover:text-brand-orange-light">{COMPANY_INFO.phone}</a> for rapid dispatch.
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
