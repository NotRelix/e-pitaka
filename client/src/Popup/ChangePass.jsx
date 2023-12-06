import React from 'react';
import '../styles/ChangePass.css';
import closeButton from "../assets/close_round_light.png";

function ChangePass(props){

    return (props.trigger) ? (
        <>
            <div className="ChangePass-popup">
                <div className="ChangePass-inner">
                    <div>
                        <img
                            src={closeButton}
                            className="changeP-close-btn"
                            alt="Close"
                            onClick={() => props.setTrigger(false)}
                        />
                        {props.children}
                        
                    </div>
                    <div className="changeP-form">
                        <center>
                            <h3>CHANGE PASSWORD</h3>
                        </center>
                        <form>
                            <label htmlFor="CurrentPass">Current Password:</label><br/>
                            <input type="text" id="CurrentPass" name="CurrentPass" className="change-input"></input><br/>
                            <label htmlFor="NewPass">New Password:</label><br/>
                            <input type="text" id="NewPass" name="NewPass" className="change-input"></input><br/>
                            <label htmlFor="RetypePass">Retype New Password:</label><br/>
                            <input type="text" id="RetypePass" name="RetypePass" className="change-input"></input><br/>
                            <center>
                                <button className="change-from-btn">RESET PASSWORD</button>
                            </center>
                        </form>
                    </div>
                </div>
            </div>
        </>
    ) : "";
}

export default ChangePass