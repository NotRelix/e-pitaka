import "../styles/SignIn.css";
import SignInForm from "../components/SignInForm";
import down_arrow from "../assets/down_arrow.svg";
import money from "../assets/money.svg";
import send from "../assets/send.svg";
import wallet from "../assets/wallet.svg";

function SignIn() {
  return (
    <div className="container-fluid sign-in-container">
      <div className="row justify-content-center">
        <div className="col-lg-4 order-1">
          <SignInForm />
        </div>
        <div className="col-lg-7 order-2 info-container">
          <div className="info-header">
            THE BEST DIGITAL WALLET IN THE WORLD
          </div>
          <p className="info-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <img
            src={down_arrow}
            className="down-arrow align-self-center"
            alt=""
          />
          <div className="container text-center sign-in-icons">
            <div className="row justify-content-center">
              <div className="col-4">
                <img src={money} className=" row sign-in-icon" alt="" />
                <small className="icon-label">MONEY</small>
              </div>
              <div className="col-4">
                <img src={send} className="row sign-in-icon" alt="" />
                <small className="icon-label">SEND</small>
              </div>
              <div className="col-4">
                <img src={wallet} className="row sign-in-icon" alt="" />
                <small className="icon-label">SAVE</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
