import React from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
// import useInteraction from "../../hooks/useInteraction";

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
  // const { option } = useInteraction();

  const handleSetLanguage = (
    event: React.MouseEvent<HTMLDivElement>,
    langTag: string
  ) => {
    event?.stopPropagation();
    i18n.changeLanguage(langTag);
    // option();
  };

  return (
    <div className="flex flex-row justify-center w-full gap-10 text-xs cursor-pointer md:text-base">
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
  );
};

export default Lang;
