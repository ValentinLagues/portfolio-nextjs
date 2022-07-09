import { useTranslation } from "react-i18next";
import AboutImage from "./AboutImage";

const AboutText = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center p-4 my-4 text-white bg-black border-white border-y-4 border-x-2">
      <AboutImage />
      <p className="flex text-xs leading-5 md:px-6 text-clip md:text-justify md:leading-6 md:pt-4 font-sorw md:text-sm">
        {t("about.description")}
      </p>
    </div>
  );
};

export default AboutText;
