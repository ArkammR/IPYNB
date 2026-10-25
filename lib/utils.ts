export const openWhatsApp = (message: string, phoneNumber: string): void => {
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
};
