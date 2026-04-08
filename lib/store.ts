import { create } from 'zustand';

// USD to LKR rate — update as needed
export const USD_TO_LKR = 320;

type Currency = 'USD' | 'LKR';

interface CurrencyStore {
  currency: Currency;
  toggleCurrency: () => void;
  formatPrice: (usdPrice: number) => string;
}

export const useCurrencyStore = create<CurrencyStore>()((set, get) => ({
  currency: 'USD',
  toggleCurrency: () =>
    set((state) => ({ currency: state.currency === 'USD' ? 'LKR' : 'USD' })),
  formatPrice: (usdPrice: number) => {
    const { currency } = get();
    if (currency === 'LKR') {
      return `Rs. ${(usdPrice * USD_TO_LKR).toLocaleString()}`;
    }
    return `$${usdPrice}`;
  },
}));
