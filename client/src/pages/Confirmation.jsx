import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import closeButton from "../assets/close_ring_light.png";
import userprofile from "../assets/user_profile.png";
import "../styles/Confirmation.css";

function Send() {
  const navigate = useNavigate();
  const location = useLocation();

  const userInfo = location.state;

  const handleCloseClick = () => {
    navigate("/e-pitaka/send");
  };

  useEffect(() => {
    console.log(userInfo) 
  }, [])

  return (
    <>
      <div className="card confirm-container">
        <div className="card-header line-color confirm-title">
          <div>
            <h1>SEND</h1>
            <p>CONFIRM THE DETAILS BELOW:</p>
          </div>
          <img
            src={closeButton}
            className="close-button"
            onClick={handleCloseClick}
          />
        </div>
        <div className="card-body confirm-body">
          <div className="user-details">
            <img src={userprofile} className="user-profile" />
            <h4>FULL NAME</h4>
            <h5>username</h5>
            <h5>You're about to send</h5>
            </div>
          <div className="amount-section">
            <div className="confirm-leftside">
            <h3>AMOUNT</h3>
            <h3>TOTAL AMOUNT TO PAY:</h3>
            </div>
            <div className="confirm-rightside">
            <h3>cash</h3>
            <h3>amount</h3>
            </div>
            </div>
            <p>Confirmed transactions will not be refunded. Please make sure that the details above are correct.</p>
            <div className="button-container">
              <button type="submit" className="next-button" onClick={() => navigate('/e-pitaka/send/receipt')}>
                SEND
              </button>
          </div>
            </div>
        </div>
    </>
  );
}

export default Send;
