'use client';

import { useCartStore } from '@/lib/store';
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
  const total = useCartStore((state) => state.getTotal());

  const handleOrderWhatsApp = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    const message = generateWhatsAppMessage(cart);
    openWhatsApp(message, WHATSAPP_NUMBER);
  };

  const handleClearCart = () => {
    if (confirm('Clear your entire cart?')) {
      clearCart();
    }
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[998]"
          onClick={onClose}
        />
      )}

      {/* Cart Drawer */}
      <div
        className={`fixed right-0 top-0 h-screen w-full max-w-md bg-white shadow-2xl z-[999] transform transition-transform duration-300 flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-grid flex justify-between items-center">
          <h2 className="text-xl font-bold text-navy">Your Cart</h2>
          <button
            onClick={onClose}
            className="text-2xl text-gray-900 hover:text-orange transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {cart.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              Your cart is empty
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-start bg-bg p-4 rounded-lg"
                >
                  <div className="flex-1">
                    <h4 className="font-semibold text-navy text-sm">{item.title}</h4>
                    <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-orange text-sm">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-600 text-lg hover:text-red-700 transition-colors ml-2"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-grid bg-bg">
          <div className="flex justify-between font-bold text-navy mb-4">
            <span>Subtotal:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleClearCart}
              className="flex-1 bg-grid text-gray-900 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              Clear
            </button>
            <button
              onClick={handleOrderWhatsApp}
              className="flex-[2] bg-whatsapp text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors"
            >
              Order via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
