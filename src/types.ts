export interface Service {
  id: string;
  title: string;
  description: string;
  category: 'cooling' | 'heating' | 'maintenance' | 'indoor-air' | 'emergency';
  iconName: string;
  longDescription: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  location: string;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  beforeUrl: string;
  afterUrl: string;
  category: 'cooling' | 'heating';
}

export interface Appointment {
  id: string;
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  date: string;
  time: string;
  address: string;
  notes?: string;
  status: 'pending' | 'confirmed';
  createdAt: string;
}
