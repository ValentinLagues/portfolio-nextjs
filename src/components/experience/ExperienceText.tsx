import { useTranslation } from "react-i18next";
import ExperienceImage from "./ExperienceImage";
import graduations from "src/config/graduations";
import trainings from "src/config/trainings";
import companies from "src/config/companies";

const ExperienceText = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center p-4 my-4 text-white bg-black border-white xl:px-12 xl:py-4 xl:flex-row border-y-4 border-x-2">
      <div className="lg:w-1/3">
        <ExperienceImage />
      </div>
      <div className="flex flex-col text-xxs lg:text-xs lg:w-2/3 text-clip md:text-justify font-sorw">
        <div>
          <h2 className="text-2xl md:text-3xl font-sorbw title">
            {t("experience.subtitle-1")}
          </h2>
          {graduations.map((graduation) => (
            <p
              key={graduation.id}
              className="flex pb-3 leading-5 text-clip md:text-justify font-sorw"
            >
              {t(`experience.date${graduation.date}`)} -{" "}
              {t(`experience.label${graduation.label}`)}
            </p>
          ))}
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-sorbw flickertitle">
            {t("experience.subtitle-2")}
          </h2>
          {trainings.map((training) => (
            <p
              key={training.id}
              className="flex pb-3 leading-5 text-clip md:text-justify font-sorw"
            >
              {t(`experience.date${training.date}`)} :{" "}
              {t(`experience.label${training.label}`)} <br />
              {t(`experience.mission${training.mission}`)}
            </p>
          ))}
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-sorbw title">
            {t("experience.subtitle-3")}
          </h2>
          {companies.map((company) => (
            <p
              key={company.id}
              className="flex pb-3 leading-5 text-clip md:text-justify font-sorw"
            >
              {t(`experience.date${company.date}`)} :{" "}
              {t(`experience.label${company.label}`)} <br />
              {t(`experience.mission${company.mission}`)} <br />
              {t(`experience.tech${company.tech}`)}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceText;
