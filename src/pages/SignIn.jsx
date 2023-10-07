import SignInForm from "../components/SignInForm";
import '../styles/SignIn.css'

function SignIn() {
  return (
      <div className="sign-in-container">
        <SignInForm />
        <div className="page-header">
          <h1>THE BEST DIGITAL WALLET IN THE WORLD</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id vestibulum ex. </p>
        </div>
      </div>
    );
}

export default SignIn;