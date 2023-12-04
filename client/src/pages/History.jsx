import "../styles/History.css";
import closeButton from "../assets/close_ring_light.png";
import { historyData } from "../test/historyData.js";
import { useNavigate } from "react-router-dom";
import HistoryPopup from "../components/HistoryPopup.jsx";
import { useState } from "react";

function History() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [popUpInfo, setPopUpInfo] = useState({});

  const handleCloseClick = () => {
    navigate("/e-pitaka/home");
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  }

  const handleListItemClick = (transaction) => {
    setPopUpInfo(transaction);
    setShowPopup(!showPopup);
  }

  return (
    <>
    {showPopup && (
      <div className="popup-container">
        <HistoryPopup onClose={handleClosePopup} popUpInfo={popUpInfo} />
      </div>
    )}
      <div className="card history-container">
        <div className="card-header line-color">
          <h3>HISTORY</h3>
          <img
            src={closeButton}
            className="close-button"
            onClick={handleCloseClick}
          />
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush transaction-list">
            {historyData.map((transaction) => (
              <li
                className="list-group-item transaction-container"
                key={transaction.id}
                onClick={() => handleListItemClick(transaction)}
              >
                {transaction.type ? (
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1 transaction-value add">
                      +{" "}
                      {transaction.value.toLocaleString("en-US", {
                        style: "currency",
                        currency: "PHP",
                      })}
                    </h5>
                    <small>From: Username</small>
                  </div>
                ) : (
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1 transaction-value sub">
                      -{" "}
                      {transaction.value.toLocaleString("en-US", {
                        style: "currency",
                        currency: "PHP",
                      })}
                    </h5>
                    <small>To: Username</small>
                  </div>
                )}
                <small>
                  {transaction.date} {transaction.time}
                </small>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default History;
