import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { SERVICES, COMPANY_INFO } from '../data';
import { Service } from '../types';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'cooling' | 'heating' | 'maintenance' | 'indoor-air' | 'emergency'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs = [
    { label: 'All Services', value: 'all' },
    { label: 'Cooling', value: 'cooling' },
    { label: 'Heating', value: 'heating' },
    { label: 'Maintenance', value: 'maintenance' },
    { label: 'Air Quality', value: 'indoor-air' },
    { label: 'Emergency', value: 'emergency' },
  ] as const;

  // Filter and search services
  const filteredServices = SERVICES.filter((service) => {
    const matchesTab = activeTab === 'all' || service.category === activeTab;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const getIcon = (iconName: string) => {
    // Dynamic import mapping for Lucide React
    const LucideIcon = (Icons as any)[iconName];
    if (LucideIcon) return <LucideIcon className="h-6 w-6" />;
    return <Icons.Wrench className="h-6 w-6" />;
  };

  return (
    <section className="py-20 bg-brand-gray-light" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-semibold text-brand-orange uppercase tracking-widest bg-brand-orange-light/60 px-3 py-1 rounded">
            Our Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-blue tracking-tight">
            Professional HVAC Services Designed for Your Comfort
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Huxley offers comprehensive heating, ventilation, and air conditioning solutions. From swift repairs to energy-saving equipment upgrades, we do it all with precision.
          </p>
        </div>

        {/* Filter Toolbar & Search */}
        <div className="mb-10 space-y-4" id="services-filter-toolbar">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-white p-4 rounded-2xl shadow-sm border border-brand-gray-med">
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-1.5 justify-center w-full sm:w-auto">
              {filterTabs.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setActiveTab(tab.value)}
                  className={`px-3 py-2 text-xs font-bold rounded-lg cursor-pointer transition ${
                    activeTab === tab.value
                      ? 'bg-brand-blue text-white shadow-md'
                      : 'text-gray-500 hover:bg-brand-gray-light hover:text-brand-blue'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Simple Live Search */}
            <div className="relative w-full sm:w-64">
              <Icons.Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-brand-gray-med pl-9 pr-3 py-1.5 text-xs focus:border-brand-orange focus:outline-none bg-white text-brand-blue transition-all"
                id="search-services-input"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-2.5 text-gray-400 hover:text-gray-600"
                >
                  <Icons.X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" id="services-grid">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className={`group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border transition-all duration-300 flex flex-col justify-between ${
                  service.category === 'emergency'
                    ? 'border-brand-orange/20 hover:border-brand-orange/40 bg-orange-50/10'
                    : 'border-brand-gray-med hover:border-brand-orange/20'
                }`}
                id={`service-card-${service.id}`}
              >
                <div>
                  {/* Category Banner or Emergency indicator */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`h-12 w-12 rounded-xl flex items-center justify-center transition-all group-hover:scale-110 shadow-sm ${
                      service.category === 'emergency'
                        ? 'bg-brand-orange text-white'
                        : 'bg-brand-orange-light text-brand-orange'
                    }`}>
                      {getIcon(service.iconName)}
                    </div>
                    
                    {service.category === 'emergency' && (
                      <span className="bg-brand-orange/20 text-brand-orange text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                        24/7 Priority
                      </span>
                    )}
                  </div>

                  {/* Card Title & Desc */}
                  <h3 className="text-lg font-display font-bold text-brand-blue mb-2 text-left group-hover:text-brand-orange transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm text-left leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Card Action footer */}
                <div className="border-t border-brand-gray-light pt-4 flex items-center justify-between mt-auto">
                  <span className="text-[10px] font-semibold tracking-wider text-gray-400 uppercase">
                    {service.category.replace('-', ' ')}
                  </span>
                  
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="flex items-center gap-1.5 cursor-pointer text-xs font-bold text-brand-blue group-hover:text-brand-orange transition-colors"
                  >
                    <span>Book Service</span>
                    <Icons.ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white p-12 rounded-2xl text-center border border-brand-gray-med max-w-md mx-auto shadow-sm">
            <Icons.AlertCircle className="h-10 w-10 text-gray-400 mx-auto mb-4 animate-pulse" />
            <h4 className="text-lg font-display font-bold text-brand-blue mb-1">No services matched your query</h4>
            <p className="text-sm text-gray-500 mb-4">Try clearing your filters or testing another search term.</p>
            <button
              onClick={() => {
                setActiveTab('all');
                setSearchQuery('');
              }}
              className="bg-brand-blue text-white font-semibold text-xs py-2 px-4 rounded-xl transition hover:bg-brand-blue-light"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Emergency quick trust link */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-gray-500">
            Have an immediate HVAC emergency or need custom solutions not listed? <br className="hidden sm:inline" />
            Phone our 24/7 dispatch hotline directly at <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="font-bold text-brand-orange hover:underline">{COMPANY_INFO.phone}</a>.
          </p>
        </div>

      </div>
    </section>
  );
}
