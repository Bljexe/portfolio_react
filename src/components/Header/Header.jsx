import "../../assets/header.css";
import Icon from "../../img/icon_andromeda.png";
import Email from "../../img/email.png";
function Header() {
  return (
    <div>
      <div className="header">
        <div className="icon">
          <img src={Icon} alt="Icon" />
        </div>
        <div className="list">
          <ul>
            <a>
              <li>HOME</li>
            </a>
            <a>
              <li>ABOUT</li>
            </a>
            <a>
              <li>CONTACT</li>
            </a>
          </ul>
        </div>
        <div className="mail">
          <a>
            <img src={Email} alt="Email" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
