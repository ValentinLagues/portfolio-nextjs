import { useTranslation } from "react-i18next";

const ProjectsTitle = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <div className="w-full text-white">
      <h1 className="flex mb-6 text-4xl title md:text-7xl lg:text-8xl">
        {t("projects.title")}
      </h1>
    </div>
  );
};

export default ProjectsTitle;
