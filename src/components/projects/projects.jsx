import FilterButtons from "../filterButtons/FilterButtons";
import Project from "../project/project";

export default function Projects() {
    return (
        <section id="projects">
            <h2 className="titleProjects">Projets</h2>
            <FilterButtons/>
            <div className="projects">
                <Project />
            </div>
        </section>
    );
}
