import { useTranslation } from "react-i18next";
import SkillsImage from "./SkillsImage";
import softSkills from "src/config/skills/softSkills";
import frontEndSkills from "src/config/skills/frontEndSkills";
import backEndSkills from "src/config/skills/backEndSkills";
import methodSkills from "src/config/skills/methodSkills";

const SkillsText = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col p-4 my-4 text-white bg-black border-white xl:px-24 xl:py-4 border-y-4 border-x-2">
      <SkillsImage />
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-48 lg:gap-y-8">
        <div>
          <h2 className="text-2xl md:text-3xl md:pb-2 font-sorbw title">
            {t("skills.frontEndSkills")}
          </h2>
          <div className="flex flex-col lg:grid lg:grid-cols-3 lg:items-center">
            {frontEndSkills.map((frontEndSkill) => (
              <p
                key={frontEndSkill.id}
                className="grid pb-2 text-xs text-clip md:text-justify font-sorw"
              >
                {t(`frontEndSkillsList.label${frontEndSkill.label}`)}
              </p>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl md:pb-2 font-sorbw flickertitle2">
            {t("skills.backEndSkills")}
          </h2>
          <div className="flex flex-col lg:grid lg:grid-cols-3">
            {backEndSkills.map((backEndSkill) => (
              <p
                key={backEndSkill.id}
                className="flex pb-2 text-xs text-clip md:text-justify font-sorw"
              >
                {t(`backEndSkillsList.label${backEndSkill.label}`)}
              </p>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl md:pb-2 font-sorbw flickertitle">
            {t("skills.methodSkills")}
          </h2>
          <div className="flex flex-col lg:grid lg:grid-cols-3">
            {methodSkills.map((methodSkill) => (
              <p
                key={methodSkill.id}
                className="flex pb-2 text-xs text-clip md:text-justify font-sorw"
              >
                {t(`methodSkillsList.label${methodSkill.label}`)}
              </p>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl md:pb-2 md:text-3xl font-sorbw title">
            {t("skills.softSkills")}
          </h2>
          <div className="flex flex-col lg:grid lg:grid-cols-3">
            {softSkills.map((softSkill) => (
              <p
                key={softSkill.id}
                className="flex pb-2 pr-4 text-xs text-clip md:text-justify font-sorw"
              >
                {t(`softSkillsList.label${softSkill.label}`)}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsText;
