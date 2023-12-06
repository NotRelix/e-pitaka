import "../styles/HistoryPopup.css";
import userprofile from "../assets/user_profile.png";
import popupclose from "../assets/Close_round_light.png";

function HistoryPopup({ onClose, popUpInfo }) {
  return (
    <>
      <div className="card page-container popup-modal">
        <img src={userprofile} className="user-profile" />
        <img src={popupclose} className="popup-close" onClick={onClose} />
        <div className="popup-section">
          <h3>Person Sonper</h3>
          <h5>username</h5>
          <h3>
            {popUpInfo.Amount.toLocaleString("en-US", {
              style: "currency",
              currency: "PHP",
            })}
          </h3>
          <h5>
            You have sent {popUpInfo.Amount.toLocaleString("en-US", {
              style: "currency",
              currency: "PHP",
            })} to PERSON SONPER on {popUpInfo.Date} {popUpInfo.time}.
          </h5>
        </div>
      </div>
    </>
  );
}

export default HistoryPopup;
