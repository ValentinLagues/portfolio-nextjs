import { useContext } from "react";
import AppContext from "src/context/Context";

import { setIndexSlider } from "../../hooks/utils";

interface IProps {
  projectsListLength: number;
}

const RightArrow = ({ projectsListLength }: IProps) => {
  const { setSelectedSlide, selectedSlide } = useContext(AppContext);
  let indexSlider = 0;
  indexSlider = projectsListLength;

  const handleChangeSlideAfter = () => {
    setSelectedSlide(setIndexSlider(indexSlider, "+", selectedSlide));
  };

  return (
    <button
      type="button"
      className="relative flex justify-center w-1/12 h-10 duration-300 sm:h-16 md:h-20 sm:hover:translate-x-3"
      onClick={() => handleChangeSlideAfter()}
    >
      <p className="ml-10 text-5xl text-white lg:text-8xl arrow font-retro">
        {">"}
      </p>
    </button>
  );
};

export default RightArrow;
