import Button from "../button/button";
export default function Contact() {
        
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
                    onSubmit="submit"
                >
                    <input type="hidden" name="form-name" value="portfolioContact" />

                    <label for="name">Nom :</label>
                    <input type="text" name="name" />

                    <label for="email">Email :</label>
                    <input type="email" name="email" />

                    <label for="message">Message :</label>
                    <textarea name="message"></textarea>
                    <Button text="Envoyer" type="submit" />
                </form>
            </div>
        </section>
    );
}
