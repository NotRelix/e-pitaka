import SignInForm from "../components/SignInForm";
import DownArrow from "../assets/down_arrow.svg"
import Money from "../assets/money.png"
import Send from "../assets/send.png"
import Wallet from "../assets/wallet.png"
import '../styles/SignIn.css'

function SignIn() {
  return (
    <div className="sign-in-container">
      <SignInForm />
      <div className="page-header">
        <h1>THE BEST DIGITAL WALLET IN THE WORLD</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id vestibulum ex. </p>
        <img src={DownArrow} className="align-self-center" alt="" />
        <div className="sign-in-icons">
          <div className="sign-in-icon">
            <img src={Money} alt="" />
            <label>MONEY</label>
          </div>
          <div className="sign-in-icon">
            <img src={Send} alt="" />
            <label>SEND</label>
          </div>
          <div className="sign-in-icon">
            <img src={Wallet} alt="" />
            <label>WALLET</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;