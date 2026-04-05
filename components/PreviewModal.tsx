'use client';

import { Product } from '@/lib/types';

interface PreviewModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: () => void;
}

export default function PreviewModal({ product, isOpen, onClose, onAddToCart }: PreviewModalProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[2000]"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-[2001] flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-2xl text-gray-900 hover:text-orange transition-colors"
          >
            ✕
          </button>

          {/* Content */}
          <div className="p-8">
            <h2 className="text-3xl font-bold text-navy mb-6 pr-8">{product.title}</h2>

            {/* Icon & Price */}
            <div className="text-center mb-8">
              <div className="text-7xl mb-4">{product.icon}</div>
              <p className="text-gray-600 mb-4 text-lg">{product.description}</p>
              <p className="text-4xl font-bold text-orange">${product.price}</p>
            </div>

            {/* What's Included */}
            <div className="bg-bg p-6 rounded-xl mb-8">
              <h3 className="font-bold text-navy mb-4">What's Included:</h3>
              <ul className="space-y-3 text-gray-900">
                <li>✓ Complete .ipynb notebook file</li>
                <li>✓ Detailed documentation and comments</li>
                <li>✓ Sample data and examples</li>
                <li>✓ Lifetime updates and improvements</li>
                <li>✓ 24/7 WhatsApp support</li>
                <li>✓ Free 30-min customization</li>
              </ul>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3">
              <button
                onClick={onAddToCart}
                className="w-full bg-navy text-white py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors"
              >
                Add to Cart
              </button>
              <button
                onClick={onClose}
                className="w-full bg-grid text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
