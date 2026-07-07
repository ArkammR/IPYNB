import { PricingPlan } from './types';

export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '94724218840';

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Starter',
    price: 65000,
    description: 'Perfect for small businesses just getting started',
    features: [
      'Single system (POS or Billing)',
      'Basic setup & configuration',
      '1 staff training session',
      '6 months WhatsApp support',
      'Free bug fixes',
    ],
    highlight: false,
  },
  {
    name: 'Business',
    price: 145000,
    description: 'Most popular for growing businesses',
    features: [
      'POS + Billing system',
      'Full setup & configuration',
      '3 staff training sessions',
      '12 months WhatsApp support',
      'Free updates & upgrades',
      'Custom branding',
    ],
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 395000,
    description: 'Complete solution for established businesses',
    features: [
      'POS + Billing + Website + App',
      'Full system integration',
      'Unlimited training sessions',
      'Lifetime WhatsApp support',
      'Priority response',
      'Custom features on request',
    ],
    highlight: false,
  },
];
