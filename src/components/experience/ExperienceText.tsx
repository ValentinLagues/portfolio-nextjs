import { useTranslation } from "react-i18next";
import companies from "src/config/experiences/companies";
import graduations from "src/config/experiences/graduations";
import trainings from "src/config/experiences/trainings";

import ExperienceImage from "./ExperienceImage";

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
            {t("experiences.subtitleGraduations")}
          </h2>
          {graduations.map((graduation) => (
            <p
              key={graduation.id}
              className="flex pb-2 leading-5 text-clip md:text-justify font-sorw"
            >
              {t(`graduationsList.date${graduation.date}`)} -{" "}
              {t(`graduationsList.label${graduation.label}`)}
            </p>
          ))}
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-sorbw flickertitle">
            {t("experiences.subtitleTrainings")}
          </h2>
          {trainings.map((training) => (
            <p
              key={training.id}
              className="flex pb-2 leading-5 text-clip md:text-justify font-sorw"
            >
              {t(`trainingsList.date${training.date}`)} :{" "}
              {t(`trainingsList.label${training.label}`)} <br />
              {t(`trainingsList.mission${training.mission}`)}
            </p>
          ))}
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-sorbw title">
            {t("experiences.subtitleCompanies")}
          </h2>
          {companies.map((company) => (
            <p
              key={company.id}
              className="flex pb-2 leading-5 text-clip md:text-justify font-sorw"
            >
              {t(`companiesList.date${company.date}`)} :{" "}
              {t(`companiesList.label${company.label}`)} <br />
              {t(`companiesList.mission${company.mission}`)} <br />
              {t(`companiesList.tech${company.tech}`)}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceText;
