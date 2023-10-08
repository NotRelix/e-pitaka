import React from "react";
import "../styles/Home.css"

function Home() {
    return (
      <>
        <div>
          <div className="current_box">
            <div className="current_inside">
              <div>
                <h2 className="home_text">CURRENT BALANCE: </h2>
                <p className="money_text">₱ 1,000,000.00</p>
              </div>
              <div>
                <button className="inside_hide">
                  <img className="img_hide" src="./src/assets/View_hide.png" alt="View Hide" />
                </button>
              </div>
            </div>
          </div>
          <div>
            <footer className="footer_style">
                <div className="foot_style">
                <button className="contain_box">
                    <img className="image_home" src="./src/assets/Money.png" alt="Money" />
                    <h2 className="home_text">DEPOSIT</h2>
                </button>
                <button className="contain_box">
                    <img className="image_home" src="./src/assets/Send_fill.png" alt="Send Fill" />
                    <h2 className="home_text">SEND</h2>
                </button>
                <button className="contain_box">
                    <img className="image_home" src="./src/assets/Ticket_alt.png" alt="Ticket Alt" />
                    <h2 className="home_text">HISTORY</h2>
                </button>
                <button className="contain_box">
                    <img className="image_home" src="./src/assets/Wallet.png" alt="Wallet" />
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
  