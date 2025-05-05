import React, { useEffect, useState } from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import PromoHeader from "../components/PromoHeader";
import ButtonCard from "../components/ButtonCard";
import { getGeoCountryCode } from "../services/geoService";
import { getPromoText } from "../utils/translations";

const HomePage = () => {
  const registrationUrl = "https://1wkebz.life/?open=register&p=5kyu";
  const [translations, setTranslations] = useState({
    promoText: "Promo Code",
    registrationPromoText: "Promo Code DURING REGISTRATION",
    buttonLabel1: "1WIN LINK",
    buttonLabel2: "CLICK HERE",
  });

  useEffect(() => {
    getGeoCountryCode()
      .then((code) => setTranslations(getPromoText(code)))
      .catch(() => setTranslations(getPromoText("default")));
  }, []);

  return (
    <DefaultLayout>
      <PromoHeader
        promoText={translations.promoText}
        promoCode="LV1550"
        registrationPromoText={translations.registrationPromoText}
      />
      <ButtonCard
        icon="💲"
        label={translations.buttonLabel1}
        subLabel={translations.subLabel1}
        url={registrationUrl}
      />
      <ButtonCard
        icon="💰"
        label={translations.buttonLabel2}
        subLabel={translations.subLabel2}
        url={registrationUrl}
      />
    </DefaultLayout>
  );
};

export default HomePage;
