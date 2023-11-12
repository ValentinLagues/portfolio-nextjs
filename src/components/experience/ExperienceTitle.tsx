import { useTranslation } from "react-i18next";

const ExperienceTitle = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <div className="w-full text-white">
      <h1 className="flex mb-6 text-4xl flickertitle2 md:text-7xl">
        {t("experiences.title")}
      </h1>
    </div>
  );
};

export default ExperienceTitle;
