import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./src/translation/indexEN";
import translationFR from "./src/translation/indexFR";

// the translations
const resources = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },
};

const defaultLanguage = "fr";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: defaultLanguage,

    keySeparator: ".", // to support nested translations

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
