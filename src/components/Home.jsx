import React from "react";
import userLogo from '../assets/user.png'

function Home() {
    return (
        <>
            <header>
                <h1>E-PITAKA</h1>
                <div className="links">
                    <a href="/">HELP</a>
                    <a href="/">SETTINGS</a>
                    <img src={userLogo} alt="User" width="50px" />
                </div>
            </header>
        </>
    )
}

export default Home