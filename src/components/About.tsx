import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, UserCheck, HeartHandshake, Sparkles, Award } from 'lucide-react';
import { COMPANY_INFO, ASSETS } from '../data';

export default function About() {
  const highlights = [
    {
      title: 'Experienced Technicians',
      description: 'Our certified pros possess decades of combined HVAC experience solving complex comfort issues.',
      icon: UserCheck
    },
    {
      title: 'Honest Recommendations',
      description: 'Transparent diagnostics. We only advise services you genuinely need—never upselling or masking costs.',
      icon: HeartHandshake
    },
    {
      title: 'Clean & Respectful Service',
      description: 'We respect your floors, furniture, and family. Techs wear clean boot covers and lay protection cloths.',
      icon: Sparkles
    },
    {
      title: 'Reliable Repairs & Installs',
      description: 'Built to code and calibrated to perfection. We stand behind our workmanship on every job.',
      icon: ShieldCheck
    },
    {
      title: 'Guaranteed Satisfaction',
      description: 'If you are not entirely comfortable and satisfied, we will work until we make it right.',
      icon: Award
    },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Column */}
          <div className="lg:col-span-5 relative" id="about-visual">
            {/* Background Accent Box */}
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-brand-orange-light rounded-3xl -z-10" />
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-brand-blue/5 rounded-3xl -z-10" />

            {/* Main Image */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
              <img
                src={ASSETS.homeInterior}
                alt="Perfect indoor climate control"
                className="w-full h-auto object-cover object-center aspect-[4/3] hover:scale-105 transition duration-500"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* floating badge */}
            <div className="absolute bottom-6 left-6 bg-brand-blue text-white px-5 py-4 rounded-xl shadow-xl flex items-center gap-3 border border-brand-blue-light">
              <div className="h-10 w-10 rounded-lg bg-brand-orange flex items-center justify-center shrink-0">
                <span className="font-display font-extrabold text-white text-lg">14+</span>
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold leading-none">Years Serving</p>
                <p className="font-display text-sm font-bold text-white mt-1">Chicago Suburbs</p>
              </div>
            </div>
          </div>

          {/* Copy and Bullet highlights column */}
          <div className="lg:col-span-7 space-y-6 text-left" id="about-text">
            <div>
              <span className="text-xs font-semibold text-brand-orange uppercase tracking-widest bg-brand-orange-light/40 px-3 py-1 rounded">
                About Huxley Heating & Cooling
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-blue tracking-tight mt-3">
                Dedicated to Keeping Your Home Comfortable Year-Round
              </h2>
            </div>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              At <strong>Huxley Heating and Cooling Service</strong>, we understand that your HVAC system is the heartbeat of your home. Located in scenic Long Grove, Illinois, we serve homeowners throughout the northern Chicago suburbs with fast, professional, and reliable temperature control solutions.
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Our business is founded on integrity, technical mastery, and unmatched customer care. Whether you are dealing with a frozen AC unit in the height of July or a heating failure during a sub-zero January blizzard, our NATE-certified experts are ready to deliver fast relief and permanent comfort solutions.
            </p>

            {/* Highlight list */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4" id="about-highlights">
              {highlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="flex gap-3 text-left">
                    <div className="h-10 w-10 rounded-lg bg-brand-gray-light text-brand-blue flex items-center justify-center shrink-0 border border-brand-gray-med">
                      <IconComponent className="h-5 w-5 text-brand-orange" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-sm text-brand-blue">{item.title}</h4>
                      <p className="text-xs text-gray-500 mt-1 leading-normal">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
