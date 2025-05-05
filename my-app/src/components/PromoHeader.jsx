import React from "react";

const PromoHeader = ({ promoText, promoCode, registrationPromoText }) => (
  <div>
    <h2>
      {registrationPromoText} – <strong>{promoCode}</strong>
    </h2>
  </div>
);

export default PromoHeader;
