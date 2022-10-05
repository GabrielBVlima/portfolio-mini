import "../styles/components/projectscontainer.sass";

const ProjectsContainer = () => {
    return (
        <section className="projects-container">
            <h2>Projetos</h2>
            <p>
                Para ver meus projetos antigos, por favor acesse o meu portfolio antigo na barra
                lateral ou clique no botão abaixo "Portfolio Antigo"{" "}
            </p>
            <p>
                Projetos futuros estarão expostos aqui no portfolio para que vocês possam acompanhar
                minha evolução.
            </p>
            <div className="buttons">
                <a href="" className="btn_projects">
                    Ver Projetos
                </a>
                <a
                    className="btn_projects"
                    href="https://portfolio-gabriel-gilt.vercel.app/"
                    target="__blank"
                >
                    Portfolio Antigo
                </a>
            </div>
        </section>
    );
};

export default ProjectsContainer;
