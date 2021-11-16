import { useState, useEffect } from "react";
import logo from "../assets/images/netlogo.png";
import avatar from "../assets/images/Netflix-avatar.png";
import navShadow from "../assets/images/nav-shadow.png";
export default function NavBar() {
  const [isShow, setIsShow] = useState(false);

  const transitionNavBar = () => {
    window.scrollY > 60 ? setIsShow(true) : setIsShow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);

  return (
    <div className={`nav ${isShow && "nav_black"}`}>
      <div className="nav_content">
        <img className="nav_logo" src={logo} />
        <img className="nav_avatar" src={avatar} />
      </div>
    </div>
  );
}
