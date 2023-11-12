import SectionContainer from "@components/sectionContainer";
import Lang from "@components/UI/Lang";

import HomeTitle from "./HomeTitle";

const HomeComponent = (): JSX.Element => {
  return (
    <SectionContainer sectionId="home">
      <div className="flex flex-col items-center justify-center w-full h-full min-h-screen">
        <HomeTitle />
        <Lang />
      </div>
    </SectionContainer>
  );
};

export default HomeComponent;
