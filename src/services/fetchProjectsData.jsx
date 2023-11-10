export async function fetchProjectsData() {
    try {
        // requête HTTP pour récupérer les données depuis notre fichier JSON
        const response = await fetch(process.env.PUBLIC_URL + "/data.json");
        if (!response.ok) {
            throw new Error("Erreur de chargement des données");
        }
        //Si réponse valide, extraction des données json
        const data = await response.json();
        // Retourne la liste des projets.
        return data.projects;
    } catch (error) {
        throw error;
    }
}
