import React from "react";
import { useTranslation } from "react-i18next";
import i18next, { t } from "i18next";

const enum Language {
  EN = "en",
  FR = "fr",
}

const langArray = [
  {
    id: "1",
    tag: Language.EN,
    word: "EN",
  },
  {
    id: "2",
    tag: Language.FR,
    word: "FR",
  },
];

const Lang = () => {
  const { i18n } = useTranslation();

  const handleSetLanguage = (
    event: React.MouseEvent<HTMLDivElement>,
    langTag: string
  ) => {
    event?.stopPropagation();
    i18n.changeLanguage(langTag);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-6">
      <p className="text-base text-white md:text-lg font-sorw animate-pulse">
        {t("options.language")}
      </p>
      <div className="flex flex-row justify-center w-full gap-10 pt-4 text-xs cursor-pointer md:text-base">
        {langArray.map((language) => (
          <div
            key={language.id}
            role="presentation"
            className={
              i18next.language === language.tag ? "text-white" : "text-gray-500"
            }
            onClick={(e) => handleSetLanguage(e, language.tag)}
          >
            <p className="font-sorw">{language.word}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lang;
