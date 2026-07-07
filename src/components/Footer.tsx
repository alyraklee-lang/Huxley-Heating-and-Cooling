import React from 'react';
import { Flame, Snowflake, Phone, MapPin, Mail, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO, SERVICES, SERVICE_AREAS } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-blue text-gray-400 text-sm py-16 border-t border-brand-blue-light" id="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Logo & Narrative column */}
          <div className="lg:col-span-4 space-y-4 text-left" id="footer-brand-col">
            <a href="#" className="flex items-center gap-2 group">
              <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-brand-orange-light text-brand-orange overflow-hidden shadow-inner">
                <Flame className="h-4 w-4 absolute -translate-x-1 -translate-y-1" />
                <Snowflake className="h-4 w-4 text-brand-blue absolute translate-x-1 translate-y-1" />
              </div>
              <span className="text-lg font-display font-extrabold text-white tracking-tight">
                HUXLEY <span className="text-brand-orange text-xs">HVAC</span>
              </span>
            </a>
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Professional, transparent, and trustworthy HVAC services throughout the northern Chicago suburbs. Headquartered locally in Long Grove, IL, our fully certified technicians keep your climate perfectly controlled year-round.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3 max-w-xs">
              <ShieldCheck className="h-4.5 w-4.5 shrink-0" />
              <span>Licensed, Bonded, & Insured in IL</span>
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 text-left" id="footer-services-col">
            <h4 className="font-display font-bold text-white uppercase tracking-wider text-xs mb-4">
              Our HVAC Services
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-brand-orange transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas Column */}
          <div className="lg:col-span-2 text-left" id="footer-areas-col">
            <h4 className="font-display font-bold text-white uppercase tracking-wider text-xs mb-4">
              Service Suburbs
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICE_AREAS.map((area, idx) => (
                <li key={idx}>
                  <a href="#service-area" className="hover:text-brand-orange transition-colors">
                    {area.name}, IL
                  </a>
                </li>
              ))}
              <li>
                <a href="#service-area" className="hover:text-brand-orange transition-colors font-medium">
                  Chicago Suburbs
                </a>
              </li>
            </ul>
          </div>

          {/* Office Contact coordinates Column */}
          <div className="lg:col-span-3 text-left space-y-4" id="footer-contact-col">
            <h4 className="font-display font-bold text-white uppercase tracking-wider text-xs mb-4">
              Office Contacts
            </h4>
            
            <div className="space-y-3 text-xs">
              <div className="flex gap-2.5 items-start">
                <MapPin className="h-4 w-4 text-brand-orange shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>

              <div className="flex gap-2.5 items-center">
                <Phone className="h-4 w-4 text-brand-orange shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="font-bold text-white hover:text-brand-orange transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div className="flex gap-2.5 items-center">
                <Mail className="h-4 w-4 text-brand-orange shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </div>
            </div>

            <p className="text-[10px] text-gray-500 italic mt-2">
              * Emergency technicians are dispatched on rotating 24/7 schedules including federal holidays.
            </p>
          </div>

        </div>

        {/* Bottom copyright details bar */}
        <div className="pt-8 border-t border-brand-blue-light flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>© {currentYear} {COMPANY_INFO.name}. All rights reserved.</p>
          
          <div className="flex gap-6">
            <a href="#about" className="hover:text-brand-orange transition-colors">About Us</a>
            <a href="#services" className="hover:text-brand-orange transition-colors">Services</a>
            <a href="#contact" className="hover:text-brand-orange transition-colors">Schedule Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
