import "../styles/components/projectscontainer.sass";

const ProjectsContainer = () => {
    return (
        <section className="projects-container">
            <h2>Projetos</h2>
            <p>
                Para ver meus projetos antigos, por favor acesse o meu portfolio antigo na barra
                lateral.{" "}
            </p>
            <p>
                Projetos futuros estarão expostos aqui no portfolio para que vocês possam acompanhar
                minha evolução.
            </p>
            <a href="" className="btn">
                Ver Projetos
            </a>
        </section>
    );
};

export default ProjectsContainer;
