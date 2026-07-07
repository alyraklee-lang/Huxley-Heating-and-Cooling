import { Service, Testimonial, FAQItem, GalleryItem } from './types';

export const ASSETS = {
  heroBanner: '/src/assets/images/huxley_hero_banner_1783459496230.jpg',
  acUnit: '/src/assets/images/huxley_ac_unit_1783459507389.jpg',
  furnace: '/src/assets/images/huxley_furnace_1783459519361.jpg',
  homeInterior: '/src/assets/images/huxley_home_interior_1783459530446.jpg',
  acBefore: '/src/assets/images/huxley_ac_before_1783459570545.jpg',
  acAfter: '/src/assets/images/huxley_ac_after_1783459581283.jpg',
};

export const COMPANY_INFO = {
  name: 'Huxley Heating and Cooling Service',
  tagline: 'Reliable Heating & Cooling Service You Can Count On',
  subheadline: 'Providing fast, professional HVAC installation, repair, and maintenance services with knowledgeable technicians and exceptional customer care.',
  address: '4192 IL-83, Long Grove, IL 60047',
  phone: '(847) 565-1533',
  phoneRaw: '8475651533',
  hours: 'Open 24/7 for Emergency Services',
  rating: '4.9',
  reviewCount: '1,248',
  email: 'service@huxleyhvac.com',
};

export const SERVICES: Service[] = [
  {
    id: 'ac-repair',
    title: 'Air Conditioning Repair',
    description: 'Expert diagnostics and reliable repairs for all air conditioning brands and models. We restore your cooling quickly.',
    category: 'cooling',
    iconName: 'Wrench',
    longDescription: 'When summer temperatures rise, a malfunctioning air conditioner is more than an inconvenience—it is an emergency. Our expert team diagnoses and repairs cooling systems of all makes and models, restoring comfort to your home fast.'
  },
  {
    id: 'ac-installation',
    title: 'AC Installation',
    description: 'Energy-efficient air conditioning installations customized to your home size and cooling needs.',
    category: 'cooling',
    iconName: 'Wrenches',
    longDescription: 'Upgrade to a high-efficiency AC system engineered to keep your home perfectly cool while lowering your monthly utility bills. We handle professional load calculations and duct inspections for optimal performance.'
  },
  {
    id: 'ac-replacement',
    title: 'AC Replacement',
    description: 'Seamless replacement of outdated and inefficient cooling systems with state-of-the-art HVAC units.',
    category: 'cooling',
    iconName: 'Cpu',
    longDescription: 'If your air conditioner is more than 10-15 years old, a premium replacement can save you up to 40% on cooling costs. We offer seamless installation and haul away your old system responsibly.'
  },
  {
    id: 'furnace-repair',
    title: 'Furnace Repair',
    description: 'Fast, safe heating repairs to keep your home warm during the freezing Chicago winter months.',
    category: 'heating',
    iconName: 'Flame',
    longDescription: 'Don’t freeze in the cold! Our certified technicians quickly pinpoint issues in gas and electric furnaces, replacing bad igniters, fixing pilot lights, or restoring faulty blowers safely.'
  },
  {
    id: 'furnace-installation',
    title: 'Furnace Installation',
    description: 'Professional heating installations using top-tier furnaces with high AFUE energy ratings.',
    category: 'heating',
    iconName: 'Settings',
    longDescription: 'Bring reliable warmth into your home. We install quiet, durable, high-performance furnaces with outstanding warranties, perfectly sized to meet the thermal load demands of your residence.'
  },
  {
    id: 'heating-maintenance',
    title: 'Heating Maintenance',
    description: 'Comprehensive furnace tune-ups to boost heating efficiency and prevent mid-winter breakdowns.',
    category: 'maintenance',
    iconName: 'ShieldCheck',
    longDescription: 'An annual heating check-up is the best insurance policy against sub-zero breakdowns. We clean burners, check heat exchangers for cracks, inspect venting systems, and test safety controls.'
  },
  {
    id: 'hvac-tune-ups',
    title: 'HVAC Tune-Ups',
    description: 'Seasonal maintenance for both heating and cooling systems to optimize longevity and power savings.',
    category: 'maintenance',
    iconName: 'Gauge',
    longDescription: 'Our comprehensive HVAC tune-up ensures that your system operates at peak capacity. We clean coils, check refrigerant levels, calibrate thermostats, inspect electrical components, and replace filters.'
  },
  {
    id: 'indoor-comfort',
    title: 'Indoor Comfort Solutions',
    description: 'Humidifiers, air purifiers, and ventilation systems for clean, healthy, and breathable indoor air.',
    category: 'indoor-air',
    iconName: 'Wind',
    longDescription: 'Breathe easier with our premium IAQ solutions. From whole-home humidifiers that combat dry Illinois winters to advanced HEPA and UV-light air purifiers that eliminate allergens and dust.'
  },
  {
    id: 'emergency-service',
    title: 'Emergency HVAC Service',
    description: 'Rapid response emergency repair services available 24 hours a day, 7 days a week.',
    category: 'emergency',
    iconName: 'Activity',
    longDescription: 'HVAC failures do not wait for business hours. We offer reliable, rapid-response 24/7 emergency repair services to restore safe indoor temperatures whenever you need us most.'
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Fast Response Times',
    description: 'We respect your time. Our technicians arrive promptly and resolve your HVAC issues efficiently.',
    iconName: 'Clock'
  },
  {
    title: 'Knowledgeable Technicians',
    description: 'Our fully certified and highly trained professionals keep up with the latest industry standards.',
    iconName: 'GraduationCap'
  },
  {
    title: 'Clean Work Areas',
    description: 'We wear protective shoe covers, lay down drop cloths, and clean up completely before we leave.',
    iconName: 'Sparkles'
  },
  {
    title: 'Respectful In-Home Service',
    description: 'We treat your home and family with the highest levels of courtesy, honesty, and care.',
    iconName: 'Smile'
  },
  {
    title: 'Honest Recommendations',
    description: 'We only recommend what you actually need. No hidden fees, no pushy upsells, just transparent options.',
    iconName: 'FileText'
  },
  {
    title: 'Quality Equipment Installation',
    description: 'We partner with leading HVAC brands to install quiet, reliable, and energy-efficient systems.',
    iconName: 'CheckCircle'
  },
  {
    title: 'Customer-Focused Service',
    description: 'We measure our success by your comfort and satisfaction. We make things right, guaranteed.',
    iconName: 'Heart'
  },
  {
    title: 'Reliable Scheduling',
    description: 'Convenient appointment windows that fit your busy schedule, with automatic text notifications.',
    iconName: 'Calendar'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Robert M.',
    rating: 5,
    text: 'The workplace is kept orderly, clean and they are very respectful of our home.',
    date: 'June 18, 2026',
    location: 'Long Grove, IL',
    verified: true
  },
  {
    id: '2',
    name: 'Sarah K.',
    rating: 5,
    text: 'They responded so fast and got me a nice AC unit.',
    date: 'July 2, 2026',
    location: 'Lake Zurich, IL',
    verified: true
  },
  {
    id: '3',
    name: 'David L.',
    rating: 5,
    text: 'Every technician who has come to my house has been polite and knowledgeable and they always complete the work at the expected time.',
    date: 'May 14, 2026',
    location: 'Buffalo Grove, IL',
    verified: true
  },
  {
    id: '4',
    name: 'Emily S.',
    rating: 5,
    text: 'Very customer service oriented.',
    date: 'April 29, 2026',
    location: 'Hawthorn Woods, IL',
    verified: true
  },
  {
    id: '5',
    name: 'James P.',
    rating: 5,
    text: 'When our furnace stopped blowing hot air in the middle of a cold night, Huxley was there within the hour. Outstanding emergency service and extremely honest billing.',
    date: 'January 22, 2026',
    location: 'Long Grove, IL',
    verified: true
  },
  {
    id: '6',
    name: 'Linda G.',
    rating: 5,
    text: 'Highly professional from start to finish. They replaced our outdated AC unit and we are already seeing a noticeable reduction in our electric bill. 10/10 service!',
    date: 'June 5, 2026',
    location: 'Kildeer, IL',
    verified: true
  }
];

export const SERVICE_AREAS = [
  { name: 'Long Grove', postal: '60047', main: true },
  { name: 'Lake Zurich', postal: '60047', main: false },
  { name: 'Hawthorn Woods', postal: '60047', main: false },
  { name: 'Kildeer', postal: '60047', main: false },
  { name: 'Barrington', postal: '60010', main: false },
  { name: 'Buffalo Grove', postal: '60089', main: false },
  { name: 'Arlington Heights', postal: '60004', main: false },
  { name: 'Palatine', postal: '60067', main: false },
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How often should I service my HVAC system?',
    answer: 'We recommend servicing your air conditioning system in the spring and your furnace or heating system in the fall. Professional annual tune-ups ensure peak efficiency, maintain manufacturer warranties, and catch minor issues before they turn into costly mid-season breakdowns.'
  },
  {
    id: 'faq-2',
    question: 'How do I know if my AC needs replacement?',
    answer: 'Key warning signs include: the unit is over 10-15 years old, frequent repairs are becoming expensive, energy bills are spiking, it uses R-22 refrigerant (which is phased out), or it struggles to maintain a consistent, comfortable temperature throughout your home.'
  },
  {
    id: 'faq-3',
    question: 'How long does a furnace last?',
    answer: 'A well-maintained gas furnace typically lasts between 15 and 20 years. Electric furnaces can sometimes last a bit longer, up to 25 years. Scheduling annual maintenance is the single most effective way to prolong your furnace’s lifespan and keep it operating safely.'
  },
  {
    id: 'faq-4',
    question: 'Do you install new HVAC systems?',
    answer: 'Yes, absolutely! We provide premium HVAC installation and replacement services. We perform comprehensive load calculations to size the new system perfectly for your home, ensuring optimal climate control, clean air distribution, and high energy efficiency.'
  },
  {
    id: 'faq-5',
    question: 'How quickly can you respond to service calls?',
    answer: 'We prioritize prompt response times for all customers. For emergency HVAC services, we are available 24/7 and strive to have a certified technician at your Long Grove or surrounding suburban home within 1 to 2 hours of your call.'
  },
  {
    id: 'faq-6',
    question: 'Do you provide maintenance plans?',
    answer: 'Yes, we offer comprehensive HVAC maintenance plans. Our plan benefits include two seasonal tune-ups (spring AC and fall heating), priority scheduling, and exclusive discounts on repairs and parts to keep your systems running smoothly year-round.'
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'AC Condenser Replacement',
    description: 'Upgraded a leaking, noisy 12-year-old air conditioner with a brand-new high-efficiency 16 SEER outdoor condensing unit.',
    beforeUrl: ASSETS.acBefore,
    afterUrl: ASSETS.acAfter,
    category: 'cooling'
  }
];
