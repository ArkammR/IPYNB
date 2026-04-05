export type ProductCategory = 'all' | 'pos' | 'billing' | 'website';

export interface Product {
  id: number;
  title: string;
  category: ProductCategory;
  price: number;
  description: string;
  icon: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
}
