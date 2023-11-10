import SectionContainer from "@components/sectionContainer";
import ChoosePlayer from "./ChoosePlayer";
import SkillsText from "./SkillsText";
import SkillsTitle from "./SkillsTitle";

const SkillsComponent = (): JSX.Element => {
  return (
    <SectionContainer sectionId={"skills"}>
      <div className="w-full h-full min-h-screen pt-20 md:pt-10">
        <SkillsTitle />
        <SkillsText />
      </div>
    </SectionContainer>
  );
};

export default SkillsComponent;
