import React from "react";
import Navbar from "../components/Navbar";

function Home() {
    return (
        <>
            <div>
                <div className="current_box">
                    <div className="current_inside">
                        <div>
                            <h2>CURRENT BALANCE: </h2><b/>
                            <p className="money_text">₱ 1,000,000.00</p>
                        </div>
                        <div>
                            <button className="inside_hide">
                                <img className="img_hide"src="./src/assets/View_hide.png"></img>
                            </button>
                        </div>
                    </div>
                    
                </div>
                <footer>
                    <div className="foot_style">
                        <div>
                            <center>
                                <button className="contain_box">
                                    <img src="./src/assets/Money.png" alt="Money"></img>
                                    <h2>DEPOSIT</h2>
                                </button>
                            </center>

                        </div>
                        <div>
                            <center>
                                <button className="contain_box">
                                    <img src="./src/assets/Send_fill.png" alt="Send_fill"></img>
                                    <h2>SEND</h2>
                                </button>
                            </center>
                        </div>
                        <div>
                            <center>
                                <button className="contain_box">
                                    <img src="./src/assets/Ticket_alt.png" alt="Ticket_alt"></img>
                         <h2>HISTORY</h2>
                                </button>
                            </center>
                        </div>
                        <div>
                            <center>
                                <button className="contain_box">
                                    <img src="./src/assets/Wallet.png" alt="Wallet"></img>
                                    <h2>SAVINGS</h2>
                                </button>
                                
                            </center>
                        </div>
                    </div>
                </footer>
            </div>
            
           
        </>
    )
}

export default Home