import SignInForm from "../components/SignInForm";
import down_arrow from "../assets/down_arrow.svg"
import money from "../assets/money.svg"
import send from "../assets/send.svg"
import wallet from "../assets/wallet.svg"
import '../styles/SignIn.css'

function SignIn() {
  return (
    <div className="container sign-in-container">
      <div className="row">
        <SignInForm />
        <div className="col page-header">
          <h1>THE BEST DIGITAL WALLET IN THE WORLD</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id vestibulum ex. </p>
          <img src={down_arrow} className="down-arrow align-self-center" alt="" />
          <div className="sign-in-icons">
            <div className="icon-container">
              <img src={money} className="sign-in-icon" alt="" />
              <label>MONEY</label>
            </div>
            <div className="icon-container">
              <img src={send} className="sign-in-icon" alt="" />
              <label>SEND</label>
            </div>
            <div className="icon-container">
              <img src={wallet} className="sign-in-icon" alt="" />
              <label>WALLET</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;