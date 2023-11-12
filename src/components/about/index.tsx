import SectionContainer from "@components/sectionContainer";

import AboutText from "./AboutText";
import AboutTitle from "./AboutTitle";

const AboutComponent = (): JSX.Element => {
  return (
    <SectionContainer sectionId={"about"}>
      <div className="w-full h-full min-h-screen pt-20 md:pt-10">
        <AboutTitle />
        <AboutText />
      </div>
    </SectionContainer>
  );
};

export default AboutComponent;
