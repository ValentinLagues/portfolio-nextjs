import SectionContainer from "@components/sectionContainer";

import ProjectSlider from "./ProjectSlider";
import ProjectsTitle from "./ProjectsTitle";

const ProjectsComponent = (): JSX.Element => {
  return (
    <SectionContainer sectionId="projects">
      <div className="w-full h-full min-h-screen pt-20 md:pt-10">
        <ProjectsTitle />
        <ProjectSlider />
      </div>
    </SectionContainer>
  );
};

export default ProjectsComponent;
