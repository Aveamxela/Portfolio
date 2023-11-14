import { AiFillCloseCircle } from "react-icons/ai";

export default function Modal({ projects, projectId, onClose }) {
    // Trouver le projet correspondant à l'ID sélectionné
    const project = projects.find((project) => project.id === projectId);

    const listOfTechnos = (project) => {
        const technos = project.technos;

        if (technos && (technos.technosIcon || technos.technosText)) {
            return (
                <ul className="icons-technos">
                    {technos.technosIcon &&
                        technos.technosIcon.cover.map((cover, index) => (
                            <li key={index}>
                                <img
                                    src={cover}
                                    alt={technos.technosIcon.alt[index]}
                                />
                            </li>
                        ))}
                    {technos.technosText && (
                        <li className="text-technos">
                            {technos.technosText.map((text, index) => (
                                <p key={index}>{text}</p>
                            ))}
                        </li>
                    )}
                </ul>
            );
        }

        return null;
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
    };

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
                    <h2 className="project-title">{project.title}</h2>
                    <h3 className="project-subtitle">{project.subtitle}</h3>

                    <p className="project-description">{project.description}</p>
                    <div className="project-technos">
                        <p className="technos-use">Technologies utilisées:</p>

                        {listOfTechnos(project)}
                    </div>
                    {btnModal(project)}
                </div>
            </div>
        </div>
    );
}
