'use client';

import { useState } from 'react';
import { useCartStore } from '@/lib/store';
import { PRODUCTS } from '@/lib/constants';
import { ProductCategory } from '@/lib/types';
import ProductCard from './ProductCard';
import PreviewModal from './PreviewModal';

export default function Products() {
  const [filter, setFilter] = useState<ProductCategory>('all');
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
  const addToCart = useCartStore((state) => state.addToCart);

  const categories: { value: ProductCategory; label: string }[] = [
    { value: 'all', label: 'All Systems' },
    { value: 'pos', label: 'POS Systems' },
    { value: 'billing', label: 'Billing Systems' },
    { value: 'website', label: 'Business Websites' },
  ];

  const filtered = filter === 'all' ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter);

  const handleAddToCart = (productId: number) => {
    const product = PRODUCTS.find((p) => p.id === productId);
    if (product) {
      addToCart(product);
      showNotification(`${product.title} added to cart!`);
    }
  };

  const showNotification = (message: string) => {
    const notification = document.createElement('div');
    notification.className = 'fixed bottom-8 right-8 bg-whatsapp text-white px-6 py-3 rounded-lg z-50 animate-slide-in';
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
  };

  const selectedProduct = PRODUCTS.find((p) => p.id === selectedProductId);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white" id="solutions">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-grotesk text-4xl sm:text-5xl font-bold text-navy text-center mb-12">
          Our Systems & Solutions
        </h2>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                filter === cat.value
                  ? 'bg-navy text-white'
                  : 'bg-white border-2 border-grid text-gray-900 hover:border-orange hover:text-orange'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={() => handleAddToCart(product.id)}
              onPreview={() => setSelectedProductId(product.id)}
            />
          ))}
        </div>
      </div>

      {/* Preview Modal */}
      {selectedProduct && (
        <PreviewModal
          product={selectedProduct}
          isOpen={selectedProductId !== null}
          onClose={() => setSelectedProductId(null)}
          onAddToCart={() => {
            handleAddToCart(selectedProduct.id);
            setSelectedProductId(null);
          }}
        />
      )}
    </section>
  );
}
