import { useState } from "react";
import Button from "../button/button";
import FormModal from "../formModal/formModal";
export default function Contact() {
    const [showModal, setShowModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Récupération des valeurs du formulaire
        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;
        // Vérification si les champs sont remplis
        if (!name || !email || !message) {
            setErrorMessage("Veuillez remplir tous les champs du formulaire.");
            e.target.reset();
        } else {
            setShowModal(true);
            setErrorMessage("");
            // Réinitialise le formulaire
            e.target.reset();
        }
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <section id="contact">
            <h2>Contact</h2>

            <div className="container-form-contact">
                <form
                    className="form-contact"
                    // Nom du formulaire utilisé par Netlify
                    name="portfolioContact"
                    method="POST"
                    // Indique à Netlify de gérer ce formulaire
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleFormSubmit}
                    action="/"
                >
                    {errorMessage && (
                        <p className="error-message">{errorMessage}</p>
                    )}
                    {/* Champ caché pour indiquer le nom du formulaire à Netlify */}
                    <input
                        type="hidden"
                        name="form-name"
                        // Indique à Netlify quel formulaire est soumis
                        value="portfolioContact"
                    />

                    <label for="name">Nom :</label>
                    <input type="text" name="name"  />

                    <label for="email">Email :</label>
                    <input type="email" name="email"  />

                    <label for="message">Message :</label>
                    <textarea name="message" ></textarea>

                    <Button text="Envoyer" type="submit" />
                </form>
            </div>
            {showModal && (
                <FormModal
                    show={showModal}
                    onClose={closeModal}
                    text="Message envoyé avec succès !"
                />
            )}
        </section>
    );
}
