export async function fetchProjectsData() {
    try {
        const response = await fetch(process.env.PUBLIC_URL + "/data.json");
        if (!response.ok) {
            throw new Error("Erreur de chargement des données");
        }
        const data = await response.json();
        return data.projects;
    } catch (error) {
        throw error;
    }
}
