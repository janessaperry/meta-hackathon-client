import ReactModal from "react-modal";

function MenuModal() {
    return (
        <ReactModal>
            <div className="modal">
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
