import AboutComponent from "@components/about";
import HomeComponent from "@components/home";
import ProjectsComponent from "@components/projects";
import SkillsComponent from "@components/skills";
import React from "react";

const Home: React.FC = () => {
    return (
        <div>
            <HomeComponent />
            <AboutComponent />
            <SkillsComponent />
            <ProjectsComponent />
        </div>
    );
};

export default Home;
