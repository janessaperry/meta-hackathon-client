import "./Stories.scss";
import avatar from "../../assets/images/stories-images/avatar.png";
import user1 from "../../assets/images/stories-images/user-1.png";
import user2 from "../../assets/images/stories-images/user-2.png";
import user3 from "../../assets/images/stories-images/user-3.png";
import user4 from "../../assets/images/stories-images/user-4.png";



export default function Stories() {
  return (
    <div >
      <ul className="stories__list">
        <li className="stories__item">
          <img src={avatar} alt="user name profile image" className="avatar" />
          <p>Your story</p>
              </li>
              <li className="stories__item">
          <img src={user1} alt="user name profile image" className="avatar" />
          <p>sabanok...</p>
              </li>
              <li className="stories__item">
          <img src={user2} alt="user name profile image" className="avatar" />
          <p>blue_bouy</p>
              </li>
              <li className="stories__item">
          <img src={user3} alt="user name profile image" className="avatar" />
          <p>waggles</p>
              </li>
              <li className="stories__item">
          <img src={user4} alt="user name profile image" className="avatar" />
          <p>steve.loves</p>
              </li>
              
      </ul>
    </div>
  );
}
