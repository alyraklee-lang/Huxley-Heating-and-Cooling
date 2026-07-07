import React, { useState } from 'react';
import { MapPin, CheckCircle, ShieldCheck, Phone, Search } from 'lucide-react';
import { SERVICE_AREAS, COMPANY_INFO } from '../data';

export default function ServiceArea() {
  const [zipQuery, setZipQuery] = useState('');
  const [zipResult, setZipResult] = useState<string | null>(null);

  const checkCoverage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!zipQuery.trim()) return;

    const query = zipQuery.trim().toLowerCase();
    
    // Check if query is in our service areas (matches name or postal code)
    const matches = SERVICE_AREAS.some(
      (area) =>
        area.name.toLowerCase() === query ||
        area.postal === query ||
        query.includes(area.name.toLowerCase())
    );

    if (matches || query.includes('grove') || query.includes('lake') || query.includes('chicago')) {
      setZipResult('✅ Great news! You are in our primary dispatch service area. Scheduling is fully available!');
    } else {
      setZipResult('ℹ️ You might be just outside our standard service area. Please phone us at (847) 565-1533 to discuss custom dispatch scheduling.');
    }
  };

  return (
    <section className="py-20 bg-brand-gray-light" id="service-area">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-semibold text-brand-orange uppercase tracking-widest bg-brand-orange-light/60 px-3 py-1 rounded">
            Our Dispatch Region
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-blue tracking-tight">
            HVAC Contractor Serving Long Grove, IL & Surrounding Suburbs
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Huxley is a trusted local HVAC contractor located in Long Grove, IL. Our fleet of fully equipped trucks is dispatched daily to keep homes comfortable throughout Lake County and northern Cook County.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Areas List & Search Left Column */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6" id="service-area-list-col">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-brand-gray-med shadow-sm text-left">
              <h3 className="text-xl font-display font-bold text-brand-blue mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-brand-orange" />
                <span>Cities & Suburbs We Service:</span>
              </h3>

              <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 mb-6">
                {SERVICE_AREAS.map((area, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm">
                    <CheckCircle className={`h-4.5 w-4.5 shrink-0 ${area.main ? 'text-brand-orange' : 'text-brand-blue-light'}`} />
                    <span className={area.main ? 'font-bold text-brand-blue' : ''}>
                      {area.name} {area.main && <span className="text-[10px] bg-brand-orange-light text-brand-orange px-1.5 py-0.5 rounded ml-1 font-bold">HQ</span>}
                    </span>
                  </div>
                ))}
              </div>

              {/* Surrounding towns description */}
              <p className="text-xs text-gray-500 leading-normal border-t border-brand-gray-light pt-4 mb-4">
                * Serving the surrounding northern Chicago suburbs. If you live nearby but do not see your specific township listed, our dispatchers can often arrange custom coverage.
              </p>

              {/* Local SEO keywords */}
              <div className="bg-brand-gray-light border border-brand-gray-med rounded-xl p-4 text-[11px] text-gray-500 leading-relaxed">
                Looking for a premium, vetted, licensed <strong>HVAC contractor in Long Grove IL</strong>? Huxley Heating and Cooling Service is headquartered locally at 4192 IL-83, Long Grove, IL 60047, offering rapid response 24 hours a day, 7 days a week.
              </div>
            </div>

            {/* Quick Zip Coverage Form */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-brand-gray-med shadow-sm text-left">
              <h4 className="font-display font-bold text-sm text-brand-blue mb-2">
                Check Coverage for Your Location
              </h4>
              <p className="text-xs text-gray-500 mb-4">
                Enter your city name or 5-digit zip code to verify immediate dispatch availability.
              </p>

              <form onSubmit={checkCoverage} className="flex gap-2">
                <input
                  type="text"
                  placeholder="e.g. 60047 or Lake Zurich"
                  value={zipQuery}
                  onChange={(e) => {
                    setZipQuery(e.target.value);
                    setZipResult(null);
                  }}
                  className="flex-1 text-xs rounded-lg border border-brand-gray-med bg-brand-gray-light px-3 py-2 text-brand-blue focus:border-brand-orange focus:outline-none"
                  id="zip-search-input"
                />
                <button
                  type="submit"
                  className="bg-brand-blue hover:bg-brand-blue-light text-white font-bold text-xs px-4 py-2 rounded-lg transition shrink-0"
                  id="zip-submit-btn"
                >
                  Check
                </button>
              </form>

              {/* Zip/coverage output message */}
              {zipResult && (
                <div className="mt-3 text-xs bg-brand-orange-light/10 border border-brand-orange/25 rounded-lg p-3 text-brand-blue">
                  {zipResult}
                </div>
              )}
            </div>
          </div>

          {/* Map Graphic Right Column */}
          <div className="lg:col-span-6 flex items-stretch" id="service-area-map-col">
            <div className="w-full bg-white border border-brand-gray-med rounded-2xl p-4 shadow-sm flex flex-col justify-between">
              
              {/* Map Title inside card */}
              <div className="flex items-center justify-between pb-3 border-b border-brand-gray-light">
                <div className="text-left">
                  <h4 className="font-display font-bold text-sm text-brand-blue">Long Grove Headquarters Region</h4>
                  <p className="text-[10px] text-gray-400 mt-0.5">Serving Lake, Cook, & DuPage Suburbs</p>
                </div>
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              {/* Vector Mock Map Graphic representation */}
              <div className="bg-slate-50 relative rounded-xl border border-brand-gray-med my-4 overflow-hidden flex-1 min-h-[300px] flex items-center justify-center">
                {/* SVG styled mock grid representing suburbs map */}
                <svg className="absolute inset-0 h-full w-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="gray" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>

                {/* Suburbs bounding circles (radial coverage map) */}
                <div className="absolute h-56 w-56 rounded-full border border-dashed border-brand-orange/30 bg-brand-orange-light/5 animate-pulse" />
                <div className="absolute h-36 w-36 rounded-full border border-dashed border-brand-blue-light/40 bg-brand-blue-light/5" />

                {/* Main HQ Pins and Suburb Pins with text tags */}
                
                {/* Long Grove Headquarters */}
                <div className="absolute top-[48%] left-[48%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
                  <div className="h-8 w-8 rounded-full bg-brand-orange text-white flex items-center justify-center shadow-lg animate-bounce border-2 border-white">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span className="text-[10px] font-bold bg-brand-blue text-white py-0.5 px-2 rounded-md shadow mt-1 whitespace-nowrap">
                    Long Grove (HQ)
                  </span>
                </div>

                {/* Lake Zurich */}
                <div className="absolute top-[25%] left-[28%] flex items-center gap-1">
                  <div className="h-2.5 w-2.5 rounded-full bg-brand-blue-light border border-white" />
                  <span className="text-[9px] font-semibold text-gray-500 bg-white/80 py-0.5 px-1 rounded">Lake Zurich</span>
                </div>

                {/* Barrington */}
                <div className="absolute top-[65%] left-[15%] flex items-center gap-1">
                  <div className="h-2.5 w-2.5 rounded-full bg-brand-blue-light border border-white" />
                  <span className="text-[9px] font-semibold text-gray-500 bg-white/80 py-0.5 px-1 rounded">Barrington</span>
                </div>

                {/* Buffalo Grove */}
                <div className="absolute top-[35%] left-[70%] flex items-center gap-1">
                  <div className="h-2.5 w-2.5 rounded-full bg-brand-blue-light border border-white" />
                  <span className="text-[9px] font-semibold text-gray-500 bg-white/80 py-0.5 px-1 rounded">Buffalo Grove</span>
                </div>

                {/* Arlington Heights */}
                <div className="absolute top-[75%] left-[68%] flex items-center gap-1">
                  <div className="h-2.5 w-2.5 rounded-full bg-brand-blue-light border border-white" />
                  <span className="text-[9px] font-semibold text-gray-500 bg-white/80 py-0.5 px-1 rounded">Arlington Hts</span>
                </div>

                {/* Palatine */}
                <div className="absolute top-[80%] left-[40%] flex items-center gap-1">
                  <div className="h-2.5 w-2.5 rounded-full bg-brand-blue-light border border-white" />
                  <span className="text-[9px] font-semibold text-gray-500 bg-white/80 py-0.5 px-1 rounded">Palatine</span>
                </div>

                {/* Hawthorn Woods */}
                <div className="absolute top-[15%] left-[50%] flex items-center gap-1">
                  <div className="h-2.5 w-2.5 rounded-full bg-brand-blue-light border border-white" />
                  <span className="text-[9px] font-semibold text-gray-500 bg-white/80 py-0.5 px-1 rounded">Hawthorn Woods</span>
                </div>

                {/* Radial stats box floating on map */}
                <div className="absolute bottom-3 left-3 bg-white/95 border border-brand-gray-med px-3 py-1.5 rounded-lg text-left shadow-sm">
                  <p className="text-[9px] text-brand-orange font-bold uppercase tracking-widest">Rapid Response</p>
                  <p className="text-[10px] text-brand-blue font-semibold mt-0.5">Average dispatch: 42 mins</p>
                </div>
              </div>

              {/* Map Footer contact details */}
              <div className="pt-3 border-t border-brand-gray-light text-left text-xs text-gray-500 flex flex-wrap justify-between items-center gap-2">
                <span>📍 HQ: {COMPANY_INFO.address}</span>
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="font-bold text-brand-blue hover:text-brand-orange transition-colors flex items-center gap-1">
                  <Phone className="h-3 w-3 text-brand-orange" />
                  <span>{COMPANY_INFO.phone}</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
