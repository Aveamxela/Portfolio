import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Navigation from "./components/navigation/Navigation";
import Projects from "./components/projects/projects";
import Skills from "./components/skills/skills";

export default function Main(){
    return (
        <div className="portfolio">
            <Navigation />
            <main>
                <About />
                <Projects />
                <Skills />
                <Contact />
            </main>
        </div>
    );
}