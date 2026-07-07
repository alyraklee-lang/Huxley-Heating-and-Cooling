import React from 'react';
import { Calendar, ShieldAlert, Zap, HeartPulse, Hammer, ArrowRight } from 'lucide-react';
import { COMPANY_INFO, ASSETS } from '../data';

interface MaintenanceProps {
  onOpenScheduler: () => void;
}

export default function Maintenance({ onOpenScheduler }: MaintenanceProps) {
  const benefits = [
    {
      title: 'Prevent unexpected breakdowns',
      desc: 'Catch minor flaws before they trigger complex thermal shutoffs in the middle of a freezing or blistering night.',
      icon: ShieldAlert,
    },
    {
      title: 'Improve energy efficiency',
      desc: 'Clean coils, clean blowers, and fresh filters can slash cooling and heating fuel bills by up to 15%.',
      icon: Zap,
    },
    {
      title: 'Extend equipment lifespan',
      desc: 'Annual mechanical cleaning and calibrations prevent friction and overheating, adding years of safe service.',
      icon: Hammer,
    },
    {
      title: 'Maintain home comfort',
      desc: 'Ensure balanced static airflow, consistent humidity, and quiet, steady ventilation output throughout your rooms.',
      icon: HeartPulse,
    },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden" id="maintenance">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Frame */}
        <div className="bg-brand-blue rounded-3xl overflow-hidden shadow-2xl border border-brand-blue-light grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Block: Narrative & Bullet items */}
          <div className="p-8 sm:p-12 lg:p-16 lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
            <div>
              <span className="text-xs font-bold text-brand-orange uppercase tracking-wider bg-brand-orange-light/10 px-3 py-1 rounded">
                Huxley Comfort Shield Plan
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-white mt-3">
                Keep Your System Running Efficiently
              </h2>
              <p className="text-gray-300 text-sm mt-2 leading-relaxed max-w-xl">
                Neglecting seasonal tune-ups is the leading cause of premature HVAC breakdown. Our Comfort Shield Maintenance Plan safeguards your investments and ensures absolute comfort.
              </p>
            </div>

            {/* Benefits detail list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4" id="maintenance-benefits-grid">
              {benefits.map((b, idx) => {
                const IconComp = b.icon;
                return (
                  <div key={idx} className="flex gap-3 text-left">
                    <div className="h-8 w-8 rounded-lg bg-white/10 text-brand-orange flex items-center justify-center shrink-0 border border-white/5">
                      <IconComp className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-sm text-white">{b.title}</h4>
                      <p className="text-xs text-gray-400 mt-1 leading-normal">{b.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action CTA */}
            <div className="pt-6 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onOpenScheduler}
                className="w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer bg-brand-orange hover:bg-opacity-95 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg transition active:scale-[0.98]"
                id="maintenance-schedule-btn"
              >
                <Calendar className="h-4 w-4" />
                <span>Schedule Maintenance</span>
              </button>
              
              <span className="text-xs text-gray-400 text-center sm:text-left">
                Includes AC check-up or Heating check-up starting from just $89!
              </span>
            </div>
          </div>

          {/* Right Block: Image Showcase */}
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
            <img
              src={ASSETS.furnace}
              alt="Huxley high-efficiency residential gas furnace installation"
              className="absolute inset-0 w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            {/* Soft Warm overlay */}
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-brand-blue via-transparent to-transparent" />
            
            {/* Stat Bubble */}
            <div className="absolute bottom-6 right-6 bg-brand-blue/90 border border-brand-blue-light backdrop-blur-sm rounded-xl p-4 text-left max-w-[200px] shadow-lg">
              <p className="text-brand-orange font-bold text-xs uppercase tracking-wider">Plan Benefit</p>
              <p className="text-white text-xs font-semibold mt-1">Comfort Shield Members receive 15% off all HVAC repairs!</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
