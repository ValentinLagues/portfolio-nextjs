import { useTranslation } from "react-i18next";

const AboutTitle = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <div className="w-full text-white">
      <h1 className="flex mb-6 text-4xl flickertitle md:text-7xl lg:text-8xl">
        {t("about.title")}
      </h1>
    </div>
  );
};

export default AboutTitle;
