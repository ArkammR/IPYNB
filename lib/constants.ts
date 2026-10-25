export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '94724218840';

// Human-readable form of WHATSAPP_NUMBER, shown in the footer
export const WHATSAPP_DISPLAY = '+94 72 421 8840';

export const PRICING_PLANS = [
  {
    name: 'Starter',
    price: 65000,
    description: 'For small businesses getting their first system',
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
    description: 'For growing businesses that need POS and billing',
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
    description: 'POS, billing, website and app working together',
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
