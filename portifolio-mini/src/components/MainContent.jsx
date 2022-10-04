import AboutContainer from "./AboutContainer";
import TechnologiesContainer from "./TechnologiesContainer";
import ProjectsContainer from "./ProjectsContainer";

import "../styles/components/maincontent.sass";
import Experience from "./experience";

const MainContent = () => {
    return (
        <main id="main-content">
            <AboutContainer />
            <TechnologiesContainer />
            <Experience />
            <ProjectsContainer />
        </main>
    );
};

export default MainContent;
