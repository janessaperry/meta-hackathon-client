import "./Footer.scss";
import add from "../../assets/images/icons/add-icon.svg";
import search from "../../assets/images/icons/search.png";
import reels from "../../assets/images/icons/reels.png";
import home from "../../assets/images/icons/home.png";
import avatar from "../../assets/images/post-images/avatar-clear.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__list">
        <img src={home} alt="" className="footer__icon" />
        <img src={search} alt="" className="footer__icon" />
        <img src={add} alt="" className="footer__icon" />
        <img src={reels} alt="" className="footer__icon" />
        <div className="footer__avatar-test">
          <img src={avatar} alt="" className="footer__avatar" />
        </div>
      </div>
    </footer>
  );
}
