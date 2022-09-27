import { useState } from "react";
import SocialNetworks from "./SocialNetworks";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/perfilPhoto.jpg";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
    const urlDownloadCurriculo =
        "https://drive.google.com/u/0/uc?id=1wSHFAF4REG1SD_Qqdy2x4EaYJUIdiz_7&export=download";
    const [download, setDownload] = useState("");

    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Gabriel Bezerra" />
            <p className="title">Desenvolvedor Front-End</p>
            <SocialNetworks />
            <InformationContainer />
            <button
                className="btn"
                onClick={() => {
                    setDownload(urlDownloadCurriculo);
                }}
            >
                Baixar Curriculo
            </button>
            {download && <iframe src={download}></iframe>}
        </aside>
    );
};

export default Sidebar;
