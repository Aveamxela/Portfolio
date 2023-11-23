export async function fetchProjectsType() {
    try {
        // requête HTTP pour récupérer les données depuis notre fichier JSON
        const response = await fetch(process.env.PUBLIC_URL + "/data.json");
        if (!response.ok) {
            throw new Error("Erreur de chargement des données");
        }
        //Si réponse valide, extraction des données json
        const data = await response.json();
        const datas = { projects: [{ type: "Tous" }, ...data.projects] };
        console.log({ datas });

       const projectTypes = datas.projects.map((project) => project.type);
       // Utilisez un Set pour obtenir des types uniques
       const uniqueProjectTypes = Array.from(new Set(projectTypes));

       console.log({ uniqueProjectTypes });

       return uniqueProjectTypes;
    } catch (error) {
        throw error;
    }
}
