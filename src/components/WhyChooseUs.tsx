import React from 'react';
import * as Icons from 'lucide-react';
import { WHY_CHOOSE_US } from '../data';

export default function WhyChooseUs() {
  const getIcon = (iconName: string) => {
    const LucideIcon = (Icons as any)[iconName];
    if (LucideIcon) return <LucideIcon className="h-5 w-5 text-brand-orange" />;
    return <Icons.Check className="h-5 w-5 text-brand-orange" />;
  };

  return (
    <section className="py-20 bg-white" id="why-huxley">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold text-brand-orange uppercase tracking-widest bg-brand-orange-light/60 px-3 py-1 rounded">
            Why Choose Huxley?
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-blue tracking-tight">
            HVAC Contractors Committed to Craftsmanship & Community
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Huxley was built on the principle that home climate services should be honest, fast, and pristine. Here is what you can expect when you welcome our technicians into your home.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8" id="why-choose-us-grid">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              className="bg-brand-gray-light border border-brand-gray-med p-6 rounded-2xl text-left hover:bg-white hover:shadow-xl hover:border-brand-orange/20 transition-all duration-300 flex flex-col items-start gap-4"
              id={`why-choose-card-${idx}`}
            >
              {/* Icon Container */}
              <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center shadow-sm shrink-0 border border-brand-gray-med">
                {getIcon(item.iconName)}
              </div>

              {/* Text Container */}
              <div className="space-y-1">
                <h3 className="font-display font-bold text-sm sm:text-base text-brand-blue">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* SEO Trust Stat banner below */}
        <div className="mt-16 bg-brand-blue text-white rounded-2xl p-8 shadow-lg border border-brand-blue-light" id="seo-trust-footer-banner">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-brand-blue-light">
            <div className="md:px-6 py-4 md:py-0">
              <h4 className="text-3xl font-display font-extrabold text-brand-orange">100%</h4>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-semibold">Satisfaction Guaranteed</p>
              <p className="text-xs text-gray-300 mt-1">If your climate is not perfect, we will work until it is.</p>
            </div>
            <div className="md:px-6 py-4 md:py-0">
              <h4 className="text-3xl font-display font-extrabold text-white">NATE</h4>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-semibold">Certified Technicians</p>
              <p className="text-xs text-gray-300 mt-1">Vetted, continuous training, drug-tested professionals.</p>
            </div>
            <div className="md:px-6 py-4 md:py-0">
              <h4 className="text-3xl font-display font-extrabold text-white">24/7</h4>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-semibold">Emergency Dispatch</p>
              <p className="text-xs text-gray-300 mt-1">Always answering. Never talk to a machine or a robot.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
