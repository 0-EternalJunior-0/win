export function getPromoText(countryCode) {
  const translations = {
    ua: {
      promoText: "Промокод",
      registrationPromoText: "Промокод ПІД ЧАС РЕЄСТРАЦІЇ",
      buttonLabel1: "ПОСИЛАННЯ НА 1WIN",
      buttonLabel2: "ПОСИЛАННЯ НА 1WIN",
      subLabel1: "НАТИСНІТЬ ТУТ",
      subLabel2: "НАТИСНІТЬ ТУТ",
    },
    ru: {
      promoText: "Промокод",
      registrationPromoText: "Промокод ПРИ РЕГИСТРАЦИИ",
      buttonLabel1: "ССЫЛКА НА 1WIN",
      buttonLabel2: "ССЫЛКА НА 1WIN",
      subLabel1: "НАЖМИ СЮДА",
      subLabel2: "НАЖМИ СЮДА",
    },
    us: {
      promoText: "Promo code",
      registrationPromoText: "Promo code DURING REGISTRATION",
      buttonLabel1: "1WIN LINK",
      buttonLabel2: "1WIN LINK",
      subLabel1: "CLICK HERE",
      subLabel2: "CLICK HERE",
    },
    // інші країни...
    default: {
      promoText: "Promo code",
      registrationPromoText: "Promo code DURING REGISTRATION",
      buttonLabel1: "1WIN LINK",
      buttonLabel2: "1WIN LINK",
      subLabel1: "CLICK HERE",
      subLabel2: "CLICK HERE",
    },
  };
  return translations[countryCode] || translations.default;
}
