export default function FormModal({ show, onClose }) {
    if (!show) return null;

    return (
        <div className="container-form-modal" onClick={onClose}>
            <div
                className="modal form-modal"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="modal-content">
                    <p>Votre message a été envoyé avec succès !</p>
                </div>
            </div>
        </div>
    );
}
