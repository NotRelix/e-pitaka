import '../styles/HistoryPopup.css'
import userprofile from '../assets/user_profile.png'
import popupclose from '../assets/Close_round_light.png'

function HistoryPopup({ onClose }) {

    return (
        <>
        <div className="card page-container popup-modal">
            <img src={userprofile} className="user-profile" />
            <img src={popupclose} className='popup-close' onClick={onClose} />
            <div className="popup-section">
            <h3>FULL NAME</h3>
            <h5>USERNAME</h5>
            <h3>₱ amount</h3>
            <h5>You have sent ₱ 650.00 to PERSON SONPER on 10-3-2023 01:43 PM.</h5>
            <h5>Your new balance is ₱ 1,000,000.00.</h5>
          </div>
        </div>
        </>
    )
}

export default HistoryPopup