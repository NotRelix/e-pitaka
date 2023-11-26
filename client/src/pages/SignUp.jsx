import SignUpForm from "../components/SignUpForm";
import "../styles/SignUp.css";

function SignUp({handleLogin}) {
  return (
    <div className="sign-up-container">
      <SignUpForm handleLogin={handleLogin}/>
    </div>
  );
}

export default SignUp;
