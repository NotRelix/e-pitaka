import { BrowserRouter, Route, Link, Routes, NavLink } from "react-router-dom";
import userLogo from "../assets/user_profile_wh.png";
import "../styles/Navbar.css";

function Navbar({ isLoggedIn }) {
  return (
    <>
      <div className="header">
        <NavLink className="web-logo" to="e-pitaka/">
          E-PITAKA
        </NavLink>
        <div className="header-right">
          <NavLink className="link" to="e-pitaka/help">
            HELP
          </NavLink>
          <NavLink className="link" to="e-pitaka/about-us">
            ABOUT US
          </NavLink>
          {isLoggedIn ? (
            <NavLink className="link">
              <img src={userLogo} alt="User" className="user-profile-pic"/>
            </NavLink>
          ) : (
            <NavLink className="link" to="e-pitaka/sign-up">
              SIGN UP
            </NavLink>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
