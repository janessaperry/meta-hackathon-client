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
            }}
            // Attach modal to the main.jsx element (with id root)
            appElement={document.getElementById("root")}
        >
            <div className="modal__content-wrapper">
                <hr className="modal__swipe-bar" />
                <div>
                    <div>
                        <img src="" alt="Bookmark icon" />
                    </div>
                    <div>
                        <img src="" alt="Remix icon" />
                    </div>
                </div>
                <button className="modal__visual-search-btn">
                    Visual Search
                </button>
                <section>
                    <div className="modal__function"></div>
                    <div className="modal__function"></div>
                    <div className="modal__function"></div>
                    <div className="modal__function"></div>
                    <div className="modal__function"></div>
                    <div className="modal__function"></div>
                    <div className="modal__function"></div>
                </section>
                <div className="modal__settings"></div>
            </div>
        </ReactModal>
    );
}

export default MenuModal;
