export const getGeoCountryCode = async () => {
  const res = await fetch("https://ipapi.co/json/");
  const data = await res.json();
  return data.country_code.toLowerCase();
};

// utils/translations.js
export const translations = {
  ua: "Промокод",
  ru: "Промокод",
  us: "Promo code",
  gb: "Promo code",
  fr: "Code promo",
  default: "Promo Code",
};

export const getPromoText = (code) =>
  translations[code] || translations.default;
