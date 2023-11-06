import logo from "../../assets/image/logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import { useState } from "react";

export default function Navigation() {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    const [showLinks, setShowLinks] = useState(false);

    const handleShowLinks = () => {
        setShowLinks(!showLinks);
    };
    const handleHideLinks = () => {
        setShowLinks(false);
    };
    return (
        <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
            <img
                className={`${showLinks ? "none" : "navbar__logo"}`}
                src={logo}
                alt="logo Ax"
                onClick={scrollToTop}
                duration
            />
            <ul className="navbar__links" onClick={handleHideLinks}>
                <li className="navbar__item slideInDown-1 ">
                    <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
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
                        offset={-70}
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
                        offset={-70}
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
                        offset={-70}
                        duration={500}
                        onClick={handleHideLinks}
                        className="navbar__link"
                    >
                        Contact
                    </Link>
                </li>
            </ul>
            <button className="navbar__burger" onClick={handleShowLinks}>
                <span className="burger-bar"></span>
            </button>
            <div className="nav-border"></div>
        </nav>
    );
}
