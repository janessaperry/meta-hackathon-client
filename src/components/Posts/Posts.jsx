import "./Posts.scss";
import avatar from "../../assets/images/post-images/avatar-clear.png";
import like from "../../assets/images/icons/like-active.png";
import comment from "../../assets/images/icons/comment.png";
import save from "../../assets/images/icons/save.svg";
import share from "../../assets/images/icons/share.png";
import MenuModal from "../MenuModal/MenuModal";
import { useState } from "react";

export default function Posts({ postImage }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const handleMoreIconClick = () => {
        setSelectedImage(postImage);
        setIsOpen(true);
    };
    const handleCloseModal = () => {
        setIsOpen(false);
        setSelectedImage(null);
    };

    return (
        <div className="post">
            {/* Post header */}
            <div className="post__header-container">
                <div className="post__avatar-container">
                    <div className="post__avatar-image-container">
                        <img
                            src={avatar}
                            alt="profile image"
                            className="post__avatar"
                        />
                    </div>
                    <p className="post__profile-name">ruffles</p>
                </div>
                <button
                    className="post__dots"
                    onClick={() => handleMoreIconClick()}
                >
                    <span className="material-icons">more_horiz</span>
                </button>
            </div>
            {/* post image */}
            <img src={postImage} alt="post image" className="post__image" />
            {/* Post actions */}
            <div className="post__actions-container">
                <ul className="post__actions-list">
                    <li className="post__action-item">
                        <img
                            src={like}
                            alt="like icon"
                            className="post__action-icon"
                        />
                        <span className="post__action-count">523</span>
                    </li>
                    <li className="post__action-item">
                        <img
                            src={comment}
                            alt="comment icon"
                            className="post__action-icon"
                        />
                        <span className="post__action-count">89</span>
                    </li>
                    <li className="post__action-item">
                        <img
                            src={share}
                            alt="share icon"
                            className="post__action-icon"
                        />
                        <span className="post__action-count">34</span>
                    </li>
                </ul>
                <img src={save} alt="save icon" className="post__action-icon" />
            </div>
            {/* Post description */}
            <div className="post__description-container">
                <p className="post__description">
                    <span className="post__description-name">ruffles</span>Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor...{" "}
                    <span className="post__description-muted">more</span>
                </p>
                <p className="post__view-all">View all comments</p>
                <p className="post__timestamp">3 days ago</p>
            </div>
            <MenuModal
                isOpen={isOpen}
                handleCloseModal={handleCloseModal}
                postImage={selectedImage}
            />
        </div>
    );
}
