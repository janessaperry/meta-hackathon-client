import ReactModal from "react-modal";
import "./MenuModal.scss";
import FeatureBlock from "../FeatureBlock/FeatureBlock";
import FeatureInline from "../FeatureInline/FeatureInline";
import bookmarkIcon from "../../assets/icons/bookmark_border.svg";
import remixIcon from "../../assets/icons/remix-icon.svg";
import userIcon from "../../assets/icons/user-icon.svg";
import qrCodeIcon from "../../assets/icons/qr-code-icon.svg";
import slidersIcon from "../../assets/icons/sliders-icon.svg";
import reportIcon from "../../assets/icons/report-icon.svg";
import translateIcon from "../../assets/icons/translate-icon.svg";
import notInterestedIcon from "../../assets/icons/not-interested-icon.svg";
import captionIcon from "../../assets/icons/caption-icon.svg";
import infoIcon from "../../assets/icons/info-outline-icon.svg";
import { useNavigate } from "react-router-dom";

function MenuModal({ isOpen, handleCloseModal, postImage }) {
    const navigate = useNavigate();
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
                <div className="modal__features-top">
                    <FeatureBlock
                        iconPath={bookmarkIcon}
                        iconAltText="bookmark border icon"
                        featureText="Save"
                    />
                    <FeatureBlock
                        iconPath={remixIcon}
                        iconAltText="remix icon"
                        featureText="Remix"
                    />
                </div>
                <button
                    className="modal__visual-search-btn"
                    onClick={() => navigate("/result")}
                >
                    <img
                        className="modal__btn-image"
                        src={postImage}
                        alt="post image"
                    />
                    Visual Search
                </button>
                <section className="modal__features-list">
                    <FeatureInline
                        iconPath={userIcon}
                        iconAltText="account border icon"
                        featureText="About this account"
                    />
                    <FeatureInline
                        iconPath={translateIcon}
                        iconAltText="translate icon"
                        featureText="Translations"
                    />
                    <FeatureInline
                        iconPath={captionIcon}
                        iconAltText="closed captions icon"
                        featureText="Closed captions"
                    />
                    <FeatureInline
                        iconPath={qrCodeIcon}
                        iconAltText="qr code icon"
                        featureText="QR code"
                    />
                    <FeatureInline
                        iconPath={infoIcon}
                        iconAltText="account border icon"
                        featureText="Why you're seeing this post"
                    />
                    <FeatureInline
                        iconPath={notInterestedIcon}
                        iconAltText="account border icon"
                        featureText="Not interested"
                    />
                    <FeatureInline
                        iconPath={reportIcon}
                        iconAltText="exclamation mark message bubble icon"
                        featureText="Report"
                    />
                </section>
                <FeatureInline
                    iconPath={slidersIcon}
                    iconAltText="horizontally stacked adjustment sliders icon"
                    featureText="Manage content preferences"
                />
                <hr className="modal__bar modal__bar--bottom" />
            </div>
        </ReactModal>
    );
}

export default MenuModal;
