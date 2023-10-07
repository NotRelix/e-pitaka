import SignInForm from "../components/SignInForm";
import down_arrow from "../assets/down_arrow.svg"
import money from "../assets/money.png"
import send from "../assets/send.png"
import wallet from "../assets/wallet.png"
import '../styles/SignIn.css'

function SignIn() {
  return (
    <div className="sign-in-container">
      <SignInForm />
      <div className="page-header">
        <h1>THE BEST DIGITAL WALLET IN THE WORLD</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id vestibulum ex. </p>
        <img src={down_arrow} className="align-self-center" alt="" />
        <div className="sign-in-icons">
          <div className="sign-in-icon">
            <img src={money} alt="" />
            <label>MONEY</label>
          </div>
          <div className="sign-in-icon">
            <img src={send} alt="" />
            <label>SEND</label>
          </div>
          <div className="sign-in-icon">
            <img src={wallet} alt="" />
            <label>WALLET</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;