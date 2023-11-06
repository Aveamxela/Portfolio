import { fetchProjectsData } from "../../services/fetchProjectsData";
import { useEffect, useState } from "react";
import Modal from "../modal/modal";
import Button from "../button/button";

export default function Project() {
    const [showModal, setShowModal] = useState(false);
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedProjectId, setSelectedProjectId] = useState(null);

    const openModal = (projectId) => {
        setShowModal(true);
        setSelectedProjectId(projectId)
    };
    const closeModal = () => {
        setShowModal(false);
    };

    useEffect(() => {
        setLoading(true);
        fetchProjectsData()
            .then((projects) => {
                setProjects(projects);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    if (loading) {
        return (
            <>
                {/* A styliser */}
                <p>Loadinnnggggggg ....</p>
            </>
        );
    }

    return (
        <>
            {projects.map((project, i) => {
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
                            {/* <button className="hover" onClick={() => openModal(project.id)}>
                                En savoir plus
                            </button> */}
                        </div>
                    </figure>
                );
            })}

            {showModal && selectedProjectId !== null && (
                 <Modal projects={projects} projectId={selectedProjectId} onClose={closeModal} />
                 )}
        </>
    );
}
