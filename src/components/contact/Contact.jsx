import { useState } from "react";
import Button from "../button/button";
import FormModal from "../formModal/formModal";
export default function Contact() {
          const [showModal, setShowModal] = useState(false);

         const handleFormSubmit = (e) => {
             e.preventDefault();
             setShowModal(true);
             console.log("ouverture")
         };

         const closeModal = () => {
             setShowModal(false);
             console.log("fermeture")
         };

    return (
        <section id="contact">
            <h1>Contact</h1>
            <div className="container-form-contact">
                <form
                    className="form-contact"
                    name="portfolioContact"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleFormSubmit}
                    action="/"
                >
                    <input
                        type="hidden"
                        name="form-name"
                        value="portfolioContact"
                    />

                    <label for="name">Nom :</label>
                    <input type="text" name="name" />

                    <label for="email">Email :</label>
                    <input type="email" name="email" />

                    <label for="message">Message :</label>
                    <textarea name="message"></textarea>
                    <Button text="Envoyer" type="submit" />
                </form>
            </div>
             {showModal &&(
            <FormModal show={showModal} onClose={closeModal} />
             )}
        </section>
    );
}
