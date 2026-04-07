import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, Product } from './types';

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

interface CartStore {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  removeAllOfItem: (productId: number) => void;
  clearCart: () => void;
  getTotal: () => number;
  getItemCount: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (product: Product) => {
        set((state) => {
          const existingItem = state.cart.find((item) => item.id === product.id);
          if (existingItem) {
            return {
              cart: state.cart.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }
          return {
            cart: [...state.cart, { ...product, quantity: 1 }],
          };
        });
      },
      removeFromCart: (productId: number) => {
        set((state) => {
          const item = state.cart.find((i) => i.id === productId);
          if (!item) return state;
          if (item.quantity === 1) {
            return { cart: state.cart.filter((i) => i.id !== productId) };
          }
          return {
            cart: state.cart.map((i) =>
              i.id === productId ? { ...i, quantity: i.quantity - 1 } : i
            ),
          };
        });
      },
      removeAllOfItem: (productId: number) => {
        set((state) => ({ cart: state.cart.filter((i) => i.id !== productId) }));
      },
      clearCart: () => set({ cart: [] }),
      getTotal: () => {
        return get().cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
      },
      getItemCount: () => {
        return get().cart.reduce((sum, item) => sum + item.quantity, 0);
      },
    }),
    {
      name: 'ipynb-cart',
    }
  )
);
