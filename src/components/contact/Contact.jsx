import { useState } from "react";
import Button from "../button/button";
import FormModal from "../formModal/formModal";
export default function Contact() {
    const [showModal, setShowModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleFormSubmit = async (e) => {
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
           try {
      // Soumettre les données au backend de Netlify
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "portfolioContact",
          name,
          email,
          message,
        }).toString(),
      });

      setShowModal(true);
      setErrorMessage("");
      e.target.reset();
    } catch (error) {
      console.error("Une erreur s'est produite lors de l'envoi du formulaire:", error);
      setErrorMessage("Une erreur s'est produite lors de l'envoi du formulaire.");
    }
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
                    method="post"
                    // Indique à Netlify de gérer ce formulaire
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleFormSubmit}
                    action="/"
                >
                    <input
                        type="hidden"
                        name="form-name"
                        // Indique à Netlify quel formulaire est soumis
                        value="portfolioContact"
                    />
                    {errorMessage && (
                        <p className="error-message">{errorMessage}</p>
                    )}
                    {/* Champ caché pour indiquer le nom du formulaire à Netlify */}

                    <label for="name">Nom :</label>
                    <input type="text" name="name" />

                    <label for="email">Email :</label>
                    <input type="email" name="email" />

                    <label for="message">Message :</label>
                    <textarea name="message"></textarea>

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
