import React, { useRef, useState } from "react"
import { NavLink } from "react-router-dom"
import "../styles/Navbar.css";
import userLogo from "../assets/user_profile_wh.png";

function DropdownProfile({ handleLogout }) {
    const [open, setOpen] = useState(false)
    const menuRef = useRef();
    const imgRef = useRef();

    window.addEventListener('click', (e) => {
        if (e.target !== menuRef.current && e.target !== imgRef.current) {
            setOpen(false);
        }
    });
    return (
        <>
            <img
                ref={imgRef}
                onClick={() => setOpen(!open)}
                src={userLogo} alt="User"
                className="user-profile-pic" />
            {
                open && (
                    <div ref={menuRef} className="card dropdown shadow-lg">
                        <ul>
                            <li onClick={() => setOpen(false)} className="profile-link">ACCOUNT SETTINGS</li>
                            <hr />
                            <li onClick={() => setOpen(false)} className="profile-link">DOCUMENTS</li>
                            <button onClick={handleLogout} className="log-out">Log Out</button>
                        </ul>
                    </div>
                )
            }
        </>
    )
}

export default DropdownProfile;