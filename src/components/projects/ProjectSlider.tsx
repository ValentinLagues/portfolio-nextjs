import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import projectsList from "src/config/projectsList";
import AppContext from "src/context/Context";

const ProjectsSlider = (): JSX.Element => {
  const { t } = useTranslation();

  const { selectedSlide } = useContext(AppContext);
  const projectsListLength = projectsList.length;
  const cardItem = projectsList[selectedSlide];
  const [hasLink, setHasLink] = useState("");

  useEffect(() => {
    if (cardItem.link) {
      setHasLink("cursor-pointer hover:border-yellow-600");
    }
  }, [cardItem.link]);
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      {projectsListLength && (
        <div className="flex items-center justify-around w-full h-full px-5 md:justify-center">
          <LeftArrow projectsListLength={projectsListLength} />
          <div className={`${hasLink} relative`}>
            <a
              href={cardItem.link}
              target="_blank"
              key={cardItem.id}
              rel="noreferrer noopener"
            >
              <Image
                src={cardItem.image}
                alt={cardItem.altImage}
                width={600}
                height={400}
                priority={true}
              />
            </a>
          </div>
          <RightArrow projectsListLength={projectsListLength} />
        </div>
      )}
      <div className="flex flex-col items-center justify-center w-full p-4 mt-10 bg-black md:px-6 border-y-4 border-x-2 h-1/4 ">
        <p className="mb-4 text-2xl md:text-4xl title">{cardItem.title}</p>
        <p className="text-xs text-white text-clip md:text-center font-sorw sm:text-base">
          {t(`projectsList.description${cardItem.description}`)}
        </p>
      </div>
    </div>
  );
};

export default ProjectsSlider;
