import leaves from "../../assets/image/leaves.svg";
import Project from "../project/project";
export default function Projects() {
    return (
        <div>
            <section id="projects">
                <div className="projects">
                    <h1 className="title_projects">Projets</h1>
                </div>
                <img className="leaves_projects" src={leaves} alt="leaves" />
                <div id="triangle"></div>
            </section>
            <section id="listOfProjects">
                <div className="projects">
                    <h1>Projets</h1>
                    <Project/>
                </div>
                <div></div>
            </section>
        </div>
    );
}
