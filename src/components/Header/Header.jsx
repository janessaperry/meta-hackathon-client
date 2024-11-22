import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import like from "../../assets/images/icons/like.svg";
import add from "../../assets/images/icons/add-icon.svg";
import messanger from "../../assets/images/icons/messanger.svg";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <Link className="logo" to="/">
        <img src={logo} alt="instagram logo" className="logo-image"/>
      </Link>
      <ul className="icons-list">
        <li>
        <img src={like} alt="like icon" className="icon"/>
        </li>
        <li>
        <img src={add} alt="add new icon" className="icon"/>
        </li>
        <li>
        <img src={messanger} alt="messanger icon" className="icon"/>
        </li>
      </ul>
    </header>
  );
}
