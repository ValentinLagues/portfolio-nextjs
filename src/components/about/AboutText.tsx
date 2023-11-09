import { useTranslation } from "react-i18next";
import AboutImage from "./AboutImage";

const AboutText = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center p-4 my-4 text-white bg-black border-white border-y-4 border-x-2">
      <AboutImage />
      <p className="flex text-xs leading-5 md:px-6 text-clip md:text-justify md:pt-4 font-sorw">
        {t("about.description-1")} <br />
        {t("about.description-2")} <br />
        {t("about.description-3")} <br />
        {t("about.description-4")} <br />
        {t("about.description-5")}
      </p>
    </div>
  );
};

export default AboutText;
