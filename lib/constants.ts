import { Product, Testimonial } from './types';

export const WHATSAPP_NUMBER = '94XXXXXXXXX'; // Replace with your WhatsApp number

export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: 'POS System',
    category: 'pos',
    price: 299,
    description: 'Complete Point of Sale system with inventory management, sales tracking, and reporting',
    icon: '🛒',
  },
  {
    id: 2,
    title: 'Billing System',
    category: 'billing',
    price: 199,
    description: 'Professional invoicing and billing with automated payment tracking and receipts',
    icon: '📄',
  },
  {
    id: 3,
    title: 'Business Website',
    category: 'website',
    price: 499,
    description: 'Custom responsive business website with contact forms and online presence',
    icon: '🌐',
  },
  {
    id: 4,
    title: 'POS + Inventory',
    category: 'pos',
    price: 399,
    description: 'Advanced POS with real-time inventory management and stock alerts',
    icon: '📦',
  },
  {
    id: 5,
    title: 'Multi-Store Billing',
    category: 'billing',
    price: 349,
    description: 'Centralized billing system for multiple store locations with unified reporting',
    icon: '🏪',
  },
  {
    id: 6,
    title: 'E-Commerce Website',
    category: 'website',
    price: 799,
    description: 'Full e-commerce platform with payment gateway and product management',
    icon: '🛍️',
  },
  {
    id: 7,
    title: 'POS + Billing Bundle',
    category: 'pos',
    price: 449,
    description: 'Integrated POS and billing system for seamless operations',
    icon: '💼',
  },
  {
    id: 8,
    title: 'Restaurant POS',
    category: 'pos',
    price: 549,
    description: 'Specialized POS for restaurants with table management and kitchen display',
    icon: '🍽️',
  },
  {
    id: 9,
    title: 'Pharmacy Billing',
    category: 'billing',
    price: 399,
    description: 'Specialized billing for pharmacies with prescription management',
    icon: '💊',
  },
  {
    id: 10,
    title: 'Business Portal',
    category: 'website',
    price: 599,
    description: 'Complete business portal with customer management and analytics',
    icon: '📊',
  },
  {
    id: 11,
    title: 'Mobile App Integration',
    category: 'website',
    price: 899,
    description: 'Mobile app for your business with iOS and Android support',
    icon: '📱',
  },
  {
    id: 12,
    title: 'Complete Business Suite',
    category: 'pos',
    price: 1299,
    description: 'All-in-one solution: POS, Billing, Website, and Mobile App',
    icon: '⚙️',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Ravi Perera',
    role: 'Retail Store Owner',
    text: 'The POS system transformed our operations. Easy to use, reliable, and the support team is always there when we need them.',
    rating: 5,
  },
  {
    name: 'Amara Silva',
    role: 'Restaurant Manager',
    text: 'Best investment for our restaurant. The table management and kitchen display system saved us so much time.',
    rating: 5,
  },
  {
    name: 'Kasun Jayawardena',
    role: 'Pharmacy Owner',
    text: 'The specialized pharmacy billing system is exactly what we needed. Prescription management is seamless.',
    rating: 5,
  },
  {
    name: 'Nisha Kumari',
    role: 'Business Owner',
    text: 'Their complete business suite helped us go digital. Website, app, and systems all working perfectly together.',
    rating: 5,
  },
];
