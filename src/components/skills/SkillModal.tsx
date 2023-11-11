import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import hardSkills from "../../config/skills/hardSkills";
import softSkills from "../../config/skills/softSkills";

interface IProps {
  modalIsOpen: number;
}

export default function SkillModal({ modalIsOpen }: IProps) {
  const { t } = useTranslation();

  const [skillsToDisplay, setSkillsToDisplay] = useState(softSkills);

  useEffect(() => {
    if (modalIsOpen === 1) {
      setSkillsToDisplay(softSkills);
    } else {
      setSkillsToDisplay(hardSkills);
    }
  }, [modalIsOpen]);

  return (
    <div className="flex flex-col items-center justify-center py-4 mt-10 align-middle bg-black border-white border-x-2 border-y-4">
      {modalIsOpen === 1 && (
        <p className="mb-4 text-2xl md:text-4xl title">
          {t("skills.softSkills")}
        </p>
      )}
      {modalIsOpen === 2 && (
        <p className="mb-4 text-2xl md:text-4xl flickertitle">
          {t("skills.hardSkills")}
        </p>
      )}
      {skillsToDisplay.map((skill) => (
        <div key={skill.id} className="flex flex-col leading-5 md:leading-5">
          <p className="text-xs md:text-base font-sorw">
            {t(`skillsList.label${skill.label}`)}
          </p>
        </div>
      ))}
    </div>
  );
}
