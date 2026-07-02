const DEFAULT_IRR_TO_USD = 42000; // adjust as needed

export function formatPrice(amount, language, rate = DEFAULT_IRR_TO_USD) {
  if (language === 'en') {
    const dollars = amount / rate;
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(dollars);
  }

  // fa (Persian) — show as Toman
  try {
    return new Intl.NumberFormat('fa-IR').format(amount) + ' تومان';
  } catch (e) {
    return amount.toLocaleString() + ' تومان';
  }
}

export default formatPrice;
