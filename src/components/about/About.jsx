// import shapeAbout from "../../assets/image/forme_a_propos.svg";
import shapeAbout from "../../assets/image/forme_a_propos1.svg";

import womanCoding from "../../assets/image/_effce18f-a109-4896-901b-8ba65fca7b4f.jpg";
export default function About() {
    return (
        <section id="about">
            <div className="container_about">
                <img
                    className="womanCoding"
                    src={womanCoding}
                    alt="Woman's coding illustration"
                />
                <div className="content_about">
                    <h2 className="title_about">Maëva Froger</h2>
                    <div className="dev_about">
                        <h5>Intégratrice web</h5>
                        <h5> Développeuse front-end</h5>
                    </div>
                    <p className="description_about">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Voluptatem autem laudantium et at beatae nobis.
                        Fuga, molestiae odit commodi labore neque quia odio
                        cupiditate minus ea nulla nesciunt aliquam velit.
                    </p>
                </div>
            </div>
            <img className="shapeAbout" src={shapeAbout} alt="" />
        </section>
    );
}
