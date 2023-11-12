import Image from "next/image";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import projectsList from "src/config/projectsList";
import AppContext from "src/context/Context";

import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";

const ProjectsSlider = (): JSX.Element => {
  const { t } = useTranslation();

  const { selectedSlide } = useContext(AppContext);
  const projectsListLength = projectsList.length;
  const cardItem = projectsList[selectedSlide];

  return (
    <div className="flex flex-col items-center p-4 my-4 text-white bg-black border-white xl:px-12 xl:py-4 border-y-4 border-x-2">
      <h2 className="mb-4 text-2xl md:text-3xl title">
        {cardItem.id} - {cardItem.title} (
        {t(`projects.context${cardItem.context}`)})
      </h2>
      {projectsListLength && (
        <div className="flex flex-col">
          <div
            key={cardItem.id}
            className="flex items-center justify-around w-full h-full px-5 md:justify-center"
          >
            <LeftArrow projectsListLength={projectsListLength} />
            <div className="relative">
              <Image
                src={cardItem.image}
                alt={cardItem.altImage}
                width={550}
                height={300}
                priority={true}
              />
            </div>
            <RightArrow projectsListLength={projectsListLength} />
          </div>
          <div className="flex justify-center h-12 my-2 gap-x-4">
            {/* links */}
            {cardItem.link !== "" && (
              <a
                className="flex items-center justify-center p-2 bg-pink-600 border-2 border-white hover:border-yellow-600 w-44 gap-x-4"
                href={cardItem.link}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/portfolio-9f1f5.appspot.com/o/spaceship.gif?alt=media&token=ee6f7df7-3c63-4f21-8089-c0d921af8ddc"
                  width={35}
                  height={35}
                  priority={true}
                />
                <p className="flex text-xxxs md:text-justify font-sorw">
                  {t("projects.link")}
                </p>
              </a>
            )}

            {/* github-front */}
            {cardItem.githubFront !== "" && (
              <a
                className="flex items-center justify-center p-2 bg-pink-600 border-2 border-white hover:border-yellow-600 w-44 gap-x-4"
                href={cardItem.githubFront}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/portfolio-9f1f5.appspot.com/o/computer.gif?alt=media&token=992f7f2f-eda3-4608-98e1-0605ebee40cd"
                  width={35}
                  height={35}
                  priority={true}
                />
                <p className="flex text-xxxs md:text-justify font-sorw">
                  {t("projects.githubFront")}
                </p>
              </a>
            )}

            {/* github-back */}
            {cardItem.githubBack !== "" && (
              <a
                className="flex items-center justify-center p-2 bg-pink-600 border-2 border-white hover:border-yellow-600 w-44 gap-x-4"
                href={cardItem.githubBack}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/portfolio-9f1f5.appspot.com/o/computer.gif?alt=media&token=992f7f2f-eda3-4608-98e1-0605ebee40cd"
                  width={35}
                  height={35}
                  priority={true}
                />
                <p className="flex text-xxxs md:text-justify font-sorw">
                  {t("projects.githubBack")}
                </p>
              </a>
            )}

            {/* no link */}
            {cardItem.link === "" &&
              cardItem.githubFront === "" &&
              cardItem.githubBack === "" && (
                <p className="flex items-center justify-center p-2 gap-x-4 font-sorw text-xxs">
                  {t("projects.noLink")}
                </p>
              )}
          </div>
        </div>
      )}
      <div className="w-2/3 mt-4">
        <p className="flex text-xs leading-5 md:text-justify font-sorw">
          {t(`projectsList.description${cardItem.description}`)}
        </p>
        <p className="flex pt-2 text-xs leading-5 md:text-justify font-sorw">
          {t("projects.tech")} : {cardItem.tech}
        </p>
      </div>
    </div>
  );
};

export default ProjectsSlider;
