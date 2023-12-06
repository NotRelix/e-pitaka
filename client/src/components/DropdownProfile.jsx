import React, { useRef, useState } from "react"
import { NavLink } from "react-router-dom"
import "../styles/Navbar.css";
import userLogo from "../assets/user_profile_wh.png";
import axios from "axios";

function DropdownProfile({ handleLogout }) {
    const [open, setOpen] = useState(false)
    const menuRef = useRef();
    const imgRef = useRef();

    window.addEventListener('click', (e) => {
        if (e.target !== menuRef.current && e.target !== imgRef.current) {
            setOpen(false);
        }
    });
    
    const handleLogoutClick = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:3000/logout',
                null, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    }
                }
            )
            if(response.status == 200) {
                console.log('Logout Successfully')
                localStorage.removeItem('token')
                handleLogout()
                console.log(`Token after logout: ${localStorage.getItem('token')}`)
            } else {
                console.error(response.data.message || 'Logout failed')
            }
        } catch (error) {
            console.error('Error during Logout:', error)
        }
    }
    
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
                            <NavLink to="e-pitaka/settings" onClick={() => setOpen(false)} className="profile-link">ACCOUNT SETTINGS</NavLink>
                            <hr />
                            <NavLink to="e-pitaka/" onClick={() => setOpen(false)} className="profile-link">DOCUMENTS</NavLink>
                            <button onClick={handleLogoutClick} className="log-out">Log Out</button>
                        </ul>
                    </div>
                )
            }
        </>
    )
}

export default DropdownProfile;