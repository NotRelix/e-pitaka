import { BrowserRouter, Route, Link, Routes, NavLink } from 'react-router-dom'
import userLogo from '../assets/user.png'

function Navbar() {
  return (
    <>
      <header>
        <h1>E-PITAKA</h1>
        <div className="links">
          <NavLink to="e-pitaka/help">HELP</NavLink>
          <NavLink to="e-pitaka/home">SETTINGS</NavLink>
          <img src={userLogo} alt="User" width="50px" />
        </div>
      </header>
    </>
  );
}

export default Navbar;