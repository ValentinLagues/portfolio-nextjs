import SectionContainer from "@components/sectionContainer";
import ChoosePlayer from "./ChoosePlayer";
import SkillsTitle from "./SkillsTitle";

const SkillsComponent = (): JSX.Element => {
  return (
    <SectionContainer sectionId={"skills"}>
      <div className="w-full h-full min-h-screen pt-20 md:pt-10">
        <SkillsTitle />
        <ChoosePlayer />
      </div>
    </SectionContainer>
  );
};

export default SkillsComponent;
