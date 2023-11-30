import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Settings.css";
import closeButton from "../assets/close_ring_light.png";

function Settings() {
  const navigate = useNavigate();

  const handleCloseClick = () => {
    navigate("/e-pitaka/home");
  };

  return (
    <>
      <div className="card settings-container">
        <div className="card-header line-color">
          <h3>SETTINGS</h3>
          <img
            src={closeButton}
            className="settings-close-button"
            alt="Close"
            onClick={handleCloseClick}
          />
        </div>
        <div className="settings-body">
          <Link onClick="" className="setting-option">
            <img src="../src/assets/Key_alt.png" alt="Change Password" />
            <h4>CHANGE PASSWORD</h4>
          </Link>
          <Link onClick="" className="setting-option">
            <img src="../src/assets/User_fill.png" alt="Account Recovery" />
            <h4>SET <br/> ACCOUNT RECOVERY</h4>
          </Link>
          <Link onClick="" className="setting-option">
            <img src="../src/assets/Bell_pin.png" alt="Notification Settings" />
            <h4>NOTIFICATION <br/> SETTINGS</h4>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Settings;
