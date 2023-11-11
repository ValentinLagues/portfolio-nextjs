import { useTranslation } from "react-i18next";
import AboutImage from "./AboutImage";

const AboutText = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center p-4 my-4 text-white bg-black border-white xl:px-12 xl:py-4 xl:flex-row border-y-4 border-x-2">
      <div className="block lg:hidden">
        <AboutImage />
      </div>
      <p className="flex text-xs leading-5 lg:w-2/3 text-clip md:text-justify font-sorw">
        {t("about.description-1")} <br />
        {t("about.description-2")} <br />
        {t("about.description-3")} <br />
        {t("about.description-4")} <br />
        {t("about.description-5")}
      </p>
      <div className="hidden lg:block lg:w-1/3">
        <AboutImage />
      </div>
    </div>
  );
};

export default AboutText;
