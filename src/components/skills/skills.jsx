import Swagger from "../../assets/image/swagger.png";
import Html from "../../assets/image/html.png";
import Css from "../../assets/image/css.png";
import Javascript from "../../assets/image/javascript.png";
import React from "../../assets/image/react.png";
import Redux from "../../assets/image/redux.png";
import Sass from "../../assets/image/sass.png";
import Github from "../../assets/image/github.png";
import Figma from "../../assets/image/figma.png";
import Wordpress from "../../assets/image/wordpress.png";
import Wave from "../../assets/image/waveSkills.png";
import darkWave from "../../assets/image/darkWaveSkills.png";
import { useDarkMode } from "../darkmode/Darkmode";

export default function Skills() {
        const { isDarkMode } = useDarkMode();

    return (
        <section id="skills">
            <img className="shapeSkills" src={isDarkMode ? darkWave : Wave} alt="" />
            <div className="index-skills">
                <h2 className="title-skills">Compétences</h2>
                <ul>
                    <li>
                        <img
                            className="icon-skills"
                            src={Html}
                            alt="logo html"
                        />
                    </li>
                    <li>
                        <img className="icon-skills" src={Css} alt="logo css" />
                    </li>
                    <li>
                        <img
                            className="icon-skills"
                            src={Javascript}
                            alt="logo javascript"
                        />
                    </li>
                    <li>
                        <img
                            className="icon-skills"
                            src={React}
                            alt="logo react"
                        />
                    </li>
                    <li>
                        <img
                            className="icon-skills"
                            src={Redux}
                            alt="logo redux"
                        />
                    </li>
                    <li>
                        <img
                            className="icon-skills"
                            src={Sass}
                            alt="logo sass"
                        />
                    </li>
                    <li>
                        <img
                            className="icon-skills"
                            src={Swagger}
                            alt="logo swagger"
                        />
                    </li>
                    <li>
                        <img
                            className="icon-skills"
                            src={Github}
                            alt="logo github"
                        />
                    </li>
                    <li>
                        <img
                            className="icon-skills"
                            src={Figma}
                            alt="logo figma"
                        />
                    </li>
                    <li>
                        <img
                            className="icon-skills"
                            src={Wordpress}
                            alt="logo wordpress"
                        />
                    </li>
                </ul>
            </div>
        </section>
    );
}
