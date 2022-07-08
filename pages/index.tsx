import AboutComponent from "@components/about";
import HomeComponent from "@components/home";
import React from "react";

const Home: React.FC = () => {
    return (
        <div>
            <HomeComponent />
            <AboutComponent />
        </div>
    );
};

export default Home;
