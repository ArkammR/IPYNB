'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Product } from '@/lib/types';
import { useCurrencyStore } from '@/lib/store';

interface PreviewModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: () => void;
}

export default function PreviewModal({ product, isOpen, onClose, onAddToCart }: PreviewModalProps) {
  const formatPrice = useCurrencyStore((state) => state.formatPrice);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[2000]" onClick={onClose} />
      <div className="fixed inset-0 z-[2001] flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-orange transition-colors z-10"
          >
            ✕
          </button>

          <div className="p-8">
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="text-5xl">{product.icon}</div>
              <div>
                <p className="text-xs font-bold text-orange uppercase mb-1">{product.category}</p>
                <h2 className="text-2xl font-bold text-navy">{product.title}</h2>
              </div>
            </div>

            {/* Screenshot */}
            {product.screenshot && (
              <div className="relative w-full h-52 rounded-xl overflow-hidden mb-6 border border-grid">
                <Image
                  src={product.screenshot}
                  alt={`${product.title} screenshot`}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

            {/* Price */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-6 flex items-center justify-between">
              <span className="text-gray-700 font-medium">One-time price</span>
              <span className="text-3xl font-bold text-orange">{mounted ? formatPrice(product.price) : `$${product.price}`}</span>
            </div>

            {/* Features */}
            <div className="bg-bg p-6 rounded-xl mb-6">
              <h3 className="font-bold text-navy mb-4">What's Included:</h3>
              <ul className="space-y-3">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 text-sm">
                    <span className="text-whatsapp font-bold">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={onAddToCart}
                className="w-full bg-navy text-white py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors"
              >
                Add to Enquiry
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
