import { AiFillCloseCircle } from "react-icons/ai";

export default function Modal({ projects, projectId, onClose }) {
    const project = projects.find((project) => project.id === projectId);
    const technos = project.technos;

    const listOfTechnos = (project) => {
        const value = "/portfolio";

        return technos.map((techno, index) => (
            <li key={index}>
                {techno.toLowerCase().startsWith(value.toLowerCase()) ? (
                    <img src={techno} alt="icone" />
                ) : (
                    <p> {techno}</p>
                )}
            </li>
        ));
    };

    const btnModal = (project) => {
        if (project.githubLink) {
            return (
                <div className="project-github-website">
                    <a
                        className="project-btn1"
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Voir code
                    </a>
                    {"  "}|{" "}
                    <a
                        className="project-btn2"
                        href={project.siteLink}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Site web
                    </a>
                </div>
            );
        } else {
            return (
                <div className="project-github-website">
                    <a
                        className="project-btn1"
                        href={project.slideShowLink}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Voir diaporama
                    </a>
                </div>
            );
        }
    }

    return (
        <div className="modal-container" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <div className="close-icon" onClick={onClose}>
                    <AiFillCloseCircle />
                </div>
                <div className="modal-content">
                    <img
                        className="modal-img"
                        src={project.cover}
                        alt={project.alt}
                    />
                    <h1 className="project-title">{project.title}</h1>
                    <h2 className="project-subtitle">{project.subtitle}</h2>

                    <p className="project-description">{project.description}</p>
                    <div className="project-technos">
                        <p className="technos-use">Technologies utilisées:</p>
                        <ul className="icons-technos">
                            {listOfTechnos(project)}
                        </ul>
                    </div>
                        {btnModal(project)}
                </div>
            </div>
        </div>
    );
}
