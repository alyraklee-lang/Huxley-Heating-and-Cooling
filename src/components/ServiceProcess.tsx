import React from 'react';
import { PhoneCall, Calendar, Activity, CheckSquare } from 'lucide-react';

export default function ServiceProcess() {
  const steps = [
    {
      number: '01',
      title: 'Contact Our Team',
      desc: 'Submit our quick scheduling form online or phone us directly at (847) 565-1533 to explain your current heating or cooling needs.',
      icon: PhoneCall,
    },
    {
      number: '02',
      title: 'Schedule Your Appointment',
      desc: 'Pick a convenient time slot that fits your busy itinerary. We will send you an automated text with the technician’s photo and arrival window.',
      icon: Calendar,
    },
    {
      number: '03',
      title: 'Professional Diagnosis',
      desc: 'Our NATE-certified specialist arrives on time, diagnoses the system issue meticulously, and provides transparent, honest options.',
      icon: Activity,
    },
    {
      number: '04',
      title: 'Quality Repair or Installation',
      desc: 'We perform the approved work cleanly, calibrate your controls, test complete system air circulation, and guarantee your 100% comfort.',
      icon: CheckSquare,
    },
  ];

  return (
    <section className="py-20 bg-brand-gray-light" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold text-brand-orange uppercase tracking-widest bg-brand-orange-light/60 px-3 py-1 rounded">
            Our Work Flow
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-blue tracking-tight">
            Our Simple 4-Step Comfort Process
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Huxley removes the stress from home climate repairs. From your first contact to the final comfort test, we ensure a seamless and highly professional customer experience.
          </p>
        </div>

        {/* Steps Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative" id="process-steps-container">
          
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-[2.25rem] left-[8%] right-[8%] h-[2px] bg-brand-gray-med -z-10" />

          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-brand-gray-med relative shadow-sm hover:shadow-lg transition-shadow text-left" id={`process-step-${idx}`}>
                
                {/* Number & Icon header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="h-10 w-10 rounded-xl bg-brand-orange-light text-brand-orange flex items-center justify-center shrink-0 border border-brand-orange/10 font-bold">
                    <IconComp className="h-5 w-5" />
                  </div>
                  <span className="text-3xl font-display font-extrabold text-brand-gray-med leading-none">
                    {step.number}
                  </span>
                </div>

                {/* Body Text */}
                <h3 className="font-display font-bold text-base text-brand-blue mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                  {step.desc}
                </p>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
