import { BrowserRouter, Route, Link, Routes, NavLink } from "react-router-dom";
import userLogo from "../assets/user.png";
import '../styles/Navbar.css'

function Navbar() {
  return (
    <>
      <div className="header">
        <NavLink className="web-logo" to='e-pitaka/'>E-PITAKA</NavLink>
        <div className="header-right">
          <NavLink className="link" to="e-pitaka/help">HELP</NavLink>
          <NavLink className="link" to="e-pitaka/about-us">ABOUT US</NavLink>
          <NavLink className="link" to="e-pitaka/sign-up">SIGN UP</NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbar;
