import { DiHtml5, DiCss3, DiJsBadge, DiSass, DiNodejsSmall, DiReact } from "react-icons/di";

import "../styles/components/technologiescontainer.sass";

const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 />, level: "Mais de 1 ano de experiência." },
    { id: "css", name: "CSS3", icon: <DiCss3 />, level: "Mais de 1 ano de experiência." },
    { id: "sass", name: "Sass", icon: <DiSass />, level: "Entre 0 e 6 meses de experiência" },
    { id: "js", name: "JavaScript", icon: <DiJsBadge />, level: "Mais de 1 ano de experiência." },
    { id: "react", name: "React", icon: <DiReact />, level: "Mais de 1 ano de experiência." },
    {
        id: "node",
        name: "Node.js",
        icon: <DiNodejsSmall />,
        level: "Mais de 1 ano de experiência.",
    },
];

const TechnologiesContainer = () => {
    return (
        <section className="technologies-container">
            <h2>Tecnologias</h2>
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

export default TechnologiesContainer;
