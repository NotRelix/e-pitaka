import { useNavigate } from "react-router-dom";

function SignInForm() {
  const navigate = useNavigate()
  return (
    <>
      <div className="card mb-3 text-center form-container sign-in-form">
        <form>
          <h3>SIGN IN</h3>
          {/* <div className="input-area">
            <label>Your Institution</label>
            <input type="text" className="form-control" />
          </div> */}
          <div className="input-area">
            <label>Your Email Address</label>
            <input type="text" className="form-control" />
          </div>
          <div className="input-area">
            <label>Your Password</label>
            <input type="password" className="form-control" />
          </div>
          <button type="submit" className="sign-in-button" onClick={() => navigate('/e-pitaka/home')}>
            SIGN IN
          </button>
        </form>
      </div>
    </>
  );
}

export default SignInForm;
