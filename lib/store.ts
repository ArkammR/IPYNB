import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, Product } from './types';

interface CartStore {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
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
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== productId),
        }));
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
