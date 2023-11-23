import { fetchProjectsData } from "../../services/fetchProjectsData";
import { useEffect, useState } from "react";
import Modal from "../modal/modal";
import Button from "../button/button";

export default function Project() {
    const [projectsTypes, setProjectsTypes] = useState(["Tous"]);
    const [showModal, setShowModal] = useState(false);
    const [projects, setProjects] = useState([]); // Stocke les données des projets.
    // const [loading, setLoading] = useState(false);
    const [selectedProjectId, setSelectedProjectId] = useState(null); //Stocke l'ID du projet sélectionné.

    document.addEventListener("selectedTypes", ({ detail }) => {
        setProjectsTypes(detail.types);
    });

    function filteredProjects() {
        return projects.filter((project) => {
            if (projectsTypes.includes("Tous")) {
                return true;
            }
            return projectsTypes.some((type) => project.type.includes(type));
        });
    }
    console.log(filteredProjects());

    const openModal = (projectId) => {
        setShowModal(true);
        setSelectedProjectId(projectId);
    };
    const closeModal = () => {
        setShowModal(false);
    };

    // Chargement des données des projets.
    useEffect(() => {
        // setLoading(true);
        fetchProjectsData()
            .then((projects) => {
                setProjects(projects);
                // setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // if (loading) {
    //     return (
    //         <>
    //             {/* A styliser */}
    //             <p>Chargement....</p>
    //         </>
    //     );
    // }
    return (
        <>
            {filteredProjects().map((project, i) => {
                return (
                    <figure className="project" key={i}>
                        <img src={project.cover} alt={project.alt} />
                        <div className="overlay">
                            <figcaption>
                                <h2 className="title">{project.title}</h2>
                            </figcaption>
                            <Button
                                text="En savoir plus"
                                onClick={() => openModal(project.id)}
                            />
                        </div>
                    </figure>
                );
            })}

            {showModal && selectedProjectId !== null && (
                <Modal
                    projects={projects}
                    projectId={selectedProjectId}
                    onClose={closeModal}
                />
            )}
        </>
    );
}
