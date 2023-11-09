import { useTranslation } from "react-i18next";

const SkillsTitle = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <div className="w-full text-white">
      <h1 className="flex mb-6 text-4xl title md:text-7xl">
        {t("skills.title")}
      </h1>
    </div>
  );
};

export default SkillsTitle;
