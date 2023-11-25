import "../styles/Send.css";
import closeButton from "../assets/close_ring_light.png";
import { useNavigate } from "react-router-dom";

function Send() {
  const navigate = useNavigate();

  const handleCloseClick = () => {
    navigate("/e-pitaka/home");
  };
  return (
    <>
      <div className="card send-container">
        <div className="card-header line-color send-title">
          <h1>SEND</h1>
          <img
            src={closeButton}
            className="close-button"
            onClick={handleCloseClick}
          />
        </div>
        <div className="card-body send-body">
          <form>
            <div className="send-input">
              <label htmlFor="send-to" className="input-label">
                SEND TO:
              </label>
              <input type="text" className="input-box" />
            </div>
            <div className="send-input">
              <label htmlFor="amount" className="input-label">
                AMOUNT:
              </label>
              <input type="text" className="input-box" />
            </div>
            <div className="send-input">
              <label htmlFor="message" className="input-label">
                MESSAGE (Optional):
              </label>
              <textarea rows="8" className="input-box"></textarea>
            </div>
            <div className="button-container">
              <button type="submit" className="next-button" onClick={() => navigate('/e-pitaka/send/confirm')}>
                NEXT
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Send;
