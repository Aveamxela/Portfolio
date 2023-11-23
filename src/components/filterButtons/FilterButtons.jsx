import React, { useEffect, useState } from "react";
import { fetchProjectsType } from "../../services/fetchProjectsType";

export default function FilterButtons() {
    const [projectTypes, setProjectTypes] = useState([]);
    const [selectedTypes, setSelectedTypes] = useState(["Tous"]);
    const [isActive, setIsActive] = useState([0]);

    const handleClick = (type, i) => {
        let updatedSelectedTypes;

        if (type === "Tous") {
            updatedSelectedTypes = ["Tous"];
            setIsActive([0]);
        } else {
            if (selectedTypes.includes("Tous")) {
                // Si "Tous" était sélectionné, désélectionner "Tous" et mettre à jour la sélection
                updatedSelectedTypes = [type];
                setIsActive([i]);
            } else {
                // Si "Tous" n'est pas sélectionné, mettre à jour la sélection
                updatedSelectedTypes = selectedTypes.includes(type)
                    ? selectedTypes.filter((item) => item !== type)
                    : [...selectedTypes, type];

                // Si tous les boutons (sauf "Tous") sont sélectionnés, sélectionner "Tous" à la place
                if (
                    projectTypes
                        .slice(1)
                        .every((projectType) =>
                            updatedSelectedTypes.includes(projectType)
                        )
                ) {
                    updatedSelectedTypes = ["Tous"];
                }
            }
            if (updatedSelectedTypes.length === 0) {
                console.log("check");
                updatedSelectedTypes = ["Tous"];
            }
        }
        // Mets à jour les boutons actifs en fonction des types sélectionnés
        setIsActive(
            updatedSelectedTypes.map((selectedType) =>
                projectTypes.indexOf(selectedType)
            )
        );
        const event = new CustomEvent("selectedTypes", {
            detail: { types: updatedSelectedTypes },
        });
        document.dispatchEvent(event);
        setSelectedTypes(updatedSelectedTypes);
    };

    useEffect(() => {
        console.log({ selectedTypes });
    }, [projectTypes, selectedTypes, isActive]);

    useEffect(() => {
        fetchProjectsType()
            .then((types) => {
                setProjectTypes(types);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="buttons">
            {projectTypes.map((type, i) => (
                <button
                    className={`button-type ${
                        isActive.includes(i) ? "active-button" : ""
                    }`}
                    key={i}
                    onClick={() => handleClick(type, i)}
                >
                    {type}
                </button>
            ))}
        </div>
    );
}
