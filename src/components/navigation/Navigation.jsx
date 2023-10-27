import logo from '../../assets/image/logo.svg';

export default function Navigation() {
return (
    <nav>
        <div className="container">
            <img className="logo" src={logo} alt="logo Ax" />
            <ul>
                <li>
                    <a href="#about">À propos</a>
                </li>
                <li>
                    <a href="#projects">Projets</a>
                </li>
                <li>
                    <a href="#skills">Compétences</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
        <div className="nav-border"></div>
    </nav>
);
}