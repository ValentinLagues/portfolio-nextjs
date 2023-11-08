import SectionContainer from "@components/sectionContainer";
import ExperienceTitle from "./ExperienceTitle";

const ExperienceComponent = (): JSX.Element => {
  return (
    <SectionContainer sectionId={"experience"}>
      <div className="w-full h-full min-h-screen pt-20 md:pt-10">
        <ExperienceTitle />
      </div>
    </SectionContainer>
  );
};

export default ExperienceComponent;
