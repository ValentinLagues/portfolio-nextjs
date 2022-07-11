import { useState } from "react";
import { useTranslation } from "react-i18next";
import SkillImage from "./SkillImage";
import SkillModal from "./SkillModal";

export default function ChoosePlayer() {
  const { t } = useTranslation();
  const [modalIsOpen, setModalIsOpen] = useState(0);
  const players = [
    {
      id: 1,
      pic: "https://res.cloudinary.com/dnw0kiu56/image/upload/v1657181442/portfolio/pink_b1eivx.png",
      alt: "softskills",
    },
    {
      id: 2,
      pic: "https://res.cloudinary.com/dnw0kiu56/image/upload/v1657500333/portfolio/hacker-static_qvfp0j.jpg",
      alt: "hardskills",
    },
  ];
  return (
    <div className="mb-4 text-white ">
      <p className="flex justify-center pb-6 text-xs md:pb-4 md:text-lg font-sorw animate-pulse">
        {t("skills.player")}
      </p>
      <div className="flex flex-row justify-center w-full gap-8 md:gap-24">
        {players.map((pic) => (
          <SkillImage
            pic={pic}
            key={pic.id}
            modalIsOpen={modalIsOpen}
            setModalIsOpen={setModalIsOpen}
          />
        ))}
      </div>
      <div>{modalIsOpen !== 0 && <SkillModal modalIsOpen={modalIsOpen} />}</div>
    </div>
  );
}
