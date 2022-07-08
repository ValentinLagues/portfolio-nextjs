import AboutComponent from "@components/about";
import HomeComponent from "@components/home";
import SkillsComponent from "@components/skills";
import React from "react";

const Home: React.FC = () => {
    return (
        <div>
            <HomeComponent />
            <AboutComponent />
            <SkillsComponent />
        </div>
    );
};

export default Home;
