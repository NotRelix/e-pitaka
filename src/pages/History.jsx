import "../styles/History.css";
import closeButton from "../assets/close_ring_light.png";
import { historyData } from "../test/historyData.js";

function History() {
  return (
    <>
      <div className="card history-container">
        <div className="card-header line-color history-title">
          <h1>HISTORY</h1>
          <img src={closeButton} className="close-button" />
        </div>
        <div className="card-body deposit-body">
          <ul class="list-group list-group-flush">
            {historyData.map((transaction) => (
              <li class="list-group-item transaction-container">
                {transaction.type ? (
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1 transaction-value add">
                      + {transaction.value.toLocaleString("en-US", {style:"currency", currency:"PHP"})}
                    </h5>
                    <small>From: Username</small>
                  </div>
                ) : (
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1 transaction-value sub">
                      - {transaction.value.toLocaleString("en-US", {style:"currency", currency:"PHP"})}
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
