import SectionContainer from "@components/sectionContainer";

import ExperienceText from "./ExperienceText";
import ExperienceTitle from "./ExperienceTitle";

const ExperienceComponent = (): JSX.Element => {
  return (
    <SectionContainer sectionId="experience">
      <div className="w-full h-full min-h-screen pt-20 md:pt-10">
        <ExperienceTitle />
        <ExperienceText />
      </div>
    </SectionContainer>
  );
};

export default ExperienceComponent;
