'use client';

import { useCartStore, useCurrencyStore } from '@/lib/store';
import { WHATSAPP_NUMBER } from '@/lib/constants';
import { generateWhatsAppMessage, openWhatsApp } from '@/lib/utils';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Cart({ isOpen, onClose }: CartProps) {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);
  const addToCart = useCartStore((state) => state.addToCart);
  const removeAllOfItem = useCartStore((state) => state.removeAllOfItem);
  const total = useCartStore((state) => state.getTotal());
  const formatPrice = useCurrencyStore((state) => state.formatPrice);

  const handleOrderWhatsApp = () => {
    if (cart.length === 0) return;
    const message = generateWhatsAppMessage(cart);
    openWhatsApp(message, WHATSAPP_NUMBER);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[998]" onClick={onClose} />
      )}

      <div className={`fixed right-0 top-0 h-screen w-full max-w-md bg-white shadow-2xl z-[999] transform transition-transform duration-300 flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="px-6 py-4 border-b border-grid flex justify-between items-center">
          <h2 className="text-xl font-bold text-navy">Your Enquiry</h2>
          <button onClick={onClose} className="text-2xl text-gray-500 hover:text-orange transition-colors">✕</button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {cart.length === 0 ? (
            <div className="text-center py-12 text-gray-400">
              <div className="text-5xl mb-3">📋</div>
              <p>Your enquiry is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-start bg-bg p-4 rounded-xl">
                  <div className="flex items-start gap-3 flex-1">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h4 className="font-semibold text-navy text-sm">{item.title}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="w-6 h-6 rounded-full bg-grid flex items-center justify-center text-sm font-bold hover:bg-gray-300 transition-colors"
                        >
                          −
                        </button>
                        <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => addToCart(item)}
                          className="w-6 h-6 rounded-full bg-grid flex items-center justify-center text-sm font-bold hover:bg-gray-300 transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-orange text-sm">{formatPrice(item.price * item.quantity)}</div>
                    <button
                      onClick={() => removeAllOfItem(item.id)}
                      className="text-red-400 text-xs hover:text-red-600 transition-colors mt-1"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="px-6 py-4 border-t border-grid bg-bg">
          <div className="flex justify-between font-bold text-navy mb-4 text-lg">
            <span>Enquiry Total:</span>
            <span>{formatPrice(total)}</span>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => { if (confirm('Clear your enquiry?')) clearCart(); }}
              className="flex-1 bg-grid text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-colors text-sm"
            >
              Clear
            </button>
            <button
              onClick={handleOrderWhatsApp}
              disabled={cart.length === 0}
              className="flex-[2] bg-whatsapp text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors text-sm disabled:opacity-50"
            >
              Send Enquiry via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
