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
          <h3>PERSON SONPER</h3>
          <h5>{popUpInfo.user}</h5>
          <h3>
            {popUpInfo.value.toLocaleString("en-US", {
              style: "currency",
              currency: "PHP",
            })}
          </h3>
          <h5>
            You have sent {popUpInfo.value.toLocaleString("en-US", {
              style: "currency",
              currency: "PHP",
            })} to PERSON SONPER on {popUpInfo.date} {popUpInfo.time}.
          </h5>
          <h5>Your new balance is ₱ 1,000,000.00.</h5>
        </div>
      </div>
    </>
  );
}

export default HistoryPopup;
