import logo from "../../assets/image/logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import { useState } from "react";

export default function Navigation() {
    // Fait défiler la page vers le haut lorsque le logo est cliqué.
    const scrollToTop = () => {
        scroll.scrollToTop();
    };
    // Etat qui permet d'afficher ou de masquer les liens de navigations
    const [showLinks, setShowLinks] = useState(false);
    // Affiche les liens de navigation du menu burger
    const handleShowLinks = () => {
        setShowLinks(!showLinks);
    };
    // Masque les liens de navigation du menu burger
    const handleHideLinks = () => {
        setShowLinks(false);
    };
    return (
        <header>
            <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
                <ul className="navbar__links" onClick={handleHideLinks}>
                    <li className="navbar__item slideInDown-1 ">
                        <Link
                            // quand section active (dessus)
                            activeClass="active"
                            to="about"
                            // active la détection du lien et suit la position de la page
                            spy={true}
                            // Cet attribut active l'animation de défilement doux.
                            smooth={true}
                            // décalage (en pixels) par rapport à la cible de l'ancre
                            offset={-80}
                            // durée de l'animation de défilement doux
                            duration={500}
                            onClick={handleHideLinks}
                            className="navbar__link"
                        >
                            À propos
                        </Link>
                    </li>
                    <li className="navbar__item slideInDown-2">
                        <Link
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-79}
                            duration={500}
                            onClick={handleHideLinks}
                            className="navbar__link"
                        >
                            Projets
                        </Link>
                    </li>
                    <li className="navbar__item slideInDown-3">
                        <Link
                            activeClass="active"
                            to="skills"
                            spy={true}
                            smooth={true}
                            offset={-73}
                            duration={500}
                            onClick={handleHideLinks}
                            className="navbar__link"
                        >
                            Compétences
                        </Link>
                    </li>
                    <li className="navbar__item slideInDown-4">
                        <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-67}
                            duration={500}
                            onClick={handleHideLinks}
                            className="navbar__link"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
                {/* Bouton burger pour afficher/masquer les liens de navigation*/}
                <button className="navbar__burger" onClick={handleShowLinks}>
                    <span className="burger-bar"></span>
                </button>
                {/* Si liens de navigation affichés, masquer logo, sinon l'afficher */}
                <img
                    className={`${showLinks ? "none" : "logo"}`}
                    src={logo}
                    alt="logo Ax"
                    onClick={scrollToTop}
                    duration
                />
                <div className="nav-border"></div>
            </nav>
        </header>
    );
}
