export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '94724218840';

// Human-readable form of WHATSAPP_NUMBER, shown in the footer
export const WHATSAPP_DISPLAY = '+94 72 421 8840';

export const CONTACT_EMAIL = 'info@ipynb.site';

export type Client = {
  name: string;
  // Logo file in /public/clients. Without one, the client name is shown as text.
  logo?: { src: string; width: number; height: number };
};

// Add a client here once they have agreed to be shown on the site.
// The row becomes a scrolling slider automatically at CLIENT_SLIDER_MIN entries.
export const CLIENTS: Client[] = [
  { name: 'Auto Pilot', logo: { src: '/clients/auto-pilot.png', width: 640, height: 304 } },
  { name: 'Ceylon Chai', logo: { src: '/clients/ceylon-chai.png', width: 640, height: 640 } },
  { name: 'The Perfume Stories', logo: { src: '/clients/the-perfume-stories.png', width: 640, height: 621 } },
  { name: 'smartLap.lk', logo: { src: '/clients/smartlap.png', width: 150, height: 33 } },
  { name: 'CW', logo: { src: '/clients/cw.png', width: 354, height: 354 } },
];

export const CLIENT_SLIDER_MIN = 5;

export type PricingPlan = {
  id: 'starter' | 'advanced' | 'enterprise';
  label: string;
  name: string;
  description: string;
  price: string;
  priceCaption: string;
  recurring?: { price: string; caption: string };
  features: string[];
  cta: string;
  ctaMessage: string;
  featured?: boolean;
};

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    label: 'Starter',
    name: 'Essential Retail POS',
    description: 'Straightforward billing and stock control for shops and cafés.',
    price: 'LKR 30,000',
    priceCaption: 'One-time setup',
    features: [
      'Fast counter checkout',
      'Inventory tracking',
      'Digital or printed receipts',
      'Sales summaries',
      'Staff role management',
    ],
    cta: 'Get started',
    ctaMessage: "Hi IPYNB! I'd like to get started with the Essential Retail POS.",
  },
  {
    id: 'advanced',
    label: 'Most popular',
    name: 'Advanced Operations POS',
    description: 'More visibility and control for growing teams.',
    price: 'LKR 65,000',
    priceCaption: 'One-time setup',
    recurring: { price: 'LKR 3,000 / month', caption: 'Ongoing updates & support' },
    features: [
      'Everything in Essential POS',
      'Advanced sales reports',
      'Multi-user permissions',
      'Activity logs and audit trail',
      'Ongoing updates and support',
    ],
    cta: 'Request a demo',
    ctaMessage: "Hi IPYNB! I'd like to request a demo of the Advanced Operations POS.",
    featured: true,
  },
  {
    id: 'enterprise',
    label: 'Custom',
    name: 'Custom Software Suite',
    description: 'Purpose-built systems for workflows that standard software cannot handle.',
    price: 'Custom quote',
    priceCaption: 'Scoped to your requirements',
    features: [
      'Custom business logic',
      'Tailored workflows and data',
      'Specialised reporting',
      'Integration planning',
      'Project guidance',
    ],
    cta: 'Book a discovery call',
    ctaMessage: "Hi IPYNB! I'd like to book a discovery call about a custom software suite.",
  },
];
