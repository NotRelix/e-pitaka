import "../styles/Send.css";
import closeButton from "../assets/close_ring_light.png";
import { useNavigate } from "react-router-dom";
import userprofile from '../assets/User_fill.png'

function Send() {
  const navigate = useNavigate();

  const handleCloseClick = () => {
    navigate("/e-pitaka/home");
  };
  return (
    <>
      <div className="card confirm-container">
        <div className="card-header line-color confirm-title">
          <h1>SEND</h1>
          <p></p>
          <img
            src={closeButton}
            className="close-button"
            onClick={handleCloseClick}
          />
        </div>
        <div className="card-body confirm-body">
        <div className="card nested-card">
        </div>
        </div>
      </div>
    </>
  );
}

export default Send;