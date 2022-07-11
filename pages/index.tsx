import AboutComponent from "@components/about";
import ContactComponent from "@components/contact";
import HomeComponent from "@components/home";
import ProjectsComponent from "@components/projects";
import SkillsComponent from "@components/skills";

const Home: React.FC = () => {
  return (
    <div>
      <HomeComponent />
      <AboutComponent />
      <SkillsComponent />
      <ProjectsComponent />
      <ContactComponent />
    </div>
  );
};

export default Home;
