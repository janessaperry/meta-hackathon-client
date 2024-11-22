import ReactModal from "react-modal";
import "./MenuModal.scss";

function MenuModal({ isOpen, handleCloseModal }) {
    return (
        <ReactModal
            className="modal"
            isOpen={isOpen}
            onRequestClose={handleCloseModal}
            style={{
                overlay: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    background: "rgba(19, 24, 44, 0.7)",
                },
                content: {
                    backgroundColor: "none",
                    border: "none",
                },
            }}
            // Attach modal to the main.jsx element (with id root)
            appElement={document.getElementById("root")}
        >
            <div className="modal__content-wrapper">
                <hr className="modal__bar modal__bar--top" />
                <div className="modal__features">
                    <article className="feature__save-wrapper">
                        <span class="material-icons">bookmark_border</span>
                        <span className="feature__text feature__text--top">
                            Save
                        </span>
                    </article>

                    <article className="feature__remix-wrapper">
                        <span className="material-icons"></span>
                        <span className="feature__text feature__text--top">
                            Remix
                        </span>
                    </article>
                </div>
                <button className="modal__visual-search-btn">
                    Visual Search
                </button>
                <section className="modal__function-list">
                    <div className="modal__function-item"></div>
                    <div className="modal__function-item"></div>
                    <div className="modal__function-item"></div>
                    <div className="modal__function-item"></div>
                    <div className="modal__function-item"></div>
                    <div className="modal__function-item"></div>
                    <div className="modal__function-item"></div>
                </section>
                <article className="modal__settings"></article>
                <hr className="modal__bar modal__bar--bottom" />
            </div>
        </ReactModal>
    );
}

export default MenuModal;
