import SocialNetworks from "./SocialNetworks";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/perfilPhoto.jpg";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Gabriel Bezerra" />
            <p className="title">Desenvolvedor Front-End</p>
            <SocialNetworks />
            <InformationContainer />
            <a href="" className="btn">
                Baixar Curriculo
            </a>
        </aside>
    );
};

export default Sidebar;
