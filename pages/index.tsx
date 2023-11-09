import AboutComponent from "@components/about";
import ContactComponent from "@components/contact";
import ExperienceComponent from "@components/experience";
import HomeComponent from "@components/home";
import ProjectsComponent from "@components/projects";
import SkillsComponent from "@components/skills";
import { motion } from "framer-motion";
import { useEffect, useContext } from "react";
import AppContext from "src/context/Context";

const Home: React.FC = () => {
  const { introductionImage, setIntroductionImage } = useContext(AppContext);

  useEffect(() => {
    setTimeout(() => setIntroductionImage(false), 3000);
  }, [setIntroductionImage]);

  const variationsIntro = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <div>
      {introductionImage && (
        <motion.div
          variants={variationsIntro}
          initial="show"
          animate="hidden"
          className="absolute z-50 items-center justify-center hidden w-full h-full transition duration-1000 ease-out delay-1000 bg-black md:block"
        >
          <div className="flex items-center justify-center">
            <video
              src="https://res.cloudinary.com/dnw0kiu56/video/upload/v1657412699/portfolio/landingpage_gpt1ba.mp4"
              autoPlay
              muted
              width={800}
              height={800}
            />
          </div>
        </motion.div>
      )}
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
