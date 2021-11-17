import { useState, useEffect } from "react";
import {useHistory} from 'react-router-dom'
import logo from "../assets/images/netlogo.png";
import avatar from "../assets/images/Netflix-avatar.png";
import { logout } from "../scripts/authentication";
import { useAuth } from "../state/AuthProvider";

export default function NavBar() {
  const [isShow, setIsShow] = useState(false);
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
        <img className="nav_avatar" src={avatar} />
      </div>
      <button onClick={onLogout}>Sign Out</button>
    </div>
  );
}
