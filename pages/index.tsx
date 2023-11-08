import AboutComponent from "@components/about";
import ContactComponent from "@components/contact";
import ExperienceComponent from "@components/experience";
import HomeComponent from "@components/home";
import ProjectsComponent from "@components/projects";
import SkillsComponent from "@components/skills";

const Home: React.FC = () => {
  return (
    <div>
      <HomeComponent />
      <AboutComponent />
      <ExperienceComponent />
      <SkillsComponent />
      <ProjectsComponent />
      <ContactComponent />
    </div>
  );
};

export default Home;
