import { useTranslation } from "react-i18next";

const HomeTitle = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <div className="w-full text-white ">
      <h1 className="flex flex-row justify-center text-4xl font-roadrage mainTitle md:text-7xl lg:text-8xl xl:text-9xl">
        {t("home.name")}
      </h1>
      <h2 className="flex text-3xl md:py-4 title md:text-5xl lg:text-6xl xl:text-7xl">
        {t("home.developer")}
      </h2>
    </div>
  );
};

export default HomeTitle;
