import { CartItem } from './types';

export const generateWhatsAppMessage = (cart: CartItem[], customerName: string = '[Your Name]'): string => {
  const itemsList = cart
    .map((item) => `• ${item.title} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}`)
    .join('\n');

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return `Hi! I want to order from IPYNB Solutions:\n\n${itemsList}\n\nTotal: $${total.toFixed(2)}\n\nMy name: ${customerName}`;
};

export const openWhatsApp = (message: string, phoneNumber: string): void => {
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
};

export const formatPrice = (price: number): string => {
  return `$${price.toFixed(2)}`;
};
