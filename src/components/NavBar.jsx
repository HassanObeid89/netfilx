import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import logo from "../assets/images/netlogo.png";
import avatar from "../assets/images/Netflix-avatar.png";
import { logout } from "../scripts/authentication";
import { useAuth } from "../state/AuthProvider";
import Search from "./Search";

export default function NavBar() {
  const [isShow, setIsShow] = useState(false);
  const [isDrop, setIsDrop] = useState(false);
  //Global state
  const { setIsLogged } = useAuth();
  //Properties
  const location = useHistory();

  //Methods
  async function onLogout() {
    await logout();

    setIsLogged(false);
    location.push("/");
  }
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
        <div className="nav_left">
          <Search />
          <img
            className="nav_avatar"
            onMouseEnter={() => setIsDrop(!isDrop)}
            src={avatar}
          />
          {isDrop && (
            <div onMouseLeave={() => setIsDrop(!isDrop)} className="drop">
              <p>Account</p>
              <p>Help Centre</p>
              <button onClick={onLogout}>Sign out of Netflix</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
