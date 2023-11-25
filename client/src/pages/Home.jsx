import React from "react";
import "../styles/Home.css";
import view_hide from "../assets/View_hide.png";
import deposit from "../assets/Money.png";
import send from "../assets/Send_fill.png";
import history from "../assets/Ticket_alt.png";
import savings from "../assets/Wallet.png";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="home-container">
        <div className="current_box">
          <div className="current_inside">
            <div>
              <h2 className="home_text">CURRENT BALANCE: </h2>
              <p className="money_text">₱ 1,000,000.00</p>
            </div>
            <div>
              <button className="inside_hide">
                <img className="img_hide" src={view_hide} alt="View Hide" />
              </button>
            </div>
          </div>
        </div>
        <div>
          <footer className="footer_style">
            <div className="foot_style">
              <button
                className="contain_box"
                onClick={() => navigate("/e-pitaka/deposit")}
              >
                <img className="image_home" src={deposit} alt="Money" />
                <h2 className="home_text">DEPOSIT</h2>
              </button>
              <button
                className="contain_box"
                onClick={() => navigate("/e-pitaka/send")}
              >
                <img className="image_home" src={send} alt="Send Fill" />
                <h2 className="home_text">SEND</h2>
              </button>
              <button
                className="contain_box"
                onClick={() => navigate("/e-pitaka/history")}
              >
                <img className="image_home" src={history} alt="Ticket Alt" />
                <h2 className="home_text">HISTORY</h2>
              </button>
              <button
                className="contain_box"
                onClick={() => navigate("/e-pitaka/savings")}
              >
                <img className="image_home" src={savings} alt="Wallet" />
                <h2 className="home_text">SAVINGS</h2>
              </button>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Home;
