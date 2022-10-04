import { SiJira, SiFigma, SiTrello } from "react-icons/si";
import { DiScrum } from "react-icons/di";
import { BsFillKanbanFill } from "react-icons/bs";

import "../styles/components/technologiescontainer.sass";

const technologies = [
    { id: "figma", name: "Figma", icon: <SiFigma />, level: "Utilizado em mais de 10 projetos." },
    { id: "jira", name: "Jira", icon: <SiJira />, level: "Utilizado em 2 projetos em equipe." },
    {
        id: "trello",
        name: "Trello",
        icon: <SiTrello />,
        level: "Utilizado em mais de 10 projetos em equipe.",
    },
    {
        id: "scrum",
        name: "Scrum",
        icon: <DiScrum />,
        level: "Utilizado em mais de 10 projetos em equipe.",
    },
    {
        id: "kanban",
        name: "Kanban",
        icon: <BsFillKanbanFill />,
        level: "Utilizado em mais de 15 projetos.",
    },
];

const Experience = () => {
    return (
        <section className="technologies-container">
            <h2>Experiência com</h2>
            <div className="technologies-grid">
                {technologies.map((tech) => (
                    <div className="technology-card" id={tech.id} key={tech.id}>
                        {tech.icon}
                        <div className="technology-info">
                            <h3>{tech.name}</h3>
                            <p>{tech.level}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
