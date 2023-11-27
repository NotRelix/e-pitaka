import SignUpForm from "../components/SignUpForm";
import "../styles/SignUp.css";

function SignUp({handleLogin, setUsername}) {
  return (
    <div className="sign-up-container">
      <SignUpForm
        handleLogin={handleLogin}
        setUsername={setUsername}
      />
    </div>
  );
}

export default SignUp;
