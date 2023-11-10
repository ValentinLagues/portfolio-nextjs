import { useTranslation } from "react-i18next";
import graduations from "src/config/graduations";
import trainings from "src/config/trainings";
import companies from "src/config/companies";
import SkillsImage from "./SkillsImage";

const SkillsText = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col p-4 my-4 text-white bg-black border-white border-y-4 border-x-2">
      <SkillsImage />
      <div className="md:pt-4">
        <h2 className="text-2xl md:text-3xl md:px-6 font-sorbw title">
          {t("experience.subtitle-1")}
        </h2>
        {graduations.map((graduation) => (
          <p
            key={graduation.id}
            className="flex pb-4 text-xs leading-5 md:px-10 text-clip md:text-justify font-sorw"
          >
            {t(`experience.date${graduation.date}`)} -{" "}
            {t(`experience.label${graduation.label}`)}
          </p>
        ))}
      </div>

      <div className="md:pt-4">
        <h2 className="text-2xl md:text-3xl md:px-6 font-sorbw flickertitle">
          {t("experience.subtitle-2")}
        </h2>
        {trainings.map((training) => (
          <p
            key={training.id}
            className="flex pb-4 text-xs leading-5 md:px-10 text-clip md:text-justify font-sorw"
          >
            {t(`experience.date${training.date}`)} :{" "}
            {t(`experience.label${training.label}`)} <br />
            {t(`experience.mission${training.mission}`)}
          </p>
        ))}
      </div>

      <div className="md:pt-4">
        <h2 className="text-2xl md:text-3xl md:px-6 font-sorbw title">
          {t("experience.subtitle-3")}
        </h2>
        {companies.map((company) => (
          <p
            key={company.id}
            className="flex pb-4 text-xs leading-5 md:px-10 text-clip md:text-justify font-sorw"
          >
            {t(`experience.date${company.date}`)} :{" "}
            {t(`experience.label${company.label}`)} <br />
            {t(`experience.mission${company.mission}`)} <br />
            {t(`experience.tech${company.tech}`)}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SkillsText;
