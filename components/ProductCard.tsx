import { Product } from '@/lib/types';

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
  onPreview: () => void;
}

export default function ProductCard({ product, onAddToCart, onPreview }: ProductCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-2 border border-grid">
      {/* Image */}
      <div className="w-full h-48 bg-gradient-to-br from-navy to-orange flex items-center justify-center text-6xl relative overflow-hidden">
        {product.icon}
        <div className="absolute inset-0 bg-repeat opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)'
        }} />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="text-xs font-bold text-orange uppercase mb-2">
          {product.category.replace('-', ' ')}
        </div>
        <h3 className="text-lg font-bold text-navy mb-2">{product.title}</h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>
        <div className="text-2xl font-bold text-orange mb-4">${product.price}</div>

        {/* Actions */}
        <div className="flex gap-2">
          <button
            onClick={onAddToCart}
            className="flex-1 bg-whatsapp text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors text-sm"
          >
            Add to Cart
          </button>
          <button
            onClick={onPreview}
            className="flex-1 bg-grid text-gray-900 py-2 rounded-lg font-semibold hover:bg-navy hover:text-white transition-colors text-sm"
          >
            Preview
          </button>
        </div>
      </div>
    </div>
  );
}
